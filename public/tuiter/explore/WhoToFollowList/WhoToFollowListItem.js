const WhoToFollowListItem  = (who) => {
    return(`
   <li href="" class=" list-group-item border-0">
        <div class="col">
            <img src="${who.avatarIcon}
           "
                 class="wd-avatar">
        </div>
        <div class="col">
            <button class="wd-override-bs btn btn-primary rounded-pill wd-float-right">
                
                Follow
            </button>
            <div class="col wd-margin-left-50">
                <div class="wd-font-bold">${who.userName} <i class="fas fa-check-circle"></i></div>
                <div>${who.handle}</div>
            </div>
            
        </div>
    
    </li>
 `);
}
export default WhoToFollowListItem;