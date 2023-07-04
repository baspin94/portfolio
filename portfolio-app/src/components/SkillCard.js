import { Card, CardBody, CardHeader, Image, Heading } from "@chakra-ui/react";

function SkillCard({name, image, credit}) {
    
    return (
        <Card>
            <CardBody>
                <Image src={image} alt="" title={credit} w="240" h="240"/>
            </CardBody>
            <CardHeader>
                <Heading>{name}</Heading>
            </CardHeader>
        </Card>
    )
}

export default SkillCard;