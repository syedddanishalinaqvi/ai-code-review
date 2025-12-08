type RepositoryItemProps = {
  name: string;
};

export default function Repository({ name }: RepositoryItemProps) {
  return (
    <div className="border hover:bg-gray-200 p-2 mb-2">
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}