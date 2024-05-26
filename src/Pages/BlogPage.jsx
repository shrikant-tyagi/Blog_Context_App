import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Blog from '../Components/Blog';
import { AppContext } from '../Context/AppContext';
import { blogUrl } from '../baseUrl';

const BlogPage = () => {
    const location = useLocation();
    const [blog , setBlog] = useState();
    const [relatedBlogs , setRelatedBlogs] = useState([]);
    const {setLoading ,loading} = useContext(AppContext);
    const navigate = useNavigate();

    const blogId = location.pathname.split('/').at(-1);

    async function fetchUrl(){
        setLoading(true);
        const url = `${blogUrl}?blogId=${blogId}`;
        try{
           const response = await fetch(url);
           const data = await response.json();
           console.log(data);
           setBlog(data.blog);
           setRelatedBlogs(data.relatedBlogs);
        }
        catch(err){
            console.log(err);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchUrl();
        // eslint-disable-next-line
    },[location.pathname]);
    
  return (
    <div className='flex flex-col gap-y-5
    w-5/12 mx-auto my-20'>
    {
        
            loading ? (<div className='fixed top-[50%] left-[50%]'>Loading...</div>) : (
                <div>
                    <div>
                        <button className='border-2 p-1 w-fit rounded-md mb-4' onClick={() => navigate(-1)}>Back</button>

                        {
                            blog && (
                                <Blog post={blog} />
                            )
                        }
                    </div>
                

                    <h2 className='text-3xl font-semibold my-4'>Related Blogs</h2>

                    <div className='flex flex-col gap-y-10 items-center'>
                        {
                            relatedBlogs.map((post , index) => {
                            return (<Blog post={post} key={index} />)
                            })
                        }
                    </div>
                </div>
            )
    }
    </div>
  )
}

export default BlogPage