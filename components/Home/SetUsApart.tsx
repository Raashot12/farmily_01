import {Box, Button, Container, Flex, Grid, Image, Text} from "@mantine/core"
import React from "react"
import {APPCOLORS} from "../sharedComponent/Color"
import {useMediaQuery} from "@mantine/hooks"

const SetUsApart = () => {
  const mobileScreen = useMediaQuery("(max-width: 40em)")
  return (
    <Box
      pos={"relative"}
      top={-20}
      pb={{base: 109, md: 103}}
      sx={{
        background: "#D6FDD6",
        "@media (min-width: 40em)": {
          background:
            "var(--gradient, linear-gradient(137deg, rgba(152, 251, 152, 0.40) 44.44%, rgba(52, 109, 77, 0.40) 100%))",
        },
      }}
    >
      <Flex
        fw={700}
        fz={{base: 24, sm: 64}}
        ff={"NexaBold"}
        ta={"center"}
        mx={"auto"}
        justify={"center"}
        mb={40}
        pt={{base: 115, md: 147}}
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        What sets us &nbsp;<Box sx={{color: APPCOLORS.primary}}> apart?</Box>
      </Flex>
      <Container size={"xl"}>
        <Grid
          align="center"
          sx={{
            "&.mantine-Grid-root": {
              "@media (max-width: 40em)": {
                flexDirection: "column-reverse",
                justifyContent: "center",
              },
            },
          }}
          mb={{base: 20, md: 0}}
        >
          <Grid.Col px={16} md={5}>
            <Text
              fz={{base: 24, sm: 26}}
              fw={700}
              mb={{base: 16, md: 32}}
              ff={"NexaBold"}
              ta={{base: "center", md: "left"}}
              lh={"normal"}
            >
              We provide personalized grocery recommendations.
            </Text>
            <Text
              fz={{base: 16, sm: 24}}
              mb={{base: 24, md: 32}}
              ta={{base: "center", md: "left"}}
              lh={{base: "24px", sm: "28px"}}
            >
              Our AI-powered grocery recommendations will start with our
              best-selling items and progressively adapt to your preferences
              with every following order.
            </Text>
            <Button
              ta={"center"}
              mih={56}
              sx={{
                borderRadius: "16px",
                ":hover": {
                  background: APPCOLORS.primary,
                },
                "&.mantine-Button-root": {
                  display: "flex",
                  "@media (max-width: 48em)": {
                    marginLeft: "auto",
                    marginRight: "auto",
                    justifyContent: "center",
                    width: "100%",
                    boxShadow:
                      "1px 1px 16px 0px rgba(0, 0, 0, 0.15), 1px 1px 16px 0px rgba(0, 0, 0, 0.15)",
                    borderRadius: "8px",
                  },
                },
                ".mantine-Button-label": {
                  fontSize: 20,
                  fontWeight: 700,
                  fontFamily: "NexaBold",
                  "@media (max-width: 40em)": {
                    fontSize: 16,
                  },
                },
              }}
            >
              {mobileScreen ? "Learn more" : "LEARN MORE"}
            </Button>
          </Grid.Col>
          <Grid.Col px={16} md={7}>
            <Image
              src="https://res.cloudinary.com/farmily-company/image/upload/v1689692478/Frame_38680_ggoic9.webp"
              alt=""
              pos={"relative"}
              left={{base: 0, md: -100}}
              display={{base: "none", md: "block"}}
            />
            <Image
              src="https://res.cloudinary.com/farmily-company/image/upload/v1689733568/Frame_38580_lnfprb.webp"
              alt=""
              pos={"relative"}
              display={{base: "block", md: "none"}}
            />
          </Grid.Col>
        </Grid>
        <Grid align="center" mb={{base: 20, md: 0}}>
          <Grid.Col px={16} md={7}>
            <Image
              src="https://res.cloudinary.com/farmily-company/image/upload/v1689696987/Frame_38682_zvphwn.webp"
              alt=""
              display={{base: "none", md: "block"}}
            />
            <Image
              src="https://res.cloudinary.com/farmily-company/image/upload/v1689735730/Frame_38582_bwjtlp.webp"
              alt=""
              pos={"relative"}
              display={{base: "block", md: "none"}}
            />
          </Grid.Col>
          <Grid.Col px={16} md={5}>
            <Text
              fz={26}
              fw={700}
              mb={{base: 16, md: 32}}
              ff={"NexaBold"}
              ta={{base: "center", md: "left"}}
              lh={"normal"}
            >
              We promote sustainable development goals
            </Text>
            <Text
              fz={{base: 16, sm: 24}}
              mb={{base: 24, md: 32}}
              ta={{base: "center", md: "left"}}
              lh={{base: "24px", sm: "28px"}}
            >
              Our commitment extends beyond just delivering fresh produce. We
              actively support sustainable farming practices that preserve the
              environment and promote long-term ecological balance.
            </Text>
            <Button
              mih={56}
              sx={{
                borderRadius: "16px",
                ":hover": {
                  background: APPCOLORS.primary,
                },
                "&.mantine-Button-root": {
                  display: "flex",
                  "@media (max-width: 48em)": {
                    marginLeft: "auto",
                    marginRight: "auto",
                    justifyContent: "center",
                    width: "100%",
                    boxShadow:
                      "1px 1px 16px 0px rgba(0, 0, 0, 0.15), 1px 1px 16px 0px rgba(0, 0, 0, 0.15)",
                    borderRadius: "8px",
                  },
                },
                ".mantine-Button-label": {
                  fontSize: 20,
                  fontWeight: 700,
                  fontFamily: "NexaBold",
                  "@media (max-width: 40em)": {
                    fontSize: 16,
                  },
                },
              }}
            >
              {mobileScreen ? "Learn more" : "LEARN MORE"}
            </Button>
          </Grid.Col>
        </Grid>
        <Grid
          align="center"
          sx={{
            "&.mantine-Grid-root": {
              "@media (max-width: 40em)": {
                flexDirection: "column-reverse",
                justifyContent: "center",
              },
            },
          }}
        >
          <Grid.Col px={16} md={5}>
            <Text
              fz={26}
              fw={700}
              mb={{base: 16, md: 32}}
              ff={"NexaBold"}
              ta={{base: "center", md: "left"}}
              lh={"normal"}
            >
              We embrace seasonal sensations
            </Text>
            <Text
              fz={{base: 16, sm: 24}}
              mb={{base: 24, md: 32}}
              ta={{base: "center", md: "left"}}
              lh={{base: "24px", sm: "28px"}}
            >
              We embrace the beauty of the changing seasons by offering a
              diverse selection of produce. With each season, you can explore
              new flavors and experience the joy of fresh, seasonal eating.
            </Text>
            <Button
              ta={"center"}
              mih={56}
              sx={{
                borderRadius: "16px",
                ":hover": {
                  background: APPCOLORS.primary,
                },
                "&.mantine-Button-root": {
                  display: "flex",
                  "@media (max-width: 48em)": {
                    marginLeft: "auto",
                    marginRight: "auto",
                    justifyContent: "center",
                    width: "100%",
                    boxShadow:
                      "1px 1px 16px 0px rgba(0, 0, 0, 0.15), 1px 1px 16px 0px rgba(0, 0, 0, 0.15)",
                    borderRadius: "8px",
                  },
                },
                ".mantine-Button-label": {
                  fontSize: 20,
                  fontWeight: 700,
                  fontFamily: "NexaBold",
                  "@media (max-width: 40em)": {
                    fontSize: 16,
                    "@media (max-width: 40em)": {
                      fontSize: 16,
                    },
                  },
                },
              }}
            >
              {mobileScreen ? "Learn more" : "LEARN MORE"}
            </Button>
          </Grid.Col>
          <Grid.Col px={16} md={7}>
            <Image
              src="https://res.cloudinary.com/farmily-company/image/upload/v1689698415/Frame_38684_v5atsv.webp"
              alt=""
              pos={"relative"}
              left={{base: 0, md: -100}}
              display={{base: "none", md: "block"}}
            />
            <Image
              src="https://res.cloudinary.com/farmily-company/image/upload/v1689735490/Frame_38580_1_duxcya.webp"
              alt=""
              pos={"relative"}
              display={{base: "block", md: "none"}}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  )
}

export default SetUsApart
