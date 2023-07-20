import {Box, Container, Flex, Grid, Image, Text, Title} from "@mantine/core"
import DashboardLayout from "../components/layout/DashboardLayout"
import {APPCOLORS} from "../components/sharedComponent/Color"
import React from "react"

export default function AboutPage() {
  return (
    <DashboardLayout title="About" bg={APPCOLORS.white}>
      <Box mt={{base: 55, lg: 94}}>
        <Flex
          justify={"center"}
          pb={60}
          sx={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            background: "rgba(0, 0, 0, 0.50)",
            minHeight: "960px",
            "@media (max-width: 48em)": {
              minHeight: "439px",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: 0,
              left: 0,
              top: 0,
              height: "100%",
              width: "100%",
              zIndex: -1,
              background:
                "url(https://res.cloudinary.com/farmily-company/image/upload/v1689464343/Farmily_slide4_1_1_hfvchz.webp) no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
          <Container size={"xl"}>
            <Box sx={{maxWidth: 978, width: "100%"}}>
              <Box
                fz={{base: 24, sm: 64}}
                ff={"NexaBold"}
                fw={700}
                lh={"24px"}
                ta={"center"}
                mt={{base: 117, sm: 175}}
              >
                <Text
                  display="inline-block"
                  ff={"NexaBold"}
                  color={APPCOLORS.white}
                >
                  ABOUT
                </Text>{" "}
                <Text
                  display="inline-block"
                  ff={"NexaBold"}
                  color={APPCOLORS.primary}
                >
                  US
                </Text>{" "}
              </Box>
              <Text
                fz={{base: 16, sm: 32}}
                fw={400}
                color={APPCOLORS.white}
                ta={"center"}
                mt={{base: 40, sm: 123}}
                lh={"normal"}
              >
                We are a marketplace driven by the belief that everyone should
                have easy access to fresh, affordable, and delicious food. We
                capture different classes of individuals ranging from business
                owners to moms, down to youngins.
              </Text>
              <Text
                fz={{base: 16, sm: 32}}
                fw={400}
                color={APPCOLORS.white}
                ta={"center"}
                mt={{base: 12, sm: 24}}
                lh={"normal"}
              >
                At Farmily, we are passionate about transforming the way people
                experience food from farm to fork.
              </Text>
            </Box>
          </Container>
        </Flex>
      </Box>
      <Container size={"xl"} p={{base: 0, sm: 16}}>
        <Box
          fz={{base: 24, sm: 64}}
          ff={"NexaBold"}
          fw={{base: 400, sm: 700}}
          lh={"24px"}
          ta={"center"}
          mt={{base: 48, sm: 106}}
          mb={{base: 16, sm: 77}}
        >
          <Text
            display="inline-block"
            ff={{base: "NexaLight", sm: "NexaBold"}}
            color={APPCOLORS.black}
          >
            &nbsp; WHY
          </Text>
          <Text
            display="inline-block"
            ff={{base: "NexaLight", sm: "NexaBold"}}
            color={APPCOLORS.primary}
          >
            &nbsp; CHOOSE
          </Text>
          <Text
            display="inline-block"
            ff={{base: "NexaLight", sm: "NexaBold"}}
            color={APPCOLORS.black}
          >
            &nbsp; US?
          </Text>{" "}
        </Box>
        <Flex
          wrap={{base: "wrap", sm: "wrap"}}
          justify={"center"}
          rowGap={{base: 16, md: 70}}
          columnGap={23}
        >
          {about_us.map(value => {
            return (
              <Box
                key={value.id}
                p={{base: 20, md: 40, lg: 48}}
                w={{base: "100%", sm: "48%"}}
                sx={{
                  "@media (min-width: 40em)": {
                    borderRadius: 12,
                  },
                  background:
                    "linear-gradient(137deg, rgba(52, 109, 77, 0.40) 0%, rgba(152, 251, 152, 0.40) 59.64%, rgba(52, 109, 77, 0.40) 98.70%)",
                }}
              >
                <Image src={value.image} alt={value.title} />
                <Box
                  mt={{base: 30, sm: 40}}
                  fw={{base: 400, sm: 900}}
                  ff={{base: "NexaLight", sm: "Lato"}}
                >
                  {value.title}
                </Box>
              </Box>
            )
          })}
        </Flex>
      </Container>
      <Box
        bg={{base: APPCOLORS.white, sm: APPCOLORS.primary}}
        mt={{base: 60, sm: 79}}
        py={{base: 0, sm: 30}}
      >
        <Container size={"xl"}>
          <Text
            color={APPCOLORS.white}
            sx={{
              "@media (max-width: 40em)": {
                color: APPCOLORS.black,
                textAlign: "left",
              },
            }}
            fw={{base: 400, sm: 700}}
            fz={{base: 16, sm: 32}}
            ta={"center"}
          >
            Our platform not only gives you the product but also introduces you
            to new recipes and the ability to share yours too. Farmily is indeed
            as connecting as it sounds, you should be a part of it!
          </Text>
        </Container>
      </Box>
    </DashboardLayout>
  )
}

const about_us = [
  {
    image:
      "https://res.cloudinary.com/farmily-company/image/upload/v1689493472/Farmily_slide1_1_nk7hwm.webp",
    title:
      "We bridge the gap between producers and consumers by doing the grocery runs for the consumers.",
    id: 1,
  },
  {
    image:
      "https://res.cloudinary.com/farmily-company/image/upload/v1689525142/Farmily_slide2_1_qlard6.webp",
    title:
      "We safely inspect and pack all ordered item and get them ready to be dispatched to the users on time.",
    id: 2,
  },
  {
    image:
      "https://res.cloudinary.com/farmily-company/image/upload/v1689525142/Farmily_slide2_1_qlard6.webp",
    title:
      "We provide on time and quality doorstep delivery services. Our delivery agents are intelligent and customer friendly.",
    id: 3,
  },
  {
    image:
      "https://res.cloudinary.com/farmily-company/image/upload/v1689525909/family_eating_1_zjvc30.webp",
    title:
      "We put smiles on the faces of our users by ensuring that they get quality and affordable items at their doorsteps",
    id: 4,
  },
]
