import React from 'react'
import { Link } from 'react-router-dom'

export default function Choice() {
  return (
    <div className='mt-20' id="choice">
        <div>
            <Link to="/doc">
            <button>Virtual Doctor</button>
            </Link>
        </div>
        <div>
            <button>Get an Order</button>
        </div>
    </div>
  )
}
