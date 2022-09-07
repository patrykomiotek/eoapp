type Props = {
  orderId: string;
  status: string;
};

export const OrdersRow = (props: Props) => {
  const { orderId, status } = props;
  return (
    <div>
      <p>
        <span>{orderId}</span> <span>{status}</span>
      </p>
    </div>
  );
};
