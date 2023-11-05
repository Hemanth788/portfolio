"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image"
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export const Projects = () => {
    const ref = React.createRef<HTMLDivElement>();
    const projects = [{
        title: 'Do Stuff - A task management app',
        tools: 'NextJS App Router, TypeScript, TailwindCSS, Prisma, PostgreSQL',
        images: [
            'add-a-new-list',
            'calendar-in-progress',
            'task-list-page',
            'task-list-view'
        ]
    }, {
        title: 'Kahaniya - A storytelling platform',
        tools: 'NextJS Page Router, TypeScript, TailwindCSS, RTK, axios',
        images: [
            'add-a-new-list',
            'calendar-in-progress',
            'task-list-page',
            'task-list-view'
        ]
    }, {
        title: 'Spotify Clone - A music app clone',
        tools: 'NextJS App Router, TypeScript, TailwindCSS, Supabase, Zustand',
        images: [
            'add-a-new-list',
            'calendar-in-progress',
            'task-list-page',
            'task-list-view'
        ]
    }
    ]
    const [showIndex, setShowIndex] = useState(0);
    const fadeInVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5, // Duration of the animation
            },
        },
    };

    return <div id='projects' ref={ref} className="w-full h-[calc(100vh-60px)]">
        <div
            className='flex flex-col gap-8 justify-center items-center h-full'>
            <h1 className='md:text-3xl text-2xl'>Projects - Personal & Professional</h1>
            {projects.map((i, index) => <div className={twMerge('', showIndex === index ? 'block' : 'hidden')} key={i.title}>
                <Project title={i.title} imageList={i.images} tools={i.tools} />
            </div>
            )}
            <div className="flex gap-2 justify-end">
                <ChevronLeft size={36} className=" border border-slate-400 rounded-md cursor-pointer" onClick={() => setShowIndex(p => p - 1 >= 0 ? p - 1 : projects.length - 1)} />
                <ChevronRight size={36} className=" border border-slate-400 rounded-md cursor-pointer" onClick={() => setShowIndex(p => p + 1 <= projects.length - 1 ? p + 1 : 0)} />
            </div>
        </div>
    </div>
}

export const Project = ({ title, tools, imageList }: { title: string, tools: string, imageList: string[] }) => {
    const images = [
        'add-a-new-list',
        'calendar-in-progress',
        'task-list-page',
        'task-list-view'
    ];
    const [showIndex, setShowIndex] = useState(0);

    return (
        <div>
            <h3>{title}</h3>
            <h4 className="mb-2">Tools: {tools} etc.,</h4>
            {images.map((i, index) => <Image className={twMerge(' rounded-xl', showIndex === index ? 'block' : 'hidden')} key={i} alt={i} src={`/${i}.png`} width={1000} height={500} />)}
            <div className="flex gap-2 justify-end mt-2">
                <ChevronLeft className=" border border-slate-400 rounded-md cursor-pointer" onClick={() => setShowIndex(p => p - 1 >= 0 ? p - 1 : images.length - 1)} />
                <ChevronRight className=" border border-slate-400 rounded-md cursor-pointer" onClick={() => setShowIndex(p => p + 1 <= images.length - 1 ? p + 1 : 0)} />
            </div>
        </div>
    )
}