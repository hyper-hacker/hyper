/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/js-cookie@2.2.1/src/js.cookie.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e){var n;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var t=window.Cookies,o=window.Cookies=e();o.noConflict=function(){return window.Cookies=t,o}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var o in t)n[o]=t[o]}return n}function n(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(o){function r(){}function i(n,t,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},r.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(t);/^[\{\[]/.test(c)&&(t=c)}catch(e){}t=o.write?o.write(t,n):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var u in i)i[u]&&(f+="; "+u,!0!==i[u]&&(f+="="+i[u].split(";")[0]));return document.cookie=n+"="+t+f}}function c(e,t){if("undefined"!=typeof document){for(var r={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var f=i[c].split("="),u=f.slice(1).join("=");t||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var a=n(f[0]);if(u=(o.read||o)(u,a)||n(u),t)try{u=JSON.parse(u)}catch(e){}if(r[a]=u,e===a)break}catch(e){}}return e?r[e]:r}}return r.set=i,r.get=function(e){return c(e,!1)},r.getJSON=function(e){return c(e,!0)},r.remove=function(n,t){i(n,"",e(t,{expires:-1}))},r.defaults={},r.withConverter=t,r}(function(){})});
//# sourceMappingURL=/sm/b0ce608ffc029736e9ac80a8dd6a7db2da8e1d45d2dcfc92043deb2214aa30d8.map
let history = {};
let sir = true;

// functions

function getUrl(x) {
  console.log(x)
  const urlBarcontents = x || document.getElementById('urlbar').value;
  const urlThing = urlBarcontents.match(/http(s?):\/\/(([a-z0-9]|\-|\_|\.){1,999})/gi);
  if (urlThing === null) throw Error('Invalid URL ' + urlBarcontents);
  return urlBarcontents;
}
const getActiveFrameId = () => +document.querySelector(".chrome-tab[active]").getAttribute("ifd") + 1;
function addPageToHistory(id, page) {
  if (!sir) {
    sir = true;
    return;
  }
  if (!(id in history)) {
    history[id] = [[], -1];
  }

  if (history[id][1] < history[id][0].length - 1) {
    history[id][0] = history[id][0].slice(0, history[id][1] + 1);
  }
  if (history[id][0][[history[id].length - 1]] == page)
    return;
  history[id][0].push(page);
  history[id][1] = history[id][0].length - 1;
}
function getPage(id) {
  return ((history[id] || [])[0] || [])[history[id][1]] || '/main.html';
}
function getBack(id) {
  sir = false;
  history[id][1]--;
  return getPage(id);
}
function getForward(id) {
  if (history[id][1] >= history[id][0].length - 1)
    return getPage(id);
  sir = false;
  history[id][1]++;
  return getPage(id);
}
function getBookmark() {
  let abmk = document.getElementById(getActiveFrameId()).contentDocument.querySelector('link[rel="favicon"], link[rel="shortcut icon"], link[rel="icon"]');
  if (abmk !== null) {
    return abmk.href;
  } else {
    return '/favicon.ico';
  };
};
function setinfo(aa) {
  document.getElementsByClassName(aa)[0].firstChild.data = document.getElementById(aa).contentDocument.getElementsByTagName("title")[0].firstChild.textContent;
  if (!document.getElementById(aa).contentWindow.location.href.includes(Cookies.get('hostcookie'))) {
    addPageToHistory(aa, document.getElementById(aa).contentWindow.location.href);
    return;
  }
  let regUrl = document.getElementById(aa).contentWindow.location.href;
  regUrl = regUrl.split(Cookies.get('hostcookie')).slice(1).join(Cookies.get('hostcookie'));
  if (getActiveFrameId() === +aa) {
    document.getElementById('urlbar').value = decodeURIComponent(regUrl);
  }
  document.querySelector(`div[ifd="${+aa - 1}"]`).children[2].children[0].attributes[1].value = `background-image: url(${getBookmark()})`
  addPageToHistory(aa, document.getElementById(aa).contentWindow.location.href);
}
function action(a) {
  let value = document.getElementById('urlbar');
  if (value === '') {
    alert('Please insert a URL');
  } else if (!value.value.startsWith('http')) {
    value.value = "https://" + value.value;

    

    
    let b64URL = getUrl();
     console.log(b64URL)
Cookies.set('b64URL', b64URL);
    console.log(Cookies.get('hostcookie'))
    console.log(getUrl)
    document.getElementById(getActiveFrameId()).src = Cookies.get('hostcookie') + Cookies.get('b64URL');
  } else {
Cookies.set('b64URL', b64URL);
    console.log(b64URL)
    console.log(Cookies.get('hostcookie'))
    let b64URL = getUrl();
console.log(getUrl)
    document.getElementById(getActiveFrameId()).src = Cookies.get('hostcookie') + Cookies.get('b64URL');
  }
}
function hideId(...x) {
  x.forEach((a) => {
    document.getElementById(a).style.display = "none";
  });
}
function showId(...x) {
  x.forEach((a) => {
    document.getElementById(a).style.display = "block";
  });
}
function toggleId(...x) {
  x.forEach((a) => {
    if (getComputedStyle(document.getElementById(a)).display === "none") {
      showId(a);
    } else {
      hideId(a);
    }
  });
}
function openMenu(...x) {
  let elems = x.map((id) => document.getElementById(id));
  let shouldOpen = true;
  elems.forEach((elm) => {
    if (getComputedStyle(elm).display !== 'none') {
      shouldOpen = false;
    }
  });
  if (shouldOpen) {
    showId(elems[0].id);
  } else {
    elems.forEach((elm) => hideId(elm.id));
  }
}
function Fullscreen() {
  let pageurl = 
    document.getElementById(getActiveFrameId()).contentWindow.location.href
  window.open(pageurl);
}



