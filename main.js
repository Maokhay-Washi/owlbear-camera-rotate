function rotateSelected(angle) {
  if (!window.OBR) return;

  OBR.scene.items.getItems().then(items => {
    const selected = items.filter(i => i.selected);

    selected.forEach(item => {
      OBR.scene.items.updateItems([item], (updates) => {
        for (const u of updates) {
          u.rotation = (u.rotation ?? 0) + angle;
        }
      });
    });
  });
}

function resetRotation() {
  if (!window.OBR) return;

  OBR.scene.items.getItems().then(items => {
    const selected = items.filter(i => i.selected);

    selected.forEach(item => {
      OBR.scene.items.updateItems([item], (updates) => {
        for (const u of updates) {
          u.rotation = 0;
        }
      });
    });
  });
}

window.rotateSelected = rotateSelected;
window.resetRotation = resetRotation;
