import React from 'react'
import Section from './Section'
import styled from 'styled-components'
const Home = () => {
    return (
        <Container>
           <Section 
                title="Model S"
                description="Order online for touchless delivery"
                backgroundImg="model-s.jpg"
                leftBtbText="Custom order"
                rightBtbText="Existing inventory"
           />

              <Section  
                title="Model Y"
                description="Order online for touchless delivery"
                backgroundImg="model-y.jpg"
                leftBtbText="Custom order"
                rightBtbText="Existing inventory"
           />

              <Section 
                title="Model 3"
                description="Order online for touchless delivery"
                backgroundImg="model-3.jpg"
                leftBtbText="Custom order"
                rightBtbText="Existing inventory"
           />

              <Section 
                title="Model X"
                description="Order online for touchless delivery"
                backgroundImg="model-x.jpg"
                leftBtbText="Custom order"
                rightBtbText="Existing inventory"
           />

             <Section 
                title="Lowest Cost Solar Panel in America"
                description="Money-back Guaranteed"
                backgroundImg="solar-panel.jpg"
                leftBtbText="Order now"
                rightBtbText="Learn more"
           />

            <Section 
                title="Solar for New roofs"
                description="Solar Roof Costs less Than a New Roof"
                backgroundImg="solar-roof.jpg"
                leftBtbText="Order now"
                rightBtbText="Learn more"
           />
            <Section 
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtbText="Shop now"
           />
          
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
`

export default Home
