import { useState } from 'react';

interface UseCalculatorResult {
  worthy: number;
  worthyIncrement: number;
  maxWorthy: number;
  minMonthlyFee: number;
  maxMonthlyFee: number;
  worthyRangePercentage: number;
  minMonthlyFeeRangePercentage: number;
  onWorthyChange: (value: number) => void;
}

const MAX_WORTHY = 1250000;
const WORTHY_INCREMENT = 25000;
const YEARLY_FEE_MIN_INDEX = 0.028;
const YEARLY_FEE_MAX_INDEX = 0.04;

export const useCalculator = (defaultValue: number): UseCalculatorResult => {
  const [worthy, setWorthy] = useState<number>(defaultValue);

  const onWorthyChange = (value: number) => {
    if (value < 0 || value > MAX_WORTHY) {
      throw Error('Invalid worthy value');
    }
    setWorthy(value);
  };

  const minYearlyFee = YEARLY_FEE_MIN_INDEX * worthy;
  const maxYearlyFee = YEARLY_FEE_MAX_INDEX * worthy;

  // logarithmic
  const worthyRangePercentage = worthy
    ? Math.round((Math.log(worthy) / Math.log(MAX_WORTHY)) * 100)
    : 0;
  const minMonthlyFeeRangePercentage = minYearlyFee
    ? Math.round(
        ((Math.log(minYearlyFee / 12) / Math.log(MAX_WORTHY)) * 100) / 10
      )
    : 0;

  return {
    maxWorthy: MAX_WORTHY,
    worthy,
    worthyIncrement: WORTHY_INCREMENT,
    minMonthlyFee: Math.round(minYearlyFee / 12),
    maxMonthlyFee: Math.round(maxYearlyFee / 12),
    worthyRangePercentage,
    minMonthlyFeeRangePercentage,
    onWorthyChange,
  };
};
