# Bandung Ice

[![Preview Theme Solid.js Code](/assets/preview-solidjs.png)](https://vscodethemes.com/e/ryanjc.bandung-ice/bandung-ice)
[![Preview Darkest Theme Solid.js Code](/assets/preview-darkest-solidjs.png)](https://vscodethemes.com/e/ryanjc.bandung-ice/bandung-ice-darkest)
[![Preview Light ThemeSolid.js Code](/assets/preview-light-solidjs.png)](https://vscodethemes.com/e/ryanjc.bandung-ice/bandung-ice-light)

[VSCode Theme](https://vscodethemes.com/e/ryanjc.bandung-ice) | [Marketplace](https://marketplace.visualstudio.com/items?itemName=ryanjc.bandung-ice)

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
