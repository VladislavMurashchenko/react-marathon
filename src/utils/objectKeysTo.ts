import { camelCase, snakeCase } from 'change-case';

type TransformStrategy = (s: string) => string;
type ObjectToTransform = { [key: string]: any };

const objectkeysTo = (strategy: TransformStrategy) => (
  object: ObjectToTransform,
): any => {
  if (Array.isArray(object)) {
    return object.map(objectkeysTo(strategy)) as any;
  }

  if (typeof object !== 'object' || object === null) {
    return object;
  }

  return Object.entries(object).reduce((acc, [key, value]) => {
    if (value instanceof Object) {
      acc[strategy(key)] = objectkeysTo(strategy)(value);
    } else {
      acc[strategy(key)] = value;
    }

    return acc;
  }, {} as any);
};

export const objectKeysToCamelCase = objectkeysTo(camelCase);
export const objectKeysToSnakeCase = objectkeysTo(snakeCase);
