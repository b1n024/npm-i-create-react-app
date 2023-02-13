const PostSummaryItem  = (post) => {
    // console.log(post)
    return(`
   <li class="list-group-item">
        <div class="wd-media-img-size-float-right">
            <img src="${post.image}" class="wd-media-img-size-float-right">
        </div>

        <div><span class="wd-font-bold">${post.userName} </span><i class="fas fa-check-circle"></i>
            <span class="wd-topic-font-color"> - ${post.time}</span>

        </div>
        <div class="wd-media-font-bold">
            ${post.title}
        </div>
        <div class="wd-topic-font-color">${post.tweets}</div>


    </li>
 `);
}
export default PostSummaryItem;