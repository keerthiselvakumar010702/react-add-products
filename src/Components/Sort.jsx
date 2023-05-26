import React, { useState } from 'react'
import './style.css';
const Sort= ({list,setList,viewList, setViewList, details,setDetails,handleSelectFilter,range})=>{
  

  const handleFilter = (filterKey) => {
    let newArray = [];
    if(filterKey === "All"){
      newArray = [...list];
    }
    else if(filterKey == "10-15"){
      newArray = list.filter(item => Number(item.rate) >= 10 && Number(item.rate) <= 15);
    }
    else if(filterKey == "16-20"){
      newArray = list.filter(item => Number(item.rate) >= 16 && Number(item.rate) <= 20);
    }
    else if(filterKey == "21-25"){
      newArray = list.filter(item => Number(item.rate) >= 21 && Number(item.rate) <= 25);
    }else if(filterKey == "21-25"){
      
    }
    setViewList(newArray);
  }



  const handleSort = (sortKey) => {
      const newArray = [...viewList];
      if (sortKey === 'name') {
        newArray.sort((a, b) => (a.name > b.name ? 1 : -1));
      } else if (sortKey === 'rate') {
        newArray.sort((a, b) => a.rate - b.rate);
      }else if (sortKey === 'quantity') {
        newArray.sort((a, b) => a.quantity - b.quantity);
      }
      setViewList(newArray);

    }
  const handleSelect=(event)=>{
    //console.log(event.target.value);
    handleSelectFilter(event.target.value)
    handleFilter(event.target.value);
  }  
     
return(

    <div >
    <ul type="none">
      <li>
        Sort
        <input
          type="radio"
          id="radio"
          onChange={() => handleSort('name')}
          value="name"
          name="filter"
        />
        <label>Name</label>
        <input
          type="radio"
          id="radio"
          onChange={() => handleSort('rate')}
          value="rating"
          name="filter"
        />
        <label>Rating</label>
        <input
          type="radio"
          id="radio"
          onChange={(e) => handleSort('quantity')}
          value="quantity"
          name="filter"
        />
        <label>Quantity</label>
      </li>
      <li></li>
    </ul>
    <div className='filter'>
   
    FILTER
   <select  className='drop-down' onChange={handleSelect}>
      <option value="All">All</option>
      <option value="10-15">$10 - $15</option>
      <option value="16-20">$16 - $20</option>
      <option value="21-25">$21 - $25</option>
    </select>
    
    </div>
  </div>
);
}
export {Sort};