import {Box, Container, Flex} from "@mantine/core"
import React from "react"
import {APPCOLORS} from "../sharedComponent/Color"

const Farmily = () => {
  return (
    <>
      <Flex
        fw={700}
        fz={{base: 28, sm: 64}}
        ff={"NexaBold"}
        ta={"center"}
        mx={"auto"}
        justify={"center"}
        mb={40}
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        sx={{color: APPCOLORS.black}}
      >
        From the&nbsp;
        <Box sx={{color: APPCOLORS.primary}}>farmily</Box>
      </Flex>
      <Container size={"xl"}>
        {" "}
        <Box>Coming soon!</Box>
      </Container>
    </>
  )
}

export default Farmily
