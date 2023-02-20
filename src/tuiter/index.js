import Nav from "../nav";
import NavigationSidebar
    from "./navigation-sidebar";
import WhoToFollowListItem
    from "./who-to-follow-list/";
import PostSummaryList from "./post-summary-list";

function Tuiter() {
    return (
        <div>
            <Nav/>
            <NavigationSidebar active="home"/>
            <WhoToFollowListItem/>
            <PostSummaryList/>
            <h1>Tuiter</h1>
        </div>
    )
}

export default Tuiter