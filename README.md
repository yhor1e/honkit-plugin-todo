# honkit-plugin-todo

[![npm version](https://badge.fury.io/js/honkit-plugin-todo.svg)](https://badge.fury.io/js/honkit-plugin-todo)
![Node.js CI](https://github.com/yhor1e/honkit-plugin-todo/workflows/Node.js%20CI/badge.svg)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/yhor1e/honkit-plugin-todo.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/yhor1e/honkit-plugin-todo/context:javascript)

This is [HonKit](https://github.com/honkit/honkit) todo plugin.

This markdown will be

```
- [x] todo1
- [ ] todo2
  - [x] todo2-1
    - [ ] todo2-1-1
- [ ] todo3
```

HTML like [GFM Task list items](https://github.github.com/gfm/#task-list-items-extension-).

![picture of todo on html](./after.png)

## usage

### install

```
$ npm install -D honkit-plugin-todo
```

### setting

`book.json`

```json
{
  "plugins": ["todo"]
}
```

If you don't have `book.json`, please read [HonKit Directory Structure](https://honkit.netlify.app/structure.html) and [HonKit Configuration](https://honkit.netlify.app/config.html).
