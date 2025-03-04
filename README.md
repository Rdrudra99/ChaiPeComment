# RTTPES Chrome Extension Template

The RTTPES Chrome Extension Template is a powerful starting point for building modern, high-performance Chrome extensions.

RTTPES:

-   React
-   TypeScript
-   Tailwind CSS
-   Prettier
-   ESLint
-   ShadCN

This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

## Getting Started

First, install packages:

```bash
pnpm i
# or
npm i
```

Then, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores!

{/* <button
  style={{
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    whiteSpace: "nowrap",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "500",
    transition: "background-color 0.2s ease-in-out",
    outline: "none",
    border: "none",
    cursor: "pointer",
    height: "36px",
    width: "36px",
    backgroundColor: "#000000",
    color: "#dddddd",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  }}
  ref={ref}
  {...props}
  disabled={isLoading}
>
  {isLoading ?
    <Loader2
      style={{
        width: "16px",
        height: "16px",
        animation: "spin 1s linear infinite"
      }}
    />
    : icon}
</button> */}