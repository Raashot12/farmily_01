import {Grid, Image, Box, Container, Text, AspectRatio} from "@mantine/core"
import React from "react"
import {APPCOLORS} from "../sharedComponent/Color"
import {useMediaQuery} from "@mantine/hooks"

const Gallery = () => {
  const largeScreen = useMediaQuery("(min-width: 63.5em)")
  return (
    <Box mt={{base: 44, lg: 76}}>
      <Box
        w="100%"
        bg={APPCOLORS.navColor}
        pt={{base: 16, md: 37}}
        pb={{base: 8, md: 53}}
      >
        <Text
          fz={{base: 24, md: 64}}
          fw={700}
          ff={"NexaBold"}
          ta={"center"}
          color={APPCOLORS.primary}
        >
          GALLERY
        </Text>
      </Box>
      <Box
        bg={{base: APPCOLORS.navColor, md: APPCOLORS.white}}
        py={{base: 8, md: 25}}
      >
        <Container size={"xl"} py={0}>
          <Text
            fz={{base: 16, md: 36}}
            fw={700}
            ff={"NexaLight"}
            ta={{base: "left"}}
            color={APPCOLORS.black}
          >
            {largeScreen
              ? " Explore our captivating gallery, celebrating farm-fresh produce in all its vibrant glory. Welcome to freshness personified"
              : "Explore our captivating gallery of captivating images, celebrating farm-fresh produce in all its vibrant flavours and glory. Welcome to freshness personified   🎉."}
          </Text>
        </Container>
      </Box>
      <Box bg={{base: APPCOLORS.navColor}}>
        <Container size={"xl"}>
          <Grid>
            <Grid.Col
              xs={6}
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "50%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689792191/Farmily_slide1_1_1_qg7w2g.webp"
                alt=""
              />
            </Grid.Col>
            <Grid.Col
              xs={6}
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "50%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689792180/1_1_fft9ph.webp"
                alt=""
              />
            </Grid.Col>
          </Grid>
          <Grid mt={{base: 5, md: 19}}>
            <Grid.Col>
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689834326/IMG_0786_1_1_wpsyv7.png"
                alt=""
              />
            </Grid.Col>
          </Grid>
          <Grid mt={{base: 8, md: 19}} align="center" grow>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "30%",
                },
              }}
            >
              <Grid>
                <Grid.Col>
                  <Image
                    src="https://res.cloudinary.com/farmily-company/image/upload/v1689834873/clem-onojeghuo-eCre0iMGtEA-unsplash_3_zh8gvq.png"
                    alt=""
                  />
                </Grid.Col>
                <Grid.Col>
                  <Image
                    src="https://res.cloudinary.com/farmily-company/image/upload/v1689834896/alexander-schimmeck-ks5flsI1mNo-unsplash_3_rnxifc.png"
                    alt=""
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "70%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689835050/Family_Farmily_1_nkvcvw.png"
                alt=""
              />
            </Grid.Col>
          </Grid>
          <Grid mt={{base: 8, md: 19}} align="center">
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "70%",
                },
              }}
            >
              <Grid>
                <Grid.Col
                  sx={{
                    "&.mantine-Grid-col": {
                      maxWidth: "50%",
                    },
                  }}
                >
                  <Image
                    src="https://res.cloudinary.com/farmily-company/image/upload/v1689835614/mariko-margetson-rxUQda-9Rkk-unsplash_3_nszjd5.png"
                    alt=""
                  />
                </Grid.Col>
                <Grid.Col
                  sx={{
                    "&.mantine-Grid-col": {
                      maxWidth: "50%",
                    },
                  }}
                >
                  <Image
                    src="https://res.cloudinary.com/farmily-company/image/upload/v1689835862/IMG_0790_1_sqwkb4.png"
                    alt=""
                  />
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col>
                  <Image
                    src="https://res.cloudinary.com/farmily-company/image/upload/v1689836251/itay-peer-4CZv69MLlp4-unsplash_5_bmrccz.png"
                    alt=""
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "30%",
                },
              }}
            >
              <Grid>
                <Grid.Col span={12}>
                  <Image
                    src="https://res.cloudinary.com/farmily-company/image/upload/v1689836311/itay-peer-4CZv69MLlp4-unsplash_3_tkxj5g.png"
                    alt=""
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
          <Grid align="center" mt={{base: 8, md: 19}}>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "30%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689838478/IMG_3535_1_1_1_n3bc7h.png"
                alt=""
              />
            </Grid.Col>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "70%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689838332/IMG_0793_1_fm31xh.png"
                alt=""
              />
            </Grid.Col>
          </Grid>
          <Grid mt={{base: 8, md: 100}}>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "25%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689838803/Faarmily_Family2_1_mduhtp.png"
                alt=""
              />
            </Grid.Col>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "25%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689838902/food-photographer-DL4nwJFNGOs-unsplash_3_jsvcli.png"
                alt=""
              />
            </Grid.Col>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "25%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689838802/family_eating_1_1_cj7bxx.png"
                alt=""
              />
            </Grid.Col>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "25%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689838802/jakub-kapusnak-vLQzopDRSNI-unsplash_3_bzgx6g.png"
                alt=""
              />
            </Grid.Col>
          </Grid>
          <Grid mt={{base: 8, md: 19}}>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "50%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689839555/stephanie-moody-929VKYo07h4-unsplash_3_yqxhkf.png"
                alt=""
              />
            </Grid.Col>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "50%",
                },
              }}
            >
              <Grid>
                <Grid.Col
                  sx={{
                    "&.mantine-Grid-col": {
                      maxWidth: "50%",
                    },
                  }}
                >
                  <Image
                    src="https://res.cloudinary.com/farmily-company/image/upload/v1689839554/vino-li-pCjw_ygKCv0-unsplash_3_moc2um.png"
                    alt=""
                  />
                </Grid.Col>
                <Grid.Col
                  sx={{
                    "&.mantine-Grid-col": {
                      maxWidth: "50%",
                    },
                  }}
                >
                  <Image
                    src="https://res.cloudinary.com/farmily-company/image/upload/v1689839554/maria-lin-kim-8RaUEd8zD-U-unsplash_3_tmlfuj.png"
                    alt=""
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
          <Grid mt={{base: 8, md: 19}}>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "50%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689839830/harshal-s-hirve-2GiRcLP_jkI-unsplash_3_dofctr.png"
                alt=""
              />
            </Grid.Col>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "50%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689839829/marcos-paulo-prado-0py70yxumAk-unsplash_3_pvyqn2.png"
                alt=""
              />
            </Grid.Col>
          </Grid>
          <Grid mt={{base: 8, md: 19}}>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "100%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689839985/alexander-schimmeck-2zJhA9RSkys-unsplash_3_tth7us.png"
                alt=""
              />
            </Grid.Col>
          </Grid>
          <Grid mt={{base: 8, md: 19}}>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "50%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689839978/IMG_0792_1_ywnlw9.png"
                alt=""
              />
            </Grid.Col>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "50%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689839978/IMG_0782_1_i1qocl.png"
                alt=""
              />
            </Grid.Col>
          </Grid>
          <Grid mt={{base: 8, md: 19}} align="center">
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "30%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689839978/IMG_0691_1_dxkt8i.png"
                alt=""
              />
            </Grid.Col>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "70%",
                },
              }}
            >
              <Grid>
                <Grid.Col
                  sx={{
                    "&.mantine-Grid-col": {
                      maxWidth: "100%",
                    },
                  }}
                >
                  <Image
                    src="https://res.cloudinary.com/farmily-company/image/upload/v1689839978/itay-peer-4CZv69MLlp4-unsplash_5_1_rij0xo.png"
                    alt=""
                  />
                </Grid.Col>
              </Grid>

              <Grid>
                <Grid.Col
                  sx={{
                    "&.mantine-Grid-col": {
                      maxWidth: "50%",
                    },
                  }}
                >
                  <Image
                    src="https://res.cloudinary.com/farmily-company/image/upload/v1689839978/itay-peer-4CZv69MLlp4-unsplash_4_yxac2k.png"
                    alt=""
                  />
                </Grid.Col>
                <Grid.Col
                  sx={{
                    "&.mantine-Grid-col": {
                      maxWidth: "50%",
                    },
                  }}
                >
                  <Image
                    src="https://res.cloudinary.com/farmily-company/image/upload/v1689839977/itay-peer-4CZv69MLlp4-unsplash_6_hlcv7o.png"
                    alt=""
                    sx={{
                      img: {
                        borderRadius: 8,
                      },
                    }}
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
          <Grid mt={{base: 8, md: 19}} align="center" grow>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "30%",
                },
              }}
            >
              <Grid>
                <Grid.Col>
                  <Image
                    src="https://res.cloudinary.com/farmily-company/image/upload/v1689840801/use_wcg82b.png"
                    alt=""
                  />
                </Grid.Col>
                <Grid.Col mt={{md: 52}}>
                  <Image
                    src="https://res.cloudinary.com/farmily-company/image/upload/v1689840801/IMG_0784_1_jwut45.png"
                    alt=""
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "70%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689840801/222_hzjfac.png"
                alt=""
              />
            </Grid.Col>
          </Grid>
          <Grid mt={{base: 8, md: 19}}>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "100%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689841018/222_1_d7cems.png"
                alt=""
              />
            </Grid.Col>
          </Grid>
          <Grid mt={{base: 8, md: 19}}>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "50%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689841023/3of3_medmtw.png"
                alt=""
              />
            </Grid.Col>
            <Grid.Col
              sx={{
                "&.mantine-Grid-col": {
                  maxWidth: "50%",
                },
              }}
            >
              <Image
                src="https://res.cloudinary.com/farmily-company/image/upload/v1689841022/IMG_0759_1_cw9sci.png"
                alt=""
                sx={{
                  img: {
                    borderRadius: 8,
                  },
                }}
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Gallery
