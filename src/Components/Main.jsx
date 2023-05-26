
import React, { useState } from 'react'
import { Displaydata } from './Displaydata';
import { Getdata } from './Getdata';


import './style.css';
const Main= ()=>{
    const [list, setList] = useState([]);
    const [viewList, setViewList] = useState([]);

    const [details, setDetails] = useState({
        name: "",
        description: "",
        rate: "",
        discount: "",
        quantity: "",
        favourite: false,
      });
return(
<div className='main'>
    <Getdata list={list} setList={setList} setViewList={setViewList} details={details} setDetails={setDetails}/>
    <Displaydata list={list} setList={setList} viewList={viewList} setViewList={setViewList} details={details} setDetails={setDetails} />
    
    
    
</div>
);
}
export {Main};