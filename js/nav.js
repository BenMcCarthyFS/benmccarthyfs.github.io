(function(){
    let _navBarText =   `<div class="logo">
                        <a href="/index.html">
                        <span>
                        <object type="image/svg+xml" data="images/RCN_VF_Logo_20230217.svg"></object>
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
                            <li><a href="">Download</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Language</a></li>
                            <li><a href="loginSignUp.html">Login</a></li>
                        </ul>
                    </nav>
                    <label for="nav-toggle" class="nav-toggle-label">
                        <span></span>
                    </label>`;

let _oldElement = document.querySelector("script#replace_with_navbar");
    _oldElement.parentElement.innerHTML = _navBarText;
})();