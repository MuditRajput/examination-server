import * as express from 'express';
import * as bodyParser from 'body-parser';
import { errorHandler, notFoundRoute } from './libs/routes';
import routes from './router';
import Database from './libs/database';
import * as swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './swagger';
import * as cors from 'cors';

class Server {
    private app;
    constructor(private config) {
        this.app = express();
    }

    public corsParser() {
        const corsOptions = {
            origin: '*',
            optionsSuccessStatus: 200
          };
        this.app.use(cors(corsOptions));
    }

    public bootstrap() {
        this.corsParser();
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }

    public setupRoutes() {
        const { app } = this;
        app.get('/health-check', (req, res) => {
            res.send('I am OK');
        });

        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

        app.use('/api', routes);

        app.use(notFoundRoute);

        app.use(errorHandler);
    }

    public initBodyParser() {
        this.app.use(bodyParser.json());
    }

    public run() {
        const { app, config: { port , mongoUrl } } = this;
        Database.open(mongoUrl)
            .then((res) => {
                app.listen(port, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log(`app is running on port ${port}`);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

}
export default Server;
