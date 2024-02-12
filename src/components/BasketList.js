import React, { useContext, useState } from 'react';

import BasketItem from './BasketItem';
import BasketContext from '../store/basket-context';
import classes from './BasketList.module.css';

const BasketList = () => {
    const ctx = useContext(BasketContext);

    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
    const hasItems = ctx.items.length > 0;

    const basketItemRemoveHandler = (id) => {
        ctx.removeItem(id);
      };
    
      const basketItemAddHandler = (item) => {
        ctx.addItem(item);
      };

  return (
    <React.Fragment>
        <h2>To remove an item from the basket simple click the '-' on the item row till it is zero</h2>
        <ul className={classes['cart-items']}>
        {ctx.items.map((item) => (
            <BasketItem
            key={item.id}
            id={item.id}
            name={item.name}
            stockCount = {item.stockCount}
            amount={item.amount}
            unitPrice={item.unitPrice}
            onRemove={basketItemRemoveHandler.bind(null, item.id)}
            onAdd={basketItemAddHandler.bind(null, item)}
            />
        ))}
        </ul>
    </React.Fragment>
  )
  
}

export default BasketList