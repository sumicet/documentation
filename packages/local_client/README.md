#### A web app used to write code documentation.

Features:

+ code formatting
+ code bundling, compiling
+ fast execution - caching imported packages
+ secure
+ use code from previous code cells
+ show function to display values/JSX elements/React elements in the preview window

```html
show(123);

show({'name': 'John'});

show(<h1>Hi!</h1>);
```

Downsides:

+ css links cannot be used
+ the iframe is sandboxed, so local storage, cookies, etc. are unaccessible

Packages/technologies used: esbuild, unpkg.com, localforage, bulmaswatch, monaco-editor
