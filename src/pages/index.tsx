import { Geist, Geist_Mono } from "next/font/google";
import CVPage from "@/components/CVPage";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { GetStaticProps } from 'next';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// CV veri tipi tanımları
interface CVData {
    personalInfo: {
        name: string;
        title: string;
        location: string;
        email: string;
        phone: string;
        github: string;
        linkedin: string;
    };
    about: string[];
    education: {
        university: string;
        degree: string;
    };
    experience: Array<{
        id: string;
        company: string;
        period: string;
        responsibilities: string[];
    }>;
    skills: Array<{
        category: string;
        items: string;
    }>;
    projects: {
        frontend: Array<{
            name: string;
            year: string;
            description: string[];
            techStack?: string;
            url?: string;
        }>;
        fullstack: Array<{
            name: string;
            year: string;
            description: string[];
            techStack?: string;
            url?: string;
        }>;
        backend: Array<{
            name: string;
            year: string;
            description: string[];
            techStack?: string;
            url?: string;
        }>;
    };
}

interface HomeProps {
    cvData: CVData;
}

export default function Home({ cvData }: HomeProps) {
    return (
        <main className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
            <ThemeToggle />
            <CVPage cvData={cvData} />
        </main>
    );
}

// Bu fonksiyon build zamanında çalışır ve veriyi getStaticProps ile sağlar
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const cvData: CVData = {
        personalInfo: {
            name: "Mustafa İhsan AKAGÜNDÜZ",
            title: "Senior Computer Engineering Student at Hacettepe University",
            location: "Çankaya, Ankara",
            email: "akagunduzmustafa00@gmail.com",
            phone: "+90 546 556 61 10",
            github: "https://github.com/MustafaAkagunduz",
            linkedin: "https://linkedin.com/in/mustafa-akagunduz"
        },
        about: [
            "Senior Computer Engineering student with a strong passion for full-stack web development.",
            "Highly adaptable and quick to learn new technologies, with a strong work ethic, self-discipline, and effective team communication skills.",
            "Beyond software development, I run a YouTube channel called \"Kısaca AKA\" where I share content on software, personal development, algorithm challenges, and vlogs."
        ],
        education: {
            university: "Hacettepe University",
            degree: "B.Sc. in Computer Engineering"
        },
        experience: [
            {
                id: "dx-hrsam",
                company: "Graduation Project - DX-HRSAM",
                period: "Oct 2024 – Jun 2025",
                responsibilities: [
                    "Developed a skills assessment and career matching platform using Spring Boot, React, TypeScript, and PostgreSQL within an MVC architecture.",
                    "Designed and implemented an interactive survey system to evaluate user proficiency across IT skills."
                ]
            },
            {
                id: "tubitak",
                company: "TÜBİTAK BİLGEM YTE",
                period: "Jun 2024 – Aug 2024",
                responsibilities: [
                    "Received hands-on training in Core Java, Spring Boot, React, Next.js, Hibernate, Docker, Kubernetes, and TypeScript.",
                    "Led full-stack development efforts for the 'New Personnel' system."
                ]
            },
            {
                id: "turkcell",
                company: "TURKCELL İletişim A.Ş.",
                period: "Aug 2023 – Sept 2023",
                responsibilities: [
                    "Developed a comprehensive documentation system for backend services.",
                    "Reduced onboarding time for new developers."
                ]
            },
            {
                id: "acm",
                company: "ACM Hacettepe (Association of Computing Machinery)",
                period: "Oct 2022 – Present",
                responsibilities: [
                    "Designed visual materials using Adobe Photoshop and CapCut for ACM Hacettepe's event promotions and marketing campaigns."
                ]
            }
        ],
        skills: [
            {
                category: "Programming Languages & Frameworks",
                items: "Java (Spring Boot), Python (Django), TypeScript (React)"
            },
            {
                category: "Web Development Tools",
                items: "Postman, Dbeaver, IntelliJ IDEA, VS Code"
            },
            {
                category: "Database",
                items: "PostgreSQL"
            },
            {
                category: "Product Management",
                items: "Git, Jira"
            },
            {
                category: "Languages",
                items: "English (Advanced), Turkish (Native), German (Beginner)"
            }
        ],
        projects: {
            frontend: [
                {
                    name: "Algorithm Question Tracker (Portfolio Project)",
                    year: "2025",
                    description: [
                        "A web application that helps users repeat previously solved algorithm questions at intervals according to the difficulty levels they determine."
                    ],
                    techStack: "NextJS, ReactJS, Typescript, Tailwind CSS",
                    url: "https://question-tracker-seven.vercel.app"
                },
                {
                    name: "Weather-Wear (Portfolio Project)",
                    year: "2025",
                    description: [
                        "Open source web application",
                        "AI-Powered Web Application for Automatically Detecting Users' Location and Providing Daily Outfit Recommendations."
                    ],
                    techStack: "NextJS, ReactJS, Typescript, OpenAI API",
                    url: "https://weather-wear-three.vercel.app"
                },
                {
                    name: "Kanban.im (My Kanban) (Portfolio Project)",
                    year: "2025",
                    description: [
                        "Open source web application",
                        "Helps users organize their tasks and daily to-do's."
                    ],
                    techStack: "NextJS, ReactJS, Typescript",
                    url: "https://www.kanban.im"
                },
                {
                    name: "Webpage for Interior-Design Company: Spring Concepts (Portfolio Project)",
                    year: "2025",
                    description: [
                        "My imaginary web page design work that I received from an imaginary company."
                    ],
                    techStack: "NextJS, ReactJS, Typescript",
                    url: "https://interior-design-company-website.vercel.app"
                },
                {
                    name: "My Resume (Portfolio Project)",
                    year: "2025",
                    description: [
                        "I made this project to publish my up-to-date CV for recruiters."
                    ],
                    techStack: "NextJS, ReactJS, Typescript",
                    url: "https://cv-uwdm.vercel.app"
                },
                {
                    name: "AI-Powered \"Üzgünüz, fakat..\" (Portfolio Project)",
                    year: "2025",
                    description: [
                        "It is an application that evaluates candidates and employers' suitability for job postings and creates a letter of intent for candidates and personalized letters for employers."
                    ],
                    techStack: "NextJS, ReactJS, Typescript, OpenAI API",
                    url: "https://uzgunuz-fakat.com"
                },
                {
                    name: "Shopsmart (Portfolio Project)",
                    year: "2025",
                    description: [
                        "This is an imaginary e-commerce website page. Just for fun.. :)"
                    ],
                    techStack: "NextJS, ReactJS, Typescript",
                    url: "https://e-commerce-website-react-xi.vercel.app"
                }
            ],
            fullstack: [
                {
                    name: "'AI-Powered' DX-HRSAM (Graduation Project)",
                    year: "2024 - 2025",
                    description: [
                        "Led development of a Human Resources Skill Assessment Model platform for personality assessment and role matching in recruitment processes.",
                        "Implemented employee skill evaluation system with targeted training recommendations using Spring Boot, Next.js, React, TypeScript, and PostgreSQL."
                    ],
                    url: "https://skillfit.com.tr"
                },
                {
                    name: "New Personnel Information System (Real-World Project)",
                    year: "2024",
                    description: [
                        "Developed a comprehensive personnel management system at TÜBİTAK using Spring Boot, Next.js, React, and TypeScript."
                    ]
                },
                {
                    name: "RRSS for Shopsmart (Course Project)",
                    year: "2024",
                    description: [
                        "RRSS(Review and Recommendation System for Shopsmart)",
                        "Collaborated in a 5-member team to develop a full-stack e-commerce platform using Spring Boot and React."
                    ]
                },
                {
                    name: "QuestApp (Portfolio Project)",
                    year: "2023",
                    description: [
                        "Built a Q&A platform enabling user interactions with followers using Spring Boot and React."
                    ]
                },
                {
                    name: "Twitter Clone (Portfolio Project)",
                    year: "2023",
                    description: [
                        "Created a social media platform using Django, HTML, CSS, JavaScript, and Bootstrap."
                    ]
                }
            ],
            backend: [
                {
                    name: "Car Dealership Management System (Portfolio Project)",
                    year: "2025",
                    description: [
                        "Developed an advanced backend service for vehicle sales and management using Spring Boot."
                    ]
                }
            ]
        }
    };

    return {
        props: {
            cvData,
        },
    };
};