import * as bodyParser from 'body-parser';
import * as express from 'serverless-express/express';
import * as handler from 'serverless-express/handler';

//////////////////////////////////////////////////

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ strict: false }));
app.use((_req: express.Request, res: express.Response, next: express.NextFunction): void => {
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next()
});

//////////////////////////////////////////////////

app.get('/', async (_req: express.Request, res: express.Response): Promise<void> => {
    res.json({apis : ["/hello", "/ping"]});
});

app.get('/hello', async (_req: express.Request, res: express.Response): Promise<void> => {
    res.json({message : "hello world"});
});

//////////////////////////////////////////////////

app.get('/ping', async (_req: express.Request, res: express.Response): Promise<void> => {
    res.json({message : "Melpa-bot-client works fine!"});
});

app.get('/github', async (req: express.Request, res: express.Response): Promise<void> => {
    res.json({message : "github",
              req : req});
});

//////////////////////////////////////////////////

exports.api = handler(app);
