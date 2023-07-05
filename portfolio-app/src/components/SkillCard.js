import { Card, CardBody, CardHeader, Image, Heading } from "@chakra-ui/react";

function SkillCard({name, image, credit}) {
    
    return (
        <Card size="sm" border="1px" align="center">
            <CardBody>
                <Image src={image} alt="" title={credit} w="100%" h="100%"/>
            </CardBody>
            <CardHeader align="center">
                <Heading as="h3" size="sm">{name}</Heading>
            </CardHeader>
        </Card>
    )
}

export default SkillCard;