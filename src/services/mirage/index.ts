import { createServer, Model } from 'miragejs';


type User = {
    name: string;
    email: string;
    created_at: string;
};

export function makeServer(){
    const server = createServer({
        // Quais dados
        models: {
            user: Model.extend<Partial<User>>({})
        },
        // Quais rotas
        routes() {
            this.namespace = 'api';
            this.timing = 750; // Delay proposital 750ms

            this.get('/users');
            this.post('/users');

            this.namespace = '';
            this.passthrough();
        }
    })

    return server;
}