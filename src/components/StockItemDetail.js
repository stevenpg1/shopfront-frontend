import React, { useContext } from 'react'

import classes from './StockItemDetail.module.css';
import BasketContext from '../store/basket-context';

const StockItemDetail = ({stockItem}) => {
  const ctx = useContext(BasketContext);
  const addToBasket = () => {
    ctx.addItem({
        id: stockItem.id,
        name: stockItem.name,
        stockCount: stockItem.stockCount,
        amount: 1,
        unitPrice: stockItem.unitPrice
      });
  }

  return (
    <li className={classes.stockitem}>
      <img src={stockItem.imageUrl} alt={stockItem.name} />
      <h1>{stockItem.name}</h1>
      <div>{stockItem.unitPrice}</div>
      <div>{stockItem.stockCount}</div>
      <button type="button" onClick={addToBasket}>Add To Basket</button>
      
    </li>
  )
}

export default StockItemDetail