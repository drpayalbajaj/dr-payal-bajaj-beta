'use client'
import Image from 'next/image'
import React, { useRef, useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { OptionsType } from "@fancyapps/ui/types/Fancybox/options";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
export default function Gallery() {
    return (
        <section>
            <h2 className='text-center relative text-5xl font-bold text-[var(--primary-color)]'>
                Gallery & Media
            </h2>

            <div className='mt-16 w-full'>
                <div className="gallery">
                    <GalleryComponent />
                </div>
            </div>
        </section>
    )
}

export const GalleryComponent = () => {
    return (
        <Fancybox
            options={{
                Carousel: {
                    infinite: false,
                },
            }}
        >
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                {[
                    '01.jpg',
                    '02.jpg',
                    '03.jpg',
                    '04.jpg',
                    '05.jpg',
                    '06.jpg',
                    '07.jpg'
                ].map((file, index) => (
                    <a
                        key={index}
                        href={`/images/gallery/${file}`}
                        data-fancybox="gallery"
                        className="break-inside-avoid overflow-hidden rounded-lg block hover:scale-[1.02] transition-all duration-300"
                    >
                        <Image
                            src={`/images/gallery/${file}`}
                            alt={`Gallery ${index + 1}`}
                            width={600}
                            height={800}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </a>
                ))}
            </div>
        </Fancybox>
    );
};





function Fancybox(props: {
    children?: React.ReactNode;
    delegate?: string;
    options?: Partial<OptionsType>;
}) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const delegate = props.delegate || "[data-fancybox]";
        const options = props.options || {};

        NativeFancybox.bind(container, delegate, options);

        return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    });

    return <div ref={containerRef}>{props.children}</div>;
}

export { Fancybox };

