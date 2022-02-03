import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Certificacion from "../Secciones/Certificacion/Certificacion";
import CompraBentonita from "../Secciones/CompraBentonita/CompraBentonita";
import CompraProductos from "../Secciones/CompraProductos/CompraProductos";
import Informacion from "../Secciones/Informacion/Informacion";
import Propiedades from "../Secciones/Propiedades/Propiedades";
import UsosBentonita from "../Secciones/UsosBentonita/UsosBentonita";

const AppRouter = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <Propiedades />
            <Informacion />
            <Certificacion />
            <UsosBentonita />
            <CompraBentonita />
            <CompraProductos />
            <Footer />
        </>
    );
};

export default AppRouter;