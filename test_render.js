/* node test_render.js — fails loudly if rendering breaks. No deps. */
const assert = require('assert');
const nodes = {};
const stub = sel => ({ id: sel.replace('#',''), innerHTML: '', setAttribute(){}, removeAttribute(){} });
global.window = { addEventListener(){}, scrollTo(){} };
global.location = { hash: '' };
global.document = {
  querySelector: sel => nodes[sel] ||= stub(sel),
  querySelectorAll: () => [],
  addEventListener(){}
};
require('./data.js');
require('./app.js');

const about = nodes['#about'].innerHTML;
assert.match(about, /<strong>Kevin Abate<\/strong>/, 'bold markdown');
assert.match(about, /<a href="https:\/\/github\.com\/martinimarcello00\/SRE-agent"/, 'inline link markdown');
assert.match(about, /mailto:keevinabate@gmail\.com/, 'email');
assert.ok(!/345 tests/.test(about), 'test-count callout removed from bio');
assert.ok(!/\*\*|\]\(/.test(about), 'no unparsed markdown left: ' + about);

const projects = nodes['#projects'].innerHTML;
assert.strictEqual((projects.match(/<li>/g) || []).length, window.DATA.projects.items.length, 'one li per project');
assert.match(projects, /\[<a href="https:\/\/github\.com\/martinimarcello00\/k8s-observability-mcp"[^>]*>mcp<\/a>\]/, 'secondary [mcp] link');
assert.match(projects, /<a href="https:\/\/github\.com\/Keevin16\/DivAid-DIMA"[^>]*>DivAid[^<]*<\/a>/, 'DivAid links to own repo');
const years = [...new Set(window.DATA.projects.items.map(i => i.year))];
for (const y of years) assert.match(projects, new RegExp('<h2>'+y+'</h2>'), 'year heading '+y);

const exp = nodes['#experience'].innerHTML;
assert.strictEqual((exp.match(/<section class="experience-section">/g) || []).length, 3, 'work + education + awards');
assert.match(exp, /<a href="https:\/\/necst\.it\/"[^>]*>NECSTLab<\/a>/, 'NECSTLab links out');
assert.match(exp, /<a href="https:\/\/gdgaihack\.com\/"[^>]*>Google Developer Group PoliMi<\/a>/, 'GDG links out');
assert.match(exp, /Lead — GDG AI Hackathon/, 'GDG role updated to Lead');
assert.match(exp, /Informatica A/, 'current TA course');
assert.match(exp, /Sep 2025 — Dec 2026/, 'TA end date updated');

assert.match(nodes['#skills'].innerHTML, /LangGraph/, 'skills rendered');

const footer = nodes['footer'].innerHTML;
assert.match(footer, /href="assets\/Kevin_Abate_Resume\.pdf"/, 'relative CV url survives safeURL');
assert.ok(!/href="#"/.test(footer), 'no url got sanitised to #');

assert.strictEqual(document.title, 'Kevin Abate · About');
console.log('all checks passed');
