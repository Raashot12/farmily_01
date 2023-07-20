import HomePage from "../components/Home"
import DashboardLayout from "../components/layout/DashboardLayout"
import {APPCOLORS} from "../components/sharedComponent/Color"

export default function Home() {
  return (
    <DashboardLayout title="Home" bg={APPCOLORS.primary}>
      <HomePage />
    </DashboardLayout>
  )
}
