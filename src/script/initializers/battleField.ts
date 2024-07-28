const height = 5;
const width = 15;

export default function createBattleField(): void {
  const battlefield = document.getElementById("battlefield");

  for (let i = 0; i < height; i++) {
    const row = document.createElement("div");

    row.className = "battlefield_row";
    row.id = `${i}`;

    for (let j = 0; j < width; j++) {
      const cell = document.createElement("div");
      cell.className = "battlefield_cell";
      cell.id = `${j}`;

      row.appendChild(cell);
    }

    battlefield.appendChild(row);
  }

  console.log("Hello World", "ban", battlefield);
}
