"use client";

import { BlockNoteEditor, getDefaultSlashMenuItems } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { cn } from "@/lib/utils";
import { HTMLAttributes, useState } from "react";
import { postBlog } from "@/actions/blog-actions";

type Props = HTMLAttributes<HTMLDivElement> & {
    editable?: boolean
    content?: string
}

export default function Editor({ className, editable = false, content }: Props) {
    const editor: BlockNoteEditor | null = useBlockNote({
        editable,
        initialContent: content ? JSON.parse(content) : [],
        slashMenuItems: [...getDefaultSlashMenuItems().filter(i => 'Image' !== i.name)]
    });
    const [blogDetails, setBlogDetails] = useState({ title: '', subTitle: '', category: '', slug: '' })

    return <>
        {editable && <div className="flex flex-col">
            <label htmlFor="title">title</label>
            <input value={blogDetails.title} onChange={(e) => { setBlogDetails(p => ({ ...p, title: e.target.value })) }} />
            <label htmlFor="subTitle">subTitle</label>
            <input value={blogDetails.subTitle} onChange={(e) => { setBlogDetails(p => ({ ...p, subTitle: e.target.value })) }} />
            <label htmlFor="category">category</label>
            <input value={blogDetails.category} onChange={(e) => { setBlogDetails(p => ({ ...p, category: e.target.value })) }} />
            <label htmlFor="slug">slug</label>
            <input value={blogDetails.slug} onChange={(e) => { setBlogDetails(p => ({ ...p, slug: e.target.value })) }} />
        </div>}
        <BlockNoteView theme={"dark"} className={cn(className)} editor={editor} />
        {editable && <button onClick={() => {
            postBlog({
                ...blogDetails,
                slug: blogDetails.slug ? blogDetails.slug : blogDetails.title.toLowerCase().replace(' ', '-'),
                body: JSON.stringify(editor.topLevelBlocks)
            }
            );
            setBlogDetails({ title: '', subTitle: '', category: '', slug: '' })
        }
        }>Save</button>}
    </>
}