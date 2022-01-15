import './App.css';
import { Provider as BumbagProvider, css } from 'bumbag';
import { Box, Card, Stack, Heading, Text, Avatar } from 'bumbag';

const theme = {
  global: {
    fontSize: 18,
    styles: {
      base: css`
        html,
        body {
          background-color: #2c2876;
        }
      `
    }
  },
  fonts: {
    default: 'sans-serif'
  },
  // palette: {
  //   primary: 'blue'
  // },
  // breakpoints: {
  //   mobile: 520,
  //   tablet: 960
  // },
  // Button: {
  //   defaultProps: {
  //     palette: 'primary'
  //   }
  // },
  // Heading: {
  //   styles: {
  //     base: {
  //       color: 'primary'
  //     }
  //   }
  // }
}

function App() {
  return (
    <BumbagProvider theme={theme}>
      <Box alignX="center" alignY="center" height="100vh">
        <Card borderRadius="5" paddingY="major-4" width="300px">
          <Stack spacing="major-2" alignX="center">
            <Avatar
              variant="circle" 
              src="./profile.jfif"
              size="150px"
            />
            <Stack alignX="center" spacing="major-1">
              <Heading fontSize="500">Rafael Viveiros</Heading>
              <Text
                use="h2"
                color="text100"
                fontSize="100"
                fontWeight="500"
              >
                Software Developer and Entrepreneur
              </Text>
            </Stack>

          </Stack>
        </Card>
      </Box>


    </BumbagProvider>

  );
}

export default App;
