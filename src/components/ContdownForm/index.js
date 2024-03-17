import React from 'react'

function CountdownForm() {
  return (
    <form className='flex f-column r-gap1'>
        <input type='datetime-local' className='primary'></input>
        <input type='submit' className='primary'></input>
    </form>
  )
}

export default CountdownForm