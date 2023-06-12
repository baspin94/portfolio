import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Box, Heading } from "@chakra-ui/react";

function Header() {
    return (
        <Box>
            <ColorModeSwitcher />
            <Heading>Bianca "Bee" Aspin</Heading>
        </Box>
    )
}

export default Header;