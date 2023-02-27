(function(){
    let _dashboard_nav =   `
    <a href="dashboard_home.html" class="font-dark">
        <div data-name='dashboard'>
        <i class="fa-solid fa-xl fa-fw"></i>
        <p>Dashboard</p>
        </div>
    </a>
    <a href="course_progress.html" class="font-dark">
        <div data-name='courses'>
        <i class="fa-solid fa-chalkboard-user fa-xl fa-fw"></i>
        <p>Courses</p>
        </div>
    </a>
    <a href="achievements.html" class="font-dark">
        <div data-name='achievements'>
        <i class="fa-solid fa-award fa-xl fa-fw"></i>
        <p>Achievements</p>
        </div>
    </a>
    <a href="#" class="font-dark">
        <div data-name='avatar'>
        <i class="fa-solid fa-user fa-xl fa-fw"></i>
        <p>Avatar</p>
        </div>
    </a>
    <a href="#" class="font-dark">
        <div data-name='calendar'>
        <i class="fa-solid fa-calendar fa-xl fa-fw"></i>
        <p>Calendar</p>
        </div>
    </a>
    <a href="#" class="font-dark">
        <div data-name='inbox'>
        <i class="fa-solid fa-envelope fa-xl fa-fw"></i>
        <p>Inbox</p>
        </div>
    </a>
    `;

    let _dashWrapper = document.createElement("div");
        _dashWrapper.classList.add("dashboard-nav", "groups", "large-card");
        _dashWrapper.innerHTML = _dashboard_nav;


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
