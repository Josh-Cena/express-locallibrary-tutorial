import { join } from "node:path";
import createError from "http-errors";
import express from "express";
import logger from "morgan";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

const app = express();

app.set("views", join(import.meta.dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(import.meta.dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// Forward unmatched requests to the error handler.
app.use((req, res, next) => next(createError(404)));

// Express identifies error handlers by their four parameters.
app.use((err, req, res, next) => {
  if (res.headersSent) {
    next(err);
    return;
  }

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status ?? 500);
  res.render("error");
});

export default app;
