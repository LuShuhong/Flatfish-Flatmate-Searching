const FIRST_INDEX: number = 0,
  SECOND_INDEX: number = 1;

export const ageIsValid = (ageRange: number[]): boolean => {
  return ageRange[SECOND_INDEX] >= ageRange[FIRST_INDEX];
};

export const budgetIsValid = (budgetRange: number[]): boolean => {
  return budgetRange[SECOND_INDEX] >= budgetRange[FIRST_INDEX];
};

export const locationIsValid = (location: string[]): boolean => {
  return location[0] !== "" && location.length >= 1;
};
