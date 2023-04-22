import { useState } from "react";
import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";

const Shopping = () => {
  const [state, setState] = useState({
    products: {
      product1: 0,
      product2: 0,
      product3: 0,
      product4: 0,
    },
    totalPrice: 0,
  });
  return (
    <Wrapper>
      <Controls />
    </Wrapper>
  );
};

export default Shopping;
