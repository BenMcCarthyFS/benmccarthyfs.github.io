(function(){
    let _dashboard_nav =   `
    <a href="dashboard_home.html" class="font-dark">
        <div data-name='dashboard'>
        <i class="fa-solid fa-xl fa-fw"></i>
        <p>Dashboard</p>
        </div>
    </a>
    <a href="activity_progress.html" class="font-dark">
        <div data-name='courses'>
        <i class="fa-solid fa-chalkboard-user fa-xl fa-fw"></i>
        <p>Activities</p>
        </div>
    </a>
    <a href="achievements.html" class="font-dark">
        <div data-name='achievements'>
        <i class="fa-solid fa-award fa-xl fa-fw"></i>
        <p>Achievements</p>
        </div>
    </a>
    <a href="avatar.html" class="font-dark">
        <div data-name='avatar'>
        <i class="fa-solid fa-user fa-xl fa-fw"></i>
        <p>Avatar</p>
        </div>
    </a>
    <a href="calendar.html" class="font-dark">
        <div data-name='calendar'>
        <i class="fa-solid fa-calendar fa-xl fa-fw"></i>
        <p>Calendar</p>
        </div>
    </a>
    <a href="inbox.html" class="font-dark">
        <div data-name='inbox'>
        <i class="fa-solid fa-envelope fa-xl fa-fw"></i>
        <p>Inbox</p>
        </div>
    </a>
    <a href="index.html" class="font-dark">
        <div data-name='logout'>
        <i class="fa-solid fa-right-from-bracket fa-xl fa-fw"></i>
        <p>Logout</p>
        </div>
    </a>
    `;

    let _dashWrapper = document.createElement("div");
        _dashWrapper.classList.add("dashboard-nav", "groups", "large-card");
        _dashWrapper.innerHTML = _dashboard_nav;

    _dashWrapper.querySelector(`[href="index.html"]`).addEventListener("click",function(){sessionStorage.clear("user")});

    let _oldElement = document.querySelector("script#replace_with_dashnav");

    let _dashCurrent = _oldElement.dataset.name;

    if(_dashCurrent != undefined)
    {
        try {
            _dashWrapper.querySelector(`[data-name="` + _dashCurrent + `"]`).dataset.state = "active";
        } catch (error) {
            
        }
    }
    _oldElement.replaceWith(_dashWrapper);
})();
