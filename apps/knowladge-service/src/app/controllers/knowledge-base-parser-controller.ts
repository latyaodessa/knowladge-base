import {NextFunction, Request, Response} from 'express';
import axios from "axios";


export const parseKnowledgeBases = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const confluenceResponse = await axios({
    method: "GET",
    url: "https://integrato.atlassian.net/wiki/rest/api/content?type=page&spaceKey=PHORON&expand=body.storage",
    auth: {
      username: "andreasfedorenko@gmail.com",
      password: "E7HmheNYbLy7R5Dkp8wP0EBE"
    },
    withCredentials: true,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })

  console.log(confluenceResponse?.data);


  res.sendStatus(200);

};
