import React, { Fragment, useEffect } from 'react'
import Header from './Header'
import ProductList from './ProductList'
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/cartSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  },[]);
  return (
    <Fragment >
     <Header />
     <ProductList />
    </Fragment>
  )
}

export default App