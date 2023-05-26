import React, { useState } from 'react'
import './style.css';
const Getdata= ({ setList, list,details,setDetails, setViewList })=>{
    const [id,setId]= useState(0)
    const [error,setError]=useState(false);
   
// const formValidation=(details)=>{
//   const data =[...details]
//   let valid = true
//           // const element = data[index];
//           if(data.name == "") {
//             data.nameCheck = "name required"
//             data.nameLengthCheck = ""
//             valid = false
//           }
        
//         setViewList(data)
//         return valid
// }
    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     if(name.length==0){
    //       setError(true)
    //   }
     
    // }
  
    const handleChange = (event) => {
      setDetails({ ...details, [event.target.name]: event.target.value });
    };
  
    const handleClick = (e) => {
      e.preventDefault();
      if(details.name.length==0||details.description.length==0||details.quantity.length==0||details.rate.length==0||details.discount.length==0){
        setError(true)
        return 
    }
    setList((prev) => [...prev, details]);
    setViewList(() => [...list, details]);
    };
return(
<div className="left-box">
  <form >
          <h1>ADD PRODUCTS </h1>

          <ul type="none">
            <li>
              <label>Product Name</label>
              <input
                onChange={handleChange}
                value={details.name}
                type="text"
                id="message"
                name="name"
              /> 
              
            </li>
            {error&&details.name.length<=0 ?
                <p className='warning'>*Product Name can't be empty</p>:""}
           <li>
              <label>Rate</label>
              <input
                onChange={handleChange}
                value={details.rate}
                type="text"
                id="message"
                name="rate"
              />
            </li>
            {error&&details.rate.length<=0 ?
                <p className='warning'>*Rate can't be empty</p>:""}
            <li>
              <label>Quantity</label>
              <input
                onChange={handleChange}
                value={details.quantity}
                type="text"
                id="message"
                name="quantity"
              />
            </li>
            {error&&details.quantity.length<=0 ?
                <p className='warning'>*Quantity can't be empty</p>:""}
            <li>
              <label>Discount</label>
              <input
                onChange={handleChange}
                value={details.discount}
                type="text"
                id="message"
                name="discount"
              />
            </li>
            {error&&details.discount.length<=0 ?
                <p className='warning'>*Discount can't be empty</p>:""}
            <li>
              <label>Description</label>
              <input
                value={details.description}
                type="textarea"
                id="description"
                name="description"
                onChange={handleChange}
              />
            </li>
            {error&&details.description.length<=0 ?
                <p className='warning'>*Description can't be empty</p>:""}
            <li>count={list.length}</li>

            <center>
              {" "}
              <button
                className="add"
                onClick={
                  handleClick
                } type="submit"
              >
                Add
              </button>
            </center>
          </ul>
          </form>
        </div>
);
}
export {Getdata};