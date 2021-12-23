import { Button, Flex, FormControl, Input } from "@chakra-ui/react";
import DarkModeToggle from "./Component/DarkModeToggle";
import { useToast } from "@chakra-ui/react";

const Home = () => {
  const toast = useToast();

  return (
    <>
      <Flex justify="right" mt="3" mr="3">
        <DarkModeToggle />
      </Flex>
      <Flex align="center" justify="center" height="85vh" direction="column">
        <FormControl mt="20px" w="50vw">
          <Input placeholder="E-Mail Address" size="lg" />
        </FormControl>
        <FormControl mt="20px" w={"50vw"}>
          <Input placeholder="Password" size="lg" type="password" />
        </FormControl>
        <Button
          mt="20px"
          size="lg"
          variantColor="green"
          colorScheme="red"
          onClick={() =>
            toast({
              title: "Account created.",
              position: "bottom-left",
              description: "We've created your account for you.",
              status: "success",
              duration: 3000,
              isClosable: true,
            })
          }
        >
          Login
        </Button>
      </Flex>
    </>
  );
};
export default Home;
