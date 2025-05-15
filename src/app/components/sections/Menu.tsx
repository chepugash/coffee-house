"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'tea' | 'dessert';
  image: string;
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Капучино',
    description: 'Классический кофейный напиток с нежной молочной пенкой',
    price: 360,
    category: 'coffee',
    image: '/images/menu/cappuccino.jpg'
  },
  {
    id: 2,
    name: 'Латте',
    description: 'Мягкий кофе с большим количеством молока и тонким слоем пены',
    price: 380,
    category: 'coffee',
    image: '/images/menu/latte.jpg'
  },
  {
    id: 3,
    name: 'Эспрессо',
    description: 'Концентрированный кофейный напиток с насыщенным вкусом',
    price: 280,
    category: 'coffee',
    image: '/images/menu/espresso.jpg'
  },
  {
    id: 4,
    name: 'Зеленый чай',
    description: 'Классический зеленый чай с нежным травяным ароматом',
    price: 320,
    category: 'tea',
    image: '/images/menu/green-tea.jpg'
  },
  {
    id: 5,
    name: 'Чизкейк',
    description: 'Нежный десерт из сливочного сыра на песочной основе',
    price: 420,
    category: 'dessert',
    image: '/images/menu/cheesecake.jpg'
  },
  {
    id: 6,
    name: 'Круассан',
    description: 'Свежевыпеченный круассан с хрустящей корочкой',
    price: 280,
    category: 'dessert',
    image: '/images/menu/croissant.jpg'
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<'all' | MenuItem['category']>('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Наше меню
        </motion.h2>

        {/* Категории */}
        <div className="flex justify-center gap-4 mb-12">
          <CategoryButton 
            active={activeCategory === 'all'} 
            onClick={() => setActiveCategory('all')}
          >
            Все
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'coffee'} 
            onClick={() => setActiveCategory('coffee')}
          >
            Кофе
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'tea'} 
            onClick={() => setActiveCategory('tea')}
          >
            Чай
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'dessert'} 
            onClick={() => setActiveCategory('dessert')}
          >
            Десерты
          </CategoryButton>
        </div>

        {/* Сетка меню */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-lg font-medium text-[#C8A27A]">
                    {item.price} ₽
                  </span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryButton({ 
  children, 
  active, 
  onClick 
}: { 
  children: React.ReactNode; 
  active: boolean; 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
        active 
          ? 'bg-[#C8A27A] text-white' 
          : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  );
} 