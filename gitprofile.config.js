// gitprofile.config.js

const config = {
  language: 'en',
  profile: {
    name: 'Tiago Santi',
    displayName: 'Tiago C. Santi',
    location: 'Campo Grande, MS, Brazil',
    bio: 'Machine Learning Researcher | MSc Student in Computer Science at UFMS | Software Engineer',
    about:
      'My work combines Machine Learning research and software development. As a CAPES-funded MSc student in Computer Science at UFMS, working academically with the Artificial Intelligence Laboratory (LIA), I investigate how neural networks can learn new classes while retaining prior knowledge. My interests include Continual Learning, Representation Learning, Metric Learning, Deep Learning, and AI applications supported by Software Engineering.',
  },
  publications: [
    {
      title: 'BE T3CH: A INTELIGÊNCIA DO AMANHÃ NO CORAÇÃO DO PANTANAL',
      authors:
        'Vinicius Feitosa Gonçalves; Gabriel Paes Duarte Baltazar; Maria Fernanda Colombo; Kaê de Oliveira Budke; Wagner Rodrigues da Silva; Erfferson Jorge Felizardo Júnior; Rafael Tsutomu Jyoboji; Lourdes Oshiro Igarashi; Tiago Clarintino Santi; Graziela Santos de Araújo',
      year: '2024',
      page: '1579',
      link: 'https://integra.ufms.br/anais-2024/',
    },
    {
      title:
        '4BANKS: PLATAFORMA DE ANÁLISE DE DADOS PARA INSTITUIÇÕES FINANCEIRAS',
      authors:
        'Lourdes Oshiro Igarashi; Tiago Clarintino Santi; João Pedro Santos Vareiro; Fábio Huang; Mateus Patricio Mello; Awdren de Lima Fontão',
      year: '2023',
      page: '1417',
      link: 'https://integra.ufms.br/anais-2023/',
    },
    {
      title:
        'DEEP LEARNING APLICADO À MEDIÇÃO DE NÍVEL D’ÁGUA EM CÓRREGOS URBANOS A PARTIR DE IMAGENS',
      authors: 'Tiago Clarintino Santi; José Marcato Junior',
      year: '2022',
      page: '501',
      link: 'https://integra.ufms.br/anais-2022/',
    },
  ],
  github: {
    mode: 'automatic', // Use 'manual' to select up to five owner/repository names.
    manualProjects: [], // Display order; keep aligned with the Portuguese config.
    username: 'TiagoSanti', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['tiagosanti.github.io', 'TiagoSanti', 'uri-solutions'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'tiago-santi',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: 'tiagocsanti',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://tiagosanti.github.io',
    phone: '+55 (67) 99699-6687',
    email: 'tiagosanti2009@gmail.com',
    lattes: 'https://lattes.cnpq.br/1032420798696234',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skillGroups: [
    {
      title: 'Machine Learning & Research',
      items: [
        'Scientific Research',
        'Classical Machine Learning',
        'Deep Learning & Neural Networks',
        'Continual Learning',
        'Class-Incremental Learning',
        'Representation & Metric Learning',
        'Contrastive Learning',
      ],
    },
    {
      title: 'Applied AI',
      items: [
        'Computer Vision: image processing, object detection (YOLOv5), face recognition',
        'NLP: sentiment analysis and text classification',
        'LLMs: prompt engineering, fine-tuning and RAG',
      ],
    },
    {
      title: 'Python & Data',
      items: [
        'Python',
        'PyTorch',
        'Hugging Face Transformers',
        'Experiment tracking with Weights & Biases',
        'pandas · NumPy · scikit-learn',
        'SQL',
        'Data collection, processing and ETL',
        'Data analysis & visualization',
      ],
    },
    {
      title: 'Software Engineering',
      items: [
        'C · C# · Java · JavaScript · PHP',
        'Backend APIs with FastAPI',
        'Git & GitHub',
        'Docker',
        'Scrum & Kanban',
      ],
    },
    {
      title: 'Cloud & Analytics',
      items: [
        'Google Cloud: Cloud Storage (GCS), BigQuery, Compute Engine and App Engine',
        'Looker Studio',
      ],
    },
    {
      title: 'Languages',
      items: ['Portuguese — Native', 'English — Advanced'],
    },
  ],
  experiences: [
    {
      company: 'LEDES - Software Engineering Laboratory',
      position: 'Artificial Intelligence Engineer — Scholarship Holder',
      from: 'February 2025',
      to: 'July 2026',
      companyLink: 'https://www.facom.ufms.br/laboratorios/',
      description:
        'Applied technological innovation and process automation for public-sector legal services.',
    },
    {
      company:
        'SESI Innovation Center in Technologies for Health and Safety at Work',
      position: 'Software Development Specialist — Scholarship Holder',
      from: 'September 2022',
      to: 'December 2022',
      companyLink: 'http://www.cis.sesims.com.br/',
    },
    {
      company:
        'SESI Innovation Center in Technologies for Health and Safety at Work',
      position: 'Artificial Intelligence Development Intern',
      from: 'February 2022',
      to: 'August 2022',
      companyLink: 'http://www.cis.sesims.com.br/',
    },
    {
      company: 'UFMS / CNPq',
      position: 'PIBITI Scholarship — Technological Development and Innovation',
      from: 'September 2021',
      to: 'August 2022',
      description:
        'Deep Learning and Computer Vision research for image-based water-level measurement in urban streams. Advised by José Marcato Junior; 20 hours per week.',
    },
  ],
  certifications: [
    {
      name: 'pantanal.dev — Onça Pintada: Data Science',
      body: 'UFMS | 80 hours. Data preprocessing, visualization, clustering, and fraud detection.',
      year: 'June 17 - July 22, 2023',
    },
    {
      name: 'pantanal.dev — Arara Azul: Machine Learning',
      body: 'UFMS | 40 hours. Neural networks, PyTorch, transformers, and text classification.',
      year: 'April 1 - May 20, 2023',
    },
    {
      name: 'CBSoft 2023 — Participation',
      body: 'Participation in the XIV Brazilian Congress on Software: Theory and Practice (CBSoft 2023). The event took place from September 25th to 29th in Campo Grande - MS | 40 total hours',
      year: 'September 2023',
      link: 'https://github.com/TiagoSanti/tiagosanti.github.io/blob/main/public/pdf/XIV%20CBSoft%202023.pdf',
    },
    {
      name: 'Complete C# Object-Oriented Programming + Projects',
      body: 'Instructor: Nelio Alves | 38 total hours',
      year: 'May 2022',
      link: 'https://www.udemy.com/certificate/UC-f9d96d36-677f-4db4-b786-6320c65d23b2/',
    },
    {
      name: 'Scholarship in Technological Development and Innovation (PIBITI)',
      body: 'Project "Deep Learning Applied to Water Level Measurement in Urban Streams Using Images" | Federal University of Mato Grosso do Sul | 20 hours per week',
      year: 'September 2021 - August 2022',
      link: 'https://github.com/TiagoSanti/tiagosanti.github.io/blob/main/public/pdf/PIBITI%20-%20Deep%20Learning.pdf',
    },
    {
      name: 'Artificial Neural Networks in Python',
      body: 'Instructor: Jones Granatyr, IA Expert Academy | 8.5 total hours',
      year: 'July 2021',
      link: '/pdf/Artificial%20Neural%20Networks%20in%20Python.pdf',
    },
    {
      name: 'Arduino Mini Course',
      body: 'Development of Guidance and Training Activities in Computer Systems at Federal University of Mato Grosso do Sul | 30 total hours',
      year: 'August 2018 - July 2019',
      link: 'https://github.com/TiagoSanti/tiagosanti.github.io/blob/main/public/pdf/Arduino%20Mini%20Course.pdf',
    },
    {
      name: 'Honorable Mention Level 3 - Brazilian Public Schools Mathematics Olympiad',
      body: 'OBMEP 2018 | Level 3 honorable mention; listed among private-school award recipients in Mato Grosso do Sul.',
      year: '2018',
      link: 'https://premiacao.obmep.org.br/2018/verRelatorioPremiadosMencao-MS.3.privada.do.htm',
    },
  ],
  education: [
    {
      institution: 'Federal University of Mato Grosso do Sul',
      degree: "Master's in Computer Science",
      from: '2025',
      to: 'Present',
      description:
        'Research in Continual Learning and Class-Incremental Learning with task-agnostic inference. CAPES scholarship; advised by Edson Takashi Matsubara.',
    },
    {
      institution: 'Federal University of Mato Grosso do Sul',
      degree:
        'Bachelor’s Degree in Software Engineering | Academic average: 9.02/10.0',
      from: '2021',
      to: '2024',
    },
    {
      institution: 'Federal University of Mato Grosso do Sul',
      degree: 'Undergraduate Studies in Computer Engineering (not completed)',
      from: '2019',
      to: '2021',
    },
  ],
  externalProjects: [
    {
      id: 'msc_ant',
      title:
        'MSc Research — Continual and Class-Incremental Learning | 2025 - Present',
      description:
        'In applications that evolve over time, computer vision models need to learn new classes while retaining prior knowledge. My MSc research investigates this challenge in class-incremental learning, where a model recognizes all learned classes without task identity at inference time. I propose and implement ANT (Avoid Non-essential Tuning), a regularization term that selectively acts on relationships among negative examples in contrastive learning. Integrated into TagFex, the method is evaluated on three image datasets, combining mathematical formulation, experimentation, and ablation studies to investigate the balance between acquiring new knowledge and retaining what has already been learned.',
    },
    {
      id: '4banks',
      title: '4banks — Data Science | pantanal.dev, 2023',
      description:
        'Backend developer, data analyst, and DevOps contributor to a credit-card transaction data analysis platform for fraud-detection teams in financial institutions. The project combines data processing, transformation, analysis, and visualization through configurable pipelines. Developed in the pantanal.dev Onça Pintada module, where the team won the module challenge. An abstract was published in the Integra UFMS 2023 proceedings.',
      imageUrl: '',
      link: 'https://github.com/4Banks',
      details:
        '</pantanal.dev> is an intensive training initiative in cutting-edge technologies, aimed at enhancing talents from the central region of Brazil and connecting these professionals to remote work opportunities in the national financial sector. The Federal University of Mato Grosso do Sul leads the program, partnering with renowned companies such as B3, PDtec, BLK, and Neoway. In this module, the proposed challenge was to detect credit card fraud using statistical techniques and, based on these insights, create a product that would contribute to solving this issue. We began with an in-depth market research, seeking to understand the needs, objectives, and the satisfaction level of professionals in the sector with the available tools. Next, we conducted dynamics to align expectations regarding the project and shape the product vision. We set clear goals, activities to be carried out, modeled the business process, and established strict development standards. The result was "4banks", a data analysis platform designed to serve data scientists focused on detecting fraud in financial entities. Through 4banks, users have the ability to delve into credit card transaction data, obtaining everything from general analyses to deeper and more specific insights. By integrating solid Software Engineering principles at every stage of the project, we were able to deliver an excellent product, agilely and efficiently, aligned with the best market practices. This commitment to quality was crucial for us to achieve victory in this module.',
    },
    {
      id: 'tuiaia',
      title: 'Tuiaia — Machine Learning and NLP | pantanal.dev, 2023',
      description:
        'Developed the Machine Learning component of a team project in the pantanal.dev Arara Azul module: collected and prepared financial news, fine-tuned multilingual BERT for sentiment classification, and tracked experiments with Weights & Biases. The platform presents results in a dashboard. Tuiaia received an honorable mention.',
      imageUrl: '',
      link: 'https://github.com/Tuiaia/artificial-intelligence',
      details:
        '</pantanal.dev> is an intensive training initiative in cutting-edge technologies, aimed at enhancing talents from the central region of Brazil and connecting these professionals to remote work opportunities in the national financial sector. The Federal University of Mato Grosso do Sul leads the program, partnering with renowned companies such as B3, PDtec, BLK, and Neoway. In the first module, participants were challenged to employ advanced Natural Language Processing techniques. The goal was to train a sentiment classifier and create a product capable of analyzing the sentiment present in financial market news. Under the guidance of an expert from B3, my team developed "Tuiaia". This platform gathers information from esteemed financial sources, such as Google News, InfoMoney, and Forbes, and assesses the sentiment of the news, classifying them as negative, neutral, or positive. Aiming to innovate and elevate the standard of our product, we incorporated the analysis of the news\' impact degree (low, neutral, high) and the estimated duration of this impact (short, neutral, long). Additionally, we designed an interactive dashboard that displays the results of the analyses over time. In recognition of its importance and innovation, the project received an Honorable Mention.',
    },
    {
      id: 'pibiti',
      title:
        'PIBITI — Computer Vision for stream monitoring | Sep/2021 - Aug/2022',
      description:
        'PIBITI/CNPq research on image-based water-level measurement using cameras, advised by José Marcato Junior. The work used YOLOv5 and labeled images to locate the water level, exploring low-cost monitoring alternatives. An abstract was published in the Integra UFMS 2022 proceedings.',
      link: 'https://www.youtube.com/watch?v=-DES1Fr1B-c',
      details:
        "Flooding is one of the most dangerous natural phenomena (WMO, 2011), causing economic, social, and health damages. The occurrence of this phenomenon has significantly increased in the last 20 years, related to rapid urbanization and climate changes that heighten the risk of floods, thus making it essential to monitor urban watercourses. This project proposes measuring the water level in urban streams using security cameras and deep learning algorithms. To achieve this goal, convolutional neural networks, a class of artificial neural networks in the deep learning area, have been widely applied in image processing with success, and therefore were the essential tool for the results obtained so far. In this study, we used the YOLOv5 object detection method, which allows for quick results, which is crucial in flood situations. Combined with a database of images labeled with water levels, a convolutional neural network was trained to predict the graphical location of the watercourse's height. In the test images, an F-score of 0.996 was achieved considering an AP50. It is hoped that the results can be used for the construction of low-cost monitoring and flood warning systems, given that the equipment traditionally used for water level measurement requires a risky installation located in the watercourse and also presents a risk of losing these costly devices during a severe flooding event. Moreover, the collected images can provide both quantitative and qualitative information about the monitored watercourse and its surroundings for various purposes, such as civil defense.",
    },
    {
      id: 'online_evidence_grabber',
      title: 'Online Evidence Grabber | 2024',
      description:
        'Co-author of Python software for collecting and organizing digital evidence available on the Web to support documentation and analysis. Computer program registered with Brazil’s INPI under BR512024002737-8; certificate issued August 6, 2024. UFMS holds the registration.',
    },
    {
      id: 'soae',
      title: 'Sistema Operacional Academia Escola (SOAE) | 2024',
      description:
        'Co-author of a web system for academic and administrative management at a teaching gym, bringing together student, staff, activity, and service information. Developed in JavaScript and PHP. Computer program registered with Brazil’s INPI under BR512024005131-7; certificate issued December 31, 2024. UFMS holds the registration.',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-J6XLXSX2JZ', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'forest',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> | Object icons created by <a class="text-primary" href="https://www.flaticon.com/free-icons/object" title="object icons"> juicy_fish - Flaticon</a>`,
};

export default config;
