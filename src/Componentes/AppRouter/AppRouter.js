import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Prueba from "../Prueba/Prueba";
import CompraBentonita from "../Secciones/CompraBentonita/CompraBentonita";
import CompraProductos from "../Secciones/CompraProductos/CompraProductos";
import Extraccion from "../Secciones/Extraccion/Extraccion";
import Propiedades from "../Secciones/Propiedades/Propiedades";
import UsosBentonita from "../Secciones/UsosBentonita/UsosBentonita";

const AppRouter = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <Propiedades />
            <Extraccion />
            <CompraBentonita />
            <UsosBentonita />
            <CompraProductos />
            <Footer />
            <Prueba />
        </>
    );
};

export default AppRouter;