import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Social from "./components/Social/Social";
import Stack from "./components/Stack/Stack";

function App() {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Stack />
            <Resume />
            <Projects />
            <Social />
            <Footer />
        </>
    );
}

export default App;
