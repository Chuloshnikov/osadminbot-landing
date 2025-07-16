import { Button } from '@/components/ui/button';
import { Eye, Shield, Zap } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-red-900/20" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 69, 0, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255, 140, 0, 0.1) 0%, transparent 50%),
                           linear-gradient(45deg, transparent 30%, rgba(255, 69, 0, 0.05) 50%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/25">
              <Image src={'/eye.png'} width={50} height={50} alt="logo"/>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full blur-xl" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          DISCORD
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            ADMIN PRO
          </span>
        </h1>

        {/* Tagline */}
        <h2 className="text-2xl md:text-3xl text-orange-400 font-semibold mb-8">
          Управляй. Контролируй. Автоматизируй.
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Профессиональная панель администрирования Discord серверов с расширенной аналитикой, системой модерации и
          полной автоматизацией — всё в одном мощном инструменте.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-orange-500/25 border-0"
          >
            <Shield className="w-5 h-5 mr-2" />
            Начать бесплатно
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 px-8 py-4 text-lg font-semibold bg-transparent"
          >
            <Zap className="w-5 h-5 mr-2" />
            Смотреть демо
          </Button>

          <Button
            size="lg"
            variant="ghost"
            className="text-gray-400 hover:text-white hover:bg-white/5 px-8 py-4 text-lg"
          >
            Документация
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>99.9% Uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-orange-500" />
            <span>Enterprise Security</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-orange-500" />
            <span>Real-time Analytics</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;