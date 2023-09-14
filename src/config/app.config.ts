interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Guest'],
  tenantRoles: ['Admin', 'Accountant', 'Viewer', 'Tenant'],
  tenantName: 'Tenant',
  applicationName: 'Accounting APP v3',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Interact with the organization'],
  ownerAbilities: [
    'Manage user registration',
    'Assign roles to users',
    'Manage tenants',
    'Configure tenant-specific settings',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/e85cc058-d9fa-46c1-9591-90c8f7a98950',
};
