'use strict';

module.exports = replaceTodo;

function replaceTodo(str) {
  const regex = /<li>((<p>)?\s?\[ \].*)<\/li>/s;
  if (regex.test(str) === false) return str;
  const replacedStr = str.replace(regex, (...matched) => {
    return (
      '<li class="task"><input type="checkbox" class="task" disabled/>' +
      matched[1].replace(/\s?\[ \]\s?/, '') +
      '</li>'
    );
  });
  return replaceTodo(replacedStr);
}
