import React, { useRef, useEffect, useState } from 'react';
import { Palette, Download, RotateCcw, Save } from 'lucide-react';
import { useVoice } from '../hooks/useVoice';

const ColoringPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState('#FF6B6B');
  const [brushSize, setBrushSize] = useState(10);
  const { speak } = useVoice();

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
    '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D7BDE2'
  ];

  useEffect(() => {
    initializeCanvas();
    speak('مرحباً بك في صفحة التلوين! اختر لوناً وابدأ بالرسم');
  }, []);

  const initializeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;

    // Fill with white background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw a simple coloring template
    drawTemplate(ctx);
  };

  const drawTemplate = (ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 3;

    // Draw a simple house template
    // House base
    ctx.beginPath();
    ctx.rect(250, 350, 300, 200);
    ctx.stroke();

    // Roof
    ctx.beginPath();
    ctx.moveTo(225, 350);
    ctx.lineTo(400, 250);
    ctx.lineTo(575, 350);
    ctx.closePath();
    ctx.stroke();

    // Door
    ctx.beginPath();
    ctx.rect(350, 450, 80, 100);
    ctx.stroke();

    // Windows
    ctx.beginPath();
    ctx.rect(275, 380, 60, 60);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(465, 380, 60, 60);
    ctx.stroke();

    // Sun
    ctx.beginPath();
    ctx.arc(650, 150, 40, 0, 2 * Math.PI);
    ctx.stroke();

    // Sun rays
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4;
      const x1 = 650 + Math.cos(angle) * 50;
      const y1 = 150 + Math.sin(angle) * 50;
      const x2 = 650 + Math.cos(angle) * 70;
      const y2 = 150 + Math.sin(angle) * 70;
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // Clouds
    ctx.beginPath();
    ctx.arc(150, 120, 30, 0, 2 * Math.PI);
    ctx.arc(180, 110, 35, 0, 2 * Math.PI);
    ctx.arc(210, 120, 30, 0, 2 * Math.PI);
    ctx.stroke();

    // Ground line
    ctx.beginPath();
    ctx.moveTo(0, 550);
    ctx.lineTo(800, 550);
    ctx.stroke();

    // Flowers
    for (let i = 0; i < 3; i++) {
      const x = 100 + i * 150;
      const y = 520;
      
      // Stem
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + 30);
      ctx.stroke();
      
      // Petals
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, 2 * Math.PI);
      ctx.stroke();
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = currentColor;
    ctx.beginPath();
    ctx.arc(x, y, brushSize / 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    initializeCanvas();
    speak('تم مسح اللوحة');
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'hamad-coloring-artwork.png';
    link.href = canvas.toDataURL();
    link.click();
    
    speak('تم حفظ رسمتك!');
  };

  const saveToGallery = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const imageData = canvas.toDataURL();
    const savedArt = JSON.parse(localStorage.getItem('hamad-art-gallery') || '[]');
    savedArt.push({
      id: Date.now(),
      image: imageData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('hamad-art-gallery', JSON.stringify(savedArt));
    
    speak('تم حفظ عملك الفني في المعرض!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 font-arabic text-gray-800">
            صفحة التلوين
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Coloring Page
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Tools Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-lg sticky top-8">
              {/* Color Palette */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-4 font-arabic text-center">
                  اختر اللون
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => {
                        setCurrentColor(color);
                        speak('لون جميل!');
                      }}
                      className={`w-12 h-12 rounded-full border-4 hover:scale-110 transition-transform ${
                        currentColor === color ? 'border-gray-800' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Brush Size */}
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-4 font-arabic text-center">
                  حجم الفرشاة
                </h3>
                <input
                  type="range"
                  min="5"
                  max="30"
                  value={brushSize}
                  onChange={(e) => setBrushSize(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-center mt-2 text-gray-600">
                  {brushSize}px
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={clearCanvas}
                  className="w-full bg-red-500 text-white py-3 rounded-2xl hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                >
                  <RotateCcw size={20} />
                  <span className="font-arabic">مسح</span>
                </button>
                
                <button
                  onClick={saveToGallery}
                  className="w-full bg-blue-500 text-white py-3 rounded-2xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Save size={20} />
                  <span className="font-arabic">حفظ</span>
                </button>
                
                <button
                  onClick={downloadImage}
                  className="w-full bg-green-500 text-white py-3 rounded-2xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  <span className="font-arabic">تحميل</span>
                </button>
              </div>
            </div>
          </div>

          {/* Canvas Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <Palette className="inline-block text-purple-500 mr-2" size={24} />
                <span className="text-lg font-bold font-arabic">لوحة الرسم</span>
              </div>
              
              <div className="flex justify-center">
                <canvas
                  ref={canvasRef}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  className="border-4 border-purple-200 rounded-2xl cursor-crosshair shadow-lg max-w-full h-auto"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
              
              <div className="mt-4 text-center text-gray-600 font-arabic">
                استخدم الماوس للرسم والتلوين
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-white rounded-3xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-center mb-4 font-arabic">
            تعليمات التلوين
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl mb-2">🎨</div>
              <div className="font-bold font-arabic mb-2">اختر اللون</div>
              <div className="text-gray-600 text-sm">انقر على اللون المفضل لديك</div>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-2">🖌️</div>
              <div className="font-bold font-arabic mb-2">ارسم</div>
              <div className="text-gray-600 text-sm">استخدم الماوس للرسم على اللوحة</div>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-2">💾</div>
              <div className="font-bold font-arabic mb-2">احفظ</div>
              <div className="text-gray-600 text-sm">احفظ عملك الفني واحتفظ به</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColoringPage;