import { BadRequestError } from '@superblocksteam/shared';
import Ajv, { ValidateFunction } from 'ajv';
import addFormats from 'ajv-formats';

export const ajv = new Ajv({ coerceTypes: true, allowUnionTypes: true });
addFormats(ajv);

export function getValidatorFunction<T>(validator: ValidateFunction): (params: unknown) => T {
  return (params: unknown): T => {
    const isValid = validator(params);

    if (!isValid) {
      throw new BadRequestError(ajv.errorsText(validator.errors));
    }
    return params as T;
  };
}
