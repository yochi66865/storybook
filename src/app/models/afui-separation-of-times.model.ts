import { TypeSeparationOfTimes } from './afui-type-separation-of-times';

export interface AfuiSeparationOfTimes {
  typeSeparationOfTimes: TypeSeparationOfTimes | null;
  separationWindowTime: 5 | 10 | 15 | 20 | 25 | null;
  amountOfBuildingsAtTheSameTime?: number | null;
}
