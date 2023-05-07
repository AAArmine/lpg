import contactFormDe from './contact-form/de.json';
import commonDe from './common/de.json';
import calculatorDE from './calculator/de.json';

type TslSource = 'contact-form' | 'calculator';

function getSource(source: TslSource | undefined): Record<string, any> {
  switch (source) {
    case 'contact-form':
      return contactFormDe;
    case 'calculator':
      return calculatorDE;
    default:
      return commonDe;
  }
}

function interpolate(value: string, obj?: Record<string, any>): string {
  if (obj) {
    return value.replace(/\{(.*?)\}/g, (_, key) => obj[key]);
  }
  return value;
}

export type TranslationFunc = (
  key: string,
  obj?: Record<string, any>
) => string;

export const useTranslations =
  (source?: TslSource): TranslationFunc =>
  (key, obj) => {
    if (!key) {
      throw Error('No key provided');
    }

    const tsl = getSource(source);

    const path: string[] = key.split('.');

    let tslByPath = tsl[path[0]!];

    if (path.length > 1) {
      for (let index: number = 1; index < path.length; index += 1) {
        tslByPath = tslByPath ? tslByPath[path[index] as string] : null;
      }
    }

    return typeof tslByPath === 'string'
      ? interpolate(tslByPath, obj)
      : `missing-translations: ${key}`;
  };
