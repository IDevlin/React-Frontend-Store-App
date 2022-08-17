import { Box, Button, Heading, Stack, Input,  Flex, Spacer, Tag} from '@chakra-ui/react'
import React from 'react';
import { useRef } from 'react';


const StoreItem = ({title, price}) => {
    return (
        <>
        <Box p={4} borderRadius="lg" borderWidth={"1px"}>
            <Flex alignItems={"center"}>
              <Heading size={"md"}>{title}</Heading>
               <Spacer />
               <Tag>{price}</Tag>
      
            </Flex>
        </Box>
        </>
    )
}

const Store = ({items, onItemAdd}) => {
    const itemNameRef = useRef();
    const itemPriceRef = useRef();
  return (
  <>
  <h1>Store</h1>
   <Box p={4}>
    <Stack>
    {items.map((item) => {
      return (
            <StoreItem title={item.title} price={item.price}/>
            );
    })}
    </Stack>
    <Input ref={itemNameRef} mt={10} placeholder="Item name"/>
    <Input ref={itemPriceRef} mt={2} placeholder="Price" type={'number'}/>
    <Button onClick={()=>{
      onItemAdd({
        title: itemNameRef.current.value,
        price: itemPriceRef.current.value
      })
    }} mt={2}>Add Item</Button>
   </Box>
  </>
  );
}

export default Store