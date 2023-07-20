import React, {useState, useEffect} from "react"
import Link from "next/link"
import {
  Box,
  Flex,
  useMantineColorScheme,
  Container,
  Burger,
  Stack,
  Collapse,
  useMantineTheme,
  Button,
  Group,
  Anchor,
} from "@mantine/core"
import Image from "next/image"
import {useRouter} from "next/router"
import styled from "@emotion/styled"
import Logo from "../../images/logo.png"
import FarmilyLogo from "../../Icons/FarmilyLogo"
import {useMediaQuery} from "@mantine/hooks"
import {APPCOLORS} from "../../sharedComponent/Color"
import IconArrowForward from "../../Icons/IconArrowForward"

const HeaderComponent = styled(Box as any)<{
  scrollDirection: string
  scrollheight: number
}>`
  box-shadow: 0 0 22px rgb(0 0 0 / 10%);
  height: 110px;
  &.global-nav--sticky {
    position: fixed;
    width: 100%;
    top: ${({scrollDirection}) =>
      scrollDirection === "UP" ? `${7}px` : `${0}px`};
    background: ${({theme}) => theme.white};
    box-shadow: 0 0 22px rgb(0 0 0 / 10%);
    transition: background 500ms ease, -webkit-transform 500ms ease;
    -o-transition: transform 500ms ease, background 500ms ease;
    transition: transform 500ms ease, background 500ms ease;
    transition: transform 500ms ease, background 500ms ease,
      -webkit-transform 500ms ease;
  }
  position: ${({scrollheight}) => (scrollheight <= 0 ? `fixed` : `absolute`)};
  width: 100%;
  top: 0;
  z-index: 100;
  background: ${({theme}) => theme.white};
  @media (max-width: 768px) {
    height: 70px;
    background-color: ${APPCOLORS.navColor};
    box-shadow: none;
  }
`