function corrosion() {
Cookies.set('hostcookie', 'https://7370d14d-a828-4b34-b980-c78b04c73759.id.repl.co/serve/');
let host = "/serve/"
console.log(host)
}

function womginx() {
Cookies.set('hostcookie', 'https://womginxproxy.herokuapp.com/main/');
let host = "https://womginxproxy.herokuapp.com/main/"
console.log(host)
}

function ultraviolet() {
  
}

function alloy() {
  
}


function inspect() {
let pageurl = 
    document.getElementById(getActiveFrameId()).contentWindow.location.href

let lastletter = pageurl.slice(-1);

if (lastletter == '/') {

let pageurl = 
    document.getElementById(getActiveFrameId()).contentWindow.location.href
  pageurl = pageurl.substring(0, pageurl.length - 1);
let inspecturl = pageurl + '?' + 'inspect' ; 
    console.log(inspecturl);
  document.getElementById('2').contentWindow.location.replace(inspecturl)


}

else {


let pageurl = 
    document.getElementById(getActiveFrameId()).contentWindow.location.href

let inspecturl = pageurl + '?' + 'inspect' ; 
    console.log(inspecturl);
  document.getElementById('2').contentWindow.location.replace(inspecturl)
}



  
}

function autoclickeron() {
let pageurl = 
    document.getElementById(getActiveFrameId()).contentWindow.location.href

let lastletter = pageurl.slice(-1);

if (lastletter == '/') {

let pageurl = 
    document.getElementById(getActiveFrameId()).contentWindow.location.href
  pageurl = pageurl.substring(0, pageurl.length - 1);
let inspecturl = pageurl + '?' + 'autoclickeron' ; 
    console.log(inspecturl);
  window.open(inspecturl)


}

else {


let pageurl = 
    document.getElementById(getActiveFrameId()).contentWindow.location.href

let inspecturl = pageurl + '?' + 'autoclickeron' ; 
    console.log(inspecturl);
  window.open(inspecturl)
}



  
}



function opencity(a) {
  tc = document.getElementsByClassName('iframething');
  for (ii = 0; ii < tc.length; ii++) {
    tc[ii].style.display = 'none';
  }
  document.getElementById(a).style = 'display:inline';
  document.getElementById(a).focus();
  switch (document.getElementById(a).contentWindow.location.href) {
    case `${document.URL}main.html`:
      document.getElementById('urlbar').value='';
      break;
    case '':
      break;
    default:
      let regUrl = document.getElementById(a).contentWindow.location.href;
      regUrl = regUrl.split(host).slice(1).join(host);
      if (getActiveFrameId() === +a) {
        document.getElementById('urlbar').value = decodeURIComponent(regUrl);
      }
      break;
  }
}
try {
 setTimeout(() => { ([...document.getElementsByTagName`iframe`].reverse().find(a=>!a.src).contentDocument.getElementsByTagName`button`[0]||document.createElement`a`).click(); }, 10000);
    }
catch(err) {};
var el = document.querySelector('.chrome-tabs');
var chromeTabs = new ChromeTabs();
chromeTabs.init(el);
	var i = 2;
