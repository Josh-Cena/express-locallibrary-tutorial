import { createServer } from "node:http";
import createDebug from "debug";

import app from "./app.js";

const debug = createDebug("express-locallibrary-tutorial:server");
const port = Number(process.env.PORT ?? 3000);
if (!Number.isInteger(port) || port < 0 || port > 65535)
  throw new RangeError("PORT must be an integer between 0 and 65535");
app.set("port", port);

const server = createServer(app);
server.on("error", (err) => {
  throw new Error("Failed to start server", { cause: err });
});
server.on("listening", () => {
  const address = server.address();
  debug(`Listening on port ${address.port}`);
});
server.listen(port);
