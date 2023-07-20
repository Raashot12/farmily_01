import {Box, Container, Flex,} from "@mantine/core"
import React from "react"
import {motion} from "framer-motion"
import styled from "@emotion/styled"
import {APPCOLORS} from "../sharedComponent/Color"
import {useMediaQuery} from "@mantine/hooks"

const HeroSection = () => {
  const mobileScreen = useMediaQuery("(max-width: 48em)")
  return (
    <>
      <Box mt={{base: 28, lg: 76}}>
        <Flex
          align="center"
          sx={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            minHeight: "793px",
            zIndex: 1,
            "@media (max-width: 679px)": {
              minHeight: "427px",
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
              transform: "translateY(18px)",
              zIndex: -1,
              background:
                "url(https://res.cloudinary.com/farmily-company/image/upload/v1689463829/New_yfapkg.webp) no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
          <Container size="xl">
            <motion.div
              animate={{opacity: 1, scale: 1}}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.5, 0.71, 1, 1.5],
              }}
              initial={{opacity: 0, scale: 0.5}}
            >
              <Box sx={{textAlign: "center", color: APPCOLORS.black}}>
                <Box
                  fw={700}
                  sx={{textTransform: "uppercase"}}
                  fz={{base: 20, sm: 32}}
                  ff={"NexaBold"}
                  mb={12}
                >
                  FARM FRESHNESS
                </Box>
                <Box
                  fz={{base: 24, sm: 50}}
                  mb={{base: 20, sm: 43}}
                  fw={700}
                  ta={"center"}
                  lh={"normal"}
                  ff={"NexaBold"}
                >
                  {mobileScreen ? (
                    "STRAIGHT AT YOUR DOORSTEP"
                  ) : (
                    <Box>
                      DELIVERED AT YOUR<br></br> DOORSTEP
                    </Box>
                  )}
                </Box>

                <BtnMain
                  display="inline-block"
                  sx={{zIndex: 1}}
                  h={{base: 40, sm: 80}}
                  fz={{base: 16, sm: 26}}
                >
                  Shop now
                </BtnMain>
              </Box>
            </motion.div>
          </Container>
        </Flex>
      </Box>
    </>
  )
}

export default HeroSection

const BtnMain = styled(Box as any)`
  line-height: 40px;
  display: inline-block;
  text-align: center;
  font-weight: 700;
  font-family: "NexaBold";
  width: 100%;
  background: ${APPCOLORS.primary};
  color: #fff;
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
  cursor: pointer;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 567px) {
    border-radius: 8px;
  }
`
const BtnWhite = styled(Box as any)`
  border: 1px solid #635e68 !important;
  display: inline-block;
  padding: 0px 30px;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.1);
  line-height: 40px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  -webkit-transition: all 300ms linear 0s;
  -o-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
  &:hover {
    color: #fff;
    background: #e25d24;
    border-color: #e25d24;
  }
 
`
