"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/lazysizes/lazysizes.js
  var require_lazysizes = __commonJS({
    "node_modules/lazysizes/lazysizes.js"(exports, module) {
      (function(window2, factory) {
        var lazySizes2 = factory(window2, window2.document, Date);
        window2.lazySizes = lazySizes2;
        if (typeof module == "object" && module.exports) {
          module.exports = lazySizes2;
        }
      })(
        typeof window != "undefined" ? window : {},
        /**
         * import("./types/global")
         * @typedef { import("./types/lazysizes-config").LazySizesConfigPartial } LazySizesConfigPartial
         */
        function l2(window2, document2, Date2) {
          "use strict";
          var lazysizes, lazySizesCfg;
          (function() {
            var prop;
            var lazySizesDefaults = {
              lazyClass: "lazyload",
              loadedClass: "lazyloaded",
              loadingClass: "lazyloading",
              preloadClass: "lazypreload",
              errorClass: "lazyerror",
              //strictClass: 'lazystrict',
              autosizesClass: "lazyautosizes",
              fastLoadedClass: "ls-is-cached",
              iframeLoadMode: 0,
              srcAttr: "data-src",
              srcsetAttr: "data-srcset",
              sizesAttr: "data-sizes",
              //preloadAfterLoad: false,
              minSize: 40,
              customMedia: {},
              init: true,
              expFactor: 1.5,
              hFac: 0.8,
              loadMode: 2,
              loadHidden: true,
              ricTimeout: 0,
              throttleDelay: 125
            };
            lazySizesCfg = window2.lazySizesConfig || window2.lazysizesConfig || {};
            for (prop in lazySizesDefaults) {
              if (!(prop in lazySizesCfg)) {
                lazySizesCfg[prop] = lazySizesDefaults[prop];
              }
            }
          })();
          if (!document2 || !document2.getElementsByClassName) {
            return {
              init: function() {
              },
              /**
               * @type { LazySizesConfigPartial }
               */
              cfg: lazySizesCfg,
              /**
               * @type { true }
               */
              noSupport: true
            };
          }
          var docElem = document2.documentElement;
          var supportPicture = window2.HTMLPictureElement;
          var _addEventListener = "addEventListener";
          var _getAttribute = "getAttribute";
          var addEventListener = window2[_addEventListener].bind(window2);
          var setTimeout2 = window2.setTimeout;
          var requestAnimationFrame = window2.requestAnimationFrame || setTimeout2;
          var requestIdleCallback = window2.requestIdleCallback;
          var regPicture = /^picture$/i;
          var loadEvents = ["load", "error", "lazyincluded", "_lazyloaded"];
          var regClassCache = {};
          var forEach = Array.prototype.forEach;
          var hasClass = function(ele, cls) {
            if (!regClassCache[cls]) {
              regClassCache[cls] = new RegExp("(\\s|^)" + cls + "(\\s|$)");
            }
            return regClassCache[cls].test(ele[_getAttribute]("class") || "") && regClassCache[cls];
          };
          var addClass = function(ele, cls) {
            if (!hasClass(ele, cls)) {
              ele.setAttribute("class", (ele[_getAttribute]("class") || "").trim() + " " + cls);
            }
          };
          var removeClass = function(ele, cls) {
            var reg;
            if (reg = hasClass(ele, cls)) {
              ele.setAttribute("class", (ele[_getAttribute]("class") || "").replace(reg, " "));
            }
          };
          var addRemoveLoadEvents = function(dom, fn, add) {
            var action = add ? _addEventListener : "removeEventListener";
            if (add) {
              addRemoveLoadEvents(dom, fn);
            }
            loadEvents.forEach(function(evt) {
              dom[action](evt, fn);
            });
          };
          var triggerEvent = function(elem, name, detail, noBubbles, noCancelable) {
            var event = document2.createEvent("Event");
            if (!detail) {
              detail = {};
            }
            detail.instance = lazysizes;
            event.initEvent(name, !noBubbles, !noCancelable);
            event.detail = detail;
            elem.dispatchEvent(event);
            return event;
          };
          var updatePolyfill = function(el, full) {
            var polyfill;
            if (!supportPicture && (polyfill = window2.picturefill || lazySizesCfg.pf)) {
              if (full && full.src && !el[_getAttribute]("srcset")) {
                el.setAttribute("srcset", full.src);
              }
              polyfill({ reevaluate: true, elements: [el] });
            } else if (full && full.src) {
              el.src = full.src;
            }
          };
          var getCSS = function(elem, style) {
            return (getComputedStyle(elem, null) || {})[style];
          };
          var getWidth = function(elem, parent, width) {
            width = width || elem.offsetWidth;
            while (width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth) {
              width = parent.offsetWidth;
              parent = parent.parentNode;
            }
            return width;
          };
          var rAF = function() {
            var running, waiting;
            var firstFns = [];
            var secondFns = [];
            var fns = firstFns;
            var run = function() {
              var runFns = fns;
              fns = firstFns.length ? secondFns : firstFns;
              running = true;
              waiting = false;
              while (runFns.length) {
                runFns.shift()();
              }
              running = false;
            };
            var rafBatch = function(fn, queue) {
              if (running && !queue) {
                fn.apply(this, arguments);
              } else {
                fns.push(fn);
                if (!waiting) {
                  waiting = true;
                  (document2.hidden ? setTimeout2 : requestAnimationFrame)(run);
                }
              }
            };
            rafBatch._lsFlush = run;
            return rafBatch;
          }();
          var rAFIt = function(fn, simple) {
            return simple ? function() {
              rAF(fn);
            } : function() {
              var that = this;
              var args = arguments;
              rAF(function() {
                fn.apply(that, args);
              });
            };
          };
          var throttle = function(fn) {
            var running;
            var lastTime = 0;
            var gDelay = lazySizesCfg.throttleDelay;
            var rICTimeout = lazySizesCfg.ricTimeout;
            var run = function() {
              running = false;
              lastTime = Date2.now();
              fn();
            };
            var idleCallback = requestIdleCallback && rICTimeout > 49 ? function() {
              requestIdleCallback(run, { timeout: rICTimeout });
              if (rICTimeout !== lazySizesCfg.ricTimeout) {
                rICTimeout = lazySizesCfg.ricTimeout;
              }
            } : rAFIt(function() {
              setTimeout2(run);
            }, true);
            return function(isPriority) {
              var delay;
              if (isPriority = isPriority === true) {
                rICTimeout = 33;
              }
              if (running) {
                return;
              }
              running = true;
              delay = gDelay - (Date2.now() - lastTime);
              if (delay < 0) {
                delay = 0;
              }
              if (isPriority || delay < 9) {
                idleCallback();
              } else {
                setTimeout2(idleCallback, delay);
              }
            };
          };
          var debounce = function(func) {
            var timeout, timestamp;
            var wait = 99;
            var run = function() {
              timeout = null;
              func();
            };
            var later = function() {
              var last = Date2.now() - timestamp;
              if (last < wait) {
                setTimeout2(later, wait - last);
              } else {
                (requestIdleCallback || run)(run);
              }
            };
            return function() {
              timestamp = Date2.now();
              if (!timeout) {
                timeout = setTimeout2(later, wait);
              }
            };
          };
          var loader = function() {
            var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;
            var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;
            var regImg = /^img$/i;
            var regIframe = /^iframe$/i;
            var supportScroll = "onscroll" in window2 && !/(gle|ing)bot/.test(navigator.userAgent);
            var shrinkExpand = 0;
            var currentExpand = 0;
            var isLoading = 0;
            var lowRuns = -1;
            var resetPreloading = function(e2) {
              isLoading--;
              if (!e2 || isLoading < 0 || !e2.target) {
                isLoading = 0;
              }
            };
            var isVisible = function(elem) {
              if (isBodyHidden == null) {
                isBodyHidden = getCSS(document2.body, "visibility") == "hidden";
              }
              return isBodyHidden || !(getCSS(elem.parentNode, "visibility") == "hidden" && getCSS(elem, "visibility") == "hidden");
            };
            var isNestedVisible = function(elem, elemExpand) {
              var outerRect;
              var parent = elem;
              var visible = isVisible(elem);
              eLtop -= elemExpand;
              eLbottom += elemExpand;
              eLleft -= elemExpand;
              eLright += elemExpand;
              while (visible && (parent = parent.offsetParent) && parent != document2.body && parent != docElem) {
                visible = (getCSS(parent, "opacity") || 1) > 0;
                if (visible && getCSS(parent, "overflow") != "visible") {
                  outerRect = parent.getBoundingClientRect();
                  visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
                }
              }
              return visible;
            };
            var checkElements = function() {
              var eLlen, i3, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal, defaultExpand, preloadExpand, hFac;
              var lazyloadElems = lazysizes.elements;
              if ((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {
                i3 = 0;
                lowRuns++;
                for (; i3 < eLlen; i3++) {
                  if (!lazyloadElems[i3] || lazyloadElems[i3]._lazyRace) {
                    continue;
                  }
                  if (!supportScroll || lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i3])) {
                    unveilElement(lazyloadElems[i3]);
                    continue;
                  }
                  if (!(elemExpandVal = lazyloadElems[i3][_getAttribute]("data-expand")) || !(elemExpand = elemExpandVal * 1)) {
                    elemExpand = currentExpand;
                  }
                  if (!defaultExpand) {
                    defaultExpand = !lazySizesCfg.expand || lazySizesCfg.expand < 1 ? docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 : lazySizesCfg.expand;
                    lazysizes._defEx = defaultExpand;
                    preloadExpand = defaultExpand * lazySizesCfg.expFactor;
                    hFac = lazySizesCfg.hFac;
                    isBodyHidden = null;
                    if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document2.hidden) {
                      currentExpand = preloadExpand;
                      lowRuns = 0;
                    } else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
                      currentExpand = defaultExpand;
                    } else {
                      currentExpand = shrinkExpand;
                    }
                  }
                  if (beforeExpandVal !== elemExpand) {
                    eLvW = innerWidth + elemExpand * hFac;
                    elvH = innerHeight + elemExpand;
                    elemNegativeExpand = elemExpand * -1;
                    beforeExpandVal = elemExpand;
                  }
                  rect = lazyloadElems[i3].getBoundingClientRect();
                  if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesCfg.loadHidden || isVisible(lazyloadElems[i3])) && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i3], elemExpand))) {
                    unveilElement(lazyloadElems[i3]);
                    loadedSomething = true;
                    if (isLoading > 9) {
                      break;
                    }
                  } else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesCfg.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i3][_getAttribute](lazySizesCfg.sizesAttr) != "auto"))) {
                    autoLoadElem = preloadElems[0] || lazyloadElems[i3];
                  }
                }
                if (autoLoadElem && !loadedSomething) {
                  unveilElement(autoLoadElem);
                }
              }
            };
            var throttledCheckElements = throttle(checkElements);
            var switchLoadingClass = function(e2) {
              var elem = e2.target;
              if (elem._lazyCache) {
                delete elem._lazyCache;
                return;
              }
              resetPreloading(e2);
              addClass(elem, lazySizesCfg.loadedClass);
              removeClass(elem, lazySizesCfg.loadingClass);
              addRemoveLoadEvents(elem, rafSwitchLoadingClass);
              triggerEvent(elem, "lazyloaded");
            };
            var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
            var rafSwitchLoadingClass = function(e2) {
              rafedSwitchLoadingClass({ target: e2.target });
            };
            var changeIframeSrc = function(elem, src) {
              var loadMode2 = elem.getAttribute("data-load-mode") || lazySizesCfg.iframeLoadMode;
              if (loadMode2 == 0) {
                elem.contentWindow.location.replace(src);
              } else if (loadMode2 == 1) {
                elem.src = src;
              }
            };
            var handleSources = function(source) {
              var customMedia;
              var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);
              if (customMedia = lazySizesCfg.customMedia[source[_getAttribute]("data-media") || source[_getAttribute]("media")]) {
                source.setAttribute("media", customMedia);
              }
              if (sourceSrcset) {
                source.setAttribute("srcset", sourceSrcset);
              }
            };
            var lazyUnveil = rAFIt(function(elem, detail, isAuto, sizes, isImg) {
              var src, srcset, parent, isPicture, event, firesLoad;
              if (!(event = triggerEvent(elem, "lazybeforeunveil", detail)).defaultPrevented) {
                if (sizes) {
                  if (isAuto) {
                    addClass(elem, lazySizesCfg.autosizesClass);
                  } else {
                    elem.setAttribute("sizes", sizes);
                  }
                }
                srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
                src = elem[_getAttribute](lazySizesCfg.srcAttr);
                if (isImg) {
                  parent = elem.parentNode;
                  isPicture = parent && regPicture.test(parent.nodeName || "");
                }
                firesLoad = detail.firesLoad || "src" in elem && (srcset || src || isPicture);
                event = { target: elem };
                addClass(elem, lazySizesCfg.loadingClass);
                if (firesLoad) {
                  clearTimeout(resetPreloadingTimer);
                  resetPreloadingTimer = setTimeout2(resetPreloading, 2500);
                  addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
                }
                if (isPicture) {
                  forEach.call(parent.getElementsByTagName("source"), handleSources);
                }
                if (srcset) {
                  elem.setAttribute("srcset", srcset);
                } else if (src && !isPicture) {
                  if (regIframe.test(elem.nodeName)) {
                    changeIframeSrc(elem, src);
                  } else {
                    elem.src = src;
                  }
                }
                if (isImg && (srcset || isPicture)) {
                  updatePolyfill(elem, { src });
                }
              }
              if (elem._lazyRace) {
                delete elem._lazyRace;
              }
              removeClass(elem, lazySizesCfg.lazyClass);
              rAF(function() {
                var isLoaded = elem.complete && elem.naturalWidth > 1;
                if (!firesLoad || isLoaded) {
                  if (isLoaded) {
                    addClass(elem, lazySizesCfg.fastLoadedClass);
                  }
                  switchLoadingClass(event);
                  elem._lazyCache = true;
                  setTimeout2(function() {
                    if ("_lazyCache" in elem) {
                      delete elem._lazyCache;
                    }
                  }, 9);
                }
                if (elem.loading == "lazy") {
                  isLoading--;
                }
              }, true);
            });
            var unveilElement = function(elem) {
              if (elem._lazyRace) {
                return;
              }
              var detail;
              var isImg = regImg.test(elem.nodeName);
              var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]("sizes"));
              var isAuto = sizes == "auto";
              if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]("src") || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)) {
                return;
              }
              detail = triggerEvent(elem, "lazyunveilread").detail;
              if (isAuto) {
                autoSizer.updateElem(elem, true, elem.offsetWidth);
              }
              elem._lazyRace = true;
              isLoading++;
              lazyUnveil(elem, detail, isAuto, sizes, isImg);
            };
            var afterScroll = debounce(function() {
              lazySizesCfg.loadMode = 3;
              throttledCheckElements();
            });
            var altLoadmodeScrollListner = function() {
              if (lazySizesCfg.loadMode == 3) {
                lazySizesCfg.loadMode = 2;
              }
              afterScroll();
            };
            var onload = function() {
              if (isCompleted) {
                return;
              }
              if (Date2.now() - started < 999) {
                setTimeout2(onload, 999);
                return;
              }
              isCompleted = true;
              lazySizesCfg.loadMode = 3;
              throttledCheckElements();
              addEventListener("scroll", altLoadmodeScrollListner, true);
            };
            return {
              _: function() {
                started = Date2.now();
                lazysizes.elements = document2.getElementsByClassName(lazySizesCfg.lazyClass);
                preloadElems = document2.getElementsByClassName(lazySizesCfg.lazyClass + " " + lazySizesCfg.preloadClass);
                addEventListener("scroll", throttledCheckElements, true);
                addEventListener("resize", throttledCheckElements, true);
                addEventListener("pageshow", function(e2) {
                  if (e2.persisted) {
                    var loadingElements = document2.querySelectorAll("." + lazySizesCfg.loadingClass);
                    if (loadingElements.length && loadingElements.forEach) {
                      requestAnimationFrame(function() {
                        loadingElements.forEach(function(img) {
                          if (img.complete) {
                            unveilElement(img);
                          }
                        });
                      });
                    }
                  }
                });
                if (window2.MutationObserver) {
                  new MutationObserver(throttledCheckElements).observe(docElem, { childList: true, subtree: true, attributes: true });
                } else {
                  docElem[_addEventListener]("DOMNodeInserted", throttledCheckElements, true);
                  docElem[_addEventListener]("DOMAttrModified", throttledCheckElements, true);
                  setInterval(throttledCheckElements, 999);
                }
                addEventListener("hashchange", throttledCheckElements, true);
                ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(name) {
                  document2[_addEventListener](name, throttledCheckElements, true);
                });
                if (/d$|^c/.test(document2.readyState)) {
                  onload();
                } else {
                  addEventListener("load", onload);
                  document2[_addEventListener]("DOMContentLoaded", throttledCheckElements);
                  setTimeout2(onload, 2e4);
                }
                if (lazysizes.elements.length) {
                  checkElements();
                  rAF._lsFlush();
                } else {
                  throttledCheckElements();
                }
              },
              checkElems: throttledCheckElements,
              unveil: unveilElement,
              _aLSL: altLoadmodeScrollListner
            };
          }();
          var autoSizer = function() {
            var autosizesElems;
            var sizeElement = rAFIt(function(elem, parent, event, width) {
              var sources, i3, len;
              elem._lazysizesWidth = width;
              width += "px";
              elem.setAttribute("sizes", width);
              if (regPicture.test(parent.nodeName || "")) {
                sources = parent.getElementsByTagName("source");
                for (i3 = 0, len = sources.length; i3 < len; i3++) {
                  sources[i3].setAttribute("sizes", width);
                }
              }
              if (!event.detail.dataAttr) {
                updatePolyfill(elem, event.detail);
              }
            });
            var getSizeElement = function(elem, dataAttr, width) {
              var event;
              var parent = elem.parentNode;
              if (parent) {
                width = getWidth(elem, parent, width);
                event = triggerEvent(elem, "lazybeforesizes", { width, dataAttr: !!dataAttr });
                if (!event.defaultPrevented) {
                  width = event.detail.width;
                  if (width && width !== elem._lazysizesWidth) {
                    sizeElement(elem, parent, event, width);
                  }
                }
              }
            };
            var updateElementsSizes = function() {
              var i3;
              var len = autosizesElems.length;
              if (len) {
                i3 = 0;
                for (; i3 < len; i3++) {
                  getSizeElement(autosizesElems[i3]);
                }
              }
            };
            var debouncedUpdateElementsSizes = debounce(updateElementsSizes);
            return {
              _: function() {
                autosizesElems = document2.getElementsByClassName(lazySizesCfg.autosizesClass);
                addEventListener("resize", debouncedUpdateElementsSizes);
              },
              checkElems: debouncedUpdateElementsSizes,
              updateElem: getSizeElement
            };
          }();
          var init = function() {
            if (!init.i && document2.getElementsByClassName) {
              init.i = true;
              autoSizer._();
              loader._();
            }
          };
          setTimeout2(function() {
            if (lazySizesCfg.init) {
              init();
            }
          });
          lazysizes = {
            /**
             * @type { LazySizesConfigPartial }
             */
            cfg: lazySizesCfg,
            autoSizer,
            loader,
            init,
            uP: updatePolyfill,
            aC: addClass,
            rC: removeClass,
            hC: hasClass,
            fire: triggerEvent,
            gW: getWidth,
            rAF
          };
          return lazysizes;
        }
      );
    }
  });

  // node_modules/lazysizes/plugins/native-loading/ls.native-loading.js
  var require_ls_native_loading = __commonJS({
    "node_modules/lazysizes/plugins/native-loading/ls.native-loading.js"(exports, module) {
      (function(window2, factory) {
        var globalInstall = function() {
          factory(window2.lazySizes);
          window2.removeEventListener("lazyunveilread", globalInstall, true);
        };
        factory = factory.bind(null, window2, window2.document);
        if (typeof module == "object" && module.exports) {
          factory(require_lazysizes());
        } else if (typeof define == "function" && define.amd) {
          define(["lazysizes"], factory);
        } else if (window2.lazySizes) {
          globalInstall();
        } else {
          window2.addEventListener("lazyunveilread", globalInstall, true);
        }
      })(window, function(window2, document2, lazySizes2) {
        "use strict";
        var imgSupport = "loading" in HTMLImageElement.prototype;
        var iframeSupport = "loading" in HTMLIFrameElement.prototype;
        var isConfigSet = false;
        var oldPrematureUnveil = lazySizes2.prematureUnveil;
        var cfg = lazySizes2.cfg;
        var listenerMap = {
          focus: 1,
          mouseover: 1,
          click: 1,
          load: 1,
          transitionend: 1,
          animationend: 1,
          scroll: 1,
          resize: 1
        };
        if (!cfg.nativeLoading) {
          cfg.nativeLoading = {};
        }
        if (!window2.addEventListener || !window2.MutationObserver || !imgSupport && !iframeSupport) {
          return;
        }
        function disableEvents() {
          var loader = lazySizes2.loader;
          var throttledCheckElements = loader.checkElems;
          var removeALSL = function() {
            setTimeout(function() {
              window2.removeEventListener("scroll", loader._aLSL, true);
            }, 1e3);
          };
          var currentListenerMap = typeof cfg.nativeLoading.disableListeners == "object" ? cfg.nativeLoading.disableListeners : listenerMap;
          if (currentListenerMap.scroll) {
            window2.addEventListener("load", removeALSL);
            removeALSL();
            window2.removeEventListener("scroll", throttledCheckElements, true);
          }
          if (currentListenerMap.resize) {
            window2.removeEventListener("resize", throttledCheckElements, true);
          }
          Object.keys(currentListenerMap).forEach(function(name) {
            if (currentListenerMap[name]) {
              document2.removeEventListener(name, throttledCheckElements, true);
            }
          });
        }
        function runConfig() {
          if (isConfigSet) {
            return;
          }
          isConfigSet = true;
          if (imgSupport && iframeSupport && cfg.nativeLoading.disableListeners) {
            if (cfg.nativeLoading.disableListeners === true) {
              cfg.nativeLoading.setLoadingAttribute = true;
            }
            disableEvents();
          }
          if (cfg.nativeLoading.setLoadingAttribute) {
            window2.addEventListener("lazybeforeunveil", function(e2) {
              var element = e2.target;
              if ("loading" in element && !element.getAttribute("loading")) {
                element.setAttribute("loading", "lazy");
              }
            }, true);
          }
        }
        lazySizes2.prematureUnveil = function prematureUnveil(element) {
          if (!isConfigSet) {
            runConfig();
          }
          if ("loading" in element && (cfg.nativeLoading.setLoadingAttribute || element.getAttribute("loading")) && (element.getAttribute("data-sizes") != "auto" || element.offsetWidth)) {
            return true;
          }
          if (oldPrematureUnveil) {
            return oldPrematureUnveil(element);
          }
        };
      });
    }
  });

  // node_modules/clipboard/dist/clipboard.js
  var require_clipboard = __commonJS({
    "node_modules/clipboard/dist/clipboard.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["ClipboardJS"] = factory();
        else
          root["ClipboardJS"] = factory();
      })(exports, function() {
        return (
          /******/
          function() {
            var __webpack_modules__ = {
              /***/
              686: (
                /***/
                function(__unused_webpack_module, __webpack_exports__, __webpack_require__2) {
                  "use strict";
                  __webpack_require__2.d(__webpack_exports__, {
                    "default": function() {
                      return (
                        /* binding */
                        clipboard
                      );
                    }
                  });
                  var tiny_emitter = __webpack_require__2(279);
                  var tiny_emitter_default = /* @__PURE__ */ __webpack_require__2.n(tiny_emitter);
                  var listen = __webpack_require__2(370);
                  var listen_default = /* @__PURE__ */ __webpack_require__2.n(listen);
                  var src_select = __webpack_require__2(817);
                  var select_default = /* @__PURE__ */ __webpack_require__2.n(src_select);
                  ;
                  function command(type) {
                    try {
                      return document.execCommand(type);
                    } catch (err) {
                      return false;
                    }
                  }
                  ;
                  var ClipboardActionCut = function ClipboardActionCut2(target) {
                    var selectedText = select_default()(target);
                    command("cut");
                    return selectedText;
                  };
                  var actions_cut = ClipboardActionCut;
                  ;
                  function createFakeElement(value) {
                    var isRTL = document.documentElement.getAttribute("dir") === "rtl";
                    var fakeElement = document.createElement("textarea");
                    fakeElement.style.fontSize = "12pt";
                    fakeElement.style.border = "0";
                    fakeElement.style.padding = "0";
                    fakeElement.style.margin = "0";
                    fakeElement.style.position = "absolute";
                    fakeElement.style[isRTL ? "right" : "left"] = "-9999px";
                    var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                    fakeElement.style.top = "".concat(yPosition, "px");
                    fakeElement.setAttribute("readonly", "");
                    fakeElement.value = value;
                    return fakeElement;
                  }
                  ;
                  var fakeCopyAction = function fakeCopyAction2(value, options) {
                    var fakeElement = createFakeElement(value);
                    options.container.appendChild(fakeElement);
                    var selectedText = select_default()(fakeElement);
                    command("copy");
                    fakeElement.remove();
                    return selectedText;
                  };
                  var ClipboardActionCopy = function ClipboardActionCopy2(target) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                      container: document.body
                    };
                    var selectedText = "";
                    if (typeof target === "string") {
                      selectedText = fakeCopyAction(target, options);
                    } else if (target instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(target === null || target === void 0 ? void 0 : target.type)) {
                      selectedText = fakeCopyAction(target.value, options);
                    } else {
                      selectedText = select_default()(target);
                      command("copy");
                    }
                    return selectedText;
                  };
                  var actions_copy = ClipboardActionCopy;
                  ;
                  function _typeof(obj) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                      _typeof = function _typeof2(obj2) {
                        return typeof obj2;
                      };
                    } else {
                      _typeof = function _typeof2(obj2) {
                        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                      };
                    }
                    return _typeof(obj);
                  }
                  var ClipboardActionDefault = function ClipboardActionDefault2() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _options$action = options.action, action = _options$action === void 0 ? "copy" : _options$action, container = options.container, target = options.target, text = options.text;
                    if (action !== "copy" && action !== "cut") {
                      throw new Error('Invalid "action" value, use either "copy" or "cut"');
                    }
                    if (target !== void 0) {
                      if (target && _typeof(target) === "object" && target.nodeType === 1) {
                        if (action === "copy" && target.hasAttribute("disabled")) {
                          throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }
                        if (action === "cut" && (target.hasAttribute("readonly") || target.hasAttribute("disabled"))) {
                          throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                        }
                      } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                      }
                    }
                    if (text) {
                      return actions_copy(text, {
                        container
                      });
                    }
                    if (target) {
                      return action === "cut" ? actions_cut(target) : actions_copy(target, {
                        container
                      });
                    }
                  };
                  var actions_default = ClipboardActionDefault;
                  ;
                  function clipboard_typeof(obj) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                      clipboard_typeof = function _typeof2(obj2) {
                        return typeof obj2;
                      };
                    } else {
                      clipboard_typeof = function _typeof2(obj2) {
                        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                      };
                    }
                    return clipboard_typeof(obj);
                  }
                  function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                      throw new TypeError("Cannot call a class as a function");
                    }
                  }
                  function _defineProperties(target, props) {
                    for (var i3 = 0; i3 < props.length; i3++) {
                      var descriptor = props[i3];
                      descriptor.enumerable = descriptor.enumerable || false;
                      descriptor.configurable = true;
                      if ("value" in descriptor) descriptor.writable = true;
                      Object.defineProperty(target, descriptor.key, descriptor);
                    }
                  }
                  function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                  }
                  function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                      throw new TypeError("Super expression must either be null or a function");
                    }
                    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
                    if (superClass) _setPrototypeOf(subClass, superClass);
                  }
                  function _setPrototypeOf(o2, p) {
                    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p2) {
                      o3.__proto__ = p2;
                      return o3;
                    };
                    return _setPrototypeOf(o2, p);
                  }
                  function _createSuper(Derived) {
                    var hasNativeReflectConstruct = _isNativeReflectConstruct();
                    return function _createSuperInternal() {
                      var Super = _getPrototypeOf(Derived), result;
                      if (hasNativeReflectConstruct) {
                        var NewTarget = _getPrototypeOf(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                      } else {
                        result = Super.apply(this, arguments);
                      }
                      return _possibleConstructorReturn(this, result);
                    };
                  }
                  function _possibleConstructorReturn(self, call) {
                    if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) {
                      return call;
                    }
                    return _assertThisInitialized(self);
                  }
                  function _assertThisInitialized(self) {
                    if (self === void 0) {
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return self;
                  }
                  function _isNativeReflectConstruct() {
                    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                    if (Reflect.construct.sham) return false;
                    if (typeof Proxy === "function") return true;
                    try {
                      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                      }));
                      return true;
                    } catch (e2) {
                      return false;
                    }
                  }
                  function _getPrototypeOf(o2) {
                    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
                      return o3.__proto__ || Object.getPrototypeOf(o3);
                    };
                    return _getPrototypeOf(o2);
                  }
                  function getAttributeValue(suffix, element) {
                    var attribute = "data-clipboard-".concat(suffix);
                    if (!element.hasAttribute(attribute)) {
                      return;
                    }
                    return element.getAttribute(attribute);
                  }
                  var Clipboard2 = /* @__PURE__ */ function(_Emitter) {
                    _inherits(Clipboard3, _Emitter);
                    var _super = _createSuper(Clipboard3);
                    function Clipboard3(trigger, options) {
                      var _this;
                      _classCallCheck(this, Clipboard3);
                      _this = _super.call(this);
                      _this.resolveOptions(options);
                      _this.listenClick(trigger);
                      return _this;
                    }
                    _createClass(Clipboard3, [{
                      key: "resolveOptions",
                      value: function resolveOptions() {
                        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        this.action = typeof options.action === "function" ? options.action : this.defaultAction;
                        this.target = typeof options.target === "function" ? options.target : this.defaultTarget;
                        this.text = typeof options.text === "function" ? options.text : this.defaultText;
                        this.container = clipboard_typeof(options.container) === "object" ? options.container : document.body;
                      }
                      /**
                       * Adds a click event listener to the passed trigger.
                       * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                       */
                    }, {
                      key: "listenClick",
                      value: function listenClick(trigger) {
                        var _this2 = this;
                        this.listener = listen_default()(trigger, "click", function(e2) {
                          return _this2.onClick(e2);
                        });
                      }
                      /**
                       * Defines a new `ClipboardAction` on each click event.
                       * @param {Event} e
                       */
                    }, {
                      key: "onClick",
                      value: function onClick(e2) {
                        var trigger = e2.delegateTarget || e2.currentTarget;
                        var action = this.action(trigger) || "copy";
                        var text = actions_default({
                          action,
                          container: this.container,
                          target: this.target(trigger),
                          text: this.text(trigger)
                        });
                        this.emit(text ? "success" : "error", {
                          action,
                          text,
                          trigger,
                          clearSelection: function clearSelection() {
                            if (trigger) {
                              trigger.focus();
                            }
                            window.getSelection().removeAllRanges();
                          }
                        });
                      }
                      /**
                       * Default `action` lookup function.
                       * @param {Element} trigger
                       */
                    }, {
                      key: "defaultAction",
                      value: function defaultAction(trigger) {
                        return getAttributeValue("action", trigger);
                      }
                      /**
                       * Default `target` lookup function.
                       * @param {Element} trigger
                       */
                    }, {
                      key: "defaultTarget",
                      value: function defaultTarget(trigger) {
                        var selector = getAttributeValue("target", trigger);
                        if (selector) {
                          return document.querySelector(selector);
                        }
                      }
                      /**
                       * Allow fire programmatically a copy action
                       * @param {String|HTMLElement} target
                       * @param {Object} options
                       * @returns Text copied.
                       */
                    }, {
                      key: "defaultText",
                      /**
                       * Default `text` lookup function.
                       * @param {Element} trigger
                       */
                      value: function defaultText(trigger) {
                        return getAttributeValue("text", trigger);
                      }
                      /**
                       * Destroy lifecycle.
                       */
                    }, {
                      key: "destroy",
                      value: function destroy() {
                        this.listener.destroy();
                      }
                    }], [{
                      key: "copy",
                      value: function copy(target) {
                        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                          container: document.body
                        };
                        return actions_copy(target, options);
                      }
                      /**
                       * Allow fire programmatically a cut action
                       * @param {String|HTMLElement} target
                       * @returns Text cutted.
                       */
                    }, {
                      key: "cut",
                      value: function cut(target) {
                        return actions_cut(target);
                      }
                      /**
                       * Returns the support of the given action, or all actions if no action is
                       * given.
                       * @param {String} [action]
                       */
                    }, {
                      key: "isSupported",
                      value: function isSupported() {
                        var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"];
                        var actions = typeof action === "string" ? [action] : action;
                        var support = !!document.queryCommandSupported;
                        actions.forEach(function(action2) {
                          support = support && !!document.queryCommandSupported(action2);
                        });
                        return support;
                      }
                    }]);
                    return Clipboard3;
                  }(tiny_emitter_default());
                  var clipboard = Clipboard2;
                }
              ),
              /***/
              828: (
                /***/
                function(module2) {
                  var DOCUMENT_NODE_TYPE = 9;
                  if (typeof Element !== "undefined" && !Element.prototype.matches) {
                    var proto = Element.prototype;
                    proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
                  }
                  function closest(element, selector) {
                    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
                      if (typeof element.matches === "function" && element.matches(selector)) {
                        return element;
                      }
                      element = element.parentNode;
                    }
                  }
                  module2.exports = closest;
                }
              ),
              /***/
              438: (
                /***/
                function(module2, __unused_webpack_exports, __webpack_require__2) {
                  var closest = __webpack_require__2(828);
                  function _delegate(element, selector, type, callback, useCapture) {
                    var listenerFn = listener.apply(this, arguments);
                    element.addEventListener(type, listenerFn, useCapture);
                    return {
                      destroy: function() {
                        element.removeEventListener(type, listenerFn, useCapture);
                      }
                    };
                  }
                  function delegate(elements, selector, type, callback, useCapture) {
                    if (typeof elements.addEventListener === "function") {
                      return _delegate.apply(null, arguments);
                    }
                    if (typeof type === "function") {
                      return _delegate.bind(null, document).apply(null, arguments);
                    }
                    if (typeof elements === "string") {
                      elements = document.querySelectorAll(elements);
                    }
                    return Array.prototype.map.call(elements, function(element) {
                      return _delegate(element, selector, type, callback, useCapture);
                    });
                  }
                  function listener(element, selector, type, callback) {
                    return function(e2) {
                      e2.delegateTarget = closest(e2.target, selector);
                      if (e2.delegateTarget) {
                        callback.call(element, e2);
                      }
                    };
                  }
                  module2.exports = delegate;
                }
              ),
              /***/
              879: (
                /***/
                function(__unused_webpack_module, exports2) {
                  exports2.node = function(value) {
                    return value !== void 0 && value instanceof HTMLElement && value.nodeType === 1;
                  };
                  exports2.nodeList = function(value) {
                    var type = Object.prototype.toString.call(value);
                    return value !== void 0 && (type === "[object NodeList]" || type === "[object HTMLCollection]") && "length" in value && (value.length === 0 || exports2.node(value[0]));
                  };
                  exports2.string = function(value) {
                    return typeof value === "string" || value instanceof String;
                  };
                  exports2.fn = function(value) {
                    var type = Object.prototype.toString.call(value);
                    return type === "[object Function]";
                  };
                }
              ),
              /***/
              370: (
                /***/
                function(module2, __unused_webpack_exports, __webpack_require__2) {
                  var is = __webpack_require__2(879);
                  var delegate = __webpack_require__2(438);
                  function listen(target, type, callback) {
                    if (!target && !type && !callback) {
                      throw new Error("Missing required arguments");
                    }
                    if (!is.string(type)) {
                      throw new TypeError("Second argument must be a String");
                    }
                    if (!is.fn(callback)) {
                      throw new TypeError("Third argument must be a Function");
                    }
                    if (is.node(target)) {
                      return listenNode(target, type, callback);
                    } else if (is.nodeList(target)) {
                      return listenNodeList(target, type, callback);
                    } else if (is.string(target)) {
                      return listenSelector(target, type, callback);
                    } else {
                      throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                    }
                  }
                  function listenNode(node, type, callback) {
                    node.addEventListener(type, callback);
                    return {
                      destroy: function() {
                        node.removeEventListener(type, callback);
                      }
                    };
                  }
                  function listenNodeList(nodeList, type, callback) {
                    Array.prototype.forEach.call(nodeList, function(node) {
                      node.addEventListener(type, callback);
                    });
                    return {
                      destroy: function() {
                        Array.prototype.forEach.call(nodeList, function(node) {
                          node.removeEventListener(type, callback);
                        });
                      }
                    };
                  }
                  function listenSelector(selector, type, callback) {
                    return delegate(document.body, selector, type, callback);
                  }
                  module2.exports = listen;
                }
              ),
              /***/
              817: (
                /***/
                function(module2) {
                  function select(element) {
                    var selectedText;
                    if (element.nodeName === "SELECT") {
                      element.focus();
                      selectedText = element.value;
                    } else if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
                      var isReadOnly = element.hasAttribute("readonly");
                      if (!isReadOnly) {
                        element.setAttribute("readonly", "");
                      }
                      element.select();
                      element.setSelectionRange(0, element.value.length);
                      if (!isReadOnly) {
                        element.removeAttribute("readonly");
                      }
                      selectedText = element.value;
                    } else {
                      if (element.hasAttribute("contenteditable")) {
                        element.focus();
                      }
                      var selection = window.getSelection();
                      var range = document.createRange();
                      range.selectNodeContents(element);
                      selection.removeAllRanges();
                      selection.addRange(range);
                      selectedText = selection.toString();
                    }
                    return selectedText;
                  }
                  module2.exports = select;
                }
              ),
              /***/
              279: (
                /***/
                function(module2) {
                  function E() {
                  }
                  E.prototype = {
                    on: function(name, callback, ctx) {
                      var e2 = this.e || (this.e = {});
                      (e2[name] || (e2[name] = [])).push({
                        fn: callback,
                        ctx
                      });
                      return this;
                    },
                    once: function(name, callback, ctx) {
                      var self = this;
                      function listener() {
                        self.off(name, listener);
                        callback.apply(ctx, arguments);
                      }
                      ;
                      listener._ = callback;
                      return this.on(name, listener, ctx);
                    },
                    emit: function(name) {
                      var data = [].slice.call(arguments, 1);
                      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
                      var i3 = 0;
                      var len = evtArr.length;
                      for (i3; i3 < len; i3++) {
                        evtArr[i3].fn.apply(evtArr[i3].ctx, data);
                      }
                      return this;
                    },
                    off: function(name, callback) {
                      var e2 = this.e || (this.e = {});
                      var evts = e2[name];
                      var liveEvents = [];
                      if (evts && callback) {
                        for (var i3 = 0, len = evts.length; i3 < len; i3++) {
                          if (evts[i3].fn !== callback && evts[i3].fn._ !== callback)
                            liveEvents.push(evts[i3]);
                        }
                      }
                      liveEvents.length ? e2[name] = liveEvents : delete e2[name];
                      return this;
                    }
                  };
                  module2.exports = E;
                  module2.exports.TinyEmitter = E;
                }
              )
              /******/
            };
            var __webpack_module_cache__ = {};
            function __webpack_require__(moduleId) {
              if (__webpack_module_cache__[moduleId]) {
                return __webpack_module_cache__[moduleId].exports;
              }
              var module2 = __webpack_module_cache__[moduleId] = {
                /******/
                // no module.id needed
                /******/
                // no module.loaded needed
                /******/
                exports: {}
                /******/
              };
              __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
              return module2.exports;
            }
            !function() {
              __webpack_require__.n = function(module2) {
                var getter = module2 && module2.__esModule ? (
                  /******/
                  function() {
                    return module2["default"];
                  }
                ) : (
                  /******/
                  function() {
                    return module2;
                  }
                );
                __webpack_require__.d(getter, { a: getter });
                return getter;
              };
            }();
            !function() {
              __webpack_require__.d = function(exports2, definition) {
                for (var key in definition) {
                  if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                    Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                  }
                }
              };
            }();
            !function() {
              __webpack_require__.o = function(obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
              };
            }();
            return __webpack_require__(686);
          }().default
        );
      });
    }
  });

  // node_modules/quicklink/dist/quicklink.mjs
  function e(e2, r2) {
    (null == r2 || r2 > e2.length) && (r2 = e2.length);
    for (var n2 = 0, t2 = Array(r2); n2 < r2; n2++) t2[n2] = e2[n2];
    return t2;
  }
  function r(r2, n2) {
    var t2 = "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
    if (t2) return (t2 = t2.call(r2)).next.bind(t2);
    if (Array.isArray(r2) || (t2 = function(r3, n3) {
      if (r3) {
        if ("string" == typeof r3) return e(r3, n3);
        var t3 = {}.toString.call(r3).slice(8, -1);
        return "Object" === t3 && r3.constructor && (t3 = r3.constructor.name), "Map" === t3 || "Set" === t3 ? Array.from(r3) : "Arguments" === t3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t3) ? e(r3, n3) : void 0;
      }
    }(r2)) || n2 && r2 && "number" == typeof r2.length) {
      t2 && (r2 = t2);
      var o2 = 0;
      return function() {
        return o2 >= r2.length ? { done: true } : { done: false, value: r2[o2++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function n(e2, r2, n2, t2) {
    var o2 = { headers: { accept: "*/*" } };
    return r2 || (o2.mode = "no-cors"), n2 && (o2.credentials = "include"), o2.priority = t2 ? "high" : "low", window.fetch ? fetch(e2, o2) : function(e3, r3) {
      return new Promise(function(n3, t3, o3) {
        (o3 = new XMLHttpRequest()).open("GET", e3, o3.withCredentials = r3), o3.setRequestHeader("Accept", "*/*"), o3.onload = function() {
          200 === o3.status ? n3() : t3();
        }, o3.send();
      });
    }(e2, n2);
  }
  var t;
  var o = (t = document.createElement("link")).relList && t.relList.supports && t.relList.supports("prefetch") ? function(e2, r2) {
    return new Promise(function(n2, t2, o2) {
      (o2 = document.createElement("link")).rel = "prefetch", o2.href = e2, r2 && o2.setAttribute("crossorigin", "anonymous"), o2.onload = n2, o2.onerror = t2, document.head.appendChild(o2);
    });
  } : n;
  var i = window.requestIdleCallback || function(e2) {
    var r2 = Date.now();
    return setTimeout(function() {
      e2({ didTimeout: false, timeRemaining: function() {
        return Math.max(0, 50 - (Date.now() - r2));
      } });
    }, 1);
  };
  var a = /* @__PURE__ */ new Set();
  var c = /* @__PURE__ */ new Set();
  var u = false;
  function s(e2, r2) {
    return Array.isArray(r2) ? r2.some(function(r3) {
      return s(e2, r3);
    }) : (r2.test || r2).call(r2, e2.href, e2);
  }
  function l(e2) {
    if (e2) {
      if (e2.saveData) return new Error("Save-Data is enabled");
      if (/2g/.test(e2.effectiveType)) return new Error("network conditions are poor");
    }
    return true;
  }
  function f(e2) {
    if (void 0 === e2 && (e2 = {}), window.IntersectionObserver && "isIntersecting" in IntersectionObserverEntry.prototype) {
      var r2 = function(e3) {
        e3 = e3 || 1;
        var r3 = [], n3 = 0;
        function t3() {
          n3 < e3 && r3.length > 0 && (r3.shift()(), n3++);
        }
        return [function(e4) {
          r3.push(e4) > 1 || t3();
        }, function() {
          n3--, t3();
        }];
      }(e2.throttle || 1 / 0), n2 = r2[0], t2 = r2[1], o2 = e2.limit || 1 / 0, l2 = e2.origins || [location.hostname], f2 = e2.ignores || [], m = e2.delay || 0, p = [], v = e2.timeoutFn || i, g = "function" == typeof e2.hrefFn && e2.hrefFn, w = e2.prerender || false;
      u = e2.prerenderAndPrefetch || false;
      var y = new IntersectionObserver(function(r3) {
        r3.forEach(function(r4) {
          if (r4.isIntersecting) p.push((r4 = r4.target).href), function(e3, r5) {
            r5 ? setTimeout(e3, r5) : e3();
          }(function() {
            p.includes(r4.href) && (y.unobserve(r4), (u || w) && c.size < o2 ? h(g ? g(r4) : r4.href, e2.eagerness).catch(function(r5) {
              if (!e2.onError) throw r5;
              e2.onError(r5);
            }) : a.size < o2 && !w && n2(function() {
              d(g ? g(r4) : r4.href, e2.priority, e2.checkAccessControlAllowOrigin, e2.checkAccessControlAllowCredentials, e2.onlyOnMouseover).then(t2).catch(function(r5) {
                t2(), e2.onError && e2.onError(r5);
              });
            }));
          }, m);
          else {
            var i3 = p.indexOf((r4 = r4.target).href);
            i3 > -1 && p.splice(i3);
          }
        });
      }, { threshold: e2.threshold || 0 });
      return v(function() {
        (e2.el && e2.el.length && e2.el.length > 0 && "A" === e2.el[0].nodeName ? e2.el : (e2.el || document).querySelectorAll("a")).forEach(function(e3) {
          l2.length && !l2.includes(e3.hostname) || s(e3, f2) || y.observe(e3);
        });
      }, { timeout: e2.timeout || 2e3 }), function() {
        a.clear(), y.disconnect();
      };
    }
  }
  function d(e2, t2, i3, s2, f2) {
    var d2 = l(navigator.connection);
    return d2 instanceof Error ? Promise.reject(new Error("Cannot prefetch, " + d2.message)) : (c.size > 0 && !u && console.warn("[Warning] You are using both prefetching and prerendering on the same document"), Promise.all([].concat(e2).map(function(e3) {
      return a.has(e3) ? [] : (a.add(e3), function(e4, n2, t3) {
        var o2 = [].slice.call(arguments, 3);
        if (!t3) return e4.apply(void 0, [n2].concat(o2));
        for (var i4, a2 = Array.from(document.querySelectorAll("a")).filter(function(e5) {
          return e5.href === n2;
        }), c2 = /* @__PURE__ */ new Map(), u2 = function() {
          var r2 = i4.value, t4 = function(i5) {
            var u3 = setTimeout(function() {
              return r2.removeEventListener("mouseenter", t4), r2.removeEventListener("mouseleave", a3), e4.apply(void 0, [n2].concat(o2));
            }, 200);
            c2.set(r2, u3);
          }, a3 = function(e5) {
            var n3 = c2.get(r2);
            n3 && (clearTimeout(n3), c2.delete(r2));
          };
          r2.addEventListener("mouseenter", t4), r2.addEventListener("mouseleave", a3);
        }, s3 = r(a2); !(i4 = s3()).done; ) u2();
      }(t2 ? n : o, new URL(e3, location.href).toString(), f2, i3, s2, t2));
    })));
  }
  function h(e2, n2) {
    void 0 === n2 && (n2 = "immediate");
    var t2 = l(navigator.connection);
    if (t2 instanceof Error) return Promise.reject(new Error("Cannot prerender, " + t2.message));
    if (!HTMLScriptElement.supports("speculationrules")) return d(e2, true, false, false, "moderate" === n2 || "conservative" === n2), Promise.reject(new Error("This browser does not support the speculation rules API. Falling back to prefetch."));
    for (var o2, i3 = r([].concat(e2)); !(o2 = i3()).done; ) c.add(o2.value);
    a.size > 0 && !u && console.warn("[Warning] You are using both prefetching and prerendering on the same document");
    var s2 = function(e3, r2) {
      var n3 = document.createElement("script");
      n3.type = "speculationrules", n3.text = '{"prerender":[{"source": "list",\n                      "urls": ["' + Array.from(e3).join('","') + '"],\n                      "eagerness": "' + r2 + '"}]}';
      try {
        document.head.appendChild(n3);
      } catch (e4) {
        return e4;
      }
      return true;
    }(c, n2);
    return true === s2 ? Promise.resolve() : Promise.reject(s2);
  }

  // node_modules/@thulite/core/assets/js/core.js
  var import_lazysizes = __toESM(require_lazysizes());
  var import_ls = __toESM(require_ls_native_loading());
  f({
    ignores: [
      /\/api\/?/,
      (uri) => uri.includes(".zip"),
      (uri, elem) => elem.hasAttribute("noprefetch"),
      (uri, elem) => elem.hash && elem.pathname === window.location.pathname
    ]
  });
  import_lazysizes.default.cfg.nativeLoading = {
    setLoadingAttribute: true,
    disableListeners: {
      scroll: true
    }
  };

  // ns-hugo-imp:C:\Users\TH282424\Rprojects\sig-chrono\node_modules\@thulite\doks-core\assets\js\clipboard.js
  var import_clipboard = __toESM(require_clipboard());
  (() => {
    "use strict";
    var cb = document.getElementsByClassName("highlight");
    for (var i3 = 0; i3 < cb.length; ++i3) {
      var element = cb[i3];
      element.insertAdjacentHTML("afterbegin", '<div class="copy"><button title="Copy to clipboard" class="btn-copy" aria-label="Clipboard button"><div></div></button></div>');
    }
    var clipboard = new import_clipboard.default(".btn-copy", {
      target: function(trigger) {
        return trigger.parentNode.nextElementSibling;
      }
    });
    clipboard.on("success", function(e2) {
      e2.clearSelection();
    });
    clipboard.on("error", function(e2) {
      console.error("Action:", e2.action);
      console.error("Trigger:", e2.trigger);
    });
  })();

  // ns-hugo-imp:C:\Users\TH282424\Rprojects\sig-chrono\node_modules\@thulite\doks-core\assets\js\to-top.js
  var topButton = document.getElementById("toTop");
  if (topButton !== null) {
    topButton.classList.remove("fade");
    window.onscroll = function() {
      scrollFunction();
    };
    topButton.addEventListener("click", topFunction);
  }
  function scrollFunction() {
    if (document.body.scrollTop > 270 || document.documentElement.scrollTop > 270) {
      topButton.classList.add("fade");
    } else {
      topButton.classList.remove("fade");
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // ns-hugo-imp:C:\Users\TH282424\Rprojects\sig-chrono\node_modules\@thulite\doks-core\assets\js\tabs.js
  var i2;
  var allTabs = document.querySelectorAll("[data-toggle-tab]");
  var allPanes = document.querySelectorAll("[data-pane]");
  function toggleTabs(event) {
    if (event.target) {
      event.preventDefault();
      var clickedTab = event.currentTarget;
      var targetKey = clickedTab.getAttribute("data-toggle-tab");
    } else {
      var targetKey = event;
    }
    if (window.localStorage) {
      window.localStorage.setItem("configLangPref", targetKey);
    }
    var selectedTabs = document.querySelectorAll("[data-toggle-tab=" + targetKey + "]");
    var selectedPanes = document.querySelectorAll("[data-pane=" + targetKey + "]");
    for (var i3 = 0; i3 < allTabs.length; i3++) {
      allTabs[i3].classList.remove("active");
      allPanes[i3].classList.remove("active");
    }
    for (var i3 = 0; i3 < selectedTabs.length; i3++) {
      selectedTabs[i3].classList.add("active");
      selectedPanes[i3].classList.add("show", "active");
    }
  }
  for (i2 = 0; i2 < allTabs.length; i2++) {
    allTabs[i2].addEventListener("click", toggleTabs);
  }
  if (window.localStorage.getItem("configLangPref")) {
    toggleTabs(window.localStorage.getItem("configLangPref"));
  }
})();
/*! Bundled license information:

clipboard/dist/clipboard.js:
  (*!
   * clipboard.js v2.0.11
   * https://clipboardjs.com/
   *
   * Licensed MIT © Zeno Rocha
   *)

@thulite/doks-core/assets/js/clipboard.js:
  (*!
   * clipboard.js for Bootstrap based Thulite sites
   * Copyright 2021-2024 Thulite
   * Licensed under the MIT License
   *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2xhenlzaXplcy9sYXp5c2l6ZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xhenlzaXplcy9wbHVnaW5zL25hdGl2ZS1sb2FkaW5nL2xzLm5hdGl2ZS1sb2FkaW5nLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9jbGlwYm9hcmQvZGlzdC9jbGlwYm9hcmQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3F1aWNrbGluay9kaXN0L3F1aWNrbGluay5tanMiLCAiLi4vbm9kZV9tb2R1bGVzL0B0aHVsaXRlL2NvcmUvYXNzZXRzL2pzL2NvcmUuanMiLCAibnMtaHVnby1pbXA6QzpcXFVzZXJzXFxUSDI4MjQyNFxcUnByb2plY3RzXFxzaWctY2hyb25vXFxub2RlX21vZHVsZXNcXEB0aHVsaXRlXFxkb2tzLWNvcmVcXGFzc2V0c1xcanNcXGNsaXBib2FyZC5qcyIsICJucy1odWdvLWltcDpDOlxcVXNlcnNcXFRIMjgyNDI0XFxScHJvamVjdHNcXHNpZy1jaHJvbm9cXG5vZGVfbW9kdWxlc1xcQHRodWxpdGVcXGRva3MtY29yZVxcYXNzZXRzXFxqc1xcdG8tdG9wLmpzIiwgIm5zLWh1Z28taW1wOkM6XFxVc2Vyc1xcVEgyODI0MjRcXFJwcm9qZWN0c1xcc2lnLWNocm9ub1xcbm9kZV9tb2R1bGVzXFxAdGh1bGl0ZVxcZG9rcy1jb3JlXFxhc3NldHNcXGpzXFx0YWJzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24od2luZG93LCBmYWN0b3J5KSB7XHJcblx0dmFyIGxhenlTaXplcyA9IGZhY3Rvcnkod2luZG93LCB3aW5kb3cuZG9jdW1lbnQsIERhdGUpO1xyXG5cdHdpbmRvdy5sYXp5U2l6ZXMgPSBsYXp5U2l6ZXM7XHJcblx0aWYodHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyl7XHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGxhenlTaXplcztcclxuXHR9XHJcbn0odHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/XHJcbiAgICAgIHdpbmRvdyA6IHt9LCBcclxuLyoqXHJcbiAqIGltcG9ydChcIi4vdHlwZXMvZ2xvYmFsXCIpXHJcbiAqIEB0eXBlZGVmIHsgaW1wb3J0KFwiLi90eXBlcy9sYXp5c2l6ZXMtY29uZmlnXCIpLkxhenlTaXplc0NvbmZpZ1BhcnRpYWwgfSBMYXp5U2l6ZXNDb25maWdQYXJ0aWFsXHJcbiAqL1xyXG5mdW5jdGlvbiBsKHdpbmRvdywgZG9jdW1lbnQsIERhdGUpIHsgLy8gUGFzcyBpbiB0aGUgd2luZG93IERhdGUgZnVuY3Rpb24gYWxzbyBmb3IgU1NSIGJlY2F1c2UgdGhlIERhdGUgY2xhc3MgY2FuIGJlIGxvc3RcclxuXHQndXNlIHN0cmljdCc7XHJcblx0Lypqc2hpbnQgZXFudWxsOnRydWUgKi9cclxuXHJcblx0dmFyIGxhenlzaXplcyxcclxuXHRcdC8qKlxyXG5cdFx0ICogQHR5cGUgeyBMYXp5U2l6ZXNDb25maWdQYXJ0aWFsIH1cclxuXHRcdCAqL1xyXG5cdFx0bGF6eVNpemVzQ2ZnO1xyXG5cclxuXHQoZnVuY3Rpb24oKXtcclxuXHRcdHZhciBwcm9wO1xyXG5cclxuXHRcdHZhciBsYXp5U2l6ZXNEZWZhdWx0cyA9IHtcclxuXHRcdFx0bGF6eUNsYXNzOiAnbGF6eWxvYWQnLFxyXG5cdFx0XHRsb2FkZWRDbGFzczogJ2xhenlsb2FkZWQnLFxyXG5cdFx0XHRsb2FkaW5nQ2xhc3M6ICdsYXp5bG9hZGluZycsXHJcblx0XHRcdHByZWxvYWRDbGFzczogJ2xhenlwcmVsb2FkJyxcclxuXHRcdFx0ZXJyb3JDbGFzczogJ2xhenllcnJvcicsXHJcblx0XHRcdC8vc3RyaWN0Q2xhc3M6ICdsYXp5c3RyaWN0JyxcclxuXHRcdFx0YXV0b3NpemVzQ2xhc3M6ICdsYXp5YXV0b3NpemVzJyxcclxuXHRcdFx0ZmFzdExvYWRlZENsYXNzOiAnbHMtaXMtY2FjaGVkJyxcclxuXHRcdFx0aWZyYW1lTG9hZE1vZGU6IDAsXHJcblx0XHRcdHNyY0F0dHI6ICdkYXRhLXNyYycsXHJcblx0XHRcdHNyY3NldEF0dHI6ICdkYXRhLXNyY3NldCcsXHJcblx0XHRcdHNpemVzQXR0cjogJ2RhdGEtc2l6ZXMnLFxyXG5cdFx0XHQvL3ByZWxvYWRBZnRlckxvYWQ6IGZhbHNlLFxyXG5cdFx0XHRtaW5TaXplOiA0MCxcclxuXHRcdFx0Y3VzdG9tTWVkaWE6IHt9LFxyXG5cdFx0XHRpbml0OiB0cnVlLFxyXG5cdFx0XHRleHBGYWN0b3I6IDEuNSxcclxuXHRcdFx0aEZhYzogMC44LFxyXG5cdFx0XHRsb2FkTW9kZTogMixcclxuXHRcdFx0bG9hZEhpZGRlbjogdHJ1ZSxcclxuXHRcdFx0cmljVGltZW91dDogMCxcclxuXHRcdFx0dGhyb3R0bGVEZWxheTogMTI1LFxyXG5cdFx0fTtcclxuXHJcblx0XHRsYXp5U2l6ZXNDZmcgPSB3aW5kb3cubGF6eVNpemVzQ29uZmlnIHx8IHdpbmRvdy5sYXp5c2l6ZXNDb25maWcgfHwge307XHJcblxyXG5cdFx0Zm9yKHByb3AgaW4gbGF6eVNpemVzRGVmYXVsdHMpe1xyXG5cdFx0XHRpZighKHByb3AgaW4gbGF6eVNpemVzQ2ZnKSl7XHJcblx0XHRcdFx0bGF6eVNpemVzQ2ZnW3Byb3BdID0gbGF6eVNpemVzRGVmYXVsdHNbcHJvcF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KSgpO1xyXG5cclxuXHRpZiAoIWRvY3VtZW50IHx8ICFkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRpbml0OiBmdW5jdGlvbiAoKSB7fSxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIEB0eXBlIHsgTGF6eVNpemVzQ29uZmlnUGFydGlhbCB9XHJcblx0XHRcdCAqL1xyXG5cdFx0XHRjZmc6IGxhenlTaXplc0NmZyxcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIEB0eXBlIHsgdHJ1ZSB9XHJcblx0XHRcdCAqL1xyXG5cdFx0XHRub1N1cHBvcnQ6IHRydWUsXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG5cdHZhciBzdXBwb3J0UGljdHVyZSA9IHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQ7XHJcblxyXG5cdHZhciBfYWRkRXZlbnRMaXN0ZW5lciA9ICdhZGRFdmVudExpc3RlbmVyJztcclxuXHJcblx0dmFyIF9nZXRBdHRyaWJ1dGUgPSAnZ2V0QXR0cmlidXRlJztcclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIHRvIGJpbmQgdG8gd2luZG93IGJlY2F1c2UgJ3RoaXMnIGJlY29tZXMgbnVsbCBkdXJpbmcgU1NSXHJcblx0ICogYnVpbGRzLlxyXG5cdCAqL1xyXG5cdHZhciBhZGRFdmVudExpc3RlbmVyID0gd2luZG93W19hZGRFdmVudExpc3RlbmVyXS5iaW5kKHdpbmRvdyk7XHJcblxyXG5cdHZhciBzZXRUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQ7XHJcblxyXG5cdHZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQ7XHJcblxyXG5cdHZhciByZXF1ZXN0SWRsZUNhbGxiYWNrID0gd2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2s7XHJcblxyXG5cdHZhciByZWdQaWN0dXJlID0gL15waWN0dXJlJC9pO1xyXG5cclxuXHR2YXIgbG9hZEV2ZW50cyA9IFsnbG9hZCcsICdlcnJvcicsICdsYXp5aW5jbHVkZWQnLCAnX2xhenlsb2FkZWQnXTtcclxuXHJcblx0dmFyIHJlZ0NsYXNzQ2FjaGUgPSB7fTtcclxuXHJcblx0dmFyIGZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGVsZSB7RWxlbWVudH1cclxuXHQgKiBAcGFyYW0gY2xzIHtzdHJpbmd9XHJcblx0ICovXHJcblx0dmFyIGhhc0NsYXNzID0gZnVuY3Rpb24oZWxlLCBjbHMpIHtcclxuXHRcdGlmKCFyZWdDbGFzc0NhY2hlW2Nsc10pe1xyXG5cdFx0XHRyZWdDbGFzc0NhY2hlW2Nsc10gPSBuZXcgUmVnRXhwKCcoXFxcXHN8XiknK2NscysnKFxcXFxzfCQpJyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVnQ2xhc3NDYWNoZVtjbHNdLnRlc3QoZWxlW19nZXRBdHRyaWJ1dGVdKCdjbGFzcycpIHx8ICcnKSAmJiByZWdDbGFzc0NhY2hlW2Nsc107XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIGVsZSB7RWxlbWVudH1cclxuXHQgKiBAcGFyYW0gY2xzIHtzdHJpbmd9XHJcblx0ICovXHJcblx0dmFyIGFkZENsYXNzID0gZnVuY3Rpb24oZWxlLCBjbHMpIHtcclxuXHRcdGlmICghaGFzQ2xhc3MoZWxlLCBjbHMpKXtcclxuXHRcdFx0ZWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlW19nZXRBdHRyaWJ1dGVdKCdjbGFzcycpIHx8ICcnKS50cmltKCkgKyAnICcgKyBjbHMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBlbGUge0VsZW1lbnR9XHJcblx0ICogQHBhcmFtIGNscyB7c3RyaW5nfVxyXG5cdCAqL1xyXG5cdHZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsZSwgY2xzKSB7XHJcblx0XHR2YXIgcmVnO1xyXG5cdFx0aWYgKChyZWcgPSBoYXNDbGFzcyhlbGUsY2xzKSkpIHtcclxuXHRcdFx0ZWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlW19nZXRBdHRyaWJ1dGVdKCdjbGFzcycpIHx8ICcnKS5yZXBsYWNlKHJlZywgJyAnKSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dmFyIGFkZFJlbW92ZUxvYWRFdmVudHMgPSBmdW5jdGlvbihkb20sIGZuLCBhZGQpe1xyXG5cdFx0dmFyIGFjdGlvbiA9IGFkZCA/IF9hZGRFdmVudExpc3RlbmVyIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xyXG5cdFx0aWYoYWRkKXtcclxuXHRcdFx0YWRkUmVtb3ZlTG9hZEV2ZW50cyhkb20sIGZuKTtcclxuXHRcdH1cclxuXHRcdGxvYWRFdmVudHMuZm9yRWFjaChmdW5jdGlvbihldnQpe1xyXG5cdFx0XHRkb21bYWN0aW9uXShldnQsIGZuKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBlbGVtIHsgRWxlbWVudCB9XHJcblx0ICogQHBhcmFtIG5hbWUgeyBzdHJpbmcgfVxyXG5cdCAqIEBwYXJhbSBkZXRhaWwgeyBhbnkgfVxyXG5cdCAqIEBwYXJhbSBub0J1YmJsZXMgeyBib29sZWFuIH1cclxuXHQgKiBAcGFyYW0gbm9DYW5jZWxhYmxlIHsgYm9vbGVhbiB9XHJcblx0ICogQHJldHVybnMgeyBDdXN0b21FdmVudCB9XHJcblx0ICovXHJcblx0dmFyIHRyaWdnZXJFdmVudCA9IGZ1bmN0aW9uKGVsZW0sIG5hbWUsIGRldGFpbCwgbm9CdWJibGVzLCBub0NhbmNlbGFibGUpe1xyXG5cdFx0dmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XHJcblxyXG5cdFx0aWYoIWRldGFpbCl7XHJcblx0XHRcdGRldGFpbCA9IHt9O1xyXG5cdFx0fVxyXG5cclxuXHRcdGRldGFpbC5pbnN0YW5jZSA9IGxhenlzaXplcztcclxuXHJcblx0XHRldmVudC5pbml0RXZlbnQobmFtZSwgIW5vQnViYmxlcywgIW5vQ2FuY2VsYWJsZSk7XHJcblxyXG5cdFx0ZXZlbnQuZGV0YWlsID0gZGV0YWlsO1xyXG5cclxuXHRcdGVsZW0uZGlzcGF0Y2hFdmVudChldmVudCk7XHJcblx0XHRyZXR1cm4gZXZlbnQ7XHJcblx0fTtcclxuXHJcblx0dmFyIHVwZGF0ZVBvbHlmaWxsID0gZnVuY3Rpb24gKGVsLCBmdWxsKXtcclxuXHRcdHZhciBwb2x5ZmlsbDtcclxuXHRcdGlmKCAhc3VwcG9ydFBpY3R1cmUgJiYgKCBwb2x5ZmlsbCA9ICh3aW5kb3cucGljdHVyZWZpbGwgfHwgbGF6eVNpemVzQ2ZnLnBmKSApICl7XHJcblx0XHRcdGlmKGZ1bGwgJiYgZnVsbC5zcmMgJiYgIWVsW19nZXRBdHRyaWJ1dGVdKCdzcmNzZXQnKSl7XHJcblx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBmdWxsLnNyYyk7XHJcblx0XHRcdH1cclxuXHRcdFx0cG9seWZpbGwoe3JlZXZhbHVhdGU6IHRydWUsIGVsZW1lbnRzOiBbZWxdfSk7XHJcblx0XHR9IGVsc2UgaWYoZnVsbCAmJiBmdWxsLnNyYyl7XHJcblx0XHRcdGVsLnNyYyA9IGZ1bGwuc3JjO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHZhciBnZXRDU1MgPSBmdW5jdGlvbiAoZWxlbSwgc3R5bGUpe1xyXG5cdFx0cmV0dXJuIChnZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpIHx8IHt9KVtzdHlsZV07XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gZWxlbSB7IEVsZW1lbnQgfVxyXG5cdCAqIEBwYXJhbSBwYXJlbnQgeyBFbGVtZW50IH1cclxuXHQgKiBAcGFyYW0gW3dpZHRoXSB7bnVtYmVyfVxyXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XHJcblx0ICovXHJcblx0dmFyIGdldFdpZHRoID0gZnVuY3Rpb24oZWxlbSwgcGFyZW50LCB3aWR0aCl7XHJcblx0XHR3aWR0aCA9IHdpZHRoIHx8IGVsZW0ub2Zmc2V0V2lkdGg7XHJcblxyXG5cdFx0d2hpbGUod2lkdGggPCBsYXp5U2l6ZXNDZmcubWluU2l6ZSAmJiBwYXJlbnQgJiYgIWVsZW0uX2xhenlzaXplc1dpZHRoKXtcclxuXHRcdFx0d2lkdGggPSAgcGFyZW50Lm9mZnNldFdpZHRoO1xyXG5cdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gd2lkdGg7XHJcblx0fTtcclxuXHJcblx0dmFyIHJBRiA9IChmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHJ1bm5pbmcsIHdhaXRpbmc7XHJcblx0XHR2YXIgZmlyc3RGbnMgPSBbXTtcclxuXHRcdHZhciBzZWNvbmRGbnMgPSBbXTtcclxuXHRcdHZhciBmbnMgPSBmaXJzdEZucztcclxuXHJcblx0XHR2YXIgcnVuID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0dmFyIHJ1bkZucyA9IGZucztcclxuXHJcblx0XHRcdGZucyA9IGZpcnN0Rm5zLmxlbmd0aCA/IHNlY29uZEZucyA6IGZpcnN0Rm5zO1xyXG5cclxuXHRcdFx0cnVubmluZyA9IHRydWU7XHJcblx0XHRcdHdhaXRpbmcgPSBmYWxzZTtcclxuXHJcblx0XHRcdHdoaWxlKHJ1bkZucy5sZW5ndGgpe1xyXG5cdFx0XHRcdHJ1bkZucy5zaGlmdCgpKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJ1bm5pbmcgPSBmYWxzZTtcclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIHJhZkJhdGNoID0gZnVuY3Rpb24oZm4sIHF1ZXVlKXtcclxuXHRcdFx0aWYocnVubmluZyAmJiAhcXVldWUpe1xyXG5cdFx0XHRcdGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Zm5zLnB1c2goZm4pO1xyXG5cclxuXHRcdFx0XHRpZighd2FpdGluZyl7XHJcblx0XHRcdFx0XHR3YWl0aW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRcdChkb2N1bWVudC5oaWRkZW4gPyBzZXRUaW1lb3V0IDogcmVxdWVzdEFuaW1hdGlvbkZyYW1lKShydW4pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyYWZCYXRjaC5fbHNGbHVzaCA9IHJ1bjtcclxuXHJcblx0XHRyZXR1cm4gcmFmQmF0Y2g7XHJcblx0fSkoKTtcclxuXHJcblx0dmFyIHJBRkl0ID0gZnVuY3Rpb24oZm4sIHNpbXBsZSl7XHJcblx0XHRyZXR1cm4gc2ltcGxlID9cclxuXHRcdFx0ZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0ckFGKGZuKTtcclxuXHRcdFx0fSA6XHJcblx0XHRcdGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBhcmdzID0gYXJndW1lbnRzO1xyXG5cdFx0XHRcdHJBRihmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0Zm4uYXBwbHkodGhhdCwgYXJncyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdDtcclxuXHR9O1xyXG5cclxuXHR2YXIgdGhyb3R0bGUgPSBmdW5jdGlvbihmbil7XHJcblx0XHR2YXIgcnVubmluZztcclxuXHRcdHZhciBsYXN0VGltZSA9IDA7XHJcblx0XHR2YXIgZ0RlbGF5ID0gbGF6eVNpemVzQ2ZnLnRocm90dGxlRGVsYXk7XHJcblx0XHR2YXIgcklDVGltZW91dCA9IGxhenlTaXplc0NmZy5yaWNUaW1lb3V0O1xyXG5cdFx0dmFyIHJ1biA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHJ1bm5pbmcgPSBmYWxzZTtcclxuXHRcdFx0bGFzdFRpbWUgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRmbigpO1xyXG5cdFx0fTtcclxuXHRcdHZhciBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHJJQ1RpbWVvdXQgPiA0OSA/XHJcblx0XHRcdGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0cmVxdWVzdElkbGVDYWxsYmFjayhydW4sIHt0aW1lb3V0OiBySUNUaW1lb3V0fSk7XHJcblxyXG5cdFx0XHRcdGlmKHJJQ1RpbWVvdXQgIT09IGxhenlTaXplc0NmZy5yaWNUaW1lb3V0KXtcclxuXHRcdFx0XHRcdHJJQ1RpbWVvdXQgPSBsYXp5U2l6ZXNDZmcucmljVGltZW91dDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gOlxyXG5cdFx0XHRyQUZJdChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHNldFRpbWVvdXQocnVuKTtcclxuXHRcdFx0fSwgdHJ1ZSlcclxuXHRcdDtcclxuXHJcblx0XHRyZXR1cm4gZnVuY3Rpb24oaXNQcmlvcml0eSl7XHJcblx0XHRcdHZhciBkZWxheTtcclxuXHJcblx0XHRcdGlmKChpc1ByaW9yaXR5ID0gaXNQcmlvcml0eSA9PT0gdHJ1ZSkpe1xyXG5cdFx0XHRcdHJJQ1RpbWVvdXQgPSAzMztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYocnVubmluZyl7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRydW5uaW5nID0gIHRydWU7XHJcblxyXG5cdFx0XHRkZWxheSA9IGdEZWxheSAtIChEYXRlLm5vdygpIC0gbGFzdFRpbWUpO1xyXG5cclxuXHRcdFx0aWYoZGVsYXkgPCAwKXtcclxuXHRcdFx0XHRkZWxheSA9IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKGlzUHJpb3JpdHkgfHwgZGVsYXkgPCA5KXtcclxuXHRcdFx0XHRpZGxlQ2FsbGJhY2soKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGlkbGVDYWxsYmFjaywgZGVsYXkpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH07XHJcblxyXG5cdC8vYmFzZWQgb24gaHR0cDovL21vZGVybmphdmFzY3JpcHQuYmxvZ3Nwb3QuZGUvMjAxMy8wOC9idWlsZGluZy1iZXR0ZXItZGVib3VuY2UuaHRtbFxyXG5cdHZhciBkZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMpIHtcclxuXHRcdHZhciB0aW1lb3V0LCB0aW1lc3RhbXA7XHJcblx0XHR2YXIgd2FpdCA9IDk5O1xyXG5cdFx0dmFyIHJ1biA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0XHRmdW5jKCk7XHJcblx0XHR9O1xyXG5cdFx0dmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBsYXN0ID0gRGF0ZS5ub3coKSAtIHRpbWVzdGFtcDtcclxuXHJcblx0XHRcdGlmIChsYXN0IDwgd2FpdCkge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQocmVxdWVzdElkbGVDYWxsYmFjayB8fCBydW4pKHJ1bik7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cclxuXHRcdFx0aWYgKCF0aW1lb3V0KSB7XHJcblx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH07XHJcblxyXG5cdHZhciBsb2FkZXIgPSAoZnVuY3Rpb24oKXtcclxuXHRcdHZhciBwcmVsb2FkRWxlbXMsIGlzQ29tcGxldGVkLCByZXNldFByZWxvYWRpbmdUaW1lciwgbG9hZE1vZGUsIHN0YXJ0ZWQ7XHJcblxyXG5cdFx0dmFyIGVMdlcsIGVsdkgsIGVMdG9wLCBlTGxlZnQsIGVMcmlnaHQsIGVMYm90dG9tLCBpc0JvZHlIaWRkZW47XHJcblxyXG5cdFx0dmFyIHJlZ0ltZyA9IC9eaW1nJC9pO1xyXG5cdFx0dmFyIHJlZ0lmcmFtZSA9IC9eaWZyYW1lJC9pO1xyXG5cclxuXHRcdHZhciBzdXBwb3J0U2Nyb2xsID0gKCdvbnNjcm9sbCcgaW4gd2luZG93KSAmJiAhKC8oZ2xlfGluZylib3QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpO1xyXG5cclxuXHRcdHZhciBzaHJpbmtFeHBhbmQgPSAwO1xyXG5cdFx0dmFyIGN1cnJlbnRFeHBhbmQgPSAwO1xyXG5cclxuXHRcdHZhciBpc0xvYWRpbmcgPSAwO1xyXG5cdFx0dmFyIGxvd1J1bnMgPSAtMTtcclxuXHJcblx0XHR2YXIgcmVzZXRQcmVsb2FkaW5nID0gZnVuY3Rpb24oZSl7XHJcblx0XHRcdGlzTG9hZGluZy0tO1xyXG5cdFx0XHRpZighZSB8fCBpc0xvYWRpbmcgPCAwIHx8ICFlLnRhcmdldCl7XHJcblx0XHRcdFx0aXNMb2FkaW5nID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgaXNWaXNpYmxlID0gZnVuY3Rpb24gKGVsZW0pIHtcclxuXHRcdFx0aWYgKGlzQm9keUhpZGRlbiA9PSBudWxsKSB7XHJcblx0XHRcdFx0aXNCb2R5SGlkZGVuID0gZ2V0Q1NTKGRvY3VtZW50LmJvZHksICd2aXNpYmlsaXR5JykgPT0gJ2hpZGRlbic7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBpc0JvZHlIaWRkZW4gfHwgIShnZXRDU1MoZWxlbS5wYXJlbnROb2RlLCAndmlzaWJpbGl0eScpID09ICdoaWRkZW4nICYmIGdldENTUyhlbGVtLCAndmlzaWJpbGl0eScpID09ICdoaWRkZW4nKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIGlzTmVzdGVkVmlzaWJsZSA9IGZ1bmN0aW9uKGVsZW0sIGVsZW1FeHBhbmQpe1xyXG5cdFx0XHR2YXIgb3V0ZXJSZWN0O1xyXG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbTtcclxuXHRcdFx0dmFyIHZpc2libGUgPSBpc1Zpc2libGUoZWxlbSk7XHJcblxyXG5cdFx0XHRlTHRvcCAtPSBlbGVtRXhwYW5kO1xyXG5cdFx0XHRlTGJvdHRvbSArPSBlbGVtRXhwYW5kO1xyXG5cdFx0XHRlTGxlZnQgLT0gZWxlbUV4cGFuZDtcclxuXHRcdFx0ZUxyaWdodCArPSBlbGVtRXhwYW5kO1xyXG5cclxuXHRcdFx0d2hpbGUodmlzaWJsZSAmJiAocGFyZW50ID0gcGFyZW50Lm9mZnNldFBhcmVudCkgJiYgcGFyZW50ICE9IGRvY3VtZW50LmJvZHkgJiYgcGFyZW50ICE9IGRvY0VsZW0pe1xyXG5cdFx0XHRcdHZpc2libGUgPSAoKGdldENTUyhwYXJlbnQsICdvcGFjaXR5JykgfHwgMSkgPiAwKTtcclxuXHJcblx0XHRcdFx0aWYodmlzaWJsZSAmJiBnZXRDU1MocGFyZW50LCAnb3ZlcmZsb3cnKSAhPSAndmlzaWJsZScpe1xyXG5cdFx0XHRcdFx0b3V0ZXJSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0XHRcdFx0dmlzaWJsZSA9IGVMcmlnaHQgPiBvdXRlclJlY3QubGVmdCAmJlxyXG5cdFx0XHRcdFx0XHRlTGxlZnQgPCBvdXRlclJlY3QucmlnaHQgJiZcclxuXHRcdFx0XHRcdFx0ZUxib3R0b20gPiBvdXRlclJlY3QudG9wIC0gMSAmJlxyXG5cdFx0XHRcdFx0XHRlTHRvcCA8IG91dGVyUmVjdC5ib3R0b20gKyAxXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdmlzaWJsZTtcclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIGNoZWNrRWxlbWVudHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGVMbGVuLCBpLCByZWN0LCBhdXRvTG9hZEVsZW0sIGxvYWRlZFNvbWV0aGluZywgZWxlbUV4cGFuZCwgZWxlbU5lZ2F0aXZlRXhwYW5kLCBlbGVtRXhwYW5kVmFsLFxyXG5cdFx0XHRcdGJlZm9yZUV4cGFuZFZhbCwgZGVmYXVsdEV4cGFuZCwgcHJlbG9hZEV4cGFuZCwgaEZhYztcclxuXHRcdFx0dmFyIGxhenlsb2FkRWxlbXMgPSBsYXp5c2l6ZXMuZWxlbWVudHM7XHJcblxyXG5cdFx0XHRpZigobG9hZE1vZGUgPSBsYXp5U2l6ZXNDZmcubG9hZE1vZGUpICYmIGlzTG9hZGluZyA8IDggJiYgKGVMbGVuID0gbGF6eWxvYWRFbGVtcy5sZW5ndGgpKXtcclxuXHJcblx0XHRcdFx0aSA9IDA7XHJcblxyXG5cdFx0XHRcdGxvd1J1bnMrKztcclxuXHJcblx0XHRcdFx0Zm9yKDsgaSA8IGVMbGVuOyBpKyspe1xyXG5cclxuXHRcdFx0XHRcdGlmKCFsYXp5bG9hZEVsZW1zW2ldIHx8IGxhenlsb2FkRWxlbXNbaV0uX2xhenlSYWNlKXtjb250aW51ZTt9XHJcblxyXG5cdFx0XHRcdFx0aWYoIXN1cHBvcnRTY3JvbGwgfHwgKGxhenlzaXplcy5wcmVtYXR1cmVVbnZlaWwgJiYgbGF6eXNpemVzLnByZW1hdHVyZVVudmVpbChsYXp5bG9hZEVsZW1zW2ldKSkpe3VudmVpbEVsZW1lbnQobGF6eWxvYWRFbGVtc1tpXSk7Y29udGludWU7fVxyXG5cclxuXHRcdFx0XHRcdGlmKCEoZWxlbUV4cGFuZFZhbCA9IGxhenlsb2FkRWxlbXNbaV1bX2dldEF0dHJpYnV0ZV0oJ2RhdGEtZXhwYW5kJykpIHx8ICEoZWxlbUV4cGFuZCA9IGVsZW1FeHBhbmRWYWwgKiAxKSl7XHJcblx0XHRcdFx0XHRcdGVsZW1FeHBhbmQgPSBjdXJyZW50RXhwYW5kO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICghZGVmYXVsdEV4cGFuZCkge1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0RXhwYW5kID0gKCFsYXp5U2l6ZXNDZmcuZXhwYW5kIHx8IGxhenlTaXplc0NmZy5leHBhbmQgPCAxKSA/XHJcblx0XHRcdFx0XHRcdFx0ZG9jRWxlbS5jbGllbnRIZWlnaHQgPiA1MDAgJiYgZG9jRWxlbS5jbGllbnRXaWR0aCA+IDUwMCA/IDUwMCA6IDM3MCA6XHJcblx0XHRcdFx0XHRcdFx0bGF6eVNpemVzQ2ZnLmV4cGFuZDtcclxuXHJcblx0XHRcdFx0XHRcdGxhenlzaXplcy5fZGVmRXggPSBkZWZhdWx0RXhwYW5kO1xyXG5cclxuXHRcdFx0XHRcdFx0cHJlbG9hZEV4cGFuZCA9IGRlZmF1bHRFeHBhbmQgKiBsYXp5U2l6ZXNDZmcuZXhwRmFjdG9yO1xyXG5cdFx0XHRcdFx0XHRoRmFjID0gbGF6eVNpemVzQ2ZnLmhGYWM7XHJcblx0XHRcdFx0XHRcdGlzQm9keUhpZGRlbiA9IG51bGw7XHJcblxyXG5cdFx0XHRcdFx0XHRpZihjdXJyZW50RXhwYW5kIDwgcHJlbG9hZEV4cGFuZCAmJiBpc0xvYWRpbmcgPCAxICYmIGxvd1J1bnMgPiAyICYmIGxvYWRNb2RlID4gMiAmJiAhZG9jdW1lbnQuaGlkZGVuKXtcclxuXHRcdFx0XHRcdFx0XHRjdXJyZW50RXhwYW5kID0gcHJlbG9hZEV4cGFuZDtcclxuXHRcdFx0XHRcdFx0XHRsb3dSdW5zID0gMDtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmKGxvYWRNb2RlID4gMSAmJiBsb3dSdW5zID4gMSAmJiBpc0xvYWRpbmcgPCA2KXtcclxuXHRcdFx0XHRcdFx0XHRjdXJyZW50RXhwYW5kID0gZGVmYXVsdEV4cGFuZDtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRjdXJyZW50RXhwYW5kID0gc2hyaW5rRXhwYW5kO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYoYmVmb3JlRXhwYW5kVmFsICE9PSBlbGVtRXhwYW5kKXtcclxuXHRcdFx0XHRcdFx0ZUx2VyA9IGlubmVyV2lkdGggKyAoZWxlbUV4cGFuZCAqIGhGYWMpO1xyXG5cdFx0XHRcdFx0XHRlbHZIID0gaW5uZXJIZWlnaHQgKyBlbGVtRXhwYW5kO1xyXG5cdFx0XHRcdFx0XHRlbGVtTmVnYXRpdmVFeHBhbmQgPSBlbGVtRXhwYW5kICogLTE7XHJcblx0XHRcdFx0XHRcdGJlZm9yZUV4cGFuZFZhbCA9IGVsZW1FeHBhbmQ7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmVjdCA9IGxhenlsb2FkRWxlbXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKChlTGJvdHRvbSA9IHJlY3QuYm90dG9tKSA+PSBlbGVtTmVnYXRpdmVFeHBhbmQgJiZcclxuXHRcdFx0XHRcdFx0KGVMdG9wID0gcmVjdC50b3ApIDw9IGVsdkggJiZcclxuXHRcdFx0XHRcdFx0KGVMcmlnaHQgPSByZWN0LnJpZ2h0KSA+PSBlbGVtTmVnYXRpdmVFeHBhbmQgKiBoRmFjICYmXHJcblx0XHRcdFx0XHRcdChlTGxlZnQgPSByZWN0LmxlZnQpIDw9IGVMdlcgJiZcclxuXHRcdFx0XHRcdFx0KGVMYm90dG9tIHx8IGVMcmlnaHQgfHwgZUxsZWZ0IHx8IGVMdG9wKSAmJlxyXG5cdFx0XHRcdFx0XHQobGF6eVNpemVzQ2ZnLmxvYWRIaWRkZW4gfHwgaXNWaXNpYmxlKGxhenlsb2FkRWxlbXNbaV0pKSAmJlxyXG5cdFx0XHRcdFx0XHQoKGlzQ29tcGxldGVkICYmIGlzTG9hZGluZyA8IDMgJiYgIWVsZW1FeHBhbmRWYWwgJiYgKGxvYWRNb2RlIDwgMyB8fCBsb3dSdW5zIDwgNCkpIHx8IGlzTmVzdGVkVmlzaWJsZShsYXp5bG9hZEVsZW1zW2ldLCBlbGVtRXhwYW5kKSkpe1xyXG5cdFx0XHRcdFx0XHR1bnZlaWxFbGVtZW50KGxhenlsb2FkRWxlbXNbaV0pO1xyXG5cdFx0XHRcdFx0XHRsb2FkZWRTb21ldGhpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRpZihpc0xvYWRpbmcgPiA5KXticmVhazt9XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYoIWxvYWRlZFNvbWV0aGluZyAmJiBpc0NvbXBsZXRlZCAmJiAhYXV0b0xvYWRFbGVtICYmXHJcblx0XHRcdFx0XHRcdGlzTG9hZGluZyA8IDQgJiYgbG93UnVucyA8IDQgJiYgbG9hZE1vZGUgPiAyICYmXHJcblx0XHRcdFx0XHRcdChwcmVsb2FkRWxlbXNbMF0gfHwgbGF6eVNpemVzQ2ZnLnByZWxvYWRBZnRlckxvYWQpICYmXHJcblx0XHRcdFx0XHRcdChwcmVsb2FkRWxlbXNbMF0gfHwgKCFlbGVtRXhwYW5kVmFsICYmICgoZUxib3R0b20gfHwgZUxyaWdodCB8fCBlTGxlZnQgfHwgZUx0b3ApIHx8IGxhenlsb2FkRWxlbXNbaV1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ2ZnLnNpemVzQXR0cikgIT0gJ2F1dG8nKSkpKXtcclxuXHRcdFx0XHRcdFx0YXV0b0xvYWRFbGVtID0gcHJlbG9hZEVsZW1zWzBdIHx8IGxhenlsb2FkRWxlbXNbaV07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZihhdXRvTG9hZEVsZW0gJiYgIWxvYWRlZFNvbWV0aGluZyl7XHJcblx0XHRcdFx0XHR1bnZlaWxFbGVtZW50KGF1dG9Mb2FkRWxlbSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciB0aHJvdHRsZWRDaGVja0VsZW1lbnRzID0gdGhyb3R0bGUoY2hlY2tFbGVtZW50cyk7XHJcblxyXG5cdFx0dmFyIHN3aXRjaExvYWRpbmdDbGFzcyA9IGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHR2YXIgZWxlbSA9IGUudGFyZ2V0O1xyXG5cclxuXHRcdFx0aWYgKGVsZW0uX2xhenlDYWNoZSkge1xyXG5cdFx0XHRcdGRlbGV0ZSBlbGVtLl9sYXp5Q2FjaGU7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXNldFByZWxvYWRpbmcoZSk7XHJcblx0XHRcdGFkZENsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5sb2FkZWRDbGFzcyk7XHJcblx0XHRcdHJlbW92ZUNsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5sb2FkaW5nQ2xhc3MpO1xyXG5cdFx0XHRhZGRSZW1vdmVMb2FkRXZlbnRzKGVsZW0sIHJhZlN3aXRjaExvYWRpbmdDbGFzcyk7XHJcblx0XHRcdHRyaWdnZXJFdmVudChlbGVtLCAnbGF6eWxvYWRlZCcpO1xyXG5cdFx0fTtcclxuXHRcdHZhciByYWZlZFN3aXRjaExvYWRpbmdDbGFzcyA9IHJBRkl0KHN3aXRjaExvYWRpbmdDbGFzcyk7XHJcblx0XHR2YXIgcmFmU3dpdGNoTG9hZGluZ0NsYXNzID0gZnVuY3Rpb24oZSl7XHJcblx0XHRcdHJhZmVkU3dpdGNoTG9hZGluZ0NsYXNzKHt0YXJnZXQ6IGUudGFyZ2V0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBjaGFuZ2VJZnJhbWVTcmMgPSBmdW5jdGlvbihlbGVtLCBzcmMpe1xyXG5cdFx0XHR2YXIgbG9hZE1vZGUgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1sb2FkLW1vZGUnKSB8fCBsYXp5U2l6ZXNDZmcuaWZyYW1lTG9hZE1vZGU7XHJcblxyXG5cdFx0XHQvLyBsb2FkTW9kZSBjYW4gYmUgYWxzbyBhIHN0cmluZyFcclxuXHRcdFx0aWYgKGxvYWRNb2RlID09IDApIHtcclxuXHRcdFx0XHRlbGVtLmNvbnRlbnRXaW5kb3cubG9jYXRpb24ucmVwbGFjZShzcmMpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGxvYWRNb2RlID09IDEpIHtcclxuXHRcdFx0XHRlbGVtLnNyYyA9IHNyYztcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgaGFuZGxlU291cmNlcyA9IGZ1bmN0aW9uKHNvdXJjZSl7XHJcblx0XHRcdHZhciBjdXN0b21NZWRpYTtcclxuXHJcblx0XHRcdHZhciBzb3VyY2VTcmNzZXQgPSBzb3VyY2VbX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ2ZnLnNyY3NldEF0dHIpO1xyXG5cclxuXHRcdFx0aWYoIChjdXN0b21NZWRpYSA9IGxhenlTaXplc0NmZy5jdXN0b21NZWRpYVtzb3VyY2VbX2dldEF0dHJpYnV0ZV0oJ2RhdGEtbWVkaWEnKSB8fCBzb3VyY2VbX2dldEF0dHJpYnV0ZV0oJ21lZGlhJyldKSApe1xyXG5cdFx0XHRcdHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgY3VzdG9tTWVkaWEpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZihzb3VyY2VTcmNzZXQpe1xyXG5cdFx0XHRcdHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3NyY3NldCcsIHNvdXJjZVNyY3NldCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIGxhenlVbnZlaWwgPSByQUZJdChmdW5jdGlvbiAoZWxlbSwgZGV0YWlsLCBpc0F1dG8sIHNpemVzLCBpc0ltZyl7XHJcblx0XHRcdHZhciBzcmMsIHNyY3NldCwgcGFyZW50LCBpc1BpY3R1cmUsIGV2ZW50LCBmaXJlc0xvYWQ7XHJcblxyXG5cdFx0XHRpZighKGV2ZW50ID0gdHJpZ2dlckV2ZW50KGVsZW0sICdsYXp5YmVmb3JldW52ZWlsJywgZGV0YWlsKSkuZGVmYXVsdFByZXZlbnRlZCl7XHJcblxyXG5cdFx0XHRcdGlmKHNpemVzKXtcclxuXHRcdFx0XHRcdGlmKGlzQXV0byl7XHJcblx0XHRcdFx0XHRcdGFkZENsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5hdXRvc2l6ZXNDbGFzcyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSgnc2l6ZXMnLCBzaXplcyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzcmNzZXQgPSBlbGVtW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NmZy5zcmNzZXRBdHRyKTtcclxuXHRcdFx0XHRzcmMgPSBlbGVtW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NmZy5zcmNBdHRyKTtcclxuXHJcblx0XHRcdFx0aWYoaXNJbWcpIHtcclxuXHRcdFx0XHRcdHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcclxuXHRcdFx0XHRcdGlzUGljdHVyZSA9IHBhcmVudCAmJiByZWdQaWN0dXJlLnRlc3QocGFyZW50Lm5vZGVOYW1lIHx8ICcnKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGZpcmVzTG9hZCA9IGRldGFpbC5maXJlc0xvYWQgfHwgKCgnc3JjJyBpbiBlbGVtKSAmJiAoc3Jjc2V0IHx8IHNyYyB8fCBpc1BpY3R1cmUpKTtcclxuXHJcblx0XHRcdFx0ZXZlbnQgPSB7dGFyZ2V0OiBlbGVtfTtcclxuXHJcblx0XHRcdFx0YWRkQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmxvYWRpbmdDbGFzcyk7XHJcblxyXG5cdFx0XHRcdGlmKGZpcmVzTG9hZCl7XHJcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQocmVzZXRQcmVsb2FkaW5nVGltZXIpO1xyXG5cdFx0XHRcdFx0cmVzZXRQcmVsb2FkaW5nVGltZXIgPSBzZXRUaW1lb3V0KHJlc2V0UHJlbG9hZGluZywgMjUwMCk7XHJcblx0XHRcdFx0XHRhZGRSZW1vdmVMb2FkRXZlbnRzKGVsZW0sIHJhZlN3aXRjaExvYWRpbmdDbGFzcywgdHJ1ZSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZihpc1BpY3R1cmUpe1xyXG5cdFx0XHRcdFx0Zm9yRWFjaC5jYWxsKHBhcmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc291cmNlJyksIGhhbmRsZVNvdXJjZXMpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoc3Jjc2V0KXtcclxuXHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBzcmNzZXQpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZihzcmMgJiYgIWlzUGljdHVyZSl7XHJcblx0XHRcdFx0XHRpZihyZWdJZnJhbWUudGVzdChlbGVtLm5vZGVOYW1lKSl7XHJcblx0XHRcdFx0XHRcdGNoYW5nZUlmcmFtZVNyYyhlbGVtLCBzcmMpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0ZWxlbS5zcmMgPSBzcmM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZihpc0ltZyAmJiAoc3Jjc2V0IHx8IGlzUGljdHVyZSkpe1xyXG5cdFx0XHRcdFx0dXBkYXRlUG9seWZpbGwoZWxlbSwge3NyYzogc3JjfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZihlbGVtLl9sYXp5UmFjZSl7XHJcblx0XHRcdFx0ZGVsZXRlIGVsZW0uX2xhenlSYWNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJlbW92ZUNsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5sYXp5Q2xhc3MpO1xyXG5cclxuXHRcdFx0ckFGKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0Ly8gUGFydCBvZiB0aGlzIGNhbiBiZSByZW1vdmVkIGFzIHNvb24gYXMgdGhpcyBmaXggaXMgb2xkZXI6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTc3MzEgKDIwMTUpXHJcblx0XHRcdFx0dmFyIGlzTG9hZGVkID0gZWxlbS5jb21wbGV0ZSAmJiBlbGVtLm5hdHVyYWxXaWR0aCA+IDE7XHJcblxyXG5cdFx0XHRcdGlmKCAhZmlyZXNMb2FkIHx8IGlzTG9hZGVkKXtcclxuXHRcdFx0XHRcdGlmIChpc0xvYWRlZCkge1xyXG5cdFx0XHRcdFx0XHRhZGRDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcuZmFzdExvYWRlZENsYXNzKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHN3aXRjaExvYWRpbmdDbGFzcyhldmVudCk7XHJcblx0XHRcdFx0XHRlbGVtLl9sYXp5Q2FjaGUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0XHRpZiAoJ19sYXp5Q2FjaGUnIGluIGVsZW0pIHtcclxuXHRcdFx0XHRcdFx0XHRkZWxldGUgZWxlbS5fbGF6eUNhY2hlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LCA5KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGVsZW0ubG9hZGluZyA9PSAnbGF6eScpIHtcclxuXHRcdFx0XHRcdGlzTG9hZGluZy0tO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgdHJ1ZSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0gZWxlbSB7IEVsZW1lbnQgfVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdW52ZWlsRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtKXtcclxuXHRcdFx0aWYgKGVsZW0uX2xhenlSYWNlKSB7cmV0dXJuO31cclxuXHRcdFx0dmFyIGRldGFpbDtcclxuXHJcblx0XHRcdHZhciBpc0ltZyA9IHJlZ0ltZy50ZXN0KGVsZW0ubm9kZU5hbWUpO1xyXG5cclxuXHRcdFx0Ly9hbGxvdyB1c2luZyBzaXplcz1cImF1dG9cIiwgYnV0IGRvbid0IHVzZS4gaXQncyBpbnZhbGlkLiBVc2UgZGF0YS1zaXplcz1cImF1dG9cIiBvciBhIHZhbGlkIHZhbHVlIGZvciBzaXplcyBpbnN0ZWFkIChpLmUuOiBzaXplcz1cIjgwdndcIilcclxuXHRcdFx0dmFyIHNpemVzID0gaXNJbWcgJiYgKGVsZW1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ2ZnLnNpemVzQXR0cikgfHwgZWxlbVtfZ2V0QXR0cmlidXRlXSgnc2l6ZXMnKSk7XHJcblx0XHRcdHZhciBpc0F1dG8gPSBzaXplcyA9PSAnYXV0byc7XHJcblxyXG5cdFx0XHRpZiggKGlzQXV0byB8fCAhaXNDb21wbGV0ZWQpICYmIGlzSW1nICYmIChlbGVtW19nZXRBdHRyaWJ1dGVdKCdzcmMnKSB8fCBlbGVtLnNyY3NldCkgJiYgIWVsZW0uY29tcGxldGUgJiYgIWhhc0NsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5lcnJvckNsYXNzKSAmJiBoYXNDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcubGF6eUNsYXNzKSl7cmV0dXJuO31cclxuXHJcblx0XHRcdGRldGFpbCA9IHRyaWdnZXJFdmVudChlbGVtLCAnbGF6eXVudmVpbHJlYWQnKS5kZXRhaWw7XHJcblxyXG5cdFx0XHRpZihpc0F1dG8pe1xyXG5cdFx0XHRcdCBhdXRvU2l6ZXIudXBkYXRlRWxlbShlbGVtLCB0cnVlLCBlbGVtLm9mZnNldFdpZHRoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZWxlbS5fbGF6eVJhY2UgPSB0cnVlO1xyXG5cdFx0XHRpc0xvYWRpbmcrKztcclxuXHJcblx0XHRcdGxhenlVbnZlaWwoZWxlbSwgZGV0YWlsLCBpc0F1dG8sIHNpemVzLCBpc0ltZyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBhZnRlclNjcm9sbCA9IGRlYm91bmNlKGZ1bmN0aW9uKCl7XHJcblx0XHRcdGxhenlTaXplc0NmZy5sb2FkTW9kZSA9IDM7XHJcblx0XHRcdHRocm90dGxlZENoZWNrRWxlbWVudHMoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHZhciBhbHRMb2FkbW9kZVNjcm9sbExpc3RuZXIgPSBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZihsYXp5U2l6ZXNDZmcubG9hZE1vZGUgPT0gMyl7XHJcblx0XHRcdFx0bGF6eVNpemVzQ2ZnLmxvYWRNb2RlID0gMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRhZnRlclNjcm9sbCgpO1xyXG5cdFx0fTtcclxuXHJcblx0XHR2YXIgb25sb2FkID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0aWYoaXNDb21wbGV0ZWQpe3JldHVybjt9XHJcblx0XHRcdGlmKERhdGUubm93KCkgLSBzdGFydGVkIDwgOTk5KXtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KG9ubG9hZCwgOTk5KTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRpc0NvbXBsZXRlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRsYXp5U2l6ZXNDZmcubG9hZE1vZGUgPSAzO1xyXG5cclxuXHRcdFx0dGhyb3R0bGVkQ2hlY2tFbGVtZW50cygpO1xyXG5cclxuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgYWx0TG9hZG1vZGVTY3JvbGxMaXN0bmVyLCB0cnVlKTtcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0XzogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRzdGFydGVkID0gRGF0ZS5ub3coKTtcclxuXHJcblx0XHRcdFx0bGF6eXNpemVzLmVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShsYXp5U2l6ZXNDZmcubGF6eUNsYXNzKTtcclxuXHRcdFx0XHRwcmVsb2FkRWxlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGxhenlTaXplc0NmZy5sYXp5Q2xhc3MgKyAnICcgKyBsYXp5U2l6ZXNDZmcucHJlbG9hZENsYXNzKTtcclxuXHJcblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XHJcblxyXG5cdFx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xyXG5cclxuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdwYWdlc2hvdycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0XHRpZiAoZS5wZXJzaXN0ZWQpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGxvYWRpbmdFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgbGF6eVNpemVzQ2ZnLmxvYWRpbmdDbGFzcyk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAobG9hZGluZ0VsZW1lbnRzLmxlbmd0aCAmJiBsb2FkaW5nRWxlbWVudHMuZm9yRWFjaCkge1xyXG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsb2FkaW5nRWxlbWVudHMuZm9yRWFjaCggZnVuY3Rpb24gKGltZykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoaW1nLmNvbXBsZXRlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW52ZWlsRWxlbWVudChpbWcpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpZih3aW5kb3cuTXV0YXRpb25PYnNlcnZlcil7XHJcblx0XHRcdFx0XHRuZXcgTXV0YXRpb25PYnNlcnZlciggdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyApLm9ic2VydmUoIGRvY0VsZW0sIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUsIGF0dHJpYnV0ZXM6IHRydWV9ICk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGRvY0VsZW1bX2FkZEV2ZW50TGlzdGVuZXJdKCdET01Ob2RlSW5zZXJ0ZWQnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcclxuXHRcdFx0XHRcdGRvY0VsZW1bX2FkZEV2ZW50TGlzdGVuZXJdKCdET01BdHRyTW9kaWZpZWQnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcclxuXHRcdFx0XHRcdHNldEludGVydmFsKHRocm90dGxlZENoZWNrRWxlbWVudHMsIDk5OSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XHJcblxyXG5cdFx0XHRcdC8vLCAnZnVsbHNjcmVlbmNoYW5nZSdcclxuXHRcdFx0XHRbJ2ZvY3VzJywgJ21vdXNlb3ZlcicsICdjbGljaycsICdsb2FkJywgJ3RyYW5zaXRpb25lbmQnLCAnYW5pbWF0aW9uZW5kJ10uZm9yRWFjaChmdW5jdGlvbihuYW1lKXtcclxuXHRcdFx0XHRcdGRvY3VtZW50W19hZGRFdmVudExpc3RlbmVyXShuYW1lLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aWYoKC9kJHxeYy8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKSkpe1xyXG5cdFx0XHRcdFx0b25sb2FkKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbmxvYWQpO1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnRbX2FkZEV2ZW50TGlzdGVuZXJdKCdET01Db250ZW50TG9hZGVkJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyk7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KG9ubG9hZCwgMjAwMDApO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYobGF6eXNpemVzLmVsZW1lbnRzLmxlbmd0aCl7XHJcblx0XHRcdFx0XHRjaGVja0VsZW1lbnRzKCk7XHJcblx0XHRcdFx0XHRyQUYuX2xzRmx1c2goKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhyb3R0bGVkQ2hlY2tFbGVtZW50cygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hlY2tFbGVtczogdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyxcclxuXHRcdFx0dW52ZWlsOiB1bnZlaWxFbGVtZW50LFxyXG5cdFx0XHRfYUxTTDogYWx0TG9hZG1vZGVTY3JvbGxMaXN0bmVyLFxyXG5cdFx0fTtcclxuXHR9KSgpO1xyXG5cclxuXHJcblx0dmFyIGF1dG9TaXplciA9IChmdW5jdGlvbigpe1xyXG5cdFx0dmFyIGF1dG9zaXplc0VsZW1zO1xyXG5cclxuXHRcdHZhciBzaXplRWxlbWVudCA9IHJBRkl0KGZ1bmN0aW9uKGVsZW0sIHBhcmVudCwgZXZlbnQsIHdpZHRoKXtcclxuXHRcdFx0dmFyIHNvdXJjZXMsIGksIGxlbjtcclxuXHRcdFx0ZWxlbS5fbGF6eXNpemVzV2lkdGggPSB3aWR0aDtcclxuXHRcdFx0d2lkdGggKz0gJ3B4JztcclxuXHJcblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCdzaXplcycsIHdpZHRoKTtcclxuXHJcblx0XHRcdGlmKHJlZ1BpY3R1cmUudGVzdChwYXJlbnQubm9kZU5hbWUgfHwgJycpKXtcclxuXHRcdFx0XHRzb3VyY2VzID0gcGFyZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzb3VyY2UnKTtcclxuXHRcdFx0XHRmb3IoaSA9IDAsIGxlbiA9IHNvdXJjZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspe1xyXG5cdFx0XHRcdFx0c291cmNlc1tpXS5zZXRBdHRyaWJ1dGUoJ3NpemVzJywgd2lkdGgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYoIWV2ZW50LmRldGFpbC5kYXRhQXR0cil7XHJcblx0XHRcdFx0dXBkYXRlUG9seWZpbGwoZWxlbSwgZXZlbnQuZGV0YWlsKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHQvKipcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0gZWxlbSB7RWxlbWVudH1cclxuXHRcdCAqIEBwYXJhbSBkYXRhQXR0clxyXG5cdFx0ICogQHBhcmFtIFt3aWR0aF0geyBudW1iZXIgfVxyXG5cdFx0ICovXHJcblx0XHR2YXIgZ2V0U2l6ZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbSwgZGF0YUF0dHIsIHdpZHRoKXtcclxuXHRcdFx0dmFyIGV2ZW50O1xyXG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xyXG5cclxuXHRcdFx0aWYocGFyZW50KXtcclxuXHRcdFx0XHR3aWR0aCA9IGdldFdpZHRoKGVsZW0sIHBhcmVudCwgd2lkdGgpO1xyXG5cdFx0XHRcdGV2ZW50ID0gdHJpZ2dlckV2ZW50KGVsZW0sICdsYXp5YmVmb3Jlc2l6ZXMnLCB7d2lkdGg6IHdpZHRoLCBkYXRhQXR0cjogISFkYXRhQXR0cn0pO1xyXG5cclxuXHRcdFx0XHRpZighZXZlbnQuZGVmYXVsdFByZXZlbnRlZCl7XHJcblx0XHRcdFx0XHR3aWR0aCA9IGV2ZW50LmRldGFpbC53aWR0aDtcclxuXHJcblx0XHRcdFx0XHRpZih3aWR0aCAmJiB3aWR0aCAhPT0gZWxlbS5fbGF6eXNpemVzV2lkdGgpe1xyXG5cdFx0XHRcdFx0XHRzaXplRWxlbWVudChlbGVtLCBwYXJlbnQsIGV2ZW50LCB3aWR0aCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciB1cGRhdGVFbGVtZW50c1NpemVzID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0dmFyIGk7XHJcblx0XHRcdHZhciBsZW4gPSBhdXRvc2l6ZXNFbGVtcy5sZW5ndGg7XHJcblx0XHRcdGlmKGxlbil7XHJcblx0XHRcdFx0aSA9IDA7XHJcblxyXG5cdFx0XHRcdGZvcig7IGkgPCBsZW47IGkrKyl7XHJcblx0XHRcdFx0XHRnZXRTaXplRWxlbWVudChhdXRvc2l6ZXNFbGVtc1tpXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHZhciBkZWJvdW5jZWRVcGRhdGVFbGVtZW50c1NpemVzID0gZGVib3VuY2UodXBkYXRlRWxlbWVudHNTaXplcyk7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0XzogZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRhdXRvc2l6ZXNFbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobGF6eVNpemVzQ2ZnLmF1dG9zaXplc0NsYXNzKTtcclxuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZWRVcGRhdGVFbGVtZW50c1NpemVzKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hlY2tFbGVtczogZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyxcclxuXHRcdFx0dXBkYXRlRWxlbTogZ2V0U2l6ZUVsZW1lbnRcclxuXHRcdH07XHJcblx0fSkoKTtcclxuXHJcblx0dmFyIGluaXQgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoIWluaXQuaSAmJiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXtcclxuXHRcdFx0aW5pdC5pID0gdHJ1ZTtcclxuXHRcdFx0YXV0b1NpemVyLl8oKTtcclxuXHRcdFx0bG9hZGVyLl8oKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRpZihsYXp5U2l6ZXNDZmcuaW5pdCl7XHJcblx0XHRcdGluaXQoKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0bGF6eXNpemVzID0ge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBAdHlwZSB7IExhenlTaXplc0NvbmZpZ1BhcnRpYWwgfVxyXG5cdFx0ICovXHJcblx0XHRjZmc6IGxhenlTaXplc0NmZyxcclxuXHRcdGF1dG9TaXplcjogYXV0b1NpemVyLFxyXG5cdFx0bG9hZGVyOiBsb2FkZXIsXHJcblx0XHRpbml0OiBpbml0LFxyXG5cdFx0dVA6IHVwZGF0ZVBvbHlmaWxsLFxyXG5cdFx0YUM6IGFkZENsYXNzLFxyXG5cdFx0ckM6IHJlbW92ZUNsYXNzLFxyXG5cdFx0aEM6IGhhc0NsYXNzLFxyXG5cdFx0ZmlyZTogdHJpZ2dlckV2ZW50LFxyXG5cdFx0Z1c6IGdldFdpZHRoLFxyXG5cdFx0ckFGOiByQUYsXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIGxhenlzaXplcztcclxufVxyXG4pKTtcclxuIiwgIihmdW5jdGlvbih3aW5kb3csIGZhY3RvcnkpIHtcclxuXHR2YXIgZ2xvYmFsSW5zdGFsbCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRmYWN0b3J5KHdpbmRvdy5sYXp5U2l6ZXMpO1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xhenl1bnZlaWxyZWFkJywgZ2xvYmFsSW5zdGFsbCwgdHJ1ZSk7XHJcblx0fTtcclxuXHJcblx0ZmFjdG9yeSA9IGZhY3RvcnkuYmluZChudWxsLCB3aW5kb3csIHdpbmRvdy5kb2N1bWVudCk7XHJcblxyXG5cdGlmKHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpe1xyXG5cdFx0ZmFjdG9yeShyZXF1aXJlKCdsYXp5c2l6ZXMnKSk7XHJcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0ZGVmaW5lKFsnbGF6eXNpemVzJ10sIGZhY3RvcnkpO1xyXG5cdH0gZWxzZSBpZih3aW5kb3cubGF6eVNpemVzKSB7XHJcblx0XHRnbG9iYWxJbnN0YWxsKCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsYXp5dW52ZWlscmVhZCcsIGdsb2JhbEluc3RhbGwsIHRydWUpO1xyXG5cdH1cclxufSh3aW5kb3csIGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsIGxhenlTaXplcykge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dmFyIGltZ1N1cHBvcnQgPSAnbG9hZGluZycgaW4gSFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGU7XHJcblx0dmFyIGlmcmFtZVN1cHBvcnQgPSAnbG9hZGluZycgaW4gSFRNTElGcmFtZUVsZW1lbnQucHJvdG90eXBlO1xyXG5cdHZhciBpc0NvbmZpZ1NldCA9IGZhbHNlO1xyXG5cdHZhciBvbGRQcmVtYXR1cmVVbnZlaWwgPSBsYXp5U2l6ZXMucHJlbWF0dXJlVW52ZWlsO1xyXG5cdHZhciBjZmcgPSBsYXp5U2l6ZXMuY2ZnO1xyXG5cdHZhciBsaXN0ZW5lck1hcCA9IHtcclxuXHRcdGZvY3VzOiAxLFxyXG5cdFx0bW91c2VvdmVyOiAxLFxyXG5cdFx0Y2xpY2s6IDEsXHJcblx0XHRsb2FkOiAxLFxyXG5cdFx0dHJhbnNpdGlvbmVuZDogMSxcclxuXHRcdGFuaW1hdGlvbmVuZDogMSxcclxuXHRcdHNjcm9sbDogMSxcclxuXHRcdHJlc2l6ZTogMSxcclxuXHR9O1xyXG5cclxuXHRpZiAoIWNmZy5uYXRpdmVMb2FkaW5nKSB7XHJcblx0XHRjZmcubmF0aXZlTG9hZGluZyA9IHt9O1xyXG5cdH1cclxuXHJcblx0aWYgKCF3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCAhd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgfHwgKCFpbWdTdXBwb3J0ICYmICFpZnJhbWVTdXBwb3J0KSkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZGlzYWJsZUV2ZW50cygpIHtcclxuXHRcdHZhciBsb2FkZXIgPSBsYXp5U2l6ZXMubG9hZGVyO1xyXG5cdFx0dmFyIHRocm90dGxlZENoZWNrRWxlbWVudHMgPSBsb2FkZXIuY2hlY2tFbGVtcztcclxuXHRcdHZhciByZW1vdmVBTFNMID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBsb2FkZXIuX2FMU0wsIHRydWUpO1xyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHRcdH07XHJcblx0XHR2YXIgY3VycmVudExpc3RlbmVyTWFwID0gdHlwZW9mIGNmZy5uYXRpdmVMb2FkaW5nLmRpc2FibGVMaXN0ZW5lcnMgPT0gJ29iamVjdCcgP1xyXG5cdFx0XHRjZmcubmF0aXZlTG9hZGluZy5kaXNhYmxlTGlzdGVuZXJzIDpcclxuXHRcdFx0bGlzdGVuZXJNYXA7XHJcblxyXG5cdFx0aWYgKGN1cnJlbnRMaXN0ZW5lck1hcC5zY3JvbGwpIHtcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZW1vdmVBTFNMKTtcclxuXHRcdFx0cmVtb3ZlQUxTTCgpO1xyXG5cclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjdXJyZW50TGlzdGVuZXJNYXAucmVzaXplKSB7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcclxuXHRcdH1cclxuXHJcblx0XHRPYmplY3Qua2V5cyhjdXJyZW50TGlzdGVuZXJNYXApLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xyXG5cdFx0XHRpZiAoY3VycmVudExpc3RlbmVyTWFwW25hbWVdKSB7XHJcblx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBydW5Db25maWcoKSB7XHJcblx0XHRpZiAoaXNDb25maWdTZXQpIHtyZXR1cm47fVxyXG5cdFx0aXNDb25maWdTZXQgPSB0cnVlO1xyXG5cclxuXHRcdGlmIChpbWdTdXBwb3J0ICYmIGlmcmFtZVN1cHBvcnQgJiYgY2ZnLm5hdGl2ZUxvYWRpbmcuZGlzYWJsZUxpc3RlbmVycykge1xyXG5cdFx0XHRpZiAoY2ZnLm5hdGl2ZUxvYWRpbmcuZGlzYWJsZUxpc3RlbmVycyA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdGNmZy5uYXRpdmVMb2FkaW5nLnNldExvYWRpbmdBdHRyaWJ1dGUgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkaXNhYmxlRXZlbnRzKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNmZy5uYXRpdmVMb2FkaW5nLnNldExvYWRpbmdBdHRyaWJ1dGUpIHtcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xhenliZWZvcmV1bnZlaWwnLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0XHR2YXIgZWxlbWVudCA9IGUudGFyZ2V0O1xyXG5cclxuXHRcdFx0XHRpZiAoJ2xvYWRpbmcnIGluIGVsZW1lbnQgJiYgIWVsZW1lbnQuZ2V0QXR0cmlidXRlKCdsb2FkaW5nJykpIHtcclxuXHRcdFx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywgJ2xhenknKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIHRydWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGF6eVNpemVzLnByZW1hdHVyZVVudmVpbCA9IGZ1bmN0aW9uIHByZW1hdHVyZVVudmVpbChlbGVtZW50KSB7XHJcblxyXG5cdFx0aWYgKCFpc0NvbmZpZ1NldCkge1xyXG5cdFx0XHRydW5Db25maWcoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoJ2xvYWRpbmcnIGluIGVsZW1lbnQgJiZcclxuXHRcdFx0KGNmZy5uYXRpdmVMb2FkaW5nLnNldExvYWRpbmdBdHRyaWJ1dGUgfHwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnKSkgJiZcclxuXHRcdFx0KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNpemVzJykgIT0gJ2F1dG8nIHx8IGVsZW1lbnQub2Zmc2V0V2lkdGgpKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvbGRQcmVtYXR1cmVVbnZlaWwpIHtcclxuXHRcdFx0cmV0dXJuIG9sZFByZW1hdHVyZVVudmVpbChlbGVtZW50KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxufSkpO1xyXG4iLCAiLyohXHJcbiAqIGNsaXBib2FyZC5qcyB2Mi4wLjExXHJcbiAqIGh0dHBzOi8vY2xpcGJvYXJkanMuY29tL1xyXG4gKlxyXG4gKiBMaWNlbnNlZCBNSVQgXHUwMEE5IFplbm8gUm9jaGFcclxuICovXHJcbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XHJcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XHJcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXHJcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xyXG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxyXG5cdFx0ZXhwb3J0c1tcIkNsaXBib2FyZEpTXCJdID0gZmFjdG9yeSgpO1xyXG5cdGVsc2VcclxuXHRcdHJvb3RbXCJDbGlwYm9hcmRKU1wiXSA9IGZhY3RvcnkoKTtcclxufSkodGhpcywgZnVuY3Rpb24oKSB7XHJcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24oKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcclxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XHJcblxyXG4vKioqLyA2ODY6XHJcbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBFWFBPUlRTXHJcbl9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XHJcbiAgXCJkZWZhdWx0XCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gLyogYmluZGluZyAqLyBjbGlwYm9hcmQ7IH1cclxufSk7XHJcblxyXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3RpbnktZW1pdHRlci9pbmRleC5qc1xyXG52YXIgdGlueV9lbWl0dGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNzkpO1xyXG52YXIgdGlueV9lbWl0dGVyX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHRpbnlfZW1pdHRlcik7XHJcbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvZ29vZC1saXN0ZW5lci9zcmMvbGlzdGVuLmpzXHJcbnZhciBsaXN0ZW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3MCk7XHJcbnZhciBsaXN0ZW5fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4obGlzdGVuKTtcclxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9zZWxlY3Qvc3JjL3NlbGVjdC5qc1xyXG52YXIgc3JjX3NlbGVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oODE3KTtcclxudmFyIHNlbGVjdF9kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihzcmNfc2VsZWN0KTtcclxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvbW1vbi9jb21tYW5kLmpzXHJcbi8qKlxyXG4gKiBFeGVjdXRlcyBhIGdpdmVuIG9wZXJhdGlvbiB0eXBlLlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gY29tbWFuZCh0eXBlKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5leGVjQ29tbWFuZCh0eXBlKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2FjdGlvbnMvY3V0LmpzXHJcblxyXG5cclxuLyoqXHJcbiAqIEN1dCBhY3Rpb24gd3JhcHBlci5cclxuICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR9IHRhcmdldFxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XHJcbiAqL1xyXG5cclxudmFyIENsaXBib2FyZEFjdGlvbkN1dCA9IGZ1bmN0aW9uIENsaXBib2FyZEFjdGlvbkN1dCh0YXJnZXQpIHtcclxuICB2YXIgc2VsZWN0ZWRUZXh0ID0gc2VsZWN0X2RlZmF1bHQoKSh0YXJnZXQpO1xyXG4gIGNvbW1hbmQoJ2N1dCcpO1xyXG4gIHJldHVybiBzZWxlY3RlZFRleHQ7XHJcbn07XHJcblxyXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBhY3Rpb25zX2N1dCA9IChDbGlwYm9hcmRBY3Rpb25DdXQpO1xyXG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29tbW9uL2NyZWF0ZS1mYWtlLWVsZW1lbnQuanNcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBmYWtlIHRleHRhcmVhIGVsZW1lbnQgd2l0aCBhIHZhbHVlLlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcclxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVGYWtlRWxlbWVudCh2YWx1ZSkge1xyXG4gIHZhciBpc1JUTCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RpcicpID09PSAncnRsJztcclxuICB2YXIgZmFrZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpOyAvLyBQcmV2ZW50IHpvb21pbmcgb24gaU9TXHJcblxyXG4gIGZha2VFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gJzEycHQnOyAvLyBSZXNldCBib3ggbW9kZWxcclxuXHJcbiAgZmFrZUVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJzAnO1xyXG4gIGZha2VFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnMCc7XHJcbiAgZmFrZUVsZW1lbnQuc3R5bGUubWFyZ2luID0gJzAnOyAvLyBNb3ZlIGVsZW1lbnQgb3V0IG9mIHNjcmVlbiBob3Jpem9udGFsbHlcclxuXHJcbiAgZmFrZUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gIGZha2VFbGVtZW50LnN0eWxlW2lzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0J10gPSAnLTk5OTlweCc7IC8vIE1vdmUgZWxlbWVudCB0byB0aGUgc2FtZSBwb3NpdGlvbiB2ZXJ0aWNhbGx5XHJcblxyXG4gIHZhciB5UG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICBmYWtlRWxlbWVudC5zdHlsZS50b3AgPSBcIlwiLmNvbmNhdCh5UG9zaXRpb24sIFwicHhcIik7XHJcbiAgZmFrZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcclxuICBmYWtlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xyXG4gIHJldHVybiBmYWtlRWxlbWVudDtcclxufVxyXG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvYWN0aW9ucy9jb3B5LmpzXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgZmFrZSBjb3B5IGFjdGlvbiB3cmFwcGVyIHVzaW5nIGEgZmFrZSBlbGVtZW50LlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdGFyZ2V0XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAqIEByZXR1cm4ge1N0cmluZ31cclxuICovXHJcblxyXG52YXIgZmFrZUNvcHlBY3Rpb24gPSBmdW5jdGlvbiBmYWtlQ29weUFjdGlvbih2YWx1ZSwgb3B0aW9ucykge1xyXG4gIHZhciBmYWtlRWxlbWVudCA9IGNyZWF0ZUZha2VFbGVtZW50KHZhbHVlKTtcclxuICBvcHRpb25zLmNvbnRhaW5lci5hcHBlbmRDaGlsZChmYWtlRWxlbWVudCk7XHJcbiAgdmFyIHNlbGVjdGVkVGV4dCA9IHNlbGVjdF9kZWZhdWx0KCkoZmFrZUVsZW1lbnQpO1xyXG4gIGNvbW1hbmQoJ2NvcHknKTtcclxuICBmYWtlRWxlbWVudC5yZW1vdmUoKTtcclxuICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xyXG59O1xyXG4vKipcclxuICogQ29weSBhY3Rpb24gd3JhcHBlci5cclxuICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR9IHRhcmdldFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XHJcbiAqL1xyXG5cclxuXHJcbnZhciBDbGlwYm9hcmRBY3Rpb25Db3B5ID0gZnVuY3Rpb24gQ2xpcGJvYXJkQWN0aW9uQ29weSh0YXJnZXQpIHtcclxuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xyXG4gICAgY29udGFpbmVyOiBkb2N1bWVudC5ib2R5XHJcbiAgfTtcclxuICB2YXIgc2VsZWN0ZWRUZXh0ID0gJyc7XHJcblxyXG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJykge1xyXG4gICAgc2VsZWN0ZWRUZXh0ID0gZmFrZUNvcHlBY3Rpb24odGFyZ2V0LCBvcHRpb25zKTtcclxuICB9IGVsc2UgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgIVsndGV4dCcsICdzZWFyY2gnLCAndXJsJywgJ3RlbCcsICdwYXNzd29yZCddLmluY2x1ZGVzKHRhcmdldCA9PT0gbnVsbCB8fCB0YXJnZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhcmdldC50eXBlKSkge1xyXG4gICAgLy8gSWYgaW5wdXQgdHlwZSBkb2Vzbid0IHN1cHBvcnQgYHNldFNlbGVjdGlvblJhbmdlYC4gU2ltdWxhdGUgaXQuIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MSW5wdXRFbGVtZW50L3NldFNlbGVjdGlvblJhbmdlXHJcbiAgICBzZWxlY3RlZFRleHQgPSBmYWtlQ29weUFjdGlvbih0YXJnZXQudmFsdWUsIG9wdGlvbnMpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZWxlY3RlZFRleHQgPSBzZWxlY3RfZGVmYXVsdCgpKHRhcmdldCk7XHJcbiAgICBjb21tYW5kKCdjb3B5Jyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xyXG59O1xyXG5cclxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgYWN0aW9uc19jb3B5ID0gKENsaXBib2FyZEFjdGlvbkNvcHkpO1xyXG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvYWN0aW9ucy9kZWZhdWx0LmpzXHJcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIElubmVyIGZ1bmN0aW9uIHdoaWNoIHBlcmZvcm1zIHNlbGVjdGlvbiBmcm9tIGVpdGhlciBgdGV4dGAgb3IgYHRhcmdldGBcclxuICogcHJvcGVydGllcyBhbmQgdGhlbiBleGVjdXRlcyBjb3B5IG9yIGN1dCBvcGVyYXRpb25zLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gKi9cclxuXHJcbnZhciBDbGlwYm9hcmRBY3Rpb25EZWZhdWx0ID0gZnVuY3Rpb24gQ2xpcGJvYXJkQWN0aW9uRGVmYXVsdCgpIHtcclxuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XHJcbiAgLy8gRGVmaW5lcyBiYXNlIHByb3BlcnRpZXMgcGFzc2VkIGZyb20gY29uc3RydWN0b3IuXHJcbiAgdmFyIF9vcHRpb25zJGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uLFxyXG4gICAgICBhY3Rpb24gPSBfb3B0aW9ucyRhY3Rpb24gPT09IHZvaWQgMCA/ICdjb3B5JyA6IF9vcHRpb25zJGFjdGlvbixcclxuICAgICAgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIsXHJcbiAgICAgIHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0LFxyXG4gICAgICB0ZXh0ID0gb3B0aW9ucy50ZXh0OyAvLyBTZXRzIHRoZSBgYWN0aW9uYCB0byBiZSBwZXJmb3JtZWQgd2hpY2ggY2FuIGJlIGVpdGhlciAnY29weScgb3IgJ2N1dCcuXHJcblxyXG4gIGlmIChhY3Rpb24gIT09ICdjb3B5JyAmJiBhY3Rpb24gIT09ICdjdXQnKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJhY3Rpb25cIiB2YWx1ZSwgdXNlIGVpdGhlciBcImNvcHlcIiBvciBcImN1dFwiJyk7XHJcbiAgfSAvLyBTZXRzIHRoZSBgdGFyZ2V0YCBwcm9wZXJ0eSB1c2luZyBhbiBlbGVtZW50IHRoYXQgd2lsbCBiZSBoYXZlIGl0cyBjb250ZW50IGNvcGllZC5cclxuXHJcblxyXG4gIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHRhcmdldCAmJiBfdHlwZW9mKHRhcmdldCkgPT09ICdvYmplY3QnICYmIHRhcmdldC5ub2RlVHlwZSA9PT0gMSkge1xyXG4gICAgICBpZiAoYWN0aW9uID09PSAnY29weScgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIGF0dHJpYnV0ZS4gUGxlYXNlIHVzZSBcInJlYWRvbmx5XCIgaW5zdGVhZCBvZiBcImRpc2FibGVkXCIgYXR0cmlidXRlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChhY3Rpb24gPT09ICdjdXQnICYmICh0YXJnZXQuaGFzQXR0cmlidXRlKCdyZWFkb25seScpIHx8IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBZb3UgY2FuXFwndCBjdXQgdGV4dCBmcm9tIGVsZW1lbnRzIHdpdGggXCJyZWFkb25seVwiIG9yIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGVzJyk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIHZhbHVlLCB1c2UgYSB2YWxpZCBFbGVtZW50Jyk7XHJcbiAgICB9XHJcbiAgfSAvLyBEZWZpbmUgc2VsZWN0aW9uIHN0cmF0ZWd5IGJhc2VkIG9uIGB0ZXh0YCBwcm9wZXJ0eS5cclxuXHJcblxyXG4gIGlmICh0ZXh0KSB7XHJcbiAgICByZXR1cm4gYWN0aW9uc19jb3B5KHRleHQsIHtcclxuICAgICAgY29udGFpbmVyOiBjb250YWluZXJcclxuICAgIH0pO1xyXG4gIH0gLy8gRGVmaW5lcyB3aGljaCBzZWxlY3Rpb24gc3RyYXRlZ3kgYmFzZWQgb24gYHRhcmdldGAgcHJvcGVydHkuXHJcblxyXG5cclxuICBpZiAodGFyZ2V0KSB7XHJcbiAgICByZXR1cm4gYWN0aW9uID09PSAnY3V0JyA/IGFjdGlvbnNfY3V0KHRhcmdldCkgOiBhY3Rpb25zX2NvcHkodGFyZ2V0LCB7XHJcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBhY3Rpb25zX2RlZmF1bHQgPSAoQ2xpcGJvYXJkQWN0aW9uRGVmYXVsdCk7XHJcbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jbGlwYm9hcmQuanNcclxuZnVuY3Rpb24gY2xpcGJvYXJkX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgY2xpcGJvYXJkX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBjbGlwYm9hcmRfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIGNsaXBib2FyZF90eXBlb2Yob2JqKTsgfVxyXG5cclxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cclxuXHJcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XHJcblxyXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxyXG5cclxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cclxuXHJcbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XHJcblxyXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChjbGlwYm9hcmRfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XHJcblxyXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cclxuXHJcbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cclxuXHJcbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0byByZXRyaWV2ZSBhdHRyaWJ1dGUgdmFsdWUuXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdWZmaXhcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlVmFsdWUoc3VmZml4LCBlbGVtZW50KSB7XHJcbiAgdmFyIGF0dHJpYnV0ZSA9IFwiZGF0YS1jbGlwYm9hcmQtXCIuY29uY2F0KHN1ZmZpeCk7XHJcblxyXG4gIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoYXR0cmlidXRlKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSk7XHJcbn1cclxuLyoqXHJcbiAqIEJhc2UgY2xhc3Mgd2hpY2ggdGFrZXMgb25lIG9yIG1vcmUgZWxlbWVudHMsIGFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZW0sXHJcbiAqIGFuZCBpbnN0YW50aWF0ZXMgYSBuZXcgYENsaXBib2FyZEFjdGlvbmAgb24gZWFjaCBjbGljay5cclxuICovXHJcblxyXG5cclxudmFyIENsaXBib2FyZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0VtaXR0ZXIpIHtcclxuICBfaW5oZXJpdHMoQ2xpcGJvYXJkLCBfRW1pdHRlcik7XHJcblxyXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQ2xpcGJvYXJkKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR8SFRNTENvbGxlY3Rpb258Tm9kZUxpc3R9IHRyaWdnZXJcclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIENsaXBib2FyZCh0cmlnZ2VyLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgX3RoaXM7XHJcblxyXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENsaXBib2FyZCk7XHJcblxyXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKTtcclxuXHJcbiAgICBfdGhpcy5yZXNvbHZlT3B0aW9ucyhvcHRpb25zKTtcclxuXHJcbiAgICBfdGhpcy5saXN0ZW5DbGljayh0cmlnZ2VyKTtcclxuXHJcbiAgICByZXR1cm4gX3RoaXM7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIERlZmluZXMgaWYgYXR0cmlidXRlcyB3b3VsZCBiZSByZXNvbHZlZCB1c2luZyBpbnRlcm5hbCBzZXR0ZXIgZnVuY3Rpb25zXHJcbiAgICogb3IgY3VzdG9tIGZ1bmN0aW9ucyB0aGF0IHdlcmUgcGFzc2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gICAqL1xyXG5cclxuXHJcbiAgX2NyZWF0ZUNsYXNzKENsaXBib2FyZCwgW3tcclxuICAgIGtleTogXCJyZXNvbHZlT3B0aW9uc1wiLFxyXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmVPcHRpb25zKCkge1xyXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XHJcbiAgICAgIHRoaXMuYWN0aW9uID0gdHlwZW9mIG9wdGlvbnMuYWN0aW9uID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5hY3Rpb24gOiB0aGlzLmRlZmF1bHRBY3Rpb247XHJcbiAgICAgIHRoaXMudGFyZ2V0ID0gdHlwZW9mIG9wdGlvbnMudGFyZ2V0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy50YXJnZXQgOiB0aGlzLmRlZmF1bHRUYXJnZXQ7XHJcbiAgICAgIHRoaXMudGV4dCA9IHR5cGVvZiBvcHRpb25zLnRleHQgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnRleHQgOiB0aGlzLmRlZmF1bHRUZXh0O1xyXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNsaXBib2FyZF90eXBlb2Yob3B0aW9ucy5jb250YWluZXIpID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuY29udGFpbmVyIDogZG9jdW1lbnQuYm9keTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBwYXNzZWQgdHJpZ2dlci5cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fSB0cmlnZ2VyXHJcbiAgICAgKi9cclxuXHJcbiAgfSwge1xyXG4gICAga2V5OiBcImxpc3RlbkNsaWNrXCIsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuQ2xpY2sodHJpZ2dlcikge1xyXG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcclxuXHJcbiAgICAgIHRoaXMubGlzdGVuZXIgPSBsaXN0ZW5fZGVmYXVsdCgpKHRyaWdnZXIsICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzMi5vbkNsaWNrKGUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIG5ldyBgQ2xpcGJvYXJkQWN0aW9uYCBvbiBlYWNoIGNsaWNrIGV2ZW50LlxyXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxyXG4gICAgICovXHJcblxyXG4gIH0sIHtcclxuICAgIGtleTogXCJvbkNsaWNrXCIsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DbGljayhlKSB7XHJcbiAgICAgIHZhciB0cmlnZ2VyID0gZS5kZWxlZ2F0ZVRhcmdldCB8fCBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgIHZhciBhY3Rpb24gPSB0aGlzLmFjdGlvbih0cmlnZ2VyKSB8fCAnY29weSc7XHJcbiAgICAgIHZhciB0ZXh0ID0gYWN0aW9uc19kZWZhdWx0KHtcclxuICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICBjb250YWluZXI6IHRoaXMuY29udGFpbmVyLFxyXG4gICAgICAgIHRhcmdldDogdGhpcy50YXJnZXQodHJpZ2dlciksXHJcbiAgICAgICAgdGV4dDogdGhpcy50ZXh0KHRyaWdnZXIpXHJcbiAgICAgIH0pOyAvLyBGaXJlcyBhbiBldmVudCBiYXNlZCBvbiB0aGUgY29weSBvcGVyYXRpb24gcmVzdWx0LlxyXG5cclxuICAgICAgdGhpcy5lbWl0KHRleHQgPyAnc3VjY2VzcycgOiAnZXJyb3InLCB7XHJcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VyLFxyXG4gICAgICAgIGNsZWFyU2VsZWN0aW9uOiBmdW5jdGlvbiBjbGVhclNlbGVjdGlvbigpIHtcclxuICAgICAgICAgIGlmICh0cmlnZ2VyKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXIuZm9jdXMoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogRGVmYXVsdCBgYWN0aW9uYCBsb29rdXAgZnVuY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRyaWdnZXJcclxuICAgICAqL1xyXG5cclxuICB9LCB7XHJcbiAgICBrZXk6IFwiZGVmYXVsdEFjdGlvblwiLFxyXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRBY3Rpb24odHJpZ2dlcikge1xyXG4gICAgICByZXR1cm4gZ2V0QXR0cmlidXRlVmFsdWUoJ2FjdGlvbicsIHRyaWdnZXIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZhdWx0IGB0YXJnZXRgIGxvb2t1cCBmdW5jdGlvbi5cclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdHJpZ2dlclxyXG4gICAgICovXHJcblxyXG4gIH0sIHtcclxuICAgIGtleTogXCJkZWZhdWx0VGFyZ2V0XCIsXHJcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVmYXVsdFRhcmdldCh0cmlnZ2VyKSB7XHJcbiAgICAgIHZhciBzZWxlY3RvciA9IGdldEF0dHJpYnV0ZVZhbHVlKCd0YXJnZXQnLCB0cmlnZ2VyKTtcclxuXHJcbiAgICAgIGlmIChzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvdyBmaXJlIHByb2dyYW1tYXRpY2FsbHkgYSBjb3B5IGFjdGlvblxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd8SFRNTEVsZW1lbnR9IHRhcmdldFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICAgICAqIEByZXR1cm5zIFRleHQgY29waWVkLlxyXG4gICAgICovXHJcblxyXG4gIH0sIHtcclxuICAgIGtleTogXCJkZWZhdWx0VGV4dFwiLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmYXVsdCBgdGV4dGAgbG9va3VwIGZ1bmN0aW9uLlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0cmlnZ2VyXHJcbiAgICAgKi9cclxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0VGV4dCh0cmlnZ2VyKSB7XHJcbiAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWYWx1ZSgndGV4dCcsIHRyaWdnZXIpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95IGxpZmVjeWNsZS5cclxuICAgICAqL1xyXG5cclxuICB9LCB7XHJcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxyXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXIuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1dLCBbe1xyXG4gICAga2V5OiBcImNvcHlcIixcclxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb3B5KHRhcmdldCkge1xyXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge1xyXG4gICAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keVxyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gYWN0aW9uc19jb3B5KHRhcmdldCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFsbG93IGZpcmUgcHJvZ3JhbW1hdGljYWxseSBhIGN1dCBhY3Rpb25cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fSB0YXJnZXRcclxuICAgICAqIEByZXR1cm5zIFRleHQgY3V0dGVkLlxyXG4gICAgICovXHJcblxyXG4gIH0sIHtcclxuICAgIGtleTogXCJjdXRcIixcclxuICAgIHZhbHVlOiBmdW5jdGlvbiBjdXQodGFyZ2V0KSB7XHJcbiAgICAgIHJldHVybiBhY3Rpb25zX2N1dCh0YXJnZXQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBzdXBwb3J0IG9mIHRoZSBnaXZlbiBhY3Rpb24sIG9yIGFsbCBhY3Rpb25zIGlmIG5vIGFjdGlvbiBpc1xyXG4gICAgICogZ2l2ZW4uXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2FjdGlvbl1cclxuICAgICAqL1xyXG5cclxuICB9LCB7XHJcbiAgICBrZXk6IFwiaXNTdXBwb3J0ZWRcIixcclxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1N1cHBvcnRlZCgpIHtcclxuICAgICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogWydjb3B5JywgJ2N1dCddO1xyXG4gICAgICB2YXIgYWN0aW9ucyA9IHR5cGVvZiBhY3Rpb24gPT09ICdzdHJpbmcnID8gW2FjdGlvbl0gOiBhY3Rpb247XHJcbiAgICAgIHZhciBzdXBwb3J0ID0gISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQ7XHJcbiAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgc3VwcG9ydCA9IHN1cHBvcnQgJiYgISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQoYWN0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBzdXBwb3J0O1xyXG4gICAgfVxyXG4gIH1dKTtcclxuXHJcbiAgcmV0dXJuIENsaXBib2FyZDtcclxufSgodGlueV9lbWl0dGVyX2RlZmF1bHQoKSkpO1xyXG5cclxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY2xpcGJvYXJkID0gKENsaXBib2FyZCk7XHJcblxyXG4vKioqLyB9KSxcclxuXHJcbi8qKiovIDgyODpcclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cclxudmFyIERPQ1VNRU5UX05PREVfVFlQRSA9IDk7XHJcblxyXG4vKipcclxuICogQSBwb2x5ZmlsbCBmb3IgRWxlbWVudC5tYXRjaGVzKClcclxuICovXHJcbmlmICh0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcclxuICAgIHZhciBwcm90byA9IEVsZW1lbnQucHJvdG90eXBlO1xyXG5cclxuICAgIHByb3RvLm1hdGNoZXMgPSBwcm90by5tYXRjaGVzU2VsZWN0b3IgfHxcclxuICAgICAgICAgICAgICAgICAgICBwcm90by5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcclxuICAgICAgICAgICAgICAgICAgICBwcm90by5tc01hdGNoZXNTZWxlY3RvciB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHxcclxuICAgICAgICAgICAgICAgICAgICBwcm90by53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kcyB0aGUgY2xvc2VzdCBwYXJlbnQgdGhhdCBtYXRjaGVzIGEgc2VsZWN0b3IuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcclxuICogQHJldHVybiB7RnVuY3Rpb259XHJcbiAqL1xyXG5mdW5jdGlvbiBjbG9zZXN0IChlbGVtZW50LCBzZWxlY3Rvcikge1xyXG4gICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gRE9DVU1FTlRfTk9ERV9UWVBFKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm1hdGNoZXMgPT09ICdmdW5jdGlvbicgJiZcclxuICAgICAgICAgICAgZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY2xvc2VzdDtcclxuXHJcblxyXG4vKioqLyB9KSxcclxuXHJcbi8qKiovIDQzODpcclxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcblxyXG52YXIgY2xvc2VzdCA9IF9fd2VicGFja19yZXF1aXJlX18oODI4KTtcclxuXHJcbi8qKlxyXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmVcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKi9cclxuZnVuY3Rpb24gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xyXG4gICAgdmFyIGxpc3RlbmVyRm4gPSBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RWxlbWVudHxTdHJpbmd8QXJyYXl9IFtlbGVtZW50c11cclxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdXNlQ2FwdHVyZVxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqL1xyXG5mdW5jdGlvbiBkZWxlZ2F0ZShlbGVtZW50cywgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKSB7XHJcbiAgICAvLyBIYW5kbGUgdGhlIHJlZ3VsYXIgRWxlbWVudCB1c2FnZVxyXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cy5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhbmRsZSBFbGVtZW50LWxlc3MgdXNhZ2UsIGl0IGRlZmF1bHRzIHRvIGdsb2JhbCBkZWxlZ2F0aW9uXHJcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAvLyBVc2UgYGRvY3VtZW50YCBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyLCB0aGVuIGFwcGx5IGFyZ3VtZW50c1xyXG4gICAgICAgIC8vIFRoaXMgaXMgYSBzaG9ydCB3YXkgdG8gLnVuc2hpZnQgYGFyZ3VtZW50c2Agd2l0aG91dCBydW5uaW5nIGludG8gZGVvcHRpbWl6YXRpb25zXHJcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5iaW5kKG51bGwsIGRvY3VtZW50KS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhbmRsZSBTZWxlY3Rvci1iYXNlZCB1c2FnZVxyXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50cyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhbmRsZSBBcnJheS1saWtlIGJhc2VkIHVzYWdlXHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBfZGVsZWdhdGUoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrLCB1c2VDYXB0dXJlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogRmluZHMgY2xvc2VzdCBtYXRjaCBhbmQgaW52b2tlcyBjYWxsYmFjay5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cclxuICovXHJcbmZ1bmN0aW9uIGxpc3RlbmVyKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLmRlbGVnYXRlVGFyZ2V0ID0gY2xvc2VzdChlLnRhcmdldCwgc2VsZWN0b3IpO1xyXG5cclxuICAgICAgICBpZiAoZS5kZWxlZ2F0ZVRhcmdldCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKGVsZW1lbnQsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkZWxlZ2F0ZTtcclxuXHJcblxyXG4vKioqLyB9KSxcclxuXHJcbi8qKiovIDg3OTpcclxuLyoqKi8gKGZ1bmN0aW9uKF9fdW51c2VkX3dlYnBhY2tfbW9kdWxlLCBleHBvcnRzKSB7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBIVE1MIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKi9cclxuZXhwb3J0cy5ub2RlID0gZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgJiYgdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxyXG4gICAgICAgICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgbGlzdCBvZiBIVE1MIGVsZW1lbnRzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICovXHJcbmV4cG9ydHMubm9kZUxpc3QgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgJiYgKHR5cGUgPT09ICdbb2JqZWN0IE5vZGVMaXN0XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgSFRNTENvbGxlY3Rpb25dJylcclxuICAgICAgICAmJiAoJ2xlbmd0aCcgaW4gdmFsdWUpXHJcbiAgICAgICAgJiYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCBleHBvcnRzLm5vZGUodmFsdWVbMF0pKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIHN0cmluZy5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnRzLnN0cmluZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xyXG4gICAgICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKi9cclxuZXhwb3J0cy5mbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XHJcblxyXG4gICAgcmV0dXJuIHR5cGUgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbn07XHJcblxyXG5cclxuLyoqKi8gfSksXHJcblxyXG4vKioqLyAzNzA6XHJcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fdW51c2VkX3dlYnBhY2tfZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xyXG5cclxudmFyIGlzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4NzkpO1xyXG52YXIgZGVsZWdhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQzOCk7XHJcblxyXG4vKipcclxuICogVmFsaWRhdGVzIGFsbCBwYXJhbXMgYW5kIGNhbGxzIHRoZSByaWdodFxyXG4gKiBsaXN0ZW5lciBmdW5jdGlvbiBiYXNlZCBvbiBpdHMgdGFyZ2V0IHR5cGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fSB0YXJnZXRcclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKi9cclxuZnVuY3Rpb24gbGlzdGVuKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spIHtcclxuICAgIGlmICghdGFyZ2V0ICYmICF0eXBlICYmICFjYWxsYmFjaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudHMnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlzLnN0cmluZyh0eXBlKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgU3RyaW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpcy5mbihjYWxsYmFjaykpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGlyZCBhcmd1bWVudCBtdXN0IGJlIGEgRnVuY3Rpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXMubm9kZSh0YXJnZXQpKSB7XHJcbiAgICAgICAgcmV0dXJuIGxpc3Rlbk5vZGUodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpcy5ub2RlTGlzdCh0YXJnZXQpKSB7XHJcbiAgICAgICAgcmV0dXJuIGxpc3Rlbk5vZGVMaXN0KHRhcmdldCwgdHlwZSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXMuc3RyaW5nKHRhcmdldCkpIHtcclxuICAgICAgICByZXR1cm4gbGlzdGVuU2VsZWN0b3IodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgU3RyaW5nLCBIVE1MRWxlbWVudCwgSFRNTENvbGxlY3Rpb24sIG9yIE5vZGVMaXN0Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgSFRNTCBlbGVtZW50XHJcbiAqIGFuZCByZXR1cm5zIGEgcmVtb3ZlIGxpc3RlbmVyIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICovXHJcbmZ1bmN0aW9uIGxpc3Rlbk5vZGUobm9kZSwgdHlwZSwgY2FsbGJhY2spIHtcclxuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBsaXN0IG9mIEhUTUwgZWxlbWVudHNcclxuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7Tm9kZUxpc3R8SFRNTENvbGxlY3Rpb259IG5vZGVMaXN0XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICovXHJcbmZ1bmN0aW9uIGxpc3Rlbk5vZGVMaXN0KG5vZGVMaXN0LCB0eXBlLCBjYWxsYmFjaykge1xyXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlTGlzdCwgZnVuY3Rpb24obm9kZSkge1xyXG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVMaXN0LCBmdW5jdGlvbihub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBzZWxlY3RvclxyXG4gKiBhbmQgcmV0dXJucyBhIHJlbW92ZSBsaXN0ZW5lciBmdW5jdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICovXHJcbmZ1bmN0aW9uIGxpc3RlblNlbGVjdG9yKHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xyXG4gICAgcmV0dXJuIGRlbGVnYXRlKGRvY3VtZW50LmJvZHksIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjayk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbGlzdGVuO1xyXG5cclxuXHJcbi8qKiovIH0pLFxyXG5cclxuLyoqKi8gODE3OlxyXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XHJcblxyXG5mdW5jdGlvbiBzZWxlY3QoZWxlbWVudCkge1xyXG4gICAgdmFyIHNlbGVjdGVkVGV4dDtcclxuXHJcbiAgICBpZiAoZWxlbWVudC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcpIHtcclxuICAgICAgICBlbGVtZW50LmZvY3VzKCk7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IGVsZW1lbnQudmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IGVsZW1lbnQubm9kZU5hbWUgPT09ICdURVhUQVJFQScpIHtcclxuICAgICAgICB2YXIgaXNSZWFkT25seSA9IGVsZW1lbnQuaGFzQXR0cmlidXRlKCdyZWFkb25seScpO1xyXG5cclxuICAgICAgICBpZiAoIWlzUmVhZE9ubHkpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbWVudC5zZWxlY3QoKTtcclxuICAgICAgICBlbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIGVsZW1lbnQudmFsdWUubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgaWYgKCFpc1JlYWRPbmx5KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0ZWRUZXh0ID0gZWxlbWVudC52YWx1ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJykpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG5cclxuICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWxlbWVudCk7XHJcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcblxyXG4gICAgICAgIHNlbGVjdGVkVGV4dCA9IHNlbGVjdGlvbi50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZWxlY3RlZFRleHQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2VsZWN0O1xyXG5cclxuXHJcbi8qKiovIH0pLFxyXG5cclxuLyoqKi8gMjc5OlxyXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XHJcblxyXG5mdW5jdGlvbiBFICgpIHtcclxuICAvLyBLZWVwIHRoaXMgZW1wdHkgc28gaXQncyBlYXNpZXIgdG8gaW5oZXJpdCBmcm9tXHJcbiAgLy8gKHZpYSBodHRwczovL2dpdGh1Yi5jb20vbGlwc21hY2sgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2lzc3Vlcy8zKVxyXG59XHJcblxyXG5FLnByb3RvdHlwZSA9IHtcclxuICBvbjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcclxuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XHJcblxyXG4gICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xyXG4gICAgICBmbjogY2FsbGJhY2ssXHJcbiAgICAgIGN0eDogY3R4XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9LFxyXG5cclxuICBvbmNlOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgZnVuY3Rpb24gbGlzdGVuZXIgKCkge1xyXG4gICAgICBzZWxmLm9mZihuYW1lLCBsaXN0ZW5lcik7XHJcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcclxuICAgIH07XHJcblxyXG4gICAgbGlzdGVuZXIuXyA9IGNhbGxiYWNrXHJcbiAgICByZXR1cm4gdGhpcy5vbihuYW1lLCBsaXN0ZW5lciwgY3R4KTtcclxuICB9LFxyXG5cclxuICBlbWl0OiBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgdmFyIGRhdGEgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XHJcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XHJcbiAgICB2YXIgaSA9IDA7XHJcbiAgICB2YXIgbGVuID0gZXZ0QXJyLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGk7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBldnRBcnJbaV0uZm4uYXBwbHkoZXZ0QXJyW2ldLmN0eCwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfSxcclxuXHJcbiAgb2ZmOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcclxuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XHJcbiAgICB2YXIgZXZ0cyA9IGVbbmFtZV07XHJcbiAgICB2YXIgbGl2ZUV2ZW50cyA9IFtdO1xyXG5cclxuICAgIGlmIChldnRzICYmIGNhbGxiYWNrKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXHJcbiAgICAgICAgICBsaXZlRXZlbnRzLnB1c2goZXZ0c1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgZXZlbnQgZnJvbSBxdWV1ZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXHJcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcclxuICAgIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9jb21taXQvYzZlYmZhYTliYzk3M2IzM2QxMTBhODRhMzA3NzQyYjdjZjk0Yzk1MyNjb21taXRjb21tZW50LTUwMjQ5MTBcclxuXHJcbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXHJcbiAgICAgID8gZVtuYW1lXSA9IGxpdmVFdmVudHNcclxuICAgICAgOiBkZWxldGUgZVtuYW1lXTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEU7XHJcbm1vZHVsZS5leHBvcnRzLlRpbnlFbWl0dGVyID0gRTtcclxuXHJcblxyXG4vKioqLyB9KVxyXG5cclxuLyoqKioqKi8gXHR9KTtcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXHJcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xyXG4vKioqKioqLyBcdFxyXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXHJcbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xyXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXHJcbi8qKioqKiovIFx0XHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XHJcbi8qKioqKiovIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XHJcbi8qKioqKiovIFx0XHR9XHJcbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxyXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XHJcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcclxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcclxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cclxuLyoqKioqKi8gXHRcdH07XHJcbi8qKioqKiovIFx0XHJcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cclxuLyoqKioqKi8gXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xyXG4vKioqKioqLyBcdFxyXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcclxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcclxuLyoqKioqKi8gXHR9XHJcbi8qKioqKiovIFx0XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQgKi9cclxuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XHJcbi8qKioqKiovIFx0XHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xyXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcbi8qKioqKiovIFx0XHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xyXG4vKioqKioqLyBcdFx0XHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxyXG4vKioqKioqLyBcdFx0XHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xyXG4vKioqKioqLyBcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcclxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGdldHRlcjtcclxuLyoqKioqKi8gXHRcdH07XHJcbi8qKioqKiovIFx0fSgpO1xyXG4vKioqKioqLyBcdFxyXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyAqL1xyXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcclxuLyoqKioqKi8gXHRcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcclxuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcclxuLyoqKioqKi8gXHRcdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xyXG4vKioqKioqLyBcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xyXG4vKioqKioqLyBcdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcclxuLyoqKioqKi8gXHRcdFx0XHR9XHJcbi8qKioqKiovIFx0XHRcdH1cclxuLyoqKioqKi8gXHRcdH07XHJcbi8qKioqKiovIFx0fSgpO1xyXG4vKioqKioqLyBcdFxyXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQgKi9cclxuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XHJcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9XHJcbi8qKioqKiovIFx0fSgpO1xyXG4vKioqKioqLyBcdFxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKioqKioqLyBcdC8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXHJcbi8qKioqKiovIFx0Ly8gc3RhcnR1cFxyXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xyXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDY4Nik7XHJcbi8qKioqKiovIH0pKClcclxuLmRlZmF1bHQ7XHJcbn0pOyIsICJmdW5jdGlvbiBlKGUscil7KG51bGw9PXJ8fHI+ZS5sZW5ndGgpJiYocj1lLmxlbmd0aCk7Zm9yKHZhciBuPTAsdD1BcnJheShyKTtuPHI7bisrKXRbbl09ZVtuXTtyZXR1cm4gdH1mdW5jdGlvbiByKHIsbil7dmFyIHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmcltTeW1ib2wuaXRlcmF0b3JdfHxyW1wiQEBpdGVyYXRvclwiXTtpZih0KXJldHVybih0PXQuY2FsbChyKSkubmV4dC5iaW5kKHQpO2lmKEFycmF5LmlzQXJyYXkocil8fCh0PWZ1bmN0aW9uKHIsbil7aWYocil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHIpcmV0dXJuIGUocixuKTt2YXIgdD17fS50b1N0cmluZy5jYWxsKHIpLnNsaWNlKDgsLTEpO3JldHVyblwiT2JqZWN0XCI9PT10JiZyLmNvbnN0cnVjdG9yJiYodD1yLmNvbnN0cnVjdG9yLm5hbWUpLFwiTWFwXCI9PT10fHxcIlNldFwiPT09dD9BcnJheS5mcm9tKHIpOlwiQXJndW1lbnRzXCI9PT10fHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdCh0KT9lKHIsbik6dm9pZCAwfX0ocikpfHxuJiZyJiZcIm51bWJlclwiPT10eXBlb2Ygci5sZW5ndGgpe3QmJihyPXQpO3ZhciBvPTA7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG8+PXIubGVuZ3RoP3tkb25lOiEwfTp7ZG9uZTohMSx2YWx1ZTpyW28rK119fX10aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9ZnVuY3Rpb24gbihlLHIsbix0KXt2YXIgbz17aGVhZGVyczp7YWNjZXB0OlwiKi8qXCJ9fTtyZXR1cm4gcnx8KG8ubW9kZT1cIm5vLWNvcnNcIiksbiYmKG8uY3JlZGVudGlhbHM9XCJpbmNsdWRlXCIpLG8ucHJpb3JpdHk9dD9cImhpZ2hcIjpcImxvd1wiLHdpbmRvdy5mZXRjaD9mZXRjaChlLG8pOmZ1bmN0aW9uKGUscil7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4sdCxvKXsobz1uZXcgWE1MSHR0cFJlcXVlc3QpLm9wZW4oXCJHRVRcIixlLG8ud2l0aENyZWRlbnRpYWxzPXIpLG8uc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLFwiKi8qXCIpLG8ub25sb2FkPWZ1bmN0aW9uKCl7MjAwPT09by5zdGF0dXM/bigpOnQoKX0sby5zZW5kKCl9KX0oZSxuKX12YXIgdCxvPSh0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpKS5yZWxMaXN0JiZ0LnJlbExpc3Quc3VwcG9ydHMmJnQucmVsTGlzdC5zdXBwb3J0cyhcInByZWZldGNoXCIpP2Z1bmN0aW9uKGUscil7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKG4sdCxvKXsobz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKSkucmVsPVwicHJlZmV0Y2hcIixvLmhyZWY9ZSxyJiZvLnNldEF0dHJpYnV0ZShcImNyb3Nzb3JpZ2luXCIsXCJhbm9ueW1vdXNcIiksby5vbmxvYWQ9bixvLm9uZXJyb3I9dCxkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG8pfSl9Om4saT13aW5kb3cucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oZSl7dmFyIHI9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2Uoe2RpZFRpbWVvdXQ6ITEsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXIpKX19KX0sMSl9LGE9bmV3IFNldCxjPW5ldyBTZXQsdT0hMTtmdW5jdGlvbiBzKGUscil7cmV0dXJuIEFycmF5LmlzQXJyYXkocik/ci5zb21lKGZ1bmN0aW9uKHIpe3JldHVybiBzKGUscil9KTooci50ZXN0fHxyKS5jYWxsKHIsZS5ocmVmLGUpfWZ1bmN0aW9uIGwoZSl7aWYoZSl7aWYoZS5zYXZlRGF0YSlyZXR1cm4gbmV3IEVycm9yKFwiU2F2ZS1EYXRhIGlzIGVuYWJsZWRcIik7aWYoLzJnLy50ZXN0KGUuZWZmZWN0aXZlVHlwZSkpcmV0dXJuIG5ldyBFcnJvcihcIm5ldHdvcmsgY29uZGl0aW9ucyBhcmUgcG9vclwiKX1yZXR1cm4hMH1mdW5jdGlvbiBmKGUpe2lmKHZvaWQgMD09PWUmJihlPXt9KSx3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJlwiaXNJbnRlcnNlY3RpbmdcImluIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlKXt2YXIgcj1mdW5jdGlvbihlKXtlPWV8fDE7dmFyIHI9W10sbj0wO2Z1bmN0aW9uIHQoKXtuPGUmJnIubGVuZ3RoPjAmJihyLnNoaWZ0KCkoKSxuKyspfXJldHVybltmdW5jdGlvbihlKXtyLnB1c2goZSk+MXx8dCgpfSxmdW5jdGlvbigpe24tLSx0KCl9XX0oZS50aHJvdHRsZXx8MS8wKSxuPXJbMF0sdD1yWzFdLG89ZS5saW1pdHx8MS8wLGw9ZS5vcmlnaW5zfHxbbG9jYXRpb24uaG9zdG5hbWVdLGY9ZS5pZ25vcmVzfHxbXSxtPWUuZGVsYXl8fDAscD1bXSx2PWUudGltZW91dEZufHxpLGc9XCJmdW5jdGlvblwiPT10eXBlb2YgZS5ocmVmRm4mJmUuaHJlZkZuLHc9ZS5wcmVyZW5kZXJ8fCExO3U9ZS5wcmVyZW5kZXJBbmRQcmVmZXRjaHx8ITE7dmFyIHk9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKHIpe3IuZm9yRWFjaChmdW5jdGlvbihyKXtpZihyLmlzSW50ZXJzZWN0aW5nKXAucHVzaCgocj1yLnRhcmdldCkuaHJlZiksZnVuY3Rpb24oZSxyKXtyP3NldFRpbWVvdXQoZSxyKTplKCl9KGZ1bmN0aW9uKCl7cC5pbmNsdWRlcyhyLmhyZWYpJiYoeS51bm9ic2VydmUociksKHV8fHcpJiZjLnNpemU8bz9oKGc/ZyhyKTpyLmhyZWYsZS5lYWdlcm5lc3MpLmNhdGNoKGZ1bmN0aW9uKHIpe2lmKCFlLm9uRXJyb3IpdGhyb3cgcjtlLm9uRXJyb3Iocil9KTphLnNpemU8byYmIXcmJm4oZnVuY3Rpb24oKXtkKGc/ZyhyKTpyLmhyZWYsZS5wcmlvcml0eSxlLmNoZWNrQWNjZXNzQ29udHJvbEFsbG93T3JpZ2luLGUuY2hlY2tBY2Nlc3NDb250cm9sQWxsb3dDcmVkZW50aWFscyxlLm9ubHlPbk1vdXNlb3ZlcikudGhlbih0KS5jYXRjaChmdW5jdGlvbihyKXt0KCksZS5vbkVycm9yJiZlLm9uRXJyb3Iocil9KX0pKX0sbSk7ZWxzZXt2YXIgaT1wLmluZGV4T2YoKHI9ci50YXJnZXQpLmhyZWYpO2k+LTEmJnAuc3BsaWNlKGkpfX0pfSx7dGhyZXNob2xkOmUudGhyZXNob2xkfHwwfSk7cmV0dXJuIHYoZnVuY3Rpb24oKXsoZS5lbCYmZS5lbC5sZW5ndGgmJmUuZWwubGVuZ3RoPjAmJlwiQVwiPT09ZS5lbFswXS5ub2RlTmFtZT9lLmVsOihlLmVsfHxkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChcImFcIikpLmZvckVhY2goZnVuY3Rpb24oZSl7bC5sZW5ndGgmJiFsLmluY2x1ZGVzKGUuaG9zdG5hbWUpfHxzKGUsZil8fHkub2JzZXJ2ZShlKX0pfSx7dGltZW91dDplLnRpbWVvdXR8fDJlM30pLGZ1bmN0aW9uKCl7YS5jbGVhcigpLHkuZGlzY29ubmVjdCgpfX19ZnVuY3Rpb24gZChlLHQsaSxzLGYpe3ZhciBkPWwobmF2aWdhdG9yLmNvbm5lY3Rpb24pO3JldHVybiBkIGluc3RhbmNlb2YgRXJyb3I/UHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2Fubm90IHByZWZldGNoLCBcIitkLm1lc3NhZ2UpKTooYy5zaXplPjAmJiF1JiZjb25zb2xlLndhcm4oXCJbV2FybmluZ10gWW91IGFyZSB1c2luZyBib3RoIHByZWZldGNoaW5nIGFuZCBwcmVyZW5kZXJpbmcgb24gdGhlIHNhbWUgZG9jdW1lbnRcIiksUHJvbWlzZS5hbGwoW10uY29uY2F0KGUpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gYS5oYXMoZSk/W106KGEuYWRkKGUpLGZ1bmN0aW9uKGUsbix0KXt2YXIgbz1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cywzKTtpZighdClyZXR1cm4gZS5hcHBseSh2b2lkIDAsW25dLmNvbmNhdChvKSk7Zm9yKHZhciBpLGE9QXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKSkuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlLmhyZWY9PT1ufSksYz1uZXcgTWFwLHU9ZnVuY3Rpb24oKXt2YXIgcj1pLnZhbHVlLHQ9ZnVuY3Rpb24oaSl7dmFyIHU9c2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiByLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsdCksci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLGEpLGUuYXBwbHkodm9pZCAwLFtuXS5jb25jYXQobykpfSwyMDApO2Muc2V0KHIsdSl9LGE9ZnVuY3Rpb24oZSl7dmFyIG49Yy5nZXQocik7biYmKGNsZWFyVGltZW91dChuKSxjLmRlbGV0ZShyKSl9O3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIix0KSxyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsYSl9LHM9cihhKTshKGk9cygpKS5kb25lOyl1KCl9KHQ/bjpvLG5ldyBVUkwoZSxsb2NhdGlvbi5ocmVmKS50b1N0cmluZygpLGYsaSxzLHQpKX0pKSl9ZnVuY3Rpb24gaChlLG4pe3ZvaWQgMD09PW4mJihuPVwiaW1tZWRpYXRlXCIpO3ZhciB0PWwobmF2aWdhdG9yLmNvbm5lY3Rpb24pO2lmKHQgaW5zdGFuY2VvZiBFcnJvcilyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQ2Fubm90IHByZXJlbmRlciwgXCIrdC5tZXNzYWdlKSk7aWYoIUhUTUxTY3JpcHRFbGVtZW50LnN1cHBvcnRzKFwic3BlY3VsYXRpb25ydWxlc1wiKSlyZXR1cm4gZChlLCEwLCExLCExLFwibW9kZXJhdGVcIj09PW58fFwiY29uc2VydmF0aXZlXCI9PT1uKSxQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgc3BlY3VsYXRpb24gcnVsZXMgQVBJLiBGYWxsaW5nIGJhY2sgdG8gcHJlZmV0Y2guXCIpKTtmb3IodmFyIG8saT1yKFtdLmNvbmNhdChlKSk7IShvPWkoKSkuZG9uZTspYy5hZGQoby52YWx1ZSk7YS5zaXplPjAmJiF1JiZjb25zb2xlLndhcm4oXCJbV2FybmluZ10gWW91IGFyZSB1c2luZyBib3RoIHByZWZldGNoaW5nIGFuZCBwcmVyZW5kZXJpbmcgb24gdGhlIHNhbWUgZG9jdW1lbnRcIik7dmFyIHM9ZnVuY3Rpb24oZSxyKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO24udHlwZT1cInNwZWN1bGF0aW9ucnVsZXNcIixuLnRleHQ9J3tcInByZXJlbmRlclwiOlt7XCJzb3VyY2VcIjogXCJsaXN0XCIsXFxuICAgICAgICAgICAgICAgICAgICAgIFwidXJsc1wiOiBbXCInK0FycmF5LmZyb20oZSkuam9pbignXCIsXCInKSsnXCJdLFxcbiAgICAgICAgICAgICAgICAgICAgICBcImVhZ2VybmVzc1wiOiBcIicrcisnXCJ9XX0nO3RyeXtkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG4pfWNhdGNoKGUpe3JldHVybiBlfXJldHVybiEwfShjLG4pO3JldHVybiEwPT09cz9Qcm9taXNlLnJlc29sdmUoKTpQcm9taXNlLnJlamVjdChzKX1leHBvcnR7ZiBhcyBsaXN0ZW4sZCBhcyBwcmVmZXRjaCxoIGFzIHByZXJlbmRlcn07XHJcbiIsICIvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmtcclxuaW1wb3J0IHsgbGlzdGVuIH0gZnJvbSAncXVpY2tsaW5rL2Rpc3QvcXVpY2tsaW5rLm1qcyc7XHJcbmxpc3Rlbih7XHJcbiAgICBpZ25vcmVzOiBbXHJcbiAgICAgICAgL1xcL2FwaVxcLz8vLFxyXG4gICAgICAgIHVyaSA9PiB1cmkuaW5jbHVkZXMoJy56aXAnKSxcclxuICAgICAgICAodXJpLCBlbGVtKSA9PiBlbGVtLmhhc0F0dHJpYnV0ZSgnbm9wcmVmZXRjaCcpLFxyXG4gICAgICAgICh1cmksIGVsZW0pID0+IGVsZW0uaGFzaCAmJiBlbGVtLnBhdGhuYW1lID09PSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXHJcbiAgICBdXHJcbn0pO1xyXG5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FGYXJrYXMvbGF6eXNpemVzL3RyZWUvZ2gtcGFnZXMvcGx1Z2lucy9uYXRpdmUtbG9hZGluZ1xyXG5pbXBvcnQgbGF6eVNpemVzIGZyb20gJ2xhenlzaXplcyc7XHJcbmltcG9ydCAnbGF6eXNpemVzL3BsdWdpbnMvbmF0aXZlLWxvYWRpbmcvbHMubmF0aXZlLWxvYWRpbmcnO1xyXG5cclxubGF6eVNpemVzLmNmZy5uYXRpdmVMb2FkaW5nID0ge1xyXG4gICAgc2V0TG9hZGluZ0F0dHJpYnV0ZTogdHJ1ZSxcclxuICAgIGRpc2FibGVMaXN0ZW5lcnM6IHtcclxuICAgICAgICBzY3JvbGw6IHRydWVcclxuICAgIH1cclxufTtcclxuIiwgIi8qIVxyXG4gKiBjbGlwYm9hcmQuanMgZm9yIEJvb3RzdHJhcCBiYXNlZCBUaHVsaXRlIHNpdGVzXHJcbiAqIENvcHlyaWdodCAyMDIxLTIwMjQgVGh1bGl0ZVxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcclxuICovXHJcblxyXG5pbXBvcnQgQ2xpcGJvYXJkIGZyb20gJ2NsaXBib2FyZCc7XHJcblxyXG4oKCkgPT4ge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIHZhciBjYiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hpZ2hsaWdodCcpO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2IubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGNiW2ldO1xyXG4gICAgICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgJzxkaXYgY2xhc3M9XCJjb3B5XCI+PGJ1dHRvbiB0aXRsZT1cIkNvcHkgdG8gY2xpcGJvYXJkXCIgY2xhc3M9XCJidG4tY29weVwiIGFyaWEtbGFiZWw9XCJDbGlwYm9hcmQgYnV0dG9uXCI+PGRpdj48L2Rpdj48L2J1dHRvbj48L2Rpdj4nKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2xpcGJvYXJkID0gbmV3IENsaXBib2FyZCgnLmJ0bi1jb3B5Jywge1xyXG4gICAgICAgIHRhcmdldDogZnVuY3Rpb24gKHRyaWdnZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXIucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAvKlxyXG4gICAgICBjb25zb2xlLmluZm8oJ0FjdGlvbjonLCBlLmFjdGlvbik7XHJcbiAgICAgIGNvbnNvbGUuaW5mbygnVGV4dDonLCBlLnRleHQpO1xyXG4gICAgICBjb25zb2xlLmluZm8oJ1RyaWdnZXI6JywgZS50cmlnZ2VyKTtcclxuICAgICAgKi9cclxuXHJcbiAgICAgICAgZS5jbGVhclNlbGVjdGlvbigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2xpcGJvYXJkLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQWN0aW9uOicsIGUuYWN0aW9uKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdUcmlnZ2VyOicsIGUudHJpZ2dlcik7XHJcbiAgICB9KTtcclxufSkoKTtcclxuIiwgImNvbnN0IHRvcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b1RvcCcpO1xyXG5cclxuaWYgKHRvcEJ1dHRvbiAhPT0gbnVsbCkge1xyXG4gICAgdG9wQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzY3JvbGxGdW5jdGlvbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0b3BCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b3BGdW5jdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjcm9sbEZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gMjcwIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAyNzApIHtcclxuICAgICAgICB0b3BCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0b3BCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b3BGdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xyXG59XHJcbiIsICIvLyBCYXNlZCBvbjogaHR0cHM6Ly9naXRodWIuY29tL2dvaHVnb2lvL2h1Z29Eb2NzL2Jsb2IvbWFzdGVyL192ZW5kb3IvZ2l0aHViLmNvbS9nb2h1Z29pby9nb2h1Z29pb1RoZW1lL2Fzc2V0cy9qcy90YWJzLmpzXHJcblxyXG4vKipcclxuICogU2NyaXB0cyB3aGljaCBtYW5hZ2VzIENvZGUgVG9nZ2xlIHRhYnMuXHJcbiAqL1xyXG52YXIgaTtcclxuLy8gc3RvcmUgdGFicyB2YXJpYWJsZVxyXG52YXIgYWxsVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZS10YWJdJyk7XHJcbnZhciBhbGxQYW5lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBhbmVdJyk7XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVUYWJzKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgY2xpY2tlZFRhYiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgdmFyIHRhcmdldEtleSA9IGNsaWNrZWRUYWIuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZS10YWInKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHRhcmdldEtleSA9IGV2ZW50O1xyXG4gICAgfVxyXG4gICAgLy8gV2Ugc3RvcmUgdGhlIGNvbmZpZyBsYW5ndWFnZSBzZWxlY3RlZCBpbiB1c2VycycgbG9jYWxTdG9yYWdlXHJcbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29uZmlnTGFuZ1ByZWYnLCB0YXJnZXRLZXkpO1xyXG4gICAgfVxyXG4gICAgdmFyIHNlbGVjdGVkVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZS10YWI9JyArIHRhcmdldEtleSArICddJyk7XHJcbiAgICB2YXIgc2VsZWN0ZWRQYW5lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBhbmU9JyArIHRhcmdldEtleSArICddJyk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxUYWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYWxsVGFic1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBhbGxQYW5lc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGVjdGVkVGFicy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNlbGVjdGVkVGFic1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBzZWxlY3RlZFBhbmVzW2ldLmNsYXNzTGlzdC5hZGQoJ3Nob3cnLCAnYWN0aXZlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZvciAoaSA9IDA7IGkgPCBhbGxUYWJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBhbGxUYWJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlVGFicyk7XHJcbn1cclxuLy8gVXBvbiBwYWdlIGxvYWQsIGlmIHVzZXIgaGFzIGEgcHJlZmVycmVkIGxhbmd1YWdlIGluIGl0cyBsb2NhbFN0b3JhZ2UsIHRhYnMgYXJlIHNldCB0byBpdC5cclxuaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnTGFuZ1ByZWYnKSkge1xyXG4gICAgdG9nZ2xlVGFicyh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbmZpZ0xhbmdQcmVmJykpO1xyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLE9BQUMsU0FBU0EsU0FBUSxTQUFTO0FBQzFCLFlBQUlDLGFBQVksUUFBUUQsU0FBUUEsUUFBTyxVQUFVLElBQUk7QUFDckQsUUFBQUEsUUFBTyxZQUFZQztBQUNuQixZQUFHLE9BQU8sVUFBVSxZQUFZLE9BQU8sU0FBUTtBQUM5QyxpQkFBTyxVQUFVQTtBQUFBLFFBQ2xCO0FBQUEsTUFDRDtBQUFBLFFBQUUsT0FBTyxVQUFVLGNBQ2IsU0FBUyxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUtoQixTQUFTQyxHQUFFRixTQUFRRyxXQUFVQyxPQUFNO0FBQ2xDO0FBR0EsY0FBSSxXQUlIO0FBRUQsV0FBQyxXQUFVO0FBQ1YsZ0JBQUk7QUFFSixnQkFBSSxvQkFBb0I7QUFBQSxjQUN2QixXQUFXO0FBQUEsY0FDWCxhQUFhO0FBQUEsY0FDYixjQUFjO0FBQUEsY0FDZCxjQUFjO0FBQUEsY0FDZCxZQUFZO0FBQUE7QUFBQSxjQUVaLGdCQUFnQjtBQUFBLGNBQ2hCLGlCQUFpQjtBQUFBLGNBQ2pCLGdCQUFnQjtBQUFBLGNBQ2hCLFNBQVM7QUFBQSxjQUNULFlBQVk7QUFBQSxjQUNaLFdBQVc7QUFBQTtBQUFBLGNBRVgsU0FBUztBQUFBLGNBQ1QsYUFBYSxDQUFDO0FBQUEsY0FDZCxNQUFNO0FBQUEsY0FDTixX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LElBQzNEO0FBQ0EsUUFBSSxlQUFlLFNBQVMsaUJBQWlCLHNCQUFzQixZQUFZLEdBQUc7QUFDbEYsUUFBSSxnQkFBZ0IsU0FBUyxpQkFBaUIsZ0JBQWdCLFlBQVksR0FBRztBQUU3RSxhQUFTQSxLQUFJLEdBQUdBLEtBQUksUUFBUSxRQUFRQSxNQUFLO0FBQ3JDLGNBQVFBLEVBQUMsRUFBRSxVQUFVLE9BQU8sUUFBUTtBQUNwQyxlQUFTQSxFQUFDLEVBQUUsVUFBVSxPQUFPLFFBQVE7QUFBQSxJQUN6QztBQUVBLGFBQVNBLEtBQUksR0FBR0EsS0FBSSxhQUFhLFFBQVFBLE1BQUs7QUFDMUMsbUJBQWFBLEVBQUMsRUFBRSxVQUFVLElBQUksUUFBUTtBQUN0QyxvQkFBY0EsRUFBQyxFQUFFLFVBQVUsSUFBSSxRQUFRLFFBQVE7QUFBQSxJQUNuRDtBQUFBLEVBQ0o7QUFFQSxPQUFLQSxLQUFJLEdBQUdBLEtBQUksUUFBUSxRQUFRQSxNQUFLO0FBQ2pDLFlBQVFBLEVBQUMsRUFBRSxpQkFBaUIsU0FBUyxVQUFVO0FBQUEsRUFDbkQ7QUFFQSxNQUFJLE9BQU8sYUFBYSxRQUFRLGdCQUFnQixHQUFHO0FBQy9DLGVBQVcsT0FBTyxhQUFhLFFBQVEsZ0JBQWdCLENBQUM7QUFBQSxFQUM1RDsiLAogICJuYW1lcyI6IFsid2luZG93IiwgImxhenlTaXplcyIsICJsIiwgImRvY3VtZW50IiwgIkRhdGUiLCAic2V0VGltZW91dCIsICJlIiwgImkiLCAibG9hZE1vZGUiLCAid2luZG93IiwgImRvY3VtZW50IiwgImxhenlTaXplcyIsICJlIiwgIl9fd2VicGFja19yZXF1aXJlX18iLCAiQ2xpcGJvYXJkQWN0aW9uQ3V0IiwgImZha2VDb3B5QWN0aW9uIiwgIkNsaXBib2FyZEFjdGlvbkNvcHkiLCAiX3R5cGVvZiIsICJvYmoiLCAiQ2xpcGJvYXJkQWN0aW9uRGVmYXVsdCIsICJpIiwgIm8iLCAiX3NldFByb3RvdHlwZU9mIiwgInAiLCAiZSIsICJfZ2V0UHJvdG90eXBlT2YiLCAiQ2xpcGJvYXJkIiwgImFjdGlvbiIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJlIiwgInIiLCAibiIsICJ0IiwgIm8iLCAibCIsICJmIiwgImkiLCAicyIsICJkIiwgImEiLCAiYyIsICJ1IiwgImxhenlTaXplcyIsICJpIiwgIkNsaXBib2FyZCIsICJlIiwgImkiXQp9Cg==
