import { FormStep, DisabledFormStepOptions, StepErrors } from '../formStep';
import { getFormStepValueFromSchema } from './utils/getFormStepValueFromSchema';

export interface ContactInformationValue {
  salutation: string | null;
  firstName: string | null;
  lastName: string | null;
  dateOfBirth: string | null;
  numberOfChildren: string | null;
  maritalStatus: string | null;
  partnerDateOfBirth: string | null;
  email: string | null;
  tel: string | null;
  street: string | null;
  houseNumber: string | null;
  zipCode: string | null;
  city: string | null;
  comment: string | null;
  receiveInformationViaPostAndEmail: boolean;
  receiveInformationViaEmail: boolean;
  subscribeToNewsLetter: boolean;
}

const isValidEmail = (email: string | null): boolean =>
  !!email &&
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

export class ContactInformationFormStep
  implements FormStep<ContactInformationValue>
{
  public static fromSchema(
    schema: Array<any> | null
  ): ContactInformationFormStep {
    const contactInformationValue =
      getFormStepValueFromSchema<ContactInformationValue>(
        'contactInformation',
        schema
      );
    if (contactInformationValue) {
      return new ContactInformationFormStep(contactInformationValue);
    }

    return new ContactInformationFormStep();
  }

  private constructor(value?: ContactInformationValue) {
    this.value = value || {
      salutation: null,
      firstName: null,
      lastName: null,
      dateOfBirth: null,
      numberOfChildren: null,
      maritalStatus: null,
      partnerDateOfBirth: null,
      email: null,
      tel: null,
      street: null,
      houseNumber: null,
      zipCode: null,
      city: null,
      comment: null,
      receiveInformationViaPostAndEmail: true,
      receiveInformationViaEmail: false,
      subscribeToNewsLetter: false,
    };
    this.disabledOptions = ['partnerDateOfBirth'];
    this.name = 'contactInformation';
  }

  public value: ContactInformationValue;

  public name: string;

  public disabledOptions: DisabledFormStepOptions;

  validate() {
    const errors: StepErrors = [];
    if (!this.value.firstName) {
      errors.push('required_firstName');
    }

    if (!this.value.lastName) {
      errors.push('required_lastName');
    }

    if (!this.value.dateOfBirth) {
      errors.push('required_dateOfBirth');
    }

    if (!this.value.tel) {
      errors.push('required_telephone');
    }

    if (!isValidEmail(this.value.email)) {
      errors.push('required_email');
    }

    if (!this.value.street) {
      errors.push('required_street');
    }

    if (!this.value.houseNumber) {
      errors.push('required_houseNumber');
    }

    if (!this.value.zipCode) {
      errors.push('required_zipCode');
    }

    if (!this.value.city) {
      errors.push('required_city');
    }

    return errors;
  }
}
