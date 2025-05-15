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

interface CVPageProps {
    cvData: CVData;
}

export default function CVPage({ cvData }: CVPageProps) {
    // Güvenlik kontrolü: eğer cvData yoksa hata göster
    if (!cvData || !cvData.personalInfo) {
        return (
            <div className="min-h-screen bg-gray-400 dark:bg-slate-900 p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center text-red-500">
                        CV verileri yüklenemedi. Lütfen sayfayı yeniden yükleyin.
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-400 dark:bg-slate-900 p-4 md:p-8">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Profile Card */}
                <Card className="border-2 border-gray-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm shadow-xl">
                    <CardContent className="p-4">
                        <div className="flex flex-col items-center text-center gap-2">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{cvData.personalInfo.name}</h1>
                                <p className="text-gray-600 dark:text-slate-300 mt-1">{cvData.personalInfo.title}</p>
                                <p className="text-gray-500 dark:text-slate-400">{cvData.personalInfo.location}</p>
                            </div>

                            <div className="flex items-center gap-4 mt-2">
                                <div className="flex items-center gap-2 hover:bg-gray-100/50 dark:hover:bg-slate-700/50 px-3 py-1 rounded-lg transition-all">
                                    <Mail size={18} className="text-gray-600 dark:text-slate-300"/>
                                    <a href={`mailto:${cvData.personalInfo.email}`}
                                       className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                                        {cvData.personalInfo.email}
                                    </a>
                                </div>

                                <div className="flex items-center gap-2 hover:bg-gray-100/50 dark:hover:bg-slate-700/50 px-3 py-1 rounded-lg transition-all">
                                    <Phone size={18} className="text-gray-600 dark:text-slate-300"/>
                                    <span className="text-gray-600 dark:text-slate-300">
                                        {cvData.personalInfo.phone}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <a href={cvData.personalInfo.github} target="_blank" rel="noopener noreferrer"
                                   className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white transition-colors p-1 hover:bg-gray-100/50 dark:hover:bg-slate-700/50 rounded-lg">
                                    <SiGithub size={22}/>
                                </a>

                                <a href={cvData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
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
                                {cvData.about.map((item, index) => (
                                    <li key={index} className="leading-relaxed">{item}</li>
                                ))}
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
                                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{cvData.education.university}</h3>
                                <p className="text-gray-600 dark:text-slate-300 mt-1">{cvData.education.degree}</p>
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
                                {cvData.experience.map((exp) => (
                                    <div key={exp.id} className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                        <h3 className="font-semibold text-gray-900 dark:text-white">{exp.company}</h3>
                                        <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">{exp.period}</p>
                                        <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                            {exp.responsibilities.map((resp, index) => (
                                                <li key={index} className="leading-relaxed">• {resp}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
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
                                {cvData.skills.map((skill, index) => (
                                    <div key={index} className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                        <h3 className="font-semibold text-gray-900 dark:text-white">{skill.category}</h3>
                                        <p className="text-gray-600 dark:text-slate-300 mt-1">{skill.items}</p>
                                    </div>
                                ))}
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
                                {/* Frontend Projects */}
                                <h3 className="font-semibold text-gray-900 dark:text-white text-lg border-b border-gray-300 dark:border-slate-600 pb-2">FRONTEND</h3>
                                {cvData.projects.frontend.map((project, index) => (
                                    <div key={index} className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                        <h3 className="font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">{project.year}</p>
                                        <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                            {project.description.map((desc, descIndex) => (
                                                <li key={descIndex} className="leading-relaxed">• {desc}</li>
                                            ))}
                                            {project.techStack && (
                                                <li className="leading-relaxed">• Tech stack: {project.techStack}</li>
                                            )}
                                            {project.url && (
                                                <li className="leading-relaxed">• Deployed: <a
                                                    href={project.url} target="_blank" rel="noopener noreferrer"
                                                    className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white underline">{project.url}</a>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                ))}

                                {/* Full-stack Projects */}
                                <h3 className="font-semibold text-gray-900 dark:text-white text-lg border-b border-gray-300 dark:border-slate-600 pb-2 mt-8">FULL-STACK</h3>
                                {cvData.projects.fullstack.map((project, index) => (
                                    <div key={index} className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                        <h3 className="font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">{project.year}</p>
                                        <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                            {project.description.map((desc, descIndex) => (
                                                <li key={descIndex} className="leading-relaxed">• {desc}</li>
                                            ))}
                                            {project.techStack && (
                                                <li className="leading-relaxed">• Tech stack: {project.techStack}</li>
                                            )}
                                            {project.url && (
                                                <li className="leading-relaxed">• Deployed: <a
                                                    href={project.url} target="_blank" rel="noopener noreferrer"
                                                    className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white underline">{project.url}</a>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                ))}

                                {/* Backend Projects */}
                                <h3 className="font-semibold text-gray-900 dark:text-white text-lg border-b border-gray-300 dark:border-slate-600 pb-2 mt-8">BACKEND</h3>
                                {cvData.projects.backend.map((project, index) => (
                                    <div key={index} className="border-l-2 border-gray-300 dark:border-slate-600 pl-4">
                                        <h3 className="font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                                        <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">{project.year}</p>
                                        <ul className="mt-3 space-y-2 text-gray-600 dark:text-slate-300">
                                            {project.description.map((desc, descIndex) => (
                                                <li key={descIndex} className="leading-relaxed">• {desc}</li>
                                            ))}
                                            {project.techStack && (
                                                <li className="leading-relaxed">• Tech stack: {project.techStack}</li>
                                            )}
                                            {project.url && (
                                                <li className="leading-relaxed">• Deployed: <a
                                                    href={project.url} target="_blank" rel="noopener noreferrer"
                                                    className="text-gray-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white underline">{project.url}</a>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                ))}
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