export default function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML / CSS", percentage: 85 },
        { name: "JavaScript", percentage: 70 },
        { name: "Typescript", percentage: 55 },
        { name: "React", percentage: 70 },
        { name: "Angular", percentage: 60 },
        { name: "Bootstrap", percentage: 75 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Java (Spring Boot)", percentage: 40 },
        { name: "C# (ASP.NET Core)", percentage: 50 },
        { name: "Node.js", percentage: 65 },
        { name: "APIs REST", percentage: 60 }
      ]
    },
    {
      category: "Bases de Datos",
      skills: [
        { name: "MySQL", percentage: 65 },
        { name: "MongoDB", percentage: 60 },
        { name: "SQLServer", percentage: 50 }
      ]
    },
    {
      category: "Herramientas",
      skills: [
        { name: "Git / GitHub", percentage: 70 },
        { name: "Postman", percentage: 65 },
        { name: "Azure DevOps", percentage: 50 },
        { name: "Docker", percentage: 45}

      ]
    }
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">Mis Habilidades</h2>
      <div className="skills-grid">
        {skillsData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}