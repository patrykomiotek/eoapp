type Props = {
  name: string;
  price: number;
};

export const ProductRow = (props: Props) => {
  const { name, price } = props;
  return (
    <div>
      <p>
        <span>{name}</span> <span>{price}</span>
      </p>
    </div>
  );
};
