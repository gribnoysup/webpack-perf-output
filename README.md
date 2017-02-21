# webpack-perf-output
Webpack Performance Hints Bug

```
WARNING in asset size limit: The following asset(s) exceed the recommended size limit (250 kB).
This can impact web performance.
Assets: 
  ./build/entry1.js (725 kB)
  ./build/entry0.js (725 kB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (250 kB). This can impact web performance.
Entrypoints:
  entry0 (725 kB)
      ./build/entry0.js
,
  entry1 (725 kB)
      ./build/entry1.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/
```
