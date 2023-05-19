import Title from '../components/title';
import '../style.css'

import beach from '/assets/images/beach.webp'
import bmx from '/assets/images/bmx.webp'
import bmx2 from '/assets/images/bmx2.webp'
import bridge from '/assets/images/bridge.webp'
import cat from '/assets/images/cat.webp'
import city from '/assets/images/city.webp'
import moon from '/assets/images/moon.webp'
import quad from '/assets/images/quad.webp'

function Jobs() {
    return (
        <div id='Jobs' className=" bg-gray-bg items-center h-auto w-full max-sm:p-0 px-36 py-24 max-sm:py-12">
            <Title text="Proyectos"/>
            <div className="flex justify-center align-center">
                <div className="parent p-6">
                    <img src={bridge} class="div1 w-full h-full object-cover max-sm:my-2" />
                    <img src={bmx} class="div2 w-full h-full object-cover max-sm:my-2" />
                    <img src={quad} class="div3 w-full h-full object-cover max-sm:my-2" />
                    <img src={bmx2} class="div4 w-full h-full object-cover max-sm:my-2" />
                    <img src={cat} class="div5 w-full h-full object-cover max-sm:my-2" />
                    <img src={city} class="div6 w-full h-full object-cover max-sm:my-2" />
                    <img src={moon} class="div7 w-full h-full object-cover max-sm:my-2" />
                    <img src={beach} class="div8 w-full h-full object-cover max-sm:my-2" />
                </div>
            </div>
        </div>
    );
}

export default Jobs;
