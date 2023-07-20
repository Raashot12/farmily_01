import React from "react"
import {
  Box,
  Text,
  Flex,
  Input,
  Stack,
  PasswordInput,
  Anchor,
  Button,
  Divider,
  Group,
  Checkbox,
} from "@mantine/core"
import NavbarMenu from "../layout/NavBar"
import {APPCOLORS} from "../sharedComponent/Color"
import {IconEyeClosed, IconEye} from "@tabler/icons-react"
import {useRouter} from "next/router"
import IconGoogle from "../Icons/IconGoogle"
import IconFacebook from "../Icons/IconFacebook"

const SignUp = () => {
  const router = useRouter()

  return (
    <>
      <NavbarMenu />
      <Box mt={{base: 70, lg: 110}}>
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
          py={{base: 40}}
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
                paddingLeft: 24,
                paddingRight: 24,
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
                  label="First Name"
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
                    type="text"
                    placeholder="First Name"
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
                <Input.Wrapper
                  label="Last Name"
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
                    type="text"
                    placeholder="Last Name"
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
                    placeholder="Email"
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
                <Input.Wrapper
                  label="Phone Number"
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
                    type="text"
                    placeholder="Phone Number"
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
                <PasswordInput
                  placeholder="Password"
                  label="Password"
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
                    ".mantine-PasswordInput-input:focus-within": {
                      borderColor: APPCOLORS.white,
                      "@media (max-width: 47.9375em)": {
                        border: `1px solid ${APPCOLORS.black}`,
                      },
                    },
                    ".mantine-Input-input": {
                      background: "none",
                      color: APPCOLORS.white,
                    },
                    ".mantine-PasswordInput-input": {
                      height: "3rem",
                      border: `1px solid ${APPCOLORS.white}`,
                      "@media (max-width: 47.9375em)": {
                        border: `1px solid ${APPCOLORS.black}`,
                        height: "3.5rem",
                      },
                    },
                    ".mantine-PasswordInput-innerInput::placeholder": {
                      color: APPCOLORS.white,
                      fontSize: 16,
                      "@media (max-width: 47.9375em)": {
                        color: APPCOLORS.gray,
                        fontSize: 14,
                        fontWeight: 400,
                      },
                    },
                    ".mantine-PasswordInput-innerInput": {
                      color: APPCOLORS.white,
                      border: "none",
                      height: "3rem",
                      "@media (max-width: 47.9375em)": {
                        color: APPCOLORS.black,
                        height: "3.5rem",
                      },
                    },
                  }}
                  visibilityToggleIcon={({reveal}) =>
                    reveal ? (
                      <IconEye size={20} color={APPCOLORS.white} />
                    ) : (
                      <IconEyeClosed size={20} color={APPCOLORS.white} />
                    )
                  }
                />
              </Stack>
              <Flex justify={"flex-start"}>
                <Text
                  color={APPCOLORS.white}
                  fw={400}
                  fz={12}
                  mt={8}
                  sx={{
                    "@media (max-width: 47.9375em)": {
                      color: APPCOLORS.primary,
                      textDecoration: "none",
                      marginTop: 24
                    },
                  }}
                >
                  Hint: At least eight characters, with one or more number and
                  symbol
                </Text>
              </Flex>
              <Group
                mt={10}
                noWrap
               
              >
                <Checkbox
                  color="green"
                  sx={{
                    ".mantine-Checkbox-input": {
                      background: "none",
                    },
                  }}
                />
                <Text
                  color={APPCOLORS.white}
                  fw={400}
                  fz={16}
                  lh={"16px"}
                  sx={{
                    "@media (max-width: 47.9375em)": {
                      color: APPCOLORS.primary,
                      fontFamily: "NexaLight",
                      fontWeight: 400,
                      fontSize: 12,
                    },
                  }}
                >
                  By signing up, you are agreeing to our Terms of Service and
                  Privacy Policy
                </Text>
              </Group>
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
                  ".mantine-Button-label": {
                    fontFamily: "NexaBold",
                    "@media (max-width: 47.9375em)": {
                      fontFamily: "NexaLight",
                      fontWeight: 400,
                      fontSize: 16,
                    },
                  },
                }}
                mih={{base: 56, sm: 70}}
                mt={62}
              >
                Sign Up
              </Button>
              <Flex justify={"flex-end"}>
                <Text
                  color={APPCOLORS.white}
                  fw={700}
                  fz={13}
                  mt={8}
                  sx={{
                    "@media (max-width: 47.9375em)": {
                      color: APPCOLORS.black,
                      fontFamily: "NexaLight",
                      fontWeight: 400,
                    },
                  }}
                >
                  Already have an account?
                  <Text
                    display="inline-block"
                    ff={"NexaBold"}
                    color={APPCOLORS.green}
                    sx={{
                      cursor: "pointer",
                      "@media (max-width: 47.9375em)": {
                        fontFamily: "NexaLight",
                        fontWeight: 400,
                      },
                    }}
                    onClick={() => router.push("/sign-in")}
                    ml={4}
                  >
                    Sign In
                  </Text>
                </Text>
              </Flex>
              <Flex
                justify={"center"}
                align={"center"}
                columnGap={{base: 0, sm: 20}}
                mt={50}
                mb={32}
              >
                <Divider
                  sx={{
                    color: `${APPCOLORS.white}`,
                    "@media (max-width: 47.9375em)": {
                      color: `${APPCOLORS.gray}`,
                    },
                  }}
                  orientation="horizontal"
                  w={"48%"}
                ></Divider>
                <Text
                  sx={{
                    color: `${APPCOLORS.white}`,
                    fontSize: "26px",
                    fontWeight: 700,
                    "@media (max-width: 47.9375em)": {
                      color: `${APPCOLORS.black}`,
                      fontSize: 12,
                      fontFamily: 'NexaLight'
                    },
                  }}
                >
                  or
                </Text>
                <Divider
                  w={"48%"}
                  sx={{
                    color: `${APPCOLORS.white}`,
                    "@media (max-width: 47.9375em)": {
                      color: `${APPCOLORS.gray}`,
                    },
                  }}
                  orientation="horizontal"
                ></Divider>
              </Flex>
              <Stack>
                <Button
                  fullWidth
                  leftIcon={<IconGoogle />}
                  mih={48}
                  sx={{
                    "&:active": {
                      background: "none",
                    },
                    "&:hover": {
                      background: "none",
                    },
                    borderRadius: "8px",
                    border: `1px solid ${APPCOLORS.primary}`,
                    color: `${APPCOLORS.white}`,
                    ".mantine-Button-label": {
                      fontSize: 20,
                      fontWeight: 700,
                      "@media (max-width: 47.9375em)": {
                        color: `${APPCOLORS.primary}`,
                        fontSize: 16,
                        fontWeight: 400,
                      },
                    },
                  }}
                  bg={"none"}
                >
                  Continue with Google
                </Button>
                <Button
                  fullWidth
                  leftIcon={<IconFacebook />}
                  mih={48}
                  sx={{
                    "&:active": {
                      background: "none",
                    },
                    "&:hover": {
                      background: "none",
                    },
                    borderRadius: "8px",
                    border: `1px solid ${APPCOLORS.primary}`,
                    color: `${APPCOLORS.white}`,
                    ".mantine-Button-label": {
                      fontSize: 20,
                      fontWeight: 700,
                      "@media (max-width: 47.9375em)": {
                        color: `${APPCOLORS.primary}`,
                        fontSize: 16,
                        fontWeight: 400,
                      },
                    },
                  }}
                  bg={"none"}
                >
                  Continue with Facebook
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default SignUp
