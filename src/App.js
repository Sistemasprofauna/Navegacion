import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Sobre from './paginas/SobreNosotros';

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Inicio/>}/>
              <Route path='/sobre' element={<Sobre/>}/>
             </Routes>
        </BrowserRouter>
    );
};
