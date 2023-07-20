import { Box, Button, Container, Flex, Text} from "@mantine/core"
import React from "react"
import {APPCOLORS} from "../sharedComponent/Color"
import NexImage from "next/image"
import AOSInit from "../sharedComponent/Aos"
import {useMediaQuery} from "@mantine/hooks"

const Category = () => {
  AOSInit({
    disable: false,
  })
  const mobileScreen = useMediaQuery("(max-width: 47.9375em)")
  return (
    <>
      <Box
        fz={{base: 24, sm: 64}}
        pt={{base: 35, sm: 64}}
        ff={"NexaBold"}
        fw={700}
        lh={"24px"}
        ta={"center"}
      >
        <Text display="inline-block" ff={"NexaBold"} color={APPCOLORS.primary}>
          Shop
        </Text>{" "}
        by category
      </Box>
      <Container size="xl" px={{base: 0, sm: "auto"}}>
        <Flex
          wrap={{base: "nowrap", md: "wrap"}}
          sx={{
            justifyContent: "center",
            overflowX: "scroll",
            "@media (max-width: 61.9em)": {
              flexShrink: 0,
              overflowX: "scroll",
              padding: "10px",
              justifyContent: "start",
            },
          }}
          mt={{base: 30, sm: 52, md: 72}}
          columnGap={{base: 0, md: 117}}
          rowGap={59}
          mx={"auto"}
          align={"center"}
        >
          {categoryData.map(value => {
            return (
              <Flex
                key={value.id}
                direction={"column"}
                justify={"center"}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                align={"center"}
                w={{base: 143, sm: "auto"}}
                sx={{
                  flex: "0 0 auto",
                  ":last-of-type": {
                    marginRight: "0",
                  },
                }}
                mr={{base: 15, sm: 20, md: 0}}
              >
                <NexImage
                  src={value.picture}
                  width={mobileScreen ? 92 : 210}
                  height={mobileScreen ? 92 : 210}
                  alt={value.name}
                />
                <Button
                  mt={{base: 12, md: 24}}
                  mih={{base: 36, sm: 60}}
                  w={{base: "inherit", sm: "100%"}}
                  sx={{
                    "&:active": {
                      background: "none",
                    },
                    "&:hover": {
                      background: "none",
                    },
                    borderRadius: "16px",
                    "@media (max-width:47.9375em)": {
                      borderRadius: "4px",
                      paddingLeft: 0,
                      paddingRight: 0,
                      height: 36,
                    },
                    border: `1px solid ${APPCOLORS.primary}`,
                    color: `${APPCOLORS.primary}`,
                    ".mantine-Button-label": {
                      fontSize: 26,
                      fontWeight: 700,
                      fontFamily: "NexaBold",
                      "@media (max-width: 47.9375em)": {
                        fontFamily: "NexaLight",
                        fontWeight: 400,
                        fontSize: 14,
                      },
                    },
                  }}
                  bg={"none"}
                >
                  {value.name}
                </Button>
              </Flex>
            )
          })}
        </Flex>
      </Container>
    </>
  )
}

export default Category

const categoryData = [
  {
    id: 1,
    name: "Grains",
    picture:
      "https://res.cloudinary.com/farmily-company/image/upload/t_Profile/v1686308705/3_cocwbz.png",
  },
  {
    id: 2,
    name: "Farm Boxes",
    picture:
      "https://res.cloudinary.com/farmily-company/image/upload/v1689217587/Component_44_qo2uor.png",
  },
  {
    id: 3,
    name: "Meats & Poultry",
    picture:
      "https://res.cloudinary.com/farmily-company/image/upload/v1689217660/Component_44_1_kgjmbj.png",
  },
  {
    id: 4,
    name: "Vegetables",
    picture:
      "https://res.cloudinary.com/farmily-company/image/upload/v1689217737/Component_44_2_qvtssq.png",
  },
  {
    id: 5,
    name: "Fruits",
    picture:
      "https://res.cloudinary.com/farmily-company/image/upload/v1689217845/Component_44_3_jg7auk.png",
  },
  {
    id: 6,
    name: "Dairies",
    picture:
      "https://res.cloudinary.com/farmily-company/image/upload/v1689218021/Component_44_4_uhbrsg.png",
  },
  {
    id: 7,
    name: "Snacks & Drinks",
    picture:
      "https://res.cloudinary.com/farmily-company/image/upload/v1689218186/Snacksss_upkg5w.png",
  },
  {
    id: 8,
    name: "Baby & Pet Care",
    picture:
      "https://res.cloudinary.com/farmily-company/image/upload/v1689218297/Component_44_6_bvm8yx.png",
  },
]
