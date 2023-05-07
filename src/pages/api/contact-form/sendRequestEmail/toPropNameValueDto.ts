/* eslint-disable @typescript-eslint/no-use-before-define */
import { useTranslations } from '../../../../locale';

export const toPropNameValueDto = (
  schema: Array<Record<string, string>>,
  type: 'offer' | 'information'
): {
  dealBreaker: Record<string, string>;
  main: Record<string, string>;
  contact: Record<string, string>;
} => {
  const res = { dealBreaker: {}, main: {}, contact: {} };

  schema.forEach((formStep) => {
    switch (formStep.name) {
      case 'houseType':
        res.main = { ...res.main, ...parseHouseTypeFormValues(formStep) };
        break;
      case 'houseConstruction':
        res.main = { ...res.main, ...parseHouseConstructionValues(formStep) };
        break;
      case 'apartmentSpaceLiving':
        res.main = {
          ...res.main,
          ...parseApartmentSpaceLivingValues(formStep),
        };
        break;
      case 'houseSpaceLiving':
        res.main = { ...res.main, ...parseHouseSpaceLivingValues(formStep) };
        break;
      case 'houseCondition':
        res.main = { ...res.main, ...parseHouseConditionValues(formStep) };
        break;
      case 'houseFloors':
        res.main = { ...res.main, ...parseHouseFloorsValues(formStep) };
        break;
      case 'apartmentFloors':
        res.main = { ...res.main, ...parseApartmentFloorsValues(formStep) };
        break;
      case 'apartmentHeating':
        res.main = { ...res.main, ...parseApartmentHeatingValues(formStep) };
        break;
      case 'houseNumberOfRooms':
        res.main = { ...res.main, ...parseHouseNumberOfRoomsValues(formStep) };
        break;
      case 'apartmentNumberOfRooms':
        res.main = {
          ...res.main,
          ...parseApartmentNumberOfRoomsValues(formStep),
        };
        break;
      case 'houseProperty':
        res.main = { ...res.main, ...parseHousePropertyValues(formStep) };
        break;
      case 'carParking':
        res.main = { ...res.main, ...parseCarParkingValues(formStep) };
        break;
      case 'misc':
        res.dealBreaker = parseMiscValues(formStep);
        break;
      case 'contactInformation':
        res.contact = parseContactInformationValues(formStep, type);
        break;
      default:
    }
  });

  return res;
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const t = useTranslations('contact-form');

const parseHouseTypeFormValues = (
  formStep: Record<string, any>
): Record<string, string> =>
  formStep.value
    ? {
        [t('houseTypes.title')]: t(`houseTypes.${formStep.value}.title`),
      }
    : {};

const parseHouseConstructionValues = (
  formStep: Record<string, any>
): Record<string, string> =>
  formStep.value
    ? {
        [t('houseConstruction.title')]: t(
          `houseConstruction.${formStep.value}.title`
        ),
      }
    : {};

const parseHouseSpaceLivingValues = (
  formStep: Record<string, any>
): Record<string, string> => ({
  ...(formStep.value.livingArea && {
    [t('spaceLiving.livingArea.title')]: `${formStep.value.livingArea}${t(
      `m2`
    )}`,
  }),
  ...(formStep.value.rentedArea && {
    [t('spaceLiving.rentedArea.title')]: `${formStep.value.rentedArea}${t(
      `m2`
    )}`,
  }),
  ...(formStep.value.landArea && {
    [t('spaceLiving.landArea.title')]: `${formStep.value.landArea}${t(`m2`)}`,
  }),
});

const parseApartmentSpaceLivingValues = (
  formStep: Record<string, any>
): Record<string, string> => ({
  ...(formStep.value.livingArea && {
    [t('spaceLiving.livingArea.title')]: `${formStep.value.livingArea}${t(
      `m2`
    )}`,
  }),
  ...(formStep.value.additionalArea && {
    [t('spaceLiving.additionalArea.title')]: `${
      formStep.value.additionalArea
    }${t(`m2`)}`,
  }),
});

const parseHouseConditionValues = (
  formStep: Record<string, any>
): Record<string, string> => ({
  ...(formStep.value.yearOfConstruction && {
    [t(
      'houseCondition.yearOfConstruction.title'
    )]: `${formStep.value.yearOfConstruction}`,
  }),
  ...(formStep.value.objectState !== null
    ? {
        [t('houseCondition.objectState.title')]: t(
          `houseCondition.objectState.options.${formStep.value.objectState}`
        ),
      }
    : null),
  ...(formStep.value.furnishing !== null
    ? {
        [t('houseCondition.furnishing.title')]: t(
          `houseCondition.furnishing.options.${formStep.value.furnishing}`
        ),
      }
    : null),
});

const parseHouseFloorsValues = (
  formStep: Record<string, any>
): Record<string, string> => ({
  ...(formStep.value.numberOfFloors && {
    [t('houseFloors.numberOfFloors.title')]:
      formStep.value.numberOfFloors.toString(),
  }),
  ...(formStep.value.basement != null
    ? {
        [t('houseFloors.basement.title')]: t(
          `houseFloors.basement.options.${formStep.value.basement}`
        ),
      }
    : null),
  ...(formStep.value.roof != null
    ? {
        [t('houseFloors.roof.title')]: t(
          `houseFloors.roof.options.${formStep.value.roof}`
        ),
      }
    : null),
});

const parseApartmentFloorsValues = (
  formStep: Record<string, any>
): Record<string, string> => ({
  ...(formStep.value.basement != null
    ? {
        [t('houseFloors.basement.title')]: t(
          `houseFloors.basement.options.${formStep.value.basement}`
        ),
      }
    : null),
  ...(formStep.value.location != null
    ? {
        [t('houseFloors.apartmentLocation.title')]:
          formStep.value.location.toString(),
      }
    : null),
  ...(formStep.value.numberOfFloors && {
    [t('houseFloors.numberOfFloors.title')]:
      formStep.value.numberOfFloors.toString(),
  }),
});

const parseApartmentHeatingValues = (
  formStep: Record<string, any>
): Record<string, string> => ({
  ...(formStep.value.roof && {
    [t('houseFloors.roof.title')]: t(
      `houseFloors.roof.options.${formStep.value.roof}`
    ),
  }),
  ...(formStep.value.heatingAge != null
    ? {
        [t('heating.heatingAge.title')]: t(
          `heating.heatingAge.options.${formStep.value.heatingAge}`
        ),
      }
    : null),
  ...(formStep.value.window && {
    [t('heating.window.title')]: t(
      `heating.window.options.${formStep.value.window}`
    ),
  }),
});

const parseHouseNumberOfRoomsValues = (
  formStep: Record<string, any>
): Record<string, string> => ({
  ...(formStep.value.numberOfRooms && {
    [t('numberOfRooms.numberOfRooms.title')]:
      formStep.value.numberOfRooms.toString(),
  }),
  ...(formStep.value.toilets && {
    [t('numberOfRooms.toilets.title')]: formStep.value.toilets.toString(),
  }),
  ...(formStep.value.heatingAge != null
    ? {
        [t('heating.heatingAge.title')]: t(
          `heating.heatingAge.options.${formStep.value.heatingAge}`
        ),
      }
    : null),
});

const parseApartmentNumberOfRoomsValues = (
  formStep: Record<string, any>
): Record<string, string> => ({
  ...(formStep.value.elevator && {
    [t('numberOfRooms.elevator.title')]: formStep.value.elevator,
  }),
  ...(formStep.value.numberOfRooms && {
    [t('numberOfRooms.numberOfRooms.title')]:
      formStep.value.numberOfRooms.toString(),
  }),
  ...(formStep.value.toilets && {
    [t('numberOfRooms.toilets.title')]: formStep.value.toilets.toString(),
  }),
});

const parseHousePropertyValues = (
  formStep: Record<string, any>
): Record<string, string> => ({
  ...(formStep.value.pool && {
    [t('houseProperties.pool.title')]: t(formStep.value.pool),
  }),
  ...(formStep.value.sauna && {
    [t('houseProperties.sauna.title')]: t(formStep.value.sauna),
  }),
  ...(formStep.value.solarPanel && {
    [t('houseProperties.solarPanel.title')]: t(formStep.value.solarPanel),
  }),
});

const parseCarParkingValues = (
  formStep: Record<string, any>
): Record<string, string> => ({
  ...(formStep.value.asbest && {
    [t('carParking.asbest.title')]: t(formStep.value.asbest),
  }),
  ...(formStep.value.numberOfUndergroundParkings && {
    [t('carParking.numberOfUndergroundParkings.title')]:
      formStep.value.numberOfUndergroundParkings.toString(),
  }),
  ...(formStep.value.numberOfParkingLots && {
    [t('carParking.numberOfParkingLots.title')]:
      formStep.value.numberOfParkingLots.toString(),
  }),
});

const parseMiscValues = (
  formStep: Record<string, any>
): Record<string, string> => ({
  ...(formStep.value.asbest && {
    [t('misc.asbest.title')]: t(formStep.value.asbest),
  }),
  ...(formStep.value.leaseHold && {
    [t('misc.leaseHold.title')]: t(formStep.value.leaseHold),
  }),
  ...(formStep.value.monumentProtection && {
    [t('misc.monumentProtection.title')]: t(formStep.value.monumentProtection),
  }),
});

const parseContactInformationValues = (
  formStep: Record<string, any>,
  type: 'offer' | 'information'
): Record<string, string> => ({
  ...(formStep.value.salutation && {
    [t('contact-info.salutation.title')]: t(
      `contact-info.salutation.${formStep.value.salutation}`
    ),
  }),
  ...(formStep.value.firstName && {
    [t('contact-info.firstName')]: formStep.value.firstName,
  }),
  ...(formStep.value.lastName && {
    [t('contact-info.lastName')]: formStep.value.lastName,
  }),
  ...(formStep.value.dateOfBirth && {
    [t('contact-info.dateOfBirth')]: formStep.value.dateOfBirth,
  }),
  ...(formStep.value.numberOfChildren && {
    [t('contact-info.children')]: formStep.value.numberOfChildren,
  }),
  ...(formStep.value.maritalStatus && {
    [t('contact-info.maritalStatus.title')]: t(
      `contact-info.maritalStatus.${formStep.value.maritalStatus}`
    ),
  }),
  ...(formStep.value.partnerDateOfBirth && {
    [t('contact-info.partnerDateOfBirth')]:
      formStep.value.partnerDateOfBirth.toString(),
  }),
  ...(formStep.value.email && {
    [t('contact-info.email')]: formStep.value.email,
  }),
  ...(formStep.value.tel && {
    [t('contact-info.phone')]: formStep.value.tel,
  }),
  ...(formStep.value.street && {
    [t('contact-info.street')]: formStep.value.street,
  }),
  ...(formStep.value.houseNumber && {
    [t('contact-info.houseNumber')]: formStep.value.houseNumber,
  }),
  ...(formStep.value.zipCode && {
    [t('contact-info.zipCode')]: formStep.value.zipCode,
  }),
  ...(formStep.value.city && {
    [t('contact-info.city')]: formStep.value.city,
  }),
  ...(formStep.value.comment && {
    [t('contact-info.comments')]: formStep.value.comment,
  }),
  [t(
    type === 'offer'
      ? 'contact-info.receiveOfferViaPostAndEmail'
      : 'contact-info.receiveInformationViaPostAndEmail'
  )]: formStep.value.receiveInformationViaPostAndEmail ? t('yes') : t('no'),
  [t(
    type === 'offer'
      ? 'contact-info.receiveOfferViaEmail'
      : 'contact-info.receiveInformationViaEmail'
  )]: formStep.value.receiveInformationViaEmail ? t('yes') : t('no'),
  [t('contact-info.subscribeToNewsLetter')]: formStep.value
    .subscribeToNewsLetter
    ? t('yes')
    : t('no'),
});
