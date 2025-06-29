import React, { useState } from 'react';
import { Mail, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { useVoice } from '../hooks/useVoice';
import { useLanguage } from '../contexts/LanguageContext';

interface FormData {
  parentName: string;
  email: string;
  childAge: string;
  message: string;
  feedback: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    email: '',
    childAge: '',
    message: '',
    feedback: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const { speak } = useVoice();
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    speak(
      language === 'ar'
        ? 'شكراً لك! تم إرسال رسالتك بنجاح'
        : 'Thank you! Your message has been sent successfully'
    );
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        parentName: '',
        email: '',
        childAge: '',
        message: '',
        feedback: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center animate-pulse">
            <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />

            <h1 className="text-4xl font-bold mb-4 font-arabic text-gray-800">
              {language === 'ar' ? 'شكراً لك!' : 'Thank You!'}
            </h1>

            <p className="text-lg text-gray-600 mb-4 font-arabic">
              {language === 'ar'
                ? 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً'
                : "Your message has been sent successfully. We'll get back to you soon."}
            </p>

            <div className="mt-8 text-6xl">🎉</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 font-arabic text-gray-800">
            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {language === 'ar' ? 'تواصل معنا' : 'Get in Touch'}
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-arabic">
            {language === 'ar'
              ? 'نحن نحب أن نسمع من الآباء والأمهات. شاركنا تجربتك أو اقتراحاتك لتحسين تجربة التعلم لطفلك'
              : "We love to hear from parents. Share your experience or suggestions to improve your child's learning experience."}
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 text-center">
            <Mail size={48} className="mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 font-arabic">
              {language === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
            </h2>
            <p className="text-lg opacity-90">
              {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message'}
            </p>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Parent Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 font-arabic">
                  {language === 'ar' ? 'اسم الوالد/الوالدة *' : 'Parent Name *'}
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className={`w-full p-4 border-2 border-gray-300 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors ${language === 'ar' ? 'text-right' : ''}`}
                  placeholder={language === 'ar' ? 'أدخل اسمك هنا' : 'Enter your name here'}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  {language === 'ar' ? 'البريد الإلكتروني *' : 'Email Address *'}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Child Age */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2 font-arabic">
                {language === 'ar' ? 'عمر الطفل' : 'Child Age'}
              </label>
              <select
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                className={`w-full p-4 border-2 border-gray-300 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors ${language === 'ar' ? 'text-right' : ''}`}
              >
                <option value="">{language === 'ar' ? 'اختر عمر الطفل' : 'Select age'}</option>
                <option value="4">{language === 'ar' ? '4 سنوات' : '4 years'}</option>
                <option value="5">{language === 'ar' ? '5 سنوات' : '5 years'}</option>
                <option value="6">{language === 'ar' ? '6 سنوات' : '6 years'}</option>
                <option value="7">{language === 'ar' ? '7 سنوات' : '7 years'}</option>
                <option value="8">{language === 'ar' ? '8 سنوات' : '8 years'}</option>
                <option value="other">{language === 'ar' ? 'عمر آخر' : 'Other age'}</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2 font-arabic">
                {language === 'ar' ? 'رسالتك *' : 'Your Message *'}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full p-4 border-2 border-gray-300 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors ${language === 'ar' ? 'text-right' : ''}`}
                placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
              ></textarea>
            </div>

            {/* Feedback */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-700 mb-2 font-arabic">
                {language === 'ar' ? 'ملاحظات أو اقتراحات' : 'Feedback or Suggestions'}
              </label>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                rows={3}
                className={`w-full p-4 border-2 border-gray-300 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors ${language === 'ar' ? 'text-right' : ''}`}
                placeholder={language === 'ar' ? 'شاركنا اقتراحاتك لتحسين الموقع...' : 'Share your suggestions to improve the site...'}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-4 rounded-2xl font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <Send size={24} />
                <span className="font-arabic">{language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Additional Contact Info */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <MessageCircle className="text-blue-500 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold mb-3 font-arabic">
              {language === 'ar' ? 'تواصل سريع' : 'Quick Contact'}
            </h3>
            <p className="text-gray-600 text-sm mb-4 font-arabic">
              {language === 'ar' ? 'للاستفسارات السريعة والدعم الفني' : 'For quick questions and technical support'}
            </p>
            <p className="text-blue-600 font-bold">support@hamad-learning.com</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <Mail className="text-green-500 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold mb-3 font-arabic">
              {language === 'ar' ? 'اقتراحات التطوير' : 'Development Suggestions'}
            </h3>
            <p className="text-gray-600 text-sm mb-4 font-arabic">
              {language === 'ar' ? 'شاركنا أفكارك لتطوير المحتوى التعليمي' : 'Share your ideas to improve the educational content'}
            </p>
            <p className="text-green-600 font-bold">feedback@hamad-learning.com</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-center mb-8 font-arabic text-gray-800">
            {language === 'ar' ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold mb-2 font-arabic text-gray-800">
                {language === 'ar' ? 'هل الموقع مجاني بالكامل؟' : 'Is the website completely free?'}
              </h3>
              <p className="text-gray-600 font-arabic">
                {language === 'ar'
                  ? 'نعم، الموقع مجاني بالكامل. يمكن شراء الكتاب التعليمي بشكل منفصل من أمازون للحصول على تجربة تعليمية كاملة.'
                  : 'Yes, the website is completely free. You can purchase the educational book separately from Amazon for the full learning experience.'}
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold mb-2 font-arabic text-gray-800">
                {language === 'ar' ? 'ما العمر المناسب لاستخدام الموقع؟' : 'What is the recommended age to use the site?'}
              </h3>
              <p className="text-gray-600 font-arabic">
                {language === 'ar'
                  ? 'الموقع مصمم للأطفال من عمر 4 إلى 8 سنوات، ولكن يمكن للأطفال الأصغر أو الأكبر الاستفادة منه أيضاً.'
                  : 'The site is designed for children ages 4 to 8, but younger or older children can also benefit.'}
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2 font-arabic text-gray-800">
                {language === 'ar' ? 'هل يحتاج الطفل للمساعدة في استخدام الموقع؟' : 'Does the child need help using the site?'}
              </h3>
              <p className="text-gray-600 font-arabic">
                {language === 'ar'
                  ? 'الموقع سهل الاستخدام، ولكن ننصح بمرافقة الآباء للأطفال الصغار خاصة في البداية.'
                  : 'The site is easy to use, but we recommend that parents accompany young children, especially at first.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;