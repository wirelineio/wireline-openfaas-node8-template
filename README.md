# Deploying a Wireline service on OpenFaaS

1. Clone 
   * https://github.com/wirelineio/darkstar
   * https://github.com/wirelineio/experimental
   * https://github.com/wirelineio/service-template
   * https://github.com/wirelineio/service-template-openfaas-wrapper
   * https://github.com/openfaas/faas
2. Install dev tools from Darkstar (for Ubuntu: `darkstar/scripts/tools_ubuntu.sh`)
3. Run `yarn install` for Darkstar
3. Install OpenFaaS for Docker Swarm of Kubernetes (cf. instructions in `darkstar/scripts/tools_ubuntu.sh`)
5. run `./build.sh` which will run `wrl build` for registry and then `faas build` for OpenFaaS
6. If using Docker Swarm, edit faas/docker-compose.yml to add the registry and open up a port for debugging.  If using k8s, use kubectl port-forward to open up a port and signal the process to start listening for debug connections (David knows the details on k8s better).
7. Open up VSCode, check the paths in launch.json
8. Attach the debugger and start firing requests.
