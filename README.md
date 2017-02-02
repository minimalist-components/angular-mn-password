[![npm version](https://badge.fury.io/js/angular-mn-password.svg)](https://badge.fury.io/js/angular-mn-password)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/angular-mn-password.svg)](https://gemnasium.com/github.com/minimalist-components/angular-mn-password)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# angular-mn-password

An angular directive to [mn-password](https://github.com/minimalist-components/mn-password)

See the [demo](https://minimalist-components.github.io/angular-mn-password/)

[![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-password/master/preview.gif)](https://minimalist-components.github.io/angular-mn-password/)

### Install

```sh
npm install --save angular-mn-password
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/mn-select/tree/master/dist) with your preferred tool.

### Usage

```js
// add dependency in you module
angular.module('app', [
  'mn-password'
]);
```

And then, in your html, you can use the tag:

```html
<mn-password placeholder="Password" ng-model='password'></mn-password>
```

For more details check [mn-password docs](https://github.com/minimalist-components/mn-password).

