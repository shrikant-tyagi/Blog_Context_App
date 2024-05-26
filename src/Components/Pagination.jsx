import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {

    const {page , totalPages ,handlePageChange} = useContext(AppContext);

  return (
    <div className='w-full border-t-2 p-4 shadow-sm fixed bottom-0 bg-white'>
        <div className="flex w-1/2 mx-auto justify-between">

            <div className='flex gap-4'>
                {
                   
                        page > 1 && 
                        (<button className='border-2 p-1 rounded-md' onClick={() => handlePageChange(page-1)}>
                            Previous
                        </button>)
                }
                {
                   
                        page < totalPages && 
                        (
                            <button className='border-2 p-1 rounded-md' onClick={() => handlePageChange(page+1)}>
                                Next
                            </button>
                        )
                }
            </div>

            <p className='font-semibold'>
                page {page} of {totalPages}
            </p>
       </div>
    </div>
  )
}

export default Pagination