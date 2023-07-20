/* eslint-disable @next/next/no-img-element */
import {Box, Container, Flex, useMantineTheme, Text} from "@mantine/core"
import {useMediaQuery} from "@mantine/hooks"
import React from "react"
import Curly from "../Icons/Curly"
import {APPCOLORS} from "../sharedComponent/Color"
import {Carousel, Embla} from "@mantine/carousel"

const Market = () => {
  const theme = useMantineTheme()
  const matchSmall = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  return (
    <Box>
      <Curly full={!matchSmall} />
      <Box
        bg={APPCOLORS.primary}
        pos="relative"
        top={-20}
        sx={{width: "100%"}}
        pb={{base: 110, sm: 130}}
      >
        <Container size={"xl"} py={0}>
          <Flex
            fw={700}
            fz={{base: 24, sm: 64}}
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
            Shop from &nbsp;
            <Box sx={{color: APPCOLORS.white}}>market</Box>
          </Flex>
        </Container>
        <Carousel
          dragFree
          slideSize={matchSmall ? "50%" : "25%"}
          slideGap="md"
          initialSlide={matchSmall ? 1 : 2}
          withControls={false}
          align="end"
        >
          {dataMarket.map(value => {
            return (
              <Carousel.Slide key={value.id}>
                <Box
                  sx={{background: "white", borderRadius: 16}}
                  h={{base: "auto", md: "500px"}}
                  p={8}
                  pos={"relative"}
                >
                  <img
                    src={value.image}
                    alt={value.title}
                    height={"100%"}
                    width={"100%"}
                  />
                  <Text
                    pos={"absolute"}
                    sx={{
                      whiteSpace: "nowrap",
                      zIndex: 30,
                      bottom: 10,
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    mx={"auto"}
                    fz={{base: 16, sm: 48}}
                    color={APPCOLORS.white}
                    fw={700}
                    ff={"NexaBold"}
                  >
                    {value.title}
                  </Text>
                </Box>
              </Carousel.Slide>
            )
          })}
        </Carousel>
      </Box>
    </Box>
  )
}

export default Market

const dataMarket = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/farmily-company/image/upload/v1689738858/IMG_3535_1_bnjozb.png",
    title: "Fruits",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/farmily-company/image/upload/v1689738967/1_crdz5c.png",
    title: "Vegetables",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/farmily-company/image/upload/v1688366269/Sea-Foods_buh4du.png",
    title: "Sea Foods",
  },
]
