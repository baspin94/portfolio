import { Heading, Box } from "@chakra-ui/react";
import data from  '../data/skills.json';
import SkillCard from "./SkillCard";

function Skills() {

    const skillList = data.skills.map(skill => {
        return <SkillCard key={skill.id} name={skill.title} image={skill.image}/>
    })
    

    return (
        <Box>
            <Heading>Skills</Heading>
            {skillList}
        </Box>
        
    )
}

export default Skills;