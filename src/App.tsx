import { Box } from "@chakra-ui/react"
import { PDFScreen } from "./components/PDFScreen"
import { FC } from "react"

const App: FC = () => {

  return (
    <Box width="full" height="100svh">
      <PDFScreen />
    </Box>
  )
}

export default App
