const defLang = 'C++';

const Languages = {

    'Select Language': {
        code: [
            'You haven\'t Selected a Language',
            'Please Select a Language...'
        ].join('\n')
    },

    'C++': {
        extension: 'cpp',
        code: [
            '#include <bits/stdc++.h>',
            'using namespace std;',
            '',
            'int main()',
            '{',
            '\t// Write Your Code Here',
            '\treturn 0;',
            '}'
        ].join('\n')
    },

    'Python': {
        extension: 'py',
        code: [
            '# Write Your Code Here',
            ''
        ].join('\n')
    },

    'JavaScript': {
        extension: 'js',
        code: [
            '// Write Your Code Here',
            ''
        ].join('\n')
    },

    'Java': {
        extension: 'java',
        code: [
            'import java.util.*;',
            'import java.lang.*',
            'import java.io.*',
            '// Add imports here',
            '',
            'class Main {',
            '\tpublic static void main(String []args) {',
            '\t\t// Write your code here',
            '\t}',
            '}'
        ].join('\n')
    },

    'C': {
        extension: 'c',
        code: [
            '#include <stdio.h>',
            '',
            'int main()',
            '{',
            '\t// Write your code here',
            '\treturn 0;',
            '}'
        ].join('\n')
    },

    'C#': {
        extension: 'cs',
        code: [
            'using System;',
            'public class Solution {',
            '\tpublic static void Main() {',
            '\t\t// Write your code here',
            '\t}',
            '}'
        ].join('\n')
    },

    'Text Document': {
        extension: 'txt',
        code: ''
    }
}

function getPreferedLang() {
    // This isn't completed yet
    return null || 'Select Language';
}

function getLangTemplate() {
    var lang = $('#lang').text();
    return Languages[lang].code;
}

$(document).ready(function() {

    // Set Default or Prefered language
    $('#lang').text(getPreferedLang());


    // Set the content of textarea with defualt or given template by user
    $('#txt-area').text(getLangTemplate());
});

$(document).ready($('.lang-selector').click(function(e) {

    $('#active-lang').removeClass('active');
    $('#active-lang').removeAttr('id');

    $(this).addClass('active');
    $(this).attr('id', 'active-lang');

    $('#lang').text($(this).text());
    var temp = getLangTemplate();
    $('#txt-area').text(temp);
}));