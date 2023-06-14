import { Box, Heading, Text, HStack, VStack, IconButton, Icon, Link, Image } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import BeeLogo from '../assets/logo.svg';

function Header() {
    // TODO: Update email address for email button.
    return (
        <VStack>
                <Image src={BeeLogo} boxSize='15%'/>
                <Heading as="h1">Bianca "Bee" Aspin</Heading>
                <Text fontSize='2xl'>Full-Stack Web Developer</Text>
                <Box>
                    <HStack justifyContent='center' spacing='5'>
                        <Link href='https://www.linkedin.com/in/bmaspin42/' target="_blank" rel="noopener noreferrer">
                            <IconButton aria-label='LinkedIn' icon={<Icon as={FaLinkedin} boxSize={7}/>}/>
                        </Link>
                        <Link href='https://github.com/baspin94' target="_blank" rel="noopener noreferrer">
                            <IconButton aria-label='GitHub' icon={<Icon as={FaGithub} boxSize={7}/>}/>
                        </Link>
                        <Link href='mailto:' target="_blank" rel="noopener noreferrer">
                            <IconButton aria-label='Email' icon={<Icon as={MdEmail} boxSize={7}/>}/>
                        </Link>
                    </HStack>
                </Box>
            <Box>
                <HStack spacing='20'>
                    <Link>About</Link>
                    <Link>Skills</Link>
                    <Link>Projects</Link>
                </HStack>
            </Box>
        </VStack>
        
    )
}

export default Header;