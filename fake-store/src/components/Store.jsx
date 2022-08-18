import { Box, Button, Heading, Input,  Flex, Spacer, Tag, SimpleGrid, Image, GridItem, Spinner, Center} from '@chakra-ui/react'
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';


const StoreItem = ({title, price, image}) => {
    return (
        <>
        <Box p={4} borderRadius="lg" borderWidth={"1px"}>
          <Image src={image} w={24}/>
            <Flex alignItems={"center"} >
              <Heading mt={4} noOfLines={2} size={"sm"} fontWeight="normal">
                {title}
              </Heading>
               <Spacer />
               <Tag margin={4}>${price}</Tag>
            </Flex>
        </Box>
        </>
    )
}

const Store = ({storeItems, onItemAdd, loading, StoreView}) => {
    const itemNameRef = useRef();
    const itemPriceRef = useRef();
    const [filteredItems, setFilteredItems] = useState(storeItems)

    useEffect(() => {
      setFilteredItems(storeItems)
    },[storeItems]);

   
  return (
  <>
   <Box >
    <Header title={"Fake Store"}/>
    {
    loading ? ( <Center mt={6}><Spinner/></Center> ) : 
    <Box p={2}>
      <Input placeholder='Search' mt={4} onChange={e => {
          let filter = storeItems.filter((item)=> {
            return item.title.toLowerCase().includes(e.target.value.toLocaleLowerCase())
          });
          setFilteredItems(filter)
      }}/>
    <SimpleGrid columns={4} spacing="4" mt={4} p={2}>
    {filteredItems.map((item) => {
      return (
           <GridItem>
            <Link to={`/product/${item.id}`}>
             <StoreItem {...item}  />
             </Link>
           </GridItem>
            );  
    })}
    </SimpleGrid>
    <Input ref={itemNameRef} mt={10} placeholder="Item name"/>
    <Input ref={itemPriceRef} mt={2} placeholder="Price" type={'number'}/>
    <Button onClick= {()=>{
      onItemAdd({
        title: itemNameRef.current.value,
        price: itemPriceRef.current.value
      })
    }} mt={2}>Add Item</Button>
    </Box>
    }
   </Box>
  </>
  );
}

export default Store