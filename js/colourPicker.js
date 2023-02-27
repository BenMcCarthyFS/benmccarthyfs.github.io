

(function() {
    let _colourPicker =   `<fieldset>
    <legend class="visually-hidden">Themes</legend>

    <label for="theme" class="visually-hidden">Theme 1</label>
    <input type="radio" name="theme" id="theme1" checked>

    <label for="theme" class="visually-hidden">Theme 2</label>
    <input type="radio" name="theme" id="theme2" >

    <label for="theme" class="visually-hidden">Theme 3</label>
    <input type="radio" name="theme" id="theme3" >

    <label for="theme" class="visually-hidden">Theme 4</label>
    <input type="radio" name="theme" id="theme4" >

    <label for="theme" class="visually-hidden">Theme 5</label>
    <input type="radio" name="theme" id="theme5" >
    
    <input type="checkbox" name="dark" id="darkmode" class="visually-hidden" > 
    <label for="darkmode" class="dark-toggle"><span></span></label>
</fieldset>`;

let _pickerForm = document.createElement("form");
_pickerForm.classList.add("colour-picker");
_pickerForm.innerHTML = _colourPicker;

let _oldElement = document.querySelector("script#replace_with_colourPicker");
_oldElement.replaceWith(_pickerForm);
})();


const setTheme = function()
{
    const activeTheme = localStorage.getItem("theme");
    const activeLightness = localStorage.getItem("darkmode");
    colourThemes.forEach((themeOption) => {
        if(themeOption.id === activeTheme)
        {
            themeOption.checked = true;
        }
    });

    if(activeLightness === "dark")
    {
        darkmode.checked = true;
    }
    // fallback for no :has() support
    document.documentElement.className = activeTheme + " " + activeLightness;

}

const storeTheme = function (theme)
{
    localStorage.setItem("theme", theme);
    setTheme();
}

const storeBrightness = function (lightness)
{
    localStorage.setItem("darkmode", lightness);
    setTheme();
}

const colourThemes = document.querySelectorAll('[name="theme"]');
const darkmode = document.querySelector('[name="dark"]');

darkmode.addEventListener("click", () => {
    darkmode.checked ? storeBrightness("dark") : storeBrightness("");
})


colourThemes.forEach(themeOption => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id);
    })
});

document.onload = setTheme();