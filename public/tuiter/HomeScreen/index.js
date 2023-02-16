import NavigationSidebar from "../explore/NavigationSidebar/index.js";
import ExploreComponent from "../explore/ExploreScreen/ExploreComponent.js";
import WhoToFollowList from "../explore/WhoToFollowList/index.js";
import PostSummaryList from "../explore/PostSummaryList";
import postList from "./PostList/index.js";


function exploreComponent() {
    $('#wd-explore').append(`
       
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2 ">
<!--    <h3>NavigationSidebar</h3>-->
    ${NavigationSidebar()}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 ">
    ${postList()}
    
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
<!--    <h3>WhoToFollowList </h3>-->
    ${PostSummaryList()}
   </div>
  </div>
   `);
}
$(exploreComponent);