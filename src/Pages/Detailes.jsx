import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";

function Detailes() {
    const items = [
        {
            id: 1,
            image1: "../images/pc-parts.png",
            image2: "../images/pc-parts-2.png",
            image3: "../images/pc-parts-3.png",
            client:"https://github.com/KhalilurRahmanKhan/pc-parts-client",
            server:"https://github.com/KhalilurRahmanKhan/pc-parts-server",
            link: "https://pc-parts-e1775.firebaseapp.com/",
            desc:{
                one:" 1)Login and register system with email and password",
                two:" 2)Login with google ",
                three:" 3)Protected routes",
                four:" 4)Add review system",
                five:" 5)Different dashboard for admin and user",
            }
        },
        {
            id: 2,
            client:"https://github.com/KhalilurRahmanKhan/book-stock-client",
            server:"https://github.com/KhalilurRahmanKhan/book-stock-server",
            image1: "../images/book.png",
            image2: "../images/book-2.png",
            image3: "../images/book-3.png",
            link: "https://book-stock-edae9.web.app/",
            desc:{
                one:" 1)Login and Registration system",
                two:" 2)Private routes ",
                three:" 3)Add inventory",
                four:" 4)Delete inventory",
                five:" 5)Update stock",
            }
        },
        {
            id: 3,
            client:"https://github.com/KhalilurRahmanKhan/learn-with-john",
            server:"#",
            image1: "../images/john.png",
            image2: "../images/learn-2.png",
            image3: "../images/learn3.png",
            link: "https://learn-with-john.web.app/",
            desc:{
                one:" 1)Authentication system using Email and password",
                two:" 2)Login and Registration using Google",
                three:" 3)Email verification",
                four:" 4)Protected routes",
                five:" 5)Forget password link",
            }
        },

    ]

    const {id} = useParams();
    console.log(id);

    const item = items.find(item=>item.id==id);
    console.log(item);
    const [menu, setMenu] = useState(false);
    return ( <>

        <Topbar menu={menu} setMenu={setMenu}/>
     <Sidebar menu={menu} setMenu={setMenu}/>
        <div style={{backgroundColor:"black",color:"white",marginTop:"60px",}}>
        <div style={{width:"80%",margin:"20px auto", fontSize:"18px",border:"2px solid white",padding:"20px"}}>
            <h3>Features and functionality:</h3>
        <p>{item.desc.one}</p> 
        <p>{item.desc.two}</p> 
        <p>{item.desc.three}</p> 
        <p>{item.desc.four}</p> 
        <p>{item.desc.five}</p> 
              <button className="myButton"><a href={item.link} target="_blank">Live site</a></button>
              <button className="myButton"><a href={item.client} target="_blank">Github(client)</a></button>
              <button className="myButton"><a href={item.server} target="_blank">Github(server)</a></button>
        </div>
    
          <center>
             
         
          <img style={{width:"80%"}} src={item.image1} alt="" />
            <img style={{width:"80%"}} src={item.image2} alt="" />
            <img style={{width:"80%"}} src={item.image3} alt="" />
          </center>
        <div>
   
             
   
        </div>
       
 
        </div>
        <Footer></Footer>
        </>
     );
}

export default Detailes;