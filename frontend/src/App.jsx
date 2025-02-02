import RenderRoutes from './routes/RoutesRender'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <>
     <BrowserRouter>
        <RenderRoutes />
      </BrowserRouter>   
    </>
  );
}

export default App;
