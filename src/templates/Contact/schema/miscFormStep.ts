import { FormStep, DisabledFormStepOptions } from '../formStep';
import { YesNoValue } from './yesNoValue';

export interface MiscValue {
  asbest: YesNoValue;
  leaseHold: YesNoValue;
  monumentProtection: YesNoValue;
}

export class MiscFormStep implements FormStep<MiscValue> {
  constructor(value?: MiscValue) {
    this.value = value || {
      asbest: null,
      leaseHold: null,
      monumentProtection: null,
    };
    this.disabledOptions = [];
    this.name = 'misc';
  }

  public value: MiscValue;

  public name: string;

  public disabledOptions: DisabledFormStepOptions;

  validate() {
    return new Array<string>()
      .concat(...(!this.value.asbest ? ['asbest'] : []))
      .concat(...(!this.value.leaseHold ? ['leaseHold'] : []))
      .concat(
        ...(!this.value.monumentProtection ? ['monumentProtection'] : [])
      );
  }
}
