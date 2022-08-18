/* eslint-disable */
// This is a generated file, do not modify
import { AnalyticsUpdate } from '../schemas/AnalyticsUpdate';
import { getValidatorFunction } from '../schema';
import validate from './AnalyticsUpdateValidator';
import type { ValidateFunction } from 'ajv';

export * from '../schemas/AnalyticsUpdate';

export const validateAnalyticsUpdate = getValidatorFunction<AnalyticsUpdate>(validate as ValidateFunction);
