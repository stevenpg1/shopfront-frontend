import React from 'react'

import classes from './BasketItem.module.css';

const BasketItem = (props) => {
    const unitPrice = `$${props.unitPrice.toFixed(2)}`;
  return (
    <li className={classes['basket-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{unitPrice}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  )
}

export default BasketItem