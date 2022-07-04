import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

// Separando a função que faz fetch dos dados do hook do React query
export async function getUsers(): Promise<User[]> { // Promise, pois é uma função assíncrona
  const { data } = await api.get('users');

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-br', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    };
  });

  return users;
}

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5 // durante 5 segundos os dados estarão "fresh(frescos", ou seja, sem precisar ser re-carregados
  })
}