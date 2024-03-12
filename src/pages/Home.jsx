import React from 'react'
import g18 from "../assets/g18.jpg"
import ProductCard from '../components/products'
export default function Home() {
  return (
    <div className='mt-15'>
        <div className='w-full bg-blue-400 h-96 mb-40'>
            <img src = {g18}  alt="Indian Handicraft" className='w-full relative'/>
        </div>
        <div>
            <ProductCard/>
        </div>
        <div>
            States
        </div>
        <div>
            Wanna become a Contributor and get discounts on your next purchase?
        </div>
        <div>
            Contact us
        </div>
    </div>
  )
}
