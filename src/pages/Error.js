import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return <>
    <section className="section about-image">
      <div className="error-container">
        <h1> 404 Error</h1>
        <Link to="/" className="btn btn-primary ">back home</Link>
      </div>
    
    </section>

    <section className=' error-page'>
    <h1> Ooops! Could Not Find It</h1>
    <p>404</p>
    </section>
    
    </>
}

export default Error