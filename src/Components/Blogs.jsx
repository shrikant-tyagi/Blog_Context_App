import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import Blog from './Blog';
import { useNavigate } from 'react-router';

const Blogs = ({tagHeader , catHeader }) => {
    const {loading , posts} = useContext(AppContext);
    const navigate = useNavigate();

    return (
      <div className='flex flex-col gap-y-5
       w-5/12 mx-auto my-20'>
          {
            !loading && tagHeader && <div className='flex gap-x-4'>
                            <button className='border-2 p-1 rounded-md' onClick={() => navigate(-1)}> Back </button>
                            <h2 className='font-semibold text-[1.3rem] my-auto'>Blogs Tagged 
                                <span className='text-blue-600 ml-2 underline'>#{tagHeader}</span></h2>
                        </div>
          }
          {
            !loading && catHeader && <div className='flex gap-x-4'>
                            <button className='border-2 p-1 rounded-md' onClick={() => navigate(-1)}> Back </button>
                            <h2 className='font-semibold text-[1.3rem] my-auto'>Blogs On 
                                <span className='ml-2 underline'>{catHeader}</span></h2>
                        </div>
          }
          <div className='flex flex-col gap-y-10 items-center'>
            {
                loading ? (<div className='fixed top-[50%]'>Loading...</div>) :
                (posts.map((post , index) => {
                return (<Blog post={post} key={index} />)
                }))
            }
          </div>
      </div>
    )
}

export default Blogs