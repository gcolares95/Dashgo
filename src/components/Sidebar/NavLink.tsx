import { Icon, Link as ChakraLink, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from 'next/link';

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType; // quando passamos o nome do componente "RiDashBoardLine" e não a declaração do componente "<RiDashBoardLine />"
    children: string;
    href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
    return (
        // passHref passa de forma forçada o nosso href como uma atributo dentro de ChakraLink
        <Link href={href} passHref>
            <ChakraLink display="flex" alignItems="center" {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{children}</Text>
            </ChakraLink>
        </Link>
    );
}