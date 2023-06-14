import Education from "./Education";
import Experience from "./Experience";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Heading, Box } from '@chakra-ui/react'

function About() {
    return (
        <Box>
            <Heading>About Me</Heading>
            <Tabs border='1px' margin='auto' width='80%'>
                <TabList>
                    <Tab>Summary</Tab>
                    <Tab>Education</Tab>
                    <Tab>Experience</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    <Text>
                    As someone who has always been energized by opportunities to use creative thinking and exercise analytical, 
                    technical, and problem-solving skills, I am excited to pursue a career as a full-stack software engineer. 
                    I have experience in building applications using JavaScript, React, Python, Flask, and SQL, as well as data analysis, 
                    and I am eager to apply these skills to building comprehensive software solutions. My detail-oriented approach lends 
                    itself well to finding bugs and parsing complex data structures. After seven years of working with students with disabilities, 
                    I learned to code to help companies create accessible applications for users.
                    </Text>
                    </TabPanel>
                    <TabPanel>
                        <Education />
                    </TabPanel>
                    <TabPanel>
                        <Experience />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default About;