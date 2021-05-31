# Configurando MirageJS

# Criando Server

1. Importar createServer de miragejs
2. exportar function makeServer
3. Criar instanância do createServer
4. Criar model
    1. Vai conter os dados 
    2. Definir um type para os dados.
5. Criar rotas
    1. Rotas para acessar os dados.

```tsx
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
```

# Short cans

- Possível criar um CRUD de forma bem automática

```tsx
this.get('/users');
this.post('/users');
```

# Iniciando o servidor

- No _app.tsx
- Apenas quando em ambiente de desenvolvimento.
- Importar o makerServer.

```tsx
if(process.env.NODE_ENV === 'development'){
  makeServer();
}
```

# Evitar conflitos com o Next

- O Next já utiliza o nome 'api' para suas proprias rotas por padrão, então restam duas opções.
1. Utilizar um nome diferente para o namespace
2. Resetar ao final, e passar direto caso nenhum rota tenha sido encontrada.

```tsx
this.namespace = '';
this.passthrough();
```

# Delay proposital

- Para testar bem os carregamos podemos dar um delay na requisições
- Em ambiente de desenvolvimento seria praticamente instantâneo e não conseguiríamos observar direito.

```tsx
this.timing = 750; // Delay proposital 750ms
```