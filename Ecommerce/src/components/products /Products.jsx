import React from 'react'
import { useGetProductsQuery } from '../../apis/productAPI'

const Products = () => {

  const data = useGetProductsQuery();

  return (
    <div>
      {
        data?.data?.products.map((product)=>(
          <div className="flex flex-wrap row-end-3">
            <img src={product.images[0]} alt=""/>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Products
