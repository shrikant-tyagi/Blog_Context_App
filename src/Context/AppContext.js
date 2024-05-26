import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl'
// import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";


export const AppContext = createContext();

function AppContextProvider({children}){
    const [ , setSearchParams] = useSearchParams();
    const [loading , setLoading] = useState(false);
    const [posts , setPosts] = useState([]);
    const [page , setPage] = useState(1);
    const [totalPages , setTotalPages] = useState(null);
    const [tag , setTag] = useState(null);
    const [category , setCategory] = useState(null);
    // const navigate = useNavigate();

    async function fetchUrl(page = 1 , tag=null , category=null){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        if(tag){
            url += `&tag=${tag}`;
        }

        if(category){
            url += `&category=${category}`;
        }

        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setPosts(data.posts);
            setPage(page);
            setTotalPages(data.totalPages);
            setTag(tag);
            setCategory(category);
        }
        catch(error){
            console.log(error);
            console.error(error);
            setPosts([]);
            setTotalPages(null);
            setPage(1);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        // navigate({search : `?page=${page}`});
        setSearchParams({page : page});
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchUrl,
        handlePageChange,
        tag,
        category
    }


    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider