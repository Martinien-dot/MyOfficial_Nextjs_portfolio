// components/sections/Projects.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { Badge } from '../ui/badge'

export function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plateforme e-commerce complète avec panier, paiement et gestion admin',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interactif avec graphiques et statistiques en temps réel',
      tech: ['React', 'D3.js', 'Node.js', 'WebSocket'],
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#'
    },
    {
      title: 'App Mobile',
      description: 'Application mobile cross-platform avec synchronisation cloud',
      tech: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Mes Projets</h2>
          <p className="text-xl text-gray-300">
            Découvrez quelques-uns de mes projets récents
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="p-0">
                <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-t-lg flex items-center justify-center">
                  <div className="text-white/60 text-sm">Image du projet</div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-white mb-2">{project.title}</CardTitle>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-purple-400/50 text-purple-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 border-gray-400 text-gray-300 hover:bg-white/10">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
