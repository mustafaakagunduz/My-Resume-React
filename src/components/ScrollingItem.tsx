import React from 'react';

const TechScroll = () => {
    // Ana ikon listesi
    const baseIcons = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        src: `/${i + 1}.png`,
        alt: `Tech ${i + 1}`
    }));

    // İkonları 3 kez tekrarlayarak sürekli akış sağlayacağız
    const scrollingIcons = [...baseIcons, ...baseIcons, ...baseIcons];

    return (
        <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#224ed4]/20">
            <div className="animate-scroll inline-flex py-4">
                {scrollingIcons.map((icon, index) => (
                    <div
                        key={`${icon.id}-${index}`}
                        className="inline-flex h-12 w-12 flex-shrink-0 rounded-full overflow-hidden mx-3"
                    >
                        <img
                            src={icon.src}
                            alt={icon.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechScroll;