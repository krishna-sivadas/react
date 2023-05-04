import React, { Component, useState, useEffect } from 'react';

import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { Image, Box, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';

export class ProductTile extends Component {

  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    fetch('http://localhost:1337/api/products')
      .then(response => response.json())
      .then(json => this.setState({ data:json.data }))
      .catch(error => console.error(error));
  }

  render() {
    const { data } = this.state;
    return (

      <ChakraProvider>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {data ? (
          
    data.map((product, index) => (
     
      
          <Card maxW='sm' >
            <CardBody>
              <Image
                src={product.attributes.PrimaryImageURL}
                alt={product.attributes.Name}
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{product.attributes.Name}</Heading>
                <Text maxH='sm'>
                {product.attributes.Description}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                  ${product.attributes.Price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='1'>
                <Button variant='solid' colorScheme='blue'>
                  Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
         
         
))
        

          )
          : (
            <p>Loading...</p>
          )}
  
          

</SimpleGrid>
      </ChakraProvider>

    )
  }

}

export default ProductTile;