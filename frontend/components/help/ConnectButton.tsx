'use client';

import { Button } from "@/components/ui/button";

export default function ConnectButton({ postId }: { postId: string }) {
  const handleConnect = () => {
    // 🔄 Replace with actual request logic
    alert("Connection request sent anonymously!");
  };

  return (
    <div className="text-right mt-4">
      <Button variant="outline" onClick={handleConnect}>
        Request to Connect
      </Button>
    </div>
  );
}
