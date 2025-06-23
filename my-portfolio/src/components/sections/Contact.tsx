// components/sections/Contact.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contactez-moi</h2>
          <p className="text-xl text-gray-300">
            Prêt à collaborer sur votre prochain projet ?
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Restons en contact</h3>
              <p className="text-gray-300 text-lg mb-8">
                N'hésitez pas à me contacter pour discuter de vos projets ou 
                pour toute collaboration. Je serais ravi d'échanger avec vous !
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'contact@example.com' },
                { icon: Phone, label: 'Téléphone', value: '+33 1 23 45 67 89' },
                { icon: MapPin, label: 'Localisation', value: 'Paris, France' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{label}</p>
                    <p className="text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Envoyez-moi un message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Nom" className="bg-white/5 border-white/10 text-white placeholder-gray-400" />
                <Input placeholder="Email" className="bg-white/5 border-white/10 text-white placeholder-gray-400" />
              </div>
              <Input placeholder="Sujet" className="bg-white/5 border-white/10 text-white placeholder-gray-400" />
              <Textarea 
                placeholder="Votre message..." 
                rows={5} 
                className="bg-white/5 border-white/10 text-white placeholder-gray-400 resize-none" 
              />
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Send className="w-4 h-4 mr-2" />
                Envoyer le message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
