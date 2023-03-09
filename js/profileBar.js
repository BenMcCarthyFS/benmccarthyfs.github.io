(function(){
    let _oldElement = document.currentScript;
    let _profileBar =   `<div class="profile-name">${sessionStorage.getItem("user")}</div>
    <img src="/images/HQScreenshot_1080.png" alt="image"/>
    <div class="profile-details">
        <div class="profile-rank">Rank: Seargent Class A</div>
        <div class="profile-email">Email: example@forces.ecn.gc.ca</div>
        <div class="profile-location">Location: Toronto Ontario, Canada</div>
    </div>`;

let _profileWrapper = document.createElement("div");
_profileWrapper.classList.add("profile-header");
_profileWrapper.innerHTML = _profileBar;

_oldElement.replaceWith(_profileWrapper);
})();