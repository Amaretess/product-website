import React, { useEffect, useState } from 'react'
import Card from './Card';
import { styled } from 'styled-components';


const CardList = () => {

const [products, setProducts] = useState([]);

    useEffect(() => {
        const getApi = async () => {
            const response = await fetch("https://course-api.com/react-store-products")
            const data = await response.json();
            setProducts(data)
        } 
        getApi();

    }, [])


    return (
        <Container>
            {products?.map((product, index) => {
                return <Card key={index} product={product} />
            })}
        </Container>
    )
}

export default CardList

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`