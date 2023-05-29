import { ResetCss } from './styles/ResetCss';
import { GlobalStyle } from './styles/GlobalStyle';
import MyRoutes from './routes/MyRoutes';

function App() {
  return (
    <>
      <ResetCss />
      <GlobalStyle />
      <MyRoutes />
    </>
  );
}

export default App;
