/*!
 * honkit-plugin-todo
 * Copyright(c) 2020 yhor1e
 * MIT Licensed
 */

'use strict';

const cheerio = require('cheerio');
const replaceTodo = require('./replace-todo');
const replaceDone = require('./replace-done');

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
        $(ul).html(replaceTodo($(ul).html()));
        $(ul).html(replaceDone($(ul).html()));
      });

      page.content = $.html();
      return page;
    },
  },
};
