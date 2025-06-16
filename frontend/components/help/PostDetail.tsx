'use client';

import { useEffect, useState } from 'react';

export default function PostDetail({ postId }: { postId: string }) {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    // 🔄 Replace this with real API fetch
    setPost({
      content: "I've been dealing with panic attacks in silence for years. Sharing this felt like a release.",
      date: "June 10, 2025",
      postedBy: "Anonymous",
    });
  }, [postId]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="space-y-2">
      <p className="text-muted-foreground text-sm">
        Posted by {post.postedBy} • {post.date}
      </p>
      <p className="text-lg">{post.content}</p>
    </div>
  );
}
