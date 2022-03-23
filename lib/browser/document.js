if(window.location.href.indexOf("krunker.io") > -1) 
            {
                 alert("you are on krunker.io");
              window.location.href = "https://071e4ed5-ef56-4813-8272-bbf5f78af18a.id.repl.co/";
            }
if(window.location.href.indexOf("cookieclicker") > -1) 
            {
                 alert("you are on cookie clicker");
              window.location.href = "/gfiles/Cookie_Clicker_App/";
            }
if(window.location.href.indexOf("cookie-clicker") > -1) 
            {
                 alert("you are on cookie clicker");
              window.location.href = "/gfiles/Cookie_Clicker_App/";
            }

let url = window.location.href
let str = url;

console.log(str.substr(str.lastIndexOf("?")+1));

let newvalue = (str.substr(str.lastIndexOf("?")+1));

console.log(newvalue);

if (newvalue == 'inspect') {

(function(){(function() {var x = document.createElement("script");x.src = "https://luphoria.com/fbl/fbl/firebug-lite-debug.js";x.onload = alert("Loaded Developer Console!");document.head.appendChild(x);})()})();
  
}

            if(window.location.href.indexOf("play.geforcenow.com") > -1) 
            {
                 alert("you are on geforce now");
              window.location.href = "https://b316b910-1659-4537-9145-91568fdc5568.id.repl.co";
            }

            if(window.location.href.indexOf("youtube.com") > -1) 
            {
                 alert("you are on youtube");
              window.location.href = "https://26658572-b7d4-4971-aea1-1de5eb7cba5d.id.repl.co";
            }

