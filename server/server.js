import express from "express";

const application = express();

const server = application.listen(process.env.PORT || 3000, () => {
  console.log(`http://localhost:${server.address().port}`);
});
