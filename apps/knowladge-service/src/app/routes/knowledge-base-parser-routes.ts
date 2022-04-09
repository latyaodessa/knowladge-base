import * as express from 'express';
import {parseKnowledgeBases} from "../controllers/knowledge-base-parser-controller";

const router = express.Router();

router.get('/knowledge-bases', parseKnowledgeBases);

export default router;
