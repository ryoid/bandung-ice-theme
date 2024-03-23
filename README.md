# bandung-ice README

[VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=ryanjc.bandung-ice)

[Preview VSCode Webview](https://vscode.dev/editor/theme/ryanjc.bandung-ice/Bandung%20Ice)

## Development

```bash
npm install -g @vscode/vsce

vsce package
# myExtension.vsix generated
code --install-extension <...>.vsix
```

### Publishing

```bash
# https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token
vsce login <publisher_id>

vsce publish
# <publisher id>.myExtension published to VS Code Marketplace
```

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

- Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
- Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
- Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
