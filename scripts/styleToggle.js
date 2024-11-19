const toggleTheme = document.getElementById("styleToggle");

const storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme);
toggleTheme.onclick = function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";
    if (currentTheme === "light") {
        targetTheme = "dark";
    }
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};

var els = document.querySelectorAll('.external');
        for (var i=0; i < els.length; i++) {
            els[i].setAttribute("target", "_blank");
        }

// since this javascript file is just in everysingle page, i might change its name to something like "global.js" to add some extra things
