export interface IProduct {
  title: string;
  description: string;
  price: number;
  discount: number;
  quantity: number;
  images: string[];
}

const products: IProduct[] = [
  {
    title: 'T-Shirt',
    description: 'The Best T-Shirt',
    discount: 10.0,
    price: 1000.0,
    quantity: 20,
    images: ['product1.png']
  },
  {
    title: 'T-Shirt',
    description: 'The Best T-Shirt',
    discount: 90.0,
    price: 20.0,
    quantity: 20,
    images: ['product2.png']
  },
  {
    title: 'T-Shirt',
    description: 'The Best T-Shirt',
    discount: 20.0,
    price: 300.0,
    quantity: 20,
    images: ['product3.png']
  },
  {
    title: 'T-Shirt',
    description: 'The Best T-Shirt',
    discount: 20.0,
    price: 300.0,
    quantity: 20,
    images: ['product4.png']
  },
  {
    title: 'T-Shirt',
    description: 'The Best T-Shirt',
    discount: 20.0,
    price: 300.0,
    quantity: 20,
    images: ['product5.png']
  },
  {
    title: 'T-Shirt',
    description: 'The Best T-Shirt',
    discount: 100.0,
    price: 300.0,
    quantity: 20,
    images: ['product6.png']
  }
];

export default products;
