#  argb

browserify transform to put the process.argv in the process.argv.  good for setting environmental variables like port and host, in your client code.

### how to use

first install as a local dep
```
npm install --save argb
```

then when you build your app, do
```
browserify entry.js -o public/bundle.js -t argb --host localhost --port 11001
```

in your bundle, be like
```js
var minimist = require('minimist')
var argv = minimist(process.argv)
```

