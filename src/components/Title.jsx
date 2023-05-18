function Title({text}) {
    return (
        <div className="max-sm:mb-4 mb-12 flex w-full items-center justify-center">
            <div className="w-full h-[2px] bg-gray-strokes"></div>
            <h1 className="border-gray-strokes border-2 py-[4px] px-6 rounded-[35px] text-2xl max-sm:mx-4 mx-6 text-white-titles">
                {text}
            </h1>
            <div className="w-full h-[2px] bg-gray-strokes"></div>
        </div>
    );
}

export default Title;
