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
                </Accordion>
            </div >
        </div >
    );
}