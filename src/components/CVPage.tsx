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

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Profile Card */}
                <Card className="border-2 border-[#224ed4]/20">
                    <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center gap-4">
                            <div>
                                <h1 className="text-2xl font-bold text-[#224ed4]">Mustafa İhsan AKAGÜNDÜZ</h1>
                                <p className="text-gray-600 mt-1">Senior Computer Engineering Student at Hacettepe University</p>
                                <p className="text-gray-600">Çankaya, Ankara</p>
                            </div>

                            <div className="flex flex-col items-center gap-3">
                                <div className="flex items-center gap-2">
                                    <Mail size={20} className="text-gray-600" />
                                    <a href="mailto:akagunduzmustafa00@gmail.com" className="text-gray-600 hover:text-[#224ed4]">
                                        akagunduzmustafa00@gmail.com
                                    </a>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Phone size={20} className="text-gray-600" />
                                    <span className="text-gray-600">
                                        +90 546 556 61 10
                                    </span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <a href="https://github.com/MustafaAkagunduz" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#224ed4]">
                                        <SiGithub size={20} />
                                    </a>

                                    <a href="https://linkedin.com/in/mustafa-akagunduz" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#224ed4]">
                                        <SiLinkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Accordion Sections */}
                <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="about" className="border-2 border-[#224ed4]/20 rounded-lg">
                        <AccordionTrigger className="px-6 text-[#224ed4] hover:text-[#224ed4]/80">About</AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                            <ul className="text-gray-600 space-y-2">
                                <li>Senior Computer Engineering student with a strong passion for full-stack web development.</li>
                                <li>Highly adaptable and quick to learn new technologies, with a strong work ethic, self-discipline,
                                    and effective team communication skills.</li>
                                <li>Beyond software development, I run a YouTube channel
                                    called "Kısaca AKA" where I share content on software, personal development, algorithm challenges, and vlogs.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="education" className="border-2 border-[#224ed4]/20 rounded-lg">
                        <AccordionTrigger className="px-6 text-[#224ed4] hover:text-[#224ed4]/80">Education</AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                            <div>
                                <h3 className="font-semibold text-[#224ed4]">Hacettepe University</h3>
                                <p className="text-gray-600">B.Sc. in Computer Engineering</p>
                                <p className="text-sm text-gray-500">Expected Graduation: 2025</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="experience" className="border-2 border-[#224ed4]/20 rounded-lg">
                        <AccordionTrigger className="px-6 text-[#224ed4] hover:text-[#224ed4]/80">Experience</AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-[#224ed4]">Graduation Project - DX-HRSAM</h3>
                                    <p className="text-sm text-gray-500">Oct 2024 – Jun 2025</p>
                                    <ul className="mt-2 space-y-2 text-gray-600">
                                        <li>• Developed a skills assessment and career matching platform using Spring Boot, React, TypeScript, and PostgreSQL within an MVC architecture.</li>
                                        <li>• Designed and implemented an interactive survey system to evaluate user proficiency across IT skills.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#224ed4]">TÜBİTAK BİLGEM YTE</h3>
                                    <p className="text-sm text-gray-500">Jun 2024 – Aug 2024</p>
                                    <ul className="mt-2 space-y-2 text-gray-600">
                                        <li>• Received hands-on training in Core Java, Spring Boot, React, Next.js, Hibernate, Docker, Kubernetes, and TypeScript.</li>
                                        <li>• Led full-stack development efforts for the 'New Personnel' system.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#224ed4]">TURKCELL İletişim A.Ş.</h3>
                                    <p className="text-sm text-gray-500">Aug 2023 – Sept 2023</p>
                                    <ul className="mt-2 space-y-2 text-gray-600">
                                        <li>• Developed a comprehensive documentation system for backend services.</li>
                                        <li>• Reduced onboarding time for new developers.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#224ed4]">ACM Hacettepe (Association of Computing Machinery)</h3>
                                    <p className="text-sm text-gray-500">Oct 2022 – Present</p>
                                    <ul className="mt-2 space-y-2 text-gray-600">
                                        <li>• Designed visual materials using Adobe Photoshop and CapCut for ACM Hacettepe's event promotions and marketing campaigns.</li>
                                    </ul>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>



                    <AccordionItem value="skills" className="border-2 border-[#224ed4]/20 rounded-lg">
                        <AccordionTrigger className="px-6 text-[#224ed4] hover:text-[#224ed4]/80">Skills</AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-[#224ed4]">Programming Languages & Frameworks</h3>
                                    <p className="text-gray-600">Java (Spring Boot), Python (Django), TypeScript (React)</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#224ed4]">Web Development Tools</h3>
                                    <p className="text-gray-600">Postman, Dbeaver, IntelliJ IDEA, VS Code</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#224ed4]">Database</h3>
                                    <p className="text-gray-600">PostgreSQL</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#224ed4]">Product Management</h3>
                                    <p className="text-gray-600">Git, Jira</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#224ed4]">Languages</h3>
                                    <p className="text-gray-600">English (Advanced), Turkish (Native), German (Beginner)</p>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="projects" className="border-2 border-[#224ed4]/20 rounded-lg">
                        <AccordionTrigger className="px-6 text-[#224ed4] hover:text-[#224ed4]/80">Projects</AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                            <div className="space-y-6">




                                <div>
                                    <h3 className="font-semibold text-[#224ed4]"> FULL-STACK:</h3>
                                    <br></br>
                                    <h3 className="font-semibold text-[#224ed4]"> 1) 'AI-Powered' DX-HRSAM (Graduation Project)</h3>
                                    <p className="text-sm text-gray-500">2024 - 2025</p>
                                    <ul className="mt-2 space-y-2 text-gray-600">
                                        <li>• Led development of a Human Resources Skill Assessment Model platform for personality assessment and role matching in recruitment processes.</li>
                                        <li>• Implemented employee skill evaluation system with targeted training recommendations using Spring Boot, Next.js, React, TypeScript, and PostgreSQL.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[#224ed4]"> 2) New Personnel Information System (Real-World Project)</h3>
                                    <p className="text-sm text-gray-500">2024</p>
                                    <ul className="mt-2 space-y-2 text-gray-600">
                                        <li>• Developed a comprehensive personnel management system at TÜBİTAK using Spring Boot, Next.js, React, and TypeScript.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[#224ed4]"> 3) RRSS for Shopsmart (Course Project)</h3>
                                    <p className="text-sm text-gray-500">2024</p>
                                    <ul className="mt-2 space-y-2 text-gray-600">
                                        <li>• RRSS(Review and Recommendation System for Shopsmart)</li>
                                        <li>• Collaborated in a 5-member team to develop a full-stack e-commerce platform using Spring Boot and React.</li>
                                    </ul>
                                </div>



                                <div>
                                    <h3 className="font-semibold text-[#224ed4]"> 4) QuestApp (Portfolio Project)</h3>
                                    <p className="text-sm text-gray-500">2023</p>
                                    <ul className="mt-2 space-y-2 text-gray-600">
                                        <li>• Built a Q&A platform enabling user interactions with followers using Spring Boot and React.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-[#224ed4]"> 5)Twitter Clone (Portfolio Project)</h3>
                                    <p className="text-sm text-gray-500">2023</p>
                                    <ul className="mt-2 space-y-2 text-gray-600">
                                        <li>• Created a social media platform using Django, HTML, CSS, JavaScript, and Bootstrap.</li>
                                    </ul>
                                </div>

                                <h3 className="font-semibold text-[#224ed4]"> FRONTEND-ONLY:</h3>
                                <div>
                                    <h3 className="font-semibold text-[#224ed4]"> 6) My Resume (Portfolio Project)</h3>
                                    <p className="text-sm text-gray-500">2025</p>
                                    <ul className="mt-2 space-y-2 text-gray-600">
                                        <li>• I made this project to publish my up-to-date CV for recruiters.</li>
                                        <li>• Tech stack: NextJS , ReactJS, Typescript</li>
                                        <li>• Deployed : <a
                                            href="https://cv-uwdm.vercel.app"
                                            target="_blank"
                                            style={{ color: "blue" }}
                                        >
                                            https://cv-uwdm.vercel.app
                                        </a> </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#224ed4]"> 7) 'AI-Powered' Match-App (Portfolio Project)</h3>
                                    <p className="text-sm text-gray-500">2025</p>
                                    <ul className="mt-2 space-y-2 text-gray-600">
                                        <li>• It is an application that evaluates candidates and employers' suitability for job postings and creates a letter of intent for candidates and a personalized letters for employers.</li>
                                        <li>• Tech stack: NextJS , ReactJS, Typescript, Google Gemini</li>
                                        <li>• Deployed : <a
                                            href="https://match-app-react.vercel.app"
                                            target="_blank"
                                            style={{ color: "blue" }}
                                        >
                                            https://match-app-react.vercel.app
                                        </a> </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#224ed4]"> 8) Shopsmart (Portfolio Project)</h3>
                                    <p className="text-sm text-gray-500">2025</p>
                                    <ul className="mt-2 space-y-2 text-gray-600">
                                        <li>• This is an imaginiary e-commerce website page. Just for fun.. :) </li>
                                        <li>• Tech stack: NextJS , ReactJS, Typescript</li>
                                        <li>• Deployed : <a
                                            href="https://e-commerce-website-react-xi.vercel.app"
                                            target="_blank"
                                            style={{ color: "blue" }}
                                        >
                                            https://e-commerce-website-react-xi.vercel.app
                                        </a> </li>
                                    </ul>
                                </div>


                                <h3 className="font-semibold text-[#224ed4]"> BACKEND-ONLY:</h3>

                                <div>
                                    <h3 className="font-semibold text-[#224ed4]"> 9) Car Dealership Management System (Portfolio Project)</h3>
                                    <p className="text-sm text-gray-500">2025</p>
                                    <ul className="mt-2 space-y-2 text-gray-600">
                                        <li>• Developed an advanced backend service for vehicle sales and management using Spring Boot.</li>
                                    </ul>
                                </div>

                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div >
        </div >
    );
}