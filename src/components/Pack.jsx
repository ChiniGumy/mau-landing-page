function Pack() {
    return (
        <div className="mt-12 border-2 border-gray-strokes flex w-[65%] p-6 justify-between max-sm:flex-col max-sm:h-auto max-sm:p-6 max-sm:w-full max-sm:items-center">

            <figure className="w-[54%] max-sm:w-full ring-[14px] ring-gray-bg -translate-y-12">
                <img
                    src="/assets/images/quad.jpg"
                    alt=""
                    className="h-[calc(100%+3em)] object-cover max-sm:w-full"
                />
            </figure>

            <div className="flex flex-col justify-between ml-6 max-sm:ml-0 w-[44%] max-sm:w-full">
                <div className="mt-2 max-sm:mt-6 max-sm:flex max-sm:flex-col max-sm:items-center">
                    <h2 className="text-2xl font-bold text-white-titles">Mau's Signature</h2>
                    <p className="mt-4 text-white-text text-[16px] leading-8 text-justify max-sm:text-center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vel eveniet facilis exercitationem repellendus
                        excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vel eveniet facilis exercitationem repellendus
                        excepturi.
                    </p>
                </div>
                <div className="flex justify-between max-sm:mt-6 max-sm:flex-col-reverse max-sm:items-center">
                    <div className="max-sm:mb-4 max-sm:w-[80%] max-sm:flex max-sm:items-center max-sm:justify-center p-2 px-8 bg-gray-button-body border border-gray-strokes text-white-titles">Ver mas</div>
                    <span className="max-sm:mb-4 text-2xl font-bold text-white-titles">$9.99</span>
                </div>
            </div>
        </div>
    );
}

export default Pack;