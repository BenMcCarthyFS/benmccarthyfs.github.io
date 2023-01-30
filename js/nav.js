let _navBarText =   `<div class="logo">
                        <a href="/index.html">
                        <img src="images/Desktop_Logo_2022_01.png" alt="Alternate Text" />
                        <div>
                            RCN<br>Virtual Fleet<br />Centre
                        </div>
                        </a>
                    </div>
                    <input type="checkbox" id="nav-toggle" class="nav-toggle" value="" />
                    <nav>
                        <ul>
                            <li><a href="">Download</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Language</a></li>
                            <li><a href="./login.html">Login</a></li>
                        </ul>
                    </nav>
                    <label for="nav-toggle" class="nav-toggle-label">
                        <span></span>
                    </label>`;

let _oldElement = document.querySelector("script#replace_with_navbar");
    _oldElement.parentElement.innerHTML = _navBarText;