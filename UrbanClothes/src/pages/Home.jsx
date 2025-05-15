import React from 'react'
import Banner from '../components/Banner'
import Modal from '../components/Modal';
import '../assets/css/Modal.css'                                                                                                                                                                          

const Home = () => {
  return (
    <div>
    <Modal/>
  
      <main>
        <Banner />
      </main>
    </div>
  )
}

export default Home
