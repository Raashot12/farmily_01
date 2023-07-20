import {Box, Flex, Text} from "@mantine/core"
import React from "react"
import {BsTwitter} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {FaFacebookF, FaLinkedin} from "react-icons/fa"
import {APPCOLORS} from "../../../sharedComponent/Color"

const MobileFooter = ({bg = `${APPCOLORS.white}`}: {bg?: string}) => {
  return (
    <Box display={{base: "block", sm: "none"}} pt={33} pb={33} bg={bg}>
      <Flex justify={"center"} direction={"column"} align={"center"}>
        <Text
          fw={400}
          fz={16}
          color={bg === APPCOLORS.white ? APPCOLORS.primary : APPCOLORS.white}
        >
          Copyright ©Farmily. All rights reserved.
        </Text>
        <Flex columnGap={24} mt={19}>
          {icons.map(value => {
            return (
              <Flex
                w={40}
                h={40}
                key={value.id}
                sx={{border: "1px solid #346D4D", borderRadius: "50%"}}
                justify={"center"}
                align={"center"}
                bg={bg !== APPCOLORS.white ? APPCOLORS.white : "none"}
              >
                <value.name color="#346D4D" />
              </Flex>
            )
          })}
        </Flex>
      </Flex>
    </Box>
  )
}

export default MobileFooter
const icons = [
  {
    name: AiFillInstagram,
    url: "/",
    id: 1,
  },
  {
    name: FaFacebookF,
    url: "/",
    id: 2,
  },
  {
    name: BsTwitter,
    url: "/",
    id: 3,
  },
  {
    name: FaLinkedin,
    url: "/",
    id: 4,
  },
]
