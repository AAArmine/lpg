exports.id = "src_templates_PartSale_Steps_tsx";
exports.ids = ["src_templates_PartSale_Steps_tsx"];
exports.modules = {

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  true ? path => {
  if (/\.[^/]+\/?$/.test(path)) {
    return removePathTrailingSlash(path);
  } else if (path.endsWith('/')) {
    return path;
  } else {
    return path + '/';
  }
} : 0;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./utils/resolve-rewrites"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !true);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if ( true && as.startsWith('/')) {
        const rewritesResult = (0, _resolveRewrites).default(addBasePath(addLocale(cleanedAs, this.locale)), pages, rewrites, query1, p => resolveDynamicRoute(p, pages), this.locales);
        resolvedAs = rewritesResult.asPath;

        if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
          // if this directly matches a page we need to update the href to
          // allow the correct page chunk to be loaded
          pathname1 = rewritesResult.resolvedHref;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      } else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if ( true && asPath.startsWith('/')) {
      let rewrites;
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
      const rewritesResult = (0, _resolveRewrites).default(addBasePath(addLocale(asPath, this.locale)), pages, rewrites, parsed.query, p => resolveDynamicRoute(p, pages), this.locales);
      resolvedAs = delLocale(delBasePath(rewritesResult.asPath), this.locale);

      if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
        // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded
        pathname2 = rewritesResult.resolvedHref;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    } else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./src/templates/PartSale/Icons/BindingPurchase.tsx":
/*!**********************************************************!*\
  !*** ./src/templates/PartSale/Icons/BindingPurchase.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BindingPurchase": () => (/* binding */ BindingPurchase)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\PartSale\\Icons\\BindingPurchase.tsx";


