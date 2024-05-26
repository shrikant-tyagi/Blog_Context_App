import Header from "./Components/Header"
import Home from "./Pages/Home"
import './App.css'
import { Route, Routes } from "react-router"
import Tag from "./Pages/Tag"
import Category from "./Pages/Category"
import BlogPage from "./Pages/BlogPage"
import { useContext , useEffect } from "react"
import { AppContext } from "./Context/AppContext"
import { useLocation } from "react-router"
import { useSearchParams } from "react-router-dom"

export default function App() {

  const {fetchUrl} = useContext(AppContext);
  const location = useLocation()
  const [searchParam] = useSearchParams();

  useEffect(() => {
    const page = searchParam.get('page') ?? 1;

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split('/').at(-1).replace('%20',' ');
      fetchUrl(Number(page) , tag);
    }

    else if(location.pathname.includes('categories')){
      const category = location.pathname.split('/').at(-1).replace("%20"," ");
      fetchUrl(Number(page) , null , category);
    }

    else {
      fetchUrl(Number(page));
    }
  // eslint-disable-next-line
    },[location.pathname , location.search]);

  return (
    <div className="min-h-[100vh] flex flex-col gap-y-2">
      <Header/>
      
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tags/:tagId" element={<Tag/>} />
          <Route path="/categories/:categoryId" element={<Category/>} />
          <Route path="/blogs/:blogId" element={<BlogPage/>} />
          <Route path="*" element={<div className="fixed top-[50%] left-[45%]">Page Does not exit.</div>} />
        </Routes>
      </div>
    </div>
  )
}