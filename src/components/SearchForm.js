import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm}=useGlobalContext()
  const searchValue=React.useRef('')

React.useEffect(()=>{
searchValue.current.focus()
},[])

  const searchBook=()=>{
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit=(e)=>{
e.preventDefault()
  }
  return (
    <section className='search'>
      <form className='search-form' onSubmit={handleSubmit}> 
      <div className="form-control">
        <input type="text" id='name' ref={searchValue} onChange={searchBook}  placeholder='Search By Title, Author, Keyword'/>
      </div>
      </form>
    </section>
  )
}

export default SearchForm