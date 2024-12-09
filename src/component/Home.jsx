import React, { useEffect, useState } from 'react'
import {Box, Stack, Image, Text, HStack, Grid, Button} from '@chakra-ui/react'
import { BiRepeat } from 'react-icons/bi'
import { Link } from 'react-router-dom'
function Home() {

    const [country, setCountry] = useState([])
    useEffect(()=>{
        async function fetchCountries(){
            try {
                const res = await fetch(`https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital`)
                const data = await res.json()
                setCountry(data)
                console.log(data)
                
                
            } catch (error) {
                console.error(error)
            }
        }
        fetchCountries()
    }, [])

    
    
  return (
    <Box>
        <Grid templateColumns={{sm:"repeat(1, 1fr)", lg:"repeat(4, 1fr)", md:"repeat(2, 1fr)"}}  gap='20px'>
       {country.map(ele=> <Stack key={ele.name.common} border='1px solid black' width='fit-content' padding='10px'>
        <Box>
            <Image src={ele.flags.png}  />
        </Box>
        <Stack>
            <Text fontWeight='bolder'>{ele.name.common}</Text>
            <HStack>
                <Text>Population: </Text> <Text>{ele.population}</Text>
            </HStack>
            <HStack>
                <Text>Region: </Text> <Text>{ele.region}</Text>
            </HStack>
            <HStack>
                <Text>Capital: </Text> <Text>{ele.capital[0]}</Text>
            </HStack>
            <Button> <Link to={`/${ele.name.common}`}>More detail</Link> </Button>
        </Stack>
       </Stack>)}
       </Grid>
    </Box>
  )
}

export default Home
