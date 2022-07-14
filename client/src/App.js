import * as React from "react";
//import { connectionModal } from './modals'
import styles from "./mystyle.module.css"
import {
  Textarea,
  Center,
  Box,
  VStack,
  HStack,
  Grid,
  Button,
} from "@chakra-ui/react";

import { w3cwebsocket as W3CWebSocket } from "websocket";

import ConfettiAnimation from "./confetti";

function App() {

  const rhostvalue = 'ws://127.0.0.1:8887'
/**  
//  let [rhostValue, SetrhostValue] = React.useState('ws://127.0.0.1:8887')
  const rrhostvalue = 'ws://127.0.0.1:8887'
  let [rhostValue, SetrhostValue] = React.useState('ws://127.0.0.1:8887')


  let handleHostInputChange = (e) => {
    let inputvalue = e.target.value;
    SetrhostValue(inputvalue);
    rrhostvalue = inputvalue;
    ws.current = new W3CWebSocket(rrhostvalue)
    console.log(rhostValue)
  };
  */
  let ws = React.useRef(null);

  React.useEffect(() => {
        ws.current = new W3CWebSocket(rhostvalue);
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onclose = () => console.log("ws closed");

        const wsCurrent = ws.current;

        return () => {
            wsCurrent.close();
        };
    }, []);

    let [tvalue, tsetValue] = React.useState("");

    React.useEffect(() => {
      const delay = setTimeout(() => {
        //console.log(tvalue)
        ws.current.send(tvalue)
      }, 1000)
  
      return () => clearTimeout(delay)
    }, [tvalue])


  const flushbuffer = (e) =>{
    //This websocket client im using is minimal so in order to handle events you got to send raw bin
    //arbitray bin: 01111111
    tsetValue("")
    const buffer = new ArrayBuffer(1);
    const z = new Int8Array(buffer, 0, 1);
    z[0] = 127
    ws.current.send(buffer)
  }

  return (
    <div className="App">
      <ConfettiAnimation></ConfettiAnimation>
      <Center>
        <Box
          bg="#212121"
          borderRadius="md"
          width="90%"
          height="80vh"
          marginTop="10vh"
        >
          <Grid minH="80vh" p={3}>
            <VStack w="full" h="full">
              <Box>
              <h1 className={styles.rainbow}>Peak Design</h1>
              </Box>
              <Textarea
                value={tvalue}
                onChange={(e) => tsetValue(e.target.value)}
                placeholder="placeholder?.. yes"
                h="full"
                w="full"
                fontSize="2xl"
                resize="none"
                //sx={{ "caret-color": "transparent" }}
              />
              <Box h={20} w="full">
                <HStack>
                  {/*   <Textarea
                    value={rhostValue}
                    onChange={handleHostInputChange}
                    placeholder="server (defualt: localhost:8881)"
                    h="full"
                    w="full"
                    fontSize="2xl"
                    resize="none"
                  /> 
                  */}
                  <Button h={20} w="full" bg="green" colorScheme="green" onClick={flushbuffer}>
                    Flush remote buffer
                  </Button>
                </HStack>
              </Box>
            </VStack>
          </Grid>
        </Box>
      </Center>
    </div>
  );
}

export default App;
