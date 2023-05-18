import Title from "../components/title"
import Pack from "../components/Pack"

function Market() {
  return (
    <div id='Packs' className="bg-gray-bg h-screen max-sm:h-auto max-sm:p-0 max-sm:px-14 max-sm:py-12 px-36 py-24 flex flex-col items-center">
            <Title text='Packs' />
        <div className="h-screen flex flex-col items-center justify-center">
            <Pack />
        </div>
    </div>
  )
}

export default Market