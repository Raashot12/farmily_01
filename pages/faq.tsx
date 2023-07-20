import {Box, Collapse, Container, Flex, Stack, Text} from "@mantine/core"
import React, {useState} from "react"
import DashboardLayout from "../components/layout/DashboardLayout"
import {APPCOLORS} from "../components/sharedComponent/Color"
import IconMinus from "../components/Icons/IconMinus"
import styled from "@emotion/styled"
import IconPlus from "../components/Icons/IconPlus"
import {useMediaQuery} from "@mantine/hooks"

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)
  const onTitleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }
  const mobileScreen = useMediaQuery("(max-width: 47.5em)")
  return (
    <DashboardLayout title="Faq" bg={APPCOLORS.primary}>
      <Box mt={{base: 66, sm: 80, md: 110}}>
        <Text
          fz={64}
          fw={700}
          ta={"center"}
          ff={"NexaBold"}
          color={APPCOLORS.primary}
          display={{base: "none", sm: "block"}}
        >
          FAQ
        </Text>
        <Text
          color={APPCOLORS.blackVariant}
          fz={20}
          ta={"center"}
          display={{base: "block", sm: "none"}}
        >
          Frequently Asked Questions
        </Text>
      </Box>

      <Container size={"xl"} mt={{base: 28, sm: 78}}>
        <Flex direction={"column"} rowGap={{base: 24, sm: 75}}>
          <Box
            sx={{
              boxShadow:
                "1px 1px 8px 0px rgba(0, 0, 0, 0.15), -1px -1px 8px 0px rgba(0, 0, 0, 0.15)",
              borderRadius: 8,
              padding: "32px 16px 16px 16px",
            }}
          >
            <Text fw={700} fz={{base: 24, sm: 64}} ff={"NexaBold"} mb={16}>
              Product Information
            </Text>
            <Stack spacing={24}>
              {productInfo.map(value => {
                return (
                  <Box
                    key={value.id}
                    p={8}
                    sx={{
                      borderRadius: 8,
                      boxShadow:
                        "-2px -2px 4px 0px rgba(0, 0, 0, 0.06), 2px 2px 4px 0px rgba(0, 0, 0, 0.06)",
                    }}
                    onClick={() => onTitleClick(value.id)}
                  >
                    <GridWrapperTwoCol align={"center"}>
                      <Text
                        fz={{base: 16, sm: 40}}
                        fw={700}
                        ff={"NexaBold"}
                        lh={{base: "normal", sm: "40px"}}
                      >
                        {value.title}
                      </Text>
                      <Box className="time-in-col">
                        {activeIndex === value.id ? (
                          <>
                            <IconMinus size={mobileScreen ? 16 : 33} />
                          </>
                        ) : (
                          <IconPlus size={mobileScreen ? 16 : 33} />
                        )}
                      </Box>
                    </GridWrapperTwoCol>

                    <Collapse in={activeIndex === value.id}>
                      <Text
                        fz={{base: 14, sm: 26}}
                        mt={{base: 16, sm: 24}}
                        ff={{base: "NexaLight", sm: "NexaBold"}}
                        fw={{base: 600, sm: 700}}
                      >
                        {value.content}
                      </Text>
                    </Collapse>
                  </Box>
                )
              })}
            </Stack>
          </Box>
          <OrderingDelivery />
          <PricingFAQ />
          <Sustainable />
        </Flex>
      </Container>
    </DashboardLayout>
  )
}

export default FaqPage

