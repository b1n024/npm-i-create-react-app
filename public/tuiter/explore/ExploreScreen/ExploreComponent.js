import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <div class="wd-margin ">
                <form>

                    <img src="magnifying_glass_icon.png" height="10" class="wd-pos-relative-nudge-left"><input
                        placeholder="      Search Tuiter"
                        class="wd-rounded-corners-all-around wd-fg-color-white wd-bg-color-search"
                        style="width: 90%; height: 3em">
                    <span class="wd-pos-relative-nudge-left">
        <a href="explore-settings.html" class="wd-setting-float-right">
    <i class="fas fa-cog wd-twitter-color"></i></a>
    </span>
                </form>
            </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <li class="nav-item wd-override-nav">
                        <a class="nav-link active wd-override-active" href="#">For you</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link wd-override-nav-link-font" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-override-nav-link-font" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-override-nav-link-font" href="#">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-override-nav-link-font" href="#">Entertainment</a>
                    </li>

           </ul>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

