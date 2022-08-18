/* eslint-disable */
// This is a generated file, do not modify
import { DatasourceCreate } from '../schemas/DatasourceCreate';
import { getValidatorFunction } from '../schema';
import validate from './DatasourceCreateValidator';
import type { ValidateFunction } from 'ajv';

export * from '../schemas/DatasourceCreate';

export const validateDatasourceCreate = getValidatorFunction<DatasourceCreate>(validate as ValidateFunction);
