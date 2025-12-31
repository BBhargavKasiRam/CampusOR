import express from "express";
import healthRouter from "./routes/health.js";
import router from "./routes/index.js";
import queueRouter from "./modules/queue/queue.routes.js";

const app = express();

// basic middleware
app.use(express.json());

// routes
app.use("/health", healthRouter);
// Queue API endpoints
app.use("/api/queues", queueRouter);

// Main routes
app.use("/", router);

export default app;
