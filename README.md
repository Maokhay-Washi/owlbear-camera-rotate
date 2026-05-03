# Owlbear Rodeo Camera Rotate Control

A GitHub-ready Owlbear Rodeo extension scaffold for camera rotation.

## Important limitation

At the moment, **true camera / viewport rotation is not possible through the public Owlbear Rodeo SDK**.

The official viewport API currently exposes:
- viewport position
- viewport scale
- viewport width / height
- point transform helpers
- reset / animate methods

It does **not** expose a viewport rotation value or a `setRotation()`-style API.

Because of that, this repository gives you:
- a working Owlbear Rodeo extension manifest
- a hosted popover UI
- working viewport debug tools
- a reset-view button
- rotation controls already wired in the UI, ready for the day Owlbear adds viewport rotation to the SDK

## Files

- `manifest.json` – Owlbear Rodeo extension manifest
- `index.html` – popover UI
- `main.js` – Owlbear SDK integration
- `styles.css` – styles
- `icon.svg` – extension icon

## Deploy to GitHub Pages

1. Create a new public GitHub repo.
2. Upload all files from this folder to the repo root.
3. In GitHub, open **Settings → Pages**.
4. Set **Source** to deploy from your main branch root.
5. After Pages is live, your install link will be:

```text
https://YOUR-USER.github.io/YOUR-REPO/manifest.json
```

6. In Owlbear Rodeo, add that manifest URL as your extension install link.

## How it behaves right now

- **Rotate Left / Right / 180°**: shows a clear warning that the current SDK does not expose camera rotation.
- **Reset View**: works now using `OBR.viewport.reset()`.
- **Show current viewport transform**: works now.
- **Copy debug info**: works now.

## What to change later if Owlbear adds rotation

In `main.js`, replace `explainRotationLimit()` with a real call to the future viewport rotation API, then refresh the debug display.

## SDK version

This scaffold uses:

```text
@owlbear-rodeo/sdk@3.1.0
```
