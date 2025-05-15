import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Изображения */}
          <motion.div 
            className="grid grid-cols-2 gap-4 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[300px]">
              <Image
                src="/images/about/coffee-1.jpg"
                alt="Процесс приготовления кофе"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-[300px] mt-8">
              <Image
                src="/images/about/coffee-2.jpg"
                alt="Интерьер кофейни"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-[300px] -mt-8">
              <Image
                src="/images/about/coffee-3.jpg"
                alt="Наши десерты"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/images/about/coffee-4.jpg"
                alt="Наша команда"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Текстовый контент */}
          <motion.div
            className="lg:pl-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">О нашей кофейне</h2>
            
            <div className="space-y-6 text-gray-600">
              <p>
                Мы - уютная кофейня в сердце города, где каждая чашка кофе готовится 
                с любовью и вниманием к деталям. Наша история началась с простой идеи: 
                создать место, где каждый гость чувствует себя особенным.
              </p>

              <div className="space-y-4">
                <Feature 
                  title="Качественные зёрна" 
                  description="Мы работаем только с лучшими поставщиками кофейных зёрен, 
                    обеспечивая превосходный вкус каждой чашки"
                />
                <Feature 
                  title="Профессиональные бариста" 
                  description="Наши бариста - настоящие мастера своего дела, постоянно 
                    совершенствующие свои навыки"
                />
                <Feature 
                  title="Уютная атмосфера" 
                  description="Мы создали пространство, где приятно провести время за 
                    чашечкой кофе с друзьями или поработать в тишине"
                />
              </div>

              <p>
                Приходите к нам, чтобы насладиться отличным кофе, свежей выпечкой и 
                приятной атмосферой. Мы всегда рады новым гостям!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
} 