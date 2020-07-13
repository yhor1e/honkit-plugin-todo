const replaceDone = require('../lib/replace-done.js');

test('<li>[x] todo</li> is replaced', () => {
  const str = `<ul><li>not todo</li><li>[x] todo</li><li>not todo</li></ul>`;
  expect(replaceDone(str)).toBe(
    `<ul><li>not todo</li><li class="task"><input type="checkbox" class="task" checked disabled/>todo</li><li>not todo</li></ul>`
  );
});

test('<li><p>[x] todo</p></li> is replaced', () => {
  const str = `<ul><li><p>[x] todo</p></li></ul>`;
  expect(replaceDone(str)).toBe(
    `<ul><li class="task"><input type="checkbox" class="task" checked disabled/><p>todo</p></li></ul>`
  );
});

test('<li>[x] todo <a href="https://github.com/yhor1e/honkit-plugin-todo">honkit-plugin-todo</a></li> is replaced', () => {
  const str = `<ul><li>[x] todo <a href="https://github.com/yhor1e/honkit-plugin-todo">honkit-plugin-todo</a></li></ul>`;
  expect(replaceDone(str)).toBe(
    `<ul><li class="task"><input type="checkbox" class="task" checked disabled/>todo <a href="https://github.com/yhor1e/honkit-plugin-todo">honkit-plugin-todo</a></li></ul>`
  );
});

test('Nested <li>[x] todo</li> is replaced', () => {
  const str = `<ul><li>[x] todo1<ul><li>[x] todo1-1</li></ul></li></ul>`;
  expect(replaceDone(str)).toBe(
    `<ul><li class="task"><input type="checkbox" class="task" checked disabled/>todo1<ul><li class="task"><input type="checkbox" class="task" checked disabled/>todo1-1</li></ul></li></ul>`
  );
});
