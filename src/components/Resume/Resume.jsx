import Education from "./Education/Education";
// import Expertise from "./Expertise/Expertise";
import Skills from "./Skills/Skills";

export default function Resume() {
    return (
        <section className='section' id='resume'>
            <div className='container'>
                <h1 className='mb-5'>
                    <span className='text-danger'>My</span> Resume
                </h1>
                <div className='row'>
                    {/* <Expertise /> */}
                    <Education />
                    <Skills />
                </div>
            </div>
        </section>
    );
}
