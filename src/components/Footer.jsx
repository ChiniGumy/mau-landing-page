import arrow from '/assets/icons/arrow.svg'
import instagramIcon from '/assets/icons/instagram.svg'
import whatsappIcon from '/assets/icons/whatsapp.svg'
import youtubeIcon from '/assets/icons/youtube.svg'
import twitterIcon from '/assets/icons/twitter.svg'

function Footer() {
  return (
    <div className="bg-gray-footer h-36 p-6 px-20 flex justify-between items-center max-sm:p-0 max-sm:px-8 max-sm:pb-12 max-sm:pt-10">
        <div className='flex flex-col'>
            <h2 className='text-2xl font-bold text-white-titles'>Mauricio Cornejo</h2>
            <div className='mt-3 flex items-center'>
                <img src={instagramIcon} className='w-6 h-6 mr-3 cursor-pointer transition-all hover:scale-110' />
                <img src={whatsappIcon} className='w-6 h-6 mx-3  cursor-pointer transition-all hover:scale-110' />
                <img src={twitterIcon} className='w-6 h-6  mx-3 cursor-pointer transition-all hover:scale-110' />
                <img src={youtubeIcon} className='w-7 h-7 ml-3 cursor-pointer transition-all hover:scale-110' />
            </div>
        </div>

        <div>
            <a href="#Hero"><img src={arrow} className='h-16 w-16 ' alt="Arrow" /></a>
        </div>

    </div>
  )
}

export default Footer