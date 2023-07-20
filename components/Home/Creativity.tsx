import {Box, Container, Flex, Text} from "@mantine/core"
import React from "react"
import {APPCOLORS} from "../sharedComponent/Color"

const Creativity = () => {
  return (
    <Container pb={{base: 60, md: 106}}>
      <Flex
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        mx={"auto"}
        justify={"center"}
        pt={{base: 60, md: 106}}
        mb={{base: 24, md: 48}}
      >
        <Flex fw={700} fz={{base: 24, sm: 64}} ff={"NexaBold"} ta={"center"}>
          Less&nbsp;<Box sx={{color: APPCOLORS.primary}}>waste,</Box>
        </Flex>
        <Flex
          fw={700}
          fz={{base: 24, sm: 64}}
          ff={"NexaBold"}
          ta={"center"}
          justify={"center"}
        >
          &nbsp;More&nbsp;
          <Box sx={{color: APPCOLORS.primary}}>creativity!</Box>
        </Flex>
      </Flex>
      <Text ta={"center"}>
        Together, we can reduce waste and contribute to a circular economy by
        utilizing a process which encourages conscious packaging and recycling
        practices.
      </Text>
    </Container>
  )
}

export default Creativity
