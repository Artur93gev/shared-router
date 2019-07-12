# shared-router
Router helper on top of `react-router-dom` package, for sharing history between applications

# Synopsys

Dilling with large scalable frontend applications causes a lot of problems. The package targets one of those problems: routing. As you know React has no limitation of instances on one window, which can provide a good chance to start with microfrontend architecture. But when more than one application needs routing you have to think about sharing history, same matching routes, etc. `shared-router` package allows you to avoid all this problems.

# Technical stack

  - React(v16.): `^5.0.1`
  - react-router-dom: `^16.3.0`

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

## RouteWrapper

```js
React.Element
```

Use this wrapper function for each code segment you want too have access to your router.
