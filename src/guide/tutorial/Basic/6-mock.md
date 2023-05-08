---
title: Mock and debugging
order: 6
author: Ryan SU
---

# Data mock & Joint debugging

## Development Environment

If the front-end application and the back-end interface server are not running on the same host, you need to proxy the interface request to the interface server in the development environment.

If it is the same host, you can directly request the specific interface address.

### Configuration

During development, the interface address is configured in the [.env.development](https://github.com/vbenjs/vue-vben-admin/tree/main/.env.development) file in the project root directory

```bash
# vite local cross-domain proxy
VITE_PROXY=[["/basic-api","http://localhost:3000"]]
# Interface address
VITE_GLOB_API_URL=/api
```

::: tip

- If a field in the .env file is a string, there is no need to add quotation marks. All are strings by default
- VITE_PROXY cannot wrap

:::

### Cross-domain processing

If your interface under `src/api/` is the following code and the **.env.development** file is configured as follows, then you will see `http://localhost:3100/basic-api/login` in the console.

Since `/basic-api` matches the set `VITE_PROXY`, the above is actually requesting **http://localhost:3000/login**, which also solves the cross-domain problem. (**3100** is the project port number, **http://localhost:3000** is the target address of PROXY proxy)

```ts
// .env.development
// VITE_PROXY=[["/basic-api","http://localhost:3000"]]
// VITE_GLOB_API_URL=/basic-api

enum Api {
  Login = "/login",
}

/**
 * @description: User login
 */
export function loginApi(params: LoginParams) {
  return http.request<LoginResultModel>({
    url: Api.Login,
    method: "POST",
    params,
  });
}
```

### Configuration without cross-domain

If there is no cross-domain problem, you can directly ignore **VITE_PROXY** configuration and directly set the interface address to **VITE_GLOB_API_URL**

```bash
# For example, if the interface address is http://localhost:3000 then
VITE_GLOB_API_URL=http://localhost:3000
```

If there is a cross-domain problem, set **VITE_GLOB_API_URL** to a value consistent with one of the first items in an array in **VITE_PROXY**.

The following interface address is set to `/basic-api`. When a request is sent out, it will be proxied by Vite's proxy and matched to our set **VITE_PROXY** rule. `/basic-api` will be converted to `http://localhost:3000` for request

```bash
# For example, if the interface address is http://localhost:3000 then
VITE_PROXY=[["/basic-api","http://localhost:3000"]]
# Interface address
VITE_GLOB_API_URL=/basic-api
```

### Cross-domain Principle Analysis

In the `vite.config.ts` configuration file, the server's proxy function is provided to proxy API requests.

```ts
server: {
  proxy: {
    "/basic-api":{
      target: 'http://localhost:3000',
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^/basic-api`), ''),
    }
  },
},
```

::: tip Note

From the Network in the browser console, the request is `http://localhost:3000/basic-api/xxx`, because the proxy configuration does not change the local request url.

:::

## Production Environment

