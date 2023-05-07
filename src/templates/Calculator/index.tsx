import React from 'react';
import { useTranslations } from '../../locale';
import { ButtonsBar } from './ButtonsBar';
import { Graph } from './Graph';
import { Options } from './Options';
import { useCalculator } from './useCalculator';

interface CalculatorProps {
  title: string;
  showOptionsTitle: boolean;
}

const Calculator: React.FC<CalculatorProps> = ({ title, showOptionsTitle }) => {
  const {
    worthy,
    worthyIncrement,
    maxWorthy,
    minMonthlyFee,
    maxMonthlyFee,
    worthyRangePercentage,
    minMonthlyFeeRangePercentage,
    onWorthyChange,
  } = useCalculator(250000);

  const t = useTranslations('calculator');

  return (
    <section id="calculator" className="mx-auto px-4 sm:px-6 pb-24">
      <div className="calc">
        <h3>{title}</h3>
        <div className="body">
          <div className="left">
            <Options
              worthy={worthy}
              maxWorthy={maxWorthy}
              worthyIncrement={worthyIncrement}
              minFee={minMonthlyFee}
              maxFee={maxMonthlyFee}
              showTitle={showOptionsTitle}
              onWorthyChange={onWorthyChange}
            />
          </div>
          <div className="right">
            <Graph
              worthy={worthy}
              worthyRangePercentage={worthyRangePercentage}
              minMonthlyFee={minMonthlyFee}
              maxMonthlyFee={maxMonthlyFee}
              minMonthlyFeeRangePercentage={minMonthlyFeeRangePercentage}
            />
          </div>
        </div>
        <div className="mb">
          <ButtonsBar />
        </div>
        <div className="footer">*{t('footnote')}</div>
      </div>
    </section>
  );
};

export default Calculator;
