# Wireline Node8 OpenFaaS template

# IMPORTANT

You want this for manually bootstrapping a service into Docker or K8s.  You do not want this if you are simply creating a Wireline service to be deployed using the normal Wireline toolchain (eg, `wrl svc`, `wrl stack`).  For that you want the standard template: https://github.com/wirelineio/service-template

# Routes

Proper request routing requires an OpenFaaS Gateway with these patches: https://github.com/openfaas/faas/issues/716

In the Wireline OpenFaaS template, routes are constructed dynamically based the `module.exports` of your handler.
If `module.exports` is a function, it is assigned a catch-all route  of `/*`.

If it is an object, a route is assigned for each 'own' member that is a function.
The name `root` is treated specially, and is assigned to '/'.

For example, the following would have the routes '/', '/status', and '/test':

```
module.exports = {
  root: Wireline.exec(...),
  status: Wireline.exec(...),
  test: Wireline.exec(...)
};
```