const BindingPurchase = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "0 0 641 651.391",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    id: "Layer_1",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
            id: "SVGID_7_",
            x: "186.434",
            y: "106.492",
            width: "259.436",
            height: "231.455"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("clipPath", {
          id: "SVGID_2_",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("use", {
            xlinkHref: "#SVGID_7_",
            style: {
              overflow: 'visible'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#054B93'
      },
      d: "M496.304,246.39l-62.606-53.464l-0.001-71.359c-0.11-6.285-5.11-11.381-11.518-11.603h-35.827\r c-6.122,0-11.295,5.344-11.295,11.67v21.448l-45.057-38.413c-4.207-3.637-10.378-3.651-14.693-0.019L149.053,246.253\r c-4.8,3.908-5.482,11.047-1.521,15.912c1.916,2.355,4.64,3.799,7.672,4.067c0.338,0.029,0.675,0.044,1.012,0.044\r c2.623,0,5.158-0.902,7.23-2.588l0.287-0.26l158.908-135.307l55.329,47.147l34.55,29.379l69.171,58.904\r c2.293,1.966,5.209,2.927,8.223,2.683c3.003-0.236,5.738-1.628,7.737-3.96C501.599,257.536,500.994,250.41,496.304,246.39z\r M411.033,173.646l-13.386-11.283v-29.736h13.386V173.646z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#054B93'
        },
        d: "M331.003,145.584c-4.24-3.668-10.462-3.682-14.818-0.015L181.827,260.356\r c-4.77,4.089-5.33,11.291-1.281,16.015c1.937,2.324,4.66,3.745,7.664,4c2.995,0.249,5.908-0.681,8.193-2.633l3.203-2.777\r l0.001,133.382c0.114,6.253,5.292,11.431,11.613,11.544l19.538,0l24.43-22.849h-32.807V255.436l101.204-86.206l101.204,86.206\r v141.601h-36.534l24.459,22.875l23.229-0.027c6.362-0.114,11.433-5.185,11.545-11.613V274.96l3.163,2.733\r c2.121,1.767,4.641,2.701,7.288,2.701c3.312,0,6.462-1.448,8.646-3.976c2.019-2.346,2.99-5.317,2.737-8.366\r c-0.251-3.034-1.679-5.779-3.984-7.699l-21.234-18.136h0.001L331.003,145.584z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#054B93'
        },
        d: "M349.981,323.088l-0.045,38.109l22.821,21.344v-70.613c0-6.403-4.974-11.613-11.086-11.613h-76.169\r c-6.112,0-11.086,5.21-11.086,11.613v67.127l22.775-21.301v-34.666H349.981z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M76.957,58.247c-6.316,0-11.454,4.743-11.454,10.574v167.345L6.251,291.568\r c-2.128,1.992-3.3,4.63-3.3,7.43v338.271c0,5.831,5.138,10.574,11.455,10.574h614.632c6.316,0,11.454-4.744,11.454-10.574V298.998\r c0-2.799-1.172-5.438-3.3-7.43l-59.25-55.403V68.821c0-5.831-5.138-10.574-11.455-10.574H387.698L329.876,4.165\r c-4.496-4.198-11.813-4.197-16.309,0.001l-57.82,54.081H76.957z M65.503,266.26v65.476l-35.007-32.738L65.503,266.26z\r M25.861,324.758l153.31,143.376L25.861,611.51V324.758z M41.802,626.696l279.92-261.783l279.92,261.783H41.802z M577.942,266.26\r l35.006,32.738l-35.006,32.738V266.26z M617.583,324.758V611.51l-153.31-143.377L617.583,324.758z M555.033,79.394v273.766\r l-106.849,99.926L329.876,342.436c-4.496-4.198-11.813-4.197-16.309,0.001L195.26,453.087L88.412,353.161V79.394H555.033z\r M321.722,26.642l33.796,31.606h-67.591L321.722,26.642z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    id: "Layer_2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/PartSale/Icons/ExpertOpinion.tsx":
/*!********************************************************!*\
  !*** ./src/templates/PartSale/Icons/ExpertOpinion.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpertOpinion": () => (/* binding */ ExpertOpinion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\PartSale\\Icons\\ExpertOpinion.tsx";


const ExpertOpinion = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "0 0 718.466 647.384",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    id: "Layer_1",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
            id: "SVGID_9_",
            x: "20.939",
            width: "720.072",
            height: "655.492"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("clipPath", {
          id: "SVGID_2_",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("use", {
            xlinkHref: "#SVGID_9_",
            style: {
              overflow: 'visible'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
              id: "SVGID_11_",
              x: "20.939",
              width: "720.072",
              height: "655.492"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("clipPath", {
            id: "SVGID_4_",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("use", {
              xlinkHref: "#SVGID_11_",
              style: {
                overflow: 'visible'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
            style: {
              fill: '#779CC1'
            },
            d: "M296.213,141.463c6.686,0,12.109-5.423,12.109-12.109V97.871\r c0-40.059,32.594-72.653,72.653-72.653s72.653,32.594,72.653,72.653v1.955l-22.256-22.566\r c-4.692-4.768-12.361-4.818-17.124-0.119c-4.761,4.692-4.818,12.361-0.119,17.124l42.986,43.592\r c2.276,2.307,5.38,3.607,8.621,3.607c3.242,0,6.345-1.3,8.621-3.607l42.986-43.592c4.692-4.763,4.642-12.432-0.119-17.124\r c-4.763-4.698-12.432-4.648-17.124,0.119l-22.256,22.566v-1.955c0-53.418-43.453-96.871-96.871-96.871\r s-96.871,43.453-96.871,96.871v31.483C284.104,136.04,289.527,141.463,296.213,141.463"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
            style: {
              fill: '#779CC1'
            },
            d: "M465.736,506.277c-6.686,0-12.109,5.423-12.109,12.109v31.483\r c0,40.059-32.594,72.653-72.653,72.653s-72.653-32.594-72.653-72.653v-1.955l22.256,22.566c2.372,2.402,5.494,3.607,8.621,3.607\r c3.071,0,6.143-1.161,8.502-3.487c4.761-4.692,4.818-12.361,0.119-17.124l-42.986-43.592c-2.276-2.307-5.38-3.607-8.621-3.607\r s-6.345,1.3-8.621,3.607l-42.986,43.592c-4.692,4.763-4.642,12.432,0.119,17.124c4.763,4.698,12.432,4.642,17.124-0.12\r l22.256-22.566v1.955c0,53.418,43.453,96.871,96.871,96.871s96.871-43.453,96.871-96.871v-31.483\r C477.845,511.7,472.422,506.277,465.736,506.277"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
            style: {
              fill: '#779CC1'
            },
            d: "M550.45,172.823c-82.941,0-150.419,67.479-150.419,150.421\r c0,82.942,67.478,150.42,150.419,150.42c82.942,0,150.42-67.478,150.42-150.42C700.87,240.301,633.392,172.823,550.45,172.823z\r M550.45,452.148c-71.077,0-128.903-57.826-128.903-128.904c0-71.078,57.826-128.904,128.903-128.904\r c71.078,0,128.904,57.826,128.904,128.904C679.354,394.322,621.528,452.148,550.45,452.148z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
            style: {
              fill: '#779CC1'
            },
            d: "M498.325,352.623l1.43,3.403\r c11.184,26.617,34.176,43.151,60.005,43.151c12.049,0,23.809-3.677,34.011-10.632c4.891-3.347,6.16-10.048,2.819-14.931\r c-3.339-4.91-10.053-6.17-14.973-2.827c-6.682,4.561-14.036,6.873-21.857,6.873c-11.99,0-23.242-5.668-31.682-15.96\r l-7.445-9.078h29.818c5.931,0,10.757-4.825,10.757-10.757c0-5.933-4.826-10.759-10.757-10.759h-35.438l-0.282-5.258\r c-0.052-0.964-0.077-1.816-0.077-2.605c0-0.79,0.025-1.643,0.077-2.606l0.282-5.258h44.747c5.933,0,10.76-4.826,10.76-10.759\r s-4.827-10.759-10.76-10.759h-39.128l7.446-9.078c8.441-10.291,19.693-15.958,31.682-15.958c7.824,0,15.185,2.318,21.878,6.89\r c2.384,1.62,5.265,2.216,8.099,1.671c2.814-0.54,5.24-2.13,6.831-4.477c3.361-4.912,2.091-11.624-2.815-14.982\r c-10.188-6.945-21.944-10.619-33.992-10.619c-25.829,0-48.821,16.534-60.005,43.15l-1.43,3.403h-13.05\r c-5.932,0-10.758,4.826-10.758,10.759s4.826,10.759,10.758,10.759h8.232l-0.313,5.852c-0.035,0.656-0.056,1.326-0.056,2.012\r c0,0.685,0.02,1.355,0.056,2.011l0.312,5.852h-8.231c-5.932,0-10.758,4.826-10.758,10.759c0,5.932,4.826,10.757,10.758,10.757\r H498.325z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#054B93'
        },
        d: "M365.485,310.964l-59.257-50.604l-0.001-67.541c-0.104-5.949-4.837-10.772-10.902-10.983h-33.911\r c-5.794,0-10.69,5.058-10.69,11.045v20.301l-42.646-36.358c-3.982-3.443-9.823-3.456-13.906-0.018L36.812,310.834\r c-4.543,3.699-5.188,10.456-1.44,15.061c1.814,2.229,4.392,3.596,7.261,3.849c0.32,0.028,0.639,0.042,0.958,0.042\r c2.483,0,4.882-0.854,6.844-2.45l0.271-0.246l150.407-128.068l52.369,44.625l32.702,27.807l65.47,55.753\r c2.171,1.861,4.931,2.77,7.783,2.539c2.842-0.223,5.431-1.541,7.323-3.748C370.497,321.514,369.924,314.769,365.485,310.964z\r M284.776,242.112l-12.67-10.68v-28.146h12.67V242.112z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#054B93'
        },
        d: "M334.195,325.29l-19.935-17.026h0.001l-106.183-90.72c-3.981-3.443-9.822-3.456-13.911-0.014\r L68.028,325.294c-4.479,3.839-5.004,10.601-1.203,15.035c1.819,2.182,4.375,3.516,7.195,3.756\r c2.812,0.234,5.546-0.639,7.692-2.472l3.007-2.607l0.001,125.221c0.107,5.87,4.968,10.732,10.902,10.838l210.974-0.001\r c5.973-0.107,10.734-4.868,10.839-10.902V339.004l2.97,2.566c1.991,1.659,4.357,2.535,6.842,2.535c3.11,0,6.067-1.359,8.117-3.733\r c1.895-2.202,2.807-4.991,2.569-7.855C337.7,329.669,336.359,327.093,334.195,325.29z M225.894,453.613h-49.56v-69.425h49.56\r V453.613z M296.127,453.613h-48.85v-79.902c0-6.012-4.669-10.903-10.408-10.903H165.36c-5.739,0-10.408,4.891-10.408,10.903\r v79.902h-48.85V320.675l95.012-80.932l95.012,80.932V453.613z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    id: "Layer_2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/PartSale/Icons/HomeView.tsx":
/*!***************************************************!*\
  !*** ./src/templates/PartSale/Icons/HomeView.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeView": () => (/* binding */ HomeView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\PartSale\\Icons\\HomeView.tsx";


const HomeView = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "0 0 678.352 656.983",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    id: "Layer_1"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    id: "Layer_2",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#779CC1'
        },
        d: "M559.365,223.65v-94.491c0-12.955-5.073-25.166-14.283-34.385\r c-9.215-9.208-21.426-14.279-34.382-14.279H348.286h-2.834v-2.835V63.739c0-16.219-6.35-31.496-17.879-43.017\r C316.038,9.187,300.759,2.835,284.549,2.835H69.156c-16.211,0-31.491,6.352-43.026,17.887C14.601,32.252,8.25,47.529,8.25,63.739\r v109.916c0,16.25,6.347,31.526,17.87,43.015c8.168,8.207,18.392,13.874,29.573,16.395l2.211,0.499v2.267v34.844\r c0,6.182,5.047,11.211,11.251,11.211c3.014,0,5.844-1.175,7.969-3.308l43.187-43.186l0.83-0.83h1.174h131.711h2.148l0.581,2.069\r c2.255,8.036,6.554,15.406,12.43,21.315c9.182,9.27,21.403,14.372,34.419,14.372h57.676c6.177,0,11.202-5.028,11.202-11.208\r c0-6.2-5.025-11.243-11.202-11.243h-57.676c-7.011,0-13.596-2.737-18.541-7.708c-0.948-0.951-1.833-1.993-2.629-3.096l-3.23-4.478\r l5.521-0.015c16.178-0.045,31.391-6.395,42.837-17.879c11.538-11.501,17.888-26.778,17.888-43.025v-67.881v-2.835h2.834h162.413\r c6.964,0,13.537,2.737,18.507,7.707c4.969,4.97,7.706,11.542,7.706,18.505v94.491c0,6.965-2.737,13.538-7.706,18.507\r c-4.97,4.97-11.543,7.707-18.507,7.707c-6.2,0-11.244,5.044-11.244,11.243v13.359v6.843l-4.839-4.839l-23.238-23.238\r c-2.145-2.178-4.979-3.368-7.996-3.368h-57.674c-6.2,0-11.244,5.044-11.244,11.243c0,6.18,5.044,11.208,11.244,11.208h51.83h1.174\r l0.83,0.83l43.221,43.228c2.115,2.111,4.935,3.275,7.937,3.275c3.004,0,5.824-1.165,7.939-3.28\r c2.107-2.108,3.268-4.928,3.268-7.938v-35.243v-2.142l2.06-0.585c7.929-2.251,15.231-6.549,21.119-12.43\r C554.293,248.817,559.365,236.606,559.365,223.65z M323,173.655c0,10.216-4.015,19.858-11.307,27.149\r c-7.283,7.289-16.923,11.304-27.144,11.304H116.473c-2.979,0-5.799,1.176-7.941,3.312l-23.336,23.31l-4.838,4.832v-6.838v-13.367\r c0-6.203-5.025-11.249-11.202-11.249c-10.216,0-19.858-4.012-27.151-11.296c-7.288-7.296-11.3-16.937-11.3-27.15V63.739\r c0-10.22,4.012-19.861,11.296-27.146c7.299-7.292,16.943-11.306,27.156-11.306h215.393c10.215,0,19.856,4.015,27.146,11.305\r C318.985,43.881,323,53.522,323,63.739V173.655z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#054B93'
        },
        d: "M675.517,576.782c0-6.181-5.028-11.209-11.208-11.209c-6.2,0-11.244,5.029-11.244,11.209v52.079\r v2.835h-2.834H545.363h-2.834v-2.835v-79.846v-0.95l0.572-0.758l32.326-42.834c1.811-2.389,2.581-5.338,2.17-8.308\r c-0.41-2.969-1.953-5.603-4.344-7.415c-1.964-1.479-4.291-2.264-6.721-2.264c-0.524,0-1.056,0.037-1.581,0.111\r c-2.962,0.415-5.585,1.963-7.386,4.359l-34.917,46.192c-0.694,0.925-1.452,1.988-2.255,3.114l-0.072,0.1\r c-3.463,4.861-7.775,10.913-12.126,13.089c-2.864,1.451-5.155,1.736-8.138,1.736h-80.666c-4.451,0-8.638-1.736-11.788-4.89\r c-3.151-3.149-4.886-7.337-4.886-11.792c0-4.416,1.73-8.599,4.872-11.779c3.144-3.14,7.331-4.861,11.803-4.861h67.534\r c3.474,0,6.823-1.682,8.958-4.499l52.688-69.782c1.681-2.211,3.74-3.897,6.125-5.018c1.159-0.533,2.329-0.935,3.5-1.204\r l1.25-0.287l1.041,0.749c10.932,7.866,23.841,12.024,37.331,12.024c12.885,0,25.308-3.834,35.926-11.087l1.197-0.818l1.363,0.492\r c4.183,1.508,7.915,4.101,10.793,7.497c3.848,4.542,5.967,10.316,5.967,16.256v66.156c0,6.181,5.044,11.21,11.244,11.21\r c6.18,0,11.208-5.029,11.208-11.21V466.19c0-11.221-4.02-22.139-11.319-30.742c-3.043-3.572-6.538-6.659-10.382-9.17l-2.28-1.49\r l1.397-2.338c5.916-9.896,9.045-21.228,9.051-32.771v-56.739c0-10.855-4.261-21.119-11.998-28.899\r c-7.756-7.72-18.016-11.978-28.878-11.978h-46.621c-10.856,0-21.12,4.263-28.899,12.003c-7.722,7.76-11.98,18.018-11.98,28.874\r v56.74c0,10.925,2.827,21.731,8.174,31.248l1.316,2.343l-2.27,1.439c-3.888,2.466-7.308,5.619-10.163,9.37l-48.453,64.165\r l-0.851,1.126h-1.412h-32.9h-2.834v-2.835v-35.541c0-11.364-5.915-22.456-17.104-32.077c-6.989-6.016-16.329-11.6-27.01-16.148\r l-2.382-1.014l0.795-2.464c2.049-6.351,3.088-12.95,3.088-19.613v-86.369c0-6.203-5.044-11.249-11.244-11.249h-76.249\r c-10.854,0-21.12,4.263-28.905,12.004c-7.717,7.755-11.973,18.013-11.973,28.873v56.74c0,7.174,1.177,14.211,3.5,20.915\r l0.843,2.434l-2.342,1.072c-9.839,4.502-18.474,9.941-24.971,15.728c-10.546,9.417-16.122,20.198-16.122,31.174v35.534v2.835\r h-2.834h-32.901h-1.412l-0.851-1.126l-48.465-64.18c-2.803-3.698-6.218-6.852-10.147-9.37l-2.251-1.443l1.309-2.331\r c5.338-9.509,8.16-20.312,8.16-31.241v-56.74c0-10.895-4.26-21.157-11.996-28.896c-7.767-7.72-18.027-11.975-28.885-11.975H57.252\r c-10.836,0-21.087,4.258-28.864,11.99c-7.724,7.723-11.98,17.982-11.98,28.881v56.74c0,11.578,3.127,22.911,9.042,32.775\r l1.404,2.341l-2.286,1.491c-3.716,2.424-7.121,5.398-10.119,8.839c-7.487,8.665-11.614,19.701-11.614,31.064v66.163\r c0,6.178,5.047,11.203,11.251,11.203c6.176,0,11.201-5.026,11.201-11.203V466.19c0-5.994,2.167-11.823,6.1-16.412\r c2.886-3.322,6.57-5.847,10.667-7.316l1.358-0.487l1.193,0.812c10.631,7.237,23.069,11.062,35.97,11.062\r c13.456,0,26.35-4.158,37.288-12.025l1.042-0.749l1.25,0.288c3.837,0.884,7.251,3.089,9.615,6.209l52.702,69.8\r c2.125,2.814,5.474,4.495,8.956,4.495h67.567c4.437,0,8.614,1.709,11.762,4.813c3.155,3.193,4.878,7.384,4.878,11.827\r c0,4.481-1.715,8.663-4.829,11.775c-3.204,3.168-7.395,4.906-11.812,4.906h-81.251c-2.896,0-5.17-0.528-7.605-1.766\r c-2.25-1.106-4.222-2.741-5.826-4.842c-2.565-3.425-5.932-7.914-9.361-12.447l-34.113-45.166\r c-1.811-2.406-4.443-3.957-7.416-4.372c-0.522-0.073-1.053-0.11-1.575-0.11c-2.438,0-4.759,0.782-6.713,2.263\r c-2.41,1.812-3.96,4.443-4.375,7.416c-0.415,2.968,0.352,5.915,2.158,8.299l32.375,42.843l0.573,0.758v0.951v79.845v2.835h-2.834\r H28.121h-2.834v-2.835v-52.079c0-6.181-5.028-11.209-11.208-11.209c-6.2,0-11.244,5.029-11.244,11.209v66.157\r c0,6.181,5.044,11.209,11.244,11.209h650.23c6.18,0,11.208-5.029,11.208-11.209V576.782z M556.062,342.066v-9.125\r c0-4.86,1.934-9.471,5.444-12.982c3.51-3.51,8.12-5.443,12.98-5.443H621.1c4.859,0,9.468,1.933,12.979,5.443\r c3.512,3.513,5.446,8.123,5.446,12.982v47.666v2.367l-2.329,0.422c-2.842,0.515-5.556,0.841-8.067,0.971\r c-0.784,0.039-1.558,0.058-2.306,0.058c-7.178,0-13.007-1.759-17.325-5.227c-4.179-3.371-7.368-8.594-9.482-15.527\r c-1.61-5.234-2.612-11.415-2.976-18.364c-0.288-5.996-5.191-10.682-11.164-10.682c-0.179,0-0.358,0.004-0.538,0.013\r c-3.146,0.138-5.19,1.349-7.296,3.125c-1.322,1.154-8.626,7.066-19.126,7.137l-2.854,0.019V342.066z M556.062,370.113v-2.823\r l2.823-0.011c5.057-0.02,10.153-0.835,15.145-2.421l2.856-0.907l0.747,2.902c0.284,1.103,0.605,2.255,0.955,3.422\r c3.475,11.305,9.156,20.182,16.878,26.364c8.391,6.773,18.873,10.204,31.162,10.204c1.157,0,2.345-0.031,3.533-0.091\r c0.285-0.013,0.555-0.027,0.827-0.043l5.348-0.313l-2.75,4.598c-1.78,2.977-3.908,5.712-6.326,8.131\r c-7.908,7.915-18.367,12.274-29.45,12.274c-11.104,0-21.573-4.36-29.48-12.277c-7.911-7.903-12.269-18.359-12.269-29.44V370.113z\r M122.286,370.114v19.567c0,11.077-4.357,21.533-12.269,29.444c-7.904,7.914-18.36,12.272-29.441,12.272\r c-11.078,0-21.541-4.363-29.46-12.286c-2.42-2.403-4.558-5.136-6.346-8.116l-2.754-4.593l5.346,0.305\r c0.262,0.015,0.522,0.029,0.781,0.04c1.229,0.063,2.435,0.095,3.607,0.095c12.296,0,22.777-3.429,31.154-10.193\r c7.716-6.208,13.387-15.081,16.858-26.375c0.349-1.118,0.667-2.233,0.974-3.423l0.75-2.903l2.857,0.912\r c4.973,1.587,10.06,2.401,15.118,2.42l2.824,0.01V370.114z M122.292,342.066v2.855l-2.854-0.02\r c-10.91-0.078-18.432-6.523-19.254-7.257c-2.22-1.948-4.429-2.88-7.146-3.004c-0.182-0.009-0.36-0.013-0.537-0.013\r c-5.986-0.001-10.9,4.688-11.188,10.673c-0.325,6.9-1.313,13.079-2.938,18.364c-2.17,6.966-5.368,12.187-9.508,15.526\r c-4.331,3.478-10.18,5.24-17.39,5.24c-0.723,0-1.469-0.018-2.219-0.053c-2.556-0.137-5.265-0.465-8.071-0.976l-2.326-0.424v-2.365\r v-47.67c0-4.879,1.918-9.487,5.4-12.977c3.516-3.514,8.126-5.448,12.984-5.448h46.62c4.881,0,9.503,1.933,13.015,5.443\r c3.49,3.492,5.412,8.102,5.412,12.982V342.066z M295.682,335.96v-3.019c0-4.882,1.923-9.493,5.416-12.984\r c3.5-3.508,8.121-5.441,13.01-5.441h62.171h2.834v2.835v18.609v2.835h-2.834h-77.762h-2.834V335.96z M295.682,364.082v-2.835\r h2.834h77.755h2.834v2.835v25.6c0,11.078-4.358,21.538-12.272,29.451c-7.866,7.908-18.324,12.266-29.442,12.266\r c-11.08,0-21.537-4.36-29.445-12.276c-7.909-7.908-12.265-18.364-12.265-29.441V364.082z M259.396,499.376l-2.806-0.028v-2.806\r v-35.543c0-4.558,2.892-9.433,8.597-14.491c5.483-4.918,13.279-9.561,22.532-13.415l1.802-0.751l1.344,1.417\r c0.398,0.419,0.8,0.833,1.206,1.239c12.115,12.159,28.21,18.853,45.325,18.853c17.095,0,33.203-6.694,45.357-18.848\r c0.703-0.704,1.421-1.461,2.134-2.251l1.312-1.453l1.823,0.712c9.925,3.876,18.403,8.694,24.516,13.934\r c6.035,5.179,9.224,10.385,9.224,15.055v35.544v2.804l-2.804,0.03c-10.279,0.11-19.95,4.181-27.232,11.464\r c-7.396,7.391-11.469,17.217-11.469,27.668c0,4.403,0.734,8.748,2.182,12.917l1.308,3.765h-3.985H298.6h-3.994l1.318-3.77\r c1.463-4.186,2.205-8.53,2.205-12.912c0-10.451-4.072-20.275-11.466-27.664C279.377,503.551,269.694,499.478,259.396,499.376z\r M520.076,580.476v48.386v2.835h-2.834H161.152h-2.834v-2.835v-48.386v-2.835h2.834h356.089h2.834V580.476z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#054B93'
          },
          d: "M267.677,55.868H86.027c-6.18,0-11.208,5.029-11.208,11.21c0,6.199,5.028,11.242,11.208,11.242\r h181.649c6.181,0,11.209-5.043,11.209-11.242C278.886,60.897,273.857,55.868,267.677,55.868z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#054B93'
          },
          d: "M267.677,107.491H86.027c-6.18,0-11.208,5.028-11.208,11.209c0,6.2,5.028,11.243,11.208,11.243\r h181.649c6.181,0,11.209-5.044,11.209-11.243C278.886,112.52,273.857,107.491,267.677,107.491z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
          style: {
            fill: '#054B93'
          },
          d: "M176.852,159.073H86.027c-6.18,0-11.208,5.047-11.208,11.25c0,6.2,5.028,11.243,11.208,11.243\r h90.824c6.2,0,11.244-5.044,11.244-11.243C188.095,164.12,183.051,159.073,176.852,159.073z"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/PartSale/Icons/NotarialContract.tsx":
/*!***********************************************************!*\
  !*** ./src/templates/PartSale/Icons/NotarialContract.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotarialContract": () => (/* binding */ NotarialContract)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\PartSale\\Icons\\NotarialContract.tsx";


const NotarialContract = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "0 0 658.866 648.479",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    id: "Layer_1",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M41.973,583.123h263.972c67.847,21.796,142.014,9.969,199.721-31.845l87.94,87.94\r c5.218,5.295,12.353,8.268,19.781,8.248h0.112c7.356-0.007,14.399-2.966,19.552-8.214l11.944-11.939\r c5.283-5.205,8.254-12.306,8.268-19.716c0.013-7.417-2.946-14.531-8.214-19.748l-87.941-87.941\r c42.691-59.048,54.081-135.134,30.561-204.098c-23.512-68.966-79.018-122.241-148.893-142.906V94.195\r c0.027-5.674-2.232-11.12-6.25-15.12l-68.822-68.822c-4-4.018-9.446-6.277-15.12-6.25H41.973\r c-17.764,0-32.171,14.407-32.171,32.171v514.768C9.802,568.715,24.209,583.123,41.973,583.123L41.973,583.123z M629.883,603.015\r c1.237,1.21,1.93,2.867,1.93,4.601c-0.013,1.689-0.707,3.299-1.93,4.471l-12.011,12.063c-1.158,1.191-2.743,1.865-4.405,1.865\r c-1.721,0-3.371-0.7-4.581-1.93l-86.252-86.246c7.475-6.559,14.518-13.595,21.083-21.07L629.883,603.015z M578.191,368.635\r c0,82.408-49.642,156.708-125.787,188.251c-76.14,31.538-163.778,14.106-222.055-44.169\r c-58.275-58.275-75.712-145.922-44.169-222.061c31.536-76.145,105.836-125.787,188.253-125.787\r C486.914,164.993,578.067,256.148,578.191,368.635L578.191,368.635z M363.704,40.607l38.489,38.469h-27.759\r c-5.925,0-10.729-4.804-10.729-10.729V40.607z M31.252,36.175c0-5.924,4.797-10.721,10.721-10.721h300.28v42.892\r c0,17.772,14.408,32.18,32.18,32.18h42.892v47.108C309.985,126.648,203.1,185.914,164.043,288.077\r c-39.058,102.165,1.027,217.617,94.989,273.595H41.973c-5.924,0-10.721-4.804-10.721-10.729V36.175z M31.252,36.175"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M82.572,76.774h216.489c5.979,0,10.821-4.849,10.821-10.829c0-5.972-4.842-10.821-10.821-10.821\r H82.572c-5.979,0-10.829,4.849-10.829,10.821C71.742,71.925,76.593,76.774,82.572,76.774L82.572,76.774z M82.572,76.774"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M82.572,130.896h216.489c5.979,0,10.821-4.849,10.821-10.829c0-5.972-4.842-10.821-10.821-10.821\r H82.572c-5.979,0-10.829,4.849-10.829,10.821C71.742,126.047,76.593,130.896,82.572,130.896L82.572,130.896z M82.572,130.896"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M82.572,185.018h119.066c5.979,0,10.829-4.849,10.829-10.829c0-5.972-4.851-10.821-10.829-10.821\r H82.572c-5.979,0-10.829,4.849-10.829,10.821C71.742,180.169,76.593,185.018,82.572,185.018L82.572,185.018z M82.572,185.018"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M82.572,239.141h64.943c5.979,0,10.83-4.849,10.83-10.83c0-5.972-4.851-10.821-10.83-10.821H82.572\r c-5.979,0-10.829,4.849-10.829,10.821C71.742,234.292,76.593,239.141,82.572,239.141L82.572,239.141z M82.572,239.141"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M82.572,293.263h43.293c5.98,0,10.829-4.849,10.829-10.83c0-5.972-4.849-10.821-10.829-10.821\r H82.572c-5.979,0-10.829,4.849-10.829,10.821C71.742,288.414,76.593,293.263,82.572,293.263L82.572,293.263z M82.572,293.263"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M82.572,347.385h32.472c5.979,0,10.821-4.849,10.821-10.83c0-5.972-4.842-10.821-10.821-10.821\r H82.572c-5.979,0-10.829,4.849-10.829,10.821C71.742,342.536,76.593,347.385,82.572,347.385L82.572,347.385z M82.572,347.385"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M82.572,401.507h32.472c5.979,0,10.821-4.849,10.821-10.829c0-5.972-4.842-10.821-10.821-10.821\r H82.572c-5.979,0-10.829,4.849-10.829,10.821C71.742,396.658,76.593,401.507,82.572,401.507L82.572,401.507z M82.572,401.507"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M82.572,455.63h43.293c5.98,0,10.829-4.849,10.829-10.829c0-5.972-4.849-10.821-10.829-10.821\r H82.572c-5.979,0-10.829,4.849-10.829,10.821C71.742,450.781,76.593,455.63,82.572,455.63L82.572,455.63z M82.572,455.63"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M82.572,509.752h64.943c5.979,0,10.83-4.849,10.83-10.829c0-5.972-4.851-10.821-10.83-10.821H82.572\r c-5.979,0-10.829,4.849-10.829,10.821C71.742,504.903,76.593,509.752,82.572,509.752L82.572,509.752z M82.572,509.752"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#054B93'
        },
        d: "M545.502,344.482l-62.028-52.97l-0.001-70.699c-0.109-6.227-5.063-11.276-11.412-11.496h-35.496\r c-6.065,0-11.19,5.294-11.19,11.562v21.25l-44.64-38.058c-4.168-3.604-10.282-3.617-14.557-0.019L201.461,344.347\r c-4.755,3.872-5.431,10.944-1.507,15.765c1.899,2.333,4.597,3.764,7.601,4.029c0.335,0.029,0.669,0.044,1.002,0.044\r c2.599,0,5.111-0.893,7.164-2.564l0.284-0.257l157.439-134.055l54.817,46.711l34.23,29.107l68.531,58.36\r c2.272,1.948,5.161,2.9,8.147,2.658c2.975-0.233,5.685-1.613,7.665-3.923C550.747,355.526,550.148,348.465,545.502,344.482z\r M461.019,272.412l-13.262-11.179v-29.462h13.262V272.412z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#054B93'
        },
        d: "M512.748,359.479l-20.867-17.822h0.001l-111.148-94.962c-4.167-3.604-10.281-3.618-14.562-0.015\r L234.137,359.482c-4.688,4.018-5.238,11.096-1.259,15.738c1.904,2.284,4.579,3.68,7.532,3.931\r c2.944,0.245,5.806-0.669,8.052-2.588l3.147-2.729l0.001,131.076c0.112,6.145,5.2,11.234,11.412,11.344l220.838-0.001\r c6.252-0.112,11.236-5.096,11.346-11.412V373.834l3.108,2.686c2.084,1.736,4.561,2.654,7.162,2.654\r c3.255,0,6.35-1.423,8.497-3.907c1.984-2.305,2.939-5.225,2.69-8.222C516.417,364.063,515.014,361.365,512.748,359.479z\r M399.384,493.801h-51.877V421.13h51.877V493.801z M472.9,493.801h-51.134v-83.638c0-6.293-4.888-11.413-10.894-11.413h-74.852\r c-6.007,0-10.894,5.12-10.894,11.413v83.638h-51.134V354.648l99.455-84.716l99.455,84.716V493.801z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    id: "Layer_2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/PartSale/Icons/PaymentPurchase.tsx":
/*!**********************************************************!*\
  !*** ./src/templates/PartSale/Icons/PaymentPurchase.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPurchase": () => (/* binding */ PaymentPurchase)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\PartSale\\Icons\\PaymentPurchase.tsx";


const PaymentPurchase = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "0 0 579.821 653.731",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    id: "Layer_1",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M244.045,328.63l1.43,3.403c11.184,26.617,34.176,43.151,60.005,43.151\r c12.049,0,23.809-3.677,34.011-10.632c4.891-3.347,6.16-10.048,2.819-14.931c-3.339-4.91-10.053-6.17-14.973-2.827\r c-6.682,4.561-14.036,6.873-21.857,6.873c-11.99,0-23.242-5.668-31.682-15.96l-7.445-9.078h29.818\r c5.931,0,10.757-4.825,10.757-10.757c0-5.932-4.826-10.759-10.757-10.759h-35.438l-0.282-5.258\r c-0.052-0.964-0.077-1.816-0.077-2.605c0-0.79,0.025-1.643,0.077-2.606l0.282-5.258h44.747c5.933,0,10.76-4.826,10.76-10.759\r c0-5.932-4.827-10.759-10.76-10.759h-39.128l7.446-9.078c8.441-10.291,19.693-15.958,31.682-15.958\r c7.824,0,15.185,2.318,21.878,6.89c2.384,1.62,5.265,2.216,8.099,1.671c2.814-0.54,5.24-2.13,6.831-4.477\r c3.361-4.912,2.091-11.624-2.815-14.982c-10.188-6.945-21.944-10.619-33.992-10.619c-25.829,0-48.821,16.534-60.005,43.15\r l-1.43,3.403h-13.05c-5.932,0-10.758,4.826-10.758,10.759c0,5.933,4.826,10.759,10.758,10.759h8.232l-0.313,5.852\r c-0.035,0.656-0.056,1.326-0.056,2.012c0,0.685,0.02,1.355,0.056,2.011l0.312,5.852h-8.231c-5.932,0-10.758,4.826-10.758,10.759\r c0,5.932,4.826,10.757,10.758,10.757H244.045z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    id: "Layer_2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M296.555,143.012c-41.937,0.046-81.363,16.402-111.017,46.057\r c-29.653,29.654-46.011,69.081-46.061,111.019v0.003c0,86.613,70.466,157.079,157.08,157.079s157.08-70.466,157.08-157.079\r C453.638,213.478,383.172,143.012,296.555,143.012z M296.557,430.227c-71.757,0-130.135-58.378-130.135-130.132\r c0.08-71.677,58.459-130.057,130.136-130.14c71.757,0.001,130.135,58.38,130.135,130.137\r C426.694,371.849,368.315,430.227,296.557,430.227z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#054B93'
      },
      d: "M576.975,497.612L576.975,497.612c-14.94-26.509-47.94-36.577-75.124-22.924l-80.613,38.09\r l-0.498-0.813c-12.601-20.563-34.507-33.244-58.598-33.926l-76.914-2.117c-11.636-0.335-23.248-3.332-33.583-8.668l-7.821-4.054\r c-38.503-20.071-85.03-21.193-124.462-2.997l-1.555,0.718l0.338-12.401c0.103-3.693-1.238-7.204-3.775-9.886\r c-2.538-2.685-5.971-4.219-9.664-4.319l-84.348-2.319c-3.685-0.087-7.203,1.243-9.884,3.779c-2.682,2.539-4.214,5.97-4.314,9.661\r L1.068,630.531c-0.102,3.687,1.243,7.195,3.784,9.882c2.542,2.686,5.971,4.221,9.655,4.321l84.732,2.327\r c7.543,0,13.615-5.906,13.819-13.446l0.193-7.008l20.289-10.866c5.074-2.729,10.646-4.117,16.271-4.117\r c3.146,0,6.308,0.434,9.408,1.312l130.795,36.712c0.314,0.093,0.612,0.163,0.964,0.24c9.623,2.01,19.493,3.03,29.327,3.03\r l0.168,0.001c20.733-0.001,41.664-4.572,60.507-13.221c0.602-0.273,1.184-0.594,1.736-0.954l189.728-122.721\r C578.575,512.057,580.565,503.97,576.975,497.612z M85.793,619.041l-56.702-1.566l4.33-157.456l56.708,1.558L85.793,619.041z\r M368.482,615.017c-15.234,6.827-31.464,10.287-47.861,10.287c-7.825,0-15.688-0.788-23.499-2.373l-130.419-36.607\r c-15.562-4.397-31.976-2.605-46.222,5.052l-6.35,3.402l2.8-101.771l0.476-0.304c34.182-21.788,77.749-23.687,113.698-4.951\r l7.831,4.059c14.006,7.231,29.75,11.297,45.531,11.755l76.916,2.117c18.274,0.526,33.909,12.002,39.833,29.234l0.499,1.45\r l-110.393-3.047c-7.659-0.185-13.987,5.83-14.202,13.444c-0.203,7.62,5.829,13.99,13.446,14.199l126.447,3.48l0.393,0.001\r c7.536-0.007,13.603-5.914,13.806-13.447c0.103-3.768-0.093-7.556-0.582-11.261l-0.102-0.769l83.213-39.321\r c0.164-0.073,0.306-0.144,0.39-0.188c8.96-4.532,19.868-4.105,28.479,1.11l1.452,0.88L368.482,615.017z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#054B93'
        },
        d: "M296.557,0c-8.21,0-14.889,6.679-14.889,14.889v101.049c0,8.209,6.679,14.889,14.889,14.889\r s14.89-6.679,14.89-14.889V14.889C311.447,6.679,304.767,0,296.557,0z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#054B93'
        },
        d: "M376.333,53.185c-8.21,0-14.889,6.68-14.889,14.89v47.863c0,8.209,6.679,14.889,14.889,14.889\r s14.89-6.679,14.89-14.889V68.075C391.223,59.864,384.543,53.185,376.333,53.185z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#054B93'
        },
        d: "M216.777,53.185c-8.206,0-14.883,6.68-14.883,14.89v47.863c0,8.209,6.677,14.889,14.883,14.889\r c8.21,0,14.89-6.679,14.89-14.889V68.075C231.667,59.864,224.987,53.185,216.777,53.185z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/PartSale/Icons/RequestOffer.tsx":
/*!*******************************************************!*\
  !*** ./src/templates/PartSale/Icons/RequestOffer.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestOffer": () => (/* binding */ RequestOffer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\PartSale\\Icons\\RequestOffer.tsx";


