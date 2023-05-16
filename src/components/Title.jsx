function Title({text}) {
    return (
        <div className="max-sm:mb-4 mb-12 flex w-full items-center justify-center">
            <div className="w-full h-[2px] max-sm:ml-[30px] ml-[200px] bg-gray-strokes"></div>
            <h1 className="border-gray-strokes border-2 py-2 px-6 rounded-[35px] text-2xl max-sm:mx-4 mx-6 text-white-titles">
                {text}
            </h1>
            <div className="w-full h-[2px] max-sm:mr-[30px] mr-[200px] bg-gray-strokes"></div>
        </div>
    );
}

export default Title;