import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {

    return (
        <Flex
            align="center"
        >
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Guilherme Araujo</Text>
                    <Text color="gray.300" fontSize="small">
                        gcolares95@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Guilherme Araujo" src="https://github.com/gcolares95.png" />
        </Flex>
    );
}