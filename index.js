function main() {
  const widthInput = document.getElementById("tree_width");
  const heightInput = document.getElementById("tree_height");
  const treePreElement = document.getElementById("tree");

  const width = Math.max(1, parseInt(widthInput.value, 10) || 1);
  const height = Math.max(1, parseInt(heightInput.value, 10) || 1);

  let asciiArt = "";

  if (width === 1 && height === 1) {
    asciiArt = "_";
  } else if (width === 1) {
    for (let i = 0; i < height; i++) {
      asciiArt += "|\n";
    }
  } else if (height === 1) {
    for (let j = 0; j < width; j++) {
      asciiArt += "_";
    }
  } else {
    for (let j = 0; j < width; j++) {
      asciiArt += "_";
    }
    asciiArt += "\n";

    for (let i = 1; i < height - 1; i++) {
      asciiArt += "|";
      for (let j = 1; j < width - 1; j++) {
        asciiArt += " ";
      }
      asciiArt += "|\n";
    }
    for (let j = 0; j < width; j++) {
      asciiArt += "_";
    }
  }
  treePreElement.textContent = asciiArt;
}

main();
