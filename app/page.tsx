import { FC } from "react";

interface AppProps {
  title: string;
}

const App: FC<AppProps> = () => {
  return <h1>Hello world!</h1>;
};

export default App;
