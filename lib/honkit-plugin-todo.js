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
  website: {
    assets: './css',
    css: ['website.css'],
  },
  ebook: {
    assets: './css',
    css: ['ebook.css'],
  },
  hooks: {
    page: (page) => {
      let $ = cheerio.load(page.content);
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
