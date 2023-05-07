import { StepErrors, DisabledFormStepOptions } from './formStep';

export type OnValueChange<T> = (value: T, forceNextStep?: boolean) => void;

export interface FormStepBaseProps<T> {
  value: T;
  disabledOptions: DisabledFormStepOptions;
  errors: StepErrors;
  onValueChange: OnValueChange<T>;
  getMinValue?: () => number;
  getMaxValue?: () => number;
}
