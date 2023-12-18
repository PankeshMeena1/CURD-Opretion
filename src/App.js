import Layout from "./Laytout";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Home from "./Home";
import Stuinsert from "./stuinsert";
import Display from "./Display";
import Search from "./Search";
import Delete from "./Delete";
import Edit from "./Edit";


const App=()=>{
  return(
    <>

       <BrowserRouter>
         <Routes>
            <Route path="/"element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/insert"element={<Stuinsert/>} />
            <Route path="/display"element={<Display/>} />
            <Route path="/search"element={<Search/>} />
            <Route path="/delete"element={<Delete/>} />
            <Route path="/edit"element={<Edit/>} />
            </Route>
         </Routes>
       
       </BrowserRouter>

    </>
  );
}
export default App;
