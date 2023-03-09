(function(){
    let _navBarText =   `<div class="logo">
                        <a href="/splash.html">
                        <span>  
                            <p>Sailors' Activity Centre</p>                      
                        </span>`+
                        /*<img src="images/RCN_VF_Logo_20230217.svg" alt="Alternate Text" />`+
                       /* <div>
                            RCN<br>Virtual Fleet<br />Centre
                        </div>*/
                       ` </a>
                    </div>
                    <input type="checkbox" id="nav-toggle" class="nav-toggle" value="" />
                    <nav>
                        <ul>
                            <li>
                                <div class='search-container'>
                                    <input class='search expandRight' type='text' placeholder='Search...' id='searchRight'>
                                    <label class='button searchButton' for='searchRight'>
                                        <span class='searchGlass'>&#9906;</span>
                                    </label>
                                </div>
                            </li>
                            <li><a href="community.html" data-name='community'>Community</a></li>
                            <li><a href="help.html" data-name='help'>Support</a></li>
                            <li><a href="chat.html" data-name='chat'>
                            <i class="fa-solid fa-comments fa-xl fa-fw"></i></a></li>
                        </ul>
                    </nav>
                    <label for="nav-toggle" class="nav-toggle-label">
                        <span></span>
                    </label>`;

let _hoverDropdown = `<ul>
                        <li><a href="activity.html" data-name='activity'><span>Activity</span></a></li>
                        <li><a href="profile.html" data-name='profile'><span>Profile</span></a></li>
                        <li><a href="friends.html" data-name='friends'><span>Friends</span></a></li>
                        <li><a href="learningTools.html" data-name='learningTools'><span>Learning Tools</span></a></li>
                        <li><a href="groups.html" data-name='groups'><span>Groups</span></a></li>
                        <li><a href="content.html" data-name='content'><span>Content</span></a></li>
                        <li><a href="achievements.html" data-name='achievements'><span>Achievements</span></a></li>
                        <li><a href="inventory.html" data-name='inventory'><span>Inventory</span></a></li>
                    </ul>`

let _dropDiv = document.createElement("div");
    _dropDiv.classList.add("hover-list","align-right");


let _navWrapper = document.createElement("header");
_navWrapper.innerHTML = _navBarText;


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


let _logoLoader = document.createElement("script");
    _logoLoader.dataset.id = "RCN_VF_Logo_20230301_Light_Expanded";
    _logoLoader.src = "/js/SVGInsert.js";

let _userLoginItem = document.createElement("li");

_navWrapper.querySelector("ul").appendChild(_userLoginItem);

if(sessionStorage.getItem("user"))
{
    _userLoginItem.innerHTML = `<a href="dashboard_home.html" data-name='user'><span>${sessionStorage.getItem('user')}</span><img src="images/RCN_VF_Logo_20230217.svg" class='userIcon' /></a>`;
    _userLoginItem.appendChild(_dropDiv);
    _dropDiv.innerHTML = _hoverDropdown;
}else
{
    _userLoginItem.innerHTML = `<a href="index.html" data-name='login'>Login</a>`;
}

//_navWrapper.querySelector("span").appendChild(_logoLoader);

let _oldElement = document.querySelector("script#replace_with_navbar");

let _navCurrent = _oldElement.dataset.name;

if(_navCurrent != undefined)
{
try {
    _navWrapper.querySelector(`[data-name="` + _navCurrent + `"]`).dataset.state = "active";
} catch (error) {
    
}
}
_oldElement.replaceWith(_navWrapper);

/*
let _oldElement = document.querySelector("script#replace_with_navbar");
    _oldElement.parentElement.innerHTML = _navBarText;*/
})();