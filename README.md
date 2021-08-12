
# Steps Taken:
- ns create, angular, tabs
- npm install @nativescript/canvas@1.0.0-alpha.0
- built project (no errors)
- added register element and svg import
- added ts function
- added Svg tag to template
- ran project (19 errors below)


## Console Log

ERROR in ./node_modules/@nativescript/canvas/SVG/Circle.js 3:0-35
Module not found: Error: Can't resolve 'xmldom' in '/Users/brianclow/Desktop/ns-svg-test/node_modules/@nativescript/canvas/SVG'
 @ ./node_modules/@nativescript/canvas/SVG/index.js 2:0-34 2:0-34
 @ ./node_modules/@nativescript/canvas/index.js 10:0-22 10:0-22
 @ ./src/app/browse/browse.component.ts 4:0-43 7:29-32
 @ ./src/app/browse/browse.module.ts 4:0-53 11:119-134 16:31-46
 @ ./src/app/app-routing.module.ts 20:28-64
 @ ./src/app/app.module.ts 3:0-56 10:70-86 11:161-177 16:46-62
 @ ./src/main.ts 5:0-45 6:46-55

ERROR in ./node_modules/@nativescript/canvas/SVG/ClipPath.js 2:0-35
Module not found: Error: Can't resolve 'xmldom' in '/Users/brianclow/Desktop/ns-svg-test/node_modules/@nativescript/canvas/SVG'
 @ ./node_modules/@nativescript/canvas/SVG/index.js 14:0-38 14:0-38
 @ ./node_modules/@nativescript/canvas/index.js 10:0-22 10:0-22
 @ ./src/app/browse/browse.component.ts 4:0-43 7:29-32
 @ ./src/app/browse/browse.module.ts 4:0-53 11:119-134 16:31-46
 @ ./src/app/app-routing.module.ts 20:28-64
 @ ./src/app/app.module.ts 3:0-56 10:70-86 11:161-177 16:46-62
 @ ./src/main.ts 5:0-45 6:46-55

ERROR in ./node_modules/@nativescript/canvas/SVG/Defs.js 2:0-35
Module not found: Error: Can't resolve 'xmldom' in '/Users/brianclow/Desktop/ns-svg-test/node_modules/@nativescript/canvas/SVG'
 @ ./node_modules/@nativescript/canvas/SVG/index.js 11:0-30 11:0-30
 @ ./node_modules/@nativescript/canvas/index.js 10:0-22 10:0-22
 @ ./src/app/browse/browse.component.ts 4:0-43 7:29-32
 @ ./src/app/browse/browse.module.ts 4:0-53 11:119-134 16:31-46
 @ ./src/app/app-routing.module.ts 20:28-64
 @ ./src/app/app.module.ts 3:0-56 10:70-86 11:161-177 16:46-62
 @ ./src/main.ts 5:0-45 6:46-55

ERROR in ./node_modules/@nativescript/canvas/SVG/Ellipse.js 15:0-35
Module not found: Error: Can't resolve 'xmldom' in '/Users/brianclow/Desktop/ns-svg-test/node_modules/@nativescript/canvas/SVG'
 @ ./node_modules/@nativescript/canvas/SVG/index.js 6:0-36 6:0-36
 @ ./node_modules/@nativescript/canvas/index.js 10:0-22 10:0-22
 @ ./src/app/browse/browse.component.ts 4:0-43 7:29-32
 @ ./src/app/browse/browse.module.ts 4:0-53 11:119-134 16:31-46
 @ ./src/app/app-routing.module.ts 20:28-64
 @ ./src/app/app.module.ts 3:0-56 10:70-86 11:161-177 16:46-62
 @ ./src/main.ts 5:0-45 6:46-55

ERROR in ./node_modules/@nativescript/canvas/SVG/G.js 2:0-35
Module not found: Error: Can't resolve 'xmldom' in '/Users/brianclow/Desktop/ns-svg-test/node_modules/@nativescript/canvas/SVG'
 @ ./node_modules/@nativescript/canvas/SVG/index.js 3:0-24 3:0-24
 @ ./node_modules/@nativescript/canvas/index.js 10:0-22 10:0-22
 @ ./src/app/browse/browse.component.ts 4:0-43 7:29-32
 @ ./src/app/browse/browse.module.ts 4:0-53 11:119-134 16:31-46
 @ ./src/app/app-routing.module.ts 20:28-64
 @ ./src/app/app.module.ts 3:0-56 10:70-86 11:161-177 16:46-62
 @ ./src/main.ts 5:0-45 6:46-55

