const mapping: Record<string, string> = {
  'bank-accounts': 'bank_account',
  expenses: 'expense',
  invoices: 'invoice',
  products: 'product',
  taxes: 'tax',
  tenants: 'tenant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
