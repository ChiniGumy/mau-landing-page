import Hero from "../screens/Hero";
import Jobs from "../screens/Jobs"
import Bio from "../screens/Bio";
import Navbar from "../components/Navbar";
import Market from "../screens/Market";
import Footer from "../components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Hero/>
            <Jobs/>
            <Bio />
            <Market />
            <Footer />
        </>
    );
}

export default App;
