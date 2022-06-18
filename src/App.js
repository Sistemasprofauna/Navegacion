import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navegacion from './componentes/navegacion';
import Inicio from './paginas/Inicio';
import NotFound from './paginas/NotFound';
import PaginasUsuarios from './paginas/PaginasUsuarios';
import Sobre from './paginas/SobreNosotros';

export default function App(){
    return(
        <BrowserRouter>
        <Navegacion/>
            <Routes>
              <Route path='/' element={<Inicio/>}/>
              <Route path='/sobre' element={<Sobre/>}/>
              <Route path='/usuarios' element={<PaginasUsuarios/>}/>
              <Route path='*' element={<NotFound/>}/>
             </Routes>
        </BrowserRouter>
    );
};
