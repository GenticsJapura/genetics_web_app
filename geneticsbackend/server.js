const express = require("express");
const cors = require("cors");

const app = express();

//Using Cors
app.use(cors());

//Init Middleware( include  bodyparser through express)
app.use(express.json({ extended: false }));

//Default Route
app.get("/", (req, res) => res.send("Backend Api Running"));

//Define Routes
app.use("/api/admin", require("./routes/admin.route"));
app.use("/api/member", require("./routes/member.route"));
app.use("/api/auth", require("./routes/auth.route"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
