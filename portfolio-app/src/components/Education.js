import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, VStack } from '@chakra-ui/react'

function Education() {
    return (
        <Tabs orientation='vertical' border='1px'>
            <TabList border='1px'>
                <Tab>
                    <VStack>
                        <Text>Flatiron School</Text>
                        <Text fontSize='xs'>(2023)</Text>
                    </VStack>
                </Tab>
                <Tab>
                    <VStack>    
                        <Text>Google on Coursera</Text>
                        <Text fontSize='xs'>(2022)</Text>
                    </VStack>
                </Tab>
                <Tab>
                    <VStack>
                        <Text>The College of St. Scholastica</Text>
                        <Text fontSize='xs'>(2016)</Text>
                    </VStack>
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Text>
                </TabPanel>
                <TabPanel>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Text>
                </TabPanel>
                <TabPanel>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Text>
                </TabPanel>
            </TabPanels>
        </Tabs>

    )
}

export default Education;