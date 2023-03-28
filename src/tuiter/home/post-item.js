
import './index.css'
const PostItem = ({post}) =>{
    if (post.content) {
        return (
       <div className="wd-paragraph-margin">

            <span>
                <img src={post.avatar} className="wd-avatar"/>

            </span>
            <div className="wd-move-right">
                <span className="wd-author-name">{post.userName} </span>
                <span className="wd-author-handle">@{post.handle} · {post.time}</span>
                <div className="wd-content">
                    {post.tweet}
                    <div className="wd-hyperlink-img wd-paragraph-border">

                        <img src={post.image}/>


                    </div>
                    <div className="wd-text wd-paragraph-border wd-rounded-corners-bottom">
                        <div className="wd-author-name ">
                            {post.title}
                        </div>
                        <div className="wd-text-content">
                            {post.content}
                            <br/>
                            {post.link}

                        </div>
                    </div>

                    <div className="wd-icon wd-flex">
                        <div className="wd-flex-icon">
                            <a href="#">
                                <i className="far fa-comment"></i>
                                <span className="wd-amount">{post.comments}</span>
                            </a>
                        </div>
                        <div className="wd-flex-icon"><a href="#">
                            <i className="fas fa-retweet"></i>
                            <span className="wd-amount">{post.retweet}</span>

                        </a>
                        </div>
                        <div className="wd-clicked-like wd-flex-icon"><a href="#">
                            <i className="far fa-heart"></i>
                            <span className="wd-amount">{post.likes}</span>
                        </a>
                        </div>

                        <div className="wd-clicked-like wd-flex-icon"><a href="#">
                            <i className="fa-solid fa-arrow-up-from-bracket"></i>

                        </a>
                        </div>
                    </div>

                </div>

            </div>


        </div>
   );
    } else {
        return (
       <div className="wd-paragraph-margin">

            <span>
                <img src={post.avatar} className="wd-avatar"/>

            </span>
            <div className="wd-move-right">
                <span className="wd-author-name">{post.userName} </span>
                <span className="wd-author-handle">@{post.handle} · {post.time}</span>
                <div className="wd-content">
                    {post.tweet}
                    <div className="wd-hyperlink-img wd-paragraph-border wd-rounded-corners-all">

                        <img src={post.image}/>


                    </div>


                    <div className="wd-icon wd-flex">
                        <div className="wd-flex-icon">
                            <a href="#">
                                <i className="far fa-comment"></i>
                                <span className="wd-amount">{post.comments}</span>
                            </a>
                        </div>
                        <div className="wd-flex-icon"><a href="#">
                            <i className="fas fa-retweet"></i>
                            <span className="wd-amount">{post.retweet}</span>

                        </a>
                        </div>
                        <div className="wd-clicked-like wd-flex-icon"><a href="#">
                            <i className="far fa-heart"></i>
                            <span className="wd-amount">{post.likes}</span>
                        </a>
                        </div>

                        <div className="wd-clicked-like wd-flex-icon"><a href="#">
                            <i className="fa-solid fa-arrow-up-from-bracket"></i>

                        </a>
                        </div>
                    </div>

                </div>

            </div>


        </div>
   );
    }
};
export default PostItem;