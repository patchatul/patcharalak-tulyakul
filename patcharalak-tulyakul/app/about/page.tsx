import Pat from "../../public/Pat.jpg";
import Image from "next/image";
import icon3 from "../../public/Icon3.svg";

interface Info {
  name: string;
  nickname: string;
  major: string;
  curredu: string;
  pastedu: string;
}

const info: Info = {
  name: "Patcharalak Tulyakul",
  nickname: "Pat",
  major: "Computer Science Major",
  curredu: "3.96 GPA @ University of South Florida | Jan 2026 - Present",
  pastedu:
    "4.00 GPA, Dean's List, Highest Honors @ Hillsborough College | May 2024 - Dec 2025",
};

interface Activities {
  club: string;
  role: string;
  time: string;
}

const activities: Activities[] = [
  {
    club: "Society of Asian Scientists and Engineers (SASE)",
    role: "Marketing Chair",
    time: "June 2026 - Present",
  },
  {
    club: "Women in Computer Science and Engineering (WiCSE)",
    role: "Social Media Manager",
    time: "May 2026 - Present",
  },
  {
    club: "Rewriting the Code",
    role: "Member",
    time: "May 2026 - Present",
  },
  {
    club: "Association for Computing Machinery (ACM)",
    role: "Web Designer",
    time: "May 2026 - June 2026",
  },
  {
    club: "Women in Computer Science and Engineering  (WiCSE)",
    role: "Marketing Shadow",
    time: "Mar 2026 - May 2026",
  },
  {
    club: "Data Science at USF",
    role: "Workshop Apprentice",
    time: "Mar 2026 - Apr 2026",
  },
];
const ActivitiesCards: React.FC<Activities> = ({ club, role, time }) => {
  return (
      <div className="flex gap-3 ">
      <div className="flex flex-col items-center shrink-0 w-5">
        <Image src={icon3} alt="" className="w-5 h-5 shrink-0"
        />
        <div className="w-px flex-1 mb-2 bg-white/40 " />
      </div>

      <div className="flex-1 mb-6">
        <p className="font-light font-inter">{time}</p>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <p className="font-medium">{role}</p>
          <p className="text-right">{club}</p>
        </div>
      </div>
    </div>
  );
};
interface Work {
  work: string;
  role: string;
  time: string;
}

const work: Work[] = [
  {
    work: "Herzing University, Remote USA",
    role: "Instructional Design Intern",
    time: "June 2026 - Present",
  },
  {
    work: "Boromarajonani College of Nursing, Trang TH",
    role: "English Tutor",
    time: "Apr 2022 - Present",
  },
  {
    work: "Freelance, Tampa FL",
    role: "Frontend Developer & Scrum Master",
    time: "Aug 2025 - Jan 2026",
  },
  
];
const WorkCards: React.FC<Work> = ({ work, role, time }) => {
  return (
     <div className="flex gap-3 ">
      <div className="flex flex-col items-center shrink-0 w-5">
        <Image src={icon3} alt="" className="w-5 h-5 shrink-0"
        />
        <div className="w-px flex-1 mb-2 bg-white/40 " />
      </div>

      <div className="flex-1 mb-6">
        <p className="font-light font-inter">{time}</p>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <p className="font-medium">{role}</p>
          <p className="text-right">{work}</p>
        </div>
      </div>
    </div>
  );
};

function About() {
  return (
    <div className="sm:m-10 m-2">
      {/* Pic & Main Info */}
      <div className="flex flex-row gap-4 justify-center items-center md:items-start">
        <Image
          src={Pat}
          alt="This is Pat. Feel free to check out my Linkedin for my picture."
          className="w-40 h-40 md:w-80 md:h-80 rounded-2xl object-cover"
        />
        <span className="flex flex-col gap-4 font-inter font-light">
          <p>{info.major}</p>
          <p>{info.curredu}</p>
          <p>{info.pastedu}</p>
        </span>
      </div>
    <section className="max-w-6xl mx-auto sm:px-10 ">
      {/* Work Experience */}

        <h2 className="section-heading border-b">Work Experience</h2>
        {work.map((work) => (
          <WorkCards
            key={work.work}
            work={work.work}
            role={work.role}
            time={work.time}
          />
        ))}    
      
      {/* Activities */}
        <h2 className="section-heading border-b">Activities</h2>
      
        {activities.map((activity) => (
          <ActivitiesCards
            key={activity.club}
            club={activity.club}
            role={activity.role}
            time={activity.time}
          />
        ))}
      </section>
      </div>
  );
}

export default About;
