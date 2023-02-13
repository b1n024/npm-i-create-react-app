import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList  = () => {
    return (`
           <ul class="list-group">
           <li href="" class="list-group-item wd-font-bold border-0">Who to follow</li>
           ${who.map(who => {
        return (WhoToFollowListItem(who));
    }).join('')}

           </ul>
`);
}
export default WhoToFollowList;