ERROR in ./node_modules/@nativescript/canvas/SVG/Image.js 25:0-35
Module not found: Error: Can't resolve 'xmldom' in '/Users/brianclow/Desktop/ns-svg-test/node_modules/@nativescript/canvas/SVG'
 @ ./node_modules/@nativescript/canvas/SVG/index.js 17:0-32 17:0-32
 @ ./node_modules/@nativescript/canvas/index.js 10:0-22 10:0-22
 @ ./src/app/browse/browse.component.ts 4:0-43 7:29-32
 @ ./src/app/browse/browse.module.ts 4:0-53 11:119-134 16:31-46
 @ ./src/app/app-routing.module.ts 20:28-64
 @ ./src/app/app.module.ts 3:0-56 10:70-86 11:161-177 16:46-62
 @ ./src/main.ts 5:0-45 6:46-55

ERROR in ./node_modules/@nativescript/canvas/SVG/Line.js 15:0-35
Module not found: Error: Can't resolve 'xmldom' in '/Users/brianclow/Desktop/ns-svg-test/node_modules/@nativescript/canvas/SVG'
 @ ./node_modules/@nativescript/canvas/SVG/index.js 7:0-30 7:0-30
 @ ./node_modules/@nativescript/canvas/index.js 10:0-22 10:0-22
 @ ./src/app/browse/browse.component.ts 4:0-43 7:29-32
 @ ./src/app/browse/browse.module.ts 4:0-53 11:119-134 16:31-46
 @ ./src/app/app-routing.module.ts 20:28-64
 @ ./src/app/app.module.ts 3:0-56 10:70-86 11:161-177 16:46-62
 @ ./src/main.ts 5:0-45 6:46-55

ERROR in ./node_modules/@nativescript/canvas/SVG/LinearGradient.js 2:0-35
Module not found: Error: Can't resolve 'xmldom' in '/Users/brianclow/Desktop/ns-svg-test/node_modules/@nativescript/canvas/SVG'
 @ ./node_modules/@nativescript/canvas/SVG/index.js 16:0-50 16:0-50
 @ ./node_modules/@nativescript/canvas/index.js 10:0-22 10:0-22
 @ ./src/app/browse/browse.component.ts 4:0-43 7:29-32
 @ ./src/app/browse/browse.module.ts 4:0-53 11:119-134 16:31-46
 @ ./src/app/app-routing.module.ts 20:28-64
 @ ./src/app/app.module.ts 3:0-56 10:70-86 11:161-177 16:46-62
 @ ./src/main.ts 5:0-45 6:46-55

ERROR in ./node_modules/@nativescript/canvas/SVG/Path.js 6:0-35
Module not found: Error: Can't resolve 'xmldom' in '/Users/brianclow/Desktop/ns-svg-test/node_modules/@nativescript/canvas/SVG'
 @ ./node_modules/@nativescript/canvas/SVG/index.js 4:0-30 4:0-30
 @ ./node_modules/@nativescript/canvas/index.js 10:0-22 10:0-22
 @ ./src/app/browse/browse.component.ts 4:0-43 7:29-32
 @ ./src/app/browse/browse.module.ts 4:0-53 11:119-134 16:31-46
 @ ./src/app/app-routing.module.ts 20:28-64
 @ ./src/app/app.module.ts 3:0-56 10:70-86 11:161-177 16:46-62
 @ ./src/main.ts 5:0-45 6:46-55

ERROR in ./node_modules/@nativescript/canvas/SVG/Pattern.js 2:0-35
Module not found: Error: Can't resolve 'xmldom' in '/Users/brianclow/Desktop/ns-svg-test/node_modules/@nativescript/canvas/SVG'
 @ ./node_modules/@nativescript/canvas/SVG/index.js 15:0-36 15:0-36
 @ ./node_modules/@nativescript/canvas/index.js 10:0-22 10:0-22
 @ ./src/app/browse/browse.component.ts 4:0-43 7:29-32
 @ ./src/app/browse/browse.module.ts 4:0-53 11:119-134 16:31-46
 @ ./src/app/app-routing.module.ts 20:28-64
 @ ./src/app/app.module.ts 3:0-56 10:70-86 11:161-177 16:46-62
 @ ./src/main.ts 5:0-45 6:46-55