const RequestOffer = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "0 0 643.5 641",
  xmlSpace: "preserve",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    id: "Layer_1",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("defs", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
            id: "SVGID_5_",
            x: "90.782",
            y: "1.826",
            width: "461.432",
            height: "411.665"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("clipPath", {
          id: "SVGID_2_",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("use", {
            xlinkHref: "#SVGID_5_",
            style: {
              overflow: 'visible'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
        style: {
          fill: '#054B93'
        },
        d: "M509.401,219.013c-0.242-2.921-1.616-5.564-3.868-7.443l-27.942-23.865L328.704,60.499\r c-4.094-3.54-10.112-3.544-14.316-0.004L165.497,187.705l-27.95,23.871c-2.236,1.917-3.595,4.585-3.824,7.512\r c-0.23,2.93,0.699,5.775,2.605,8c1.863,2.236,4.479,3.602,7.366,3.847c2.876,0.248,5.671-0.652,7.927-2.583l10.717-9.269v184.183\r c0.109,6.115,5.173,11.179,11.308,11.289l295.713-0.001c6.222-0.111,11.181-5.069,11.289-11.307V219.083l10.688,9.235\r c2.068,1.722,4.505,2.633,7.047,2.633c3.202,0,6.25-1.403,8.364-3.851C508.703,224.828,509.646,221.956,509.401,219.013z\r M360.265,392.438h-77.442V287.146h77.442V392.438z M458.729,392.438h-76.446V276.435c0-6.235-4.761-11.307-10.612-11.307H271.416\r c-5.851,0-10.611,5.072-10.611,11.307v116.002h-76.448V200.242L321.543,83.387l137.187,116.855V392.438z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M606.876,278.694c-19.135,0-34.703,15.568-34.703,34.703v16.757l-2.363-0.838\r c-3.723-1.32-7.614-1.99-11.566-1.99c-19.135,0-34.702,15.567-34.702,34.703v39.824l-1.184,0.416\r c-4.889,1.721-9.234,4.453-12.909,8.115l-38.121,37.312c-0.068,0.073-0.168,0.172-0.311,0.274\r c-39.43,28.99-44.918,83.376-45.617,93.982c-0.01,0.14-0.025,0.271-0.045,0.395l-0.159,1.048l0.13,0.021\r c-0.106,5.448-0.186,30.934-0.251,51.751l-0.011,3.125c-0.022,7.214-0.044,14.041-0.065,19.693l-0.001,0.002\r c-0.024,6.372-0.034,9.009,4.711,15.234c5.554,6.43,16.323,7.207,17.59,7.275l110.141,0.21c5.724,0,10.38-4.66,10.38-10.388\r c0-29.156,8.648-59.627,24.352-85.801l40.999-68.329c5.502-9.172,8.41-19.672,8.41-30.365V313.397\r C641.579,294.262,626.011,278.694,606.876,278.694z M544.313,362.029c0-7.681,6.25-13.93,13.931-13.93s13.93,6.249,13.93,13.93\r v48.629c0,3.722-1.448,7.22-4.08,9.851l-1.773,1.773l-1.079-2.262c-1.694-3.554-3.975-6.775-6.777-9.578\r c-3.696-3.696-8.059-6.446-12.967-8.174l-1.184-0.416V362.029z M620.806,445.825c0,6.93-1.885,13.734-5.45,19.677l-40.997,68.329\r c-15.519,25.864-24.815,55.068-26.886,84.455l-0.116,1.647H446.237v-61.642c0-36.174,14.08-70.188,39.638-95.769l37.398-36.604\r l1.585-1.512c2.52-2.167,5.7-3.35,9.067-3.35h0.001c3.725,0,7.222,1.446,9.848,4.073c2.634,2.634,4.084,6.131,4.084,9.847\r c0,3.717-1.45,7.215-4.085,9.849l-41.508,41.509c-1.959,1.959-3.038,4.567-3.038,7.345c0,2.776,1.079,5.385,3.038,7.343\r c1.96,1.963,4.568,3.044,7.344,3.044s5.384-1.081,7.345-3.043l65.829-65.827c6.536-6.538,10.145-15.229,10.16-24.462l0.002-97.338\r c0-7.681,6.25-13.93,13.931-13.93s13.93,6.249,13.93,13.93V445.825z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#779CC1'
      },
      d: "M219.014,616.004c-0.026-6.521-0.051-14.585-0.078-23.002c-0.064-20.646-0.144-45.9-0.249-51.504\r l0.155-0.013l-0.186-1.136c-0.02-0.123-0.035-0.255-0.044-0.395c-0.701-10.608-6.194-64.997-45.637-93.994l-0.147-0.108\r l-38.241-37.441c-3.696-3.681-8.047-6.419-12.934-8.139l-1.183-0.416v-39.824c0-19.135-15.568-34.703-34.703-34.703\r c-3.952,0-7.843,0.669-11.566,1.989l-2.363,0.838V311.4c0-19.135-15.568-34.703-34.703-34.703S2.432,292.265,2.432,311.4v132.428\r c0,10.692,2.908,21.192,8.41,30.365l40.998,68.329c15.704,26.171,24.352,56.643,24.352,85.801c0,5.727,4.66,10.387,10.389,10.387\r l110.19-0.21c1.212-0.071,12.003-0.877,17.573-7.324C219.049,624.998,219.039,622.365,219.014,616.004z M71.838,360.032\r c0-7.681,6.249-13.929,13.93-13.929s13.93,6.249,13.93,13.929v39.823l-1.184,0.416c-4.906,1.727-9.269,4.477-12.966,8.173\r c-2.804,2.805-5.084,6.027-6.776,9.579l-1.26,2.644l-1.644-2.192l-0.089-0.104c-2.541-2.612-3.94-6.061-3.94-9.71V360.032z\r M197.774,617.938H96.655l-0.116-1.648c-2.071-29.387-11.368-58.591-26.886-84.455l-40.998-68.329\r c-3.565-5.943-5.45-12.747-5.45-19.677V311.399c0-7.681,6.249-13.93,13.93-13.93s13.93,6.249,13.93,13.93l0.001,97.331\r c0.017,9.243,3.626,17.934,10.163,24.471l65.828,65.825c1.961,1.963,4.57,3.044,7.345,3.044c2.774,0,5.382-1.081,7.344-3.042\r c4.05-4.051,4.05-10.64,0-14.69l-41.509-41.509c-2.634-2.633-4.084-6.13-4.084-9.848c0-3.716,1.451-7.214,4.084-9.848\r c2.628-2.627,6.125-4.074,9.849-4.074c3.723,0,7.22,1.447,9.856,4.082l38.164,37.354c25.581,25.604,39.669,59.625,39.669,95.8\r V617.938z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      style: {
        fill: '#054B93'
      },
      d: "M549.401,191.485l-84.665-72.302c0.061-0.315,0.122-0.645,0.184-1.012l0.014-0.086V22.893\r c-0.109-6.223-5.06-11.269-11.308-11.488h-47.542c-5.967,0-11.009,5.269-11.009,11.506v37.083L328.704,3.409\r c-4.096-3.541-10.112-3.544-14.315-0.005L93.706,191.368c-4.669,3.801-5.318,10.763-1.446,15.519\r c1.858,2.284,4.502,3.684,7.444,3.944c0.33,0.029,0.659,0.043,0.987,0.043c2.568,0,5.053-0.885,7.087-2.541l0.217-0.213\r L321.543,26.297l75.996,64.759l45.85,38.987l91.8,78.174c2.234,1.916,5.073,2.844,8.01,2.615c2.928-0.23,5.596-1.588,7.521-3.835\r C554.575,202.371,553.984,195.412,549.401,191.485z M442.815,100.492l-25.723-21.68V33.523h25.723V100.492z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
    id: "Layer_2"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/templates/PartSale/Steps.tsx":
/*!******************************************!*\
  !*** ./src/templates/PartSale/Steps.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons_RequestOffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons/RequestOffer */ "./src/templates/PartSale/Icons/RequestOffer.tsx");
/* harmony import */ var _Icons_ExpertOpinion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons/ExpertOpinion */ "./src/templates/PartSale/Icons/ExpertOpinion.tsx");
/* harmony import */ var _Icons_HomeView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/HomeView */ "./src/templates/PartSale/Icons/HomeView.tsx");
/* harmony import */ var _Icons_BindingPurchase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icons/BindingPurchase */ "./src/templates/PartSale/Icons/BindingPurchase.tsx");
/* harmony import */ var _Icons_NotarialContract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons/NotarialContract */ "./src/templates/PartSale/Icons/NotarialContract.tsx");
/* harmony import */ var _Icons_PaymentPurchase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Icons/PaymentPurchase */ "./src/templates/PartSale/Icons/PaymentPurchase.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
const _excluded = ["ctype"];
var _jsxFileName = "C:\\Users\\USER\\Desktop\\LPGniw\\website\\src\\templates\\PartSale\\Steps.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // import Icon1 from '../../../public/assets/images/partSale/Capture1.webp';










const RentalSalesItems = [{
  title: 'Kostenloses und persönliches Angebot anfordern',
  number: 1,
  img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Icons_RequestOffer__WEBPACK_IMPORTED_MODULE_1__.RequestOffer, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 10
  }, undefined)
}, {
  title: 'Erstellung des unverbindlichen Gutachtens durch die GNIW',
  number: 2,
  img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Icons_ExpertOpinion__WEBPACK_IMPORTED_MODULE_2__.ExpertOpinion, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 10
  }, undefined)
}, {
  title: 'Persönlicher Besichtigungstermin bei Ihnen zu Hause',
  number: 3,
  img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Icons_HomeView__WEBPACK_IMPORTED_MODULE_3__.HomeView, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 10
  }, undefined)
}, {
  title: 'Personalisiertes und verbindliches Kauf- und Mietangebot',
  number: 4,
  img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Icons_BindingPurchase__WEBPACK_IMPORTED_MODULE_4__.BindingPurchase, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 10
  }, undefined)
}, {
  title: 'Notarieller Vertragsabschluss bei erfolgreicher Angebotsannahme',
  number: 5,
  img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Icons_NotarialContract__WEBPACK_IMPORTED_MODULE_5__.NotarialContract, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 10
  }, undefined)
}, {
  title: 'Sofortauszahlung des vollständigen Kaufpreises',
  number: 6,
  img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Icons_PaymentPurchase__WEBPACK_IMPORTED_MODULE_6__.PaymentPurchase, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 10
  }, undefined)
}];

