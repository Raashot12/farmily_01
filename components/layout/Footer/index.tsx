import {
  Container,
  Box,
  Grid,
  Text,
  Flex,
  Stack,
  Anchor,
  Group,
} from "@mantine/core"
import React, {useState} from "react"
import {useRouter} from "next/router"
import {APPCOLORS} from "../../sharedComponent/Color"
import FooterLogo from "../../Icons/FooterLogo"
import MobileFooter from "./Mobile"

const Footer = ({bg}: {bg?: string}) => {
  const [email, setEmail] = useState("")
  const [, setIsSummitted] = useState(false)
  const router = useRouter()
  const handleSubmit = () => {
    if (!email) return
    setEmail("")
    setIsSummitted(true)
  }
  const pathPushTo = (value: string) => {
    router.push(`/${value}`)
  }
  return (
    <>
      <Box
        display={{base: "none", sm: "block"}}
        py={{base: 70, sm: 14}}
        sx={{
          background: APPCOLORS.white,
          color: APPCOLORS.black,
          overflowX: "hidden",
        }}
      >
        <Container size={"xl"}>
          <Grid gutter={40} mx={"auto"} justify="center">
            <Grid.Col sm={6} md={3} pl={0}>
              <Text fw={700} mb={28} fz={32} ff={"NexaBold"}>
                Socials
              </Text>
              <Stack fz={{base: 16, sm: 24}} spacing={30}>
                <Anchor>Twitter</Anchor>
                <Anchor>Facebook</Anchor>
                <Anchor>LinkedIn</Anchor>
                <Anchor>Tiktok</Anchor>
                <Anchor>Instagram</Anchor>
              </Stack>
            </Grid.Col>
            <Grid.Col sm={6} md={3} pl={0}>
              <Text fw={700} mb={28} fz={32} ff={"NexaBold"}>
                Company
              </Text>
              <Stack fz={{base: 16, sm: 24}} spacing={30}>
                <Anchor onClick={() => pathPushTo("/about-us")}>
                  About Us
                </Anchor>
                <Anchor onClick={() => pathPushTo("/terms-of-use")}>
                  Terms and Service
                </Anchor>
                <Anchor onClick={() => pathPushTo("/privacy-policy")}>
                  Privacy Policy
                </Anchor>
                <Anchor onClick={() => pathPushTo("/faq")}>FAQs</Anchor>
              </Stack>
            </Grid.Col>
            <Grid.Col sm={6} md={3} pl={0}>
              <Text fw={700} mb={28} fz={32} ff={"NexaBold"}>
                Support
              </Text>
              <Stack fz={{base: 16, sm: 24}} spacing={30}>
                <Text>hello@farmily.africa</Text>
                <Text>Live Chat</Text>
                <Text>08099929997</Text>
              </Stack>
            </Grid.Col>
          </Grid>

          <Flex
            mt={{base: 40, sm: 60, md: 87}}
            justify={{base: "center", sm: "space-between"}}
            wrap="wrap"
            rowGap={18}
            align={"center"}
          >
            <Group
              sx={{flexWrap: "wrap", justifyContent: "center"}}
              spacing={8}
              mx={"auto"}
              fz={{base: 16, sm: 24}}
            >
              <Text>Copyright ©Farmily.</Text>
              <FooterLogo />
              <Text>All rights reserved.</Text>
            </Group>
          </Flex>
        </Container>
      </Box>
      <MobileFooter bg={bg} />
    </>
  )
}

export default Footer
