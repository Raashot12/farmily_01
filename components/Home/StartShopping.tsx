import {
  Box,
  Container,
  Grid,
  useMantineTheme,
  Image,
  AspectRatio,
  Text,
  Stack,
  Flex,
  Group,
  Button,
} from "@mantine/core"
import {useMediaQuery} from "@mantine/hooks"
import React from "react"
import Curly from "../Icons/Curly"
import {APPCOLORS} from "../sharedComponent/Color"
import {useRouter} from "next/router"

const StartShopping = () => {
  const theme = useMantineTheme()
  const matchSmall = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
  const router = useRouter()
  return (
    <>
      <Box pt={{base: 24, sm: 64}} w={"100%"}>
        <Curly full={!matchSmall} />
        <Box
          bg={APPCOLORS.primary}
          pos="relative"
          top={-20}
          sx={{width: "100%"}}
          pb={{base: 110, sm: 4}}
        >
          <Container size={"xl"} py={{base: 20, sm: 30}}>
            <Flex
              columnGap={71}
              align={"center"}
              wrap={{base: "wrap", md: "nowrap"}}
              rowGap={10}
            >
              <Box
                w={{base: "100%", md: "50%"}}
                display={{base: "none", sm: "block"}}
              >
                <AspectRatio ratio={720 / 1080} maw={{base: "612px"}} mx="auto">
                  <Image
                    src="https://res.cloudinary.com/farmily-company/image/upload/v1689231299/555_baz6nn.png"
                    alt="Panda"
                  />
                </AspectRatio>
              </Box>
              <Box w={{base: "100%", md: "50%"}}>
                <Box>
                  {" "}
                  <Text
                    color={APPCOLORS.white}
                    fz={{base: 24, sm: 48, lg: 64}}
                    fw={700}
                    ff={"NexaBold"}
                    ta={{base: "center", md: "left"}}
                  >
                    Here’s how easy it is
                  </Text>
                </Box>

                <Flex
                  direction={"column"}
                  mt={{base: 30, sm: 60}}
                  rowGap={{base: 24, sm: 32}}
                >
                  <Group spacing={21} noWrap>
                    <Flex
                      justify={"center"}
                      align={"center"}
                      bg={APPCOLORS.white}
                      sx={{borderRadius: "50%"}}
                      h={{base: 32, sm: 52}}
                      w={{base: 32, sm: 52}}
                    >
                      <Text
                        ff={"NexaBold"}
                        color={APPCOLORS.primary}
                        fz={{base: 16, sm: 40}}
                      >
                        1
                      </Text>
                    </Flex>
                    <Text
                      color={APPCOLORS.white}
                      fz={{base: 16, sm: 26}}
                      ff={"NexaBold"}
                      fw={700}
                      w={"100%"}
                    >
                      Subscribe to the farmers market
                    </Text>
                  </Group>
                  <Group spacing={21} noWrap>
                    <Flex
                      justify={"center"}
                      align={"center"}
                      bg={APPCOLORS.white}
                      sx={{borderRadius: "50%"}}
                      h={{base: 32, sm: 52}}
                      w={{base: 32, sm: 52}}
                    >
                      <Text
                        ff={"NexaBold"}
                        color={APPCOLORS.primary}
                        fz={{base: 16, sm: 40}}
                      >
                        2
                      </Text>
                    </Flex>
                    <Text
                      color={APPCOLORS.white}
                      fz={{base: 16, sm: 26}}
                      ff={"NexaBold"}
                      fw={700}
                      w={"100%"}
                    >
                      Curate your basket with the Finest, Farm-Fresh Ingredients
                    </Text>
                  </Group>
                  <Group spacing={21} noWrap>
                    <Flex
                      justify={"center"}
                      align={"center"}
                      bg={APPCOLORS.white}
                      sx={{borderRadius: "50%"}}
                      h={{base: 32, sm: 52}}
                      w={{base: 32, sm: 52}}
                    >
                      <Text
                        ff={"NexaBold"}
                        color={APPCOLORS.primary}
                        fz={{base: 16, sm: 40}}
                      >
                        3
                      </Text>
                    </Flex>
                    <Text
                      color={APPCOLORS.white}
                      fz={{base: 16, sm: 26}}
                      ff={"NexaBold"}
                      fw={700}
                      w={"100%"}
                    >
                      Sit back, relax and experiences the convenience of
                      doorstep delivery
                    </Text>
                  </Group>
                </Flex>
                <Button
                  mih={56}
                  fullWidth
                  mt={32}
                  sx={{
                    "&:active": {
                      background: APPCOLORS.white,
                    },
                    "&:hover": {
                      background: APPCOLORS.white,
                    },
                    borderRadius: "8px",
                    border: `1px solid ${APPCOLORS.white}`,
                    color: `${APPCOLORS.primary}`,
                    ".mantine-Button-label": {
                      fontSize: 16,
                      fontWeight: 700,
                      fontFamily: "NexaBold",
                    },
                  }}
                  bg={APPCOLORS.white}
                  onClick={() => router.push("sign-in")}
                >
                  Start shopping
                </Button>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default StartShopping
