import { Story } from '../types';

export const stories: Story[] = [
  {
    id: 'rabbit-adventure',
    title: 'مغامرة الأرنب الصغير',
    titleEn: 'Little Rabbit\'s Adventure',
    ageGroup: '4-8',
    moral: 'الصبر والمثابرة يؤديان إلى النجاح',
    moralEn: 'Patience and perseverance lead to success',
    pages: [
      {
        id: '1',
        text: 'كان هناك أرنب صغير يُدعى أرنوب يحب اللعب في البستان الأخضر',
        textEn: 'There was a little rabbit named Arnoob who loved playing in the green garden',
        imageUrl: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=400',
        audioText: 'كان هناك أرنب صغير يُدعى أرنوب يحب اللعب في البستان الأخضر',
        audioTextEn: 'There was a little rabbit named Arnoob who loved playing in the green garden'
      },
      {
        id: '2',
        text: 'في يوم مشمس جميل، قرر أرنوب أن يستكشف الغابة المجاورة',
        textEn: 'On a beautiful sunny day, Arnoob decided to explore the nearby forest',
        imageUrl: 'https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&w=400',
        audioText: 'في يوم مشمس جميل، قرر أرنوب أن يستكشف الغابة المجاورة',
        audioTextEn: 'On a beautiful sunny day, Arnoob decided to explore the nearby forest'
      },
      {
        id: '3',
        text: 'تاه أرنوب في الغابة الكبيرة وبدأ يشعر بالخوف والقلق',
        textEn: 'Arnoob got lost in the big forest and started feeling scared and worried',
        imageUrl: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=400',
        audioText: 'تاه أرنوب في الغابة الكبيرة وبدأ يشعر بالخوف والقلق',
        audioTextEn: 'Arnoob got lost in the big forest and started feeling scared and worried'
      },
      {
        id: '4',
        text: 'التقى أرنوب بسنجاب حكيم أخبره أن يتبع النجوم للعودة إلى البيت',
        textEn: 'Arnoob met a wise squirrel who told him to follow the stars to return home',
        imageUrl: 'https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=400',
        audioText: 'التقى أرنوب بسنجاب حكيم أخبره أن يتبع النجوم للعودة إلى البيت',
        audioTextEn: 'Arnoob met a wise squirrel who told him to follow the stars to return home'
      },
      {
        id: '5',
        text: 'صبر أرنوب حتى حلول الليل ونظر إلى السماء المليئة بالنجوم اللامعة',
        textEn: 'Arnoob waited patiently until nightfall and looked at the sky full of bright stars',
        imageUrl: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=400',
        audioText: 'صبر أرنوب حتى حلول الليل ونظر إلى السماء المليئة بالنجوم اللامعة',
        audioTextEn: 'Arnoob waited patiently until nightfall and looked at the sky full of bright stars'
      },
      {
        id: '6',
        text: 'تبع أرنوب النجم الأكثر إشراقاً وسار بثبات رغم التعب',
        textEn: 'Arnoob followed the brightest star and walked steadily despite being tired',
        imageUrl: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=400',
        audioText: 'تبع أرنوب النجم الأكثر إشراقاً وسار بثبات رغم التعب',
        audioTextEn: 'Arnoob followed the brightest star and walked steadily despite being tired'
      },
      {
        id: '7',
        text: 'بعد رحلة طويلة، وصل أرنوب أخيراً إلى بيته الدافئ',
        textEn: 'After a long journey, Arnoob finally reached his warm home',
        imageUrl: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=400',
        audioText: 'بعد رحلة طويلة، وصل أرنوب أخيراً إلى بيته الدافئ',
        audioTextEn: 'After a long journey, Arnoob finally reached his warm home'
      },
      {
        id: '8',
        text: 'تعلم أرنوب أن الصبر والمثابرة يساعدان في التغلب على أي صعوبة',
        textEn: 'Arnoob learned that patience and perseverance help overcome any difficulty',
        imageUrl: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=400',
        audioText: 'تعلم أرنوب أن الصبر والمثابرة يساعدان في التغلب على أي صعوبة',
        audioTextEn: 'Arnoob learned that patience and perseverance help overcome any difficulty'
      }
    ],
    questions: [
      {
        id: 'q1',
        pageIndex: 2,
        question: 'ماذا تعتقد أن أرنوب يشعر به الآن؟',
        questionEn: 'What do you think Arnoob is feeling right now?',
        options: ['سعيد', 'خائف', 'جائع', 'نعسان'],
        optionsEn: ['Happy', 'Scared', 'Hungry', 'Sleepy'],
        correctAnswer: 1
      },
      {
        id: 'q2',
        pageIndex: 4,
        question: 'ما النصيحة التي أعطاها السنجاب لأرنوب؟',
        questionEn: 'What advice did the squirrel give to Arnoob?',
        options: ['اتبع الشمس', 'اتبع النجوم', 'اتبع النهر', 'اتبع الطيور'],
        optionsEn: ['Follow the sun', 'Follow the stars', 'Follow the river', 'Follow the birds'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'kind-cat',
    title: 'القطة الطيبة',
    titleEn: 'The Kind Cat',
    ageGroup: '4-8',
    moral: 'اللطف والعطف يجعلان العالم مكاناً أفضل',
    moralEn: 'Kindness and compassion make the world a better place',
    pages: [
      {
        id: '1',
        text: 'كانت هناك قطة صغيرة لطيفة تُدعى لولو تعيش في حديقة جميلة',
        textEn: 'There was a sweet little cat named Lulu who lived in a beautiful garden',
        imageUrl: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400',
        audioText: 'كانت هناك قطة صغيرة لطيفة تُدعى لولو تعيش في حديقة جميلة',
        audioTextEn: 'There was a sweet little cat named Lulu who lived in a beautiful garden'
      },
      {
        id: '2',
        text: 'كانت لولو تحب مساعدة جميع الحيوانات في الحديقة',
        textEn: 'Lulu loved helping all the animals in the garden',
        imageUrl: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400',
        audioText: 'كانت لولو تحب مساعدة جميع الحيوانات في الحديقة',
        audioTextEn: 'Lulu loved helping all the animals in the garden'
      },
      {
        id: '3',
        text: 'في يوم ممطر، وجدت لولو عصفوراً صغيراً مبللاً ومرتجفاً',
        textEn: 'On a rainy day, Lulu found a small bird that was wet and shivering',
        imageUrl: 'https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&w=400',
        audioText: 'في يوم ممطر، وجدت لولو عصفوراً صغيراً مبللاً ومرتجفاً',
        audioTextEn: 'On a rainy day, Lulu found a small bird that was wet and shivering'
      },
      {
        id: '4',
        text: 'أخذت لولو العصفور إلى مكان دافئ وجاف تحت الشجرة الكبيرة',
        textEn: 'Lulu took the bird to a warm, dry place under the big tree',
        imageUrl: 'https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&w=400',
        audioText: 'أخذت لولو العصفور إلى مكان دافئ وجاف تحت الشجرة الكبيرة',
        audioTextEn: 'Lulu took the bird to a warm, dry place under the big tree'
      },
      {
        id: '5',
        text: 'جلبت لولو بعض البذور والماء للعصفور الصغير',
        textEn: 'Lulu brought some seeds and water for the little bird',
        imageUrl: 'https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&w=400',
        audioText: 'جلبت لولو بعض البذور والماء للعصفور الصغير',
        audioTextEn: 'Lulu brought some seeds and water for the little bird'
      },
      {
        id: '6',
        text: 'بقيت لولو مع العصفور حتى توقف المطر وأشرقت الشمس',
        textEn: 'Lulu stayed with the bird until the rain stopped and the sun came out',
        imageUrl: 'https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&w=400',
        audioText: 'بقيت لولو مع العصفور حتى توقف المطر وأشرقت الشمس',
        audioTextEn: 'Lulu stayed with the bird until the rain stopped and the sun came out'
      },
      {
        id: '7',
        text: 'شكر العصفور لولو على لطفها وطار بسعادة إلى عشه',
        textEn: 'The bird thanked Lulu for her kindness and flew happily to its nest',
        imageUrl: 'https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&w=400',
        audioText: 'شكر العصفور لولو على لطفها وطار بسعادة إلى عشه',
        audioTextEn: 'The bird thanked Lulu for her kindness and flew happily to its nest'
      },
      {
        id: '8',
        text: 'شعرت لولو بالسعادة لأنها ساعدت صديقها الصغير',
        textEn: 'Lulu felt happy because she helped her little friend',
        imageUrl: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400',
        audioText: 'شعرت لولو بالسعادة لأنها ساعدت صديقها الصغير',
        audioTextEn: 'Lulu felt happy because she helped her little friend'
      }
    ],
    questions: [
      {
        id: 'q1',
        pageIndex: 2,
        question: 'كيف كان حال العصفور عندما وجدته لولو؟',
        questionEn: 'How was the bird when Lulu found it?',
        options: ['سعيد', 'مبلل ومرتجف', 'نائم', 'يطير'],
        optionsEn: ['Happy', 'Wet and shivering', 'Sleeping', 'Flying'],
        correctAnswer: 1
      },
      {
        id: 'q2',
        pageIndex: 4,
        question: 'أين أخذت لولو العصفور؟',
        questionEn: 'Where did Lulu take the bird?',
        options: ['إلى البيت', 'تحت الشجرة', 'إلى البحيرة', 'إلى السماء'],
        optionsEn: ['To the house', 'Under the tree', 'To the lake', 'To the sky'],
        correctAnswer: 1
      }
    ]
  }
];