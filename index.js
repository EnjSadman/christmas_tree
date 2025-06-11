function main() {
  const widthInput = document.getElementById("tree_width");
  const heightInput = document.getElementById("tree_height");

  const treePreElement = document.getElementById("tree");

  const width = Math.max(1, parseInt(widthInput.value, 10) || 1);
  const height = Math.max(1, parseInt(heightInput.value, 10) || 1);

  const board = new DrawBoard(width, height, treePreElement);

  widthInput.addEventListener("input", (e) =>
    board.setWidth(Number(e.target.value) || 1)
  );
  heightInput.addEventListener("input", (e) =>
    board.setHeight(Number(e.target.value) || 1)
  );

  board.draw();
}

class DrawBoard {
  constructor(height, width, mainElement) {
    (this.height = height),
      (this.width = width),
      (this.mainElement = mainElement);
    this.mode = "square";
  }

  changeMode(newMode) {
    this.mode = newMode;

    switch (newMode) {
      default:
        console.warn(`such mode as ${newMode} not exists`);
        break;
    }
  }

  setHeight(newHeight) {
    this.height = newHeight;
    this.draw();
  }

  setWidth(newWidth) {
    this.width = newWidth;
    this.draw();
  }

  draw() {
    let asciiArt = "";

    if (this.width === 1 && this.height === 1) {
      asciiArt = "_";
    } else if (this.width === 1) {
      for (let i = 0; i < this.height; i++) {
        asciiArt += "|\n";
      }
    } else if (this.height === 1) {
      for (let j = 0; j < this.width; j++) {
        asciiArt += "_";
      }
    } else {
      for (let j = 0; j < this.width; j++) {
        asciiArt += "_";
      }
      asciiArt += "\n";

      for (let i = 1; i < this.height - 1; i++) {
        asciiArt += "|";
        for (let j = 1; j < this.width - 1; j++) {
          asciiArt += " ";
        }
        asciiArt += "|\n";
      }
      for (let j = 0; j < this.width; j++) {
        asciiArt += "_";
      }
    }
    this.mainElement.textContent = asciiArt;
  }
}

main();
