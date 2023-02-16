const PostItem = (post) => {
    if (post.content) {
        return (`
       <div class="wd-paragraph-margin">

            <span>
                <img src=${post.avatar} class="wd-avatar">

            </span>
            <div class="wd-move-right">
                <span class="wd-author-name">${post.userName} </span>
                <span class="wd-author-handle">@${post.handle} · ${post.time}</span>
                <div class="wd-content">
                    ${post.tweet}
                    <div class="wd-hyperlink-img wd-paragraph-border">

                        <img src=${post.image}>


                    </div>
                    <div class="wd-text wd-paragraph-border wd-rounded-corners-bottom">
                        <div class="wd-author-name ">
                            ${post.title}
                        </div>
                        <div class="wd-text-content">
                            ${post.content}
                            <br>
                            ${post.link}

                        </div>
                    </div>

                    <div class="wd-icon wd-flex">
                        <div class="wd-flex-icon">
                            <a href="#">
                                <i class="far fa-comment"></i>
                                <span class="wd-amount">${post.comments}</span>
                            </a>
                        </div>
                        <div class="wd-flex-icon"><a href="#">
                            <i class="fas fa-retweet"></i>
                            <span class="wd-amount">${post.retweet}</span>

                        </a>
                        </div>
                        <div class="wd-clicked-like wd-flex-icon"><a href="#">
                            <i class="far fa-heart"></i>
                            <span class="wd-amount">${post.likes}</span>
                        </a>
                        </div>

                        <div class="wd-clicked-like wd-flex-icon"><a href="#">
                            <i class="fa-solid fa-arrow-up-from-bracket"></i>

                        </a>
                        </div>
                    </div>

                </div>

            </div>


        </div>
   `);
    } else {
        return (`
       <div class="wd-paragraph-margin">

            <span>
                <img src=${post.avatar} class="wd-avatar">

            </span>
            <div class="wd-move-right">
                <span class="wd-author-name">${post.userName} </span>
                <span class="wd-author-handle">@${post.handle} · ${post.time}</span>
                <div class="wd-content">
                    ${post.tweet}
                    <div class="wd-hyperlink-img wd-paragraph-border wd-rounded-corners-all">

                        <img src=${post.image}>


                    </div>
                    

                    <div class="wd-icon wd-flex">
                        <div class="wd-flex-icon">
                            <a href="#">
                                <i class="far fa-comment"></i>
                                <span class="wd-amount">${post.comments}</span>
                            </a>
                        </div>
                        <div class="wd-flex-icon"><a href="#">
                            <i class="fas fa-retweet"></i>
                            <span class="wd-amount">${post.retweet}</span>

                        </a>
                        </div>
                        <div class="wd-clicked-like wd-flex-icon"><a href="#">
                            <i class="far fa-heart"></i>
                            <span class="wd-amount">${post.likes}</span>
                        </a>
                        </div>

                        <div class="wd-clicked-like wd-flex-icon"><a href="#">
                            <i class="fa-solid fa-arrow-up-from-bracket"></i>

                        </a>
                        </div>
                    </div>

                </div>

            </div>


        </div>
   `);
    }
}
export default PostItem;