(function (window, document) {
    "use strict";


    var links = [
        {
            "title": "Banner Examples",
            "href": "banners.html"
        },
        {
            "title": "Favicon Examples",
            "href": "favicons.html"
        },
        {
            "title": "Identicon Examples",
            "href": "identicons.html"
        }
    ];

    function nav(links) {
        var nav = document.createElement('nav');
        links.forEach(function (link) {
            var item = document.createElement('a');
            item.href = link.href;
            item.innerText = link.title;
            item.className = 'nav-item';
            nav.appendChild(item);
        });
        return nav;
    }

    window.onload = function () {
        var header = document.querySelector('header');
        if (header) {
            header.querySelector('.container').appendChild(nav(links));
        }
        var fadein = document.querySelectorAll('.fadein');
        for (var i = 0; i < fadein.length; i++) {
            fadein[i].classList.remove('fadein');
        }
    };
})(window, document);