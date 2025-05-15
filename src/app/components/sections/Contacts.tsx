"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi';
import { FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Здесь будет логика отправки формы
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Контакты
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-neutral-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-8">Как нас найти</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <HiOutlineLocationMarker className="w-6 h-6 text-[#C8A27A] mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Адрес</h4>
                    <p className="text-gray-600">ул. Пушкина, д. 10</p>
                    <p className="text-gray-600">Москва, Россия</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <HiOutlinePhone className="w-6 h-6 text-[#C8A27A] mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Телефон</h4>
                    <a 
                      href="tel:+74951234567" 
                      className="text-[#C8A27A] hover:text-[#B89165] transition-colors"
                    >
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <HiOutlineMail className="w-6 h-6 text-[#C8A27A] mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                    <a 
                      href="mailto:info@coffeehouse.com" 
                      className="text-[#C8A27A] hover:text-[#B89165] transition-colors"
                    >
                      info@coffeehouse.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <HiOutlineClock className="w-6 h-6 text-[#C8A27A] mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Часы работы</h4>
                    <p className="text-gray-600">Пн-Пт: 8:00 - 22:00</p>
                    <p className="text-gray-600">Сб-Вс: 9:00 - 23:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-4">Мы в соцсетях</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#C8A27A] hover:text-[#B89165] transition-colors"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://t.me" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#C8A27A] hover:text-[#B89165] transition-colors"
                  >
                    <FaTelegram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://wa.me/74951234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#C8A27A] hover:text-[#B89165] transition-colors"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Форма обратной связи */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-neutral-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Напишите нам</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C8A27A] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C8A27A] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C8A27A] focus:border-transparent"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 text-white font-medium rounded-md transition-colors ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#C8A27A] hover:bg-[#B89165]'
                  }`}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-sm">
                    Спасибо за сообщение! Мы свяжемся с вами в ближайшее время.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 