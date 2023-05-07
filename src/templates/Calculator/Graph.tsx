import React from 'react';
import { useTranslations } from '../../locale';
import { formatNumber } from './utils/formatNumber';

interface GraphProps {
  worthy: number;
  worthyRangePercentage: number;
  minMonthlyFee: number;
  maxMonthlyFee: number;
  minMonthlyFeeRangePercentage: number;
}

export const Graph: React.FC<GraphProps> = ({
  worthy,
  worthyRangePercentage,
  minMonthlyFee,
  maxMonthlyFee,
  minMonthlyFeeRangePercentage,
}) => {
  const t = useTranslations('calculator');

  return (
    <div className="graph-cnt">
      <div className="row graph">
        <div className="two-col">
          <div className="bar-cnt">
            <div className="bar value">
              <div
                style={{
                  gridTemplateRows: `1fr ${worthyRangePercentage || 1}%`,
                }}
              >
                <span>
                  {worthy ? `${formatNumber(worthy)}${t('eurSign')}` : ''}
                </span>
                <div />
              </div>
            </div>
          </div>
          <div className="bar-cnt">
            <div className="bar fee">
              <div
                style={{
                  gridTemplateRows: `1fr ${minMonthlyFeeRangePercentage || 1}%`,
                }}
              >
                {worthy ? (
                  <span>
                    <div>{formatNumber(minMonthlyFee)} -</div>
                    <div>
                      {formatNumber(maxMonthlyFee)}
                      {t('eurSign')}
                    </div>
                  </span>
                ) : (
                  <span />
                )}
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="two-col label">
          <span>{t('graph.worthy')}</span>
          <span>{t('graph.fee')}</span>
        </div>
      </div>
    </div>
  );
};
