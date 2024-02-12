import React from 'react'

import classes from './StockItemList.module.css';
import StockItemDetail from './StockItemDetail';

const StockItemList = ({stockItems}) => {
  return (
    <div className={classes.stockItems}>
      <h1>All Items in Stock</h1>
      <ul className={classes.list}>
        {stockItems && stockItems.map((item) => (
          <StockItemDetail stockItem={item}/>
        ))}
      </ul>
    </div>
  )
}

export default StockItemList