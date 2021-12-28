// ==UserScript==
// @name         Puntos de Twitch
// @namespace    http://linaresdigital.com/
// @version      0.1
// @description  Obtención de puntos de Twitch
// @author       Oscar Garcia
// @match        https://www.indiegala.com/giveaways
// @exclude      https://www.twitch.tv/friends*
// @exclude      https://www.twitch.tv/wallet*
// @exclude      https://www.twitch.tv/subscriptions*
// @exclude      https://www.twitch.tv/drops*
// @exclude      https://www.twitch.tv/settings*
// @icon         https://www.google.com/s2/favicons?domain=twitch.tv
// @grant        none
// @run-at       document-end
// @downloadURL  https://ojgarciab.github.io/tampermonkey-publico/twitch.user.js
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        let boton = document.querySelector('button[aria-label="Reclamar bonificación"]');
        if (boton !== null) {
            console.log("Pulsado");
            boton.click();
        }
    }, 1000);
})();
