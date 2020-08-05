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

function compilerun() {

    var lang = extract_lang(getURL());
    console.log('lang : ' + lang);
    if (lang) {

        var tag = document.getElementById('compile-run');
        if (tag.textContent === 'Run') {
            // Run the compiled code

            // Redirect
        } else {
            // Start Compilation

            // At the end change compile buttont to submit button
            tag.textContent = 'Run';
        }
        return;
    }
    alert('Please Select The Language !!');
}