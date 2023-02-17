const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/public">
       <i class="fab fa-twitter "></i></a>
       
     <a class="list-group-item" href="../HomeScreen/index.html">
     
       <i class="fas fa-home ${active=='home'?'active':''}"></i> Home</a>
       
     <a class="list-group-item" href=" ../explore/index.html">
       <i class="fas fa-hashtag ${active=='explore'?'active':''}"></i> Explore</a>
     
     <a class="list-group-item" href="/public">
       <i class="fas fa-bell ${active=='notifications'?'active':''}"></i> Notifications</a>
     
     <a class="list-group-item" href="/public">
       <i class="fas fa-envelope ${active=='messages'?'active':''}"></i> Messages</a>
     
     <a class="list-group-item" href="/public">
       <i class="fas fa-bookmark ${active=='bookmarks'?'active':''}"></i> Bookmarks</a>
     
     <a class="list-group-item" href="/public">
       <i class="fas fa-list ${active=='lists'?'active':''}"></i> Lists</a>

     <a class="list-group-item" href="/public">
       <i class="fas fa-user ${active=='profile'?'active':''}"></i> Profile</a>

     <a class="list-group-item" href="/public">
       <i class="fas fa-ellipsis-h ${active=='more'?'active':''}"></i> More</a>

       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

