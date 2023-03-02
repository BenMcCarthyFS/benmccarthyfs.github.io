const _colourReset = false;

(function() {
    let _colourPicker =   `<fieldset>
    <legend class="visually-hidden">Themes</legend>

    <span>
        <label for="clr-100" class="">--Clr-100</label>
        <input type="color" name="clr-100" id="clr-100" data-id="1">
    </span>

    <span>
        <label for="clr-200" class="">--Clr-200</label>
        <input type="color" name="clr-200" id="clr-200" data-id="2">
    </span>

    <span>
        <label for="clr-300" class="">--Clr-300</label>
        <input type="color" name="clr-300" id="clr-300" data-id="3">
    </span>

    <span>
        <label for="clr-400" class="">--Clr-400</label>
        <input type="color" name="clr-400" id="clr-400" data-id="4">
    </span>

    <span>
        <label for="clr-500" class="">--Clr-500</label>
        <input type="color" name="clr-500" id="clr-500" data-id="5">
    </span>

    <span>
        <label for="clr-600" class="">--Clr-600</label>
        <input type="color" name="clr-600" id="clr-600" data-id="6">
    </span>

    <button id="palette-reset">RESET</button>

    <span class="flex-row">
        <label for="theme" class="visually-hidden">Theme 1</label>
        <input type="radio" name="theme" id="theme1" data-id='1' checked>

        <label for="theme" class="visually-hidden">Theme 2</label>
        <input type="radio" name="theme" id="theme2" data-id='2' >

        <label for="theme" class="visually-hidden">Theme 3</label>
        <input type="radio" name="theme" id="theme3" data-id='3' >
    </span>
    
    <input type="checkbox" name="dark" id="darkmode" class="visually-hidden" > 
    <label for="darkmode" class="dark-toggle"><span></span></label>
</fieldset>`;

let _pickerForm = document.createElement("form");
_pickerForm.id = "pickerForm";
_pickerForm.classList.add("colour-picker");
_pickerForm.innerHTML = _colourPicker;

_pickerForm.querySelector("#palette-reset").addEventListener("click", PaletteReset);

_pickerForm.querySelectorAll("input[type='color']").forEach((input) => {
    input.addEventListener("input", NewColourPicked, false);
  });

if(_colourReset)
{
    let _pID = 1;
    while(_pID < 5)
    {
        localStorage.removeItem('palette'+_pID+'Light');
        localStorage.removeItem('palette'+_pID+'Dark');
        console.log("looping and removing")
        _pID++;
    }
}

let _oldElement = document.querySelector("script#replace_with_colourPicker");
_oldElement.replaceWith(_pickerForm);
})();

function PaletteReset(e)
{
    e.preventDefault();
    savedPalette = palettes[paletteID][( darkmode.checked ? "Dark" : "Light")];

    LoadPalette(savedPalette);
}

const LightColourNames = [  
                            "--clr-light-100",
                            "--clr-light-200",
                            "--clr-light-300",
                            "--clr-light-400",
                            "--clr-light-500",
                            "--clr-light-600"
                            ];

const DarkColourNames = [  
                            "--clr-dark-100",
                            "--clr-dark-200",
                            "--clr-dark-300",
                            "--clr-dark-400",
                            "--clr-dark-500",
                            "--clr-dark-600"
                            ];
const palettes = [
                [],[],[],[]
];

palettes[1]["Light"] = {
    [LightColourNames[0]]: "hsl(0 0% 100%)",
    [LightColourNames[1]]: "hsl(0 0% 90%)",
    [LightColourNames[2]]: "hsl(0 0% 65%)",
    [LightColourNames[3]]: "hsl(0 0% 50%)",
    [LightColourNames[4]]: "hsl(0 0% 35%)",
    [LightColourNames[5]]: "hsl(0 0% 20%)"
}

palettes[1]["Dark"] = {
    [DarkColourNames[0]]: "hsl(0 0% 100%)",
    [DarkColourNames[1]]: "hsl(0 0% 35%)",
    [DarkColourNames[2]]: "hsl(0 0% 65%)",
    [DarkColourNames[3]]: "hsl(0 0% 30%)",
    [DarkColourNames[4]]: "hsl(0 0% 15%)",
    [DarkColourNames[5]]: "hsl(0 0% 20%)",
}

palettes[2]["Light"] = {
    [LightColourNames[1]]: "hsl(0 0% 100%)",
    [LightColourNames[0]]: "hsl(41 40% 95%)",
    [LightColourNames[2]]: "hsl(208 64% 60%)",
    [LightColourNames[3]]: "hsl(0 0% 20%)",
    [LightColourNames[4]]: "hsl(208 74% 52%)",
    [LightColourNames[5]]: "hsl(211 100% 23%)"
}

palettes[2]["Dark"] = {
    [DarkColourNames[3]]: "hsl(0 0% 100%)",
    [DarkColourNames[5]]: "hsl(41 40% 95%)",
    [DarkColourNames[1]]: "hsl(208 44% 10%)",
    [DarkColourNames[0]]: "hsl(0 0% 20%)",
    [DarkColourNames[2]]: "hsl(208 74% 32%)",
    [DarkColourNames[4]]: "hsl(211 60% 23%)",
}

