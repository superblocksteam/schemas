import { UuidSchema } from './UuidSchema';

export type ExecuteRequestBody = {
  apiId: UuidSchema;
  apiName: string;
  viewMode: boolean;
  params: { key: string; value?: unknown }[];
  relays: { headers: string[]; body: unknown[]; query: unknown[] };
};
