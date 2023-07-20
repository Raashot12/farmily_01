/* eslint-disable react/no-unescaped-entities */
import {Box, Container, Flex, Stack, Text} from "@mantine/core"
import React from "react"
import DashboardLayout from "../components/layout/DashboardLayout"
import {APPCOLORS} from "../components/sharedComponent/Color"

const TermsOfUse = () => {
  return (
    <DashboardLayout title="Terms of use">
      <Flex
        align="center"
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          minHeight: "689px",
          zIndex: 1,
          "@media (max-width: 567px)": {
            minHeight: "200px",
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
            transform: "translateY(96px)",
            zIndex: -1,
            "@media (max-width:768px)": {
              minHeight: "200px",
              transform: "translateY(55px)",
            },
            background:
              "url(https://res.cloudinary.com/farmily-company/image/upload/v1689464083/Tems_of_Use_pmybgk.webp) no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
      </Flex>
      <Text
        fz={{base: 22, sm: 64}}
        fw={700}
        ff={"NexaBold"}
        ta={"center"}
        color={APPCOLORS.primary}
        mt={{base: 40, sm: 90}}
      >
        TERMS OF USE AND SERVICES
      </Text>
      <Container size={"xl"} mt={{base: 24, sm: 48}} pb={{base: 30, sm: 80}}>
        <Stack spacing={28}>
          <Text fz={{base: 16, sm: 24}}>
            {" "}
            Welcome to <b>Farmily!</b> Please carefully read the following Terms
            of Use and Services before using our application. These Terms
            outline the legal agreement between <b>you</b> and <b>Farmily</b>{" "}
            ("we," "us," or "our") governing the use of our application
            "Farmily" and the services provided through it. By accessing or
            using our Application, you agree to be bound by these Terms. If you
            do not agree with any provision of these Terms, you must not use the
            Application.
          </Text>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Application Overview
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              Farmily is designed to provide users with seamless and convenient
              grocery shopping experience, access to fresh food produce, and
              personalized recommendations for healthy food options. The
              Application may include features such as product listings, search
              functionality, shopping cart, payment processing, and delivery
              services.{" "}
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Eligibility
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              By using our Application, you represent that you are at least 18
              years old and have the legal capacity to enter into a binding
              agreement. If you are using the Application on behalf of an
              organization or entity, you represent and warrant that you have
              the authority to bind that organization to these Terms.
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              User Account
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              To access certain features of the Application, you may need to
              create a user account. You are responsible for maintaining the
              confidentiality of your account credentials and are liable for any
              activities that occur under your account. You agree to provide
              accurate, complete, and up-to-date information during the
              registration process. We reserve the right to suspend or terminate
              your account if you violate these Terms or provide false
              information
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Product Listings and Descriptions
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              The Application provides product listings and descriptions for
              various grocery items, including fresh food produce. While we
              strive to ensure the accuracy of the information, we do not
              warrant that the product descriptions, images, or prices are
              entirely accurate, complete, or current. Any reliance on such
              information is at your own risk.
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Ordering and Delivery
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              <Box component="ul" mb={0} mt={16}>
                <li>
                  <Box display="inline-block" fw={600} ff={"NexaBold"}>
                    {" "}
                    Placing Orders:
                  </Box>{" "}
                  You may place orders throucation Application by adding items
                  to your cart and proceeding to checkout. By placing an order,
                  you authorize us to process payment and arrange for delivery.
                </li>
                <li>
                  <Box display="inline-block" fw={600} ff={"NexaBold"}>
                    {" "}
                    Order Confirmation:
                  </Box>{" "}
                  We will send an order confirmation to the email address
                  associated with your account. This confirmation does not
                  guarantee the availability of the ordered items.
                </li>
                <li>
                  <Box display="inline-block" fw={600} ff={"NexaBold"}>
                    {" "}
                    Delivery:
                  </Box>{" "}
                  We aim to deliver orders promptly to the provided address.
                  Delivery times are estimates and may vary depending on various
                  factors, including product availability and external
                  circumstances. We are not responsible for any delays or
                  damages caused during the delivery process.
                </li>
                <li>
                  <Box display="inline-block" fw={600} ff={"NexaBold"}>
                    {" "}
                    Refunds and Returns:
                  </Box>{" "}
                  Refunds and returns are subject to our refund policy, which is
                  available on the Application. Please review the policy
                  carefully for information on eligible returns, refunds, and
                  any associated fees.
                </li>
              </Box>
                 
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              User Conduct
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              While using the Application, you agree to
              <Box component="ul" mt={0}>
                <li> Comply with all applicable laws and regulations</li>
                <li>
                  {" "}
                  User Conduct While using the Application, you agree to Use the
                  Application only for lawful purposes and not engage in any
                  fraudulent, unauthorized, or illegal activities.
                </li>
                <li>
                  Respect the intellectual property rights of others and not
                  infringe upon any copyrights, trademarks, or other proprietary
                  rights
                </li>
                <li>
                  Provide accurate and truthful information when using the
                  Application, including during the registration process and
                  when placing orders.
                </li>
              </Box>
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Recommendations and Health Information
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              Our Application may provide personalized food recommendations and
              general health information. These recommendations are based on
              various factors, including your preferences and dietary
              restrictions. However, we do not provide medical advice, and the
              recommendations should not be considered as a substitute for
              professional medical advice, diagnosis, or treatment. You should
              always consult with a qualified healthcare professional before
              making any dietary changes or decisions.
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Intellectual Property
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              All content, including text, graphics, logos, images, and
              software, available on or through the Application is protected by
              intellectual property laws and is the property of Farmily or its
              licensors. You may not copy, reproduce, distribute, modify, or
              create derivative works of any content without our prior written
              consent.
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Privacy Policy
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              Our Privacy Policy, available on the Application, outlines how we
              collect, use, and disclose your personal information. By using the
              Application, you consent to the collection and processing of your
              information as described in the Privacy Policy
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Limitation of Liability
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              To the maximum extent permitted by law, we shall not be liable for
              any direct, indirect, incidental, consequential, or punitive
              damages arising out of or related to the use of the Application or
              the services provided through it. We do not guarantee the
              availability, reliability, or accuracy of the Application or its
              content.
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Indemnification
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              You agree to indemnify, defend, and hold harmless Farmily, its
              officers, directors, employees, and affiliates from any claims,
              liabilities, damages, losses, costs, or expenses (including
              attorney fees) arising out of or related to your use of the
              Application or any violation of these Terms.
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Modification and Termination
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              We reserve the right to modify or terminate the Application or
              these Terms at any time, without prior notice. Any changes will be
              effective upon posting the updated Terms on the Application. Your
              continued use of the Application after the modifications will
              signify your acceptance of the updated Terms.
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Governing Law and Jurisdiction
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              These Terms and your use of the Application shall be governed by
              and construed in accordance with the laws of Jurisdiction. Any
              dispute arising out of or relating to these Terms or the
              Application shall be subject to the exclusive jurisdiction of the
              courts of Jurisdiction.
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Severability
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              If any provision of these Terms is found to be invalid, illegal,
              or unenforceable, the remaining provisions shall continue in full
              force and effect.
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Entire Agreement
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              These Terms constitute the entire agreement between you and
              Farmily regarding the use of the Application and supersede any
              prior agreements or understandings, whether oral or written. If
              you have any questions or concerns regarding these Terms, please
              contact us at hello@farmily.africa By using our Application, you
              acknowledge that you have read, understood, and agreed to these
              Terms of Use and Service
            </Text>
          </Stack>
        </Stack>
      </Container>
    </DashboardLayout>
  )
}

export default TermsOfUse
