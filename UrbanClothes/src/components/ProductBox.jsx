import React from 'react'
import ProductMinimal from './ProductMinimal'
import '../assets/css/Home.css'
import '../assets/css/Global.css'
import ProductFeature from './ProductFeature'
import products from '../ProductsData'



const ProductBox = () => {
  const featured = products.slice(0, 2) 
  return (
    <div className='product-box'>
      <ProductMinimal/>
      <ProductFeature featuredProducts={featured} />
    </div>
  )
}

export default ProductBox
