<a href="https://www.npmjs.com/package/shared-router"><img src="https://img.shields.io/badge/npm-shared--router-brightgreen.svg"></a><a href="https://www.npmjs.com/package/shared-router"><img src="https://img.shields.io/npm/v/shared-router.svg"></a>
# shared-router
Router helper for sharing history between applications

# Synopsys

Dilling with large scalable frontend applications causes a lot of problems. The package targets one of those problems: routing. As you know React has no limitation of instances on one window, which can provide a good chance to start with microfrontend architecture. But when more than one application needs routing you have to think about sharing history, same matching routes, etc. `shared-router` package allows you to avoid all this problems.

# Provided API

## setPrefix

```js
@param {prefix} string ['']
```

Setting a prefix for routes for the applications that have been lazyloaded. Each time calling this function will override previous value. NOTE: call this function after the prefixed routes will be rendered.

## createRouteUrl

```js
@param {path} string
```

Use this function each time you initalize a route path. This will automaticly prefix your routes.

## navigate

```js
@param {url} string
@param {isAbsolute} boolean
@param {state} any
```

This function provides an ability to programaticly navigate to needed route. Let's have an `A` application, with routes `routeA` and `routeB`, and also under second route we are loading another application `B`, with its routes `routeC` and `routeD`(NOTE: both applications need to use this package). So the end user must see following routes:

  - routeA
  - routeB/routeC
  - routeB/routeD

Then after calling `setPrefix(routeB)` in the `A` application, you can easly navigate between `B` routes using `navigate('/routeC')` or `navigate('/routeB')`. The following structure is also relaible for application `B` if its standalone, the only difference is that in example case `navigate` function will prefix it with `routeB`, in the other case it will be just the passed argument.

## history

Use this object to manage the browser history. For example you can pass it to the `react-router-dom` `<Router>` for sharing history between applications.

# Playground

Play with example [here](https://repl.it/repls/CheerfulFreshLocatorprogram)
