import videoBg from '/assets/videos/car-follow.mp4'
import instagramIcon from '/assets/icons/instagram.svg'
import whatsappIcon from '/assets/icons/whatsapp.svg'
import youtubeIcon from '/assets/icons/youtube.svg'
import twitterIcon from '/assets/icons/twitter.svg'

function Hero() {
  return (
    <div id='Hero' className='h-screen flex justify-center items-center '>
        <video className='w-full h-screen object-cover brightness-[15%] fixed z-[-99]' src={videoBg} autoPlay loop muted playsinline />
        <div className='flex flex-col justify-between items-center h-[30%]'>
            
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-center max-sm:mb-2 mb-4 max-sm:text-4xl text-6xl font-bold text-white-main-title'>Mauricio Cornejo</h1>
                <p className='text-center max-sm:text-[16px] text-xl text-gray-info-hero-section'>photographer & video producer</p>
            </div>

            <div className='flex items-center justify-end'>
                <img src={instagramIcon} className='w-8 h-8 mx-4 cursor-pointer transition-all hover:scale-110' />
                <img src={whatsappIcon} className='w-8 h-8 mx-4 cursor-pointer transition-all hover:scale-110' />
                <img src={twitterIcon} className='w-8 h-8 mx-4 cursor-pointer transition-all hover:scale-110' />
                <img src={youtubeIcon} className='w-8 h-8 mx-4 cursor-pointer transition-all hover:scale-110' />
            </div>

        </div>
    </div>
  )
}

export default Hero