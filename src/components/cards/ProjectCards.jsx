import PropTypes from "prop-types";
import { Link } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { Github } from "lucide-react";

const ProjectCards = ({ data }) => {
  return (
    <div className="w-full h-fit card card-compact rounded-none bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="w-full h-[10rem] md:h-[15rem] p-2">
        <img
          src={data?.image}
          alt="Project"
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="card-body ">
        <h2 className="card-title capitalize font-bold">{data?.name}</h2>

        <div className="w-full font-medium capitalize flex flex-wrap items-center gap-2 m-0 ">
          tech stack:
          {data?.techStack.map((item, index) => (
            <span
              key={index}
              className="w-fit h-fit bg-slate-100 p-1 text-[#d2386e]"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="card-actions justify-between p-5">
          <div className="flex items-center gap-2">
            <Link className="w-4 h-4" />
            {data.liveUrl ? (
              <>
                <RouterLink to={data.liveUrl} className="underline font-bold">
                  Visit Site
                </RouterLink>
              </>
            ) : (
              <p className="underline font-bold">Priviate</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Github className="w-4 h-4" />
            {data?.githubUrl ? (
              <RouterLink to="/" className="underline font-bold">
                View Code
              </RouterLink>
            ) : (
              <p className="underline font-bold">Priviate</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCards.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string,
    techStack: PropTypes.arrayOf(PropTypes.string),
    liveUrl: PropTypes.string,
    githubUrl: PropTypes.string,
  }),
};

export default ProjectCards;
