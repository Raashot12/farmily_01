/* eslint-disable react/no-unescaped-entities */
import {Box, Container, Flex, Group, Stack, Text} from "@mantine/core"
import React from "react"
import DashboardLayout from "../components/layout/DashboardLayout"
import {APPCOLORS} from "../components/sharedComponent/Color"

const PrivacyPolicy = () => {
  return (
    <DashboardLayout title="Privacy policy">
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
              "url(https://res.cloudinary.com/farmily-company/image/upload/v1689464156/Privacy_Policy_ttgsiw.webp) no-repeat",
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
        PRIVACY POLICY
      </Text>
      <Container size={"xl"} mt={{base: 24, sm: 48}} pb={{base: 30, sm: 80}}>
        <Text fz={{base: 16, sm: 24}}>
          <Text
            display="inline-block"
            fw={700}
            ff={"NexaBold"}
            fz={{base: 16, sm: 24}}
          >
            Effective Date:
          </Text>{" "}
          30th of June, 2023
        </Text>
        <Text fz={{base: 16, sm: 24}} mt={12}>
          Thank you for choosing{" "}
          <Box component="b" fw={700}>
            Farmily
          </Box>{" "}
          as your trusted and reliable market platform. This Privacy Policy
          outlines how we collect, use, store, and disclose your personal
          information when you use our services. By using the Application, you
          consent to the practices described in this Privacy Policy. We take
          your privacy seriously and are committed to protecting your personal
          information. Please read this Privacy Policy carefully to understand
          how we handle your data.
        </Text>
        <Stack spacing={28} mt={32}>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Information We Collect
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              <Box display="inline-block" fw={600} ff={"NexaBold"}>
                a. Personal Information:
              </Box>{" "}
              We may collect the following personal information when you use the
              Application:
              <Box component="ul" mt={0} fz={{base: 16, sm: 24}}>
                <li>Name</li>
                <li>Email address</li>
                <li>Contact information (phone number, address)</li>
                <li>
                  {" "}
                  Payment details (credit card information, billing address)
                </li>
                <li>
                  {" "}
                  Location information Device information (IP address, browser
                  type, operating system)
                </li>
                <li> Usage data (pages visited, interactions, time spent)</li>
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
              Information We Collect
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              <Box display="inline-block" fw={600} ff={"NexaBold"}>
                a. Personal Information:
              </Box>{" "}
              We may collect the following personal information when you use the
              Application:
              <Box component="ul" mt={0} fz={{base: 16, sm: 24}}>
                <li>Name</li>
                <li>Email address</li>
                <li>Contact information (phone number, address)</li>
                <li>
                  {" "}
                  Payment details (credit card information, billing address)
                </li>
                <li>
                  {" "}
                  Location information Device information (IP address, browser
                  type, operating system)
                </li>
                <li> Usage data (pages visited, interactions, time spent)</li>
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
              Information We Collect
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              <Box display="inline-block" fw={600} ff={"NexaBold"}>
                a. Non-Personal Information:
              </Box>{" "}
              We may collect non-personal information that does not directly
              identify you, including aggregated data, statistical information,
              and demographic data.
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              How We Use Your Information
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              <Box display="inline-block" fw={600} ff={"NexaBold"}>
                a. Provide and Improve Services:
              </Box>{" "}
              We use your personal information to:
              <Box component="ul" mt={0} fz={{base: 16, sm: 24}}>
                <li>Enable seamless grocery shopping and delivery services</li>
                <li>Process orders, payments, and refund.</li>
                <li>
                  Communicate with you regarding your account, orders, and
                  services
                </li>
                <li>
                  {" "}
                  Personalize your experience and provide tailored
                  recommendations
                </li>
                <li>
                  {" "}
                  Improve and enhance the functionality of the Application
                </li>
                <li>Conduct research and analysis to improve our services</li>
              </Box>
              <Stack spacing={16}>
                <Text>
                  <Box display="inline-block" fw={600} ff={"NexaBold"}>
                    b. Marketing and Promotions
                  </Box>{" "}
                  With your consent, we may use your contact information to send
                  you marketing and promotional communications about our
                  services, offers, and new products. You can opt out of these
                  communications at any time.
                </Text>
                <Text>
                  <Box display="inline-block" fw={600} ff={"NexaBold"}>
                    c. Legal Compliance and Protection:
                  </Box>{" "}
                  We may use your personal information to comply with applicable
                  laws, regulations, and legal processes. We may also use your
                  information to enforce our terms of service, protect our
                  rights, property, or safety, and prevent fraud or other
                  unauthorized activities
                </Text>
              </Stack>
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Information Sharing
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              <Box display="inline-block" fw={600} ff={"NexaBold"}>
                a. Service Providers:
              </Box>{" "}
              We may engage third-party service providers to assist us in
              providing and improving our services. These service providers may
              have access to your personal information but are only authorized
              to use it on our behalf and as necessary to perform specific tasks
              <Stack spacing={16}>
                <Text>
                  <Box display="inline-block" fw={600} ff={"NexaBold"}>
                    b. Business Partners:
                  </Box>{" "}
                  We may share your personal information with business partners,
                  such as delivery services, to fulfill your orders and provide
                  you with seamless grocery shopping experiences.
                </Text>
                <Text>
                  <Box display="inline-block" fw={600} ff={"NexaBold"}>
                    c. Aggregated or De-Identified Data:
                  </Box>{" "}
                  We may share aggregated or de-identified data that does not
                  personally identify you with third parties for various
                  purposes, including research, analysis, and marketing.
                </Text>
                <Text>
                  <Box display="inline-block" fw={600} ff={"NexaBold"}>
                    d. Legal Requirements:
                  </Box>{" "}
                  We may disclose your personal information if required to do so
                  by law or in response to valid legal requests, such as court
                  orders or government investigations.
                </Text>
                <Text>
                  <Box display="inline-block" fw={600} ff={"NexaBold"}>
                    e. Merger or Acquisition:
                  </Box>{" "}
                  In the event of a merger, acquisition, or sale of our company,
                  your personal information may be transferred to the acquiring
                  entity or merged with the acquiring entity's databases.
                </Text>
              </Stack>
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Data Security
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, loss, misuse, or
              alteration. However, please note that no method of transmission
              over the Internet or electronic storage is 100% secure. While we
              strive to protect your data, we cannot guarantee its absolute
              security.
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Data Retention
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law.
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Your Rights and Choices
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              <Box display="inline-block" fw={600} ff={"NexaBold"}>
                a. Access and Update:
              </Box>{" "}
              You can access and update your personal information by logging
              into your account or contacting us directly. Please ensure that
              your personal information is accurate and up to date.
              <Stack spacing={16}>
                <Text>
                  <Box display="inline-block" fw={600} ff={"NexaBold"}>
                    b. Marketing Communications:
                  </Box>{" "}
                  You can opt out of receiving marketing communications from us
                  by following the unsubscribe instructions provided in the
                  communication or by contacting us directly.
                </Text>
                <Text>
                  <Box display="inline-block" fw={600} ff={"NexaBold"}>
                    c. Location Information:
                  </Box>{" "}
                  You can control the collection of location information through
                  your device settings or the Application settings
                </Text>
              </Stack>
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Changes to the Privacy Policy
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal obligations. We will notify you
              of any material changes by posting the revised Privacy Policy on
              the Application or by other means. We encourage you to review this
              Privacy Policy periodically.
            </Text>
          </Stack>
          <Stack spacing={16}>
            <Text
              ff={"NexaBold"}
              color={APPCOLORS.primary}
              fz={{base: 16, sm: 24}}
            >
              {" "}
              Children's Privacy
            </Text>
            <Text fz={{base: 16, sm: 24}}>
              The Application is not intended for use by individuals under the
              age of 18. We do not knowingly collect personal information from
              children. If you become aware that a child has provided us with
              personal information without parental consent, please contact us,
              and we will take steps to remove the information and terminate the
              child's account.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </DashboardLayout>
  )
}

export default PrivacyPolicy
