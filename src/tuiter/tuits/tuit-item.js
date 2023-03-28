import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";
import '../home/index.css'

const TuitItem = ({post}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));

    }
    return (

        <div className='wd-paragraph-border '>


            <img src=  {post.image} className="wd-avatar"/>


            <div className="wd-move-right">
                <span className="wd-author-name">{post.userName} </span>
                <span className="wd-author-handle">{post.handle} · {post.time}</span>
                <span><i className="bi bi-x-lg float-end "
                         onClick={() => deleteTuitHandler(post._id)}></i></span>
                <div className="wd-content">
                    {post.tweet}

                    <div className="wd-text  ">

                        <div className="">
                            {post.tuit}
                            <br/>


                        </div>
                    </div>

                    <div className="wd-icon wd-flex">
                        <div className="wd-flex-icon">
                            <a href="#">
                                <i className="far fa-comment"></i>
                                <span className="wd-amount">{post.replies}</span>
                            </a>
                        </div>
                        <div className="wd-flex-icon"><a href="#">
                            <i className="fas fa-retweet"></i>
                            <span className="wd-amount">{post.retuits}</span>

                        </a>
                        </div>
                        <div>
                            Likes: {post.likes}
                            <i onClick={() => dispatch(updateTuitThunk({
                                ...post,
                                likes: post.likes + 1
                            }))} className="bi bi-heart-fill me-2 text-danger"></i>
                        </div>


                        <div className="wd-clicked-like wd-flex-icon"><a href="#">
                            <i className="fas fa-share-alt"></i>

                        </a>
                        </div>
                    </div>


                </div>

            </div>


        </div>
    );

};
export default TuitItem;