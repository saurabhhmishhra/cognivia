'use client'

import { useParams } from "next/navigation";
import Image from "next/image";
import { dummyBlogs } from "@/components/blog/blog-data";

export default function BlogDetailPage() {
  const { id } = useParams();
  const blog = dummyBlogs.find((b) => b.id === id);

  if (!blog) return <div className="text-center py-12">Blog not found</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-8">
      <Image
        src={blog.image}
        alt={blog.title}
        width={800}
        height={400}
        className="rounded-md object-cover"
      />
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <p className="text-sm text-muted-foreground">
          {blog.authorRole} • {blog.date}
        </p>
      </div>
      <div className="text-muted-foreground leading-relaxed text-base space-y-4">
        <p>{blog.summary}</p>
      </div>
    </div>
  );
}
