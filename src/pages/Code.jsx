import React from 'react'

export default function Code() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted');
    }
  return (
    <div className='mt-20'>
    <div className='flex justify-center items-center'>
        <div>
        Enter Code
        </div>
        <input placeholder='Enter code here...' type='number' />
        
        <button onSubmit={(e)=>handleSubmit(e)} >
            Submit
        </button>
    </div>
    </div>
  )
}
