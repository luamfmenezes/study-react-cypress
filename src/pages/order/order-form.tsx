import React, { createContext, useContext, useMemo, useState } from "react";

export interface OrderFormContextParams {
  stage: 0 | 1;
  user: User;
  product: Product;
  progress: number;
  setStage: (stage: 0 | 1) => void;
  setUser: (user: User) => void;
  setProduct: (product: Product) => void;
  handleSubmitOrder: () => void;
}

export interface User {
  name: string;
  size: string;
}

export interface Product {
  id: string;
}

const OrderFormContext = createContext<OrderFormContextParams>(
  {} as OrderFormContextParams
);

const defaultUser = { name: "", size: "" };
const defaultProduct = { id: "" };

const OrderFormProvider: React.FC = ({ children }) => {
  const [stage, setStage] = useState<0 | 1>(0);
  const [user, setUser] = useState<User>(defaultUser);
  const [product, setProduct] = useState<Product>(defaultProduct);

  const progress = useMemo(() => {
    let total = 0;
    if (user.name) total += 33.33;
    if (user.size) total += 33.33;
    if (product.id) total += 33.33;
    return total;
  }, [user, product]);

  const handleSubmitOrder = () => {
    setProduct(defaultProduct);
    setUser(defaultUser);
    setStage(0);
    alert("Order confirmed - redirecting");
  };

  return (
    <OrderFormContext.Provider
      value={{
        product,
        progress,
        stage,
        user,
        setStage,
        setUser,
        setProduct,
        handleSubmitOrder,
      }}
    >
      {children}
    </OrderFormContext.Provider>
  );
};

const useOrderForm = (): OrderFormContextParams => {
  const context = useContext(OrderFormContext);

  if (!context) {
    throw new Error(
      "You should execute this hook only inside of one react component"
    );
  }

  return context;
};

function connectOrderForm<T>(WrappedComponent: React.ComponentType<T>) {
  const Wrapper: React.FC<T> = (props) => {
    return (
      <OrderFormProvider>
        <WrappedComponent {...props} />
      </OrderFormProvider>
    );
  };
  return Wrapper;
}

export { useOrderForm, OrderFormProvider, connectOrderForm };
