import Title from '../components/title';

function Bio() {
    return (
        <div id='Biography' className="bg-darker-gray-bg h-screen max-sm:h-auto flex items-center px-24 max-sm:p-0 max-sm:px-14 max-sm:py-12">
            <div className="flex justify-around max-sm:flex-col">
                <div className="w-[60%] max-sm:w-full">
                    <div>
                        <Title text="Yo" />
                    </div>
                    <p className="text-white-text text-[21px] max-sm:text-[19px] max-sm:leading-10 leading-[48px] text-justify max-sm:text-center">
                        Soy un talentoso fotógrafo y experimentado productor de videos especializado en diversos eventos y proyectos. Mi objetivo es brindarte un servicio excepcional que cumpla y supere tus expectativas. Con una sólida trayectoria en eventos de XV años, eventos escolares, reuniones familiares y publicidades.
                        
                        He perfeccionado mi habilidad para capturar la esencia y emoción de cada ocasión especial.
                        
                        Utilizo equipos de vanguardia y técnicas innovadoras para asegurar la más alta calidad en cada toma, y mi experiencia en edición profesional me permite transformar tus momentos capturados en piezas visuales asombrosas y cautivadoras.
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
