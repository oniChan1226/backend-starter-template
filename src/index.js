import dotenv from "dotenv"
dotenv.config({
    path: "./.env",
});

import { connectDB } from "./db/index.js";
import { server } from "./app.js"
import { initializeSocket } from "./socket/index.js";

const port = process.env.PORT || 8080;

;(async () => {
    try {
        await connectDB();
        server.listen(port, () => console.log(`server is running on port: ${port}`));
        initializeSocket(server);
    } catch (error) {
        console.log("Error: ", error?.message);
    }
})();
