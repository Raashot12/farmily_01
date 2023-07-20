import styled from "@emotion/styled"
import {Loader, MantineNumberSize} from "@mantine/core"

const Wrapper = styled.div<{bg: string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.bg || "#edf0f8"};
  ::-webkit-scrollbar {
    display: none;
  }
`

export const LoaderAnimation = ({size = "lg"}: {size?: MantineNumberSize}) => {
  return (
    <Wrapper bg={"#fffff"}>
      <Loader size={size} variant="dots" color="green" />
      {/* <Image
        src="https://res.cloudinary.com/farmily-company/image/upload/v1689421016/Farmily_gif_aaei7z.gif"
        alt="loader"
        width={100}
        height={"auto"}
      /> */}
    </Wrapper>
  )
}
