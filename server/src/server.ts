import app from "./app.js";
import { env } from "./config/index.js";
import { connectDatabase } from "./database/index.js";
import "./modules/user/user.model.js";

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(env.PORT, () => {
      console.log(
        `🚀 Server running on http://localhost:${env.PORT}`
      );
    });
  } catch (error) {
    console.error("❌ Server failed to start");

    if (error instanceof Error) {
      console.error(error.message);
    }

    process.exit(1);
  }
};

startServer();