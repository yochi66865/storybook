export interface AfuiSeparationOfTimes {
  typeSeparationOfTimes: TypeSeparationOfTimes;
  separationWindowTime: 5 | 10 | 15 | 20 | 25;
  amountOfBuildingsAtTheSameTime?: number;
}

export type TypeSeparationOfTimes = 'אזורית' | 'מרחבית';
