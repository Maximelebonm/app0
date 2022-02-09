import { useEffect, useState } from "react";

const HomeScreen = () => {
    useEffect(() => {
        
        fetch("http://localhost:5001").then(console.log);
           
         });
    return (
        <h1>TEST</h1>
    );
};
export default HomeScreen;