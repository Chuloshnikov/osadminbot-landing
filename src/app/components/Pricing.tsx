import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Crown, Zap } from 'lucide-react';
import React from 'react'

const Pricing = () => {
    const plans = [
    {
      name: "Starter",
      price: "Бесплатно",
      description: "Для небольших серверов",
      features: ["До 1,000 участников", "Базовая модерация", "Простая аналитика", "Email поддержка"],
      icon: Zap,
      popular: false,
    },
    {
      name: "Professional",
      price: "₽990/мес",
      description: "Для растущих сообществ",
      features: [
        "До 10,000 участников",
        "Расширенная модерация",
        "Полная аналитика",
        "Автоматизация",
        "Приоритетная поддержка",
        "Кастомные команды",
      ],
      icon: Crown,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "По запросу",
      description: "Для крупных серверов",
      features: [
        "Неограниченно участников",
        "ИИ модерация",
        "Продвинутая аналитика",
        "Белый лейбл",
        "Персональный менеджер",
        "SLA 99.9%",
      ],
      icon: Crown,
      popular: false,
    },
  ];


  return (
     <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Выберите свой
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              тарифный план
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Гибкие тарифы для серверов любого размера</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-gray-900/50 border-gray-800 ${
                plan.popular ? "border-orange-500/50 scale-105" : ""
              } hover:border-orange-500/50 transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-6 h-6 text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                      : "bg-gray-800 hover:bg-gray-700 text-white"
                  }`}
                  size="lg"
                >
                  {plan.name === "Enterprise" ? "Связаться с нами" : "Начать"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing;