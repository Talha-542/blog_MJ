import React from 'react'
import TopCategories from '../Components/TopCategories/TopCategories';
import Header from '../Components/Header/Header';
import Posts from '../Components/Posts/Posts';
import Paginatio from '../Components/Pagination/Pagination'

export default function Home() {
  return (
    <div>
      <Header/>
      <TopCategories/>
      <Posts/>
      <Paginatio/>
    </div>
  )
}