const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

const userRouter = require('./login/router/UserRouter');
require("./login/database/mongoose");
app.use("/users",userRouter);


app.get("/checkserver", (req, res) => res.send("<h1>Hey Developer! Server is working fine, Go aHead!"));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
