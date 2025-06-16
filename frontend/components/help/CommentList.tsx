'use client';

import { useEffect, useState } from 'react';

export default function CommentList({ postId }: { postId: string }) {
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    // 🔄 Replace with real fetch
    setComments([
      "You're not alone. Sending strength.",
      "Thank you for sharing. I'm with you.",
      "It takes courage to write this. Keep going.",
    ]);
  }, [postId]);

  return (
    <div className="space-y-4 pt-6">
      <h3 className="font-semibold text-lg">Comments</h3>
      <ul className="space-y-2">
        {comments.map((c, i) => (
          <li key={i} className="bg-muted px-4 py-2 rounded">
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
