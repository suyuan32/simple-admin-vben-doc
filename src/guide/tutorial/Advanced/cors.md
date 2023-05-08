---
title: Cross-domain
author: Ryan SU
---

# Cross-domain processing

## Cause

The reason for cross-domain is that the front-end address and the backend interface are not the same origin, resulting in ajax not being sent.

::: tip Problems caused by non-same-origin

1. Cookie, LocalStorage and IndexDB cannot be obtained
2. DOM cannot be obtained
3. AJAX requests cannot be sent

:::

::: tip Same-origin conditions

**Protocol**, **port**, and **host** are the same as the same origin.

On the contrary, as long as **one** of them is different, it is a different origin.

:::

## Solution

**Local development cross-domain**

Local development generally uses the following 3 methods for processing

1. Use vite's proxy for proxy
2. Turn on cors in the background
3. Use nginx to forward requests

The project comes with the first method. For details, please refer to [Server Interaction-Local Development Environment Interface Address Modification](../guide/mock.md#configuration)

**Production environment cross-domain**

The production environment generally uses the following 2 methods for processing

1. Turn on cors in the background
2. Use nginx to forward requests

**Turning on cors in the background does not require any changes to the front end**

The nginx configuration file can view [nginx configuration](../guide/deploy.md#use-nginx-to-handle-cross-domain)
