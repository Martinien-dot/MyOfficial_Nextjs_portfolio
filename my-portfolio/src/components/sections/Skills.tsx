// components/sections/Skills.tsx
import { Badge } from '@/components/ui/badge'

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL']
    },
    {
      title: 'Outils',
      skills: ['Git', 'Docker', 'Vercel', 'Figma', 'VS Code']
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Compétences</h2>
          <p className="text-xl text-gray-300">
            Technologies et outils que j'utilise au quotidien
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map(({ title, skills }) => (
            <div key={title} className="space-y-4">
              <h3 className="text-2xl font-semibold text-white text-center">{title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-white/10 text-white hover:bg-white/20 transition-colors px-4 py-2 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
