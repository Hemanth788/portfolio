import Link from "next/link"

export const Navigation = () => {
    return <div className="flex justify-end items-center p-4 gap-4 sticky top-0">
        <Link className="text-xl underline underline-offset-2" href={'/#hero'}>#</Link>
        <Link className="text-xl underline underline-offset-2" href={'/#projects'}>#projects</Link>
        <Link className="text-xl underline underline-offset-2" href={'/tech-blog'}>/tech-blog</Link>
        {/* <Link className="text-xl underline underline-offset-2" href={'/blog'}>PersonalBlog</Link> */}
    </div>
}