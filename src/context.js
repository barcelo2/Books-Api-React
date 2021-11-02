  
import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.googleapis.com/books/v1/volumes?q='
const AppContext = React.createContext()



const AppProvider = ({ children }) => {
const[loading, setLoading]=useState(true)
const [searchTerm, setSearchTerm]=useState('ruby')
const [books, setBooks]=useState([])

const fetchBooks= async()=>{
  setLoading(true)
  try{
 const response= await fetch(`${url}${searchTerm}`) 
 const data= await response.json()
 const {items}=data;
 if(items){
const newBooks=items.map((item)=>{
const id=item.id
const title=item.volumeInfo.title
const image=item.volumeInfo.imageLinks&&item.volumeInfo.imageLinks.thumbnail
const author=item.volumeInfo.authors
const category=item.volumeInfo.categories
const pages=item.volumeInfo.pageCount


return{id:id, title:title, image:image,  author:author, category:category, pages:pages}

})
 setBooks(newBooks)
 }else{
   setBooks([])
 }
 setLoading(false)
  }
  catch (error){
console.log(error)
setLoading(false)
  }
}
useEffect(()=>{
fetchBooks()
}, [searchTerm])

  return (
<AppContext.Provider 
  value={{
loading,
books,
setSearchTerm,
setBooks
  }}
  >
    {children}
  </AppContext.Provider>

  )
}



export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }