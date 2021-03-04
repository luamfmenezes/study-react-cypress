import React from "react";
import { useOrderForm } from "../../order-form";

export const SelectUser: React.FC = () => {
  const { user, setUser, setStage } = useOrderForm();

  const handleChangeUser = (field: string, value: any) => {
    setUser({ ...user, [field]: value });
  };

  const handleNext = () => {
    setStage(1);
  };

  return (
    <div>
      <input
        value={user.name}
        onChange={(e) => handleChangeUser("name", e.target.value)}
      />
      <select
        value={user.size}
        onChange={(e) => handleChangeUser("size", e.target.value)}
      >
        <option value={undefined}>Select Size</option>
        <option value="s">Small</option>
        <option value="m">Medium</option>
        <option value="l">Large</option>
      </select>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
