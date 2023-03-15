import React from "react";
import PostList from "./post-list";
import "./index.css"
import "../../vendors/fontawesome/css/all.css"
import "../../vendors/bootstrap/css/bootstrap.min.css"
import WhatsHappening from "./whats-happening";
import TuitList from "../tuits";


const index = () => {
    return (
        <>

            <div className=" ">
                <h4>Home</h4>


                <WhatsHappening/>
                <TuitList/>



            </div>


        </>
    );

};
export default index;