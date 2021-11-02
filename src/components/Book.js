import React from 'react'
import { Link } from 'react-router-dom'
import nocover from '../images/No_Cover.jpg'

const Book= ({image, id, title, author,category}) => {
  return (
    <div className='book-cards'>
      <div className="book-card">
      <div className="content-wrapper">
        <img src={image || nocover} alt={title} className='book-card-img'/>
      </div>
      <div className="card-content">
      <div className='book-name'>{title}</div>
        <div className='book-by'> By: {author}</div>
        <div className='category'>{category || 'No category'}</div>
        <Link to={`/book/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
      
      </div>
     
      
    </div>
  )
}

export default Book