# ember-cli-sanitize

An Ember CLI addon to sanitize user provided content using [sanitize.js](https://github.com/gbirke/Sanitize.js).

Forked from [minutebase/ember-sanitize](https://github.com/minutebase/ember-sanitize) and updated for
Ember-CLI 1.13.8 and made sanitizers live on global Sanitize.Config object, rather than the application container,
which should make testing (slightly easier).

The current implementation is a little hacky in that it relies on a hash created by the ember-resolver to
identify sanitizers defined in /app/sanitizers, so testing currently manually requires that the sanitizers be manually
put onto the Sanitizer.Config global before the test runs. I'd love to fix this is a later version... if there is one.

## Using

### Installation

Install this addon via Ember-CLI:

```
ember install rzurad/ember-cli-sanitize
```

### Usage

Simply use the `sanitize-html` helper in your template:

```handlebars
{{sanitize-html someValue}}
```

This will use the most restrictive sanititizer config by default, which will strip all HTML.

To use your own sanitizer configuration, add a file to `/app/sanitizers/` which exports an object
conforming to [sanitizer's configuration options](https://github.com/gbirke/Sanitize.js#configuration).

For example:

```js
// /app/sanitizers/strict.js
export default {
  elements: ['b', 'em', 'i', 'strong', 'u']
};
```

You can then use this configuration by passing it in as the second argument to the helper:

```handlebars
{{sanitize-html someValue 'strict'}}
```

## Developing

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`
