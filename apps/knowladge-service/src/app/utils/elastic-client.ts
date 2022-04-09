import {Client} from "@elastic/elasticsearch";
import * as fs from "fs";

export const client = new Client({
  node: 'https://localhost:9200', auth: {
    username: "elastic",
    password: "*JD2+dXio5_5VvIMGPVs"
  },
  tls: {
    ca: fs.readFileSync('./http_ca.crt'),
    rejectUnauthorized: false
  }
})

