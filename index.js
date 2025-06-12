function main() {
  const widthInput = document.getElementById("tree_width");
  const heightInput = document.getElementById("tree_height");

  const treeContainer = document.getElementById("tree_container");

  const width = Math.max(1, parseInt(widthInput.value, 10) || 1);
  const height = Math.max(1, parseInt(heightInput.value, 10) || 1);

  const board = new DrawBoard(width, height, treeContainer);

  widthInput.addEventListener("input", (e) =>
    board.setWidth(Number(e.target.value) || 1)
  );
  heightInput.addEventListener("input", (e) =>
    board.setHeight(Number(e.target.value) || 1)
  );

  board.prepareContainer();
  board.draw();
}

class DrawBoard {
  constructor(height, width, mainElement) {
    (this.height = height),
      (this.width = width),
      (this.mainElement = mainElement);
    this.mode = "triangle";
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

  prepareContainer() {
    for (let i = 0; i < this.height; i++) {
      const newPre = document.createElement("pre");
      newPre.id = `pre_${i}`;
      this.mainElement.appendChild(newPre);
    }
  }

  draw() {
    switch (this.mode) {
      case "triangle": {
        console.log("making triangle");
        let firstSymbolPosition = this.width / 2 - 1;
        let secondSymbolPosition = this.width / 2;
        for (let i = 0; i < this.height / 2; i++) {
          const line = document.getElementById(`pre_${i}`);
          let asciiArt = "";

          for (let j = 0; j < this.width; j++) {
            if (j === firstSymbolPosition && i + 1 !== this.height) {
              asciiArt += "/";
            } else if (j === secondSymbolPosition && i + 1 !== this.height) {
              asciiArt += "\\";
            } else if (i + 1 !== this.height / 2) {
              asciiArt += " ";
            } else {
              asciiArt += "_";
            }
          }

          firstSymbolPosition--;

          secondSymbolPosition++;

          line.innerHTML = asciiArt;
        }
        break;
      }
      default: {
        console.log("making square");
        for (let i = 0; i < this.height; i++) {
          const line = document.getElementById(`pre_${i}`);
          let asciiArt = "";
          for (let j = 0; j < this.width; j++) {
            if (i === 0 || i === this.height - 1) {
              asciiArt += "_";
            } else {
              if (j === 0 || j === this.width - 1) {
                asciiArt += "|";
              } else {
                asciiArt += " ";
              }
            }
          }
          line.innerHTML = asciiArt;
        }
      }
    }
    this.mainElement.textContent = asciiArt;
  }
}

main();
