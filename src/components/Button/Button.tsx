import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

type Props = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  changeId?: Dispatch<SetStateAction<string>>;
};

export const Button = (props: Props) => {
  const { label, onClick } = props;
  return <button onClick={onClick}>{label}</button>;
};

// export const Button = (props: Props) => {
//   const { label, onClick, changeId } = props;
//   return (
//     <button onClick={() => changeId('ala ma kota')}>
//       {label}
//     </button>
//   );
// }

// export const Button = ({ label }: Props) => (
//   <button>
//     {label}
//   </button>
// );
