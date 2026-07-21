export const ARTICLE_LINK = "https://er10.kz/read/sozdaj-biznes-budushhego-kak-kazahstancam-postroit-uspeshnyj-startap-s-globalnym-potencialom/";

export const ALMAU_LINK = "https://almau.edu.kz/";
export const SOCIAL_LINKS = {
  linkm: "https://lnkmx.my/entrepreneurshipalmau",
  facebook: "https://www.facebook.com/entrepreneurship.almau/",
  tiktok: "https://www.tiktok.com/@entrepreneurship.almau",
  youtube: "https://www.youtube.com/@entrepreneurshipinnovation2846",
  instagram: "https://www.instagram.com/entrepreneurship.almau/",
  linkedin: "https://www.linkedin.com/company/institute-entrepreneurship-innovation/",
} as const;

export const WHATSAPP_LINK =
  "https://wa.me/77067066521?text=Здравствуйте!%20Хочу%20узнать%20подробнее%20о%20поступлении%20в%20Институт%20предпринимательства%20AlmaU.";
export const INSTAGRAM_LINK = "https://www.instagram.com/entrepreneurship.almau/";
export const INSTAGRAM_HANDLE = "@entrepreneurship.almau";

export const NAV_ITEMS = [
  { label: "О нас", href: "#about" },
  { label: "Программы", href: "#programs" },
  { label: "Проекты", href: "#projects" },
  { label: "Студенты", href: "#students" },
  { label: "FAQ", href: "#faq" },
  { label: "Instagram", href: "#instagram" },
] as const;

export const HERO_BADGES = [
  "Learning by doing",
  "Startup ecosystem",
  "Business cases",
  "International opportunities",
  "Entrepreneurial community",
] as const;

export const ABOUT = {
  title: "Мы учим видеть возможности там, где другие видят проблемы",
  text: "Institute for Entrepreneurship AlmaU — это сообщество инновационных предпринимателей, где студенты учатся превращать идеи в действия, запускать проекты, развивать бизнес-мышление и создавать ценность для рынка.",
  tracks: [
    {
      title: "Academic Track",
      text: "Развивает академические программы, образовательные траектории и отслеживает прогресс студентов.",
    },
    {
      title: "Development Track",
      text: "Создаёт предпринимательское сообщество в университете и стране, развивает студенческие стартапы и открывает новые возможности для студентов.",
    },
  ],
} as const;

export const WHY_US = [
  {
    title: "Преподаватели-практики",
    text: "Реальные предприниматели, основатели бизнесов, владельцы компаний и менеджеры индустрии.",
  },
  {
    title: "Learning-by-doing",
    text: "Проекты, кейсы, бизнес-завтраки, экскурсии, стартапы, работа с реальными задачами.",
  },
  {
    title: "Learning-by-creating-value",
    text: "Обучение вокруг создания ценности: продуктов, услуг, стартапов, соцпроектов.",
  },
  {
    title: "Карьера с первого курса",
    text: "Студенты уже во время учёбы работают в бизнесах и запускают проекты.",
  },
  {
    title: "Сильная предпринимательская среда",
    text: "Окружение людей, готовых запускать, пробовать, ошибаться, расти.",
  },
  {
    title: "Международный и практический фокус",
    text: "Стажировки, международные возможности, партнёрские проекты.",
  },
] as const;

