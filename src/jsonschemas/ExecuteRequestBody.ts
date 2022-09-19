/* eslint-disable */
// This is a generated file, do not modify
import { ExecuteRequestBody } from '../schemas/ExecuteRequestBody';
import { getValidatorFunction } from '../schema';
import validate from './ExecuteRequestBodyValidator';
import type { ValidateFunction } from 'ajv';

export * from '../schemas/ExecuteRequestBody';

export const validateExecuteRequestBody = getValidatorFunction<ExecuteRequestBody>(validate as ValidateFunction);
