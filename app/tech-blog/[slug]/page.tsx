import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('../../../components/Editor'), { ssr: false });
import { getBlogBySlug } from '@/actions/blog-actions';

export default async function BlogUnit({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const blog = await getBlogBySlug(slug);
    return (
        <main className='w-screen h-[calc(100vh-60px)] px-4 md:px-60'>
            <h1 className='text-4xl'>{blog?.title}</h1>
            <h2 className='text-2xl'>{blog?.subTitle}</h2>
            <div className='flex gap-2 mt-2'>
                <h3 className='text-sm mb-8'>Category: {blog?.category}</h3>,
                {blog?.createdAt && <span className='text-sm text-disabled'>{new Date(blog?.createdAt!).toDateString()}</span>}
            </div>
            <Editor editable={false} content={blog?.body} />
        </main>
    )
}
