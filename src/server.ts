import { connect } from "mongoose";
import app from "./app";

const port = 3000;

run().catch((err) => console.log(err));

async function run() {
  await connect("mongodb://127.0.0.1:27017/test");

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
