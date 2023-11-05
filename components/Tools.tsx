'use client';
import { motion } from "framer-motion"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


export const Tools = () => {
    const variants = (i: number) => ({
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { ease: 'easeIn', duration: (i + 1) * 0.1, delay: (i + 1) * 0.1, } },
    });

    const icons = [
        { name: 'HTML', class: "devicon-html5-plain colored text-6xl" }
        , { name: 'TailwindCSS', class: "devicon-tailwindcss-plain colored text-6xl" }
        , { name: 'JavaScript', class: "devicon-javascript-plain colored text-6xl" }
        , { name: 'TypeScript', class: "text-6xl devicon-typescript-plain colored" }
        , { name: 'React', class: "devicon-react-original colored text-6xl" }
        , { name: 'Redux', class: "text-6xl devicon-redux-original colored" }
        , { name: 'GraphQL', class: "text-6xl devicon-graphql-plain colored" }
        , { name: 'MaterialUI', class: "devicon-materialui-plain colored text-6xl" }
        , { name: 'Vue', class: "text-6xl devicon-vuejs-plain colored" }
        , { name: 'Node', class: "devicon-nodejs-plain colored text-6xl" }
        , { name: 'Express', class: "text-6xl devicon-express-original-wordmark" }
        , { name: 'Next', class: "text-6xl devicon-nextjs-original" }
        , { name: 'PostgreSQL', class: "devicon-postgresql-plain colored text-6xl" }
        , { name: 'Sequelize', class: "text-6xl devicon-sequelize-plain colored" }
        , { name: 'MongoDB', class: "devicon-mongodb-plain colored text-6xl" }
        , { name: 'Jest', class: "text-6xl devicon-jest-plain colored" }
        , { name: 'GitHub', class: "text-6xl devicon-github-original" }
    ]

    return <TooltipProvider>

        <div className='flex flex-wrap gap-2'>
            {icons.map((i, index) =>
                <Tooltip key={i.name}>
                    <TooltipTrigger>
                        <motion.i variants={variants(index)}
                            initial="hidden"
                            animate="visible"
                            exit="hidden" className={i.class}></motion.i>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{i.name}</p>
                    </TooltipContent>
                </Tooltip>
            )
            }
            {/* <i className="text-6xl devicon-docker-plain colored"></i>
    <i className="text-6xl devicon-kubernetes-plain colored"></i>
    <i className="text-6xl devicon-d3js-plain colored"></i> */}
            {/* <i className="text-6xl devicon-redis-plain colored"></i> */}
            {/* <i className="text-6xl devicon-socketio-original"></i> */}
            {/* <i className="text-6xl devicon-webpack-plain colored"></i> */}
            {/* <i className="text-6xl devicon-prometheus-original colored"></i> */}
        </div>
    </TooltipProvider>

}