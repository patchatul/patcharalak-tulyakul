import Pat from "../../public/Pat.jpg";
import Image from "next/image";

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
    <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 font-light font-inter mt-0 mb-2 m-8">
      <p>{club}</p>
      <p>{role}</p>
      <p className="text-right">{time}</p>
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
    work: "Freelance, Tampa FL",
    role: "Frontend Developer, Scrum Master",
    time: "Aug 2025 - Jan 2026",
  },
  {
    work: "Boromarajonani College of Nursing, Trang TH",
    role: "English Tutor",
    time: "Apr 2022 - Apr 2024",
  },
];
const WorkCards: React.FC<Work> = ({ work, role, time }) => {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 font-light font-inter mt-0 mb-2 m-8">
      <p>{work}</p>
      <p>{role}</p>
      <p className="text-right">{time}</p>
    </div>
  );
};

function About() {
  return (
    <div className="my-10">
      {/* Pic & Main Info */}
      <div className="flex flex-row  gap-4 justify-center">
        <Image
          src={Pat}
          alt="This is Pat. Feel free to check out my Linkedin for my picture."
          className="w-50 h-auto md:w-80 rounded-2xl object-cover"
        />
        <span className="flex flex-col gap-4 font-inter font-light">
          <p>{info.major}</p>
          <p>{info.curredu}</p>
          <p>{info.pastedu}</p>
        </span>
      </div>

      {/* Activities */}
      <div className=" ">
        <h2 className="section-heading">Activities</h2>
        <div className="text-xs grid grid-cols-[2fr_1fr_1fr] gap-4 uppercase border-b m-8 mb-2 mt-0">
          <span className="text-left">club</span>
          <span>role</span>
          <span className="text-right">Time</span>
        </div>
        {activities.map((activity) => (
          <ActivitiesCards
            key={activity.club}
            club={activity.club}
            role={activity.role}
            time={activity.time}
          />
        ))}
      </div>

      {/* Work Experience */}

      <div className=" ">
        <h2 className="section-heading">Work Experience</h2>
        <div className=" text-xs grid grid-cols-[2fr_1fr_1fr] gap-4 uppercase border-b m-8 mb-2 mt-0">
          <span className="text-left">company, location</span>
          <span>role</span>
          <span className="text-right">time</span>
        </div>
        {work.map((work) => (
          <WorkCards
            key={work.work}
            work={work.work}
            role={work.role}
            time={work.time}
          />
        ))}
      </div>     
    </div>
  );
}

export default About;
