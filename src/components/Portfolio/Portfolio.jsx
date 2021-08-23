import React from 'react';
import './Portfolio.css';
import { useState } from 'react';


const Portfolio = () => {
    const Items=[
        {
            id:1,
            title:"design",
            image:"images/unicorn.png",
            link:"https://khalilurrahmankhan.github.io/Unicorn/"
        },
        {
            id:2,
            title:"design",
            image:"images/meow.png",
            link:"https://khalilurrahmankhan.github.io/Meow/"
        },
        {
            id:3,
            title:"design",
            image:"images/parallels.png",
            link:"https://khalilurrahmankhan.github.io/parallels/"
        },
        {
            id:4,
            title:"design",
            image:"images/salem.png",
            link:"https://khalilurrahmankhan.github.io/Salem/"
        },
        {
            id:5,
            title:"design",
            image:"images/school.png",
            link:"https://khalilurrahmankhan.github.io/School/"
        },
        {
            id:6,
            title:"design",
            image:"images/waxom.png",
            link:"https://khalilurrahmankhan.github.io/Waxom/"
        },
      
     
    ]

    const [item,setItem] = useState(Items);

    const filterItem = (name) =>{
        const updatedItem = Items.filter((item)=>{
            return item.title === name;
        })
        setItem(updatedItem);
    }
  
    return (
       <div className="portfolio" id="portfolio">
           <h3>Portfolio</h3>
         
           <div className="middle">
           <div className="btn">
           <button className="myButton" onClick={()=> setItem(Items)}>All</button>
           <button className="myButton" onClick={()=> filterItem("design")}>Web design</button>
           <button className="myButton" onClick={()=> filterItem("develop")}>Web develop</button>
           </div>
      

           {
               item.map((item)=>{
                   return(
                       
                            <a href={item.link}><img  class="img" src={item.image} alt="" /></a>
                       
                         
                       
                   )
               })
           }

           </div>
           

       </div>

    );
};

export default Portfolio;