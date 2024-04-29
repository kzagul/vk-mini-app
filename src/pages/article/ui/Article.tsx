import React from 'react'; 
import { Link } from "react-router-dom";

function ArticlePage() {     
    return (
        <>
            <h1>this is the Article page</h1>  
            <Link to={`/`}>
                <button>click to home</button>
            </Link>
        </>   
    ); 
} 
export default ArticlePage;