import Image from "next/image";
import styles from "@/components/page.module.css";
import Navbar from "@/components/navbar";

interface Experience {
  title: string;
  prevTitles?: string[];
  business?: string;
  dates: string;
  description: string;
  skills: string[];
}

export default function Home() {

  const experiences : Experience[] = [
    {
      title: "Software Developer",
      prevTitles: ["Software Developer Intern"],
      business: "Reyes Coca-Cola Bottling",
      dates: "2023 - Present",
      description: "Built, styled, and maintained websites, automation, and services for a diverse array of projects and teams across the company. Worked closely with cross-functional teams including developers and product managers to deliver custom internal tools and applications.",
      skills: ["Azure", "Azure DevOps", "Power Platform", "JavaScript", "HTML & CSS", ],
    }
  ]

  const buildExperience = (exp: Experience, index: number) => {
    return (
      <li key={index}>
        <span className={styles.dates}>{exp.dates}</span>
        <h2>
          <div>
            <span className={styles.title}>{exp.title}</span> {exp.business && <span className={styles.business}>· {exp.business}</span>}
          </div>
          {exp.prevTitles?.map((prevTitle, index) => (
            <div key={index}>
              <span className={styles.titlePrev}>{prevTitle}</span>
            </div>
          ))}
        </h2>
        <p className={styles.description}>{exp.description}</p>
        <ul className={styles.skills}>
          {buildSkills(exp.skills)}
        </ul>
      </li>
    )
  }

  const buildSkills = (skills: string[]) => {
    return skills.map((skill, index) => (
      <li key={index} className={styles.skill}>
        {skill}
      </li>
    ));
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <main id="main" className={styles.main}>
        <section id="experience" className={`${styles.section} ${styles.basic}`}>
          <h1>Experience</h1>
          <ul className={styles.experience}>
            {experiences.map((exp, index) => (
              buildExperience(exp, index)
            ))}
          </ul>
        </section>
        <section id="projects" className={`${styles.section} ${styles.basic}`}>
          <h1>Projects</h1>
        </section>
      </main>
      {/* <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
