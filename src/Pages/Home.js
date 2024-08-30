import React from 'react'
import TopCategories from '../Components/TopCategories/TopCategories';
import Header from '../Components/Header/Header';
import Posts from '../Components/Posts/Posts';

export default function Home() {
  return (
    <div>
      <Header/>
      <TopCategories/>
      <Posts/>
    </div>
  )
}