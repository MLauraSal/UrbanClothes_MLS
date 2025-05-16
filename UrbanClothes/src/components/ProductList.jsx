import React from 'react'
import '../assets/css/Home.css'
import '../assets/css/Global.css'

const ProductList = () => {
  return (
    <div className='product-main'>
      <h2 className="title">New Products</h2>

      <div className="product-grid" id="productGrid"></div>
    </div>
  )
}

export default ProductList
