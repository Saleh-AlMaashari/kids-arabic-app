import React from 'react';
import { BookOpen, Star, Users, Heart, ExternalLink, Mail } from 'lucide-react';

const ParentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 font-arabic text-gray-800">
            منطقة الآباء والأمهات
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Parent Zone - Information & Tips
          </p>
        </div>

        {/* About Hamad */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-6xl">
                👨‍🏫
              </div>
            </div>
            <div className="text-center md:text-right">
              <h2 className="text-3xl font-bold mb-4 font-arabic text-gray-800">
                من هو حمد العوضي؟
              </h2>
              <p className="text-lg text-gray-600 mb-4 font-arabic leading-relaxed">
                حمد العوضي هو معلم ومؤلف متخصص في تعليم الأطفال اللغة العربية بطرق تفاعلية وممتعة. يهدف إلى جعل تعلم الحروف العربية تجربة مثيرة ومفيدة للأطفال من خلال الألعاب والقصص التفاعلية.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                Hamad Al Awadhi is an educator and author specializing in teaching Arabic to children through interactive and engaging methods. He aims to make learning Arabic letters an exciting and beneficial experience for children through games and interactive stories.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <BookOpen className="text-blue-500 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold mb-3 font-arabic">تعلم تفاعلي</h3>
            <p className="text-gray-600 text-sm">
              طرق تعليم تفاعلية تجمع بين المرح والتعلم الفعال
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <Star className="text-yellow-500 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold mb-3 font-arabic">نظام المكافآت</h3>
            <p className="text-gray-600 text-sm">
              نجوم ومكافآت لتحفيز الطفل على التعلمالمستمر
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <Users className="text-green-500 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold mb-3 font-arabic">آمن للأطفال</h3>
            <p className="text-gray-600 text-sm">
              محتوى آمن ومناسب للأطفال من سن 4-8 سنوات
            </p>
          </div>
        </div>

        {/* Tips for Parents */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-6 font-arabic text-gray-800">
            نصائح للآباء والأمهات
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-bold mb-2 font-arabic">تعلم مع طفلك</h3>
                <p className="text-gray-600 text-sm">اجلس مع طفلك واستكشف الحروف معاً لتعزيز تجربة التعلم</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-bold mb-2 font-arabic">ادعم التقدم</h3>
                <p className="text-gray-600 text-sm">احتفل بإنجازات طفلك الصغيرة وامدح جهوده في التعلم</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-bold mb-2 font-arabic">وقت محدد للتعلم</h3>
                <p className="text-gray-600 text-sm">خصص وقتاً يومياً قصيراً للتعلم لتجنب إرهاق الطفل</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="font-bold mb-2 font-arabic">استخدم المساعد الصوتي</h3>
                <p className="text-gray-600 text-sm">فعّل مساعد حمد الصوتي لمساعدة طفلك في النطق الصحيح</p>
              </div>
            </div>
          </div>
        </div>

        {/* Book Promotion */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-3xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-bold mb-4 font-arabic">
              كتاب حمد العوضي التعليمي
            </h2>
            <p className="text-lg mb-6 opacity-90">
              احصل على النسخة الكاملة من كتاب تعليم الحروف العربية مع رموز QR للوصول المباشر للموقع
            </p>
            <a
              href="https://amazon.com/dp/YOUR_BOOK_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <ExternalLink size={24} />
              <span className="font-arabic">اشتر الكتاب من أمازون</span>
            </a>
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-6 font-arabic text-gray-800">
            كيفية استخدام الموقع
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-arabic">للأطفال:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-arabic">اضغط على مساعد حمد للمساعدة</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-arabic">استمع للحروف والكلمات</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-arabic">العب الألعاب التفاعلية</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-arabic">لون واحفظ رسماتك</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 font-arabic">للآباء:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-arabic">تتبع تقدم طفلك</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-arabic">ساعد في الاختبارات</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-arabic">شارك في وقت القصة</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-arabic">احتفل بالإنجازات</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <Mail className="text-blue-500 mx-auto mb-4" size={48} />
          <h2 className="text-2xl font-bold mb-4 font-arabic text-gray-800">
            تواصل معنا
          </h2>
          <p className="text-gray-600 mb-6 font-arabic">
            لديك اقتراحات أو تعليقات؟ نحن نحب أن نسمع منك!
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-2xl hover:bg-blue-600 transition-colors font-arabic"
          >
            اتصل بنا
          </a>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-8 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl">
          <Heart className="text-red-500 mx-auto mb-3" size={32} />
          <p className="text-gray-700 font-arabic text-lg">
            صُنع بحب لأطفالنا الأعزاء - نتمنى لهم رحلة تعليمية ممتعة ومفيدة
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Made with love for our precious children - wishing them an enjoyable and beneficial learning journey
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParentsPage;