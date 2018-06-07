# Wireline Node8 OpenFaaS template

# Routes

Routes are constructed dynamically based on your `module.exports`.
If `module.exports` is a function, it is assign a catch-all route  of `/*`.

If it is an object, a route is assign for each member that is a function.
The name `root` is treated specially, and is assign to '/'.

For example, the following would have the routes '/', 'status', and 'test':

```
module.exports = {
  root: Wireline.exec(...),
  status: Wireline.exec(...),
  test: Wireline.exec(...)
};
```