palettes[3]["Light"] = {
    [LightColourNames[1]]: "hsl(0 0% 100%)",
    [LightColourNames[0]]: "hsl(53 12% 90%)",
    [LightColourNames[2]]: "hsl(208 44% 60%)",
    [LightColourNames[4]]: "hsl(208 56% 19%)",
    [LightColourNames[3]]: "hsl(201 27% 79%)",
    [LightColourNames[5]]: "hsl(202 53% 31%)"
}

palettes[3]["Dark"] = {
    [DarkColourNames[3]]: "hsl(0 0% 100%)",
    [DarkColourNames[5]]: "hsl(53 12% 83%)",
    [DarkColourNames[1]]: "hsl(208 64% 20%)",
    [DarkColourNames[2]]: "hsl(208 56% 19%)",
    [DarkColourNames[4]]: "hsl(201 27% 29%)",
    [DarkColourNames[0]]: "hsl(202 53% 31%)",
}

function NewColourPicked(e)
{
    console.log("Colour was picked from somewhere");
    let _colourVarID = e.currentTarget.dataset.id;    
    let colourName = darkmode.checked ? DarkColourNames : LightColourNames;
    document.documentElement.style.setProperty(colourName[_colourVarID-1], e.currentTarget.value);

    
    localStorage.setItem("palette"+paletteID+(darkmode.checked ? "Dark" : "Light"), JSON.stringify(CurrentPaletteJson()));
}

const setTheme = function()
{
    const activeTheme = localStorage.getItem("theme");
    const activeLightness = localStorage.getItem("darkmode");
    colourThemes.forEach((themeOption) => {
        if(themeOption.id === activeTheme)
        {
            themeOption.checked = true;
            paletteID = themeOption.dataset.id;
        }
    });

    if(activeLightness === "dark")
    {
        darkmode.checked = true;
    }
    // fallback for no :has() support
    document.documentElement.className = activeTheme + " " + activeLightness;
    
    let savedPalette = JSON.parse(localStorage.getItem('palette'+paletteID+(darkmode.checked ? "Dark" : "Light")));

    if(!savedPalette)savedPalette = palettes[paletteID][( darkmode.checked ? "Dark" : "Light")];

    console.log("local", savedPalette)

    LoadPalette(savedPalette);
}

const LoadPalette = function(palette)
{
    let colorForm = document.getElementById('pickerForm');
    let colorName = darkmode.checked ? DarkColourNames : LightColourNames;

    colorForm.elements.namedItem("clr-100").value = HSLtoHex(palette[colorName[0]]);
    colorForm.elements.namedItem("clr-200").value = HSLtoHex(palette[colorName[1]]);
    colorForm.elements.namedItem("clr-300").value = HSLtoHex(palette[colorName[2]]);
    colorForm.elements.namedItem("clr-400").value = HSLtoHex(palette[colorName[3]]);
    colorForm.elements.namedItem("clr-500").value = HSLtoHex(palette[colorName[4]]);
    colorForm.elements.namedItem("clr-600").value = HSLtoHex(palette[colorName[5]]);

    console.log("------------loading palette")
    for(const clrName of colorName)
    {
        console.log(palette[clrName]);
        console.log(HSLtoHex(palette[clrName]));
        document.documentElement.style.setProperty(clrName, HSLtoHex(palette[clrName]));
    }
    console.log("------------finished palette")
}

const HSLtoHex = function(value)
{
    if(value.charAt(0) === "#")return value;

    let hslText = value.substring(value.indexOf("(")+1, value.lastIndexOf(")"));
    hslText = hslText.replaceAll("%","");

    let hslVals = hslText.split(" ");

    let h = parseInt(hslVals[0]);
    let s = parseInt(hslVals[1]);
    let l = parseInt(hslVals[2]);

    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

const CurrentPaletteJson = function()
{
    let colorForm = document.getElementById('pickerForm');
    let colorName = darkmode.checked ? DarkColourNames : LightColourNames;
    return {
                [colorName[0]]:colorForm.elements.namedItem("clr-100").value,
                [colorName[1]]:colorForm.elements.namedItem("clr-200").value,
                [colorName[2]]:colorForm.elements.namedItem("clr-300").value,
                [colorName[3]]:colorForm.elements.namedItem("clr-400").value,
                [colorName[4]]:colorForm.elements.namedItem("clr-500").value,
                [colorName[5]]:colorForm.elements.namedItem("clr-600").value
            };
}

const storeTheme = function (theme)
{
    let colorName = darkmode.checked ? "Dark" : "Light";

    localStorage.setItem("theme", theme);
    localStorage.setItem("palette"+paletteID+colorName, JSON.stringify(CurrentPaletteJson()));
    setTheme();
}

const storeBrightness = function (lightness)
{
    localStorage.setItem("darkmode", lightness);
    setTheme();
}

const colourThemes = document.querySelectorAll('[name="theme"]');
const darkmode = document.querySelector('[name="dark"]');
var paletteID = 0;

darkmode.addEventListener("click", () => {
    darkmode.checked ? storeBrightness("dark") : storeBrightness("");
})


colourThemes.forEach(themeOption => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id);
        paletteID = themeOption.dataset.id;
    })
});

document.onload = setTheme();