ERROR in ./node_modules/@nativescript/canvas/SVG/Polygon.js 6:0-35
Module not found: Error: Can't resolve 'xmldom' in '/Users/brianclow/Desktop/ns-svg-test/node_modules/@nativescript/canvas/SVG'
 @ ./node_modules/@nativescript/canvas/SVG/index.js 8:0-36 8:0-36
 @ ./node_modules/@nativescript/canvas/index.js 10:0-22 10:0-22
 @ ./src/app/browse/browse.component.ts 4:0-43 7:29-32
 @ ./src/app/browse/browse.module.ts 4:0-53 11:119-134 16:31-46
 @ ./src/app/app-routing.module.ts 20:28-64
 @ ./src/app/app.module.ts 3:0-56 10:70-86 11:161-177 16:46-62
 @ ./src/main.ts 5:0-45 6:46-55

ERROR in ./node_modules/@nativescript/canvas/SVG/Polyline.js 6:0-35
Module not found: Error: Can't resolve 'xmldom' in '/Users/brianclow/Desktop/ns-svg-test/node_modules/@nativescript/canvas/SVG'
 @ ./node_modules/@nativescript/canvas/SVG/index.js 9:0-38 9:0-38
 @ ./node_modules/@nativescript/canvas/index.js 10:0-22 10:0-22
 @ ./src/app/browse/browse.component.ts 4:0-43 7:29-32
 @ ./src/app/browse/browse.module.ts 4:0-53 11:119-134 16:31-46
 @ ./src/app/app-routing.module.ts 20:28-64
 @ ./src/app/app.module.ts 3:0-56 10:70-86 11:161-177 16:46-62
 @ ./src/main.ts 5:0-45 6:46-55

ERROR in ./node_modules/@nativescript/canvas/SVG/Rect.js 2:0-35
Module not found: Error: Can't resolve 'xmldom' in '/Users/brianclow/Desktop/ns-svg-test/node_modules/@nativescript/canvas/SVG'
 @ ./node_modules/@nativescript/canvas/SVG/index.js 10:0-30 10:0-30
 @ ./node_modules/@nativescript/canvas/index.js 10:0-22 10:0-22
 @ ./src/app/browse/browse.component.ts 4:0-43 7:29-32
 @ ./src/app/browse/browse.module.ts 4:0-53 11:119-134 16:31-46
 @ ./src/app/app-routing.module.ts 20:28-64
 @ ./src/app/app.module.ts 3:0-56 10:70-86 11:161-177 16:46-62
 @ ./src/main.ts 5:0-45 6:46-55

ERROR in ./node_modules/@nativescript/canvas/SVG/SVG.js 47:0-50
Module not found: Error: Can't resolve 'xmldom' in '/Users/brianclow/Desktop/ns-svg-test/node_modules/@nativescript/canvas/SVG'
 @ ./node_modules/@nativescript/canvas/SVG/index.js 1:0-22 1:0-22
 @ ./node_modules/@nativescript/canvas/index.js 10:0-22 10:0-22
 @ ./src/app/browse/browse.component.ts 4:0-43 7:29-32
 @ ./src/app/browse/browse.module.ts 4:0-53 11:119-134 16:31-46
 @ ./src/app/app-routing.module.ts 20:28-64
 @ ./src/app/app.module.ts 3:0-56 10:70-86 11:161-177 16:46-62
 @ ./src/main.ts 5:0-45 6:46-55

ERROR in ./node_modules/@nativescript/canvas/SVG/Stop.js 2:0-35
Module not found: Error: Can't resolve 'xmldom' in '/Users/brianclow/Desktop/ns-svg-test/node_modules/@nativescript/canvas/SVG'
 @ ./node_modules/@nativescript/canvas/SVG/index.js 18:0-30 18:0-30
 @ ./node_modules/@nativescript/canvas/index.js 10:0-22 10:0-22
 @ ./src/app/browse/browse.component.ts 4:0-43 7:29-32
 @ ./src/app/browse/browse.module.ts 4:0-53 11:119-134 16:31-46
 @ ./src/app/app-routing.module.ts 20:28-64
 @ ./src/app/app.module.ts 3:0-56 10:70-86 11:161-177 16:46-62
 @ ./src/main.ts 5:0-45 6:46-55

