import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import posts from "./posts.json"
import PostItem from "./post-item";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const TuitList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return (
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>}

            posts.map(post => <PostItem post={post}/>)

        </ul>
    );
}
export default TuitList;