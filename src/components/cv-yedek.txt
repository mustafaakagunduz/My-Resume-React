//son (dark) hali
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import TechScroll from "@/components/ScrollingItem";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-400 dark:bg-slate-900 p-4 md:p-8">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Profile Card */}
                <Card className="border-2 border-gray-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm shadow-xl">
                    <CardContent className="p-4">
                        <div className="flex flex-col items-center text-center gap-2">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Mustafa İhsan AKAGÜNDÜZ</h1>
                                <p className="text-gray-600 dark:text-slate-300 mt-1">Senior Computer Engineering Student at Hacettepe University</p>
                                <p className="text-gray-500 dark:text-slate-400">Çankaya, Ankara</p>
                            </div>

                            <div className="flex items-center gap-4 mt-2">
                                <div className="flex items-center gap-2 hover:bg-gray-100/50 dark:hover:bg-slate-700/50 px-3 py-1 rounded-lg transition-all">
                                    <Mail size={18} className="text-gray-600 dark:text-slate-300"/>
                                    <a href="mailto:akagunduzmustafa00@gmail.com"
                                       className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                                        akagunduzmustafa00@gmail.com
                                    </a>
                                </div>

                                <div className="flex items-center gap-2 hover:bg-gray-100/50 dark:hover:bg-slate-700/50 px-3 py-1 rounded-lg transition-all">
                                    <Phone size={18} className="text-gray-600 dark:text-slate-300"/>
                                    <span className="text-gray-600 dark:text-slate-300">
                                    +90 546 556 61 10
                                </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <a href="https://github.com/MustafaAkagunduz" target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white transition-colors p-1 hover:bg-gray-100/50 dark:hover:bg-slate-700/50 rounded-lg">
                                    <SiGithub size={22}/>
                                </a>

                                <a href="https://linkedin.com/in/mustafa-akagunduz" target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white transition-colors p-1 hover:bg-gray-100/50 dark:hover:bg-slate-700/50 rounded-lg">
                                    <SiLinkedin size={22}/>
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Accordion Sections */}
                <Accordion type="single" collapsible className="space-y-4">
                    {/* About Section */}
                    <AccordionItem value="about" className="border-2 border-gray-200 dark:border-slate-700 rounded-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                        <AccordionTrigger className="px-6 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-slate-300 font-semibold">
                            About
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                            <ul className="text-gray-600 dark:text-slate-300 space-y-3">
                                <li className="leading-relaxed">Senior Computer Engineering student with a strong passion for full-stack web development.</li>
                                <li className="leading-relaxed">Highly adaptable and quick to learn new technologies, with a strong work ethic, self-discipline, and effective team communication skills.</li>
                                <li className="leading-relaxed">Beyond software development, I run a YouTube channel called "Kısaca AKA" where I share content on software, personal development, algorithm challenges, and vlogs.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Education Section */}
                    <AccordionItem value="education" className="border-2 border-gray-200 dark:border-slate-700 rounded-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                        <AccordionTrigger className="px-6 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-slate-300 font-semibold">
                            Education
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Hacettepe University</h3>
                                <p className="text-gray-600 dark:text-slate-300 mt-1">B.Sc. in Computer Engineering</p>

                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Experience Section */}
                    <AccordionItem value="experience" className="border-2 border-gray-200 dark:border-slate-700 rounded-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                        <AccordionTrigger className="px-6 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-slate-300 font-semibold">
                            Experience
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                            <div className="space-y-6">
                                {/* Her deneyim için benzer yapı */}
                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Graduation Project - DX-HRSAM</h3>
                                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">Oct 2024 – Jun 2025</p>
                                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                        <li className="leading-relaxed">• Developed a skills assessment and career matching platform using Spring Boot, React, TypeScript, and PostgreSQL within an MVC architecture.</li>
                                        <li className="leading-relaxed">• Designed and implemented an interactive survey system to evaluate user proficiency across IT skills.</li>
                                    </ul>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">TÜBİTAK BİLGEM YTE</h3>
                                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">Jun 2024 – Aug 2024</p>
                                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                        <li className="leading-relaxed">• Received hands-on training in Core Java, Spring Boot, React, Next.js, Hibernate, Docker, Kubernetes, and TypeScript.</li>
                                        <li className="leading-relaxed">• Led full-stack development efforts for the 'New Personnel' system.</li>
                                    </ul>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">TURKCELL İletişim A.Ş.</h3>
                                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">Aug 2023 – Sept 2023</p>
                                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                        <li className="leading-relaxed">• Developed a comprehensive documentation system for backend services.</li>
                                        <li className="leading-relaxed">• Reduced onboarding time for new developers.</li>
                                    </ul>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">ACM Hacettepe (Association of Computing Machinery)</h3>
                                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">Oct 2022 – Present</p>
                                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                        <li className="leading-relaxed">• Designed visual materials using Adobe Photoshop and CapCut for ACM Hacettepe's event promotions and marketing campaigns.</li>
                                    </ul>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Skills Section */}
                    <AccordionItem value="skills" className="border-2 border-gray-200 dark:border-slate-700 rounded-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                        <AccordionTrigger className="px-6 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-slate-300 font-semibold">
                            Skills
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                            <div className="space-y-4">
                                {/* Her yetenek için benzer yapı */}
                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Programming Languages & Frameworks</h3>
                                    <p className="text-gray-600 dark:text-slate-300 mt-1">Java (Spring Boot), Python (Django), TypeScript (React)</p>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Web Development Tools</h3>
                                    <p className="text-gray-600 dark:text-slate-300 mt-1">Postman, Dbeaver, IntelliJ IDEA, VS Code</p>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Database</h3>
                                    <p className="text-gray-600 dark:text-slate-300 mt-1">PostgreSQL</p>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Product Management</h3>
                                    <p className="text-gray-600 dark:text-slate-300 mt-1">Git, Jira</p>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Languages</h3>
                                    <p className="text-gray-600 dark:text-slate-300 mt-1">English (Advanced), Turkish (Native), German (Beginner)</p>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Projects Section */}
                    <AccordionItem value="projects" className="border-2 border-gray-200 dark:border-slate-700 rounded-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
                        <AccordionTrigger className="px-6 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-slate-300 font-semibold">
                            Projects
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                            <div className="space-y-6">
                                <h3 className="font-semibold text-gray-900 dark:text-white text-lg border-b border-gray-300 dark:border-slate-600 pb-2">FRONTEND</h3>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white"> Algorithm Question Tracker
                                        (Portfolio
                                        Project)</h3>
                                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">2025</p>
                                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                        <li className="leading-relaxed">• A web application that helps users repeat previously solved algorithm questions at intervals according to the difficulty levels they determine.
                                        </li>

                                        <li className="leading-relaxed">• Tech stack: NextJS, ReactJS, Typescript, Tailwind CSS

                                        </li>
                                        <li className="leading-relaxed">• Deployed: <a
                                            href="https://question-tracker-seven.vercel.app"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white underline">https://question-tracker-seven.vercel.app</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white"> Weather-Wear
                                        (Portfolio
                                        Project)</h3>
                                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">2025</p>
                                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                        <li className="leading-relaxed">• Open source web application
                                        </li>
                                        <li className="leading-relaxed">• AI-Powered Web Application for Automatically
                                            Detecting Users' Location and Providing Daily Outfit Recommendations..
                                        </li>
                                        <li className="leading-relaxed">• Tech stack: NextJS, ReactJS, Typescript,
                                            OpenAI API
                                        </li>
                                        <li className="leading-relaxed">• Deployed: <a
                                            href="https://weather-wear-three.vercel.app"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white underline">https://weather-wear-three.vercel.app</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white"> Kanban.im (My Kanban)
                                        (Portfolio
                                        Project)</h3>
                                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">2025</p>
                                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                        <li className="leading-relaxed">• Open source web application
                                        </li>
                                        <li className="leading-relaxed">• Helps users organize their tasks and daily
                                            to-do's..
                                        </li>
                                        <li className="leading-relaxed">• Tech stack: NextJS, ReactJS, Typescript</li>
                                        <li className="leading-relaxed">• Deployed: <a
                                            href="https://www.kanban.im"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white underline">https://www.kanban.im</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white"> Webpage for
                                        Interior-Desing Company: Spring Concepts (Portfolio
                                        Project)</h3>
                                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">2025</p>
                                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                        <li className="leading-relaxed">• My imaginary web page design work that I
                                            received from an imaginary company.
                                        </li>
                                        <li className="leading-relaxed">• Tech stack: NextJS, ReactJS, Typescript</li>
                                        <li className="leading-relaxed">• Deployed: <a
                                            href="https://interior-design-company-website.vercel.app"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white underline">https://interior-design-company-website.vercel.app</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white"> My Resume (Portfolio
                                        Project)</h3>
                                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">2025</p>
                                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                        <li className="leading-relaxed">• I made this project to publish my up-to-date
                                            CV for recruiters.
                                        </li>
                                        <li className="leading-relaxed">• Tech stack: NextJS, ReactJS, Typescript</li>
                                        <li className="leading-relaxed">• Deployed: <a href="https://cv-uwdm.vercel.app"
                                                                                       target="_blank"
                                                                                       rel="noopener noreferrer"
                                                                                       className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white underline">https://cv-uwdm.vercel.app</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white"> AI-Powered
                                        "Üzgünüz, fakat.." (Portfolio Project)</h3>
                                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">2025</p>
                                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                        <li className="leading-relaxed">• It is an application that evaluates candidates
                                            and employers' suitability for job postings and creates a letter of intent
                                            for candidates and personalized letters for employers.
                                        </li>
                                        <li className="leading-relaxed">• Tech stack: NextJS, ReactJS, Typescript,
                                            OpenAI API
                                        </li>
                                        <li className="leading-relaxed">• Deployed: <a href="https://uzgunuz-fakat.com"
                                                                                       target="_blank"
                                                                                       rel="noopener noreferrer"
                                                                                       className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white underline">https://www.uzgunuz-fakat.com</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white"> Shopsmart (Portfolio
                                        Project)</h3>
                                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">2025</p>
                                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                        <li className="leading-relaxed">• This is an imaginary e-commerce website page.
                                            Just for fun.. :)
                                        </li>
                                        <li className="leading-relaxed">• Tech stack: NextJS, ReactJS, Typescript</li>
                                        <li className="leading-relaxed">• Deployed: <a
                                            href="https://e-commerce-website-react-xi.vercel.app" target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white underline">https://e-commerce-website-react-xi.vercel.app</a>
                                        </li>
                                    </ul>
                                </div>

                                <h3 className="font-semibold text-gray-900 dark:text-white text-lg border-b border-gray-300 dark:border-slate-600 pb-2 mt-8">FULL-STACK</h3>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white"> 'AI-Powered' DX-HRSAM
                                        (Graduation Project)</h3>
                                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">2024 - 2025</p>
                                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                        <li className="leading-relaxed">• Led development of a Human Resources Skill
                                            Assessment Model platform for personality assessment and role matching in
                                            recruitment processes.
                                        </li>
                                        <li className="leading-relaxed">• Implemented employee skill evaluation system
                                            with targeted training recommendations using Spring Boot, Next.js, React,
                                            TypeScript, and PostgreSQL.
                                        </li>
                                        <li className="leading-relaxed">• Deployed: <a
                                            href="https://skillfit.com.tr" target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white underline">https://skillfit.com.tr</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white"> New Personnel
                                        Information System (Real-World Project)</h3>
                                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">2024</p>
                                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                        <li className="leading-relaxed">• Developed a comprehensive personnel management
                                            system at TÜBİTAK using Spring Boot, Next.js, React, and TypeScript.
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white"> RRSS for Shopsmart
                                        (Course Project)</h3>
                                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">2024</p>
                                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                        <li className="leading-relaxed">• RRSS(Review and Recommendation System for
                                            Shopsmart)
                                        </li>
                                        <li className="leading-relaxed">• Collaborated in a 5-member team to develop a
                                            full-stack e-commerce platform using Spring Boot and React.
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white"> QuestApp (Portfolio
                                        Project)</h3>
                                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">2023</p>
                                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                        <li className="leading-relaxed">• Built a Q&A platform enabling user
                                            interactions with followers using Spring Boot and React.
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white"> Twitter Clone
                                        (Portfolio Project)</h3>
                                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">2023</p>
                                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                        <li className="leading-relaxed">• Created a social media platform using Django,
                                            HTML, CSS, JavaScript, and Bootstrap.
                                        </li>
                                    </ul>
                                </div>

                                <h3 className="font-semibold text-gray-900 dark:text-white text-lg border-b border-gray-300 dark:border-slate-600 pb-2 mt-8">BACKEND</h3>

                                <div className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white"> Car Dealership
                                        Management System (Portfolio Project)</h3>
                                    <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">2025</p>
                                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                        <li className="leading-relaxed">• Developed an advanced backend service for
                                            vehicle sales and management using Spring Boot.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className="w-full">
                    <TechScroll/>
                </div>
            </div>
        </div>
    );
}