ERROR in ./node_modules/@nativescript/canvas/SVG/Symbol.js 2:0-35
Module not found: Error: Can't resolve 'xmldom' in '/Users/brianclow/Desktop/ns-svg-test/node_modules/@nativescript/canvas/SVG'
 @ ./node_modules/@nativescript/canvas/SVG/index.js 13:0-34 13:0-34
 @ ./node_modules/@nativescript/canvas/index.js 10:0-22 10:0-22
 @ ./src/app/browse/browse.component.ts 4:0-43 7:29-32
 @ ./src/app/browse/browse.module.ts 4:0-53 11:119-134 16:31-46
 @ ./src/app/app-routing.module.ts 20:28-64
 @ ./src/app/app.module.ts 3:0-56 10:70-86 11:161-177 16:46-62
 @ ./src/main.ts 5:0-45 6:46-55

ERROR in ./node_modules/@nativescript/canvas/SVG/Text.js 15:0-35
Module not found: Error: Can't resolve 'xmldom' in '/Users/brianclow/Desktop/ns-svg-test/node_modules/@nativescript/canvas/SVG'
 @ ./node_modules/@nativescript/canvas/SVG/index.js 5:0-30 5:0-30
 @ ./node_modules/@nativescript/canvas/index.js 10:0-22 10:0-22
 @ ./src/app/browse/browse.component.ts 4:0-43 7:29-32
 @ ./src/app/browse/browse.module.ts 4:0-53 11:119-134 16:31-46
 @ ./src/app/app-routing.module.ts 20:28-64
 @ ./src/app/app.module.ts 3:0-56 10:70-86 11:161-177 16:46-62
 @ ./src/main.ts 5:0-45 6:46-55

ERROR in ./node_modules/@nativescript/canvas/SVG/Use.js 2:0-35
Module not found: Error: Can't resolve 'xmldom' in '/Users/brianclow/Desktop/ns-svg-test/node_modules/@nativescript/canvas/SVG'
 @ ./node_modules/@nativescript/canvas/SVG/index.js 12:0-28 12:0-28
 @ ./node_modules/@nativescript/canvas/index.js 10:0-22 10:0-22
 @ ./src/app/browse/browse.component.ts 4:0-43 7:29-32
 @ ./src/app/browse/browse.module.ts 4:0-53 11:119-134 16:31-46
 @ ./src/app/app-routing.module.ts 20:28-64
 @ ./src/app/app.module.ts 3:0-56 10:70-86 11:161-177 16:46-62
 @ ./src/main.ts 5:0-45 6:46-55

19 errors have detailed information that is not shown.
Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.

