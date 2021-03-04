import React from "react";
import { useOrderForm } from "../order-form";

import { Container, Progress } from "./styles";

export const ProgressBar: React.FC = () => {
  const { progress } = useOrderForm();
  return (
    <Container>
      <Progress progress={progress} />
    </Container>
  );
};
