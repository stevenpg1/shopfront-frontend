import React from 'react';

const BasketContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clear: () => {}
});

export default BasketContext;