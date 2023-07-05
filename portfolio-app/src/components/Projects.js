import { Heading, Box, SimpleGrid } from "@chakra-ui/react";
import data from "../data/projects.json"
import ProjectCard from "./ProjectCard";

function Projects() {

    const projectList = data.projects.map(project => {
        return <ProjectCard key={project.id} details={project}/>
    })

    return (
        <Box>
            <Heading>Projects</Heading>
            <SimpleGrid columns={3} spacing={2} margin="auto" w="80%" padding="20px">
                {projectList}
            </SimpleGrid>
        </Box>
    )
}

export default Projects;