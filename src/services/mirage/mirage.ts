// Configuração do mirage/servidor do mirage
import { createServer, Model } from 'miragejs';

type User = {
    name: string;
    email: string;
    created_at: string;
};

export function makeServer() {
    const server = createServer({
        models: {                                  // quais dados queremos armazenar no "banco ficticio" que o mirage cria
            user: Model.extend<Partial<User>>({})  // user é como se fosse uma tabela no banco
    },                                             // <Partial<User> -> podemos usar user sem informar todos os campos necessariamente 
        
        routes() {                                 // rotas que teremos no mirage
            this.namespace = 'api';                // setar o caminho que a aplicação vai precisar acessar para acessar as rotas do mirage 
            this.timing = 750;                     // Toda chamada a api do mirage demore 750 millisegundos para testar loading, etc

            this.get('/users');                    // mirage automaticamente retorna lista de usuário dentro da nossa aplicação
            this.post('/users');

            this.namespace = '';                   // Ao terminar de definir as rotas do mirage, reseta o namespace para '', para não prejudicas as rotas "api" que existe dentro do next
            this.passthrough();                    // Faz com que as chamadas para o endereço 'api' passem pelo mirage, e se não for detectadas pelas rotas do mirage, passem adiante para o next, etc   
        }
    })

    return server;
}