export type StepError = string;
export type StepErrors = Array<StepError>;

export type DisabledFormStepOptions = Array<string>;

export interface FormStep<T> {
  value: T;
  name: string;
  disabledOptions: DisabledFormStepOptions;
  validate: () => StepErrors;
  setMaxValue?: (value: number) => void;
  getMinValue?: () => number;
  getMaxValue?: () => number;
}
