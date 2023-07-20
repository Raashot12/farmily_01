/* eslint-disable react/jsx-no-undef */
import {AppShell} from "@mantine/core"

import HeadTitle from "../../sharedComponent/HeadTitle"
import NavbarMenu from "../NavBar"
import Footer from "../Footer"
type DashboardProps = {
  children: React.ReactNode
  title?: string
  isSignPage?: boolean
  bg?: string
}

export default function DashboardLayout({
  children,
  title = "",
  isSignPage,
  bg,
}: DashboardProps) {
  return (
    <AppShell
      sx={{
        ".mantine-AppShell-main": {
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 0,
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={<NavbarMenu />}
      footer={!isSignPage ? <Footer bg={bg} /> : <></>}
    >
      <HeadTitle title={`Farmily | ${title}`} />

      {children}
    </AppShell>
  )
}
