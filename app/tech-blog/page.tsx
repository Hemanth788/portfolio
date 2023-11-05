
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('../../components/Editor'), { ssr: false });
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import { getBlogs } from '@/actions/blog-actions';

type Blog = {
  slug: string;
  title: string;
  subTitle: string;
  category: string;
  createdAt: Date;
}

export default async function Blog() {
  let blogs: Blog[];
  try {
    blogs = await getBlogs()
  } catch (e) {
    blogs = [];
    console.log('error: ', e);
  }

  const categories = Array.from(new Set(blogs.map(i => i.category)));
  return (
    <main className='w-screen h-[calc(100vh-60px)] px-4'>
      {/* <Editor editable /> */}
      <h2 className='text-3xl py-2'>Tech Blogs</h2>
      {blogs.length === 0 && <p>{`Got you! Didn't start yet! 😅`}</p>}

      {categories.map(j => <div className=' pt-4' key={j}>
        <h2 className='text-2xl py-2'>{j}</h2>
        <div className='flex flex-wrap gap-4'>
          {blogs.map(i =>
          (j === i.category ? <Link href={`/tech-blog/${i.slug}`} key={i.slug}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <span>{i.title}</span>
                </CardTitle>
                <CardDescription>{i.subTitle}</CardDescription>
              </CardHeader>
              <CardFooter className='flex justify-between items-center'>
                <p className='text-sm'>Category: {i.category}</p>
                <span className='text-sm text-disabled'>{i.createdAt.toDateString()}</span>
              </CardFooter>
            </Card>
          </Link> : null)
          )}
        </div>
      </div>)
      }


    </main>
  )
}
