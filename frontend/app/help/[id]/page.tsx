"use client";

import { useParams } from "next/navigation";
import PostDetail from "@/components/help/PostDetail";
import CommentList from "@/components/help/CommentList";
import CommentForm from "@/components/help/CommentForm";
import ConnectButton from "@/components/help/ConnectButton";

export default function HelpPostDetailPage() {
  const { id } = useParams();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-10">
      <PostDetail postId={id as string} />
      <ConnectButton postId={id as string} />
      <CommentList postId={id as string} />
      <CommentForm postId={id as string} />
    </main>
  );
}
