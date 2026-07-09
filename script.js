const textarea = document.querySelector('#text-area');
if (localStorage.getItem('textareaValue')) {
   textarea.innerHTML = localStorage.getItem('textareaValue');
}
textarea.focus()
textarea.addEventListener("focusOut", () => {
   textarea.focus();
});
textarea.addEventListener('input', () => {
   localStorage.setItem('textareaValue', textarea.innerHTML);
});
const fontSelector = document.getElementById('fontSelector');
const themeSelector = document.getElementById('themeSelector');
const fontSizeInput = document.getElementById('fontSizeInput');
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.style.backgroundColor = 'rgb(58, 58, 61)';
        document.body.style.color = 'white';
        textarea.style.backgroundColor = 'rgb(69, 68, 72)';
        textarea.style.color = 'white';
        themeSelector.style.backgroundColor = 'rgb(69, 68, 72)';
        themeSelector.style.color = 'white';
        fontSelector.style.backgroundColor = 'rgb(69, 68, 72)';
        fontSelector.style.color = 'white';
        fontSizeInput.style.backgroundColor = 'rgb(69, 68, 72)';
        fontSizeInput.style.color = 'white';
         document.querySelector("#save").style.backgroundColor = 'rgb(69, 68, 72)';
        document.querySelector("#save").style.color = 'white';
        document.getElementsByClassName("custom-file-upload")[0].style.backgroundColor = 'rgb(69, 68, 72)';
        document.getElementsByClassName("custom-file-upload")[0].style.color = 'white';

    } else if (theme === 'light') {
        document.body.style.backgroundColor = 'gainsboro';
        document.body.style.color = 'black';
        textarea.style.backgroundColor = 'whitesmoke';
        textarea.style.color = 'black';
        themeSelector.style.backgroundColor = 'whitesmoke';
        themeSelector.style.color = 'black';
        fontSelector.style.backgroundColor = 'whitesmoke';
        fontSelector.style.color = 'black';
        fontSizeInput.style.backgroundColor = 'whitesmoke';
        fontSizeInput.style.color = 'black';
        document.querySelector("#save").style.backgroundColor = 'whitesmoke';
        document.querySelector("#save").style.color = 'black';
          document.getElementsByClassName("custom-file-upload")[0].style.backgroundColor = 'whitesmoke';
        document.getElementsByClassName("custom-file-upload")[0].style.color = 'black';
    }
}
if (localStorage.getItem('selectedFont')) {
    const selectedFont = localStorage.getItem('selectedFont');
    textarea.style.fontFamily = selectedFont;
    fontSelector.value = selectedFont;
} else {
    textarea.style.fontFamily = 'Arial';
}
if (localStorage.getItem('theme') === 'dark') {
    applyTheme('dark');
    themeSelector.value = 'dark';
} else if (localStorage.getItem('theme') === 'light') {
   applyTheme('light');
   themeSelector.value = 'light';
}  else if (localStorage.getItem('theme') === 'auto') {
     localStorage.setItem('theme', 'auto');
     themeSelector.value = 'auto';
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (prefersDarkScheme.matches) {
         applyTheme('dark');
        } else {
           applyTheme('light');
        }
    }



themeSelector.addEventListener('change', () => {
    if (themeSelector.value === 'dark') {
        localStorage.setItem('theme', 'dark');
        applyTheme('dark');
    } else if (themeSelector.value === 'light') {
        localStorage.setItem('theme', 'light');
        applyTheme('light');
    } else if (themeSelector.value === 'auto') {
        localStorage.setItem('theme', 'auto');
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (prefersDarkScheme.matches) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
    }
});



fontSelector.addEventListener('change', () => {
    if( window.getSelection()){
    const selectedArea = document.createElement('span');
    selectedArea.style.fontFamily = fontSelector.value;
    const selection = window.getSelection();
    console.log(selection);
  
    }
});






fontSizeInput.addEventListener('input', () => {
    const fontSize = fontSizeInput.value;
    textarea.style.fontSize = fontSize + 'px';
    localStorage.setItem('fontSize', fontSize);
});

if (localStorage.getItem('fontSize')) {
    const fontSize = localStorage.getItem('fontSize');
    textarea.style.fontSize = fontSize + 'px';
    fontSizeInput.value = fontSize;
} else {
    textarea.style.fontSize = '16px';
    fontSizeInput.value = '16';
}

function saveText() {
    const textString = textarea.innerText;
    const textArray = [textString]
    const  blob = new Blob(textArray, {type:"text/txt"});
    console.log(blob);
    const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
let textFileName = prompt("Text File Name:","My Text File");
link.target="_blank";
if (textFileName === null || textFileName === "") {
    
} else {
link.download = textFileName + ".txt" || "Text File.txt";
link.click();
}
  



}

function importText() {


}