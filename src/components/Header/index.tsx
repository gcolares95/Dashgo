import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    }, "lg")

    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            {/* Logo */}
            <Logo />

            {/* Input de pesquisa */}
            { isWideVersion && <SearchBox /> }

            {/* Icones e Avatar */}
            <Flex align="center" ml="auto">
                <NotificationsNav />

                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    );
}