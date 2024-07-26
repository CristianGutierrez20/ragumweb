import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './Sections/Inicio';
import Login from './Sections/Login';
import Registro from './Sections/Registro';
import Contenido from './Sections/Contenido';
import AuthProvider from './auth/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JavaCurso from './Sections/CursoJava/JavaCurso';
import Acerca from './Sections/Acerca';
import Contacto from './Sections/Contacto';
import Quizz from './components/Quizz';
import Protected from './components/Protected';
function App() {
  return (
    <AuthProvider>
    <div className="App">
      <BrowserRouter>

      <Header />

      <section>
        <div className="content-container">
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registrarse' element={<Registro/>}/>
          <Route path='/' element={<Protected/>} children={<Route path='/contenido' element={<Contenido/>} />}/>
          <Route path='/' element={<Protected/>} children={<Route path='/contenido/java-basico/:id' element={<JavaCurso/>} />}/>
          <Route path="/" element={<Protected/>} children={<Route path='/contenido/java-basico/Quizz' element={<Quizz/>}/>}/>
          <Route path='/acerca' element={<Acerca/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
        </div>
  
      </section>
      <Footer />
      </BrowserRouter>
    </div>
    </AuthProvider>
  );
}

export default App;
