const replaceTodo = require('../lib/replace-todo.js');

test('<li>[ ] todo</li> is replaced', () => {
  const str = `<ul><li>not todo</li><li>[ ] todo</li><li>not todo</li></ul>`;
  expect(replaceTodo(str)).toBe(
    `<ul><li>not todo</li><li class="task"><input type="checkbox" class="task" disabled/>todo</li><li>not todo</li></ul>`
  );
});

test('<li><p>[ ] todo</p></li> is replaced', () => {
  const str = `<ul><li><p>[ ] todo</p></li></ul>`;
  expect(replaceTodo(str)).toBe(
    `<ul><li class="task"><input type="checkbox" class="task" disabled/><p>todo</p></li></ul>`
  );
});

test('<li>[ ] todo <a href="https://github.com/yhor1e/honkit-plugin-todo">honkit-plugin-todo</a></li> is replaced', () => {
  const str = `<ul><li>[ ] todo <a href="https://github.com/yhor1e/honkit-plugin-todo">honkit-plugin-todo</a></li></ul>`;
  expect(replaceTodo(str)).toBe(
    `<ul><li class="task"><input type="checkbox" class="task" disabled/>todo <a href="https://github.com/yhor1e/honkit-plugin-todo">honkit-plugin-todo</a></li></ul>`
  );
});

test('Nested <li>[ ] todo</li> is replaced', () => {
  const str = `<ul><li>[ ] todo1<ul><li>[ ] todo1-1</li></ul></li></ul>`;
  expect(replaceTodo(str)).toBe(
    `<ul><li class="task"><input type="checkbox" class="task" disabled/>todo1<ul><li class="task"><input type="checkbox" class="task" disabled/>todo1-1</li></ul></li></ul>`
  );
});
