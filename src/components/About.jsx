import Profile from "../assets/Profile.jpg"

const About = () => {
    return (
        <>
            <div className="bg-gray-900 flex flex-col md:flex-row justify-around items-center min-h-screen px-8 pt-16 text-white">
                <div className="">
                    <img
                        src={Profile}
                        alt="Virtual Representation"
                        className="w-auto h-96 object-contain rounded-full shadow-2xl"
                    />
                </div>
                <div className=" flex w-1/2 text-3xl">
                    <p>I am a skilled frontend web developer with a passion for creating exceptional user experiences. With a solid foundation in React.js, JavaScript and TalwindCSS, I specialize in building responsive and user-friendly web applications</p>
                </div>
           </div>
        </>
    );
};

export default About;