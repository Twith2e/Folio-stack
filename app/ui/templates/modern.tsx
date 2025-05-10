export default function TemplateModern({
  data,
}: {
  data: {
    fullName: string;
    title: string;
    skills: [];
    projects: { name: string }[];
  };
}) {
  return (
    <div className="p-6 bg-gray-50 rounded-2xl border border-indigo-200">
      <aside className="mb-4">
        <h1 className="text-3xl font-semibold">{data.fullName}</h1>
        <p className="italic">{data.title}</p>
      </aside>
      <section className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium">Skills</h3>
          <ul className="list-disc list-inside">
            {data.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium">Projects</h3>
          <ul className="list-disc list-inside">
            {data.projects.map((project) => (
              <li key={project.name}>{project.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