webpack 5.50.0 compiled with 19 errors in 2374 ms
Webpack compilation complete. Watching for file changes.
Successfully transferred runtime.js on device 1B3ECB00-2195-47F9-AF5A-9EB6E164FFD2.
Successfully transferred src_app_browse_browse_module_ts.js on device 1B3ECB00-2195-47F9-AF5A-9EB6E164FFD2.
Successfully transferred runtime.13a77aa8012a860fd59f.hot-update.js on device 1B3ECB00-2195-47F9-AF5A-9EB6E164FFD2.
Successfully transferred src_app_browse_browse_module_ts.13a77aa8012a860fd59f.hot-update.js on device 1B3ECB00-2195-47F9-AF5A-9EB6E164FFD2.
Successfully transferred runtime.13a77aa8012a860fd59f.hot-update.json on device 1B3ECB00-2195-47F9-AF5A-9EB6E164FFD2.
Refreshing application on device 1B3ECB00-2195-47F9-AF5A-9EB6E164FFD2...
CONSOLE LOG: [HMR][13a77aa8012a860fd59f] failure | A module has not been accepted.
CONSOLE LOG: [HMR][13a77aa8012a860fd59f] failure | Failed to apply.
CONSOLE LOG: Angular is running in development mode. Call enableProdMode() to enable production mode.
(RunningBoardServices) [com.apple.runningboard:process] Hit the server for a process handle 9452c95000067ab that resolved to: [application<org.nativescript.nssvgtest>:26539]
(RunningBoardServices) [com.apple.runningboard:general] Caching handle [application<org.nativescript.nssvgtest>:26539], with ipc id 9452c95000067ab, and pid 26539
CONSOLE ERROR: ERROR Error: Uncaught (in promise): Error: Cannot find module 'xmldom'
Error: Cannot find module 'xmldom'
at webpackMissingModule (file:///app/vendor.js:102734:50) [angular]
at Module../node_modules/@nativescript/canvas/SVG/SVG.js (file:///app/vendor.js:102734:131) [angular]
at __webpack_require__ (file: src/webpack:/@nativescript/template-tab-navigation-ng/webpack/bootstrap:24:0) [angular]
at fn (file: src/webpack:/@nativescript/template-tab-navigation-ng/webpack/runtime/hot module replacement:61:0) [angular]
at Module../node_modules/@nativescript/canvas/SVG/index.js (file:///app/vendor.js:103066:62) [angular]
at __webpack_require__ (file: src/webpack:/@nativescript/template-tab-navigation-ng/webpack/bootstrap:24:0) [angular]
at fn (file: src/webpack:/@nativescript/template-tab-navigation-ng/webpack/runtime/hot module replacement:61:0) [angular]
at Module../node_modules/@nativescript/canvas/index.js (file:///app/vendor.js:107725:62) [angular]
at __webpack_require__ (file: src/webpack:/@nativescript/template-tab-navigation-ng/webpack/bootstrap:24:0) [angular]
at fn (file: src/webpack:/@nativescript/template-tab-navigation-ng/webpack/runtime/hot module replacement:61:0) [angular]
at Module../src/app/browse/browse.component.ts (file:///app/src_app_browse_browse_module_ts.js:48:78) [angular]
at __webpack_require__ (fi<…>
Successfully transferred runtime.js on device 1B3ECB00-2195-47F9-AF5A-9EB6E164FFD2.
Successfully transferred src_app_browse_browse_module_ts.js on device 1B3ECB00-2195-47F9-AF5A-9EB6E164FFD2.
Successfully transferred runtime.13a77aa8012a860fd59f.hot-update.js on device 1B3ECB00-2195-47F9-AF5A-9EB6E164FFD2.
Successfully transferred src_app_browse_browse_module_ts.13a77aa8012a860fd59f.hot-update.js on device 1B3ECB00-2195-47F9-AF5A-9EB6E164FFD2.
Successfully transferred runtime.13a77aa8012a860fd59f.hot-update.json on device 1B3ECB00-2195-47F9-AF5A-9EB6E164FFD2.
Restarting application on device 1B3ECB00-2195-47F9-AF5A-9EB6E164FFD2...
CONSOLE LOG: Loading inspector modules...
CONSOLE LOG: Finished loading inspector modules.
(RunningBoardServices) [com.apple.runningboard:connection] Identity resolved as application<org.nativescript.nssvgtest>
CONSOLE LOG: Angular is running in development mode. Call enableProdMode() to enable production mode.
CONSOLE ERROR: ERROR Error: Uncaught (in promise): Error: Cannot find module 'xmldom'
Error: Cannot find module 'xmldom'
at webpackMissingModule (file:///app/vendor.js:102734:50) [angular]
at Module../node_modules/@nativescript/canvas/SVG/SVG.js (file:///app/vendor.js:102734:131) [angular]
at __webpack_require__ (file: src/webpack:/@nativescript/template-tab-navigation-ng/webpack/bootstrap:24:0) [angular]
at fn (file: src/webpack:/@nativescript/template-tab-navigation-ng/webpack/runtime/hot module replacement:61:0) [angular]
at Module../node_modules/@nativescript/canvas/SVG/index.js (file:///app/vendor.js:103066:62) [angular]
at __webpack_require__ (file: src/webpack:/@nativescript/template-tab-navigation-ng/webpack/bootstrap:24:0) [angular]
at fn (file: src/webpack:/@nativescript/template-tab-navigation-ng/webpack/runtime/hot module replacement:61:0) [angular]
at Module../node_modules/@nativescript/canvas/index.js (file:///app/vendor.js:107725:62) [angular]
at __webpack_require__ (file: src/webpack:/@nativescript/template-tab-navigation-ng/webpack/bootstrap:24:0) [angular]
at fn (file: src/webpack:/@nativescript/template-tab-navigation-ng/webpack/runtime/hot module replacement:61:0) [angular]
at Module../src/app/browse/browse.component.ts (file:///app/src_app_browse_browse_module_ts.js:48:78) [angular]
at __webpack_require__ (fi<…>
NativeScript debugger has opened inspector socket on port 18183 for org.nativescript.nssvgtest.
Successfully synced application org.nativescript.nssvgtest on device 1B3ECB00-2195-47F9-AF5A-9EB6E164FFD2.