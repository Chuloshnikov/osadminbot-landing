import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, Lock, Settings, Shield, Users, Zap } from 'lucide-react';
import React from 'react'

const Features = () => {

     const features = [
    {
      icon: Shield,
      title: "Автоматическая модерация",
      description: "ИИ-powered система модерации с настраиваемыми правилами и автоматическими действиями",
    },
    {
      icon: BarChart3,
      title: "Расширенная аналитика",
      description: "Детальная статистика активности, роста сервера и поведения пользователей",
    },
    {
      icon: Zap,
      title: "Быстрые команды",
      description: "Мгновенное выполнение административных задач через интуитивный интерфейс",
    },
    {
      icon: Users,
      title: "Управление ролями",
      description: "Гибкая система управления ролями и разрешениями с автоматическим назначением",
    },
    {
      icon: Settings,
      title: "Настройка автоматизации",
      description: "Создавайте сложные сценарии автоматизации без программирования",
    },
    {
      icon: Lock,
      title: "Безопасность",
      description: "Защита от рейдов, спама и других угроз с помощью продвинутых алгоритмов",
    },
  ];

  return (
     <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Мощные возможности для
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              профессионального управления
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Всё необходимое для эффективного администрирования Discord сервера в одной платформе
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-black/50 border-gray-800 hover:border-orange-500/50 transition-colors group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-orange-500/30 group-hover:to-red-600/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features;