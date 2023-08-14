import { createServer } from "./server";
import { log } from "logger";
import mongoose from "mongoose";
import AdminAuthRoutes from "./routes/admin/auth"
import AdminProductRoutes from "./routes/admin/product";

import UserAuthRoutes from "./routes/user/auth";
import UserProductRoutes from "./routes/user/product";

const port = process.env.PORT || 5001;
const server = createServer();

server.use("/auth/admin", AdminAuthRoutes);
server.use("/auth/user", UserAuthRoutes);

server.use("/product/admin", AdminProductRoutes);
server.use("/product/user", UserProductRoutes)

server.listen(port, () => {
  log(`api running on ${port}`);
});


mongoose.connect("mongodb+srv://thomilangrg:3BgsxMD7LOg8LqOw@cluster0.u1lvsy5.mongodb.net/Ecommerce", {dbName: "Ecommerce"});