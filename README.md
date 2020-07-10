# honkit-plugin-todo

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
