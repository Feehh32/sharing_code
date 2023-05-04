import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Cabecalho from "Components/Cabecalho";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Cabecalho />
			<Routes>
				<Route path="/" element={<Inicio />}></Route>
			</Routes>
		</BrowserRouter>


	);
}

export default AppRoutes;
