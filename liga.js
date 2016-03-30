/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'check': '&#xf00c;',
            'download': '&#xf019;',
            'edit': '&#xf040;',
            'arrow-right': '&#xf061;',
            'arrow-up': '&#xf062;',
            'arrow-down': '&#xf063;',
            'expand': '&#xf065;',
            'collapse': '&#xe902;',
            'cart': '&#xf07a;',
            'info': '&#xf129;',
            'share': '&#xf1e0;',
            'trash': '&#xf1f8;',
            'chart': '&#xe900;',
            'headset': '&#xe901;',
            'file-pdf': '&#xe904;',
            'file-xls': '&#xe905;',
            'file': '&#xe906;',
            'file-zip': '&#xe907;',
            'mail': '&#xe908;',
            'ellipsis-h': '&#xe909;',
            'leaf': '&#xe90a;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/tca-icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
