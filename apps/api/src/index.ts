import { createServer } from "./server";
import AdminAuthRoutes from "./routes/admin/auth"
import AdminProductRoutes from "./routes/admin/product";

import UserAuthRoutes from "./routes/user/auth";
import UserProductRoutes from "./routes/user/product";
import mongoose from "mongoose";

const port = process.env.PORT || 5001;
const server = createServer();

server.use("/auth/admin", AdminAuthRoutes)
server.use("/product/admin",AdminProductRoutes)

server.use("/auth/user", UserAuthRoutes);
server.use("/product/user", UserProductRoutes)

server.listen(port, () => {
  console.log(`api running on ${port}`);
});


mongoose.connect("mongodb+srv://thomilangrg:3BgsxMD7LOg8LqOw@cluster0.u1lvsy5.mongodb.net/Ecommerce", {dbName: "Ecommerce"});