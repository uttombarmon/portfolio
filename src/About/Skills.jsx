const skills = {
  frontend: ['React', 'Redux', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'REST API'],
  database: ['MongoDB', 'MySQL'],
  tools: ['Git', 'Firebase', 'Vercel']
};

const Skills = () => {
  return (
    <div className="container mx-auto my-12 p-6 relative">
      <div className="text-center relative">
        <h2 className="text-4xl font-bold mb-8 w-fit mx-auto relative border-b-8 border-green-400">Technical Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {Object.keys(skills).map((category) => (
          <div key={category} className=" backdrop:opacity-20 p-6 rounded-lg shadow-md relative category-box">
            <h3 className="text-2xl font-semibold mb-4 capitalize text-center">{category}</h3>
            <ul className="space-y-2">
              {skills[category].map((skill) => (
                <li key={skill} className="bg-green-200 p-2 rounded-lg text-gray-700 text-center">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
