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
                            <li><a href="splash.html" data-name='home'>Home</a></li>
                            <li><a href="learningTools.html" data-name='addons'>Learning Tools</a></li>
                            <li><a href="community.html" data-name='community'>Community</a></li>
                            <li><a href="help.html" data-name='help'>Help</a></li>
                        </ul>
                    </nav>
                    <label for="nav-toggle" class="nav-toggle-label">
                        <span></span>
                    </label>`;


let _navWrapper = document.createElement("header");
_navWrapper.innerHTML = _navBarText;

let _logoLoader = document.createElement("script");
    _logoLoader.dataset.id = "RCN_VF_Logo_20230301_Light_Expanded";
    _logoLoader.src = "/js/SVGInsert.js";

let _userLoginItem = document.createElement("li");

_navWrapper.querySelector("ul").appendChild(_userLoginItem);

if(sessionStorage.getItem("user"))
{
    _userLoginItem.innerHTML = `<a href="dashboard_home.html" data-name='user'><span>${sessionStorage.getItem('user')}</span><img src="images/RCN_VF_Logo_20230217.svg" class='userIcon' /></a>`;
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