The production environment interface address is configured in the [.env.production](https://github.com/vbenjs/vue-vben-admin/tree/main/.env.production) file in the project root directory.

The production environment interface address value needs to modify **VITE_GLOB_API_URL**. If there is a cross-domain problem, you can use nginx or backend to enable cors for processing

::: tip How to modify the address after packaging?

Variables starting with **VITE_GLOB\_\*** will be injected into the **\_app.config.js** file when packaged.

After modifying the corresponding interface address in **dist/\_app.config.js** and refreshing the page, you do not need to package multiple times according to different environments. One package can be used for deployment of multiple different interface environments.

:::

## Interface Request

In vue-vben-admin:

1. Page interaction operation;
2. Call a uniformly managed api request function;
3. Use the encapsulated axios.ts to send requests;
4. Get data returned by the server
5. Update data;

The interface is uniformly managed and stored in [src/api/](https://github.com/vbenjs/vue-vben-admin/tree/main/src/api)

Take the login interface as an example:

Create a module file in **src/api/**, where parameters and return values are best defined for easy verification. Although it is troublesome, it is very convenient to maintain fields later.

::: tip

Type definition files can be extracted and managed uniformly, please refer to the project for details

:::

```ts
import { defHttp } from "/@/utils/http/axios";
import { LoginParams, LoginResultModel } from "./model/userModel";

enum Api {
  Login = "/login",
}

export function loginApi(params: LoginParams) {
  return defHttp.request<LoginResultModel>({
    url: Api.Login,
    method: "POST",
    params,
  });
}
```

#Here is the English translation of your text in markdown:

# axios Configuration

The **axios** request encapsulation is stored in the [src/utils/http/axios](https://github.com/vbenjs/vue-vben-admin/tree/main/src/utils/http/axios) folder

Except for the content of the `index.ts` file that needs to be modified according to the project, other files do not need to be modified

```js

├── Axios.ts // axios instance
├── axiosCancel.ts // axiosCancel instance, cancel duplicate requests
├── axiosTransform.ts // data conversion class
├── checkStatus.ts // return status value check
├── index.ts // unified processing of interface returns

```

### index.ts Configuration Description

```ts
const axios = new VAxios({
  // Authentication scheme, such as: Bearer
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes
  authenticationScheme: "",
  // Interface timeout time in milliseconds
  timeout: 10 * 1000,
  // The interface may have a common address part, which can be uniformly extracted
  prefixUrl: prefix,
  headers: { "Content-Type": ContentTypeEnum.JSON },
  // Data processing method, see below for explanation
  transform,
  // Configuration items, the following options can be overridden in independent interface requests
  requestOptions: {
    // Add prefix to url by default
    joinPrefix: true,
    // Whether to return the native response header For example: use this property when you need to get the response header
    isReturnNativeResponse: false,
    // Need to process the returned data
    isTransformRequestResult: true,
    // Add parameters to url when post request
    joinParamsToUrl: false,
    // Format submission parameter time
    formatDate: true,
    // Message prompt type
    errorMessageMode: "message",
    // Interface address
    apiUrl: globSetting.apiUrl,
    // Whether to join timestamp
    joinTime: true,
    // Ignore duplicate requests
    ignoreCancelToken: true,
  },
});
```

**transform data processing instructions**

Type definition, see **axiosTransform.ts** file

```js
export abstract class AxiosTransform {
   /**
    * @description: Process configuration before request
    */
   beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig;

   /**
    * @description: The request was successfully processed
    */
   transformRequestData?: (res: AxiosResponse<Result>, options: RequestOptions) => any;

   /**
    * @description: Request failure handling
    */
   requestCatch?: (e: Error) => Promise<any>;

   /**
    * @description: The interceptor before the request
    */
   requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;

   /**
    * @description: The interceptor after the request
    */
   responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

   /**
    * @description: Interceptor error handling before request
    */
   requestInterceptorsCatch?: (error: Error) => void;

   /**
    * @description: Interceptor error handling after the request
    */
   responseInterceptorsCatch?: (error: Error) => void;
}


```

The default transform processing logic of the project can be processed according to the respective project. Generally, the part that needs to be changed is the following code, see the code comment

```js
/**
  * @description: Data processing, easy to distinguish multiple processing methods
  */
const transform: AxiosTransform = {
   /**
    * @description: Process request data. If the data is not in the expected format, an error can be thrown directly
    */
   transformRequestHook: (res: AxiosResponse<Result>, options: RequestOptions) => {
     const { t } = useI18n();
     const { isTransformResponse, isReturnNativeResponse } = options;
     // Whether to return the original response header For example: use this property when you need to get the response header
     if (isReturnNativeResponse) {
       return res;
     }
     // do not do any processing, return directly
     // It is used when the page code may need to directly obtain code, data, and message information
     if (!isTransformResponse) {
       return res.data;
     }
     // return on error

     const { data } = res;
     if (!data) {
       // return '[HTTP] Request has no return value';
       throw new Error(t('sys.api.apiRequestFailed'));
     }
     // Here code, result, and message are unified fields in the background, which need to be modified in types.ts to the project's own interface return format
     const { code, result, message } = data;

     // This logic can be modified according to the project
     const hasSuccess = data && Reflect.has(data, 'code') && code === ResultEnum.SUCCESS;
     if (hasSuccess) {
       return result;
     }

     // Here, perform different operations on different codes according to the actual situation of your own project
     // If you don't want to interrupt the current request, please return the data, otherwise just throw an exception directly
     let timeoutMsg = '';
     switch (code) {
       case ResultEnum. TIMEOUT:
         timeoutMsg = t('sys.api.timeoutMessage');
       default:
         if (message) {
           timeoutMsg = message;
         }
     }

     // When errorMessageMode='modal', a modal error popup will be displayed instead of a message prompt, which is used for some more important errors
     // errorMessageMode='none' is generally used to explicitly express that you do not want to automatically pop up an error message when calling
     if (options. errorMessageMode === 'modal') {
       createErrorModal({ title: t('sys.api.errorTip'), content: timeoutMsg });
     } else if (options. errorMessageMode === 'message') {
       createMessage. error(timeoutMsg);
     }

     throw new Error(timeoutMsg || t('sys.api.apiRequestFailed'));
   },

   // process config before request
   beforeRequestHook: (config, options) => {
     const { apiUrl, joinPrefix, joinParamsToUrl, formatDate, joinTime = true } = options;

     if (joinPrefix) {
       config.url = `${urlPrefix}${config.url}`;
     }

     if (apiUrl && isString(apiUrl)) {
       config.url = `${apiUrl}${config.url}`;
     }
     const params = config. params || {};
     if (config.method?.toUpperCase() === RequestEnum.GET) {
       if (!isString(params)) {
         // Add a timestamp parameter to the get request to avoid getting data from the cache.
         config.params = Object.assign(params || {}, joinTimestamp(joinTime, false));
       } else {
         // compatible with restful style
         config.url = config.url + params + `${joinTimestamp(joinTime, true)}`;
         config.params = undefined;
       }
     } else {
       if (!isString(params)) {
         formatDate && formatRequestDate(params);
         config.data = params;
         config.params = undefined;
         if (joinParamsToUrl) {
           config.url = setObjToUrlParams(config.url as string, config.data);
         }
       } else {
         // compatible with restful style
         config.url = config.url + params;
         config.params = undefined;
       }
     }
     return config;
   },

   /**
    * @description: request interceptor processing
    */
   requestInterceptors: (config, options) => {
     // process config before request
     const token = getToken();
     if (token) {
       // jwt token
       config.headers.Authorization = options.authenticationScheme
         ? `${options.authenticationScheme} ${token}`
         : token;
     }
     return config;
   },

  /**
   * @description: 响应拦截器处理
   */
  responseInterceptors: (res: AxiosResponse<any>) => {
    return res;
  },

  /**
   * @description: 响应错误处理
   */
  responseInterceptorsCatch: (error: any) => {
    const { t } = useI18n();
    const errorLogStore = useErrorLogStoreWithOut();
    errorLogStore.addAjaxErrorInfo(error);
    const { response, code, message, config } = error || {};
    const errorMessageMode = config?.requestOptions?.errorMessageMode || 'none';
    const msg: string = response?.data?.error?.message ?? '';
    const err: string = error?.toString?.() ?? '';
    let errMessage = '';

    try {
      if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
        errMessage = t('sys.api.apiTimeoutMessage');
      }
      if (err?.includes('Network Error')) {
        errMessage = t('sys.api.networkExceptionMsg');
      }

      if (errMessage) {
        if (errorMessageMode === 'modal') {
          createErrorModal({ title: t('sys.api.errorTip'), content: errMessage });
        } else if (errorMessageMode === 'message') {
          createMessage.error(errMessage);
        }
        return Promise.reject(error);
      }
    } catch (error) {
      throw new Error(error);
    }

    checkStatus(error?.response?.status, msg, errorMessageMode);
    return Promise.reject(error);
  },
};
```

### Change Parameter Format

The project interface defaults to the Json parameter format, that is, `headers: { 'Content-Type': ContentTypeEnum.JSON }`,

If you need to change it to the `form-data` format, change the `'Content-Type` of headers to `ContentTypeEnum.FORM_URLENCODED`

