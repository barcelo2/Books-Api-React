import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.googleapis.com/books/v1/volumes?q='

const SingleBook=()=>{

    const {id}=useParams()

    const[loading, setLoading]=React.useState(false)
    const[book, setBook]=React.useState(null)

React.useEffect(()=>{
setLoading(true)

async function getBook(){
try{
    const response= await fetch(`${url}${id}`)
    const data= await response.json()
 console.log(data)
    if(data.items){
const title=data.items[0].volumeInfo.title
const image=data.items[0].volumeInfo.imageLinks&&data.items[0].volumeInfo.imageLinks.thumbnail
const author=data.items[0].volumeInfo.authors
const category=data.items[0].volumeInfo.categories
const pages=data.items[0].volumeInfo.pageCount
const description=data.items[0].volumeInfo.description 
console.log(description);
const newBook={
title, image,author, category,pages,description
}
setBook(newBook)
    }
    else{
        setBook(null)
    }
    setLoading(false)
}catch (error){
console.log(error);
setLoading(false)
}

}
getBook()
},[id])
if(loading){
    return<Loading/>
}
if(!book){
    return <h2 className='section-title'>No book to display</h2>
}
const {title, image,author, category,pages,description}=book
    return(
       <section className='section libro-section'>
           
           <h2 className='section-title'>{title}</h2>
           <div className="libro">
           <img src={image} alt={title} />
               <div className="libro-info">
              
                   <p>
                       <span className='libro-data'>title:</span>
                       {title}
                   </p>
                   <p>
                       <span className='libro-data'>author:</span>
                       {author}
                   </p>
                   <p>
                       <span className='libro-data'>category:</span>
                       {category}
                   </p>
                   <p>
                       <span className='libro-data'>pages:</span>
                       {pages}
                   </p>
                   <p>
                       <span className='libro-data'>description:</span>
                       {description|| 'no description'}
                   </p>
                   <Link to="/" className='btn btn-primary libro-btn'>
              back home 
           </Link>
               </div>
           </div>
       </section>
    )
}
export default SingleBook