const navMenu = [
  {
    pathName: "Home",
    route: "/",
    id: 1,
  },
  {
    pathName: "About",
    route: "/about-us",
    id: 2,
  },

  {
    pathName: "FAQs",
    route: "/faq",
    id: 3,
  },
  {
    pathName: "Gallery",
    route: "/gallery",
    id: 4,
  },
]
const navMenuMobile = [
  {
    pathName: "Home",
    route: "/",
    id: 1,
  },
  {
    pathName: "About",
    route: "/about-us",
    id: 2,
  },

  {
    pathName: "FAQs",
    route: "/faq",
    id: 3,
  },
  {
    pathName: "Gallery",
    route: "/gallery",
    id: 4,
  },
  {
    pathName: "Privacy Policy",
    route: "/privacy-policy",
    id: 5,
  },
  {
    pathName: "Terms of Use",
    route: "/terms-of-use",
    id: 6,
  },
  {
    pathName: "Support",
    route: "/support",
    id: 7,
  },
]
function NavbarMenu() {
  const [scrollHeight, setScrollHeight] = useState(0)
  const [scrollDirection, setScrollDirection] = useState("")
  const [opened, setOpened] = useState(false)
  const {pathname} = useRouter()
  useEffect(() => {
    const scrollableElement = document.body
    function checkScrollDirectionIsUp(event: any) {
      if (event.wheelDelta) {
        return event.wheelDelta > 0
      }
      return event.deltaY < 0
    }
    function checkScrollDirection(event: any) {
      if (checkScrollDirectionIsUp(event)) {
        setScrollDirection("UP")
      } else {
        setScrollDirection("Down")
      }
    }

    function updateScrollHeight() {
      setScrollHeight(window.scrollY)
    }
    // Attach event listener for scroll events
    window.addEventListener("scroll", updateScrollHeight)
    scrollableElement.addEventListener("wheel", checkScrollDirection)
    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", updateScrollHeight)
    }
  }, [scrollHeight])
  const theme = useMantineTheme()
  const matchSmall = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  const router = useRouter()
  return (
    <>
      <HeaderComponent
        className={scrollHeight >= 140 ? "global-nav--sticky" : ""}
        position={scrollDirection}
        scrollheight={scrollHeight}
      >
        <Container size="xl" py={0} h={"inherit"}>
          <Flex align={"center"} justify={"space-between"} h={"inherit"}>
            <Link href="/" style={{display: "flex", alignItems: "center"}}>
              <FarmilyLogo full={!matchSmall} />
            </Link>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: 16,
                "@media (max-width:900px)": {
                  display: "none",
                },
              }}
            >
              {navMenu.map(value => {
                return (
                  <React.Fragment key={value.id}>
                    <CustomLink
                      href={value.route}
                      className={
                        pathname === "/" && value.route === "/"
                          ? "active"
                          : pathname.includes(value.route) &&
                            value.route !== "/"
                          ? "active"
                          : "not-active"
                      }
                    >
                      {value.pathName}
                    </CustomLink>
                  </React.Fragment>
                )
              })}

              <Button
                sx={{
                  borderRadius: "16px",
                  "&:hover": {
                    background: APPCOLORS.primary,
                  },
                  ".mantine-Button-label": {
                    fontSize: 26,
                    fontWeight: 700,
                    fontFamily: "NexaBold",
                    "@media (max-width: 48em)": {
                      fontSize: "16px",
                    },
                  },
                }}
                mah={"60px"}
                type="submit"
                onClick={() => router.push("sign-in")}
              >
                Sign In
              </Button>
            </Box>
            <Burger
              color={APPCOLORS.deepblack}
              h={32}
              w={32}
              opened={opened}
              onClick={() => setOpened(o => !o)}
              sx={{
                "@media (min-width:901px)": {
                  display: "none",
                },
              }}
            />
          </Flex>
        </Container>
        <Collapse in={opened}>
          <Box
            sx={{
              "@media (min-width:901px)": {
                display: "none",
              },
              width: "100%",
              "@media (max-width: 74em)": {
                minHeight: "calc(100vh - 70px)",
                paddingBottom: 20,
              },
            }}
            px={16}
            bg={APPCOLORS.white}
          >
            <Group grow pt={24} mb={28}>
              <Button
                mih={56}
                sx={{
                  "&:active": {
                    background: "none",
                  },
                  "&:hover": {
                    background: "none",
                  },
                  borderRadius: "8px",
                  border: `1px solid ${APPCOLORS.primary}`,
                  color: `${APPCOLORS.primary}`,
                  ".mantine-Button-label": {
                    fontSize: 16,
                  },
                }}
                bg={"none"}
                onClick={() => router.push("sign-in")}
              >
                Sign In
              </Button>
              <Button
                sx={{
                  "&:active": {
                    background: APPCOLORS.primary,
                  },
                  "&:hover": {
                    background: APPCOLORS.primary,
                  },
                  borderRadius: "8px",
                  ".mantine-Button-label": {
                    fontSize: 16,
                  },
                }}
                mih={56}
              >
                Shop Now
              </Button>
            </Group>
            <Stack spacing={25}>
              {navMenuMobile.map(value => {
                if (value.pathName === "Support") {
                  return (
                    <React.Fragment key={value.id}>
                      <MobileLink
                        href={value.route}
                        className={
                          pathname === "/" && value.route === "/"
                            ? "active"
                            : pathname.includes(value.route) &&
                              value.route !== "/"
                            ? "active"
                            : "not-active"
                        }
                      >
                        <Anchor fw={500} ff={"NexaBold"}>
                          {" "}
                          {value.pathName}
                        </Anchor>
                        <IconArrowForward />
                      </MobileLink>
                    </React.Fragment>
                  )
                }
                return (
                  <React.Fragment key={value.id}>
                    <MobileLink
                      href={value.route}
                      className={
                        pathname === "/" && value.route === "/"
                          ? "active"
                          : pathname.includes(value.route) &&
                            value.route !== "/"
                          ? "active"
                          : "not-active"
                      }
                    >
                      {value.pathName}
                    </MobileLink>
                  </React.Fragment>
                )
              })}
            </Stack>
          </Box>
        </Collapse>
      </HeaderComponent>
    </>
  )
}

export default NavbarMenu

const CustomLink = styled(Link)`
  font-weight: 500;
  font-family: "NexaBold";
  &.active {
    color: ${APPCOLORS.primary};
    font-weight: 600;
  }

  &.not-active:hover {
    color: ${APPCOLORS.primary};
    font-weight: 600;
    transition: all ease-in-out 0.5s;
  }
`
const MobileLink = styled(Link)`
  font-weight: 500;
  font-family: "NexaBold";
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid ${APPCOLORS.gray};
  padding: 16px 8px;
  &.active {
    color: ${APPCOLORS.primary};
    border: 1px solid ${APPCOLORS.primary};
    font-weight: 600;
  }

  &.not-active:hover {
    color: ${APPCOLORS.primary};
    font-weight: 600;
    transition: all ease-in-out 0.5s;
  }
`
