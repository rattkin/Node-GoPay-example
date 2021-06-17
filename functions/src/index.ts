import cors from "cors";
import express, {Request, Response} from "express";
import * as functions from "firebase-functions";
import {corsOptions} from "./config";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = express();

app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
  const method = req.query.method;
  res.send("hello " + method);
});

exports.app = functions.https.onRequest(app);
