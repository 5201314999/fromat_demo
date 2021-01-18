## 格式化代码分析

### vscode 支持basic editing

editor.formatOnSave = true 之后，JavaScript, TypeScript, JSON, and HTML. 本身就会格式化了，问题：其他文件 scss,less 不会

这部分支持手动格式化：　
Format Document (Shift+Alt+F) - Format the entire active file.
Format Selection (Ctrl+K Ctrl+F) - Format the selected text.


### vscode 插件 prettier 

启用 Prettier 插件后，.editorConfig的设置就会失效，读取.prettierrc 文件的设置,支持手动格式化。


### eslint 调用 prettier npm包 

eslint 是检查js 语法的, 代码风格只会影响到js。

不用vscode， 有人认为会拖慢eslint 的编译效率。


### vue 格式化 vetur 插件、Eslint 插件

vetur 会把 vue 中js 值的 '' 变成 "" ，vue 文件代码高亮， vue 文件的格式化 ，开启editor.formatOnSave ，直接使用

插件Eslint编辑器eslint 规则错误时高亮

### 存在的问题，多个插件格式化规则冲突

