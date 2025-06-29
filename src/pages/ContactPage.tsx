import React, { useState } from 'react';
import { Mail, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { useVoice } from '../hooks/useVoice';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    speak('شكراً لك! تم إرسال رسالتك بنجاح');
    
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
              شكراً لك!
            </h1>
            <p className="text-2xl text-gray-600 mb-6">Thank You!</p>
            
            <p className="text-lg text-gray-600 mb-4 font-arabic">
              تم إرسال رسالتك بنجاح. سنتواصل معك قريباً
            </p>
            <p className="text-base text-gray-500">
              Your message has been sent successfully. We'll get back to you soon.
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
            تواصل معنا
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Contact Us
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-arabic">
            نحن نحب أن نسمع من الآباء والأمهات. شاركنا تجربتك أو اقتراحاتك لتحسين تجربة التعلم لطفلك
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 text-center">
            <Mail size={48} className="mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2 font-arabic">
              أرسل لنا رسالة
            </h2>
            <p className="text-lg opacity-90">
              Send us a message
            </p>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Parent Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 font-arabic">
                  اسم الوالد/الوالدة *
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors text-right"
                  placeholder="أدخل اسمك هنا"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Email Address *
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
                عمر الطفل
              </label>
              <select
                name="childAge"
                value={formData.childAge}
                onChange={handleChange}
                className="w-full p-4 border-2 border-gray-300 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors text-right"
              >
                <option value="">اختر عمر الطفل</option>
                <option value="4">4 سنوات</option>
                <option value="5">5 سنوات</option>
                <option value="6">6 سنوات</option>
                <option value="7">7 سنوات</option>
                <option value="8">8 سنوات</option>
                <option value="other">عمر آخر</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2 font-arabic">
                رسالتك *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-4 border-2 border-gray-300 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors text-right"
                placeholder="اكتب رسالتك هنا..."
              ></textarea>
            </div>

            {/* Feedback */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-700 mb-2 font-arabic">
                ملاحظات أو اقتراحات
              </label>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                rows={3}
                className="w-full p-4 border-2 border-gray-300 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors text-right"
                placeholder="شاركنا اقتراحاتك لتحسين الموقع..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-4 rounded-2xl font-bold text-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <Send size={24} />
                <span className="font-arabic">إرسال الرسالة</span>
              </button>
            </div>
          </form>
        </div>

        {/* Additional Contact Info */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <MessageCircle className="text-blue-500 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold mb-3 font-arabic">تواصل سريع</h3>
            <p className="text-gray-600 text-sm mb-4 font-arabic">
              للاستفسارات السريعة والدعم الفني
            </p>
            <p className="text-blue-600 font-bold">support@hamad-learning.com</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <Mail className="text-green-500 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold mb-3 font-arabic">اقتراحات التطوير</h3>
            <p className="text-gray-600 text-sm mb-4 font-arabic">
              شاركنا أفكارك لتطوير المحتوى التعليمي
            </p>
            <p className="text-green-600 font-bold">feedback@hamad-learning.com</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-center mb-8 font-arabic text-gray-800">
            أسئلة شائعة
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold mb-2 font-arabic text-gray-800">
                هل الموقع مجاني بالكامل؟
              </h3>
              <p className="text-gray-600 font-arabic">
                نعم، الموقع مجاني بالكامل. يمكن شراء الكتاب التعليمي بشكل منفصل من أمازون للحصول على تجربة تعليمية كاملة.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold mb-2 font-arabic text-gray-800">
                ما العمر المناسب لاستخدام الموقع؟
              </h3>
              <p className="text-gray-600 font-arabic">
                الموقع مصمم للأطفال من عمر 4 إلى 8 سنوات، ولكن يمكن للأطفال الأصغر أو الأكبر الاستفادة منه أيضاً.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2 font-arabic text-gray-800">
                هل يحتاج الطفل للمساعدة في استخدام الموقع؟
              </h3>
              <p className="text-gray-600 font-arabic">
                الموقع سهل الاستخدام، ولكن ننصح بمرافقة الآباء للأطفال الصغار خاصة في البداية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;