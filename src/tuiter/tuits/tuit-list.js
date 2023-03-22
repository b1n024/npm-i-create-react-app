import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import posts from "./tuits.json"
import PostItem from "./tuit-item";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const TuitList = () => {



    return (
        <ul className="list-group">


            {posts.map((post) => <PostItem post={post}/>)}

        </ul>
    );
}
export default TuitList;