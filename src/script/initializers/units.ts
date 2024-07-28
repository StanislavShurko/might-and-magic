import { UnitPosition } from "../../types/unit.js";
import env from "../../env.js";

const { mageType, archerType, warriorType } = env.variables;

const unitPositions: { [key: string]: UnitPosition } = {
  "1-0": { type: mageType, team: 1 },
  "3-0": { type: mageType, team: 1 },
  "0-1": { type: archerType, team: 1 },
  "2-1": { type: archerType, team: 1 },
  "4-1": { type: archerType, team: 1 },
  "0-2": { type: warriorType, team: 1 },
  "1-2": { type: warriorType, team: 1 },
  "2-2": { type: warriorType, team: 1 },
  "3-2": { type: warriorType, team: 1 },
  "4-2": { type: warriorType, team: 1 },

  "1-14": { type: mageType, team: 2 },
  "3-14": { type: mageType, team: 2 },
  "0-13": { type: archerType, team: 2 },
  "2-13": { type: archerType, team: 2 },
  "4-13": { type: archerType, team: 2 },
  "0-12": { type: warriorType, team: 2 },
  "1-12": { type: warriorType, team: 2 },
  "2-12": { type: warriorType, team: 2 },
  "3-12": { type: warriorType, team: 2 },
  "4-12": { type: warriorType, team: 2 },
};

export default function initializeUnits() {
  Object.entries(unitPositions).forEach(([key, position]) => {
    const unit = document.createElement("div");

    unit.className = position.type + "-" + position.team;

    document.querySelector(`#cell-${key}`).appendChild(unit);
  });
}