export const PROGRAMS = [
  {
    id: "international-business",
    title: "International Business",
    level: "Бакалавриат",
    slugan: "Создавай будущее глобального бизнеса",
    description:
      "Программа готовит экспертов с глобальным мышлением, пониманием стратегий управления, роста и масштабирования компаний, а также навыками межкультурных коммуникаций и переговоров.",
    degree:
      'Bachelor of Business and Management in EP "International Business" · 3 года · английский язык',
    tracks: [
      "International Business Financing",
      "International Business Strategy & Management",
    ],
    careers: [
      "Международный бизнес",
      "Внешнеэкономическая деятельность",
      "Консалтинг",
      "Аудит",
      "Инвестиционный и банковский сектор",
      "Международные организации",
    ],
    advantages: [
      "Стажировки в CMC, ERG, MOST Ventures, FMCG и консалтинговых компаниях",
      "Международные стажировки в Babson College, Bangkok University, EAE Business School",
      "Стартап-акселераторы и международные проекты",
      "Преподаватели-эксперты из FMCG, Big 3 & 4",
      "Обучение на английском",
    ],
  },
  {
    id: "digital-commerce",
    title: "Digital Commerce",
    level: "Бакалавриат",
    slugan: "Запускай, управляй и масштабируй цифровой бизнес",
    description:
      "e-commerce, маркетплейсы, цифровой маркетинг, аналитика данных, ИИ, логистика, клиентский опыт, предпринимательство.",
    degree: 'Бакалавр экономики и бизнеса по специальности "Digital Commerce" · 3 года · русский язык',
    tracks: [
      "Digital Commerce & Retail Strategy",
      "Platform Innovation & Digital Venture",
    ],
    careers: [
      "E-commerce Manager",
      "Marketplace Development Manager",
      "Digital Product Manager",
      "Digital Marketing Manager",
      "E-commerce Analyst",
      "CRM Manager",
      "CX Manager",
      "Digital Transformation Specialist",
      "Руководитель e-commerce",
      "Основатель цифрового бизнеса",
    ],
    advantages: [],
  },
  {
    id: "bae",
    title: "Business Administration in Entrepreneurship (BAE)",
    level: "Бакалавриат",
    slugan: "Стань агентом перемен",
    description:
      "BAE формирует предпринимательское мышление и mindset роста для запуска стартапа, предпринимательского продукта или карьеры в крупных компаниях.",
    degree:
      'Бакалавр экономики и бизнеса "Бизнес администрирование в области предпринимательства" · 3 года · русский и английский',
    tracks: ["Семейный бизнес", "Управление продуктами и проектами"],
    careers: [
      "Основатель бизнеса",
      "Владелец семейного бизнеса",
      "Эксперт по развитию бизнеса",
      "Финансовый аналитик",
      "Топ-менеджер",
      "Инновационный предприниматель",
      "Product Manager",
      "Project Manager",
    ],
    advantages: [],
  },
  {
    id: "creative-industries",
    title: "Управление в креативных индустриях",
    level: "Магистратура",
    slugan: "Создавай будущее креативной экономики",
    description:
      "Программа объединяет управленческие компетенции и экспертизу в креативных индустриях, готовит профессионалов с креативным мышлением, проектными навыками и предпринимательским подходом.",
    degree:
      'MA in Business and Management "Управление в креативных индустриях" · 2 года · русский язык',
    tracks: [
      "Культурный бизнес и культурное предпринимательство",
      "Креативные индустрии",
    ],
    careers: [
      "Руководитель проектов в креативных и культурных индустриях",
      "Основатель креативного бизнеса",
      "Бизнес-стратег",
      "Консультант",
      "Менеджер культурных инициатив",
      "Продюсер",
      "Менеджер культурных учреждений",
      "Эксперт по развитию креативных кластеров",
    ],
    advantages: [
      "Модульная система обучения",
      "Преподаватели с международным академическим опытом",
      "Реальные кейсы и проекты",
      "Партнёрская сеть AlmaU",
      "Диплом международного образца",
      "Международные стажировки и экспертные сессии",
    ],
  },
] as const;

export const PROJECTS = [
  {
    title: "Startup Night AlmaU",
    text: "Университетский projectathon: 12 часов, команда, наставники, готовый проект",
  },
  {
    title: "Crack It",
    text: "Городской кейс-чемпионат: команды решают бизнес-задачи казахстанских и международных компаний",
  },
  {
    title: "Бизнес-завтраки",
    text: "Неформальные встречи с предпринимателями, инфлюенсерами и экспертами",
  },
  {
    title: "Экскурсии в компании",
    text: "Студенты видят бизнес изнутри, получают практический опыт",
  },
] as const;

export const STUDENT_FACTS = [
  "Стажировки в Казахювелир и KUSTO Group",
  "Офферы от Google, Salem Social Media, BTS Digital",
  "Обучение в лучших университетах мира",
  "Запуск стартапов и социальных проектов",
] as const;

