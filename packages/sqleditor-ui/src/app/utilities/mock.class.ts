import * as faker from 'faker';

export class MockService {

  constructor() { }

  getMockedDatabase(random = false) {
    return {
      name: random ? faker.lorem.word() : 'order_sample_db',
      tables: [
        {
          name: random ? faker.lorem.word() : 'order_sample',
          columns: [
            { name: random ? faker.lorem.word() : 'orderID' },
            { name: random ? faker.lorem.word() : 'productID' },
            { name: random ? faker.lorem.word() : 'productName' },
            { name: random ? faker.lorem.word() : 'customerID' },
            { name: random ? faker.lorem.word() : 'employeeID' },
            { name: random ? faker.lorem.word() : 'orderDate' },
            { name: random ? faker.lorem.word() : 'requiredDate' },
            { name: random ? faker.lorem.word() : 'shippedDate' },
            { name: random ? faker.lorem.word() : 'shipVia' },
            { name: random ? faker.lorem.word() : 'freight' },
            { name: random ? faker.lorem.word() : 'shipName' },
            { name: random ? faker.lorem.word() : 'shipAddress' },
            { name: random ? faker.lorem.word() : 'Abbaye' },
            { name: random ? faker.lorem.word() : 'shipCity' },
            { name: random ? faker.lorem.word() : 'shipRegion' },
            { name: random ? faker.lorem.word() : 'shipPostalCode' },
            { name: random ? faker.lorem.word() : 'shipCountry' },
            { name: random ? faker.lorem.word() : 'unitPrice' },
            { name: random ? faker.lorem.word() : 'quantity' },
            { name: random ? faker.lorem.word() : 'discount' }
          ]
        }
      ]
    };
  }
}
