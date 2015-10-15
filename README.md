# Wakanda Server Side API Reference

## Global Scope

The server's global scope is accessible through the `application` object. This means that all properties and methods of the `application` object are directly accessible from the global scope.

In practice, this means the following code snippets are equivalent :

```javascript
var uuid = generateUUID();
```

And

```javascript
var uuid = application.generateUUID();
```

The `application` object implements the [`Application`][Application] interface.