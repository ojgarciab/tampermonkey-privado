// ==UserScript==
// @name         Filtro de Indiegala
// @namespace    http://linaresdigital.com/
// @version      0.7
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

    /* ... */
    const contenedor = document.querySelector("section.main-container")

    console.log("Cargado... v0.7");
    let style = document.createElement("style");
	style.appendChild(document.createTextNode(""));
	document.head.appendChild(style);
    style.sheet.insertRule("#propio { position: absolute; margin-top: 1em; right: 1em; opacity: 0.8; border-radius: 30px; background: red; padding: 1em; }", 0);

    let div = document.createElement("div");
    div.id = "propio";
    div.innerHTML = 'V: <input type="number" value="100" min="0" max="240" name="valor" />, N: <input type="number" value="0" min="0" max="100" name="nivel" /><button type="button">Filtrar</button>';
    contenedor.insertBefore(div, contenedor.firstChild);
})();