document.querySelector('button[data-add-tab]').addEventListener('click', _ => {
  _.preventDefault()
  chromeTabs.addTab({
    title: 'New Hypertab',
    favicon: 'favicon.ico'
  });
  document.getElementById('urlbar').value = '';
  var uwu = i++;
  var frame = document.createElement('IFRAME');
  frame.setAttribute('src', 'main.html');
  frame.setAttribute('allow', 'fullscreen');
  frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock')
  document.body.appendChild(frame);
  frame.setAttribute('class', 'iframething');
  frame.setAttribute('style', 'display:none');
  frame.setAttribute('id', uwu);
  frame.setAttribute('onload', `setinfo(${uwu})`);
  opencity(uwu);
})
newTab = (url) => {
  // creates a new hypertab!!
  chromeTabs.addTab({
    title: 'New Hypertab',
    favicon: 'favicon.ico'
  });


  
  document.getElementById('urlbar').value = url;
  var uwu = i++;
  var frame = document.createElement('IFRAME');
  frame.setAttribute('src', 'https://' + location.host + host + url);
  frame.setAttribute('allow', 'fullscreen');
  frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock')
  document.body.appendChild(frame);
  frame.setAttribute('class', 'iframething');
  frame.setAttribute('style', 'display:none');
  frame.setAttribute('id', uwu);
  frame.setAttribute('onload', `setinfo(${uwu})`);
  opencity(uwu);
}
document.querySelector('#urlbar').addEventListener('keyup', event => {
  if (event.key !== 'Enter') return;
  action('alloy');
  event.preventDefault();
});
document.getElementById('createTab').click();
document.getElementById('optionsdrop').style.display = 'none';
if (!('tabbkg' in localStorage)) {
  localStorage.setItem('tabbkg', '#202124');
  localStorage.setItem('tabhover', '#292b2e');
  localStorage.setItem('tabact', '#323639');
  localStorage.setItem('tabacttit', '#f1f3f4');
  localStorage.setItem('tabinatit', '#9ca1a7');
  localStorage.setItem('searchbar', '#202124');
  localStorage.setItem('mockb', '#323639');
  localStorage.setItem('nt', '#FFF');
  localStorage.setItem('ua', navigator.userAgent);
}
let items = ['tabbkg', 'tabhover', 'tabact', 'tabacttit', 'tabinatit', 'searchbar', 'ua'];
function applyTheme(a) {
  switch (a) {
    case 'Apply':
      for (ii = 0; ii < items.length; ii++) {
        localStorage.setItem(items[ii], `${document.getElementById(items[ii]).value}`);
      }
      localStorage.setItem('mockb', document.getElementById('tabact').value);
      location.reload();
      break;
    case 'Dark':
    case 'Reset':
      localStorage.setItem('tabbkg', '#202124');
      localStorage.setItem('tabhover', '#202124');
      localStorage.setItem('tabact', '#323639');
      localStorage.setItem('tabacttit', '#9ca1a7');
      localStorage.setItem('tabacttit', '#f1f3f4');
      localStorage.setItem('tabinatit', '#9ca1a7');
      localStorage.setItem('searchbar', '#202124');
      localStorage.setItem('mockb', '#323639');
      localStorage.setItem('nt', '#FFF');
      location.reload();
      break;
    case 'Light':
      localStorage.setItem('tabbkg', '#f4f5f6');
      localStorage.setItem('tabhover', '#f4f5f6');
      localStorage.setItem('tabact', '#fff');
      localStorage.setItem('tabacttit', '#9ca1a7');
      localStorage.setItem('tabacttit', '#45474a');
      localStorage.setItem('tabinatit', '#5f6368');
      localStorage.setItem('searchbar', '#D0D8E8 ');
      localStorage.setItem('mockb', '#fff');
      localStorage.setItem('nt', '#323639');
      location.reload();
      break;
  } 
};
for (ii = 0; ii < items.length; ii++) {
  document.getElementById(items[ii]).value = localStorage.getItem(items[ii]);
};
document.cookie = `alloyua=${localStorage.getItem('ua')}`
document.head.insertAdjacentHTML("beforeend", `<style>.chrome-tabs.chrome-tabs-dark-theme {background: ${localStorage.getItem('tabbkg')};} .dropdown-content {background-color: ${localStorage.getItem('tabbkg')};} .mock-browser-content {background-color: ${localStorage.getItem('mockb')};} .chrome-tabs.chrome-tabs-dark-theme .chrome-tabs-bottom-bar {background-color: ${localStorage.getItem('tabact')};} .chrome-tabs.chrome-tabs-dark-theme .chrome-tab[active] .chrome-tab-background > svg .chrome-tab-geometry {fill: ${localStorage.getItem('tabact')};} .chrome-tabs.chrome-tabs-dark-theme .chrome-tab .chrome-tab-background > svg .chrome-tab-geometry {fill: ${localStorage.getItem('tabhover')};} .chrome-tabs.chrome-tabs-dark-theme .chrome-tab[active] .chrome-tab-title {color: ${localStorage.getItem('tabacttit')};} .chrome-tabs.chrome-tabs-dark-theme .chrome-tab .chrome-tab-title {color: ${localStorage.getItem('tabinatit')};} #urlbar {background: ${localStorage.getItem('searchbar')}; color: ${localStorage.getItem('nt')}; } #createTab {color: ${localStorage.getItem('nt')}} .dropdown-content a {color: ${localStorage.getItem('nt')}} #urlbutton {color: ${localStorage.getItem('nt')}} #options {color: ${localStorage.getItem('nt')}} </style>`)
window.onbeforeunload = function () {};
//bookmarks
function AddBookmark() {
  let data = JSON.parse(localStorage.getItem('bookmarks'));
  console.log(document.getElementById(getActiveFrameId()).contentWindow.location.href + '  ' + getBookmark() + ' ' + document.getElementById(getActiveFrameId()).contentWindow.document.title)
  data.push([document.getElementById(getActiveFrameId()).contentWindow.location.href, getBookmark(), document.getElementById(getActiveFrameId()).contentWindow.document.title]);
  localStorage.setItem('bookmarks', JSON.stringify(data));
}
function setUA(a) {
  switch (a) {
    case 'chrome':
      break
    case 'firefox':
      break
    case 'iphone':
      break
    case 'ipad':
      break
    default:
      break
  }
}
