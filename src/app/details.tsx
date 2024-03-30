import { 
    Button, 
    Checkbox, 
    FormControl, 
    FormLabel, 
    GridItem, 
    Heading, 
    Input, 
    Select, 
    SimpleGrid, 
    VStack, 
    Text,
    useBreakpointValue, 
} from "@chakra-ui/react";


export default function Details() {
    const colSpan = useBreakpointValue({ base: 2, md: 1 })
    return(
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
            <VStack spacing={3} alignItems="flex-start">
              <Heading size="2xl">Your details</Heading>
              <Text>If you already have an account, click here to log in.</Text>
            </VStack>
            <SimpleGrid column={2} columnGap={3} rowGap={6} w="full">
              <GridItem colSpan={colSpan}>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input placeholder="John" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan}>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input placeholder="Doe" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input placeholder="Blvd. Broken Dreams" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan}>
                <FormControl>
                  <FormLabel>City</FormLabel>
                  <Input placeholder="San Franscisco" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan}>
                <FormControl>
                  <FormLabel>Country</FormLabel>
                  <Select>
                    <option value="usa">United States</option>
                    <option value="ca">Canada</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <Checkbox defaultChecked>Ship to billing address.</Checkbox>
              </GridItem>
              <GridItem colSpan={2}>
                <Button size="lg" w="full">Place Order</Button>
              </GridItem>
            </SimpleGrid>
          </VStack>
    );
}