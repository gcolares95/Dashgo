import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as UseDisclosureReturn);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
    const disclosure = useDisclosure(); // retorna informações se o drawer está aberto, fechado, etc :p
    const router = useRouter();

    useEffect(() => {
        disclosure.onClose(); // fecha o sidebar quando user troca de rota
    }, [router.asPath])


    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

// criando hook próprio xD
export const useSidebarDrawer = () => useContext(SidebarDrawerContext)