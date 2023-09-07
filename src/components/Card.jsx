import React from 'react'
import { styled } from 'styled-components'



const Card = ({ product }) => {


    return (
        <StyledCard >
            <img src={product?.image} alt="product" />
            <footer>
                <h4>{product?.name}</h4>
                <p>{product?.price}</p>
                <button className="btn" >Add to Cart</button>
            </footer>
        </StyledCard>
    )
}

export default Card

const StyledCard = styled.article`
    margin: 1rem;
    width: 90vw;
    max-width: 300px;
    background: var(--white);
    border-radius: 0.25rem;
    img {
        width: 100%;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        h4 {
            text-transform: capitalize;
        }
        button:hover {
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        }
        p {
            color: var(--primary);
            font-weight: 700;
            margin: 1rem;
        }
    }
    &:hover {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    @media (min-width: 768px){
        max-width: 600px;
    }

    
`

