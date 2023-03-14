(function(){
    let _oldElement = document.currentScript;
    let _navBarText =   `<div class="logo">
                            <div class="logoImage"></div>
                            <span class="logoText">  
                                <span class="logoText-small">Sailors'</span>
                                <span class="logoText-large">Activity <br>Centre</span>                     
                            </span>
                        </div>
                        <input type="checkbox" id="nav-toggle" class="nav-toggle" value="" />
                        <nav class="hero-nav">
                            <ul>
                                <li>
                                    <div class='search-container'>
                                        <input class='search expandRight' type='text' placeholder='Search...' id='searchRight'>
                                        <label class='button searchButton' for='searchRight'>
                                            <span class='searchGlass'>&#9906;</span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <a href="inbox.html" data-name='inbox'><span><i class="fa-solid fa-envelope fa-xl fa-fw"></i></span></a>
                                </li>
                                <li>
                                    <a href="chat.html" data-name='chat'><span><i class="fa-solid fa-comments fa-xl fa-fw"></i></span></a>
                                </li>
                                <li class="quick-apps">
                                    <button>COMMON APPS</button>                               
                                </li>
                            </ul>
                            <ul>
                                <li><a href="profile.html" data-name='profile'><span>${sessionStorage.getItem("user")}</span></a></li>
                                <li><a href="community.html" data-name='community'><span>Community</span></a></li>
                                <li><a href="activity_progress.html" data-name='activity'><span>Activities</span></a></li>
                                <li><a href="help.html" data-name='help'><span>Support</span></a></li>
                            </ul>
                        </nav>
                        <label for="nav-toggle" class="nav-toggle-label">
                            <span></span>
                        </label>`;

let _hoverDropdown = `<ul>
                        <li><a href="activity.html" data-name='activity'><span>Recent Activity</span></a></li>
                        <li><a href="friends.html" data-name='friends'><span>Friends</span></a></li>
                        <li><a href="learningTools.html" data-name='learningTools'><span>Learning Tools</span></a></li>
                        <li><a href="groups.html" data-name='groups'><span>Groups</span></a></li>
                        <li><a href="content.html" data-name='content'><span>Content</span></a></li>
                        <li><a href="achievements.html" data-name='achievements'><span>Achievements</span></a></li>
                        <li><a href="inventory.html" data-name='inventory'><span>Inventory</span></a></li>
                    </ul>`

let _hoverApps = `<ul>
                        <li>
                            <a href="download.html#appID1" data-name='activity'><span>Virtual Fleet</span></a>
                        </li>
                        <li>
                            <a href="download.html#appID2" data-name='activity'><span>App 2</span></a>
                        </li>
                        <li>    
                            <a href="download.html#appID3" data-name='activity'><span>App 3</span></a>
                        </li>
                        <li>
                            <a href="download.html#appID4" data-name='activity'><span>App 4</span></a>
                        </li>
                    </ul>`

let _dropDiv = document.createElement("div");
    _dropDiv.classList.add("hover-list");

let _appList = document.createElement("div");
    _appList.classList.add("hover-list");
    _appList.innerHTML = _hoverApps;


let _navWrapper = document.createElement("header");
let _navWrapper2 = document.createElement("div");
_navWrapper2.classList.add("navWrapper");
_navWrapper.appendChild(_navWrapper2);
_navWrapper2.innerHTML = _navBarText;

_navWrapper.querySelector(".logo").addEventListener("click", ()=>{window.open("/splash.html", "_self")});

_navWrapper.querySelector(".quick-apps").appendChild(_appList);


_navWrapper.querySelector("input.search").addEventListener("keyup",function(e){
    console.log("in here", e.keyCode)
    if(e.currentTarget.value.length < 4)
    {
        return;
    }else
    {
        if(e.keyCode == 13)
        {
            window.open("search.html");
        }
    }

    e.preventDefault();
})


let _userLoginItem = document.createElement("li");

_navWrapper.querySelector("ul").appendChild(_userLoginItem);

if(sessionStorage.getItem("user"))
{
    _userLoginItem.innerHTML = `<a href="dashboard_home.html" data-name='user'><span>Profile<i class="fa-solid fa-user-check fa-xl fa-fw"></i></span></a>`;
    _navWrapper.querySelector(`[data-name="profile"]`).parentElement.appendChild(_dropDiv);
    _dropDiv.innerHTML = _hoverDropdown;
}else
{
    _userLoginItem.innerHTML = `<a href="index.html" data-name='login'>Login</a>`;
}

// let _logoLoader = document.createElement("script");
//     _logoLoader.dataset.id = "RCN_VF_Logo_20230301_Light_Expanded";
//     _logoLoader.src = "/js/SVGInsert.js";
// _navWrapper.querySelector("span").appendChild(_logoLoader);

let _navCurrent = _oldElement.dataset.name;

if(_navCurrent != undefined)
{
    try {
        _navWrapper.querySelector(`[data-name="` + _navCurrent + `"]`).dataset.state = "active";
    } catch (error) {}
}
_oldElement.replaceWith(_navWrapper);
})();