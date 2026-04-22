import express from "express";
import connectDB from "./config/config.js";
import "dotenv/config"
import morgan from "morgan";
import authRouter from "./routes/user.route.js"
import cookieParser from "cookie-parser"

const PORT = process.env.PORT || 6001;
const app = express();

app.use(express.json())
app.use(morgan("dev")); // logs requests
app.use(cookieParser())
app.use("/api/auth",authRouter);


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
  });
});

export default app;
