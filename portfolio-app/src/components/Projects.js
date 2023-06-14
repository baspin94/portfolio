import { Heading, Box } from "@chakra-ui/react";
import data from "../data/projects.json"
import ProjectCard from "./ProjectCard";

function Projects() {

    const projectList = data.projects.map(project => {
        return <ProjectCard key={project.id} name={project.title} />
    })

    return (
        <Box>
            <Heading>Projects</Heading>
            {projectList}
        </Box>
    )
}

export default Projects;