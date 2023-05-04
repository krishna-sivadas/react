import React from "react";
import { Input, Text, Button ,extendTheme,ChakraProvider} from '@chakra-ui/react';


import { Configuration, OpenAIApi } from "openai";
import '../../App.css';

const colors = {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  }
  const theme = extendTheme({ colors })

const configuration = new Configuration({
    organization: "",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);


  function EngineList({ items }) {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.id}</li>
        ))}
      </ul>
    );
  }
  


const ChatGPT = () => {

    async function printResponse(resp) {
        console.log(resp);
      }

    const [values, setValues] = React.useState({
        question: "",
        response: "",
        openapidata:[]
    })
    const handleChange = (event) => setValues({ question: event.target.value ,openapidata:[]});

    const handleOnClick = () => {

/*
      openai.listEngines().then((resp) => {
            setValues({openapidata:resp.data.data,products:[]})
            console.log(resp.data.data);
        }).catch((error) => {
            console.log(error, "caught openAI error ")
        }) */

       openai.createEdit({
            model: "text-davinci-edit-001",
            input: values.question,
            instruction: "Fix the spelling mistakes",
          }).then((resp) =>{
            setValues({openapidata:[],response:resp.data.choices[0].text})
           console.log(resp.data.choices);
          }).catch((error) => {
            console.log(error, "caught openAI error ")
        })
          
          ;

    }

    return (
       <ChakraProvider>
            <Text mb='8px'>Value: {values.question}</Text>
            <Input
                value={values.question}
                onChange={handleChange}
                placeholder='' />
            <Button colorScheme='blue'
                onClick={handleOnClick}>Submit</Button>
            <Text mb='8px'>Response: {values.response}</Text>
        
            
            </ChakraProvider>
    )

}

export default ChatGPT;