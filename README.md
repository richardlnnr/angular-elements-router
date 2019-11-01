# Angular Elements with router

This project was generated to demonstrate an issue in Angular Elements when you use children routes in a lazy loaded module.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Problem

When we start the application, the following error is displayed on the browser console:
That problem only happen when the component is exported as a Custom Element.

```
Error: No component factory found for ChildAComponent. Did you add it to @NgModule.entryComponents?
    at noComponentFactoryError (main.f23fe886c4ec6dc7c11f.js:1)
    at CodegenComponentFactoryResolver.resolveComponentFactory (main.f23fe886c4ec6dc7c11f.js:1)
    at router_RouterOutlet.activateWith (main.f23fe886c4ec6dc7c11f.js:1)
    at router_RouterOutlet.ngOnInit (main.f23fe886c4ec6dc7c11f.js:1)
    at main.f23fe886c4ec6dc7c11f.js:1
    at main.f23fe886c4ec6dc7c11f.js:1
    at checkAndUpdateNode (main.f23fe886c4ec6dc7c11f.js:1)
    at prodCheckAndUpdateNode (main.f23fe886c4ec6dc7c11f.js:1)
    at Object.updateDirectives (4.0056da0152ee17b4fb13.js:1)
    at Object.updateDirectives (main.f23fe886c4ec6dc7c11f.js:1)
```

```
Error: Uncaught (in promise): Error: No component factory found for ChildAComponent. Did you add it to @NgModule.entryComponents?
Error: No component factory found for ChildAComponent. Did you add it to @NgModule.entryComponents?
    at noComponentFactoryError (main.f23fe886c4ec6dc7c11f.js:1)
    at CodegenComponentFactoryResolver.resolveComponentFactory (main.f23fe886c4ec6dc7c11f.js:1)
    at router_RouterOutlet.activateWith (main.f23fe886c4ec6dc7c11f.js:1)
    at ActivateRoutes.activateRoutes (main.f23fe886c4ec6dc7c11f.js:1)
    at main.f23fe886c4ec6dc7c11f.js:1
    at Array.forEach (<anonymous>)
    at ActivateRoutes.activateChildRoutes (main.f23fe886c4ec6dc7c11f.js:1)
    at ActivateRoutes.activateRoutes (main.f23fe886c4ec6dc7c11f.js:1)
    at main.f23fe886c4ec6dc7c11f.js:1
    at Array.forEach (<anonymous>)
    at resolvePromise (polyfills.3c79a0eafef8c32a399a.js:1)
    at resolvePromise (polyfills.3c79a0eafef8c32a399a.js:1)
    at polyfills.3c79a0eafef8c32a399a.js:1
    at ZoneDelegate.invokeTask (polyfills.3c79a0eafef8c32a399a.js:1)
    at Object.onInvokeTask (main.f23fe886c4ec6dc7c11f.js:1)
    at ZoneDelegate.invokeTask (polyfills.3c79a0eafef8c32a399a.js:1)
    at Zone.runTask (polyfills.3c79a0eafef8c32a399a.js:1)
    at drainMicroTaskQueue (polyfills.3c79a0eafef8c32a399a.js:1)
```
