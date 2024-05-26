import React, { useContext } from 'react'
import Blogs from '../Components/Blogs'
import Pagination from '../Components/Pagination'
import { AppContext } from '../Context/AppContext'

const Category = () => {

  const {category} = useContext(AppContext);

  return (
    <div>
      <Blogs catHeader={category}/>
      <Pagination />
  </div>
  )
}

export default Category 