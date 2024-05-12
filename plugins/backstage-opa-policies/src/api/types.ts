import { createApiRef } from '@backstage/core-plugin-api';

export type OpaPolicy = {
  policyContent: string;
};

export interface OpaPolicyBackendApi {
  getPolicyFromRepo(opaPolicy: string): Promise<OpaPolicy>;
}

export const opaPolicyBackendApiRef = createApiRef<OpaPolicyBackendApi>({
  id: 'plugin.opa-policy-backend.service',
});
