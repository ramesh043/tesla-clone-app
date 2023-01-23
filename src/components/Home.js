import React from "react";
import Section from "./Section";
import styled from "styled-components";

function Home() {
  return (
    <div>
      <Container>
        <Section
          title="Model Y"
          description="Order Online for Touches Delivery"
          leftbtnText="Custom Order"
          backgroundImg="model-y.jpg"
          rightbtnText="Existing Inventory"
        />
        <Section
          title="Model S"
          description="Order Online for Touches Delivery"
          leftbtnText="Custom Order"
          backgroundImg="model-3.jpg"
          rightbtnText="Existing Inventory"
        />
        <Section
          title="Model 3"
          description="Order Online for Touches Delivery"
          leftbtnText="Custom Order"
          backgroundImg="model-x.jpg"
          rightbtnText="Existing Inventory"
        />
        <Section
          title="Model X"
          description="Order Online for Touches Delivery"
          leftbtnText="Custom Order"
          backgroundImg="model-s.jpg"
          rightbtnText="Existing Inventory"
        />
        <Section
          title="Lowest Cost Solar Panels in America"
          description="Money back Gaurante"
          leftbtnText="order Now"
          backgroundImg="solar-panel.jpg"
          rightbtnText="Learn more"
        />
        <Section
          title="Solar For New Roofs"
          description="Solar plus new roofs than new roof plus new roofs"
          leftbtnText="order Now"
          backgroundImg="solar-roof.jpg"
          rightbtnText="Learn more"
        />
        <Section
          title="Accessories"
          description=""
          leftbtnText="Shop Now"
          backgroundImg="accessories.jpg"
        />
      </Container>
    </div>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
