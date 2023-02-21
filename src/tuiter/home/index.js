import React from "react";
import PostList from "./post-list";
import "./index.css"
import "../../vendors/fontawesome/css/all.css"
import "../../vendors/bootstrap/css/bootstrap.min.css"
const index = () => {
    return (
        <>

            <div className="col-10 col-lg-7 col-xl-6 ">
                <PostList/>
            </div>


            </>
            );

            };
            export default index;