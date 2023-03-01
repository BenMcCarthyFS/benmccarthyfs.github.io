(function(){
    let _navBarText =   `<div class="logo">
                        <a href="/index.html">
                        <span>
                        <object type="image/svg+xml" data="images/RCN_VF_Logo_20230301_Light_Expanded.svg"></object>
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
                            <li><a href="addOns.html" data-name='addons'>Add Ons</a></li>
                            <li><a href="community.html" data-name='community'>Community</a></li>
                            <li><a href="help.html" data-name='help'>Help</a></li>
                            <li><a href="loginSignUp.html" data-name='login'>Login</a></li>
                        </ul>
                    </nav>
                    <label for="nav-toggle" class="nav-toggle-label">
                        <span></span>
                    </label>`;


let _navWrapper = document.createElement("header");
_navWrapper.innerHTML = _navBarText;


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