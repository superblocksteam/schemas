export type CreateApplication = {
  environment?: 'staging' | 'production';
  name: string;
  // @format uuid
  organizationId: string;
  color: string;
  isPublic?: boolean;
  // @format uuid
  folderId?: string;
};
