import {NextFunction, Request, Response} from 'express';


export const parseKnowledgeBases = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.sendStatus(200);

};
