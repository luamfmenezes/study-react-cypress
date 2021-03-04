import React, { useMemo } from "react";
import { useOrderForm, connectOrderForm } from "./order-form";

import { SelectProduct, SelectUser } from "./order-form-pages";
import { ProgressBar } from "./progress-bar/progress-bar";

const formPages = [
  { title: "select user", component: SelectUser },
  { title: "select product", component: SelectProduct },
];

const OrderView: React.FC = () => {
  const { stage } = useOrderForm();
  const renderFormPage = useMemo(() => {
    const Component = formPages[stage].component;
    return <Component />;
  }, [stage]);

  return (
    <div>
      <header>
        <p>state:{formPages[stage].title}</p>
      </header>
      <ProgressBar />
      {renderFormPage}
    </div>
  );
};

export const Order = connectOrderForm<{}>(OrderView);