if(window.location.href.indexOf("autoclickeron") > -1) 
            {
                 alert("Autoclicker");
new Promise(function(resolve, reject) {
  setTimeout(resolve, 2000);
}).then(function() {
  console.log('do whatever you wanted to hold off on');
  (function(){function callback(){(function($){var jQuery=$;/*** Modified by Jason O'Neill 2017* Andrew Childs <ac@glomerate.com>*/var DomOutline = function (options) {'use strict';options = options || {};var pub = {},self = {opts: {namespace: options.namespace || 'DomOutline',borderWidth: options.borderWidth || 2,onClick: options.onClick || false,border: options.border || false,realtime: options.realtime || false,label: options.label || false,classExclude: options.exclude || null,zIndex: options.zIndex || 1000000,},keyCodes: {BACKSPACE: 8,ESC: 27,DELETE: 46},active: false,singleHighlightActive: false,singleHighlightLoop: null,initialized: false,elements: {},};function writeStylesheet(css) {var element = document.createElement('style');element.type = 'text/css';document.getElementsByTagName('head')[0].appendChild(element);if (element.styleSheet) {element.styleSheet.cssText = css;} else {element.innerHTML = css;}}function initStylesheet() {var css = '';if (self.initialized !== true) {css +='.' + self.opts.namespace + ' {' +'    background: rgba(0, 153, 204, 0.5);' +'    position: absolute;' +'    z-index: '+self.opts.zIndex+';' +'    pointer-events: none;' +'}' +'.' + self.opts.namespace + '_label {' +'    background: #09c;' +'    border-radius: 2px;' +'    color: #fff;' +'    font: bold 12px/12px Helvetica, sans-serif;' +'    padding: 4px 6px;' +'    position: absolute;' +'    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);' +'    z-index: '+(self.opts.zIndex+1)+';' +'    pointer-events: none;' +'}' +'.' + self.opts.namespace + '_box {' +'    background: rgba(0, 153, 204, 0.5);' +'    position: absolute;' +'    z-index: '+self.opts.zIndex+';' +'    pointer-events: none;' +'}';writeStylesheet(css);self.initialized = true;}}function createOutlineElements() {self.elements.label = jQuery('<div>').addClass(self.opts.namespace + '_label').appendTo('body');self.elements.top = jQuery('<div>').addClass(self.opts.namespace).appendTo('body');self.elements.bottom = jQuery('<div>').addClass(self.opts.namespace).appendTo('body');self.elements.left = jQuery('<div>').addClass(self.opts.namespace).appendTo('body');self.elements.right = jQuery('<div>').addClass(self.opts.namespace).appendTo('body');self.elements.box = jQuery('<div>').addClass(self.opts.namespace + '_box').appendTo('body');}function removeOutlineElements() {jQuery.each(self.elements, function (name, element) {element.remove();});}function compileLabelText(element, width, height) {var label = element.tagName.toLowerCase();if (element.id) {label += '#' + element.id;}if (element.className) {label += ('.' + jQuery.trim(element.className).replace(/ /g, '.')).replace(/\.\.+/g, '.');}return label + ' (' + Math.round(width) + 'x' + Math.round(height) + ')';}function getScrollTop() {if (!self.elements.window) {self.elements.window = jQuery(window);}return self.elements.window.scrollTop();}function stopOnEscape(e) {if (e.keyCode === self.keyCodes.ESC || e.keyCode === self.keyCodes.BACKSPACE || e.keyCode === self.keyCodes.DELETE) {pub.stop();}return false;}function draw(e) {if (e.target.className.indexOf(self.opts.namespace) !== -1 || e.target.className.indexOf(self.opts.classExclude) !== -1) {return;}pub.element = e.target;var b = self.opts.borderWidth,scroll_top = getScrollTop(),pos = pub.element.getBoundingClientRect(),top = pos.top + scroll_top,label_text = '',label_top = 0,label_left = 0;if (self.opts.label) {label_text = compileLabelText(pub.element, pos.width, pos.height);label_top = Math.max(0, top - 20 - b, scroll_top);label_left = Math.max(0, pos.left - b);self.elements.label.css({ top: label_top, left: label_left }).text(label_text);}if (self.opts.border) {self.elements.top.css({ top: Math.max(0, top - b), left: pos.left - b, width: pos.width + b, height: b });self.elements.bottom.css({ top: top + pos.height, left: pos.left - b, width: pos.width + b, height: b });self.elements.left.css({ top: top - b, left: Math.max(0, pos.left - b), width: b, height: pos.height + b });self.elements.right.css({ top: top - b, left: pos.left + pos.width, width: b, height: pos.height + (b * 2) });} else {self.elements.box.css({top: top,left: pos.left,width: pos.width,height: pos.height});}}function clickHandler(e) {if (e.target.className.indexOf(self.opts.namespace) !== -1 || e.target.className.indexOf(self.opts.classExclude) !== -1) {return;}if (!self.opts.realtime) {draw(e);}e.preventDefault();self.opts.onClick(pub.element);return false;}pub.start = function () {initStylesheet();pub.stop();if (self.active !== true) {self.active = true;createOutlineElements();jQuery('body').bind('keyup.' + self.opts.namespace, stopOnEscape);if (self.opts.onClick) {setTimeout(function () {jQuery('body').bind('click.' + self.opts.namespace, clickHandler);}, 50);}if (self.opts.realtime) {jQuery('body').bind('mousemove.' + self.opts.namespace, draw);}}};pub.stop = function () {if (self.singleHighlightLoop != null){clearInterval(self.singleHighlightLoop);self.singleHighlightLoop = null;}self.singleHighlightActive = false;self.active = false;removeOutlineElements();selecting = false;jQuery('body').unbind('mousemove.' + self.opts.namespace).unbind('keyup.' + self.opts.namespace).unbind('click.' + self.opts.namespace);};pub.highlight = function(element){initStylesheet();pub.stop();self.singleHighlightActive = true;createOutlineElements();var pseudoElement = {target: element};self.singleHighlightLoop = setInterval(function(){draw(pseudoElement);}, 50);};return pub;};if (document.getElementById("ctg_multiple_autoclick_initialized") == null){alert("Click on an element to set auto click location. When you are done selecting, press ESC to start auto click. More Info: creativetechguy.com/utilities/bookmarklets");var div = document.createElement("div");div.style.display = "none";div.id = "ctg_multiple_autoclick_initialized";document.body.appendChild(div);var domSelector = DomOutline({onClick: elementClicked, realtime: true});domSelector.start();var selecting = true;function elementClicked(e){var cps = prompt("Clicks per second:");if (cps == null)return;if (isNaN(cps))return;if (cps > 1000)cps = 1000;var delay = 1000/cps;setInterval(function(){if (selecting)return;if (e)e.click();}, delay);}}})(jQuery.noConflict(true))}var s=document.createElement("script");s.src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";if(s.addEventListener){s.addEventListener("load",callback,false)}else if(s.readyState){s.onreadystatechange=callback}document.body.appendChild(s);})()
});
            }
//bundle.js AND document 










function createDocumentRewriter(ctx) {
    return function rewriteDocument() {
        if (ctx.serviceWorker) return;
        const {
            HTMLMediaElement,
            HTMLScriptElement, 
            HTMLAudioElement, 
            HTMLVideoElement, 
            HTMLInputElement, 
            HTMLEmbedElement, 
            HTMLTrackElement, 
            HTMLAnchorElement, 
            HTMLIFrameElement,
            HTMLAreaElement,
            HTMLLinkElement, 
            HTMLBaseElement,
            HTMLFormElement,
            HTMLImageElement, 
            HTMLSourceElement,
        } = ctx.window;
        const cookie = Object.getOwnPropertyDescriptor(ctx.window.Document.prototype, 'cookie');
        const domain = Object.getOwnPropertyDescriptor(ctx.window.Document.prototype, 'domain');
        const title = Object.getOwnPropertyDescriptor(ctx.window.Document.prototype, 'title');
        const baseURI = Object.getOwnPropertyDescriptor(ctx.window.Node.prototype, 'baseURI');
        const cookieEnabled = Object.getOwnPropertyDescriptor(ctx.window.Navigator.prototype, 'cookieEnabled');
        let spoofTitle = '';
        let spoofDomain = ctx.location.hostname;

        if (ctx.window.Document.prototype.write) {
            ctx.window.Document.prototype.write = new Proxy(ctx.window.Document.prototype.write, {
                apply: (target, that , args) => {
                    if (args.length) args = [ ctx.html.process(args.join(''), ctx.meta) ];
                    return Reflect.apply(target, that, args);
                },
            });
        };
        if (ctx.window.Document.prototype.hasOwnProperty('cookie')) {
            Object.defineProperty(ctx.window.Document.prototype, 'cookie', {
                get: new Proxy(cookie.get, {
                    apply: (target, that, args) => {
                        const cookies = Reflect.apply(target, that, args);
                        return ctx.config.cookie ? ctx.cookies.decode(cookies, ctx.meta) : '';
                    },
                }),
                set: new Proxy(cookie.set, {
                    apply: (target, that, [ val ]) => {
                        return Reflect.apply(target, that, [ ctx.config.cookie ? ctx.cookies.encode(val, ctx.meta) : '' ]);
                    },
                }),
            });
        };
        if (ctx.window.Document.prototype.writeln) {
            ctx.window.Document.prototype.writeln = new Proxy(ctx.window.Document.prototype.writeln, {
                apply: (target, that , args) => {
                    if (args.length) args = [ ctx.html.process(args.join(''), ctx.meta) ];
                    return Reflect.apply(target, that, args);
                },
            });
        };
        if (ctx.window.Element.prototype.setAttribute) {
            ctx.window.Element.prototype.setAttribute = new Proxy(ctx.window.Element.prototype.setAttribute, {
                apply: (target, that, args) => {
                    if (args[0] && args[1]) {
                        const handler = ctx.html.attributeRoute({
                            name: args[0],
                            value: args[1],
                            node: that,
                        });
                        switch(handler) {
                            case 'url':
                                Reflect.apply(target, that, [`corrosion-${args[0]}`, args[1]]);
                                //if (that.tagName == 'SCRIPT' && args[0] == 'src') flags.push('js');
                                args[1] = ctx.url.wrap(args[1], ctx.meta);
                                break;
                            case 'srcset':
                                Reflect.apply(target, that, [`corrosion-${args[0]}`, args[1]]);
                                args[1] = ctx.html.srcset(args[1], ctx.meta);
                                break;
                            case 'css':
                                Reflect.apply(target, that, [`corrosion-${args[0]}`, args[1]]);
                                args[1] = ctx.css.process(args[1], { ...ctx.meta, context: 'declarationList' });
                                break;
                            case 'html':
                                Reflect.apply(target, that, [`corrosion-${args[0]}`, args[1]]);
                                args[1] = ctx.html.process(args[1], ctx.meta);
                                break;
                            case 'delete':
                                return Reflect.apply(target, that, [`corrosion-${args[0]}`, args[1]]);
                        };
                    };
                    return Reflect.apply(target, that, args);
                },
            });
        };
        if (ctx.window.Element.prototype.getAttribute) {
            ctx.window.Element.prototype.getAttribute = new Proxy(ctx.window.Element.prototype.getAttribute, {
                apply: (target, that, args) => {
                    if (args[0] && that.hasAttribute(`corrosion-${args[0]}`)) args[0] = `corrosion-${args[0]}`;
                    return Reflect.apply(target, that, args);
                },
            });
        }; 
        ctx.window.CSSStyleDeclaration.prototype.setProperty = new Proxy(ctx.window.CSSStyleDeclaration.prototype.setProperty, {
            apply: (target, that, args) => {
                if (args[1]) args[1] = ctx.css.process(args[1], { context: 'value', ...ctx.meta, });
                return Reflect.apply(target, that, args);
            },
        });
        if (ctx.window.Audio) {
            ctx.window.Audio = new Proxy(ctx.window.Audio, {
                construct: (target, args) => {
                    if (args[0]) args[0] = ctx.url.wrap(args[0], ctx.meta);
                    return Reflect.construct(target, args);
                },
            });
        };
        [
            'innerHTML',
            'outerHTML',
        ].forEach(html => {
            const descriptor = Object.getOwnPropertyDescriptor(ctx.window.Element.prototype, html);
            Object.defineProperty(ctx.window.Element.prototype, html, {
                get: new Proxy(descriptor.get, {
                    apply: (target, that, args) => {
                        const body = Reflect.apply(target, that, args);
                        if (!body || html == 'innerHTML' && that.tagName == 'SCRIPT') return body;
                        return ctx.html.source(body, ctx.meta);
                    },
                }),
                set: new Proxy(descriptor.set, {
                    apply(target, that, [ val ]) {
                        return Reflect.apply(target, that, [ val ? ctx.html.process(val.toString(), ctx.meta) : val, ]);
                    },
                }), 
            });
        });
        [
            ['background', 'background'],
            ['backgroundImage', 'background-image'],
            ['listStyleImage', 'list-style-image'],
        ].forEach(([key, cssProperty]) => {
            Object.defineProperty(ctx.window.CSS2Properties ? ctx.window.CSS2Properties.prototype : ctx.window.CSSStyleDeclaration.prototype, key, {
                get() {
                    return this.getPropertyValue(cssProperty);
                },
                set(val) {
                    return this.setProperty(cssProperty, val);
                },
            }); 
        });
        Object.defineProperty(ctx.window.Document.prototype, 'domain', {
            get: new Proxy(domain.get, {
                apply: () => spoofDomain,
            }),
            set: new Proxy(domain.set, {
                apply: (target, that, [ val ]) => {
                    if (!val.toString().endsWith(ctx.location.hostname.split('.').slice(-2).join('.'))) return Reflect.apply(target, that, ['']);
                    return spoofDomain = val;
                },
            }),
        });
        if (ctx.config.title) Object.defineProperty(ctx.window.Document.prototype, 'title', {
            get: new Proxy(title.get, {
                apply: () => spoofTitle,
            }),
            set: new Proxy(title.set, {
                apply: (target, that, [ val ]) => spoofTitle = val, 
            }),
        });
        Object.defineProperty(ctx.window.Navigator.prototype, 'cookieEnabled', {
            get: new Proxy(cookieEnabled.get, {
                apply: () => ctx.config.cookie,
            }),
        });
        Object.defineProperty(ctx.window.Node.prototype, 'baseURI', {
            get: new Proxy(baseURI.get, {
                apply: (target, that, args) => {
                    const val = Reflect.apply(target, that, args);
                    return val.startsWith(ctx.meta.origin) ? ctx.url.unwrap(val, ctx.meta) : val;
                },
            }),
        });
        [
            {
                elements: [ HTMLScriptElement, HTMLMediaElement, HTMLImageElement, HTMLAudioElement, HTMLVideoElement, HTMLInputElement, HTMLEmbedElement, HTMLIFrameElement, HTMLTrackElement, HTMLSourceElement],
                properties: ['src'],
                handler: 'url',
            },
            {
                elements: [ HTMLFormElement ],
                properties: ['action'],
                handler: 'url',
            },
            {
                elements: [ HTMLAnchorElement, HTMLAreaElement, HTMLLinkElement, HTMLBaseElement ],
                properties: ['href'],
                handler: 'url',
            },
            {
                elements: [ HTMLImageElement, HTMLSourceElement ],
                properties: ['srcset'],
                handler: 'srcset',
            },  
            {
                elements: [ HTMLScriptElement ],
                properties: ['integrity'],
                handler: 'delete',
            },
            {
                elements: [ HTMLIFrameElement ],
                properties: ['contentWindow'],
                handler: 'window',  
            },
        ].forEach(entry => {
            entry.elements.forEach(element => {
                if (!element) return;
                entry.properties.forEach(property => {
                    if (!element.prototype.hasOwnProperty(property)) return;
                    const descriptor = Object.getOwnPropertyDescriptor(element.prototype, property);
                    Object.defineProperty(element.prototype, property, {
                        get: descriptor.get ? new Proxy(descriptor.get, {
                            apply: (target, that, args) => {
                                let val = Reflect.apply(target, that, args);
                                let flags = [];
                                switch(entry.handler) {
                                    case 'url':
                                        //if (that.tagName == 'SCRIPT' && property == 'src') flags.push('js');
                                        val = ctx.url.unwrap(val, ctx.meta);
                                        break;
                                    case 'srcset':
                                        val = ctx.html.unsrcset(val, ctx.meta);
                                        break;
                                    case 'delete':
                                        val = that.getAttribute(`corrosion-${property}`);
                                        break;
                                    case 'window':
                                        try {
                                            if (!val.$corrosion)  {
                                                val.$corrosion = new ctx.constructor({ ...ctx.config, window: val, });
                                                val.$corrosion.init();
                                                val.$corrosion.meta = ctx.meta;
                                            };
                                        } catch(e) {};
                                };
                                return val;
                            }, 
                        }) : undefined,
                        set: descriptor.set ? new Proxy(descriptor.set, {
                            apply(target, that, [ val ]) {
                                let newVal = val;
                                switch(entry.handler) {
                                    case 'url':
                                        newVal = ctx.url.wrap(newVal, ctx.meta);
                                        break;
                                    case 'srcset':
                                        newVal = ctx.html.srcset(newVal, ctx.meta);
                                        break;
                                    case 'delete':
                                        that.setAttribute(property, newVal);
                                        return newVal;
                                };
                                return Reflect.apply(target, that, [ newVal ]);
                            },
                        }) : undefined,
                    });
                });
            });
        });
    };
};
module.exports = createDocumentRewriter;