const GridWrapperTwoCol = styled(Flex)<{
  mb?: number
  mt?: number
  isMoble?: boolean
}>`
  display: grid;
  gap: 1.8rem;
  margin-top: ${({mt}) => (mt ? `${mt}px` : `${0}px`)};
  align-items: baseline;
  grid-template-columns: 1fr 2rem;
  .attribute-container {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(var(--column-width-min), 1fr)
    );
  }
  .main-col {
    --column-width-min: 100%;
    text-align: left;
  }
  .time-in-col {
    --column-width-min: 100%;
    text-align: center;
  }
`
const OrderingDelivery = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)
  const onTitleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }
  const mobileScreen = useMediaQuery("(max-width: 47.5em)")
  return (
    <Box
      sx={{
        boxShadow:
          "1px 1px 8px 0px rgba(0, 0, 0, 0.15), -1px -1px 8px 0px rgba(0, 0, 0, 0.15)",
        borderRadius: 8,
        padding: "32px 16px 16px 16px",
      }}
    >
      <Text fw={700} fz={{base: 24, sm: 64}} ff={"NexaBold"} mb={16}>
        Ordering and Delivery
      </Text>
      <Stack spacing={24}>
        {orderingData.map(value => {
          return (
            <Box
              key={value.id}
              p={8}
              sx={{
                borderRadius: 8,
                boxShadow:
                  "-2px -2px 4px 0px rgba(0, 0, 0, 0.06), 2px 2px 4px 0px rgba(0, 0, 0, 0.06)",
              }}
              onClick={() => onTitleClick(value.id)}
            >
              <GridWrapperTwoCol align={"center"}>
                <Text
                  fz={{base: 16, sm: 40}}
                  fw={700}
                  ff={"NexaBold"}
                  lh={{base: "normal", sm: "40px"}}
                >
                  {value.title}
                </Text>
                <Box className="time-in-col">
                  {activeIndex === value.id ? (
                    <>
                      <IconMinus size={mobileScreen ? 16 : 33} />
                    </>
                  ) : (
                    <IconPlus size={mobileScreen ? 16 : 33} />
                  )}
                </Box>
              </GridWrapperTwoCol>

              <Collapse in={activeIndex === value.id}>
                <Text
                  fz={{base: 14, sm: 26}}
                  mt={{base: 16, sm: 24}}
                  ff={{base: "NexaLight", sm: "NexaBold"}}
                  fw={{base: 600, sm: 700}}
                >
                  {value.content}
                </Text>
              </Collapse>
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}
const PricingFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)
  const onTitleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }
  const mobileScreen = useMediaQuery("(max-width: 47.5em)")
  return (
    <Box
      sx={{
        boxShadow:
          "1px 1px 8px 0px rgba(0, 0, 0, 0.15), -1px -1px 8px 0px rgba(0, 0, 0, 0.15)",
        borderRadius: 8,
        padding: "32px 16px 16px 16px",
      }}
    >
      <Text fw={700} fz={{base: 24, sm: 64}} ff={"NexaBold"} mb={16}>
        Payment and Pricing
      </Text>
      <Stack spacing={24}>
        {pricingData.map(value => {
          return (
            <Box
              key={value.id}
              p={8}
              sx={{
                borderRadius: 8,
                boxShadow:
                  "-2px -2px 4px 0px rgba(0, 0, 0, 0.06), 2px 2px 4px 0px rgba(0, 0, 0, 0.06)",
              }}
              onClick={() => onTitleClick(value.id)}
            >
              <GridWrapperTwoCol align={"center"}>
                <Text
                  fz={{base: 16, sm: 40}}
                  fw={700}
                  ff={"NexaBold"}
                  lh={{base: "normal", sm: "40px"}}
                >
                  {value.title}
                </Text>
                <Box className="time-in-col">
                  {activeIndex === value.id ? (
                    <>
                      <IconMinus size={mobileScreen ? 16 : 33} />
                    </>
                  ) : (
                    <IconPlus size={mobileScreen ? 16 : 33} />
                  )}
                </Box>
              </GridWrapperTwoCol>

              <Collapse in={activeIndex === value.id}>
                <Text
                  fz={{base: 14, sm: 26}}
                  mt={{base: 16, sm: 24}}
                  ff={{base: "NexaLight", sm: "NexaBold"}}
                  fw={{base: 600, sm: 700}}
                >
                  {value.content}
                </Text>
              </Collapse>
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}
const Sustainable = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)
  const onTitleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }
  const mobileScreen = useMediaQuery("(max-width: 47.5em)")
  return (
    <Box
      sx={{
        boxShadow:
          "1px 1px 8px 0px rgba(0, 0, 0, 0.15), -1px -1px 8px 0px rgba(0, 0, 0, 0.15)",
        borderRadius: 8,
        padding: "32px 16px 16px 16px",
      }}
    >
      <Text fw={700} fz={{base: 24, sm: 64}} ff={"NexaBold"} mb={16}>
        Sustainability and Farming Practices
      </Text>
      <Stack spacing={24}>
        {sustainableData.map(value => {
          return (
            <Box
              key={value.id}
              p={8}
              sx={{
                borderRadius: 8,
                boxShadow:
                  "-2px -2px 4px 0px rgba(0, 0, 0, 0.06), 2px 2px 4px 0px rgba(0, 0, 0, 0.06)",
              }}
              onClick={() => onTitleClick(value.id)}
            >
              <GridWrapperTwoCol align={"center"}>
                <Text
                  fz={{base: 16, sm: 40}}
                  fw={700}
                  ff={"NexaBold"}
                  lh={{base: "normal", sm: "40px"}}
                >
                  {value.title}
                </Text>
                <Box className="time-in-col">
                  {activeIndex === value.id ? (
                    <>
                      <IconMinus size={mobileScreen ? 16 : 33} />
                    </>
                  ) : (
                    <IconPlus size={mobileScreen ? 16 : 33} />
                  )}
                </Box>
              </GridWrapperTwoCol>

              <Collapse in={activeIndex === value.id}>
                <Text
                  fz={{base: 14, sm: 26}}
                  mt={{base: 16, sm: 24}}
                  ff={{base: "NexaLight", sm: "NexaBold"}}
                  fw={{base: 600, sm: 700}}
                >
                  {value.content}
                </Text>
              </Collapse>
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}
const productInfo = [
  {
    id: 1,
    title: "Are your products  organic?",
    content: "Yes, our products are certified organic and free from chemicals",
  },
  {
    id: 2,
    title: "How do you ensure the quality  and freshness of your products?",
    content:
      "Our quality control includes rigorous testing and monitoring procedures and we source from trusted suppliers and maintain strict quality standards.",
  },
  {
    id: 3,
    title: "Can I customize  my order or make special requests?",
    content:
      "Yes, we offer customization options and accommodate special requests.The Customization is available to meet your specific preferences and requirements",
  },
  {
    id: 4,
    title: "Are there any seasonal  products  available?",
    content:
      "Yes, we offer customization options and accommodate special requests.The Customization is available to meet your specific preferences and requirements",
  },
  {
    id: 5,
    content:
      "Yes, we offer gluten-free options to cater to dietary needs, We prioritize inclusivity by offering products for different dietary preferences.",
    title:
      "Do you offer  products  for specific  dietary requirements,  such as gluten-free  or vegan?,",
  },
]
const orderingData = [
  {
    id: 1,
    title: "How do I place an order on Farmily? ",
    content:
      "Select the desired products and add them to your cart, then proceed to the checkout page and provide your delivery details.",
  },
  {
    id: 2,
    title: "What is the minimum  order requirement  for delivery?",
    content:
      "There is absolutely no minimum order requirement, you can shop and add to cart at any time, and sign in to checkout.",
  },
  {
    id: 3,
    title: "What areas do you deliver to?",
    content: "We deliver to a wide range of areas within our service region.",
  },
  {
    id: 4,
    title: "How long does it take for my order to be delivered?",
    content:
      "Estimated delivery times will be provided during the checkout process.",
  },
  {
    id: 5,
    title: "Can I track  my delivery?",
    content:
      "Yes, you can track your delivery using our online tracking system, Stay updated on your delivery status with our tracking feature.",
  },

  {
    id: 6,
    title: "What if I am not available to receive the delivery?",
    content:
      "We offer options for rescheduling or redirecting deliveries if needed.",
  },
  {
    id: 7,
    title: "Can I schedule a delivery for a specific time and date? ",
    content:
      "Once you checkout, you can pick the delivery date most convenient to you from the list of delivery dates available",
  },
  {
    id: 8,
    title: "Are there any delivery charges for using the application?",
    content:
      "Yes, there are fees associated with the delivery. The fee rates are also dependent on your location",
  },
]

const pricingData = [
  {
    id: 1,
    title: "What are the available  payment  methods?",
    content:
      "There are numerous payment methods available today, Flutterwave, Paystack and HiPay.",
  },
  {
    id: 2,
    title: "Do you offer  any discounts  or loyalty programs?",
    content:
      "Yes, discount or loyalty programs are on selected available prducts.",
  },
  {
    id: 3,
    title: "Are there any additional  fees or charges?",
    content:
      "Yes, there are additional charges (Delivery fee) which varies based on your location.",
  },
  {
    id: 4,
    title: "Can I cancel  or modify  my order after  it has been placed?",
    content:
      "Yes, the ability to cancel or modify an order after it has been placed depends on the reason for the modification/cancellation.",
  },
  {
    id: 5,
    title: "Is my payment  information secure?",
    content:
      "Yes, your payment information is secure with our advanced , and secured web app.",
  },
]
const sustainableData = [
  {
    id: 1,
    title:
      "What sustainable  farming  practices  do the partnered  farms  follow?",
    content:
      "Organic Farming: The use of organic fertilizers, compost, and natural pest control methods instead of synthetic chemicals.",
  },
  {
    id: 2,
    title: "Do you support  local farmers  and producers?",
    content: "Yes, Supporting local farmers is one of our priorities.",
  },
  {
    id: 3,
    title: "Are your packaging  materials  eco-friendly?",
    content: "Yes, through Recyclable Materials and Sustainable Sourcing",
  },
  {
    id: 4,
    title: "How do you minimize  food waste  in your supply	chain?",
    content:
      "Minimizing food waste in the supply chain is an important goal for sustainable and efficient food management by Effective inventory management, Improved storage and handling:",
  },
  {
    id: 5,
    title:
      "Are there any initiatives	or partnerships	that Farmily has for promoting	sustainability?	",
    content:
      "Yes, by Sustainable farming practices, Efficient resource management.",
  },
]
