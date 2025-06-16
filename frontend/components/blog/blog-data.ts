// components/blog/blog-data.ts

import { BlogCardProps } from "./BlogCard";

export const dummyBlogs: BlogCardProps[] = [
  {
    id: "1",
    title: "Signs You Should Consider Therapy",
    summary: "Explore key emotional signs that indicate it’s time to seek professional help.",
    image: "/blog/therapy-signs.jpg",
    authorRole: "Doctor",
    date: "May 12, 2024",
  },
  {
    id: "2",
    title: "Online vs In-Person Therapy",
    summary: "Compare the pros and cons of online and in-clinic mental health sessions.",
    image: "/blog/online-vs-inperson.jpg",
    authorRole: "Client",
    date: "April 28, 2024",
  },
  {
    id: "3",
    title: "Burnout Recovery Guide",
    summary: "Step-by-step guide to help working professionals recover from burnout.",
    image: "/blog/burnout-guide.jpg",
    authorRole: "Admin",
    date: "March 10, 2024",
  },
];
