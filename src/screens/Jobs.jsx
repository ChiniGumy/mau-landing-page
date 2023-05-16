import Title from '../components/title';
import '../style.css'

import beach from '../../public/assets/images/beach.jpg'
import bmx from '../../public/assets/images/bmx.jpg'
import bmx2 from '../../public/assets/images/bmx2.jpg'
import bridge from '../../public/assets/images/bridge.jpg'
import cat from '../../public/assets/images/cat.jpg'
import city from '../../public/assets/images/city.jpg'
import moon from '../../public/assets/images/moon.jpg'
import quad from '../../public/assets/images/quad.jpg'

function Jobs() {
    return (
        <div className=" bg-gray-bg items-center h-auto w-full py-24 max-sm:py-12">
            <Title text="Jobs" />
            <div className="flex justify-center align-center">
                <div className="parent p-4">
                    <img src={bridge} class="div1 w-full h-full object-cover" />
                    <img src={bmx} class="div2 w-full h-full object-cover" />
                    <img src={quad} class="div3 w-full h-full object-cover" />
                    <img src={bmx2} class="div4 w-full h-full object-cover" />
                    <img src={cat} class="div5 w-full h-full object-cover" />
                    <img src={city} class="div6 w-full h-full object-cover" />
                    <img src={moon} class="div7 w-full h-full object-cover" />
                    <img src={beach} class="div8 w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}

export default Jobs;
