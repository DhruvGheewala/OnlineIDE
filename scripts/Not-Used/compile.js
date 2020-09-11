// const { default: compileRun } = require("compile-run");

function reverse(str) {
    return str.split('').reverse().join('');
}

function extract_lang(url) {
    url = reverse(url);
    var n = url.search('#');
    if (n == -1) {
        // Language isn't selected
        return false;
    }
    str = '';
    for (let i = 0; i < n; i++)
        str += url[i];
    return reverse(str);
}

function getURL() {
    var cur_url = window.location.href;
    return cur_url;
}

function giveLang() { return document.getElementById('lang').value; }

function compileRun() {
    var lang = giveLang();
    if (lang == 'default') {
        alert('Please Select The Language !!');
        return;
    }

    var tag = document.getElementById('compile-run');
    if (tag.textContent === 'Run') {
        // Run the compiled code

        // Redirect
    } else {
        // Start Compilation

        // At the end change compile buttont to submit button
        tag.textContent = 'Run';
    }
}

function changeLabel() {
    var lang = giveLang();
    // console.log(lang);
    if (lang == 'py') {
        var tag = document.getElementById('compile-run');
        // console.log(tag);
        tag.textContent = 'Run';
    } else {
        var tag = document.getElementById('compile-run');
        tag.textContent = 'Compile';
    }
}