export const STUDENT_NUMBERS = [
  { value: 4, suffix: "+", label: "Программы" },
  { value: 15, suffix: "+", label: "Проектов в год" },
  { value: 500, suffix: "+", label: "Студентов" },
  { value: 30, suffix: "+", label: "Партнёров" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Алмас Толеубаев",
    text: "Программа изменила моё мышление. Я понял, что в университете можно не только учиться, но и параллельно делать проекты, общаться с предпринимателями и получать практические навыки. Благодаря программе я уже с 3 курса работаю в ChocoFamily.",
  },
  {
    name: "Каирбай Данат",
    text: "Я выбрал BAE, потому что хотел реализоваться как предприниматель. Здесь учат не только бизнесу, но и умению извлекать жизненные уроки, не бояться ошибок и развивать нетворкинг.",
  },
  {
    name: "Мухаммаджон Азонов",
    text: "BAE — это не академическая специальность. Это образ жизни. Здесь учат смотреть шире на мир, выходить из зоны комфорта и не бояться падений.",
  },
  {
    name: "Толеген Жанел",
    text: "BAE — лучший выбор для тех, кто видит во всём возможности, не боится рисковать и хочет постоянно развиваться.",
  },
  {
    name: "Булат Тагиев",
    text: "Программа подходит разносторонним лидерам, которые стремятся к развитию и всегда находятся в движении.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Какие программы предлагает Институт предпринимательства?",
    answer: "Мы предлагаем 3 программы бакалавриата — International Business, Digital Commerce, Business Administration in Entrepreneurship (BAE) — и 1 магистерскую программу «Управление в креативных индустриях». Все программы ориентированы на практику и предпринимательское мышление.",
  },
  {
    question: "Как поступить в Институт предпринимательства AlmaU?",
    answer: "Для поступления необходимо подать заявку через приёмную комиссию AlmaU, предоставить результаты ЕНТ или международных экзаменов (SAT, IELTS/TOEFL для англоязычных программ) и пройти собеседование. Свяжитесь с нами в WhatsApp для подробной консультации.",
  },
  {
    question: "Есть ли бюджетные места или гранты?",
    answer: "Да, AlmaU предоставляет государственные гранты и образовательные кредиты. Также доступны скидки при раннем поступлении и внутренние гранты университета для талантливых абитуриентов.",
  },
  {
    question: "На каком языке проходят обучение?",
    answer: "Программа International Business полностью на английском языке. BAE — на русском и английском. Digital Commerce и магистратура «Управление в креативных индустриях» — на русском языке.",
  },
  {
    question: "Какие возможности для стажировок и карьеры?",
    answer: "Студенты проходят стажировки в CMC, ERG, MOST Ventures, KUSTO Group, Казахювелир и других компаниях. Выпускники получают офферы от Google, Salem Social Media, BTS Digital и строят карьеру в международных и казахстанских компаниях.",
  },
  {
    question: "Можно ли совмещать учёбу с работой или стартапом?",
    answer: "Да, наш подход Learning-by-doing и Learning-by-creating-value предполагает, что студенты с первого курса работают над реальными проектами, запускают стартапы и параллельно строят карьеру. Программы построены так, чтобы давать максимум практики.",
  },
] as const;

export const PARTNERS_LIST = [
  "CMC", "ERG", "MOST Ventures", "KUSTO Group", "ChocoFamily", "Salem Social Media",
] as const;

export const FOOTER_LINKS = [
  { label: "О нас", href: "#about" },
  { label: "Программы", href: "#programs" },
  { label: "Проекты", href: "#projects" },
  { label: "Студенты", href: "#students" },
  { label: "FAQ", href: "#faq" },
  { label: "Instagram", href: "#instagram" },
] as const;

export const FOOTER_CONTACTS = {
  address: "г. Алматы, ул. Розыбакиева, 227",
  phone: "+7 (706) 706-65-21",
  email: "entrepreneurship@almau.edu.kz",
} as const;
