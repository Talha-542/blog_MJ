import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import TopCategories from '../Components/TopCategories/Categories';
import Header from '../Components/Header/Header';
import Posts from '../Components/Posts/Posts';
import Pagination from '../Components/Pagination/Pagination';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <TopCategories/>
      <Posts/>
      <Pagination/>
    </div>
  )
}
