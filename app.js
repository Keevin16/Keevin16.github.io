(() => {
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeURL = value => /^(https?:\/\/|mailto:|#|\.?\/(?!\/)|[\w.-]+\/)/i.test(value || '') ? value : '#';
  const link = (url, label, external = true) => '<a href="'+escape(safeURL(url))+'"'+(external ? ' target="_blank" rel="noopener noreferrer"' : '')+'>'+escape(label)+'</a>';

  // **bold** and [label](url) inside bio paragraphs
  function inline(text) {
    return String(text).split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map(part => {
      if (part.startsWith('**') && part.endsWith('**')) return '<strong>'+escape(part.slice(2,-2))+'</strong>';
      const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      return match ? link(match[2],match[1]) : escape(part);
    }).join('');
  }

  const names = {about:'About', projects:'Projects', experience:'Experience', skills:'Skills'};
  const data = window.DATA, profile = data.profile;

  const row = item => '<li><span class="experience-date">'+escape(item.when)+'</span><div><strong>'+(item.url ? link(item.url,item.where) : escape(item.where))+'</strong><p>'+escape(item.role)+'</p></div></li>';
  const section = (title, body) => '<section class="experience-section"><h2>'+escape(title)+'</h2>'+body+'</section>';

  function showView() {
    const route = location.hash.slice(1);
    if (route === 'main') return;
    const current = names[route] ? route : 'about';
    for (const view of document.querySelectorAll('.view')) view.hidden = view.id !== current;
    for (const anchor of document.querySelectorAll('header nav a')) {
      if (anchor.hash === '#'+current) anchor.setAttribute('aria-current','page');
      else anchor.removeAttribute('aria-current');
    }
    document.title = profile.name+' · '+names[current];
    window.scrollTo({top:0,behavior:'instant'});
  }

  document.querySelector('#about').innerHTML =
    '<div class="bio"><img class="portrait" src="'+escape(safeURL(data.about.portrait))+'" width="108" height="144" alt="'+escape(profile.name)+'">'+
    data.about.paragraphs.map(p => '<p>'+inline(p)+'</p>').join('')+
    '</div><p class="email">Email: '+link('mailto:'+profile.email, profile.email, false)+'</p>';

  function projectItem(item) {
    const title = (item.url ? link(item.url,item.name) : '<strong>'+escape(item.name)+'</strong>')+
      (item.status ? ' <span class="status">'+escape(item.status)+'</span>' : '');
    const extras = ['code','mcp','paper','post'].filter(key => item[key]).map(key => '['+link(item[key],key)+']');
    if (item.note) extras.push(inline(item.note));
    const image = item.image ? '<figure class="project-image">'+
      (item.url ? '<a href="'+escape(safeURL(item.url))+'" target="_blank" rel="noopener noreferrer" tabindex="-1">' : '')+
      '<img src="'+escape(safeURL(item.image))+'" alt="'+escape(item.imageAlt || item.name)+'" loading="lazy" decoding="async">'+
      (item.url ? '</a>' : '')+'</figure>' : '';
    return '<li><div>'+title+' <span class="secondary-links">'+extras.join(' ')+'</span></div><p>'+escape(item.description)+'</p>'+image+'</li>';
  }
  // group by year, newest first — robust to any item order in data.js
  const projectYears = [...new Set(data.projects.items.map(i => i.year))].sort((a,b) => b-a);
  document.querySelector('#projects').innerHTML = '<h1>Projects</h1>'+
    projectYears.map(year => section(String(year),
      '<ul class="project-list">'+data.projects.items.filter(i => i.year === year).map(projectItem).join('')+'</ul>'
    )).join('');

  document.querySelector('#experience').innerHTML = '<h1>Experience</h1>'+
    section('Work & Teaching', '<ul class="experience-list">'+data.experience.work.map(row).join('')+'</ul>')+
    section('Education', '<ul class="experience-list">'+data.experience.education.map(row).join('')+'</ul>')+
    section('Awards', '<ul class="service-list">'+data.experience.awards.map(a => '<li>'+escape(a)+'</li>').join('')+'</ul>');

  document.querySelector('#skills').innerHTML = '<h1>Skills</h1><ul class="experience-list">'+
    data.skills.groups.map(g => '<li><span class="experience-date">'+escape(g.name)+'</span><div>'+escape(g.items)+'</div></li>').join('')+'</ul>';

  document.querySelector('footer').innerHTML = [['githubUrl','GitHub'],['linkedinUrl','LinkedIn'],['resumeUrl','CV']]
    .filter(([key]) => profile[key]).map(([key,label]) => link(profile[key],label)).join('');

  window.addEventListener('hashchange', showView);
  document.addEventListener('click', event => {
    const anchor = event.target.closest('header a[href^="#"]');
    if (anchor && names[anchor.hash.slice(1)] && location.hash === anchor.hash) { event.preventDefault(); showView(); }
  });
  showView();
})();
