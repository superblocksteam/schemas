/* eslint-disable */
// This is a generated file, do not modify
import { CreateAuditLogRequest } from '../schemas/CreateAuditLogRequest';
import { getValidatorFunction } from '../schema';
import validate from './CreateAuditLogRequestValidator';
import type { ValidateFunction } from 'ajv';

export * from '../schemas/CreateAuditLogRequest';

export const validateCreateAuditLogRequest = getValidatorFunction<CreateAuditLogRequest>(validate as ValidateFunction);
