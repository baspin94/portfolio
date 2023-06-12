import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    VStack
  } from '@chakra-ui/react'

function Experience() {
    return (
        <Accordion allowMultiple allowToggle>
            <AccordionItem>
                <h2>
                    <AccordionButton justifyContent='center'>
                            <VStack>
                                <Text><strong>Senior Administrative Assistant,</strong> Office of Equal Opportunity and Title IX</Text>
                                <Text fontSize='sm'>Santa Clara University (2020-2022)</Text>
                                <AccordionIcon />
                            </VStack>
                    </AccordionButton>
                </h2>
                <AccordionPanel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                    <AccordionButton justifyContent='center'>
                        <VStack>
                            <Text><strong>Access Specialist,</strong> The Center for Equal Access</Text>
                            <Text fontSize='sm'>The College of St. Scholastica (2018-2020)</Text>
                            <AccordionIcon />
                        </VStack>
                    </AccordionButton>
                </h2>
                <AccordionPanel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                    <AccordionButton justifyContent='center'>
                        <VStack>
                            <Text><strong>Administrative Specialist,</strong> The Center for Equal Access</Text>
                            <Text fontSize='sm'>The College of St. Scholastica (2016-2018)</Text>
                            <AccordionIcon />
                        </VStack>
                    </AccordionButton>
                </h2>
                <AccordionPanel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>
        </Accordion>

    )
}

export default Experience;