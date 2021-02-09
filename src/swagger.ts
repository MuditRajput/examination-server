import * as swaggerDocs from 'swagger-jsdoc';

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            swagger: '2.0',
            title: 'Express Training',
            description: 'This project is Express training app',
            version: '1.0.0',
            contact: {
                name: 'Mudit Rajput',
                email: 'mudit.rajput@successive.tech'
            },
            server: ['https://localhost:9000/']
        },
        basePath: '/api',
        securityDefinitions: {
            ApiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization'
            }
        }
    },
    apis: ['dist/**/*.js']
};

export const swaggerDocument = swaggerDocs(swaggerOptions);


