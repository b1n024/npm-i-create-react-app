
import exploreItems from "./posts.js";
import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList  = () => {

    return (`
           <ul class="list-group">
           
           ${exploreItems.map(exploreItems => {
        console.log(exploreItems)
        return (PostSummaryItem(exploreItems));
    }).join('')}

           </ul>
`);
}
export default PostSummaryList;
