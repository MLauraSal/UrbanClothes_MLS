import React from 'react'
import Banner from '../components/Banner'
import Modal from '../components/Modal';
import Category from '../components/Category';
import '../assets/css/Modal.css'                                                                                                                                                                          
import Sidebar from '../components/Sidebar';
import ProductBox from '../components/ProductBox';


const Home = () => {
  return (
    <div>
    <Modal/>
  
      <main>
        <Banner />
        <Category />
        <div className='product-container'>
          <div className='container'>
          <Sidebar />
          <ProductBox />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
