import { MouseEventHandler } from "react";

type Props = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button = (props: Props) => {
  const { label, onClick } = props;
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

// export const Button = ({ label }: Props) => (
//   <button>
//     {label}
//   </button>
// );