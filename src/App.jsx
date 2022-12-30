import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Post from './pages/Post';
import Profile from './pages/Profile';
import CreatePost from './pages/CreatePost';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Meeting from './pages/Meeting';
import { useStateContext } from './context';
export default function App() {
  const { roomID } = useStateContext();
  console.log(roomID);
  return (
    

    
    <div className='relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row'>
      <div className='sm:flex hidden mr-10 relative'>
        <SideBar />
      </div>
      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/create-post/:id' element={<Post />} />
          <Route path='/meeting' element={<Meeting roomID={roomID}/>} />
        </Routes>
      </div></div>
    
  );
}
