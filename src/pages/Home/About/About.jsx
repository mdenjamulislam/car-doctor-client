import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
import { Button } from "@material-tailwind/react";

const About = () => {
    return (
        <section className="sec-space">
            <div className="container">
                <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2">
                    <div className="relative">
                        <img src={person} alt="Person" className="relative h-60 w-2/3 object-cover md:h-[470px] md:w-[460px] rounded-lg " />
                        <div className="absolute -bottom-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 w-2/3 md:w-[360px]">
                            <img src={parts} alt="" className=" border-5  rounded-lg border-white" />
                        </div>
                    </div>
                    <div className="space-y-6 md:space-y-8">
                        <div className="space-y-2"> 
                            <strong className="text-base text-accent md:text-lg">About Us</strong>
                            <h2 className="heading-two">We are qualified & of experience in this field</h2>
                        </div>
                        <div className="space-y-3">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                        <Button variant="filled" size="lg" className="bg-accent text-white">
                            Get More Info
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
