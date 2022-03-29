Minimal working project to start using DRAW and CODE.

# Usage
Pull this project. From its root, start up a local data cloud:
```
docker compose up
```

Load this project on the data cloud:
```
npm run reset
```

Serve DRAW
```
npm run serve
```

> You may also [work on a remote data cloud instance](#working-on-a-remote-data-cloud-instance).

## Working on a remote data cloud instance
Complete the unfilled fields `<...>` in file [oConfig-dist.json](res/oConfig-dist.json).
Then, add `:dist` to `npm run ...` commands, e.g. `npm run serve:dist`.

When working on a remote data cloud instance, you do not need to (and cannot) load anything on the data cloud.

# Tutorials

This repository provides you with a minimal setup allowing you to follow Olympe CODE tutorials:
- [create a coded function](https://olympe.support/doc/docs/guides/code/brick_function)
- [create a react bar chart](https://olympe.support/doc/docs/guides/code/bar_chart_react)
This repository will allow to follow more tutorials in the future.