### Multiple Interface Addresses

When multiple interface addresses are needed in the project, multiple axios instances can be exported in [src/utils/http/axios/index.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/src/utils/http/axios/index.ts)

```ts
// Currently only one default instance is exported, and the interface address corresponds to the VITE_GLOB_API_URL interface address in the environment variable
export const defHttp = createAxios();

// If you need other interface addresses, you can add them later

// other api url
export const otherHttp = createAxios({
  requestOptions: {
    apiUrl: "xxx",
  },
});
```

### Delete Timestamp Parameters Carried by Request URL

If you don't need the timestamp parameter `?_t=xxx` on the url by default

```ts
const axios = new VAxios({
  requestOptions: {
    // Whether to join timestamp
    joinTime: false,
  },
});
```

## Mock Service

Mock data is an indispensable part of front-end development and is a key link in separating front-end and back-end development. By simulating request data and even logic through interfaces agreed with the server in advance, front-end development can be independent and not blocked by the development process of the server.

This project uses [vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock) to handle mock data. **The mock service in the project is divided into local and online**.

### Local Mock

Local mock uses Node.js middleware to intercept parameters (the reason for not using mock.js is that local development cannot see request parameters and response results).

#### How to add a mock interface

If you want to add mock data, just find the mock file in the root directory, add the corresponding interface, intercept it and simulate data.

