import React, { Suspense } from 'react'
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import StockItemList from '../components/StockItemList';

const Menu = () => {
  const { stockItems } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={stockItems}>
        {(loadedStockItems) => <StockItemList stockItems={loadedStockItems} />}
      </Await>
    </Suspense>
  );
}

export default Menu;

async function loadStockItems() {
  const response = await fetch('http://localhost:5045/api/stockItems');
  console.log("response: ", response);
  if (!response.ok) {
    throw json(
      { message: 'Could not fetch stock items.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    console.log("resData: ", resData);
    return resData;
  }
}

export function loader() {
  return defer({
    stockItems: loadStockItems(),
  });
}
