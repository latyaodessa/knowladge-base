import * as express from 'express';
import knowledgeBaseParser from './knowledge-base-parser-routes';

const rootRouter = express();

rootRouter.use('/parse', knowledgeBaseParser);

export default rootRouter;
