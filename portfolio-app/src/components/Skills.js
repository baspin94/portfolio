import { Heading, Box, SimpleGrid} from "@chakra-ui/react";
import data from  '../data/skills.json';
import SkillCard from "./SkillCard";

function Skills() {

    const skillList = data.skills.map(skill => {
        return <SkillCard key={skill.id} name={skill.title} image={skill.image} credit={skill.credit}/>
    })
    

    return (
        <Box>
            <Heading>Skills</Heading>
            <SimpleGrid margin="auto" w="50%" columns={5} spacing={2}>
                {skillList}
            </SimpleGrid>
            
        </Box>
        
    )
}

export default Skills;