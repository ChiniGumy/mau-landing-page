import Title from '../components/title';

function Bio() {
    return (
        <div id='Biography' className="bg-darker-gray-bg h-screen max-sm:h-auto flex items-center px-24 max-sm:p-0 max-sm:px-14 max-sm:py-12">
            <div className="flex justify-around max-sm:flex-col">
                <div className="w-[60%] max-sm:w-full">
                    <div>
                        <Title text="Me" />
                    </div>
                    <p className="text-white-text text-lg leading-10 text-justify max-sm:text-center">
                    Soy un talentoso fotógrafo y experimentado productor de videos, especializado en una amplia gama de eventos y proyectos. Mi pasión por capturar momentos inolvidables se ha convertido en mi profesión, y mi objetivo es brindarte un servicio excepcional que cumpla y supere tus expectativas.

                    Con una trayectoria sólida en eventos de XV años, eventos escolares, reuniones familiares y publicidades, he perfeccionado mi habilidad para capturar la esencia y la emoción de cada ocasión especial. Mi enfoque meticuloso en los detalles, combinado con mi estilo creativo y perspicaz, resulta en imágenes y videos que destacan y cuentan una historia única.

                    Utilizo equipos de vanguardia y técnicas innovadoras para asegurar la calidad más alta en cada toma. Además, mi experiencia en edición profesional me permite transformar tus momentos capturados en piezas visuales asombrosas y cautivadoras. Cada foto y video que entrego es el resultado de un proceso minucioso y personalizado, diseñado para satisfacer tus necesidades y reflejar tu visión.


                    </p>
                </div>
                <div className="w-[30%] max-sm:w-full">
                    <figure>
                        <img
                            src="/assets/images/city.jpg"
                            alt=""
                            className="mt-5 h-full max-sm:w-full"
                        />
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default Bio;
