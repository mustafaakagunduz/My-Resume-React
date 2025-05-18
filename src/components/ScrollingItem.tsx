// ScrollingItem component için image optimizasyon olmadan kullanım
import React, { useEffect, useState } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface TechIcon {
    id: number;
    src: string;
    alt: string;
}

const TechScroll = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Technology mapping with type safety
    const techMapping: Record<string, string> = {
        '1.png': 'Java',
        '2.png': 'Spring Boot',
        '3.png': 'NextJS',
        '4.png': 'ReactJS',
        '5.png': 'TypeScript',
        '6.png': 'PostgreSQL',
        '7.png': 'Git',
        '8.png': 'Jira',
        '9.png': 'Python',
        '10.png': 'Supabase',
        '11.png': 'HTML',
        '12.png': 'CSS',
        '13.png': 'Javascript',
        '14.png': 'Postman',
        '15.png': 'DBeaver',
        '16.png': 'Figma',
        '17.png': 'Adobe Photoshop',
        '18.png': 'IntelliJ IDEA',
        '19.png': 'Webstorm',
        '20.png': 'VS Code',
        '21.png': 'OpenAI'
    };

    // Ana ikon listesi
    const baseIcons: TechIcon[] = Array.from({ length: 21 }, (_, i) => {
        const fileName = `${i + 1}.png`;
        return {
            id: i + 1,
            src: `/${fileName}`, // SSG için absolute path
            alt: techMapping[fileName] || `Tech ${i + 1}`
        };
    });

    // İkonları 3 kez tekrarlayarak sürekli akış sağlayacağız
    const scrollingIcons = [...baseIcons, ...baseIcons, ...baseIcons];

    return (
        <div className="relative w-full overflow-hidden border-2 border-gray-200 dark:border-slate-700 bg-card/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg">
            <TooltipProvider>
                <div className="animate-scroll inline-flex py-4">
                    {scrollingIcons.map((icon, index) => (
                        <Tooltip key={`${icon.id}-${index}-${mounted}`}>
                            <TooltipTrigger>
                                <div className="inline-flex h-12 w-12 flex-shrink-0 rounded-full overflow-hidden mx-3">
                                    <img
                                        src={icon.src}
                                        alt={icon.alt}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="text-sm font-medium text-foreground">{icon.alt}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </TooltipProvider>
        </div>
    );
};

export default TechScroll;