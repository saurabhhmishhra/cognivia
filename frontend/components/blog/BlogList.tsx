"use client";

import BlogCard from "./BlogCard";

export type Blog = {
  id: string;
  title: string;
  summary: string;
  image: string;
  authorRole: "Admin" | "Doctor" | "Client";
  date: string;
  rating?: number;
};

type Props = {
  filter: string;
  sortBy: string;
};

const mockBlogs: Blog[] = [
  {
    id: "1",
    title: "Overcoming Anxiety: A Doctor’s Perspective",
    summary: "Practical tips and stories to help manage anxiety in everyday life.",
    image: "/blog/therapy-signs.jpg",
    authorRole: "Doctor",
    date: "2024-06-01",
    rating: 4.7,
  },
  {
    id: "2",
    title: "Mental Health Myths Debunked",
    summary: "Let’s talk about what therapy is — and isn’t.",
    image: "/blog/burnout-guide.jpg",
    authorRole: "Admin",
    date: "2024-05-15",
    rating: 4.5,
  },
  {
    id: "3",
    title: "Why I Finally Tried Therapy (And Loved It)",
    summary: "A client’s honest reflection on therapy sessions and personal growth.",
    image: "/blog/online-vs-inperson.jpg",
    authorRole: "Client",
    date: "2024-04-20",
    rating: 4.8,
  },
];

export default function BlogList({ filter, sortBy }: Props) {
  let blogs = [...mockBlogs];

  // Filter by role
  if (filter !== "All") {
    blogs = blogs.filter((b) => b.authorRole === filter);
  }

  // Sort by selected option
  switch (sortBy) {
    case "Oldest":
      blogs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      break;
    case "Rating":
      blogs.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
      break;
    case "This Month":
      blogs = blogs.filter((b) => new Date(b.date).getMonth() === new Date().getMonth());
      break;
    case "This Year":
      blogs = blogs.filter((b) => new Date(b.date).getFullYear() === new Date().getFullYear());
      break;
    default:
      blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Latest
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
}
