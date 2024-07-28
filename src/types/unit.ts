export type unitType = "warrior" | "archer" | "mage";

export type team = number;

export interface UnitPosition {
  type: unitType;
  team: team;
}
