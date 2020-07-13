/*!
 * honkit-plugin-todo
 * Copyright(c) 2020 yhor1e
 * MIT Licensed
 */

'use strict';

module.exports = replaceDone;

function replaceDone(str) {
  const regex = /<li>((<p>)?\s?\[x\].*)<\/li>/s;
  if (regex.test(str) === false) return str;
  const replacedStr = str.replace(regex, (...matched) => {
    return (
      '<li class="task"><input type="checkbox" class="task" checked disabled/>' +
      matched[1].replace(/\s?\[x\]\s?/, '') +
      '</li>'
    );
  });
  return replaceDone(replacedStr);
}
