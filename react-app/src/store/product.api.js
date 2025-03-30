const data = {
  products: [
    {
      id: 10,
      name: 'Strawberries',
      description: '16oz package of fresh organic strawberries',
      quantity: '1',
    },
    {
      id: 20,
      name: 'Sliced bread',
      description: 'Loaf of fresh sliced wheat bread',
      quantity: 1,
    },
    {
      id: 30,
      name: 'Apples',
      description: 'Bag of 7 fresh McIntosh apples',
      quantity: 1,
    },
    {
      id: 40,
      name: 'Oranges',
      description: 'Bag of 6 fresh oranges',
      quantity: 1,
    },
    {
      id: 50,
      name: 'Banana',
      description: 'Bag of 12 tasty bananas',
      quantity: 1,
    },
  ],
};

export const loadProductsApi = async () => {
  return data.products;
};
