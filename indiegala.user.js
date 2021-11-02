// ==UserScript==
// @name         Filtro de Indiegala
// @namespace    http://linaresdigital.com/
// @version      0.6
// @description  Filtro de regalos para indiegala
// @author       Oscar Garcia
// @match        https://www.indiegala.com/giveaways
// @icon         https://www.google.com/s2/favicons?domain=indiegala.com
// @grant        none
// @run-at       document-end
// @downloadURL  https://ojgarciab.github.io/tampermonkey-publico/indiegala.user.js
// ==/UserScript==

(function() {
    'use strict';

    console.log("Cargado... v0.6");
    /* ... */
    const header = document.querySelector("header.default-header");
    const altura = header.offsetTop + header.offsetHeight;

    let style = document.createElement("style");
	style.appendChild(document.createTextNode(""));
	document.head.appendChild(style);
    //style.sheet.insertRule("#propio { position: fixed;  z-index: 10000; top: calc(" + altura + "px + 1em); right: 1em; opacity: 0.8; }", 0);
    style.sheet.insertRule("#propio { float: right;  margin-right: 1em; opacity: 0.8; }", 0);

    let div = document.createElement("div");
    div.id = "propio";
    div.innerHTML = '<input type="number" value="100" min="0" max="240" name="valor" /><input type="number" value="100" min="0" max="100" name="nivel" /><button type="button">Filtrar</button>';
    document.querySelector("section.main-container").appendChild(div);
})();
