import { ArabicLetter } from '../types';

export const arabicLetters: ArabicLetter[] = [
  {
    id: 'alif',
    letter: 'أ',
    name: 'أَلِف',
    nameEn: 'Alif',
    word: 'أَرْنَب',
    wordEn: 'Rabbit',
    imageUrl: "https://tse3.mm.bing.net/th/id/OIP.OGiNPMPRpoL8pt8cOy4kPAHaHa",
    position: 'isolated',
    pronunciation: 'alif',
    pronunciationEn: 'alif',
    tashkeel: 'أَ'
  },
  {
    id: 'baa',
    letter: 'ب',
    name: 'بَاء',
    nameEn: 'Baa',
    word: 'بَطَّة',
    wordEn: 'Duck',
    imageUrl: "https://e7.pngegg.com/pngimages/1017/821/png-clipart-duck-drawing-duck-child-animals.png",
    position: 'isolated',
    pronunciation: 'baa',
    pronunciationEn: 'baa',
    tashkeel: 'بَ'
  },
  {
    id: 'taa',
    letter: 'ت',
    name: 'تَاء',
    nameEn: 'Taa',
    word: 'تُفَّاح',
    wordEn: 'Apple',
    imageUrl: "https://tse3.mm.bing.net/th/id/OIP.Yx9ZVVdktIkSgmq3VCn48wHaHa",
    position: 'isolated',
    pronunciation: 'taa',
    pronunciationEn: 'taa',
    tashkeel: 'تَ'
  },
  {
    id: 'thaa',
    letter: 'ث',
    name: 'ثَاء',
    nameEn: 'Thaa',
    word: 'ثَعْلَب',
    wordEn: 'Fox',
    imageUrl: "https://tse2.mm.bing.net/th/id/OIP.xodqjaO9GOTymYsU2FXdZQHaHa",
    position: 'isolated',
    pronunciation: 'thaa',
    pronunciationEn: 'thaa',
    tashkeel: 'ثَ'
  },
  {
    id: 'jeem',
    letter: 'ج',
    name: 'جِيم',
    nameEn: 'Jeem',
    word: 'جَمَل',
    wordEn: 'Camel',
    imageUrl: 'https://e7.pngegg.com/pngimages/614/668/png-clipart-camel-cartoon-graphy-camel-mammal-animals.png',
    position: 'isolated',
    pronunciation: 'jeem',
    pronunciationEn: 'jeem',
    tashkeel: 'جَ'
  },
  {
    id: 'haa',
    letter: 'ح',
    name: 'حَاء',
    nameEn: 'Haa',
    word: 'حِصَان',
    wordEn: 'Horse',
    imageUrl: 'https://e7.pngegg.com/pngimages/697/342/png-clipart-horse-cartoon-horse-horse-mammal.png',
    position: 'isolated',
    pronunciation: 'haa',
    pronunciationEn: 'haa',
    tashkeel: 'حَ'
  },
  {
    id: 'khaa',
    letter: 'خ',
    name: 'خَاء',
    nameEn: 'Khaa',
    word: 'خُبْز',
    wordEn: 'Bread',
    imageUrl: 'https://e7.pngegg.com/pngimages/817/657/png-clipart-baked-breads-bakery-baguette-white-bread-baking-bread-baked-goods-food.png', 
    position: 'isolated',
    pronunciation: 'khaa',
    pronunciationEn: 'khaa',
    tashkeel: 'خَ'
  },
  {
    id: 'daal',
    letter: 'د',
    name: 'دَال',
    nameEn: 'Daal',
    word: 'دُب',
    wordEn: 'Bear',
    imageUrl: 'https://e7.pngegg.com/pngimages/192/477/png-clipart-brown-bear-illustration-prince-bear-baby-shower-party-child-bear-mammal-cat-like-mammal.png',
    position: 'isolated',
    pronunciation: 'daal',
    pronunciationEn: 'daal',
    tashkeel: 'دَ'
  }
];

export const getLetterById = (id: string): ArabicLetter | undefined => {
  return arabicLetters.find(letter => letter.id === id);
};

export const getLetterByIndex = (index: number): ArabicLetter | undefined => {
  return arabicLetters[index];
};