import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  product_name?: string;
  hsn_code?: number;
  uom?: string;
  unit_price?: string;

  _count?: {};
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_name?: string;
  uom?: string;
  unit_price?: string;
}
