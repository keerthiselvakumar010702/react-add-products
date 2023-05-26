import React, { useState } from 'react'
import './style.css';
const Favourite= ({list,setList,favourites,setFavourites,viewList,setViewList})=>{
       
      const [ViewFavorites, setViewFavorites] = useState(false);
  const handleShowFavorites = () => {
      setViewFavorites(!ViewFavorites);
      if(  ViewFavorites){
            console.log("inside if");
            setViewList(list);
            
   
      }else{
            console.log("inside else",favourites);
            setViewList(favourites);
      }
     
  };
 // console.log(showFavorites);
return(
< >
<h1 className="heading">VIEW DATA </h1>
        <button  className="fav" onClick={handleShowFavorites} >
           
         Favourites
      </button>
</>
);
}
export {Favourite};