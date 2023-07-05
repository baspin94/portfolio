import { Card, CardBody, CardHeader, CardFooter, Image, Heading, Text, Link, Button, HStack } from "@chakra-ui/react";
import { useState } from "react";

function ProjectCard({ details }){
    const [showDetails, setShowDetails] = useState(false)

    function handleClick(e) {
        if (e.target.type !== "button") setShowDetails(!showDetails)
    }

    
    return(
        <Card size="sm" border="1px" align="center" onClick={handleClick}>
            <CardHeader align="center" >
                <Heading as="h3" size="sm">{details.title}</Heading>
            </CardHeader>
            <CardBody>
                { showDetails
                    ? <Text>{details.description}</Text> 
                    : <Image src={details.image} alt={details.alt} w="100%" h="100%"/>
                }
            </CardBody>
            <CardFooter>
                <HStack>
                    <Link href={details.app} target="_blank" rel="noopener noreferrer">
                        <Button>App</Button>
                    </Link>
                    <Link href={details.repo} target="_blank" rel="noopener noreferrer">
                        <Button>Repo</Button>
                    </Link>
                    <Link href={details.demo} target="_blank" rel="noopener noreferrer">
                        <Button>Demo</Button>
                    </Link>
                </HStack>
            </CardFooter>
        </Card>
    )

    
}

export default ProjectCard;