import fs from "fs";
import path from "path";

const assetsDir = "dist/client/assets";
const files = fs.readdirSync(assetsDir);
const css = files.find((f) => f.endsWith(".css"));
const mainJs = files.find(
  (f) => f.startsWith("index-") && f.endsWith(".js") && f.includes("Ce2a5"),
);
const entryJs = files.find(
  (f) => f.startsWith("index-") && f.endsWith(".js") && !f.includes("Ce2a5"),
);

const html = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LinkTree Studio</title>
    <link rel="stylesheet" href="/assets/${css}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${entryJs}"></script>
    <script type="module" src="/assets/${mainJs}"></script>
  </body>
</html>`;

fs.writeFileSync("dist/client/index.html", html);
console.log("✅ index.html generado");
