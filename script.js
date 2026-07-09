const textarea = document.querySelector('#text-area');
if (localStorage.getItem('textareaValue')) {
   textarea.innerHTML = localStorage.getItem('textareaValue');
}

textarea.addEventListener('input', () => {
   localStorage.setItem('textareaValue', textarea.innerHTML);
});
const fontSelector = document.getElementById('fontSelector');
const themeSelector = document.getElementById('themeSelector');
if (localStorage.getItem('selectedFont')) {
    const selectedFont = localStorage.getItem('selectedFont');
    textarea.style.fontFamily = selectedFont;
    fontSelector.value = selectedFont;
} else {
    textarea.style.fontFamily = 'Arial';
}
if (localStorage.getItem('theme') === 'dark') {
    document.body.style.backgroundColor = 'rgb(58, 58, 61)';
    document.body.style.color = 'white';
    textarea.style.backgroundColor = 'rgb(69, 68, 72)';
    textarea.style.color = 'white';
    themeSelector.style.backgroundColor = 'rgb(69, 68, 72)';
    themeSelector.style.color = 'white';
    fontSelector.style.backgroundColor = 'rgb(69, 68, 72)';
    fontSelector.style.color = 'white';
    themeSelector.value = 'dark';
} else if (localStorage.getItem('theme') === 'light') {
    document.body.style.backgroundColor = 'gainsboro';
    document.body.style.color = 'black';
    textarea.style.backgroundColor = 'whitesmoke';
    textarea.style.color = 'black';
    themeSelector.style.backgroundColor = 'whitesmoke';
    themeSelector.style.color = 'black';
    fontSelector.style.backgroundColor = 'whitesmoke';
    fontSelector.style.color = 'black';
}  else if (localStorage.getItem('theme') === 'auto') {
     localStorage.setItem('theme', 'auto');
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (prefersDarkScheme.matches) {
            document.body.style.backgroundColor = 'rgb(58, 58, 61)';
            document.body.style.color = 'white';
            textarea.style.backgroundColor = 'rgb(69, 68, 72)';
            textarea.style.color = 'white';
            themeSelector.style.backgroundColor = 'rgb(69, 68, 72)';
            themeSelector.style.color = 'white';
            fontSelector.style.backgroundColor = 'rgb(69, 68, 72)';
            fontSelector.style.color = 'white';
        } else {
            document.body.style.backgroundColor = 'gainsboro';
            document.body.style.color = 'black';
            textarea.style.backgroundColor = 'whitesmoke';
            textarea.style.color = 'black';
            themeSelector.style.backgroundColor = 'whitesmoke';
            themeSelector.style.color = 'black';
            fontSelector.style.backgroundColor = 'whitesmoke';
            fontSelector.style.color = 'black';
        }
    }



themeSelector.addEventListener('change', () => {
    if (themeSelector.value === 'dark') {
        localStorage.setItem('theme', 'dark');
        document.body.style.backgroundColor = 'rgb(58, 58, 61)';
        document.body.style.color = 'white';
        textarea.style.backgroundColor = 'rgb(69, 68, 72)';
        textarea.style.color = 'white';
        themeSelector.style.backgroundColor = 'rgb(69, 68, 72)';
        themeSelector.style.color = 'white';
        fontSelector.style.backgroundColor = 'rgb(69, 68, 72)';
        fontSelector.style.color = 'white';
    } else if (themeSelector.value === 'light') {
        localStorage.setItem('theme', 'light');
        document.body.style.backgroundColor = 'gainsboro';
        document.body.style.color = 'black';
        textarea.style.backgroundColor = 'whitesmoke';
        textarea.style.color = 'black';
        themeSelector.style.backgroundColor = 'whitesmoke';
        themeSelector.style.color = 'black';
        fontSelector.style.backgroundColor = 'whitesmoke';
        fontSelector.style.color = 'black';
    } else if (themeSelector.value === 'auto') {
        localStorage.setItem('theme', 'auto');
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (prefersDarkScheme.matches) {
            document.body.style.backgroundColor = 'rgb(58, 58, 61)';
            document.body.style.color = 'white';
            textarea.style.backgroundColor = 'rgb(69, 68, 72)';
            textarea.style.color = 'white';
            themeSelector.style.backgroundColor = 'rgb(69, 68, 72)';
            themeSelector.style.color = 'white';
            fontSelector.style.backgroundColor = 'rgb(69, 68, 72)';
            fontSelector.style.color = 'white';
        } else {
            document.body.style.backgroundColor = 'gainsboro';
            document.body.style.color = 'black';
            textarea.style.backgroundColor = 'whitesmoke';
            textarea.style.color = 'black';
            themeSelector.style.backgroundColor = 'whitesmoke';
            themeSelector.style.color = 'black';
            fontSelector.style.backgroundColor = 'whitesmoke';
            fontSelector.style.color = 'black';
        }
    }
});



fontSelector.addEventListener('change', () => {
    const selectedFont = fontSelector.value;
    textarea.style.fontFamily = selectedFont;
    localStorage.setItem('selectedFont', selectedFont);
});