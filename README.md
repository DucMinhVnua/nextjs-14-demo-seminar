This is a [Next.js](https://nextjs.org/) demo into the middleware of the Next 14 and how to management use the Zustand library and compare Zustand and ContextAPI.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Middleware of the Next 14

[Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware) allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.

Middleware runs before cached content and routes are matched. See Matching Paths for more details.

File demo

```
src/middleware.ts
```

Functions important

| No  | Property         | Description                      |
| --- | -----------------| -------------------------------- |
|  1  | middleware       | Get params **request** is request of page |
