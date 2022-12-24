import { useContext, useEffect, useReducer, useState } from "react";
import { Product } from "../../models";
import {
  AddButton,
  QuantityText,
  Wrapper,
  MinusButton,
  QuantityLabel,
} from "./Quantity.styled";

import { ShopContext } from "../Context/useContext";

export const Quantity = ({ name, imageUrl, price, quantity }: Product) => {
  const { updateCart } = useContext(ShopContext);

  const [qty, setQuantity] = useState(quantity);

  useEffect(() => {
    updateCart({ name, imageUrl, price }, qty);
  }, [qty]);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSub = () => {
    if (qty > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <QuantityLabel>
        <p>QUANTITY:</p>
      </QuantityLabel>
      <Wrapper>
        <MinusButton onClick={handleSub}>
          <p>-</p>
        </MinusButton>
        <QuantityText>
          <p>{quantity}</p>
        </QuantityText>
        <AddButton onClick={handleAdd}>
          <p>+</p>
        </AddButton>
      </Wrapper>
    </>
  );
};
