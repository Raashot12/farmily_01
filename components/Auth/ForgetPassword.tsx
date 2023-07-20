import React from "react"
import {
  Box,
  Text,
  Flex,
  Input,
  Stack,
  Button,
} from "@mantine/core"
import NavbarMenu from "../layout/NavBar"
import {APPCOLORS} from "../sharedComponent/Color"
import {useRouter} from "next/router"


const ForgetPassword = () => {
  const router = useRouter()

  return (
    <>
      <NavbarMenu />
      <Box mt={{base: 70, sm: 110}}>
        <Flex
          align="center"
          sx={{
            position: "relative",
            width: "100%",
            background: "rgba(0, 0, 0, 0.70)",
            minHeight: "calc(100vh - 110px)",
            "@media (max-width: 47.9375em)": {
              background: APPCOLORS.navColor,
            },
            "@media (max-width: 74em)": {
              minHeight: "calc(100vh - 70px)",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: 0,
              left: 0,
              height: "100%",
              width: "100%",
              transform: "translateY(0px)",
              zIndex: -1,
              background:
                "url(https://res.cloudinary.com/farmily-company/image/upload/v1689252954/Farmily_Farmily_Farmily_1_jzgrjc.png) no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
          <Flex
            sx={{
              borderRadius: "20px",
              border: `2px solid ${APPCOLORS.white}`,
              maxWidth: "538px",
              width: "100%",
              paddingLeft: 0,
              paddingRight: 0,
              "@media (min-width: 768px)": {
                paddingLeft: 50,
                paddingRight: 50,
              },
              "@media (max-width: 47.9375em)": {
                border: "none",
              },
            }}
            py={{base: 0, sm: 30}}
            justify={"center"}
            mx={{base: 16, xs: "auto"}}
          >
            <Box component="form" w={"100%"}>
              <Text
                sx={{
                  color: APPCOLORS.white,
                  marginBottom: 16,
                  "@media (max-width: 47.9375em)": {
                    color: APPCOLORS.black,
                    marginBottom: 20,
                  },
                }}
              >
                Please enter your email address to reset your password
              </Text>
              <Stack
                sx={{
                  "&.mantine-Stack-root": {
                    gap: 20,
                  },
                  "@media (max-width: 47.9375em)": {
                    "&.mantine-Stack-root": {
                      gap: 32,
                    },
                  },
                }}
              >
                <Input.Wrapper
                  label="Email Address"
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
                    placeholder="Enter your Email address"
                    sx={{
                      ".mantine-Input-input:focus-within": {
                        borderColor: APPCOLORS.white,
                        "@media (max-width: 47.9375em)": {
                          border: `1px solid ${APPCOLORS.black}`,
                        },
                      },
                      ".mantine-Input-input": {
                        background: "none",
                        color: APPCOLORS.white,
                        height: "3rem",
                        border: `1px solid ${APPCOLORS.white}`,
                        "@media (max-width: 47.9375em)": {
                          color: APPCOLORS.black,
                          border: `1px solid ${APPCOLORS.black}`,
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
              </Stack>
              <Button
                fullWidth
                sx={{
                  "&:active": {
                    background: APPCOLORS.primary,
                  },
                  "&:hover": {
                    background: APPCOLORS.primary,
                  },
                  borderRadius: "8px",
                  "@media (max-width: 47.9375em)": {
                    marginTop: 56,
                  },
                  ".mantine-Button-label": {
                    fontFamily: "NexaBold",
                    fontSize: 16,
                    "@media (max-width: 47.9375em)": {
                      fontFamily: "NexaLight",
                      fontWeight: 400,
                    },
                  },
                }}
                mih={{base: 56}}
                mt={50}
                onClick={() => router.push("/create-new-password")}
              >
                Reset
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default ForgetPassword
