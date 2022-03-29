!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,o=e.Cookies=t();o.noConflict=function(){return e.Cookies=n,o}}())}(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}return function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(o[u]=n.read(c,u),e===u)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}));
function tryParse(x) {
    try {
        return JSON.parse(x);
    } catch(er) {
        return null;
    }
}
document.head.insertAdjacentHTML("beforebegin", `<style>.bookmarks {background: ${localStorage.getItem('tabact')}; height: 29.2px; position: absolute; left: 0; right: 0; top: 0;}</style>`)
function initBookmarks(dep = 0) {
    // If the user fucks up localStorage somehow, this could occur.
    // Prevent issues by simply giving up.
    if(dep > 5) return;

    // Locally saved bookmarks as Stringified 2D Array
    let bookmarksLocal = localStorage.getItem('bookmarks');

    // Where to add these element
    let bookmarks = document.querySelector('.bookmarks');

    // If valid
    if(bookmarksLocal !== null && Array.isArray(tryParse(bookmarksLocal))) {
        // Parse
        let json = JSON.parse(bookmarksLocal);
        // Loop
        json.forEach(bookmark => { // /fetch/b64/favicon.ico
            // Woah
            let [ site, ico, title ] = bookmark;

            // Create the element
            let elem = document.createElement('a');
            elem.textContent = title;
            elem.setAttribute('id', 'bookmarka');
            elem.style.backgroundImage = 'url(' + ico + ')';
            elem.style.color = localStorage.getItem('tabacttit');
            elem.href = site;

            elem.addEventListener('contextmenu', function(e) {
                 [0].forEach.call(document.getElementsByClassName('bkmks'), a => {
                    a.parentElement.removeChild(a);
                });
                e.preventDefault();
                let { pageX, pageY } = e;
                let menu = document.createElement('div');
                menu.style.position = 'fixed';
                menu.style.left = pageX + 'px';
                menu.style.top = pageY + 'px';
                menu.style.backgroundColor = localStorage.getItem('tabbkg')
                menu.setAttribute('id', 'bmenu')
                let ul = document.createElement('ul');
                ul.setAttribute('id', 'bul');
                ul.style.color = localStorage.getItem('nt');
                [
                    { 
                        'name': 'Delete',
                        'func': () => {
                            elem.parentElement.removeChild(elem);
                            removeBookmark(bookmark);
                        }
                    }
                ].forEach(i => {
                    let li = document.createElement('li');
                    li.style.color = localStorage.getItem('nt');    
                    ul.appendChild(li);
                    li.setAttribute('id', 'bul');
                    li.setAttribute('class', 'bkmks');
                    li.textContent = i.name;
                    li.addEventListener('click', e => {
                        e.preventDefault();
                        i.func();
                    });
                });
                menu.appendChild(ul);

                let a = function() {
                    if(menu.parentElement) menu.parentElement.removeChild(menu);
                    window.removeEventListener('input', a);
                };
                document.body.appendChild(menu);
                window.addEventListener('click', a);
            });

            bookmarks.appendChild(elem);
        });
    } else {
        // Initialize new locally stored bookmark 
        localStorage.setItem('bookmarks', '[ ]');
        initBookmarks(dep + 1);
    }
    // JSON.parse
    // localStorage.getItem
    // [ [ "domain.com", "favicon", "title" ], [ ".org", "favicon", "b3at is smart" ] ]
}

// this is where bookmark code goes
window.addEventListener('DOMContentLoaded', initBookmarks);
document.body.style.backgroundColor = localStorage.getItem('tabact');
let variable = Cookies.get('backgroundimageurl')
document.body.style.cssText+=`background-image:url(${variable})`;
function removeBookmark(a) {
    let data = JSON.parse(localStorage.getItem('bookmarks'));
    index = data.indexOf(a);
    console.log(a)
    data.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(data));
}

