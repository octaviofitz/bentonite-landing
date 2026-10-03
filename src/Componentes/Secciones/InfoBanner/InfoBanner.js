import { useEffect } from 'react';
import { useVariant } from '../../Hooks/useVariant';

//styles
import '../InfoBanner/infoBanner.css'

const TEXTOS = {
    // A: texto actual (control)
    A: [
        'La bentonita es una arcilla de origen volcánico compuesta principalmente por minerales del grupo de las esmectitas, siendo la montmorillonita el más representativo. Este tipo de arcilla tiene la particularidad de hincharse al entrar en contacto con el agua, lo que le permite absorber grandes cantidades de líquido y formar una masa compacta y aglutinante. Gracias a esta propiedad, la bentonita es un material ampliamente valorado en múltiples industrias.',
        'Fue descubierta en 1888 en Fort Benton, Wyoming (Estados Unidos), y de allí proviene su nombre. Desde entonces, su uso se ha extendido globalmente, consolidándose como un insumo esencial en sectores como la construcción, la minería, la industria del petróleo, la agricultura, la cosmética y los productos para el cuidado de mascotas. Su capacidad para retener líquidos, capturar impurezas y actuar como sellante natural le da una ventaja competitiva frente a otros materiales sintéticos.',
        'Además de sus propiedades técnicas, la bentonita destaca por ser un recurso natural, no tóxico y biodegradable. Esto la convierte en una opción sostenible, ideal para soluciones que buscan equilibrio entre eficacia y respeto por el medio ambiente. Ya sea en la fabricación de productos industriales o en aplicaciones domésticas como la arena sanitaria para gatos, la bentonita demuestra ser una materia prima confiable, segura y de alto rendimiento.',
    ],
    // B: texto nuevo, orientado a ventas
    B: [
        'Producimos bentonita sódica de principio a fin: la extraemos de nuestros yacimientos, la procesamos y la envasamos en planta propia. Comprás directo al productor, con precio de origen, la misma calidad en cada lote y un único responsable por lo que recibís.',
        'Su alto poder de absorción, su capacidad aglomerante y su acción sellante la convierten en un insumo de alto rendimiento para la industria: hace más con menos material, y eso se nota en tus costos. Te asesoramos para definir la bentonita indicada según tu aplicación.',
        'Además es un mineral natural, no tóxico y biodegradable, respaldado por nuestra certificación de calidad. Entregamos en el volumen que tu operación necesite, con abastecimiento continuo y plazos que se cumplen. Pedí tu cotización hoy.',
    ],
};

const InfoBanner = () => {
    const variant = useVariant();

    // Registra una vez qué variante vio el visitante
    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'ab_exposure', ab_variant: variant });
    }, [variant]);

    return (
        <section>
            <div className='container-data'>
                {TEXTOS[variant].map((texto, i) => (
                    <p className='texto' key={i}>{texto}</p>
                ))}
            </div>
        </section>
    );
};

export default InfoBanner;