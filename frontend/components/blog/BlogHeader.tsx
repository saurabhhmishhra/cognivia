"use client";

type Props = {
  filter: string;
  setFilter: (val: string) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
};

export default function BlogHeader({
  filter,
  setFilter,
  sortBy,
  setSortBy,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <h1 className="text-3xl font-bold">Latest Blogs</h1>
        <p className="text-muted-foreground text-sm">
          Insights and stories from our experts and community.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-3 py-2 rounded-md text-sm"
        >
          <option value="All">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Doctor">Doctor</option>
          <option value="Client">Client</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border px-3 py-2 rounded-md text-sm"
        >
          <option value="Latest">Sort: Latest</option>
          <option value="Oldest">Sort: Oldest</option>
          <option value="Rating">Sort: Rating</option>
          <option value="This Month">Sort: This Month</option>
          <option value="This Year">Sort: This Year</option>
        </select>
      </div>
    </div>
  );
}