const Steps = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)(); // eslint-disable-next-line unused-imports/no-unused-vars

  const _router$query = router.query,
        {
    ctype
  } = _router$query,
        routerQuery = _objectWithoutProperties(_router$query, _excluded);

  const contactOfferUrl = `?${new URLSearchParams(_objectSpread(_objectSpread({}, routerQuery), {}, {
    ctype: 'offer'
  })).toString()}#kontakt`;
  const contactInfoUrl = `?${new URLSearchParams(_objectSpread(_objectSpread({}, routerQuery), {}, {
    ctype: 'information'
  })).toString()}#kontakt`;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: "steps-container text-center sec-content-container max-w-7xl mx-auto px-4 sm:px-6 pb-24 pt-24",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h2", {
      className: "sec-main-title",
      children: "Immobilienverkauf an die GNIW in 6 einfachen Schritten"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("ol", {
      className: "rentalSales-grid",
      children: RentalSalesItems.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("li", {
        className: "rentalSales-grid-item rs-item mt-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "steps-grid",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h3", {
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: "steps-icon-cont",
            children: item.img
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "grid-item-abs",
          children: item.number
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, undefined)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "step-buttons-grid pt-10",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
        href: contactInfoUrl,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
          className: "step-btn step-btn-lighter",
          children: "Infomaterial anfordern"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
        href: contactOfferUrl,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("a", {
          className: "step-btn step-btn-darker",
          children: "Angebot anfordern"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Steps);

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2duaXctd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvLi9zcmMvdGVtcGxhdGVzL1BhcnRTYWxlL0ljb25zL0JpbmRpbmdQdXJjaGFzZS50c3giLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlLy4vc3JjL3RlbXBsYXRlcy9QYXJ0U2FsZS9JY29ucy9FeHBlcnRPcGluaW9uLnRzeCIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvLi9zcmMvdGVtcGxhdGVzL1BhcnRTYWxlL0ljb25zL0hvbWVWaWV3LnRzeCIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvLi9zcmMvdGVtcGxhdGVzL1BhcnRTYWxlL0ljb25zL05vdGFyaWFsQ29udHJhY3QudHN4Iiwid2VicGFjazovL2duaXctd2Vic2l0ZS8uL3NyYy90ZW1wbGF0ZXMvUGFydFNhbGUvSWNvbnMvUGF5bWVudFB1cmNoYXNlLnRzeCIsIndlYnBhY2s6Ly9nbml3LXdlYnNpdGUvLi9zcmMvdGVtcGxhdGVzL1BhcnRTYWxlL0ljb25zL1JlcXVlc3RPZmZlci50c3giLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlLy4vc3JjL3RlbXBsYXRlcy9QYXJ0U2FsZS9TdGVwcy50c3giLCJ3ZWJwYWNrOi8vZ25pdy13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJpbmRpbmdQdXJjaGFzZSA9ICgpID0+IChcclxuICA8c3ZnXHJcbiAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgeD1cIjBweFwiXHJcbiAgICB5PVwiMHB4XCJcclxuICAgIHZpZXdCb3g9XCIwIDAgNjQxIDY1MS4zOTFcIlxyXG4gICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXHJcbiAgPlxyXG4gICAgPGcgaWQ9XCJMYXllcl8xXCI+XHJcbiAgICAgIDxnPlxyXG4gICAgICAgIDxnPlxyXG4gICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgIDxyZWN0XHJcbiAgICAgICAgICAgICAgaWQ9XCJTVkdJRF83X1wiXHJcbiAgICAgICAgICAgICAgeD1cIjE4Ni40MzRcIlxyXG4gICAgICAgICAgICAgIHk9XCIxMDYuNDkyXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjI1OS40MzZcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjIzMS40NTVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgPGNsaXBQYXRoIGlkPVwiU1ZHSURfMl9cIj5cclxuICAgICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIjU1ZHSURfN19cIiBzdHlsZT17eyBvdmVyZmxvdzogJ3Zpc2libGUnIH19IC8+XHJcbiAgICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9nPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIHN0eWxlPXt7IGZpbGw6ICcjMDU0QjkzJyB9fVxyXG4gICAgICAgIGQ9XCJNNDk2LjMwNCwyNDYuMzlsLTYyLjYwNi01My40NjRsLTAuMDAxLTcxLjM1OWMtMC4xMS02LjI4NS01LjExLTExLjM4MS0xMS41MTgtMTEuNjAzaC0zNS44MjdcclxuXHRcdGMtNi4xMjIsMC0xMS4yOTUsNS4zNDQtMTEuMjk1LDExLjY3djIxLjQ0OGwtNDUuMDU3LTM4LjQxM2MtNC4yMDctMy42MzctMTAuMzc4LTMuNjUxLTE0LjY5My0wLjAxOUwxNDkuMDUzLDI0Ni4yNTNcclxuXHRcdGMtNC44LDMuOTA4LTUuNDgyLDExLjA0Ny0xLjUyMSwxNS45MTJjMS45MTYsMi4zNTUsNC42NCwzLjc5OSw3LjY3Miw0LjA2N2MwLjMzOCwwLjAyOSwwLjY3NSwwLjA0NCwxLjAxMiwwLjA0NFxyXG5cdFx0YzIuNjIzLDAsNS4xNTgtMC45MDIsNy4yMy0yLjU4OGwwLjI4Ny0wLjI2bDE1OC45MDgtMTM1LjMwN2w1NS4zMjksNDcuMTQ3bDM0LjU1LDI5LjM3OWw2OS4xNzEsNTguOTA0XHJcblx0XHRjMi4yOTMsMS45NjYsNS4yMDksMi45MjcsOC4yMjMsMi42ODNjMy4wMDMtMC4yMzYsNS43MzgtMS42MjgsNy43MzctMy45NkM1MDEuNTk5LDI1Ny41MzYsNTAwLjk5NCwyNTAuNDEsNDk2LjMwNCwyNDYuMzl6XHJcblx0XHQgTTQxMS4wMzMsMTczLjY0NmwtMTMuMzg2LTExLjI4M3YtMjkuNzM2aDEzLjM4NlYxNzMuNjQ2elwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxnPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBzdHlsZT17eyBmaWxsOiAnIzA1NEI5MycgfX1cclxuICAgICAgICAgIGQ9XCJNMzMxLjAwMywxNDUuNTg0Yy00LjI0LTMuNjY4LTEwLjQ2Mi0zLjY4Mi0xNC44MTgtMC4wMTVMMTgxLjgyNywyNjAuMzU2XHJcblx0XHRcdGMtNC43Nyw0LjA4OS01LjMzLDExLjI5MS0xLjI4MSwxNi4wMTVjMS45MzcsMi4zMjQsNC42NiwzLjc0NSw3LjY2NCw0YzIuOTk1LDAuMjQ5LDUuOTA4LTAuNjgxLDguMTkzLTIuNjMzbDMuMjAzLTIuNzc3XHJcblx0XHRcdGwwLjAwMSwxMzMuMzgyYzAuMTE0LDYuMjUzLDUuMjkyLDExLjQzMSwxMS42MTMsMTEuNTQ0bDE5LjUzOCwwbDI0LjQzLTIyLjg0OWgtMzIuODA3VjI1NS40MzZsMTAxLjIwNC04Ni4yMDZsMTAxLjIwNCw4Ni4yMDZcclxuXHRcdFx0djE0MS42MDFoLTM2LjUzNGwyNC40NTksMjIuODc1bDIzLjIyOS0wLjAyN2M2LjM2Mi0wLjExNCwxMS40MzMtNS4xODUsMTEuNTQ1LTExLjYxM1YyNzQuOTZsMy4xNjMsMi43MzNcclxuXHRcdFx0YzIuMTIxLDEuNzY3LDQuNjQxLDIuNzAxLDcuMjg4LDIuNzAxYzMuMzEyLDAsNi40NjItMS40NDgsOC42NDYtMy45NzZjMi4wMTktMi4zNDYsMi45OS01LjMxNywyLjczNy04LjM2NlxyXG5cdFx0XHRjLTAuMjUxLTMuMDM0LTEuNjc5LTUuNzc5LTMuOTg0LTcuNjk5bC0yMS4yMzQtMTguMTM2aDAuMDAxTDMzMS4wMDMsMTQ1LjU4NHpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIHN0eWxlPXt7IGZpbGw6ICcjMDU0QjkzJyB9fVxyXG4gICAgICAgICAgZD1cIk0zNDkuOTgxLDMyMy4wODhsLTAuMDQ1LDM4LjEwOWwyMi44MjEsMjEuMzQ0di03MC42MTNjMC02LjQwMy00Ljk3NC0xMS42MTMtMTEuMDg2LTExLjYxM2gtNzYuMTY5XHJcblx0XHRcdGMtNi4xMTIsMC0xMS4wODYsNS4yMS0xMS4wODYsMTEuNjEzdjY3LjEyN2wyMi43NzUtMjEuMzAxdi0zNC42NjZIMzQ5Ljk4MXpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBzdHlsZT17eyBmaWxsOiAnIzc3OUNDMScgfX1cclxuICAgICAgICBkPVwiTTc2Ljk1Nyw1OC4yNDdjLTYuMzE2LDAtMTEuNDU0LDQuNzQzLTExLjQ1NCwxMC41NzR2MTY3LjM0NUw2LjI1MSwyOTEuNTY4XHJcblx0XHRjLTIuMTI4LDEuOTkyLTMuMyw0LjYzLTMuMyw3LjQzdjMzOC4yNzFjMCw1LjgzMSw1LjEzOCwxMC41NzQsMTEuNDU1LDEwLjU3NGg2MTQuNjMyYzYuMzE2LDAsMTEuNDU0LTQuNzQ0LDExLjQ1NC0xMC41NzRWMjk4Ljk5OFxyXG5cdFx0YzAtMi43OTktMS4xNzItNS40MzgtMy4zLTcuNDNsLTU5LjI1LTU1LjQwM1Y2OC44MjFjMC01LjgzMS01LjEzOC0xMC41NzQtMTEuNDU1LTEwLjU3NEgzODcuNjk4TDMyOS44NzYsNC4xNjVcclxuXHRcdGMtNC40OTYtNC4xOTgtMTEuODEzLTQuMTk3LTE2LjMwOSwwLjAwMWwtNTcuODIsNTQuMDgxSDc2Ljk1N3ogTTY1LjUwMywyNjYuMjZ2NjUuNDc2bC0zNS4wMDctMzIuNzM4TDY1LjUwMywyNjYuMjZ6XHJcblx0XHQgTTI1Ljg2MSwzMjQuNzU4bDE1My4zMSwxNDMuMzc2TDI1Ljg2MSw2MTEuNTFWMzI0Ljc1OHogTTQxLjgwMiw2MjYuNjk2bDI3OS45Mi0yNjEuNzgzbDI3OS45MiwyNjEuNzgzSDQxLjgwMnogTTU3Ny45NDIsMjY2LjI2XHJcblx0XHRsMzUuMDA2LDMyLjczOGwtMzUuMDA2LDMyLjczOFYyNjYuMjZ6IE02MTcuNTgzLDMyNC43NThWNjExLjUxbC0xNTMuMzEtMTQzLjM3N0w2MTcuNTgzLDMyNC43NTh6IE01NTUuMDMzLDc5LjM5NHYyNzMuNzY2XHJcblx0XHRsLTEwNi44NDksOTkuOTI2TDMyOS44NzYsMzQyLjQzNmMtNC40OTYtNC4xOTgtMTEuODEzLTQuMTk3LTE2LjMwOSwwLjAwMUwxOTUuMjYsNDUzLjA4N0w4OC40MTIsMzUzLjE2MVY3OS4zOTRINTU1LjAzM3pcclxuXHRcdCBNMzIxLjcyMiwyNi42NDJsMzMuNzk2LDMxLjYwNmgtNjcuNTkxTDMyMS43MjIsMjYuNjQyelwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2c+XHJcbiAgICA8ZyBpZD1cIkxheWVyXzJcIj48L2c+XHJcbiAgPC9zdmc+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgRXhwZXJ0T3BpbmlvbiA9ICgpID0+IChcclxuICA8c3ZnXHJcbiAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgeD1cIjBweFwiXHJcbiAgICB5PVwiMHB4XCJcclxuICAgIHZpZXdCb3g9XCIwIDAgNzE4LjQ2NiA2NDcuMzg0XCJcclxuICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxyXG4gID5cclxuICAgIDxnIGlkPVwiTGF5ZXJfMVwiPlxyXG4gICAgICA8Zz5cclxuICAgICAgICA8Zz5cclxuICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICA8cmVjdCBpZD1cIlNWR0lEXzlfXCIgeD1cIjIwLjkzOVwiIHdpZHRoPVwiNzIwLjA3MlwiIGhlaWdodD1cIjY1NS40OTJcIiAvPlxyXG4gICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgPGNsaXBQYXRoIGlkPVwiU1ZHSURfMl9cIj5cclxuICAgICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIjU1ZHSURfOV9cIiBzdHlsZT17eyBvdmVyZmxvdzogJ3Zpc2libGUnIH19IC8+XHJcbiAgICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgIDxyZWN0XHJcbiAgICAgICAgICAgICAgICBpZD1cIlNWR0lEXzExX1wiXHJcbiAgICAgICAgICAgICAgICB4PVwiMjAuOTM5XCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNzIwLjA3MlwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2NTUuNDkyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgIDxjbGlwUGF0aCBpZD1cIlNWR0lEXzRfXCI+XHJcbiAgICAgICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIjU1ZHSURfMTFfXCIgc3R5bGU9e3sgb3ZlcmZsb3c6ICd2aXNpYmxlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGZpbGw6ICcjNzc5Q0MxJyB9fVxyXG4gICAgICAgICAgICAgIGQ9XCJNMjk2LjIxMywxNDEuNDYzYzYuNjg2LDAsMTIuMTA5LTUuNDIzLDEyLjEwOS0xMi4xMDlWOTcuODcxXHJcblx0XHRcdFx0XHRjMC00MC4wNTksMzIuNTk0LTcyLjY1Myw3Mi42NTMtNzIuNjUzczcyLjY1MywzMi41OTQsNzIuNjUzLDcyLjY1M3YxLjk1NWwtMjIuMjU2LTIyLjU2NlxyXG5cdFx0XHRcdFx0Yy00LjY5Mi00Ljc2OC0xMi4zNjEtNC44MTgtMTcuMTI0LTAuMTE5Yy00Ljc2MSw0LjY5Mi00LjgxOCwxMi4zNjEtMC4xMTksMTcuMTI0bDQyLjk4Niw0My41OTJcclxuXHRcdFx0XHRcdGMyLjI3NiwyLjMwNyw1LjM4LDMuNjA3LDguNjIxLDMuNjA3YzMuMjQyLDAsNi4zNDUtMS4zLDguNjIxLTMuNjA3bDQyLjk4Ni00My41OTJjNC42OTItNC43NjMsNC42NDItMTIuNDMyLTAuMTE5LTE3LjEyNFxyXG5cdFx0XHRcdFx0Yy00Ljc2My00LjY5OC0xMi40MzItNC42NDgtMTcuMTI0LDAuMTE5bC0yMi4yNTYsMjIuNTY2di0xLjk1NWMwLTUzLjQxOC00My40NTMtOTYuODcxLTk2Ljg3MS05Ni44NzFcclxuXHRcdFx0XHRcdHMtOTYuODcxLDQzLjQ1My05Ni44NzEsOTYuODcxdjMxLjQ4M0MyODQuMTA0LDEzNi4wNCwyODkuNTI3LDE0MS40NjMsMjk2LjIxMywxNDEuNDYzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBzdHlsZT17eyBmaWxsOiAnIzc3OUNDMScgfX1cclxuICAgICAgICAgICAgICBkPVwiTTQ2NS43MzYsNTA2LjI3N2MtNi42ODYsMC0xMi4xMDksNS40MjMtMTIuMTA5LDEyLjEwOXYzMS40ODNcclxuXHRcdFx0XHRcdGMwLDQwLjA1OS0zMi41OTQsNzIuNjUzLTcyLjY1Myw3Mi42NTNzLTcyLjY1My0zMi41OTQtNzIuNjUzLTcyLjY1M3YtMS45NTVsMjIuMjU2LDIyLjU2NmMyLjM3MiwyLjQwMiw1LjQ5NCwzLjYwNyw4LjYyMSwzLjYwN1xyXG5cdFx0XHRcdFx0YzMuMDcxLDAsNi4xNDMtMS4xNjEsOC41MDItMy40ODdjNC43NjEtNC42OTIsNC44MTgtMTIuMzYxLDAuMTE5LTE3LjEyNGwtNDIuOTg2LTQzLjU5MmMtMi4yNzYtMi4zMDctNS4zOC0zLjYwNy04LjYyMS0zLjYwN1xyXG5cdFx0XHRcdFx0cy02LjM0NSwxLjMtOC42MjEsMy42MDdsLTQyLjk4Niw0My41OTJjLTQuNjkyLDQuNzYzLTQuNjQyLDEyLjQzMiwwLjExOSwxNy4xMjRjNC43NjMsNC42OTgsMTIuNDMyLDQuNjQyLDE3LjEyNC0wLjEyXHJcblx0XHRcdFx0XHRsMjIuMjU2LTIyLjU2NnYxLjk1NWMwLDUzLjQxOCw0My40NTMsOTYuODcxLDk2Ljg3MSw5Ni44NzFzOTYuODcxLTQzLjQ1Myw5Ni44NzEtOTYuODcxdi0zMS40ODNcclxuXHRcdFx0XHRcdEM0NzcuODQ1LDUxMS43LDQ3Mi40MjIsNTA2LjI3Nyw0NjUuNzM2LDUwNi4yNzdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGZpbGw6ICcjNzc5Q0MxJyB9fVxyXG4gICAgICAgICAgICAgIGQ9XCJNNTUwLjQ1LDE3Mi44MjNjLTgyLjk0MSwwLTE1MC40MTksNjcuNDc5LTE1MC40MTksMTUwLjQyMVxyXG5cdFx0XHRcdFx0YzAsODIuOTQyLDY3LjQ3OCwxNTAuNDIsMTUwLjQxOSwxNTAuNDJjODIuOTQyLDAsMTUwLjQyLTY3LjQ3OCwxNTAuNDItMTUwLjQyQzcwMC44NywyNDAuMzAxLDYzMy4zOTIsMTcyLjgyMyw1NTAuNDUsMTcyLjgyM3pcclxuXHRcdFx0XHRcdCBNNTUwLjQ1LDQ1Mi4xNDhjLTcxLjA3NywwLTEyOC45MDMtNTcuODI2LTEyOC45MDMtMTI4LjkwNGMwLTcxLjA3OCw1Ny44MjYtMTI4LjkwNCwxMjguOTAzLTEyOC45MDRcclxuXHRcdFx0XHRcdGM3MS4wNzgsMCwxMjguOTA0LDU3LjgyNiwxMjguOTA0LDEyOC45MDRDNjc5LjM1NCwzOTQuMzIyLDYyMS41MjgsNDUyLjE0OCw1NTAuNDUsNDUyLjE0OHpcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGZpbGw6ICcjNzc5Q0MxJyB9fVxyXG4gICAgICAgICAgICAgIGQ9XCJNNDk4LjMyNSwzNTIuNjIzbDEuNDMsMy40MDNcclxuXHRcdFx0XHRcdGMxMS4xODQsMjYuNjE3LDM0LjE3Niw0My4xNTEsNjAuMDA1LDQzLjE1MWMxMi4wNDksMCwyMy44MDktMy42NzcsMzQuMDExLTEwLjYzMmM0Ljg5MS0zLjM0Nyw2LjE2LTEwLjA0OCwyLjgxOS0xNC45MzFcclxuXHRcdFx0XHRcdGMtMy4zMzktNC45MS0xMC4wNTMtNi4xNy0xNC45NzMtMi44MjdjLTYuNjgyLDQuNTYxLTE0LjAzNiw2Ljg3My0yMS44NTcsNi44NzNjLTExLjk5LDAtMjMuMjQyLTUuNjY4LTMxLjY4Mi0xNS45NlxyXG5cdFx0XHRcdFx0bC03LjQ0NS05LjA3OGgyOS44MThjNS45MzEsMCwxMC43NTctNC44MjUsMTAuNzU3LTEwLjc1N2MwLTUuOTMzLTQuODI2LTEwLjc1OS0xMC43NTctMTAuNzU5aC0zNS40MzhsLTAuMjgyLTUuMjU4XHJcblx0XHRcdFx0XHRjLTAuMDUyLTAuOTY0LTAuMDc3LTEuODE2LTAuMDc3LTIuNjA1YzAtMC43OSwwLjAyNS0xLjY0MywwLjA3Ny0yLjYwNmwwLjI4Mi01LjI1OGg0NC43NDdjNS45MzMsMCwxMC43Ni00LjgyNiwxMC43Ni0xMC43NTlcclxuXHRcdFx0XHRcdHMtNC44MjctMTAuNzU5LTEwLjc2LTEwLjc1OWgtMzkuMTI4bDcuNDQ2LTkuMDc4YzguNDQxLTEwLjI5MSwxOS42OTMtMTUuOTU4LDMxLjY4Mi0xNS45NThjNy44MjQsMCwxNS4xODUsMi4zMTgsMjEuODc4LDYuODlcclxuXHRcdFx0XHRcdGMyLjM4NCwxLjYyLDUuMjY1LDIuMjE2LDguMDk5LDEuNjcxYzIuODE0LTAuNTQsNS4yNC0yLjEzLDYuODMxLTQuNDc3YzMuMzYxLTQuOTEyLDIuMDkxLTExLjYyNC0yLjgxNS0xNC45ODJcclxuXHRcdFx0XHRcdGMtMTAuMTg4LTYuOTQ1LTIxLjk0NC0xMC42MTktMzMuOTkyLTEwLjYxOWMtMjUuODI5LDAtNDguODIxLDE2LjUzNC02MC4wMDUsNDMuMTVsLTEuNDMsMy40MDNoLTEzLjA1XHJcblx0XHRcdFx0XHRjLTUuOTMyLDAtMTAuNzU4LDQuODI2LTEwLjc1OCwxMC43NTlzNC44MjYsMTAuNzU5LDEwLjc1OCwxMC43NTloOC4yMzJsLTAuMzEzLDUuODUyYy0wLjAzNSwwLjY1Ni0wLjA1NiwxLjMyNi0wLjA1NiwyLjAxMlxyXG5cdFx0XHRcdFx0YzAsMC42ODUsMC4wMiwxLjM1NSwwLjA1NiwyLjAxMWwwLjMxMiw1Ljg1MmgtOC4yMzFjLTUuOTMyLDAtMTAuNzU4LDQuODI2LTEwLjc1OCwxMC43NTljMCw1LjkzMiw0LjgyNiwxMC43NTcsMTAuNzU4LDEwLjc1N1xyXG5cdFx0XHRcdFx0SDQ5OC4zMjV6XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvZz5cclxuICAgICAgPGc+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIHN0eWxlPXt7IGZpbGw6ICcjMDU0QjkzJyB9fVxyXG4gICAgICAgICAgZD1cIk0zNjUuNDg1LDMxMC45NjRsLTU5LjI1Ny01MC42MDRsLTAuMDAxLTY3LjU0MWMtMC4xMDQtNS45NDktNC44MzctMTAuNzcyLTEwLjkwMi0xMC45ODNoLTMzLjkxMVxyXG5cdFx0XHRjLTUuNzk0LDAtMTAuNjksNS4wNTgtMTAuNjksMTEuMDQ1djIwLjMwMWwtNDIuNjQ2LTM2LjM1OGMtMy45ODItMy40NDMtOS44MjMtMy40NTYtMTMuOTA2LTAuMDE4TDM2LjgxMiwzMTAuODM0XHJcblx0XHRcdGMtNC41NDMsMy42OTktNS4xODgsMTAuNDU2LTEuNDQsMTUuMDYxYzEuODE0LDIuMjI5LDQuMzkyLDMuNTk2LDcuMjYxLDMuODQ5YzAuMzIsMC4wMjgsMC42MzksMC4wNDIsMC45NTgsMC4wNDJcclxuXHRcdFx0YzIuNDgzLDAsNC44ODItMC44NTQsNi44NDQtMi40NWwwLjI3MS0wLjI0NmwxNTAuNDA3LTEyOC4wNjhsNTIuMzY5LDQ0LjYyNWwzMi43MDIsMjcuODA3bDY1LjQ3LDU1Ljc1M1xyXG5cdFx0XHRjMi4xNzEsMS44NjEsNC45MzEsMi43Nyw3Ljc4MywyLjUzOWMyLjg0Mi0wLjIyMyw1LjQzMS0xLjU0MSw3LjMyMy0zLjc0OEMzNzAuNDk3LDMyMS41MTQsMzY5LjkyNCwzMTQuNzY5LDM2NS40ODUsMzEwLjk2NHpcclxuXHRcdFx0IE0yODQuNzc2LDI0Mi4xMTJsLTEyLjY3LTEwLjY4di0yOC4xNDZoMTIuNjdWMjQyLjExMnpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIHN0eWxlPXt7IGZpbGw6ICcjMDU0QjkzJyB9fVxyXG4gICAgICAgICAgZD1cIk0zMzQuMTk1LDMyNS4yOWwtMTkuOTM1LTE3LjAyNmgwLjAwMWwtMTA2LjE4My05MC43MmMtMy45ODEtMy40NDMtOS44MjItMy40NTYtMTMuOTExLTAuMDE0XHJcblx0XHRcdEw2OC4wMjgsMzI1LjI5NGMtNC40NzksMy44MzktNS4wMDQsMTAuNjAxLTEuMjAzLDE1LjAzNWMxLjgxOSwyLjE4Miw0LjM3NSwzLjUxNiw3LjE5NSwzLjc1NlxyXG5cdFx0XHRjMi44MTIsMC4yMzQsNS41NDYtMC42MzksNy42OTItMi40NzJsMy4wMDctMi42MDdsMC4wMDEsMTI1LjIyMWMwLjEwNyw1Ljg3LDQuOTY4LDEwLjczMiwxMC45MDIsMTAuODM4bDIxMC45NzQtMC4wMDFcclxuXHRcdFx0YzUuOTczLTAuMTA3LDEwLjczNC00Ljg2OCwxMC44MzktMTAuOTAyVjMzOS4wMDRsMi45NywyLjU2NmMxLjk5MSwxLjY1OSw0LjM1NywyLjUzNSw2Ljg0MiwyLjUzNWMzLjExLDAsNi4wNjctMS4zNTksOC4xMTctMy43MzNcclxuXHRcdFx0YzEuODk1LTIuMjAyLDIuODA3LTQuOTkxLDIuNTY5LTcuODU1QzMzNy43LDMyOS42NjksMzM2LjM1OSwzMjcuMDkzLDMzNC4xOTUsMzI1LjI5eiBNMjI1Ljg5NCw0NTMuNjEzaC00OS41NnYtNjkuNDI1aDQ5LjU2XHJcblx0XHRcdFY0NTMuNjEzeiBNMjk2LjEyNyw0NTMuNjEzaC00OC44NXYtNzkuOTAyYzAtNi4wMTItNC42NjktMTAuOTAzLTEwLjQwOC0xMC45MDNIMTY1LjM2Yy01LjczOSwwLTEwLjQwOCw0Ljg5MS0xMC40MDgsMTAuOTAzXHJcblx0XHRcdHY3OS45MDJoLTQ4Ljg1VjMyMC42NzVsOTUuMDEyLTgwLjkzMmw5NS4wMTIsODAuOTMyVjQ1My42MTN6XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L2c+XHJcbiAgICA8ZyBpZD1cIkxheWVyXzJcIj48L2c+XHJcbiAgPC9zdmc+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZVZpZXcgPSAoKSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIHg9XCIwcHhcIlxyXG4gICAgeT1cIjBweFwiXHJcbiAgICB2aWV3Qm94PVwiMCAwIDY3OC4zNTIgNjU2Ljk4M1wiXHJcbiAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcclxuICA+XHJcbiAgICA8ZyBpZD1cIkxheWVyXzFcIj48L2c+XHJcbiAgICA8ZyBpZD1cIkxheWVyXzJcIj5cclxuICAgICAgPGc+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIHN0eWxlPXt7IGZpbGw6ICcjNzc5Q0MxJyB9fVxyXG4gICAgICAgICAgZD1cIk01NTkuMzY1LDIyMy42NXYtOTQuNDkxYzAtMTIuOTU1LTUuMDczLTI1LjE2Ni0xNC4yODMtMzQuMzg1XHJcblx0XHRcdGMtOS4yMTUtOS4yMDgtMjEuNDI2LTE0LjI3OS0zNC4zODItMTQuMjc5SDM0OC4yODZoLTIuODM0di0yLjgzNVY2My43MzljMC0xNi4yMTktNi4zNS0zMS40OTYtMTcuODc5LTQzLjAxN1xyXG5cdFx0XHRDMzE2LjAzOCw5LjE4NywzMDAuNzU5LDIuODM1LDI4NC41NDksMi44MzVINjkuMTU2Yy0xNi4yMTEsMC0zMS40OTEsNi4zNTItNDMuMDI2LDE3Ljg4N0MxNC42MDEsMzIuMjUyLDguMjUsNDcuNTI5LDguMjUsNjMuNzM5XHJcblx0XHRcdHYxMDkuOTE2YzAsMTYuMjUsNi4zNDcsMzEuNTI2LDE3Ljg3LDQzLjAxNWM4LjE2OCw4LjIwNywxOC4zOTIsMTMuODc0LDI5LjU3MywxNi4zOTVsMi4yMTEsMC40OTl2Mi4yNjd2MzQuODQ0XHJcblx0XHRcdGMwLDYuMTgyLDUuMDQ3LDExLjIxMSwxMS4yNTEsMTEuMjExYzMuMDE0LDAsNS44NDQtMS4xNzUsNy45NjktMy4zMDhsNDMuMTg3LTQzLjE4NmwwLjgzLTAuODNoMS4xNzRoMTMxLjcxMWgyLjE0OGwwLjU4MSwyLjA2OVxyXG5cdFx0XHRjMi4yNTUsOC4wMzYsNi41NTQsMTUuNDA2LDEyLjQzLDIxLjMxNWM5LjE4Miw5LjI3LDIxLjQwMywxNC4zNzIsMzQuNDE5LDE0LjM3Mmg1Ny42NzZjNi4xNzcsMCwxMS4yMDItNS4wMjgsMTEuMjAyLTExLjIwOFxyXG5cdFx0XHRjMC02LjItNS4wMjUtMTEuMjQzLTExLjIwMi0xMS4yNDNoLTU3LjY3NmMtNy4wMTEsMC0xMy41OTYtMi43MzctMTguNTQxLTcuNzA4Yy0wLjk0OC0wLjk1MS0xLjgzMy0xLjk5My0yLjYyOS0zLjA5NmwtMy4yMy00LjQ3OFxyXG5cdFx0XHRsNS41MjEtMC4wMTVjMTYuMTc4LTAuMDQ1LDMxLjM5MS02LjM5NSw0Mi44MzctMTcuODc5YzExLjUzOC0xMS41MDEsMTcuODg4LTI2Ljc3OCwxNy44ODgtNDMuMDI1di02Ny44ODF2LTIuODM1aDIuODM0aDE2Mi40MTNcclxuXHRcdFx0YzYuOTY0LDAsMTMuNTM3LDIuNzM3LDE4LjUwNyw3LjcwN2M0Ljk2OSw0Ljk3LDcuNzA2LDExLjU0Miw3LjcwNiwxOC41MDV2OTQuNDkxYzAsNi45NjUtMi43MzcsMTMuNTM4LTcuNzA2LDE4LjUwN1xyXG5cdFx0XHRjLTQuOTcsNC45Ny0xMS41NDMsNy43MDctMTguNTA3LDcuNzA3Yy02LjIsMC0xMS4yNDQsNS4wNDQtMTEuMjQ0LDExLjI0M3YxMy4zNTl2Ni44NDNsLTQuODM5LTQuODM5bC0yMy4yMzgtMjMuMjM4XHJcblx0XHRcdGMtMi4xNDUtMi4xNzgtNC45NzktMy4zNjgtNy45OTYtMy4zNjhoLTU3LjY3NGMtNi4yLDAtMTEuMjQ0LDUuMDQ0LTExLjI0NCwxMS4yNDNjMCw2LjE4LDUuMDQ0LDExLjIwOCwxMS4yNDQsMTEuMjA4aDUxLjgzaDEuMTc0XHJcblx0XHRcdGwwLjgzLDAuODNsNDMuMjIxLDQzLjIyOGMyLjExNSwyLjExMSw0LjkzNSwzLjI3NSw3LjkzNywzLjI3NWMzLjAwNCwwLDUuODI0LTEuMTY1LDcuOTM5LTMuMjhcclxuXHRcdFx0YzIuMTA3LTIuMTA4LDMuMjY4LTQuOTI4LDMuMjY4LTcuOTM4di0zNS4yNDN2LTIuMTQybDIuMDYtMC41ODVjNy45MjktMi4yNTEsMTUuMjMxLTYuNTQ5LDIxLjExOS0xMi40M1xyXG5cdFx0XHRDNTU0LjI5MywyNDguODE3LDU1OS4zNjUsMjM2LjYwNiw1NTkuMzY1LDIyMy42NXogTTMyMywxNzMuNjU1YzAsMTAuMjE2LTQuMDE1LDE5Ljg1OC0xMS4zMDcsMjcuMTQ5XHJcblx0XHRcdGMtNy4yODMsNy4yODktMTYuOTIzLDExLjMwNC0yNy4xNDQsMTEuMzA0SDExNi40NzNjLTIuOTc5LDAtNS43OTksMS4xNzYtNy45NDEsMy4zMTJsLTIzLjMzNiwyMy4zMWwtNC44MzgsNC44MzJ2LTYuODM4di0xMy4zNjdcclxuXHRcdFx0YzAtNi4yMDMtNS4wMjUtMTEuMjQ5LTExLjIwMi0xMS4yNDljLTEwLjIxNiwwLTE5Ljg1OC00LjAxMi0yNy4xNTEtMTEuMjk2Yy03LjI4OC03LjI5Ni0xMS4zLTE2LjkzNy0xMS4zLTI3LjE1VjYzLjczOVxyXG5cdFx0XHRjMC0xMC4yMiw0LjAxMi0xOS44NjEsMTEuMjk2LTI3LjE0NmM3LjI5OS03LjI5MiwxNi45NDMtMTEuMzA2LDI3LjE1Ni0xMS4zMDZoMjE1LjM5M2MxMC4yMTUsMCwxOS44NTYsNC4wMTUsMjcuMTQ2LDExLjMwNVxyXG5cdFx0XHRDMzE4Ljk4NSw0My44ODEsMzIzLDUzLjUyMiwzMjMsNjMuNzM5VjE3My42NTV6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBzdHlsZT17eyBmaWxsOiAnIzA1NEI5MycgfX1cclxuICAgICAgICAgIGQ9XCJNNjc1LjUxNyw1NzYuNzgyYzAtNi4xODEtNS4wMjgtMTEuMjA5LTExLjIwOC0xMS4yMDljLTYuMiwwLTExLjI0NCw1LjAyOS0xMS4yNDQsMTEuMjA5djUyLjA3OVxyXG5cdFx0XHR2Mi44MzVoLTIuODM0SDU0NS4zNjNoLTIuODM0di0yLjgzNXYtNzkuODQ2di0wLjk1bDAuNTcyLTAuNzU4bDMyLjMyNi00Mi44MzRjMS44MTEtMi4zODksMi41ODEtNS4zMzgsMi4xNy04LjMwOFxyXG5cdFx0XHRjLTAuNDEtMi45NjktMS45NTMtNS42MDMtNC4zNDQtNy40MTVjLTEuOTY0LTEuNDc5LTQuMjkxLTIuMjY0LTYuNzIxLTIuMjY0Yy0wLjUyNCwwLTEuMDU2LDAuMDM3LTEuNTgxLDAuMTExXHJcblx0XHRcdGMtMi45NjIsMC40MTUtNS41ODUsMS45NjMtNy4zODYsNC4zNTlsLTM0LjkxNyw0Ni4xOTJjLTAuNjk0LDAuOTI1LTEuNDUyLDEuOTg4LTIuMjU1LDMuMTE0bC0wLjA3MiwwLjFcclxuXHRcdFx0Yy0zLjQ2Myw0Ljg2MS03Ljc3NSwxMC45MTMtMTIuMTI2LDEzLjA4OWMtMi44NjQsMS40NTEtNS4xNTUsMS43MzYtOC4xMzgsMS43MzZoLTgwLjY2NmMtNC40NTEsMC04LjYzOC0xLjczNi0xMS43ODgtNC44OVxyXG5cdFx0XHRjLTMuMTUxLTMuMTQ5LTQuODg2LTcuMzM3LTQuODg2LTExLjc5MmMwLTQuNDE2LDEuNzMtOC41OTksNC44NzItMTEuNzc5YzMuMTQ0LTMuMTQsNy4zMzEtNC44NjEsMTEuODAzLTQuODYxaDY3LjUzNFxyXG5cdFx0XHRjMy40NzQsMCw2LjgyMy0xLjY4Miw4Ljk1OC00LjQ5OWw1Mi42ODgtNjkuNzgyYzEuNjgxLTIuMjExLDMuNzQtMy44OTcsNi4xMjUtNS4wMThjMS4xNTktMC41MzMsMi4zMjktMC45MzUsMy41LTEuMjA0XHJcblx0XHRcdGwxLjI1LTAuMjg3bDEuMDQxLDAuNzQ5YzEwLjkzMiw3Ljg2NiwyMy44NDEsMTIuMDI0LDM3LjMzMSwxMi4wMjRjMTIuODg1LDAsMjUuMzA4LTMuODM0LDM1LjkyNi0xMS4wODdsMS4xOTctMC44MThsMS4zNjMsMC40OTJcclxuXHRcdFx0YzQuMTgzLDEuNTA4LDcuOTE1LDQuMTAxLDEwLjc5Myw3LjQ5N2MzLjg0OCw0LjU0Miw1Ljk2NywxMC4zMTYsNS45NjcsMTYuMjU2djY2LjE1NmMwLDYuMTgxLDUuMDQ0LDExLjIxLDExLjI0NCwxMS4yMVxyXG5cdFx0XHRjNi4xOCwwLDExLjIwOC01LjAyOSwxMS4yMDgtMTEuMjFWNDY2LjE5YzAtMTEuMjIxLTQuMDItMjIuMTM5LTExLjMxOS0zMC43NDJjLTMuMDQzLTMuNTcyLTYuNTM4LTYuNjU5LTEwLjM4Mi05LjE3bC0yLjI4LTEuNDlcclxuXHRcdFx0bDEuMzk3LTIuMzM4YzUuOTE2LTkuODk2LDkuMDQ1LTIxLjIyOCw5LjA1MS0zMi43NzF2LTU2LjczOWMwLTEwLjg1NS00LjI2MS0yMS4xMTktMTEuOTk4LTI4Ljg5OVxyXG5cdFx0XHRjLTcuNzU2LTcuNzItMTguMDE2LTExLjk3OC0yOC44NzgtMTEuOTc4aC00Ni42MjFjLTEwLjg1NiwwLTIxLjEyLDQuMjYzLTI4Ljg5OSwxMi4wMDNjLTcuNzIyLDcuNzYtMTEuOTgsMTguMDE4LTExLjk4LDI4Ljg3NFxyXG5cdFx0XHR2NTYuNzRjMCwxMC45MjUsMi44MjcsMjEuNzMxLDguMTc0LDMxLjI0OGwxLjMxNiwyLjM0M2wtMi4yNywxLjQzOWMtMy44ODgsMi40NjYtNy4zMDgsNS42MTktMTAuMTYzLDkuMzdsLTQ4LjQ1Myw2NC4xNjVcclxuXHRcdFx0bC0wLjg1MSwxLjEyNmgtMS40MTJoLTMyLjloLTIuODM0di0yLjgzNXYtMzUuNTQxYzAtMTEuMzY0LTUuOTE1LTIyLjQ1Ni0xNy4xMDQtMzIuMDc3Yy02Ljk4OS02LjAxNi0xNi4zMjktMTEuNi0yNy4wMS0xNi4xNDhcclxuXHRcdFx0bC0yLjM4Mi0xLjAxNGwwLjc5NS0yLjQ2NGMyLjA0OS02LjM1MSwzLjA4OC0xMi45NSwzLjA4OC0xOS42MTN2LTg2LjM2OWMwLTYuMjAzLTUuMDQ0LTExLjI0OS0xMS4yNDQtMTEuMjQ5aC03Ni4yNDlcclxuXHRcdFx0Yy0xMC44NTQsMC0yMS4xMiw0LjI2My0yOC45MDUsMTIuMDA0Yy03LjcxNyw3Ljc1NS0xMS45NzMsMTguMDEzLTExLjk3MywyOC44NzN2NTYuNzRjMCw3LjE3NCwxLjE3NywxNC4yMTEsMy41LDIwLjkxNVxyXG5cdFx0XHRsMC44NDMsMi40MzRsLTIuMzQyLDEuMDcyYy05LjgzOSw0LjUwMi0xOC40NzQsOS45NDEtMjQuOTcxLDE1LjcyOGMtMTAuNTQ2LDkuNDE3LTE2LjEyMiwyMC4xOTgtMTYuMTIyLDMxLjE3NHYzNS41MzR2Mi44MzVcclxuXHRcdFx0aC0yLjgzNGgtMzIuOTAxaC0xLjQxMmwtMC44NTEtMS4xMjZsLTQ4LjQ2NS02NC4xOGMtMi44MDMtMy42OTgtNi4yMTgtNi44NTItMTAuMTQ3LTkuMzdsLTIuMjUxLTEuNDQzbDEuMzA5LTIuMzMxXHJcblx0XHRcdGM1LjMzOC05LjUwOSw4LjE2LTIwLjMxMiw4LjE2LTMxLjI0MXYtNTYuNzRjMC0xMC44OTUtNC4yNi0yMS4xNTctMTEuOTk2LTI4Ljg5NmMtNy43NjctNy43Mi0xOC4wMjctMTEuOTc1LTI4Ljg4NS0xMS45NzVINTcuMjUyXHJcblx0XHRcdGMtMTAuODM2LDAtMjEuMDg3LDQuMjU4LTI4Ljg2NCwxMS45OWMtNy43MjQsNy43MjMtMTEuOTgsMTcuOTgyLTExLjk4LDI4Ljg4MXY1Ni43NGMwLDExLjU3OCwzLjEyNywyMi45MTEsOS4wNDIsMzIuNzc1XHJcblx0XHRcdGwxLjQwNCwyLjM0MWwtMi4yODYsMS40OTFjLTMuNzE2LDIuNDI0LTcuMTIxLDUuMzk4LTEwLjExOSw4LjgzOWMtNy40ODcsOC42NjUtMTEuNjE0LDE5LjcwMS0xMS42MTQsMzEuMDY0djY2LjE2M1xyXG5cdFx0XHRjMCw2LjE3OCw1LjA0NywxMS4yMDMsMTEuMjUxLDExLjIwM2M2LjE3NiwwLDExLjIwMS01LjAyNiwxMS4yMDEtMTEuMjAzVjQ2Ni4xOWMwLTUuOTk0LDIuMTY3LTExLjgyMyw2LjEtMTYuNDEyXHJcblx0XHRcdGMyLjg4Ni0zLjMyMiw2LjU3LTUuODQ3LDEwLjY2Ny03LjMxNmwxLjM1OC0wLjQ4N2wxLjE5MywwLjgxMmMxMC42MzEsNy4yMzcsMjMuMDY5LDExLjA2MiwzNS45NywxMS4wNjJcclxuXHRcdFx0YzEzLjQ1NiwwLDI2LjM1LTQuMTU4LDM3LjI4OC0xMi4wMjVsMS4wNDItMC43NDlsMS4yNSwwLjI4OGMzLjgzNywwLjg4NCw3LjI1MSwzLjA4OSw5LjYxNSw2LjIwOWw1Mi43MDIsNjkuOFxyXG5cdFx0XHRjMi4xMjUsMi44MTQsNS40NzQsNC40OTUsOC45NTYsNC40OTVoNjcuNTY3YzQuNDM3LDAsOC42MTQsMS43MDksMTEuNzYyLDQuODEzYzMuMTU1LDMuMTkzLDQuODc4LDcuMzg0LDQuODc4LDExLjgyN1xyXG5cdFx0XHRjMCw0LjQ4MS0xLjcxNSw4LjY2My00LjgyOSwxMS43NzVjLTMuMjA0LDMuMTY4LTcuMzk1LDQuOTA2LTExLjgxMiw0LjkwNmgtODEuMjUxYy0yLjg5NiwwLTUuMTctMC41MjgtNy42MDUtMS43NjZcclxuXHRcdFx0Yy0yLjI1LTEuMTA2LTQuMjIyLTIuNzQxLTUuODI2LTQuODQyYy0yLjU2NS0zLjQyNS01LjkzMi03LjkxNC05LjM2MS0xMi40NDdsLTM0LjExMy00NS4xNjZcclxuXHRcdFx0Yy0xLjgxMS0yLjQwNi00LjQ0My0zLjk1Ny03LjQxNi00LjM3MmMtMC41MjItMC4wNzMtMS4wNTMtMC4xMS0xLjU3NS0wLjExYy0yLjQzOCwwLTQuNzU5LDAuNzgyLTYuNzEzLDIuMjYzXHJcblx0XHRcdGMtMi40MSwxLjgxMi0zLjk2LDQuNDQzLTQuMzc1LDcuNDE2Yy0wLjQxNSwyLjk2OCwwLjM1Miw1LjkxNSwyLjE1OCw4LjI5OWwzMi4zNzUsNDIuODQzbDAuNTczLDAuNzU4djAuOTUxdjc5Ljg0NXYyLjgzNWgtMi44MzRcclxuXHRcdFx0SDI4LjEyMWgtMi44MzR2LTIuODM1di01Mi4wNzljMC02LjE4MS01LjAyOC0xMS4yMDktMTEuMjA4LTExLjIwOWMtNi4yLDAtMTEuMjQ0LDUuMDI5LTExLjI0NCwxMS4yMDl2NjYuMTU3XHJcblx0XHRcdGMwLDYuMTgxLDUuMDQ0LDExLjIwOSwxMS4yNDQsMTEuMjA5aDY1MC4yM2M2LjE4LDAsMTEuMjA4LTUuMDI5LDExLjIwOC0xMS4yMDlWNTc2Ljc4MnogTTU1Ni4wNjIsMzQyLjA2NnYtOS4xMjVcclxuXHRcdFx0YzAtNC44NiwxLjkzNC05LjQ3MSw1LjQ0NC0xMi45ODJjMy41MS0zLjUxLDguMTItNS40NDMsMTIuOTgtNS40NDNINjIxLjFjNC44NTksMCw5LjQ2OCwxLjkzMywxMi45NzksNS40NDNcclxuXHRcdFx0YzMuNTEyLDMuNTEzLDUuNDQ2LDguMTIzLDUuNDQ2LDEyLjk4MnY0Ny42NjZ2Mi4zNjdsLTIuMzI5LDAuNDIyYy0yLjg0MiwwLjUxNS01LjU1NiwwLjg0MS04LjA2NywwLjk3MVxyXG5cdFx0XHRjLTAuNzg0LDAuMDM5LTEuNTU4LDAuMDU4LTIuMzA2LDAuMDU4Yy03LjE3OCwwLTEzLjAwNy0xLjc1OS0xNy4zMjUtNS4yMjdjLTQuMTc5LTMuMzcxLTcuMzY4LTguNTk0LTkuNDgyLTE1LjUyN1xyXG5cdFx0XHRjLTEuNjEtNS4yMzQtMi42MTItMTEuNDE1LTIuOTc2LTE4LjM2NGMtMC4yODgtNS45OTYtNS4xOTEtMTAuNjgyLTExLjE2NC0xMC42ODJjLTAuMTc5LDAtMC4zNTgsMC4wMDQtMC41MzgsMC4wMTNcclxuXHRcdFx0Yy0zLjE0NiwwLjEzOC01LjE5LDEuMzQ5LTcuMjk2LDMuMTI1Yy0xLjMyMiwxLjE1NC04LjYyNiw3LjA2Ni0xOS4xMjYsNy4xMzdsLTIuODU0LDAuMDE5VjM0Mi4wNjZ6IE01NTYuMDYyLDM3MC4xMTN2LTIuODIzXHJcblx0XHRcdGwyLjgyMy0wLjAxMWM1LjA1Ny0wLjAyLDEwLjE1My0wLjgzNSwxNS4xNDUtMi40MjFsMi44NTYtMC45MDdsMC43NDcsMi45MDJjMC4yODQsMS4xMDMsMC42MDUsMi4yNTUsMC45NTUsMy40MjJcclxuXHRcdFx0YzMuNDc1LDExLjMwNSw5LjE1NiwyMC4xODIsMTYuODc4LDI2LjM2NGM4LjM5MSw2Ljc3MywxOC44NzMsMTAuMjA0LDMxLjE2MiwxMC4yMDRjMS4xNTcsMCwyLjM0NS0wLjAzMSwzLjUzMy0wLjA5MVxyXG5cdFx0XHRjMC4yODUtMC4wMTMsMC41NTUtMC4wMjcsMC44MjctMC4wNDNsNS4zNDgtMC4zMTNsLTIuNzUsNC41OThjLTEuNzgsMi45NzctMy45MDgsNS43MTItNi4zMjYsOC4xMzFcclxuXHRcdFx0Yy03LjkwOCw3LjkxNS0xOC4zNjcsMTIuMjc0LTI5LjQ1LDEyLjI3NGMtMTEuMTA0LDAtMjEuNTczLTQuMzYtMjkuNDgtMTIuMjc3Yy03LjkxMS03LjkwMy0xMi4yNjktMTguMzU5LTEyLjI2OS0yOS40NFYzNzAuMTEzelxyXG5cdFx0XHQgTTEyMi4yODYsMzcwLjExNHYxOS41NjdjMCwxMS4wNzctNC4zNTcsMjEuNTMzLTEyLjI2OSwyOS40NDRjLTcuOTA0LDcuOTE0LTE4LjM2LDEyLjI3Mi0yOS40NDEsMTIuMjcyXHJcblx0XHRcdGMtMTEuMDc4LDAtMjEuNTQxLTQuMzYzLTI5LjQ2LTEyLjI4NmMtMi40Mi0yLjQwMy00LjU1OC01LjEzNi02LjM0Ni04LjExNmwtMi43NTQtNC41OTNsNS4zNDYsMC4zMDVcclxuXHRcdFx0YzAuMjYyLDAuMDE1LDAuNTIyLDAuMDI5LDAuNzgxLDAuMDRjMS4yMjksMC4wNjMsMi40MzUsMC4wOTUsMy42MDcsMC4wOTVjMTIuMjk2LDAsMjIuNzc3LTMuNDI5LDMxLjE1NC0xMC4xOTNcclxuXHRcdFx0YzcuNzE2LTYuMjA4LDEzLjM4Ny0xNS4wODEsMTYuODU4LTI2LjM3NWMwLjM0OS0xLjExOCwwLjY2Ny0yLjIzMywwLjk3NC0zLjQyM2wwLjc1LTIuOTAzbDIuODU3LDAuOTEyXHJcblx0XHRcdGM0Ljk3MywxLjU4NywxMC4wNiwyLjQwMSwxNS4xMTgsMi40MmwyLjgyNCwwLjAxVjM3MC4xMTR6IE0xMjIuMjkyLDM0Mi4wNjZ2Mi44NTVsLTIuODU0LTAuMDJcclxuXHRcdFx0Yy0xMC45MS0wLjA3OC0xOC40MzItNi41MjMtMTkuMjU0LTcuMjU3Yy0yLjIyLTEuOTQ4LTQuNDI5LTIuODgtNy4xNDYtMy4wMDRjLTAuMTgyLTAuMDA5LTAuMzYtMC4wMTMtMC41MzctMC4wMTNcclxuXHRcdFx0Yy01Ljk4Ni0wLjAwMS0xMC45LDQuNjg4LTExLjE4OCwxMC42NzNjLTAuMzI1LDYuOS0xLjMxMywxMy4wNzktMi45MzgsMTguMzY0Yy0yLjE3LDYuOTY2LTUuMzY4LDEyLjE4Ny05LjUwOCwxNS41MjZcclxuXHRcdFx0Yy00LjMzMSwzLjQ3OC0xMC4xOCw1LjI0LTE3LjM5LDUuMjRjLTAuNzIzLDAtMS40NjktMC4wMTgtMi4yMTktMC4wNTNjLTIuNTU2LTAuMTM3LTUuMjY1LTAuNDY1LTguMDcxLTAuOTc2bC0yLjMyNi0wLjQyNHYtMi4zNjVcclxuXHRcdFx0di00Ny42N2MwLTQuODc5LDEuOTE4LTkuNDg3LDUuNC0xMi45NzdjMy41MTYtMy41MTQsOC4xMjYtNS40NDgsMTIuOTg0LTUuNDQ4aDQ2LjYyYzQuODgxLDAsOS41MDMsMS45MzMsMTMuMDE1LDUuNDQzXHJcblx0XHRcdGMzLjQ5LDMuNDkyLDUuNDEyLDguMTAyLDUuNDEyLDEyLjk4MlYzNDIuMDY2eiBNMjk1LjY4MiwzMzUuOTZ2LTMuMDE5YzAtNC44ODIsMS45MjMtOS40OTMsNS40MTYtMTIuOTg0XHJcblx0XHRcdGMzLjUtMy41MDgsOC4xMjEtNS40NDEsMTMuMDEtNS40NDFoNjIuMTcxaDIuODM0djIuODM1djE4LjYwOXYyLjgzNWgtMi44MzRoLTc3Ljc2MmgtMi44MzRWMzM1Ljk2eiBNMjk1LjY4MiwzNjQuMDgydi0yLjgzNVxyXG5cdFx0XHRoMi44MzRoNzcuNzU1aDIuODM0djIuODM1djI1LjZjMCwxMS4wNzgtNC4zNTgsMjEuNTM4LTEyLjI3MiwyOS40NTFjLTcuODY2LDcuOTA4LTE4LjMyNCwxMi4yNjYtMjkuNDQyLDEyLjI2NlxyXG5cdFx0XHRjLTExLjA4LDAtMjEuNTM3LTQuMzYtMjkuNDQ1LTEyLjI3NmMtNy45MDktNy45MDgtMTIuMjY1LTE4LjM2NC0xMi4yNjUtMjkuNDQxVjM2NC4wODJ6IE0yNTkuMzk2LDQ5OS4zNzZsLTIuODA2LTAuMDI4di0yLjgwNlxyXG5cdFx0XHR2LTM1LjU0M2MwLTQuNTU4LDIuODkyLTkuNDMzLDguNTk3LTE0LjQ5MWM1LjQ4My00LjkxOCwxMy4yNzktOS41NjEsMjIuNTMyLTEzLjQxNWwxLjgwMi0wLjc1MWwxLjM0NCwxLjQxN1xyXG5cdFx0XHRjMC4zOTgsMC40MTksMC44LDAuODMzLDEuMjA2LDEuMjM5YzEyLjExNSwxMi4xNTksMjguMjEsMTguODUzLDQ1LjMyNSwxOC44NTNjMTcuMDk1LDAsMzMuMjAzLTYuNjk0LDQ1LjM1Ny0xOC44NDhcclxuXHRcdFx0YzAuNzAzLTAuNzA0LDEuNDIxLTEuNDYxLDIuMTM0LTIuMjUxbDEuMzEyLTEuNDUzbDEuODIzLDAuNzEyYzkuOTI1LDMuODc2LDE4LjQwMyw4LjY5NCwyNC41MTYsMTMuOTM0XHJcblx0XHRcdGM2LjAzNSw1LjE3OSw5LjIyNCwxMC4zODUsOS4yMjQsMTUuMDU1djM1LjU0NHYyLjgwNGwtMi44MDQsMC4wM2MtMTAuMjc5LDAuMTEtMTkuOTUsNC4xODEtMjcuMjMyLDExLjQ2NFxyXG5cdFx0XHRjLTcuMzk2LDcuMzkxLTExLjQ2OSwxNy4yMTctMTEuNDY5LDI3LjY2OGMwLDQuNDAzLDAuNzM0LDguNzQ4LDIuMTgyLDEyLjkxN2wxLjMwOCwzLjc2NWgtMy45ODVIMjk4LjZoLTMuOTk0bDEuMzE4LTMuNzdcclxuXHRcdFx0YzEuNDYzLTQuMTg2LDIuMjA1LTguNTMsMi4yMDUtMTIuOTEyYzAtMTAuNDUxLTQuMDcyLTIwLjI3NS0xMS40NjYtMjcuNjY0QzI3OS4zNzcsNTAzLjU1MSwyNjkuNjk0LDQ5OS40NzgsMjU5LjM5Niw0OTkuMzc2elxyXG5cdFx0XHQgTTUyMC4wNzYsNTgwLjQ3NnY0OC4zODZ2Mi44MzVoLTIuODM0SDE2MS4xNTJoLTIuODM0di0yLjgzNXYtNDguMzg2di0yLjgzNWgyLjgzNGgzNTYuMDg5aDIuODM0VjU4MC40NzZ6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxnPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgc3R5bGU9e3sgZmlsbDogJyMwNTRCOTMnIH19XHJcbiAgICAgICAgICAgIGQ9XCJNMjY3LjY3Nyw1NS44NjhIODYuMDI3Yy02LjE4LDAtMTEuMjA4LDUuMDI5LTExLjIwOCwxMS4yMWMwLDYuMTk5LDUuMDI4LDExLjI0MiwxMS4yMDgsMTEuMjQyXHJcblx0XHRcdFx0aDE4MS42NDljNi4xODEsMCwxMS4yMDktNS4wNDMsMTEuMjA5LTExLjI0MkMyNzguODg2LDYwLjg5NywyNzMuODU3LDU1Ljg2OCwyNjcuNjc3LDU1Ljg2OHpcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZpbGw6ICcjMDU0QjkzJyB9fVxyXG4gICAgICAgICAgICBkPVwiTTI2Ny42NzcsMTA3LjQ5MUg4Ni4wMjdjLTYuMTgsMC0xMS4yMDgsNS4wMjgtMTEuMjA4LDExLjIwOWMwLDYuMiw1LjAyOCwxMS4yNDMsMTEuMjA4LDExLjI0M1xyXG5cdFx0XHRcdGgxODEuNjQ5YzYuMTgxLDAsMTEuMjA5LTUuMDQ0LDExLjIwOS0xMS4yNDNDMjc4Ljg4NiwxMTIuNTIsMjczLjg1NywxMDcuNDkxLDI2Ny42NzcsMTA3LjQ5MXpcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZpbGw6ICcjMDU0QjkzJyB9fVxyXG4gICAgICAgICAgICBkPVwiTTE3Ni44NTIsMTU5LjA3M0g4Ni4wMjdjLTYuMTgsMC0xMS4yMDgsNS4wNDctMTEuMjA4LDExLjI1YzAsNi4yLDUuMDI4LDExLjI0MywxMS4yMDgsMTEuMjQzXHJcblx0XHRcdFx0aDkwLjgyNGM2LjIsMCwxMS4yNDQtNS4wNDQsMTEuMjQ0LTExLjI0M0MxODguMDk1LDE2NC4xMiwxODMuMDUxLDE1OS4wNzMsMTc2Ljg1MiwxNTkuMDczelwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9nPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGFyaWFsQ29udHJhY3QgPSAoKSA9PiAoXHJcbiAgPHN2Z1xyXG4gICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIHg9XCIwcHhcIlxyXG4gICAgeT1cIjBweFwiXHJcbiAgICB2aWV3Qm94PVwiMCAwIDY1OC44NjYgNjQ4LjQ3OVwiXHJcbiAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcclxuICA+XHJcbiAgICA8ZyBpZD1cIkxheWVyXzFcIj5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBzdHlsZT17eyBmaWxsOiAnIzc3OUNDMScgfX1cclxuICAgICAgICBkPVwiTTQxLjk3Myw1ODMuMTIzaDI2My45NzJjNjcuODQ3LDIxLjc5NiwxNDIuMDE0LDkuOTY5LDE5OS43MjEtMzEuODQ1bDg3Ljk0LDg3Ljk0XHJcblx0XHRjNS4yMTgsNS4yOTUsMTIuMzUzLDguMjY4LDE5Ljc4MSw4LjI0OGgwLjExMmM3LjM1Ni0wLjAwNywxNC4zOTktMi45NjYsMTkuNTUyLTguMjE0bDExLjk0NC0xMS45MzlcclxuXHRcdGM1LjI4My01LjIwNSw4LjI1NC0xMi4zMDYsOC4yNjgtMTkuNzE2YzAuMDEzLTcuNDE3LTIuOTQ2LTE0LjUzMS04LjIxNC0xOS43NDhsLTg3Ljk0MS04Ny45NDFcclxuXHRcdGM0Mi42OTEtNTkuMDQ4LDU0LjA4MS0xMzUuMTM0LDMwLjU2MS0yMDQuMDk4Yy0yMy41MTItNjguOTY2LTc5LjAxOC0xMjIuMjQxLTE0OC44OTMtMTQyLjkwNlY5NC4xOTVcclxuXHRcdGMwLjAyNy01LjY3NC0yLjIzMi0xMS4xMi02LjI1LTE1LjEybC02OC44MjItNjguODIyYy00LTQuMDE4LTkuNDQ2LTYuMjc3LTE1LjEyLTYuMjVINDEuOTczXHJcblx0XHRjLTE3Ljc2NCwwLTMyLjE3MSwxNC40MDctMzIuMTcxLDMyLjE3MXY1MTQuNzY4QzkuODAyLDU2OC43MTUsMjQuMjA5LDU4My4xMjMsNDEuOTczLDU4My4xMjNMNDEuOTczLDU4My4xMjN6IE02MjkuODgzLDYwMy4wMTVcclxuXHRcdGMxLjIzNywxLjIxLDEuOTMsMi44NjcsMS45Myw0LjYwMWMtMC4wMTMsMS42ODktMC43MDcsMy4yOTktMS45Myw0LjQ3MWwtMTIuMDExLDEyLjA2M2MtMS4xNTgsMS4xOTEtMi43NDMsMS44NjUtNC40MDUsMS44NjVcclxuXHRcdGMtMS43MjEsMC0zLjM3MS0wLjctNC41ODEtMS45M2wtODYuMjUyLTg2LjI0NmM3LjQ3NS02LjU1OSwxNC41MTgtMTMuNTk1LDIxLjA4My0yMS4wN0w2MjkuODgzLDYwMy4wMTV6IE01NzguMTkxLDM2OC42MzVcclxuXHRcdGMwLDgyLjQwOC00OS42NDIsMTU2LjcwOC0xMjUuNzg3LDE4OC4yNTFjLTc2LjE0LDMxLjUzOC0xNjMuNzc4LDE0LjEwNi0yMjIuMDU1LTQ0LjE2OVxyXG5cdFx0Yy01OC4yNzUtNTguMjc1LTc1LjcxMi0xNDUuOTIyLTQ0LjE2OS0yMjIuMDYxYzMxLjUzNi03Ni4xNDUsMTA1LjgzNi0xMjUuNzg3LDE4OC4yNTMtMTI1Ljc4N1xyXG5cdFx0QzQ4Ni45MTQsMTY0Ljk5Myw1NzguMDY3LDI1Ni4xNDgsNTc4LjE5MSwzNjguNjM1TDU3OC4xOTEsMzY4LjYzNXogTTM2My43MDQsNDAuNjA3bDM4LjQ4OSwzOC40NjloLTI3Ljc1OVxyXG5cdFx0Yy01LjkyNSwwLTEwLjcyOS00LjgwNC0xMC43MjktMTAuNzI5VjQwLjYwN3ogTTMxLjI1MiwzNi4xNzVjMC01LjkyNCw0Ljc5Ny0xMC43MjEsMTAuNzIxLTEwLjcyMWgzMDAuMjh2NDIuODkyXHJcblx0XHRjMCwxNy43NzIsMTQuNDA4LDMyLjE4LDMyLjE4LDMyLjE4aDQyLjg5MnY0Ny4xMDhDMzA5Ljk4NSwxMjYuNjQ4LDIwMy4xLDE4NS45MTQsMTY0LjA0MywyODguMDc3XHJcblx0XHRjLTM5LjA1OCwxMDIuMTY1LDEuMDI3LDIxNy42MTcsOTQuOTg5LDI3My41OTVINDEuOTczYy01LjkyNCwwLTEwLjcyMS00LjgwNC0xMC43MjEtMTAuNzI5VjM2LjE3NXogTTMxLjI1MiwzNi4xNzVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIHN0eWxlPXt7IGZpbGw6ICcjNzc5Q0MxJyB9fVxyXG4gICAgICAgIGQ9XCJNODIuNTcyLDc2Ljc3NGgyMTYuNDg5YzUuOTc5LDAsMTAuODIxLTQuODQ5LDEwLjgyMS0xMC44MjljMC01Ljk3Mi00Ljg0Mi0xMC44MjEtMTAuODIxLTEwLjgyMVxyXG5cdFx0SDgyLjU3MmMtNS45NzksMC0xMC44MjksNC44NDktMTAuODI5LDEwLjgyMUM3MS43NDIsNzEuOTI1LDc2LjU5Myw3Ni43NzQsODIuNTcyLDc2Ljc3NEw4Mi41NzIsNzYuNzc0eiBNODIuNTcyLDc2Ljc3NFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgc3R5bGU9e3sgZmlsbDogJyM3NzlDQzEnIH19XHJcbiAgICAgICAgZD1cIk04Mi41NzIsMTMwLjg5NmgyMTYuNDg5YzUuOTc5LDAsMTAuODIxLTQuODQ5LDEwLjgyMS0xMC44MjljMC01Ljk3Mi00Ljg0Mi0xMC44MjEtMTAuODIxLTEwLjgyMVxyXG5cdFx0SDgyLjU3MmMtNS45NzksMC0xMC44MjksNC44NDktMTAuODI5LDEwLjgyMUM3MS43NDIsMTI2LjA0Nyw3Ni41OTMsMTMwLjg5Niw4Mi41NzIsMTMwLjg5Nkw4Mi41NzIsMTMwLjg5NnogTTgyLjU3MiwxMzAuODk2XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBzdHlsZT17eyBmaWxsOiAnIzc3OUNDMScgfX1cclxuICAgICAgICBkPVwiTTgyLjU3MiwxODUuMDE4aDExOS4wNjZjNS45NzksMCwxMC44MjktNC44NDksMTAuODI5LTEwLjgyOWMwLTUuOTcyLTQuODUxLTEwLjgyMS0xMC44MjktMTAuODIxXHJcblx0XHRIODIuNTcyYy01Ljk3OSwwLTEwLjgyOSw0Ljg0OS0xMC44MjksMTAuODIxQzcxLjc0MiwxODAuMTY5LDc2LjU5MywxODUuMDE4LDgyLjU3MiwxODUuMDE4TDgyLjU3MiwxODUuMDE4eiBNODIuNTcyLDE4NS4wMThcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIHN0eWxlPXt7IGZpbGw6ICcjNzc5Q0MxJyB9fVxyXG4gICAgICAgIGQ9XCJNODIuNTcyLDIzOS4xNDFoNjQuOTQzYzUuOTc5LDAsMTAuODMtNC44NDksMTAuODMtMTAuODNjMC01Ljk3Mi00Ljg1MS0xMC44MjEtMTAuODMtMTAuODIxSDgyLjU3MlxyXG5cdFx0Yy01Ljk3OSwwLTEwLjgyOSw0Ljg0OS0xMC44MjksMTAuODIxQzcxLjc0MiwyMzQuMjkyLDc2LjU5MywyMzkuMTQxLDgyLjU3MiwyMzkuMTQxTDgyLjU3MiwyMzkuMTQxeiBNODIuNTcyLDIzOS4xNDFcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIHN0eWxlPXt7IGZpbGw6ICcjNzc5Q0MxJyB9fVxyXG4gICAgICAgIGQ9XCJNODIuNTcyLDI5My4yNjNoNDMuMjkzYzUuOTgsMCwxMC44MjktNC44NDksMTAuODI5LTEwLjgzYzAtNS45NzItNC44NDktMTAuODIxLTEwLjgyOS0xMC44MjFcclxuXHRcdEg4Mi41NzJjLTUuOTc5LDAtMTAuODI5LDQuODQ5LTEwLjgyOSwxMC44MjFDNzEuNzQyLDI4OC40MTQsNzYuNTkzLDI5My4yNjMsODIuNTcyLDI5My4yNjNMODIuNTcyLDI5My4yNjN6IE04Mi41NzIsMjkzLjI2M1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgc3R5bGU9e3sgZmlsbDogJyM3NzlDQzEnIH19XHJcbiAgICAgICAgZD1cIk04Mi41NzIsMzQ3LjM4NWgzMi40NzJjNS45NzksMCwxMC44MjEtNC44NDksMTAuODIxLTEwLjgzYzAtNS45NzItNC44NDItMTAuODIxLTEwLjgyMS0xMC44MjFcclxuXHRcdEg4Mi41NzJjLTUuOTc5LDAtMTAuODI5LDQuODQ5LTEwLjgyOSwxMC44MjFDNzEuNzQyLDM0Mi41MzYsNzYuNTkzLDM0Ny4zODUsODIuNTcyLDM0Ny4zODVMODIuNTcyLDM0Ny4zODV6IE04Mi41NzIsMzQ3LjM4NVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgc3R5bGU9e3sgZmlsbDogJyM3NzlDQzEnIH19XHJcbiAgICAgICAgZD1cIk04Mi41NzIsNDAxLjUwN2gzMi40NzJjNS45NzksMCwxMC44MjEtNC44NDksMTAuODIxLTEwLjgyOWMwLTUuOTcyLTQuODQyLTEwLjgyMS0xMC44MjEtMTAuODIxXHJcblx0XHRIODIuNTcyYy01Ljk3OSwwLTEwLjgyOSw0Ljg0OS0xMC44MjksMTAuODIxQzcxLjc0MiwzOTYuNjU4LDc2LjU5Myw0MDEuNTA3LDgyLjU3Miw0MDEuNTA3TDgyLjU3Miw0MDEuNTA3eiBNODIuNTcyLDQwMS41MDdcIlxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIHN0eWxlPXt7IGZpbGw6ICcjNzc5Q0MxJyB9fVxyXG4gICAgICAgIGQ9XCJNODIuNTcyLDQ1NS42M2g0My4yOTNjNS45OCwwLDEwLjgyOS00Ljg0OSwxMC44MjktMTAuODI5YzAtNS45NzItNC44NDktMTAuODIxLTEwLjgyOS0xMC44MjFcclxuXHRcdEg4Mi41NzJjLTUuOTc5LDAtMTAuODI5LDQuODQ5LTEwLjgyOSwxMC44MjFDNzEuNzQyLDQ1MC43ODEsNzYuNTkzLDQ1NS42Myw4Mi41NzIsNDU1LjYzTDgyLjU3Miw0NTUuNjN6IE04Mi41NzIsNDU1LjYzXCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBzdHlsZT17eyBmaWxsOiAnIzc3OUNDMScgfX1cclxuICAgICAgICBkPVwiTTgyLjU3Miw1MDkuNzUyaDY0Ljk0M2M1Ljk3OSwwLDEwLjgzLTQuODQ5LDEwLjgzLTEwLjgyOWMwLTUuOTcyLTQuODUxLTEwLjgyMS0xMC44My0xMC44MjFIODIuNTcyXHJcblx0XHRjLTUuOTc5LDAtMTAuODI5LDQuODQ5LTEwLjgyOSwxMC44MjFDNzEuNzQyLDUwNC45MDMsNzYuNTkzLDUwOS43NTIsODIuNTcyLDUwOS43NTJMODIuNTcyLDUwOS43NTJ6IE04Mi41NzIsNTA5Ljc1MlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxnPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBzdHlsZT17eyBmaWxsOiAnIzA1NEI5MycgfX1cclxuICAgICAgICAgIGQ9XCJNNTQ1LjUwMiwzNDQuNDgybC02Mi4wMjgtNTIuOTdsLTAuMDAxLTcwLjY5OWMtMC4xMDktNi4yMjctNS4wNjMtMTEuMjc2LTExLjQxMi0xMS40OTZoLTM1LjQ5NlxyXG5cdFx0XHRjLTYuMDY1LDAtMTEuMTksNS4yOTQtMTEuMTksMTEuNTYydjIxLjI1bC00NC42NC0zOC4wNThjLTQuMTY4LTMuNjA0LTEwLjI4Mi0zLjYxNy0xNC41NTctMC4wMTlMMjAxLjQ2MSwzNDQuMzQ3XHJcblx0XHRcdGMtNC43NTUsMy44NzItNS40MzEsMTAuOTQ0LTEuNTA3LDE1Ljc2NWMxLjg5OSwyLjMzMyw0LjU5NywzLjc2NCw3LjYwMSw0LjAyOWMwLjMzNSwwLjAyOSwwLjY2OSwwLjA0NCwxLjAwMiwwLjA0NFxyXG5cdFx0XHRjMi41OTksMCw1LjExMS0wLjg5Myw3LjE2NC0yLjU2NGwwLjI4NC0wLjI1N2wxNTcuNDM5LTEzNC4wNTVsNTQuODE3LDQ2LjcxMWwzNC4yMywyOS4xMDdsNjguNTMxLDU4LjM2XHJcblx0XHRcdGMyLjI3MiwxLjk0OCw1LjE2MSwyLjksOC4xNDcsMi42NThjMi45NzUtMC4yMzMsNS42ODUtMS42MTMsNy42NjUtMy45MjNDNTUwLjc0NywzNTUuNTI2LDU1MC4xNDgsMzQ4LjQ2NSw1NDUuNTAyLDM0NC40ODJ6XHJcblx0XHRcdCBNNDYxLjAxOSwyNzIuNDEybC0xMy4yNjItMTEuMTc5di0yOS40NjJoMTMuMjYyVjI3Mi40MTJ6XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBzdHlsZT17eyBmaWxsOiAnIzA1NEI5MycgfX1cclxuICAgICAgICAgIGQ9XCJNNTEyLjc0OCwzNTkuNDc5bC0yMC44NjctMTcuODIyaDAuMDAxbC0xMTEuMTQ4LTk0Ljk2MmMtNC4xNjctMy42MDQtMTAuMjgxLTMuNjE4LTE0LjU2Mi0wLjAxNVxyXG5cdFx0XHRMMjM0LjEzNywzNTkuNDgyYy00LjY4OCw0LjAxOC01LjIzOCwxMS4wOTYtMS4yNTksMTUuNzM4YzEuOTA0LDIuMjg0LDQuNTc5LDMuNjgsNy41MzIsMy45MzFcclxuXHRcdFx0YzIuOTQ0LDAuMjQ1LDUuODA2LTAuNjY5LDguMDUyLTIuNTg4bDMuMTQ3LTIuNzI5bDAuMDAxLDEzMS4wNzZjMC4xMTIsNi4xNDUsNS4yLDExLjIzNCwxMS40MTIsMTEuMzQ0bDIyMC44MzgtMC4wMDFcclxuXHRcdFx0YzYuMjUyLTAuMTEyLDExLjIzNi01LjA5NiwxMS4zNDYtMTEuNDEyVjM3My44MzRsMy4xMDgsMi42ODZjMi4wODQsMS43MzYsNC41NjEsMi42NTQsNy4xNjIsMi42NTRcclxuXHRcdFx0YzMuMjU1LDAsNi4zNS0xLjQyMyw4LjQ5Ny0zLjkwN2MxLjk4NC0yLjMwNSwyLjkzOS01LjIyNSwyLjY5LTguMjIyQzUxNi40MTcsMzY0LjA2Myw1MTUuMDE0LDM2MS4zNjUsNTEyLjc0OCwzNTkuNDc5elxyXG5cdFx0XHQgTTM5OS4zODQsNDkzLjgwMWgtNTEuODc3VjQyMS4xM2g1MS44NzdWNDkzLjgwMXogTTQ3Mi45LDQ5My44MDFoLTUxLjEzNHYtODMuNjM4YzAtNi4yOTMtNC44ODgtMTEuNDEzLTEwLjg5NC0xMS40MTNoLTc0Ljg1MlxyXG5cdFx0XHRjLTYuMDA3LDAtMTAuODk0LDUuMTItMTAuODk0LDExLjQxM3Y4My42MzhoLTUxLjEzNFYzNTQuNjQ4bDk5LjQ1NS04NC43MTZsOTkuNDU1LDg0LjcxNlY0OTMuODAxelwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9nPlxyXG4gICAgPGcgaWQ9XCJMYXllcl8yXCI+PC9nPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBheW1lbnRQdXJjaGFzZSA9ICgpID0+IChcclxuICA8c3ZnXHJcbiAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgeD1cIjBweFwiXHJcbiAgICB5PVwiMHB4XCJcclxuICAgIHZpZXdCb3g9XCIwIDAgNTc5LjgyMSA2NTMuNzMxXCJcclxuICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxyXG4gID5cclxuICAgIDxnIGlkPVwiTGF5ZXJfMVwiPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIHN0eWxlPXt7IGZpbGw6ICcjNzc5Q0MxJyB9fVxyXG4gICAgICAgIGQ9XCJNMjQ0LjA0NSwzMjguNjNsMS40MywzLjQwM2MxMS4xODQsMjYuNjE3LDM0LjE3Niw0My4xNTEsNjAuMDA1LDQzLjE1MVxyXG5cdFx0YzEyLjA0OSwwLDIzLjgwOS0zLjY3NywzNC4wMTEtMTAuNjMyYzQuODkxLTMuMzQ3LDYuMTYtMTAuMDQ4LDIuODE5LTE0LjkzMWMtMy4zMzktNC45MS0xMC4wNTMtNi4xNy0xNC45NzMtMi44MjdcclxuXHRcdGMtNi42ODIsNC41NjEtMTQuMDM2LDYuODczLTIxLjg1Nyw2Ljg3M2MtMTEuOTksMC0yMy4yNDItNS42NjgtMzEuNjgyLTE1Ljk2bC03LjQ0NS05LjA3OGgyOS44MThcclxuXHRcdGM1LjkzMSwwLDEwLjc1Ny00LjgyNSwxMC43NTctMTAuNzU3YzAtNS45MzItNC44MjYtMTAuNzU5LTEwLjc1Ny0xMC43NTloLTM1LjQzOGwtMC4yODItNS4yNThcclxuXHRcdGMtMC4wNTItMC45NjQtMC4wNzctMS44MTYtMC4wNzctMi42MDVjMC0wLjc5LDAuMDI1LTEuNjQzLDAuMDc3LTIuNjA2bDAuMjgyLTUuMjU4aDQ0Ljc0N2M1LjkzMywwLDEwLjc2LTQuODI2LDEwLjc2LTEwLjc1OVxyXG5cdFx0YzAtNS45MzItNC44MjctMTAuNzU5LTEwLjc2LTEwLjc1OWgtMzkuMTI4bDcuNDQ2LTkuMDc4YzguNDQxLTEwLjI5MSwxOS42OTMtMTUuOTU4LDMxLjY4Mi0xNS45NThcclxuXHRcdGM3LjgyNCwwLDE1LjE4NSwyLjMxOCwyMS44NzgsNi44OWMyLjM4NCwxLjYyLDUuMjY1LDIuMjE2LDguMDk5LDEuNjcxYzIuODE0LTAuNTQsNS4yNC0yLjEzLDYuODMxLTQuNDc3XHJcblx0XHRjMy4zNjEtNC45MTIsMi4wOTEtMTEuNjI0LTIuODE1LTE0Ljk4MmMtMTAuMTg4LTYuOTQ1LTIxLjk0NC0xMC42MTktMzMuOTkyLTEwLjYxOWMtMjUuODI5LDAtNDguODIxLDE2LjUzNC02MC4wMDUsNDMuMTVcclxuXHRcdGwtMS40MywzLjQwM2gtMTMuMDVjLTUuOTMyLDAtMTAuNzU4LDQuODI2LTEwLjc1OCwxMC43NTljMCw1LjkzMyw0LjgyNiwxMC43NTksMTAuNzU4LDEwLjc1OWg4LjIzMmwtMC4zMTMsNS44NTJcclxuXHRcdGMtMC4wMzUsMC42NTYtMC4wNTYsMS4zMjYtMC4wNTYsMi4wMTJjMCwwLjY4NSwwLjAyLDEuMzU1LDAuMDU2LDIuMDExbDAuMzEyLDUuODUyaC04LjIzMWMtNS45MzIsMC0xMC43NTgsNC44MjYtMTAuNzU4LDEwLjc1OVxyXG5cdFx0YzAsNS45MzIsNC44MjYsMTAuNzU3LDEwLjc1OCwxMC43NTdIMjQ0LjA0NXpcIlxyXG4gICAgICAvPlxyXG4gICAgPC9nPlxyXG4gICAgPGcgaWQ9XCJMYXllcl8yXCI+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgc3R5bGU9e3sgZmlsbDogJyM3NzlDQzEnIH19XHJcbiAgICAgICAgZD1cIk0yOTYuNTU1LDE0My4wMTJjLTQxLjkzNywwLjA0Ni04MS4zNjMsMTYuNDAyLTExMS4wMTcsNDYuMDU3XHJcblx0XHRjLTI5LjY1MywyOS42NTQtNDYuMDExLDY5LjA4MS00Ni4wNjEsMTExLjAxOXYwLjAwM2MwLDg2LjYxMyw3MC40NjYsMTU3LjA3OSwxNTcuMDgsMTU3LjA3OXMxNTcuMDgtNzAuNDY2LDE1Ny4wOC0xNTcuMDc5XHJcblx0XHRDNDUzLjYzOCwyMTMuNDc4LDM4My4xNzIsMTQzLjAxMiwyOTYuNTU1LDE0My4wMTJ6IE0yOTYuNTU3LDQzMC4yMjdjLTcxLjc1NywwLTEzMC4xMzUtNTguMzc4LTEzMC4xMzUtMTMwLjEzMlxyXG5cdFx0YzAuMDgtNzEuNjc3LDU4LjQ1OS0xMzAuMDU3LDEzMC4xMzYtMTMwLjE0YzcxLjc1NywwLjAwMSwxMzAuMTM1LDU4LjM4LDEzMC4xMzUsMTMwLjEzN1xyXG5cdFx0QzQyNi42OTQsMzcxLjg0OSwzNjguMzE1LDQzMC4yMjcsMjk2LjU1Nyw0MzAuMjI3elwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgc3R5bGU9e3sgZmlsbDogJyMwNTRCOTMnIH19XHJcbiAgICAgICAgZD1cIk01NzYuOTc1LDQ5Ny42MTJMNTc2Ljk3NSw0OTcuNjEyYy0xNC45NC0yNi41MDktNDcuOTQtMzYuNTc3LTc1LjEyNC0yMi45MjRsLTgwLjYxMywzOC4wOVxyXG5cdFx0bC0wLjQ5OC0wLjgxM2MtMTIuNjAxLTIwLjU2My0zNC41MDctMzMuMjQ0LTU4LjU5OC0zMy45MjZsLTc2LjkxNC0yLjExN2MtMTEuNjM2LTAuMzM1LTIzLjI0OC0zLjMzMi0zMy41ODMtOC42NjhsLTcuODIxLTQuMDU0XHJcblx0XHRjLTM4LjUwMy0yMC4wNzEtODUuMDMtMjEuMTkzLTEyNC40NjItMi45OTdsLTEuNTU1LDAuNzE4bDAuMzM4LTEyLjQwMWMwLjEwMy0zLjY5My0xLjIzOC03LjIwNC0zLjc3NS05Ljg4NlxyXG5cdFx0Yy0yLjUzOC0yLjY4NS01Ljk3MS00LjIxOS05LjY2NC00LjMxOWwtODQuMzQ4LTIuMzE5Yy0zLjY4NS0wLjA4Ny03LjIwMywxLjI0My05Ljg4NCwzLjc3OWMtMi42ODIsMi41MzktNC4yMTQsNS45Ny00LjMxNCw5LjY2MVxyXG5cdFx0TDEuMDY4LDYzMC41MzFjLTAuMTAyLDMuNjg3LDEuMjQzLDcuMTk1LDMuNzg0LDkuODgyYzIuNTQyLDIuNjg2LDUuOTcxLDQuMjIxLDkuNjU1LDQuMzIxbDg0LjczMiwyLjMyN1xyXG5cdFx0YzcuNTQzLDAsMTMuNjE1LTUuOTA2LDEzLjgxOS0xMy40NDZsMC4xOTMtNy4wMDhsMjAuMjg5LTEwLjg2NmM1LjA3NC0yLjcyOSwxMC42NDYtNC4xMTcsMTYuMjcxLTQuMTE3XHJcblx0XHRjMy4xNDYsMCw2LjMwOCwwLjQzNCw5LjQwOCwxLjMxMmwxMzAuNzk1LDM2LjcxMmMwLjMxNCwwLjA5MywwLjYxMiwwLjE2MywwLjk2NCwwLjI0YzkuNjIzLDIuMDEsMTkuNDkzLDMuMDMsMjkuMzI3LDMuMDNcclxuXHRcdGwwLjE2OCwwLjAwMWMyMC43MzMtMC4wMDEsNDEuNjY0LTQuNTcyLDYwLjUwNy0xMy4yMjFjMC42MDItMC4yNzMsMS4xODQtMC41OTQsMS43MzYtMC45NTRsMTg5LjcyOC0xMjIuNzIxXHJcblx0XHRDNTc4LjU3NSw1MTIuMDU3LDU4MC41NjUsNTAzLjk3LDU3Ni45NzUsNDk3LjYxMnogTTg1Ljc5Myw2MTkuMDQxbC01Ni43MDItMS41NjZsNC4zMy0xNTcuNDU2bDU2LjcwOCwxLjU1OEw4NS43OTMsNjE5LjA0MXpcclxuXHRcdCBNMzY4LjQ4Miw2MTUuMDE3Yy0xNS4yMzQsNi44MjctMzEuNDY0LDEwLjI4Ny00Ny44NjEsMTAuMjg3Yy03LjgyNSwwLTE1LjY4OC0wLjc4OC0yMy40OTktMi4zNzNsLTEzMC40MTktMzYuNjA3XHJcblx0XHRjLTE1LjU2Mi00LjM5Ny0zMS45NzYtMi42MDUtNDYuMjIyLDUuMDUybC02LjM1LDMuNDAybDIuOC0xMDEuNzcxbDAuNDc2LTAuMzA0YzM0LjE4Mi0yMS43ODgsNzcuNzQ5LTIzLjY4NywxMTMuNjk4LTQuOTUxXHJcblx0XHRsNy44MzEsNC4wNTljMTQuMDA2LDcuMjMxLDI5Ljc1LDExLjI5Nyw0NS41MzEsMTEuNzU1bDc2LjkxNiwyLjExN2MxOC4yNzQsMC41MjYsMzMuOTA5LDEyLjAwMiwzOS44MzMsMjkuMjM0bDAuNDk5LDEuNDVcclxuXHRcdGwtMTEwLjM5My0zLjA0N2MtNy42NTktMC4xODUtMTMuOTg3LDUuODMtMTQuMjAyLDEzLjQ0NGMtMC4yMDMsNy42Miw1LjgyOSwxMy45OSwxMy40NDYsMTQuMTk5bDEyNi40NDcsMy40OGwwLjM5MywwLjAwMVxyXG5cdFx0YzcuNTM2LTAuMDA3LDEzLjYwMy01LjkxNCwxMy44MDYtMTMuNDQ3YzAuMTAzLTMuNzY4LTAuMDkzLTcuNTU2LTAuNTgyLTExLjI2MWwtMC4xMDItMC43NjlsODMuMjEzLTM5LjMyMVxyXG5cdFx0YzAuMTY0LTAuMDczLDAuMzA2LTAuMTQ0LDAuMzktMC4xODhjOC45Ni00LjUzMiwxOS44NjgtNC4xMDUsMjguNDc5LDEuMTFsMS40NTIsMC44OEwzNjguNDgyLDYxNS4wMTd6XCJcclxuICAgICAgLz5cclxuICAgICAgPGc+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIHN0eWxlPXt7IGZpbGw6ICcjMDU0QjkzJyB9fVxyXG4gICAgICAgICAgZD1cIk0yOTYuNTU3LDBjLTguMjEsMC0xNC44ODksNi42NzktMTQuODg5LDE0Ljg4OXYxMDEuMDQ5YzAsOC4yMDksNi42NzksMTQuODg5LDE0Ljg4OSwxNC44ODlcclxuXHRcdFx0czE0Ljg5LTYuNjc5LDE0Ljg5LTE0Ljg4OVYxNC44ODlDMzExLjQ0Nyw2LjY3OSwzMDQuNzY3LDAsMjk2LjU1NywwelwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgc3R5bGU9e3sgZmlsbDogJyMwNTRCOTMnIH19XHJcbiAgICAgICAgICBkPVwiTTM3Ni4zMzMsNTMuMTg1Yy04LjIxLDAtMTQuODg5LDYuNjgtMTQuODg5LDE0Ljg5djQ3Ljg2M2MwLDguMjA5LDYuNjc5LDE0Ljg4OSwxNC44ODksMTQuODg5XHJcblx0XHRcdHMxNC44OS02LjY3OSwxNC44OS0xNC44ODlWNjguMDc1QzM5MS4yMjMsNTkuODY0LDM4NC41NDMsNTMuMTg1LDM3Ni4zMzMsNTMuMTg1elwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgc3R5bGU9e3sgZmlsbDogJyMwNTRCOTMnIH19XHJcbiAgICAgICAgICBkPVwiTTIxNi43NzcsNTMuMTg1Yy04LjIwNiwwLTE0Ljg4Myw2LjY4LTE0Ljg4MywxNC44OXY0Ny44NjNjMCw4LjIwOSw2LjY3NywxNC44ODksMTQuODgzLDE0Ljg4OVxyXG5cdFx0XHRjOC4yMSwwLDE0Ljg5LTYuNjc5LDE0Ljg5LTE0Ljg4OVY2OC4wNzVDMjMxLjY2Nyw1OS44NjQsMjI0Ljk4Nyw1My4xODUsMjE2Ljc3Nyw1My4xODV6XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L2c+XHJcbiAgPC9zdmc+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgUmVxdWVzdE9mZmVyID0gKCkgPT4gKFxyXG4gIDxzdmdcclxuICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICB4PVwiMHB4XCJcclxuICAgIHk9XCIwcHhcIlxyXG4gICAgdmlld0JveD1cIjAgMCA2NDMuNSA2NDFcIlxyXG4gICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXHJcbiAgPlxyXG4gICAgPGcgaWQ9XCJMYXllcl8xXCI+XHJcbiAgICAgIDxnPlxyXG4gICAgICAgIDxnPlxyXG4gICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgIDxyZWN0XHJcbiAgICAgICAgICAgICAgaWQ9XCJTVkdJRF81X1wiXHJcbiAgICAgICAgICAgICAgeD1cIjkwLjc4MlwiXHJcbiAgICAgICAgICAgICAgeT1cIjEuODI2XCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjQ2MS40MzJcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjQxMS42NjVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgPGNsaXBQYXRoIGlkPVwiU1ZHSURfMl9cIj5cclxuICAgICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIjU1ZHSURfNV9cIiBzdHlsZT17eyBvdmVyZmxvdzogJ3Zpc2libGUnIH19IC8+XHJcbiAgICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgc3R5bGU9e3sgZmlsbDogJyMwNTRCOTMnIH19XHJcbiAgICAgICAgICBkPVwiTTUwOS40MDEsMjE5LjAxM2MtMC4yNDItMi45MjEtMS42MTYtNS41NjQtMy44NjgtNy40NDNsLTI3Ljk0Mi0yMy44NjVMMzI4LjcwNCw2MC40OTlcclxuXHRcdFx0Yy00LjA5NC0zLjU0LTEwLjExMi0zLjU0NC0xNC4zMTYtMC4wMDRMMTY1LjQ5NywxODcuNzA1bC0yNy45NSwyMy44NzFjLTIuMjM2LDEuOTE3LTMuNTk1LDQuNTg1LTMuODI0LDcuNTEyXHJcblx0XHRcdGMtMC4yMywyLjkzLDAuNjk5LDUuNzc1LDIuNjA1LDhjMS44NjMsMi4yMzYsNC40NzksMy42MDIsNy4zNjYsMy44NDdjMi44NzYsMC4yNDgsNS42NzEtMC42NTIsNy45MjctMi41ODNsMTAuNzE3LTkuMjY5djE4NC4xODNcclxuXHRcdFx0YzAuMTA5LDYuMTE1LDUuMTczLDExLjE3OSwxMS4zMDgsMTEuMjg5bDI5NS43MTMtMC4wMDFjNi4yMjItMC4xMTEsMTEuMTgxLTUuMDY5LDExLjI4OS0xMS4zMDdWMjE5LjA4M2wxMC42ODgsOS4yMzVcclxuXHRcdFx0YzIuMDY4LDEuNzIyLDQuNTA1LDIuNjMzLDcuMDQ3LDIuNjMzYzMuMjAyLDAsNi4yNS0xLjQwMyw4LjM2NC0zLjg1MUM1MDguNzAzLDIyNC44MjgsNTA5LjY0NiwyMjEuOTU2LDUwOS40MDEsMjE5LjAxM3pcclxuXHRcdFx0IE0zNjAuMjY1LDM5Mi40MzhoLTc3LjQ0MlYyODcuMTQ2aDc3LjQ0MlYzOTIuNDM4eiBNNDU4LjcyOSwzOTIuNDM4aC03Ni40NDZWMjc2LjQzNWMwLTYuMjM1LTQuNzYxLTExLjMwNy0xMC42MTItMTEuMzA3SDI3MS40MTZcclxuXHRcdFx0Yy01Ljg1MSwwLTEwLjYxMSw1LjA3Mi0xMC42MTEsMTEuMzA3djExNi4wMDJoLTc2LjQ0OFYyMDAuMjQyTDMyMS41NDMsODMuMzg3bDEzNy4xODcsMTE2Ljg1NVYzOTIuNDM4elwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9nPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIHN0eWxlPXt7IGZpbGw6ICcjNzc5Q0MxJyB9fVxyXG4gICAgICAgIGQ9XCJNNjA2Ljg3NiwyNzguNjk0Yy0xOS4xMzUsMC0zNC43MDMsMTUuNTY4LTM0LjcwMywzNC43MDN2MTYuNzU3bC0yLjM2My0wLjgzOFxyXG5cdFx0Yy0zLjcyMy0xLjMyLTcuNjE0LTEuOTktMTEuNTY2LTEuOTljLTE5LjEzNSwwLTM0LjcwMiwxNS41NjctMzQuNzAyLDM0LjcwM3YzOS44MjRsLTEuMTg0LDAuNDE2XHJcblx0XHRjLTQuODg5LDEuNzIxLTkuMjM0LDQuNDUzLTEyLjkwOSw4LjExNWwtMzguMTIxLDM3LjMxMmMtMC4wNjgsMC4wNzMtMC4xNjgsMC4xNzItMC4zMTEsMC4yNzRcclxuXHRcdGMtMzkuNDMsMjguOTktNDQuOTE4LDgzLjM3Ni00NS42MTcsOTMuOTgyYy0wLjAxLDAuMTQtMC4wMjUsMC4yNzEtMC4wNDUsMC4zOTVsLTAuMTU5LDEuMDQ4bDAuMTMsMC4wMjFcclxuXHRcdGMtMC4xMDYsNS40NDgtMC4xODYsMzAuOTM0LTAuMjUxLDUxLjc1MWwtMC4wMTEsMy4xMjVjLTAuMDIyLDcuMjE0LTAuMDQ0LDE0LjA0MS0wLjA2NSwxOS42OTNsLTAuMDAxLDAuMDAyXHJcblx0XHRjLTAuMDI0LDYuMzcyLTAuMDM0LDkuMDA5LDQuNzExLDE1LjIzNGM1LjU1NCw2LjQzLDE2LjMyMyw3LjIwNywxNy41OSw3LjI3NWwxMTAuMTQxLDAuMjFjNS43MjQsMCwxMC4zOC00LjY2LDEwLjM4LTEwLjM4OFxyXG5cdFx0YzAtMjkuMTU2LDguNjQ4LTU5LjYyNywyNC4zNTItODUuODAxbDQwLjk5OS02OC4zMjljNS41MDItOS4xNzIsOC40MS0xOS42NzIsOC40MS0zMC4zNjVWMzEzLjM5N1xyXG5cdFx0QzY0MS41NzksMjk0LjI2Miw2MjYuMDExLDI3OC42OTQsNjA2Ljg3NiwyNzguNjk0eiBNNTQ0LjMxMywzNjIuMDI5YzAtNy42ODEsNi4yNS0xMy45MywxMy45MzEtMTMuOTNzMTMuOTMsNi4yNDksMTMuOTMsMTMuOTNcclxuXHRcdHY0OC42MjljMCwzLjcyMi0xLjQ0OCw3LjIyLTQuMDgsOS44NTFsLTEuNzczLDEuNzczbC0xLjA3OS0yLjI2MmMtMS42OTQtMy41NTQtMy45NzUtNi43NzUtNi43NzctOS41NzhcclxuXHRcdGMtMy42OTYtMy42OTYtOC4wNTktNi40NDYtMTIuOTY3LTguMTc0bC0xLjE4NC0wLjQxNlYzNjIuMDI5eiBNNjIwLjgwNiw0NDUuODI1YzAsNi45My0xLjg4NSwxMy43MzQtNS40NSwxOS42NzdsLTQwLjk5Nyw2OC4zMjlcclxuXHRcdGMtMTUuNTE5LDI1Ljg2NC0yNC44MTUsNTUuMDY4LTI2Ljg4Niw4NC40NTVsLTAuMTE2LDEuNjQ3SDQ0Ni4yMzd2LTYxLjY0MmMwLTM2LjE3NCwxNC4wOC03MC4xODgsMzkuNjM4LTk1Ljc2OWwzNy4zOTgtMzYuNjA0XHJcblx0XHRsMS41ODUtMS41MTJjMi41Mi0yLjE2Nyw1LjctMy4zNSw5LjA2Ny0zLjM1aDAuMDAxYzMuNzI1LDAsNy4yMjIsMS40NDYsOS44NDgsNC4wNzNjMi42MzQsMi42MzQsNC4wODQsNi4xMzEsNC4wODQsOS44NDdcclxuXHRcdGMwLDMuNzE3LTEuNDUsNy4yMTUtNC4wODUsOS44NDlsLTQxLjUwOCw0MS41MDljLTEuOTU5LDEuOTU5LTMuMDM4LDQuNTY3LTMuMDM4LDcuMzQ1YzAsMi43NzYsMS4wNzksNS4zODUsMy4wMzgsNy4zNDNcclxuXHRcdGMxLjk2LDEuOTYzLDQuNTY4LDMuMDQ0LDcuMzQ0LDMuMDQ0czUuMzg0LTEuMDgxLDcuMzQ1LTMuMDQzbDY1LjgyOS02NS44MjdjNi41MzYtNi41MzgsMTAuMTQ1LTE1LjIyOSwxMC4xNi0yNC40NjJsMC4wMDItOTcuMzM4XHJcblx0XHRjMC03LjY4MSw2LjI1LTEzLjkzLDEzLjkzMS0xMy45M3MxMy45Myw2LjI0OSwxMy45MywxMy45M1Y0NDUuODI1elwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgc3R5bGU9e3sgZmlsbDogJyM3NzlDQzEnIH19XHJcbiAgICAgICAgZD1cIk0yMTkuMDE0LDYxNi4wMDRjLTAuMDI2LTYuNTIxLTAuMDUxLTE0LjU4NS0wLjA3OC0yMy4wMDJjLTAuMDY0LTIwLjY0Ni0wLjE0NC00NS45LTAuMjQ5LTUxLjUwNFxyXG5cdFx0bDAuMTU1LTAuMDEzbC0wLjE4Ni0xLjEzNmMtMC4wMi0wLjEyMy0wLjAzNS0wLjI1NS0wLjA0NC0wLjM5NWMtMC43MDEtMTAuNjA4LTYuMTk0LTY0Ljk5Ny00NS42MzctOTMuOTk0bC0wLjE0Ny0wLjEwOFxyXG5cdFx0bC0zOC4yNDEtMzcuNDQxYy0zLjY5Ni0zLjY4MS04LjA0Ny02LjQxOS0xMi45MzQtOC4xMzlsLTEuMTgzLTAuNDE2di0zOS44MjRjMC0xOS4xMzUtMTUuNTY4LTM0LjcwMy0zNC43MDMtMzQuNzAzXHJcblx0XHRjLTMuOTUyLDAtNy44NDMsMC42NjktMTEuNTY2LDEuOTg5bC0yLjM2MywwLjgzOFYzMTEuNGMwLTE5LjEzNS0xNS41NjgtMzQuNzAzLTM0LjcwMy0zNC43MDNTMi40MzIsMjkyLjI2NSwyLjQzMiwzMTEuNHYxMzIuNDI4XHJcblx0XHRjMCwxMC42OTIsMi45MDgsMjEuMTkyLDguNDEsMzAuMzY1bDQwLjk5OCw2OC4zMjljMTUuNzA0LDI2LjE3MSwyNC4zNTIsNTYuNjQzLDI0LjM1Miw4NS44MDFjMCw1LjcyNyw0LjY2LDEwLjM4NywxMC4zODksMTAuMzg3XHJcblx0XHRsMTEwLjE5LTAuMjFjMS4yMTItMC4wNzEsMTIuMDAzLTAuODc3LDE3LjU3My03LjMyNEMyMTkuMDQ5LDYyNC45OTgsMjE5LjAzOSw2MjIuMzY1LDIxOS4wMTQsNjE2LjAwNHogTTcxLjgzOCwzNjAuMDMyXHJcblx0XHRjMC03LjY4MSw2LjI0OS0xMy45MjksMTMuOTMtMTMuOTI5czEzLjkzLDYuMjQ5LDEzLjkzLDEzLjkyOXYzOS44MjNsLTEuMTg0LDAuNDE2Yy00LjkwNiwxLjcyNy05LjI2OSw0LjQ3Ny0xMi45NjYsOC4xNzNcclxuXHRcdGMtMi44MDQsMi44MDUtNS4wODQsNi4wMjctNi43NzYsOS41NzlsLTEuMjYsMi42NDRsLTEuNjQ0LTIuMTkybC0wLjA4OS0wLjEwNGMtMi41NDEtMi42MTItMy45NC02LjA2MS0zLjk0LTkuNzFWMzYwLjAzMnpcclxuXHRcdCBNMTk3Ljc3NCw2MTcuOTM4SDk2LjY1NWwtMC4xMTYtMS42NDhjLTIuMDcxLTI5LjM4Ny0xMS4zNjgtNTguNTkxLTI2Ljg4Ni04NC40NTVsLTQwLjk5OC02OC4zMjlcclxuXHRcdGMtMy41NjUtNS45NDMtNS40NS0xMi43NDctNS40NS0xOS42NzdWMzExLjM5OWMwLTcuNjgxLDYuMjQ5LTEzLjkzLDEzLjkzLTEzLjkzczEzLjkzLDYuMjQ5LDEzLjkzLDEzLjkzbDAuMDAxLDk3LjMzMVxyXG5cdFx0YzAuMDE3LDkuMjQzLDMuNjI2LDE3LjkzNCwxMC4xNjMsMjQuNDcxbDY1LjgyOCw2NS44MjVjMS45NjEsMS45NjMsNC41NywzLjA0NCw3LjM0NSwzLjA0NGMyLjc3NCwwLDUuMzgyLTEuMDgxLDcuMzQ0LTMuMDQyXHJcblx0XHRjNC4wNS00LjA1MSw0LjA1LTEwLjY0LDAtMTQuNjlsLTQxLjUwOS00MS41MDljLTIuNjM0LTIuNjMzLTQuMDg0LTYuMTMtNC4wODQtOS44NDhjMC0zLjcxNiwxLjQ1MS03LjIxNCw0LjA4NC05Ljg0OFxyXG5cdFx0YzIuNjI4LTIuNjI3LDYuMTI1LTQuMDc0LDkuODQ5LTQuMDc0YzMuNzIzLDAsNy4yMiwxLjQ0Nyw5Ljg1Niw0LjA4MmwzOC4xNjQsMzcuMzU0YzI1LjU4MSwyNS42MDQsMzkuNjY5LDU5LjYyNSwzOS42NjksOTUuOFxyXG5cdFx0VjYxNy45Mzh6XCJcclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBzdHlsZT17eyBmaWxsOiAnIzA1NEI5MycgfX1cclxuICAgICAgICBkPVwiTTU0OS40MDEsMTkxLjQ4NWwtODQuNjY1LTcyLjMwMmMwLjA2MS0wLjMxNSwwLjEyMi0wLjY0NSwwLjE4NC0xLjAxMmwwLjAxNC0wLjA4NlYyMi44OTNcclxuXHRcdGMtMC4xMDktNi4yMjMtNS4wNi0xMS4yNjktMTEuMzA4LTExLjQ4OGgtNDcuNTQyYy01Ljk2NywwLTExLjAwOSw1LjI2OS0xMS4wMDksMTEuNTA2djM3LjA4M0wzMjguNzA0LDMuNDA5XHJcblx0XHRjLTQuMDk2LTMuNTQxLTEwLjExMi0zLjU0NC0xNC4zMTUtMC4wMDVMOTMuNzA2LDE5MS4zNjhjLTQuNjY5LDMuODAxLTUuMzE4LDEwLjc2My0xLjQ0NiwxNS41MTlcclxuXHRcdGMxLjg1OCwyLjI4NCw0LjUwMiwzLjY4NCw3LjQ0NCwzLjk0NGMwLjMzLDAuMDI5LDAuNjU5LDAuMDQzLDAuOTg3LDAuMDQzYzIuNTY4LDAsNS4wNTMtMC44ODUsNy4wODctMi41NDFsMC4yMTctMC4yMTNcclxuXHRcdEwzMjEuNTQzLDI2LjI5N2w3NS45OTYsNjQuNzU5bDQ1Ljg1LDM4Ljk4N2w5MS44LDc4LjE3NGMyLjIzNCwxLjkxNiw1LjA3MywyLjg0NCw4LjAxLDIuNjE1YzIuOTI4LTAuMjMsNS41OTYtMS41ODgsNy41MjEtMy44MzVcclxuXHRcdEM1NTQuNTc1LDIwMi4zNzEsNTUzLjk4NCwxOTUuNDEyLDU0OS40MDEsMTkxLjQ4NXogTTQ0Mi44MTUsMTAwLjQ5MmwtMjUuNzIzLTIxLjY4VjMzLjUyM2gyNS43MjNWMTAwLjQ5MnpcIlxyXG4gICAgICAvPlxyXG4gICAgPC9nPlxyXG4gICAgPGcgaWQ9XCJMYXllcl8yXCI+PC9nPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgSWNvbjEgZnJvbSAnLi4vLi4vLi4vcHVibGljL2Fzc2V0cy9pbWFnZXMvcGFydFNhbGUvQ2FwdHVyZTEud2VicCc7XHJcbmltcG9ydCB7IFJlcXVlc3RPZmZlciB9IGZyb20gJy4vSWNvbnMvUmVxdWVzdE9mZmVyJztcclxuaW1wb3J0IHsgRXhwZXJ0T3BpbmlvbiB9IGZyb20gJy4vSWNvbnMvRXhwZXJ0T3Bpbmlvbic7XHJcbmltcG9ydCB7IEhvbWVWaWV3IH0gZnJvbSAnLi9JY29ucy9Ib21lVmlldyc7XHJcbmltcG9ydCB7IEJpbmRpbmdQdXJjaGFzZSB9IGZyb20gJy4vSWNvbnMvQmluZGluZ1B1cmNoYXNlJztcclxuaW1wb3J0IHsgTm90YXJpYWxDb250cmFjdCB9IGZyb20gJy4vSWNvbnMvTm90YXJpYWxDb250cmFjdCc7XHJcbmltcG9ydCB7IFBheW1lbnRQdXJjaGFzZSB9IGZyb20gJy4vSWNvbnMvUGF5bWVudFB1cmNoYXNlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgUmVudGFsU2FsZXNJdGVtcyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0tvc3Rlbmxvc2VzIHVuZCBwZXJzw7ZubGljaGVzIEFuZ2Vib3QgYW5mb3JkZXJuJyxcclxuICAgIG51bWJlcjogMSxcclxuICAgIGltZzogPFJlcXVlc3RPZmZlciAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnRXJzdGVsbHVuZyBkZXMgdW52ZXJiaW5kbGljaGVuIEd1dGFjaHRlbnMgZHVyY2ggZGllIEdOSVcnLFxyXG4gICAgbnVtYmVyOiAyLFxyXG4gICAgaW1nOiA8RXhwZXJ0T3BpbmlvbiAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnUGVyc8O2bmxpY2hlciBCZXNpY2h0aWd1bmdzdGVybWluIGJlaSBJaG5lbiB6dSBIYXVzZScsXHJcbiAgICBudW1iZXI6IDMsXHJcbiAgICBpbWc6IDxIb21lVmlldyAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnUGVyc29uYWxpc2llcnRlcyB1bmQgdmVyYmluZGxpY2hlcyBLYXVmLSB1bmQgTWlldGFuZ2Vib3QnLFxyXG4gICAgbnVtYmVyOiA0LFxyXG4gICAgaW1nOiA8QmluZGluZ1B1cmNoYXNlIC8+LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdOb3RhcmllbGxlciBWZXJ0cmFnc2Fic2NobHVzcyBiZWkgZXJmb2xncmVpY2hlciBBbmdlYm90c2FubmFobWUnLFxyXG4gICAgbnVtYmVyOiA1LFxyXG4gICAgaW1nOiA8Tm90YXJpYWxDb250cmFjdCAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnU29mb3J0YXVzemFobHVuZyBkZXMgdm9sbHN0w6RuZGlnZW4gS2F1ZnByZWlzZXMnLFxyXG4gICAgbnVtYmVyOiA2LFxyXG4gICAgaW1nOiA8UGF5bWVudFB1cmNoYXNlIC8+LFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBTdGVwcyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW51c2VkLWltcG9ydHMvbm8tdW51c2VkLXZhcnNcclxuICBjb25zdCB7IGN0eXBlLCAuLi5yb3V0ZXJRdWVyeSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGNvbnRhY3RPZmZlclVybCA9IGA/JHtuZXcgVVJMU2VhcmNoUGFyYW1zKHtcclxuICAgIC4uLnJvdXRlclF1ZXJ5LFxyXG4gICAgY3R5cGU6ICdvZmZlcicsXHJcbiAgfSkudG9TdHJpbmcoKX0ja29udGFrdGA7XHJcbiAgY29uc3QgY29udGFjdEluZm9VcmwgPSBgPyR7bmV3IFVSTFNlYXJjaFBhcmFtcyh7XHJcbiAgICAuLi5yb3V0ZXJRdWVyeSxcclxuICAgIGN0eXBlOiAnaW5mb3JtYXRpb24nLFxyXG4gIH0pLnRvU3RyaW5nKCl9I2tvbnRha3RgO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdGVwcy1jb250YWluZXIgdGV4dC1jZW50ZXIgc2VjLWNvbnRlbnQtY29udGFpbmVyIG1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBwYi0yNCBwdC0yNFwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwic2VjLW1haW4tdGl0bGVcIj5cclxuICAgICAgICBJbW1vYmlsaWVudmVya2F1ZiBhbiBkaWUgR05JVyBpbiA2IGVpbmZhY2hlbiBTY2hyaXR0ZW5cclxuICAgICAgPC9oMj5cclxuICAgICAgPG9sIGNsYXNzTmFtZT1cInJlbnRhbFNhbGVzLWdyaWRcIj5cclxuICAgICAgICB7UmVudGFsU2FsZXNJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicmVudGFsU2FsZXMtZ3JpZC1pdGVtIHJzLWl0ZW0gbXQtOFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXBzLWdyaWRcIj5cclxuICAgICAgICAgICAgICA8aDM+e2l0ZW0udGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0ZXBzLWljb24tY29udFwiPlxyXG4gICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtpdGVtLmltZy5zcmN9IGFsdD1cIlwiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAge2l0ZW0uaW1nfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtLWFic1wiPntpdGVtLm51bWJlcn08L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvb2w+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RlcC1idXR0b25zLWdyaWQgcHQtMTBcIj5cclxuICAgICAgICA8TGluayBocmVmPXtjb250YWN0SW5mb1VybH0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzdGVwLWJ0biBzdGVwLWJ0bi1saWdodGVyXCI+SW5mb21hdGVyaWFsIGFuZm9yZGVybjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj17Y29udGFjdE9mZmVyVXJsfT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInN0ZXAtYnRuIHN0ZXAtYnRuLWRhcmtlclwiPkFuZ2Vib3QgYW5mb3JkZXJuPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RlcHM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwiY29uc29sZSIsIndhcm4iLCJwIiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwibWFwIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInRoZW4iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZmlsdGVyIiwidiIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsImVudW1lcmFibGUiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInB1c2giLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwibGVuZ3RoIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJsb2NhdGlvbiIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJob3N0bmFtZSIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJSZWFjdCIsIkJpbmRpbmdQdXJjaGFzZSIsIm92ZXJmbG93IiwiZmlsbCIsIkV4cGVydE9waW5pb24iLCJIb21lVmlldyIsIk5vdGFyaWFsQ29udHJhY3QiLCJQYXltZW50UHVyY2hhc2UiLCJSZXF1ZXN0T2ZmZXIiLCJSZW50YWxTYWxlc0l0ZW1zIiwidGl0bGUiLCJudW1iZXIiLCJpbWciLCJTdGVwcyIsImN0eXBlIiwicm91dGVyUXVlcnkiLCJjb250YWN0T2ZmZXJVcmwiLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyIsImNvbnRhY3RJbmZvVXJsIiwiaXRlbSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==