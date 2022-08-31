type Props = {
  children: string;
}

export const Text = (props: Props) => {
  const { children } = props;
  return (
    <p>{children}</p>
  );
}

type MainPops = {
  children: React.ReactNode;
}

export const Main = (props: MainPops) => {
  const { children } = props;
  return (
    <main>
      {children}
    </main>
  );
}
export default Main;
