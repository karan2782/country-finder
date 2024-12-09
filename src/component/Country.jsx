import { Box, Stack, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Country(){
    const country = useParams()
    const [countryDetail, setCountryDetail] = useState({})
    
    useEffect(()=>{
        async function fetchCountry(){
          const res = await fetch(`https://restcountries.com/v3.1/name/${country.countryname}`)
          const data = await res.json()
          console.log(data);
          setCountryDetail(data[0])
        }
        fetchCountry()
      }, [])
    return <>
    <Box>
        <Stack>
        <Text>Sub region : {countryDetail.subregion}</Text>
        <Text>Currency Name: {countryDetail.currencies?.["XCD"].name} </Text>
        <Text>Languages:  {countryDetail?.languages?.eng} </Text>
        
        </Stack>
    </Box>
    </>
}

