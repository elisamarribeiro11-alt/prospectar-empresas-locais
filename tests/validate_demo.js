// Checks the actual inline demo script with a minimal DOM simulation.
// This does not validate browser layout, accessibility or rendering.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync(path.join(__dirname, 'demo-v3.html'), 'utf8');
assert.match(html, /Demonstração não oficial/);
assert.match(html, /#073F2D/i);
assert.doesNotMatch(html, /<(?:form|iframe|img)\b|(?:href|src|action)\s*=/i);
assert.doesNotMatch(html, /fetch\s*\(|XMLHttpRequest|localStorage|wa\.me/);
const buttons = [...html.matchAll(/data-item="([^"]+)"/g)].map((match) => ({
  dataset: { item: match[1] },
  attributes: { 'aria-pressed': 'false' },
  listeners: {},
  setAttribute(key, value) { this.attributes[key] = value; },
  addEventListener(event, callback) { this.listeners[event] = callback; },
  click() { this.listeners.click(); },
}));
assert.deepEqual(buttons.map((b) => b.dataset.item), ['Marmita de frango', 'Marmita de carne']);
const message = { textContent: '' };
const document = {
  querySelectorAll(selector) {
    assert.equal(selector, '[data-item]');
    return buttons;
  },
  querySelector(selector) {
    assert.equal(selector, '#message');
    return message;
  },
};
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
assert.equal(scripts.length, 1);
vm.runInNewContext(scripts[0][1], { document }, { timeout: 1000 });
for (const button of buttons) {
  button.click();
  assert.ok(message.textContent.includes(button.dataset.item.toLowerCase()));
  assert.match(message.textContent, /consultar preço e disponibilidade/);
  assert.equal(buttons.filter((b) => b.attributes['aria-pressed'] === 'true').length, 1);
  assert.equal(button.attributes['aria-pressed'], 'true');
}
console.log('PASS: real inline script selects both products exclusively; demo has no external destinations. DOM simulation only.');
