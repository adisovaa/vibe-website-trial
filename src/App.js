import './App.css';
import Header from "./components/Header/header";
import Heading from "./components/Content/Heading/heading";
import {BrowserRouter} from "react-router-dom";
import {SocialText, StoryText, ValueText} from "./components/Content/Text/story";
import SliderBox from "./components/Content/Slider/slider";
import UserProfileForm from "./components/Content/Form/form";
import {CartItem} from "./components/Content/CartItem/cartItem";
import {SocialBlock} from "./components/Content/Social/socialBlock";
import {Footer} from "./components/Content/Footer/footer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Heading/>
                <StoryText/>
                <SliderBox/>
                <UserProfileForm/>
                <ValueText/>
                <CartItem/>
                <SocialText/>
                <SocialBlock/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
