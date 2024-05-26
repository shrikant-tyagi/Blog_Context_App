import React , {useContext} from 'react'
import { AppContext } from '../Context/AppContext';
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';

const Tag = () => {

  const {tag} = useContext(AppContext);

  return (
    <div>
      <Blogs tagHeader={tag}/>
      <Pagination />
    </div>
  )
}

export default Tag