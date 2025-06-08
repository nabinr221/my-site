import Title from "../title/Title";
import { techStack } from "../../config/teckSatck";

const TechStack = () => {
  return (
    <div className="w-full ">
      <Title
        title="Tech Stack"
        subtitle=" Technologies I’ve been working with recently"
        className="items-center text-center "
      />
      <div className="w-full flex flex-wrap gap-5 sm:gap-10  mt-6 sm:mt-20 justify-center ">
        {techStack.map((item, index) => (
          <div
            key={index}
            className="p-3 border-2 tect-stack transition-all duration-500 flex flex-col items-center gap-2"
          >
            <div className="w-[10rem] h-[7rem] ">
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
