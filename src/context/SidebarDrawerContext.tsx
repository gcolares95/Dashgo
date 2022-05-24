import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;


// Criando contexto
const SidebarDrawerContext = createContext({} as UseDisclosureReturn); // tipando os dados que tenho no contexto

// Nosso Provider
export function SidebarDrawerProvider({children}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure(); 
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose(); // fechar sidebar quando houver troca de rota
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

// para nao precisar ficar usando o useContext do React
// criando um hook próprio
export const useSidebarDrawer = () => useContext(SidebarDrawerContext)