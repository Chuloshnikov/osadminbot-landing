import React from 'react'

const Stats = () => {
    const stats = [
    { number: "50K+", label: "Активных серверов" },
    { number: "2M+", label: "Пользователей" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Поддержка" },
  ];
  
  return (
     <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats;