import { Link } from 'react-router-dom';


const Blog = () => {

    return (
        <div style={{backgroundColor:"black",color:"white",height:"100vh",textAlign:"center",}}>
       
    
                <h1 style={{paddingTop:"100px"}}>Coming Soon...</h1>
                <Link to="/"><button className='myButton'>Return Back</button></Link>
         
  
        </div>
    );
};

export default Blog;