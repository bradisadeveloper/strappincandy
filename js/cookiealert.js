/*
 * Bootstrap Cookie Alert
 * https://github.com/Wruczek/Bootstrap-Cookie-Alert
 * Released under MIT license
 */
(function () {
    "use strict";

    let cookieAlert = document.querySelector(".cookiealert");
    let acceptCookies = document.querySelector(".acceptcookies");

    if (!cookieAlert) {
       return;
    }

    cookieAlert.offsetHeight;

    // Show the alert if we cant find the "acceptCookies" cookie
    if (!getCookie("acceptCookies")) {
        cookieAlert.classList.add("show");
    }

    /** When clicking on the agree button, create a
     cookie to remember user's choice and close the banner **/
    acceptCookies.addEventListener("click", function () {
        setCookie("acceptCookies", true, 365);
        cookieAlert.classList.remove("show");
    });

    // Cookie Function
    function setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
})();
