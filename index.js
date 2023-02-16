import express from "express";
import LintickRoutes from "./src/routes/LintickRoutes.js";
import { config } from "dotenv";

config();

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "60mb" }));

let port = process.env.PORT;

app.use("/lintick/v1.0", LintickRoutes);
app.get("/develop/health", (_req, res) =>
  res.status(200).send({
    message: "Welcome to this api login",
  })
);

app.listen(port, () => {
  console.log("The server is run in port" + port);
});

export default app;
