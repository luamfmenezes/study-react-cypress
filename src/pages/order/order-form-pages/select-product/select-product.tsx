import React from "react";
import { useOrderForm } from "../../order-form";

export const SelectProduct: React.FC = () => {
  const { product, setProduct, setStage, handleSubmitOrder } = useOrderForm();

  const handleConfirm = () => {
    handleSubmitOrder();
  };

  return (
    <div>
      <select
        value={product.id}
        onChange={(e) => setProduct({ id: e.target.value })}
      >
        <option value={1}>Product 1</option>
        <option value={2}>Product 2</option>
        <option value={3}>Product 3</option>
      </select>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};
