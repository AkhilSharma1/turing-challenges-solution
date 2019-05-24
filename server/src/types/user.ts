export interface Address {
  shippingRegionID: string;
  address1?: string;
  address2?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  dayPhone?: string;
  evePhone?: string;
  mobPhone?: string;
}

// export interface User {
//   username: string;
//   readonly password: string;
//   address: Address;
//   creditCard: string;
// }

export interface User {
  customer_id: string;
  name: string;
  email: string;
  readonly password: string;
  creditCard?: string;
  address: Address;
}
