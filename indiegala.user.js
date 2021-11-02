// ==UserScript==
// @name         Filtro de Indiegala
// @namespace    http://linaresdigital.com/
// @version      0.5
// @description  Filtro de regalos para indiegala
// @author       Oscar Garcia
// @match        https://www.indiegala.com/giveaways
// @icon         https://www.google.com/s2/favicons?domain=indiegala.com
// @grant        none
// @run-at       document-end
// @downloadURL  https://ojgarciab.github.io/tampermonkey-privado/indiegala.user.js
// ==/UserScript==

(function() {
    'use strict';

    /* ... */
    console.log("Cargado... v0.5");
    let style = document.createElement("style");
	style.appendChild(document.createTextNode(""));
	document.head.appendChild(style);
    style.sheet.insertRule("#propio { position: relative; top: 0px; right: 0px; opacity: 0.8; }", 0);

    let div = document.createElement("div");
    div.id = "propio";
    div.innerHTML = '<input type="number" value="100" min="0" max="240" />';
    document.querySelector("section.main-container").appendChild(div);
})();
