import { useTranslations } from '../../../locale';
import { FormStepBaseProps } from '../formStepBaseProps';
import { FormStepContainer } from '../FormStepContainer';
import { MiscValue } from '../schema';
import { FormItemYesNo } from './FormItemYesNo';
import { Asbest } from './Icons/Asbest';
import { MonumentProtection } from './Icons/MonumentProtection';
import { HouseOnGround } from './Icons/HouseOnGround';

export const FormStepMisc: React.FC<FormStepBaseProps<MiscValue>> = ({
  value,
  onValueChange,
}) => {
  const t = useTranslations('contact-form');

  return (
    <FormStepContainer>
      <FormItemYesNo
        value={value.asbest}
        errors={[]}
        img={<Asbest />}
        text={t('misc.asbest.title')}
        infoText={t('misc.asbest.infoText')}
        onValueChange={(newValue) => {
          onValueChange({ ...value, asbest: newValue });
        }}
      />
      <FormItemYesNo
        value={value.leaseHold}
        errors={[]}
        img={<HouseOnGround />}
        text={t('misc.leaseHold.title')}
        infoText={t('misc.leaseHold.infoText')}
        onValueChange={(newValue) => {
          onValueChange({ ...value, leaseHold: newValue });
        }}
      />
      <FormItemYesNo
        value={value.monumentProtection}
        errors={[]}
        img={<MonumentProtection />}
        text={t('misc.monumentProtection.title')}
        infoText={t('misc.monumentProtection.infoText')}
        onValueChange={(newValue) => {
          onValueChange({ ...value, monumentProtection: newValue });
        }}
      />
    </FormStepContainer>
  );
};