Create a new file in the mock folder

::: tip

After adding a file, it will be automatically updated without manual restart. You can view log information in the code console. The mock folder will be automatically registered, excluding folders and files starting with \_

:::

Example:

```ts
import { MockMethod } from "vite-plugin-mock";
import { resultPageSuccess } from "../_util";

const demoList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 60; index++) {
    result.push({
      id: `${index}`,
      beginTime: "@datetime",
      endTime: "@datetime",
      address: "@city()",
      name: "@cname()",
      "no|100000-10000000": 100000,
      "status|1": ["正常", "启用", "停用"],
    });
  }
  return result;
})();

export default [
  {
    url: "/api/table/getDemoList",
    timeout: 1000,
    method: "get",
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, demoList);
    },
  },
] as MockMethod[];
```

Here is the English translation of your text in markdown:

::: tip

The value of mock can directly use the syntax of [mockjs](https://github.com/nuysoft/Mock/wiki).

:::

#### Interface Format

```ts
{
  url: string; // mock interface address
  method?: MethodType; // Request method
  timeout?: number; // Delay time
  statusCode: number; // Response status code
  response: ((opt: { // Response result
      body: any;
      query: any;
  }) => any) | object;
}
```

#### Parameter Acquisition

**GET interface:** `({ query }) => { }`

**POST interface:** `({ body }) => { }`

#### util Description

Can be viewed in [code](https://github.com/vbenjs/vue-vben-admin/tree/main/mock/_util.ts)

::: tip

util is only used as a service to process result data. It can be unused. If you need to use it, you can encapsulate it yourself. You need to change the corresponding fields to the return structure of the interface.

:::

#### Match

Under `src/api`, if the interface matches mock, it will preferentially use mock for response.

```ts
import { defHttp } from "/@/utils/http/axios";
import { LoginParams, LoginResultModel } from "./model/userModel";

enum Api {
  Login = "/login",
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams) {
  return defHttp.request<LoginResultModel>(
    {
      url: Api.Login,
      method: "POST",
      params,
    },
    {
      errorMessageMode: "modal",
    }
  );
}
// 会匹配到上方的
export default [
  {
    url: "/api/login",
    timeout: 1000,
    method: "POST",
    response: ({ body }) => {
      return resultPageSuccess({});
    },
  },
] as MockMethod[];
```

#### With the interface, how to remove the mock

When the background interface has been developed, you only need to remove the corresponding mock function.

Take the above interface as an example, if the background interface login has been developed, you only need to delete/comment out the code below

```ts
export default [
  {
    url: "/api/login",
    timeout: 1000,
    method: "POST",
    response: ({ body }) => {
      return resultPageSuccess({});
    },
  },
] as MockMethod[];
```

### Online mocking

Since this project is a demonstration project, mock data is also used online, so the mock is also integrated after packaging. Usually the project line is generally a formal interface.

The online mock of the project uses [mockjs](https://github.com/nuysoft/Mock/wiki) for mock data simulation.

#### How to enable mock online

::: warning note

Turning on mock online is only applicable to some simple example websites and preview websites. **Must not be opened in a formal production environment! ! ! **

:::

1. Modify the value of `VITE_USE_MOCK` in the .env.production file to true

```ts
VITE_USE_MOCK = true;
```

2. Introduce the required mock file in the [mock/\_createProductionServer.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/mock/_createProductionServer.ts) file

```ts
import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";

const modules = import.meta.globEager("./**/*.ts");

const mockModules: any[] = [];
Object.keys(modules).forEach((key) => {
  if (key.includes("/_")) {
    return;
  }
  mockModules.push(...modules[key].default);
});

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
```

3. 在 [build/vite/plugin/mock.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/build/vite/plugin/mock.ts) 里面引入

```ts
import { viteMockServe } from "vite-plugin-mock";

export function configMockPlugin(isBuild: boolean) {
  return viteMockServe({
    injectCode: `
      import { setupProdMockServer } from '../mock/_createProductionServer';

      setupProdMockServer();
      `,
  });
}
```

::: tip Why inject code through plugins instead of inserting directly in main.ts

Inject the code through `injectCode` in the plug-in, which is convenient to control whether mockjs is packaged into the final code. If it is judged in main.ts, if the mock function is turned off, mockjs will also be packaged into the build file, which will increase the packaging volume.

:::

At this point, the online mock configuration is complete. There is not much difference between online and local, but the big difference is that the interface request log cannot be seen in the console online.
