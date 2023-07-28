import { AfuiRoundingTimes } from '../models/afui-rounding-times.model';
import { AfuiSeparationOfTimes } from '../models/afui-separation-of-times.model';
import { AfuiStructuresInstructions } from '../models/afui-structures.model';

export const initialSeparationOfTimes: AfuiSeparationOfTimes = {
  typeSeparationOfTimes: null,
  separationWindowTime: null,
  amountOfBuildingsAtTheSameTime: null,
};

export const initialRoundingTimes: AfuiRoundingTimes = {
  typeSeparationOfTimes: null,
  timeToRounding: null,
};

export const initialStructuresInstructions: AfuiStructuresInstructions = {
  amountOfAircraftInTheStructure: null,
  separationOfTimes: {
    separationWindowTime: null,
    typeSeparationOfTimes: null,
    amountOfBuildingsAtTheSameTime: null
  },
  roundingTimes: {
    timeToRounding: null,
    typeSeparationOfTimes: null,
  },
};
