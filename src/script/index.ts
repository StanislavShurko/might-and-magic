import createBattleField from "./initializers/battleField.js";
import initializeUnits from "./initializers/units.js";

function initialize() {
  console.log("initializing...");
  createBattleField();
  initializeUnits();
  console.log("initialized");
}

initialize();
