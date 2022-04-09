import * as express from 'express';
import * as compression from 'compression';
import * as cors from 'cors';
import {environment} from './environments/environment';
import appRoutes from './app/routes';


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(compression());

app.use('/', appRoutes);

const server = app.listen(environment.port, async () => {
  console.log(`Listening at http://localhost:${environment.port}/`);
});
server.on('error', console.error);
