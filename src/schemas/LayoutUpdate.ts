import { PageDSL } from '@superblocksteam/shared';

export interface LayoutUpdate {
  dsl: PageDSL;
  lastSuccessfulWrite: number;
}
