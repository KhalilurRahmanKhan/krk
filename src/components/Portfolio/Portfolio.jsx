import React from 'react';
import './Portfolio.css';
import { useState } from 'react';


const Portfolio = () => {
    const Items = [
        {
            id: 1,
            title: "design",
            // image: "images/unicorn.png",
            image: "images/pc-parts.png",
            link: "https://pc-parts-e1775.firebaseapp.com/",
            desc:"A website for purchasing computer parts",
        },
        {
            id: 2,
            title: "design",
            // image: "images/meow.png",
            image: "images/book.png",
            link: "https://book-stock-edae9.web.app/",
            desc:"A website for warehouse of books",
        },
        {
            id: 3,
            title: "design",
            // image: "images/parallels.png",
            image: "images/john.png",
            link: "https://learn-with-john.web.app/",
            desc:"A website for online course instructor",
        },
        // {
        //     id:4,
        //     title:"design",
        //     image:"images/salem.png",
        //     link:"https://khalilurrahmankhan.github.io/Salem/"
        // },
        // {
        //     id:5,
        //     title:"design",
        //     image:"images/school.png",
        //     link:"https://khalilurrahmankhan.github.io/School/"
        // },
        // {
        //     id:6,
        //     title:"design",
        //     image:"images/waxom.png",
        //     link:"https://khalilurrahmankhan.github.io/Waxom/"
        // },


    ]

    const [item, setItem] = useState(Items);

    const filterItem = (name) => {
        const updatedItem = Items.filter((item) => {
            return item.title === name;
        })
        setItem(updatedItem);
    }

    return (
        <div className="portfolio" id="portfolio">
            <h3>My Projects</h3>

            <div className="middle">
                {/* <div className="btn">
           <button className="myButton" onClick={()=> setItem(Items)}>All</button>
           <button className="myButton" onClick={()=> filterItem("design")}>Web design</button>
           <button className="myButton" onClick={()=> filterItem("develop")}>Web develop</button>
           </div> */}




                <div className='project' >


                    {
                        item.map((item) => {
                            return (




                                <div className='project-item' >
                                    <img src={item.image} alt="" />
                                    <p>{item.desc}</p>
                                    <button className=''>Detailes</button>
                                    <button className=''><a style={{color:"black"}} href={item.link} target="_blank">Live Site</a></button>
                                </div>



                            )
                        })
                    }

                </div>

            </div>


        </div>

    );
};

export default Portfolio;