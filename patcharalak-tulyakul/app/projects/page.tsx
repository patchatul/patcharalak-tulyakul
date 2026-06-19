import Image from "next/image";
import LittleLemon from "../../public/LittleLemon.png";
import LittleLemonUXUI from "../../public/LittleLemonUXUI.png";
import StockPrediction from "../../public/Stockprediction.png";
import MovieRecommedation from "../../public/Movierecommendation.png";
import StockTracking from "../../public/StockTracking.png";
import GuineapigPhotobooth from "../../public/Guineapigphotobooth.png";
import PhotoToFlower from "../../public/Phototoflower.png";
import EscapeRoom from "../../public/EscapeRoom.png";

interface ProjectList {
  title: string;
  link: string;
  img: typeof LittleLemon;
  alt: string;
  desc: string;
  tech: string[];
}

const projects: ProjectList[] = [
  {
    title: "Stock Tracking",
    link: "https://deep-dress-20663150.figma.site/",
    img: StockTracking,
    alt: "Stock Portfolio Tracking and Analysis Website",
    desc: "Developed a stock portfolio tracking and analysis website with Figma.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    title: "Guinea Pig Photo Booth",
    link: "https://guineapig-photobooth.vercel.app/",
    img: GuineapigPhotobooth,
    alt: "Guinea Pig Photo Booth Website",
    desc: "Developed a photobooth web app that captures real-time photos and decorates with stickers in guinea pigs theme.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "IndexDB", "IbisPaint X"],
  },

  {
    title: "Photo to Flower",
    link: "https://photo-to-flower.vercel.app/",
    img: PhotoToFlower,
    alt: "Photo to Flower Website",
    desc: "Created a web app that converts photos to flowers using Sharp and HTML5 Canvas API.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Sharp",
      "HTML5 Canvas API",
    ],
  },
  {
    title: "3D Escape Room",
    link: "https://github.com/patchatul/escaperoom_hackusf",
    img: EscapeRoom,
    alt: "3D Escape Room Website",
    desc: "Developed an AI-powered interactive 3D escape room game in HACKUSF using Three.js with Python debugging challenges.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Three.js", "Vite"],
  },
  {
    title: "Movie Recommendation",
    link: "https://github.com/patchatul/movie-recommendation",
    img: MovieRecommedation,
    alt: "Movie Recommendation Project",
    desc: "Built a movie recommendation system using jupyter, python, and pandas with MoviesLens 25M Dataset",
    tech: ["Python", "Jupyter Notebook", "Pandas"],
  },
  {
    title: "LSTM Stock Prediction",
    link: "https://github.com/patchatul/stock_prediction",
    img: StockPrediction,
    alt: "LSTM Stock Prediction Visualization",
    desc: "Built an LSTM-based neural network to predict and visualize stock prices using yfinance, NumPy, Pandas, Scikit-learn, and Matplotlib.",
    tech: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
  },
  {
    title: "Little Lemon Website",
    link: "https://github.com/patchatul/Little-Lemon-Project-Capstone",
    img: LittleLemon,
    alt: "Little Lemon Website Landing Page",
    desc: "Designed and built responsive website from Meta Front-End Developer certificate capstone project using HTML, CSS, Bootstrap, JavaScript, and React.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"],
  },
  {
    title: "Little Lemon UX/UI kits",
    link: "https://www.figma.com/design/V0yhbk67UNEogTv7SxHDW8/Little-Lemon-s-UX-UI-project?node-id=307-82&t=jb2Mov4ttnfZCJvk-1",
    img: LittleLemonUXUI,
    alt: "Little Lemon Website UX/UI package",
    desc: "Conducted UX/UI research and design in Figma, including user persona, problem definition, journey map, mobile low-fidelity wireframe, and high-fidelity prototype ",
    tech: ["Figma"],
  },
];

const ProjectCards: React.FC<ProjectList> = ({
  title,
  link,
  img,
  alt,
  desc,
  tech,
}) => {
  return (
    <div>
      <p className="text-xl text-center">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </p>
      <div className="flex justify-center w-full">
        <Image
          src={img}
          alt={alt}
          className="w-full m-2 aspect-video object-cover h-auto rounded-xl hover:scale-[1.02]"
        />
      </div>
      <p className="font-inter">{desc}</p>
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {tech.map((t) => (
          <span key={t} className="bg-[#714E3A] text-xs font-inter p-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};
const Projects: React.FC = () => {
  return (
    <section className="p-5 m-5">
      <h2 className="text-center text-3xl pb-5 m-5 border-b">Projects</h2>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <ProjectCards key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
