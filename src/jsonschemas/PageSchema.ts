/* eslint-disable */
// This is a generated file, do not modify
import { PageSchema } from '../schemas/PageSchema';
import { getValidatorFunction } from '../schema';
import validate from './PageSchemaValidator';
import type { ValidateFunction } from 'ajv';

export * from '../schemas/PageSchema';

export const validatePageSchema = getValidatorFunction<PageSchema>(validate as ValidateFunction);
