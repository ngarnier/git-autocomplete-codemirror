# git-autcomplete-codemirror

A package to generate a tree of available tags and attributes based on a version of MJML. 

The tree structure is based on [xmlcomplete](https://github.com/codemirror/CodeMirror/blob/master/demo/xmlcomplete.html#L44-L79) from CodeMirror (used to generate autocomplete in the [mjml-app](https://github.com/mjmlio/mjml-app)).

## Installation 

`npm install`

## Usage 

Set the version of MJML for which you want to get available tags and attributes in `config.tag` in the `config.js` file.

To run it: `babel-node index.js`
