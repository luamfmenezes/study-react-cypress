import React from "react";

export function LoadingDecorator(Component: React.FC) {
  return function WithLoadingComponent({ isLoading, ...props }: any) {
    if (!isLoading) return <Component {...props} />;
    return <p>loading...</p>;
  };
}
