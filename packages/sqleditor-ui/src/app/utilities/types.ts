export interface Database {
  tables: Table[];
  name: string;
}

export interface Table {
  columns: Column[];
  name: string;
}

export interface Column {
  name: string;
}

export interface QueryEditor {
  name: string;
  query: string;
  textAreaRows?: number;
}

export interface MockedColumns {
  orderID: string;
  productID: string;
  productName: string;
  customerID: string;
  employeeID: string;
  orderDate: string;
  requiredDate: string;
  shippedDate: string;
  shipVia: string;
  freight: string;
  shipName: string;
  shipAddress: string;
  shipCity: string;
  shipRegion: string;
  shipPostalCode: string;
  shipCountry: string;
  unitPrice: string;
  quantity: string;
  discount: string;
}

/** Flat node with expandable and level information */
export class DynamicFlatNode {
  constructor(
    public item: string,
    public level = 1,
    public expandable = false,
    public isLoading = false
  ) {}
}
