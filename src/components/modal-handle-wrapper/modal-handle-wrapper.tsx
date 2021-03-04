import React from "react";

// import { Container } from './styles';
interface IProps {
  show: boolean;
}

export const ModalHandleWrapper: React.FC<IProps> = ({ children, show }) => {
  if (!show) return null;
  return <div>{children}</div>;
};
