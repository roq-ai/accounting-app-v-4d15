import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  product_name: yup.string().nullable(),
  hsn_code: yup.number().integer().nullable(),
  uom: yup.string().nullable(),
  unit_price: yup.string().nullable(),
});
