import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SidebarDrawerProvider }  from '../context/SidebarDrawerContext';
import { makeServer } from '../services/mirage/mirage';
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../services/queryClient';

// Verificando qual ambiente está rodando nossa aplicação para inicir o mirage, process,env.NODE_ENV é setada automaticamente pelo next
if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
