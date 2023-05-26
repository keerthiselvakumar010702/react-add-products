import React, { useState } from 'react'
import './style.css';
import { Viewproducts } from './Viewproducts';
import { Sort } from './Sort';
import { Favourite } from './Favourite';

const Displaydata= ({list,setList,details,setDetails, viewList, setViewList,showFavorites,setShowFavorites})=>{
  const [range, setrange] = useState('');
  const handleSelectFilter=(filterValue)=>{
    setrange(filterValue)
  }  
  const [favourites, setFavourites] = useState([])
     


  return(
    <div className="right-box">
    
      <Favourite list={list} setList={setList}viewList={viewList} setViewList={setViewList} favourites={favourites} setFavourites={setFavourites}/>
          <div className="sort">
    <Sort list={list} setList={setList} favourites={favourites} setFavourites={setFavourites} viewList={viewList} setViewList={setViewList} details={details} setDetails={setDetails} handleSelectFilter={handleSelectFilter} range={range}/>
    </div>
    <div className="display">
    <Viewproducts list={list} setList={setList} viewList={viewList} setViewList={setViewList} favourites={favourites} setFavourites={setFavourites}/>
    </div>
  </div>
);
}
export {Displaydata};