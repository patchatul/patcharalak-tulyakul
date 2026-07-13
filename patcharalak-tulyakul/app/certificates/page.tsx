import Image from "next/image";
import MetaFrontEndCert from "../../public/MetaFrontEndDeveloperCoursera.jpg";
import ResponsiveWebCert from "../../public/ResponsiveWebfreeCodeCamp.png";
import JavaScriptCert from "../../public/JSfreeCodeCamp.png"; 
import Tesol from "../../public/TESOLCertificate.png";

interface CertificateList {
  title: string;
  link: string;
  img: typeof MetaFrontEndCert;
  alt: string;
  desc: string[];
}
const certificates: CertificateList[] = [
  {
    title: "Meta Front-End Developer",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/34FVJVRS4DKP",
    img: MetaFrontEndCert,
    alt: "Meta Fron-End Developer Certificate",
    desc: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Web Development", "UI/UX design", "Version Control", "Git"],
  },
  {
    title: "Legacy JavaScript Algorithms and Data Structures-freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/fcc79225faf-3524-4849-a338-b14c63eb50e9/javascript-algorithms-and-data-structures",
    img: JavaScriptCert,
    alt: "Legacy JavaScript Algorithms and Data Structures freeCodeCamp Certificatee",
    desc: ["Algorithms", "Data Structures", "JavaScript", "Object Oriented Programming", "Functional Programming"],
  },
  {
    title: "Responsive Web Design-freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/fcc79225faf-3524-4849-a338-b14c63eb50e9/responsive-web-design",
    img: ResponsiveWebCert,
    alt: "Responsive Web Design freeCodeCamp Certificate",
    desc: ["Responsive Web Design", "HTML", "CSS"],
  },
  {
    title: "TESOL Certificate",
    link: "https://www.tesol.com/certificate",
    img: Tesol,
    alt: "TESOL Certificate",
    desc: ["Teaching English","TESOL", "TEFL", "ESL","Online Instruction", "Classroom Management", "Lesson Planning", "Language Acquisition"],
  },
];

const CertificateCards: React.FC<CertificateList> = ({
  title,
  link,
  img,
  alt,
  desc,
}) => {
  return (
    <div>
      <p className="text-xl text-center">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
          <span className="flex justify-center w-full">
        <Image
          src={img}
          alt={alt}
          className="h-auto w-[80%] m-2 object-cover rounded-xl hover:scale-[1.02]"
        />
      </span>
        </a>
      </p>
      
      <div className="flex flex-wrap justify-center gap-2">
        {desc.map((d) => (
          <span
            key={d}
            className="bg-[#714E3A] text-xs font-inter p-1 rounded"
          >
            {d}
          </span>
        ))}
      </div>
    </div>
    
  );
};
const Certificates: React.FC = () => {
  return (
    <section className="p-5 m-5">
      <h2 className="text-center text-3xl pb-5 m-5 border-b">
        Certificates
      </h2>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3  gap-8">
       {certificates.map((cert) => (
          <CertificateCards key={cert.title} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
