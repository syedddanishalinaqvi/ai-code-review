import Repository from "@/smallComponents/repository";

type repo = {
  id: number;
  name: string;
};

interface RepositoriesProps {
  repos: repo[];
}

export default function Repositories({ repos }: RepositoriesProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <Repository key={repo.id} name={repo.name} />
        ))}
      </div>
    </div>
  );
}
