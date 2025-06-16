import { notFound } from "next/navigation";
import Image from "next/image";
import { dummyBlogs } from "@/components/blog/blog-data";

export async function generateStaticParams() {
  return dummyBlogs.map((blog) => ({
    id: blog.id,
  }));
}

export default function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = dummyBlogs.find((b) => b.id === params.id);

  if (!blog) return notFound();

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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa a
          facilis excepturi unde. Explicabo, commodi totam. Inventore quae
          fugiat esse tempora aspernatur, corrupti in quos error.
        </p>
      </div>
    </div>
  );
}
