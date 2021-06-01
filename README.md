# Configurando DevTools

- Importar
- Jogar dentro do QueryClientProvider.

# Usando

- Vai a aparecer uma nova aba na aplicação! (Símbolo do React Query)
- Um novo console
- Mostra query que foi feita.
- Possível ver todos os dados retornados
- Todas as informações adicionais da query.

## Refetch

- Recarrega os dados

## Reset

- Joga o cache fora e carrega novamente

## Remove

- Remove o cache.

## Invalidade

- Faz um refetch por padrão. Torna o cache obsoleto.

# Estados

## Stale

- Obsoleto
- Indica que próxima vez que usuário der foco na tela ou sair e voltar, o react query fará uma nova requisição da API.

## Fetching

- Processo está no meio do carregamento.

## Fresh

- Dado recente
- Não precisa ser recarregado dentro deu um certo período.

##