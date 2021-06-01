# Configurando React Query

# Instalação

- Instalação simples

```tsx
yarn add react-query
```

# useQuery

- Hook para fazermos as requisições no backend

# Requisição

- Passar um nome
    - Vai ser o nome do cache. (chave que vai ser armazenada em cache)

```tsx
import { useQuery } from 'react-query';

export default function UserList() {
    const { data, isLoading, error } = useQuery('users', async () => {
        const response = await fetch('http://localhost:3000/api/users')
        const data = await response.json();

        return data;
    });
```

# Provider

- Precisa colocar um provider em volta da a aplicação (_app).

```tsx
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { makeServer } from '../services/mirage';
import { QueryClient, QueryClientProvider } from 'react-query';

if(process.env.NODE_ENV === 'development'){
  makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <QueryClientProvider client={ queryClient }>
      <ChakraProvider resetCSS theme={ theme }>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  ) 
}

export default MyApp
```

# Loading

- Feito com um encadeamento de if ternário para caso de erros.

```tsx
{isLoading ? (
    <Flex justify="center">
        <Spinner/>
    </Flex>
) : error ? (
    <Flex justify="center">
        <Text>Falha ao obter os dados dos usuários</Text>
    </Flex>
) : (
    <>
      <Table colorScheme="whiteAlpha">
      ....
      </Table>
      <Pagination/>
    </>
```