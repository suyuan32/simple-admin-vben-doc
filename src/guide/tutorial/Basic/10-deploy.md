---
title: Build & Deploy
order: 10
author: Ryan SU
---

# Build & Deploy

::: tip Preface

Since this is a demonstration project, the package is relatively large after packaging. If there are plugins that are not used in the project, you can delete the corresponding files or routes and not reference them. If they are not referenced, they will not be packaged.

Of course, you can also use the streamlined version [vue-vben-admin-thin](https://github.com/vbenjs/vben-admin-thin-next) for development.

:::

## Build

After the project development is completed, execute the following command to build

```bash
yarn build
```

After the build and packaging is successful, a dist folder will be generated in the root directory, which contains the built and packaged files.

### Compatibility with older browsers

In **.env.production**

Set `VITE_LEGACY=true` to package code compatible with older browsers

```bash
VITE_LEGACY = true
```

### Preview

Before publishing, you can preview it locally. There are many ways. Here are two ways to introduce it.

**You cannot directly open the built html file**

- Preview using the project's own command (recommended)

```bash
# Preview after packaging first
yarn preview
# Directly preview the local dist file directory
yarn preview:dist
```

- Local server preview (via live-server)

```bash
# 1. Install live-server globally
yarn global add live-server
# 2. Enter the packaged directory
cd ./dist
# Local preview, default port 8080
live-server
# Specify port
live-server --port 9000
```

### Analyze build file size

If your build file is very large, you can use the built-in [rollup-plugin-analyzer](https://github.com/doesdev/rollup-plugin-analyzer) plugin in the project to analyze the code size and optimize your code.

```bash
yarn report

```

After running, you can see the specific volume distribution on the automatically opened page to analyze which dependencies have problems.

::: tip

You can switch to display gzip or brotli in the upper left corner.

:::
![](/images/report.png)

## Compression

### Enable gzip compression

Enabling gzip and using nginx's `gzip_static` function can greatly speed up page access.

::: tip

Just enable `VITE_BUILD_COMPRESS='gzip'` to generate .gz files while packaging.

:::

```bash
# Configure and change according to your own path
# For example, if it is deployed under the nginx /next/ path, then VITE_PUBLIC_PATH=/next/
VITE_PUBLIC_PATH=/
```

### Enable brotli compression

brotli is an algorithm with a higher compression rate than gzip. It can coexist with gzip without conflict. You need to install a specific module in nginx and enable it.

::: tip

Just enable `VITE_BUILD_COMPRESS='brotli'` to generate .br files while packaging.

:::

```bash
# Configure and change according to your own path
# For example, if it is deployed under the nginx /next/ path, then VITE_PUBLIC_PATH=/next/
VITE_PUBLIC_PATH=/
```

### Enable both gzip and brotli at the same time

Just enable `VITE_BUILD_COMPRESS='brotli,gzip'` to generate `.gz` and `.br` files while packaging.

### Configuration of gzip and brotli in nginx

```bash
http {
   # Enable gzip
   gzip on;
   # Turn on gzip_static
   # After gzip_static is turned on, an error may be reported, and the corresponding module needs to be installed. The specific installation method can be queried by yourself
   # Only if this is enabled, the .gz file packaged by the vue file will be effective, otherwise you don't need to open gzip for packaging
   gzip_static on;
   gzip_proxied any;
   gzip_min_length 1k;
   gzip_buffers 4 16k;
   # If multi-layer proxy is used in nginx, this must be set to enable gzip.
   gzip_http_version 1.0;
   gzip_comp_level 2;
   gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
   gzip_vary off;
   gzip_disable "MSIE [1-6]\.";

   # Enable brotli compression
   # Need to install the corresponding nginx module, the specific installation method can be queried by yourself
   # Can coexist with gzip without conflict
   brotli on;
   brotli_comp_level 6;
   brotli_buffers 16 8k;
   brotli_min_length 20;
   brotli_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript image/svg+xml;
}
```

## Deployment

::: danger Note

The project is enabled by default in the production environment Mock, which is not good. It is only for the demonstration environment to have data. It is not recommended to use Mock in the production environment. Instead, you should use a real backend interface and turn off Mock.

:::

### Release

Simple deployment only requires the final generated static files, and the static files in the dist folder are released to your cdn or static server. It should be noted that the index.html is usually the entry page of your backend service. After determining the static of js and css, you may need to change the page introduction path.

For example, upload to nginx

`/srv/www/project/index.html`

```bash
# nginx configuration
location / {
  # Do not cache html to prevent cache from continuing to take effect after program update
  if ($request_filename ~* .*\.(?:htm|html)$) {
    add_header Cache-Control "private, no-store, no-cache, must-revalidate, proxy-revalidate";
    access_log on;
  }
  # This is where vue packaged files are stored in dist
  root   /srv/www/project/;
  index  index.html index.htm;
}

```

**When deploying, you may find that the resource path is incorrect. Just modify the `.env.production` file.**

```bash
# Configure and change according to your own path
# Note that it needs to start and end with /
VITE_PUBLIC_PATH=/
VITE_PUBLIC_PATH=/xxx/
```

### Combination of front-end routing and server

The front-end routing of the project uses vue-router, so you can choose two ways: history and hash.

- **hash** will append `#` after the url by default
- **history** will not, but `history` requires server cooperation

You can modify mode in [src/router/index.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/index.ts)

```ts
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

createRouter({
  history: createWebHashHistory(),
  // or
  history: createWebHistory(),
});
```

### Server configuration under history routing mode

Enabling history mode requires server configuration. For more server configuration details, see [history-mode](https://next.router.vuejs.org/guide/essentials/history-mode.html#html5-mode)

Here is an example of nginx configuration

**Deploy to root directory**

```bash
server {
  listen 80;
  location / {
    # Used in conjunction with History
    try_files $uri $uri/ /index.html;
  }
}
```

**Deploy to non-root directory**

1. First, you need to change the configuration when packaging

```bash
# In .env.production, configure the subdirectory path
VITE_PUBLIC_PATH = /sub/
```

```bash
server {
    listen       80;
    server_name  localhost;
    location /sub/ {
      # This is where vue packaged files are stored in dist
      alias   /srv/www/project/;
      index index.html index.htm;
      try_files $uri $uri/ /sub/index.html;
    }
}
```

### Use nginx to handle cross-domain

Use nginx to handle cross-domain issues after project deployment

1. Configure the front-end project interface address

```bash
# In .env.production, configure the interface address
VITE_GLOB_API_URL=/api
```

2. Configure nginx to forward requests to the backend

```bash
server {
   listen 8080;
   server_name localhost;
   # Interface proxy, used to solve cross-domain problems
   location /api {
     proxy_set_header Host $host;
     proxy_set_header X-Real-IP $remote_addr;
     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
     # Background interface address
     proxy_pass http://110.110.1.1:8080/api;
     proxy_redirect default;
     add_header Access-Control-Allow-Origin *;
     add_header Access-Control-Allow-Headers X-Requested-With;
     add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
   }
}
```
