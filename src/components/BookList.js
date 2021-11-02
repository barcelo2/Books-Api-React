import React from 'react'
import Book from './Book'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const BookList = () => {

  const{books,loading}=useGlobalContext()
  
if(loading){
  return <Loading/>
}
 if(books.length < 1){
   return(
<h2 className='section-title'>
  No books matched your search criteria
</h2>
   )
  
 }

  return (
    <section className='section'>
      <h2 className="section-title">
        Books
      </h2>
    <div className="books-center">
      {books.map((item)=>{
      return <Book key={item.id} {...item} />
      })}
    </div>
    </section>
  )
}

export default BookList