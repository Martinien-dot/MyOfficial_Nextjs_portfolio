// components/sections/About.tsx
import { Card, CardContent } from '@/components/ui/card'
import { Code, Palette, Rocket } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">À propos de moi</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionné par le développement web, je crée des solutions digitales innovantes
            qui allient performance technique et design moderne.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Avec plusieurs années d'expérience dans le développement web, je me spécialise 
              dans la création d'applications modernes utilisant les dernières technologies. 
              Mon approche combine créativité et rigueur technique pour livrer des projets 
              exceptionnels.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              J'aime relever de nouveaux défis et apprendre constamment pour rester à la 
              pointe des innovations technologiques. Mon objectif est de créer des expériences 
              utilisateur mémorables et performantes.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                icon: Code,
                title: 'Développement',
                description: 'Applications web modernes et performantes'
              },
              {
                icon: Palette,
                title: 'Design',
                description: 'Interfaces utilisateur intuitives et élégantes'
              },
              {
                icon: Rocket,
                title: 'Performance',
                description: 'Optimisation et déploiement efficace'
              }
            ].map(({ icon: Icon, title, description }) => (
              <Card key={title} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{title}</h3>
                      <p className="text-gray-400">{description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
