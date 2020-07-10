'use strict';

const cheerio = require('cheerio');

module.exports = {
  hooks: {
    page: (page) => {
      let $ = cheerio.load(page.content);
      $('head').append(
        $(
          '<style>li.task { list-style: none } li.task > p { display: inline-block; } input[type=checkbox].task { margin: 0 .2em .25em -1.6em; }</style>'
        )
      );
      let $uls = $('ul');
      $uls.each((i, ul) => {
        $(ul).html(replaceDo($(ul).html()));
        $(ul).html(replaceDone($(ul).html()));
      });

      page.content = $.html();
      return page;
    },
  },
};

function replaceDo(str) {
  const regex = /<li>((<p>)?\s?\[ \].*)<\/li>/s;
  if (regex.test(str) === false) return str;
  const replacedStr = str.replace(regex, (...matched) => {
    return (
      '<li class="task"><input type="checkbox" class="task" disabled/>' +
      matched[1].replace(/\s?\[ \]\s?/, '') +
      '</li>'
    );
  });
  return replaceDo(replacedStr);
}

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
