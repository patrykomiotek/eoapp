type Props = {
  children: string;
}

export const Text = (props: Props) => {
  const { children } = props;
  return (
    <p>{children}</p>
  );
}
// <Text>Lorem ipsum</Text>
{/* <Main>
  <div>
    <Text></Text>
  </div>
</Main> */}

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