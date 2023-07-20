/* eslint-disable react/jsx-no-undef */
import {Box, Button, Container, Flex, Grid, Input, Text} from "@mantine/core"
import React from "react"
import {APPCOLORS} from "../sharedComponent/Color"

const Story = () => {
  return (
    <Box
      bg={APPCOLORS.primary}
      pos="relative"
      sx={{width: "100%"}}
      pb={{base: 20, sm: 130}}
      pt={{base: 58, sm: 100}}
    >
      <Container size={"xl"}>
        {" "}
        <Flex
          fw={700}
          fz={{base: 24, sm: 64}}
          ff={"NexaBold"}
          ta={"center"}
          mx={"auto"}
          justify={"center"}
          mb={{base: 16, md: 24}}
          sx={{color: APPCOLORS.black}}
        >
          Never miss a &nbsp;
          <Box sx={{color: APPCOLORS.white}}>story</Box>{" "}
        </Flex>
        <Text
          lh={"28px"}
          color={APPCOLORS.white}
          ta={{base: "center", md: "left"}}
          w={"100%"}
          maw={"628px"}
          mx={"auto"}
          fz={{base: 16, sm: 24}}
          mb={{base: 16, md: 48}}
        >
          Join our newsletter to get the latest on exclusive deals, discounts,
          and special offers🎉.
        </Text>
        <Grid maw={"628px"} mx={"auto"} align="center">
          <Grid.Col md={8}>
            <Input.Wrapper
              withAsterisk
              sx={{
                ".mantine-InputWrapper-label": {
                  display: "none",
                },
                "@media (max-width: 47.9375em)": {
                  ".mantine-InputWrapper-label": {
                    display: "block",
                    fontSize: 16,
                    fontWeight: 400,
                    marginBottom: 5,
                    ".mantine-InputWrapper-required": {
                      color: APPCOLORS.black,
                    },
                  },
                },
              }}
            >
              <Input
                type="email"
                placeholder="Your Email"
                sx={{
                  ".mantine-Input-input:focus-within": {
                    borderColor: APPCOLORS.white,
                    "@media (max-width: 47.9375em)": {
                      border: `1px solid ${APPCOLORS.white}`,
                    },
                  },
                  ".mantine-Input-input": {
                    background: "none",
                    color: APPCOLORS.white,
                    height: "3rem",
                    border: `1px solid ${APPCOLORS.white}`,
                    "@media (max-width: 47.9375em)": {
                      color: APPCOLORS.white,
                      border: `1px solid ${APPCOLORS.white}`,
                      height: "3.5rem",
                    },
                  },
                  ".mantine-Input-input::placeholder": {
                    color: APPCOLORS.white,
                    fontSize: 16,
                    "@media (max-width: 47.9375em)": {
                      color: APPCOLORS.gray,
                      fontSize: 14,
                      fontWeight: 400,
                    },
                  },
                }}
              />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col md={4}>
            <Button
              fullWidth
              sx={{
                "&:active": {
                  background: APPCOLORS.white,
                },
                "&:hover": {
                  background: APPCOLORS.white,
                },
                borderRadius: "8px",
                background: APPCOLORS.white,
                ".mantine-Button-label": {
                  fontFamily: "NexaBold",
                  color: APPCOLORS.primary,
                  "@media (max-width: 47.9375em)": {
                    fontFamily: "NexaBold",
                    fontWeight: 700,
                    fontSize: 16,
                  },
                },
              }}
              // mih={{base: 56}}
            >
              Join Now
            </Button>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  )
}

export default Story
