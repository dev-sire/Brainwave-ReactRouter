import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath"
import { GradientLight } from "../design/Benefits";

const Benefits = () => {
  return (
    <Section id="features">
        <div className="container relative z-2">
            <Heading className="text-center md:max-w-md lg:max-w-2xl" title="Chat Smarter, Not Harder with Brainwave" />
            <div className="flex flex-wrap gap-10 mb-10">
                {benefits.map((item) => (
                    <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]" 
                        style={{
                            backgroundImage: `url(${item.backgroundUrl})`,
                        }}
                        key={item.id}>
                        <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                            <h5 className="h5 mb-5">{item.title}</h5>
                            <p className="body-2 mb-6 text-n-3">{item.text}</p>
                            <div className="flex items-center mt-auto">
                                <img src={item.iconUrl} width={48} height={28} alt="Icons" />
                                <p className="ml-auto font-code font-bold text-xs text-n-1 uppercase tracking-wider">
                                    Explore More
                                </p>
                                <Arrow />
                            </div>
                        </div>
                        {item.light && <GradientLight />}
                        <div className="absolute bg-n-8 inset-0.5" style={{clipPath: "url(#benefits)"}}>
                            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                {item.imageUrl && (
                                    <img src={item.imageUrl} width={380} height={362} className="h-full w-full object-cover" alt="bgImage" />
                                )}
                            </div>
                        </div>
                        <ClipPath />
                    </div>
                ))}
            </div>
        </div>
    </Section>
  )
}

export default Benefits