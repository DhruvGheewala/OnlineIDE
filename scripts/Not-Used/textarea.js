function tabSize() {
    var value = document.getElementById('tab-size');
    var len = value.value;
    // debug(len);

    var res = '';
    for (var i = 0; i < len; i++)
        res += ' ';
    // debug('a' + res + 'a');
    return res;
}

document.querySelector("textarea").addEventListener('keydown', function(e) {
    if (e.keyCode === 9) { // tab was pressed
        // get caret position/selection
        var start = this.selectionStart;
        var end = this.selectionEnd;

        var target = e.target;
        var mid = tabSize();
        var value = target.value;

        // set textarea value to: text before caret + tab + text after caret
        target.value = value.substring(0, start) +
            mid +
            value.substring(end);

        // put caret at right position again (add one for the tab)
        this.selectionStart = this.selectionEnd = start + mid.length;

        // prevent the focus lose
        e.preventDefault();
    }
}, false);