import { AfuiRoundingTimes } from './afui-rounding-times.model';
import { AfuiSeparationOfTimes } from './afui-separation-of-times.model';

export interface AfuiStructuresInstructions {
  amountOfAircraftInTheStructure: TypeAmountOfAircraftInTheStructure;
  separationOfTimes: AfuiSeparationOfTimes | null;
  roundingTimes: AfuiRoundingTimes | null;
}

export type TypeAmountOfAircraftInTheStructure = 2 | 4 | null;
