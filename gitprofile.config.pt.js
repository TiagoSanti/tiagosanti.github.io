// gitprofile.config.pt.js

const config = {
  github: {
    username: 'TiagoSanti',
    sortBy: 'stars',
    limit: 8,
    exclude: {
      forks: false,
      projects: ['tiagosanti.github.io', 'TiagoSanti', 'uri-solutions'],
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
    website: 'tiagosanti.github.io',
    phone: '+55 (67) 99699-6687',
    email: 'tiagosanti2009@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1G5ZiywkY32xk43mkpnILHanXmXsKp72v/view?usp=sharing',
  },
  skills: [
    'Inglês - Avançado',
    'Português - Nativo',
    'Python - Ciência de Dados & AM (Pandas | NumPy | Scikit-learn | PyTorch | FastAPI)',
    'Desenvolvimento de Software - C# | C | Java | JavaScript',
    'Banco de Dados & Linguagens de Consulta - SQL',
    'Controle de Versão & Colaboração - Git | GitHub',
    'DevOps & Containerização - Docker',
    'Gestão de Projetos - Scrum | Kanban',
    'Inteligência Artificial & Aprendizado de Máquina - AM Clássico | Aprendizado Profundo | Redes Neurais',
    'Modelos de Linguagem Grandes (LLM) - Engenharia de Prompt | Fine-tuning | Sistemas RAG',
    'Visão Computacional - Detecção de Objetos | Reconhecimento Facial | Processamento de Imagens',
    'Processamento de Linguagem Natural - Análise de Sentimentos | Classificação de Texto',
    'Engenharia de Dados - Coleta | Processamento | Análise | ETL',
    'Computação em Nuvem - Google Cloud Platform (GCP)',
    'Serviços em Nuvem - GCS | BigQuery | Looker Studio | Compute Engine | App Engine',
  ],
  experiences: [
    {
      company: 'Laboratórios de Engenharia de Software e Inteligência Artificial',
      position: 'Bolsista Desenvolvedor de Inteligência Artificial',
      from: 'Março 2025',
      to: 'Presente',
      companyLink: 'https://ufms.br/',
    },
    {
      company: 'Centro de Inovação SESI em Tecnologias para Saúde e Segurança do Trabalho',
      position: 'Bolsista Especialista em Desenvolvimento de Software',
      from: 'Setembro 2022',
      to: 'Dezembro 2022',
      companyLink: 'http://www.cis.sesims.com.br/',
    },
    {
      company: 'Centro de Inovação SESI em Tecnologias para Saúde e Segurança do Trabalho',
      position: 'Estagiário em Desenvolvimento de Inteligência Artificial',
      from: 'Fevereiro 2022',
      to: 'Agosto 2022',
      companyLink: 'http://www.cis.sesims.com.br/',
    },
  ],
  certifications: [
    {
      name: 'Certificado de Participação no CBSoft 2023 pela Sociedade Brasileira de Computação',
      body: 'Participação no XIV Congresso Brasileiro de Software: Teoria e Prática (CBSoft 2023). O evento ocorreu de 25 a 29 de setembro em Campo Grande - MS | 40 horas totais',
      year: 'Setembro 2023',
      link: 'https://github.com/TiagoSanti/tiagosanti.github.io/blob/main/public/pdf/XIV%20CBSoft%202023.pdf'
    },
    {
      name: 'C# Completo Programação Orientada a Objetos + Projetos',
      body: 'Instrutor Nelio Alves | 38 horas totais',
      year: 'Maio 2022',
      link: 'https://www.udemy.com/certificate/UC-dbde52cc-9a5e-49a7-a4d5-b3c3eed256a7/'
    },
    {
      name: 'Bolsa de Desenvolvimento Tecnológico e Inovação (PIBITI)',
      body: 'Projeto "Deep Learning Aplicado à Medição do Nível da Água em Córregos Urbanos Usando Imagens" | Universidade Federal de Mato Grosso do Sul | 1.040 horas totais',
      year: 'Julho 2021 - Agosto 2022',
      link: 'https://github.com/TiagoSanti/tiagosanti.github.io/blob/main/public/pdf/PIBITI%20-%20Deep%20Learning.pdf'
    },
    {
      name: 'Redes Neurais Artificiais em Python',
      body: 'Instrutor Jones Granatyr, IA Expert Academy | 8,5 horas totais',
      year: 'Julho 2021',
      link: 'https://www.udemy.com/certificate/UC-dbde52cc-9a5e-49a7-a4d5-b3c3eed256a7/'
    },
    {
      name: 'Mini Curso de Arduino',
      body: 'Desenvolvimento de Atividades de Orientação e Capacitação em Sistemas de Computação na Universidade Federal de Mato Grosso do Sul | 30 horas totais',
      year: 'Julho 2019',
      link: 'https://github.com/TiagoSanti/tiagosanti.github.io/blob/main/public/pdf/Arduino%20Mini%20Course.pdf'
    },
    {
      name: 'Menção Honrosa Nível 3 - Olimpíada Brasileira de Matemática das Escolas Públicas',
      body: 'Ministério da Educação, Tecnologia e Inovação',
      year: 'Dezembro 2018',
      link: 'http://premiacao.obmep.org.br/2018/verRelatorioPremiadosMencao-MS.3.privada.do.htm'
    },
  ],
  education: [
    {
      institution: 'Universidade Federal de Mato Grosso do Sul',
      degree: 'Mestrado em Ciência da Computação',
      from: '2025',
      to: 'Presente',
    },
    {
      institution: 'Universidade Federal de Mato Grosso do Sul',
      degree: 'Bacharelado em Engenharia de Software | CR: 9,02/10,0',
      from: '2021',
      to: '2024',
    },
    {
      institution: 'Universidade Federal de Mato Grosso do Sul',
      degree: 'Bacharelado em Engenharia da Computação',
      from: '2019',
      to: '2021 | interrompido',
    },
  ],
  externalProjects: [
    {
      title: '</pantanal.dev> - Módulo de Ciência de Dados | Jun/2023 - Set/2023',
      description:
        'O </pantanal.dev> é uma iniciativa de formação intensiva em tecnologias de ponta, visando aprimorar talentos da região Centro-Oeste do Brasil e conectar esses profissionais a oportunidades de trabalho remoto no setor financeiro nacional. A Universidade Federal de Mato Grosso do Sul lidera o programa, em parceria com empresas renomadas como B3, PDtec, BLK e Neoway. Neste módulo, o desafio proposto foi detectar fraudes em cartões de crédito usando técnicas estatísticas e, com base nesses insights, criar um produto que contribuísse para a solução desse problema. Iniciamos com uma pesquisa de mercado aprofundada, buscando entender as necessidades, objetivos e o nível de satisfação dos profissionais do setor com as ferramentas disponíveis. Em seguida, realizamos dinâmicas para alinhar expectativas em relação ao projeto e moldar a visão do produto. Estabelecemos metas claras, atividades a serem realizadas, modelamos o processo de negócio e estabelecemos padrões rigorosos de desenvolvimento. O resultado foi o "4banks", uma plataforma de análise de dados projetada para atender cientistas de dados focados na detecção de fraudes em entidades financeiras. Através do 4banks, os usuários têm a capacidade de explorar dados de transações com cartão de crédito, obtendo desde análises gerais até insights mais profundos e específicos. Ao integrar sólidos princípios de Engenharia de Software em cada etapa do projeto, conseguimos entregar um excelente produto, de forma ágil e eficiente, alinhado com as melhores práticas do mercado. Esse compromisso com a qualidade foi crucial para alcançarmos a vitória neste módulo.',
      imageUrl: '',
      link: 'https://github.com/4Banks',
    },
    {
      title: '</pantanal.dev> - Módulo de Aprendizado de Máquina | Abr/2023 - Jun/2023',
      description:
        'O </pantanal.dev> é uma iniciativa de formação intensiva em tecnologias de ponta, visando aprimorar talentos da região Centro-Oeste do Brasil e conectar esses profissionais a oportunidades de trabalho remoto no setor financeiro nacional. A Universidade Federal de Mato Grosso do Sul lidera o programa, em parceria com empresas renomadas como B3, PDtec, BLK e Neoway. No primeiro módulo, os participantes foram desafiados a empregar técnicas avançadas de Processamento de Linguagem Natural. O objetivo era treinar um classificador de sentimentos e criar um produto capaz de analisar o sentimento presente em notícias do mercado financeiro. Sob a orientação de um especialista da B3, minha equipe desenvolveu o "Tuiaia". Esta plataforma reúne informações de fontes financeiras respeitadas, como Google News, InfoMoney e Forbes, e avalia o sentimento das notícias, classificando-as como negativas, neutras ou positivas. Visando inovar e elevar o padrão do nosso produto, incorporamos a análise do grau de impacto das notícias (baixo, neutro, alto) e a duração estimada desse impacto (curto, neutro, longo). Além disso, projetamos um dashboard interativo que exibe os resultados das análises ao longo do tempo. Em reconhecimento à sua importância e inovação, o projeto recebeu Menção Honrosa.',
      imageUrl: '',
      link: 'https://github.com/Tuiaia',
    },
    {
      title: 'Iniciação Científica - Deep Learning Aplicado à Medição do Nível da Água em Córregos Urbanos Usando Imagens | Jul/2021 - Ago/2022',
      description:
        'As inundações são um dos fenômenos naturais mais perigosos (WMO, 2011), causando danos econômicos, sociais e à saúde. A ocorrência desse fenômeno aumentou significativamente nos últimos 20 anos, relacionada à rápida urbanização e às mudanças climáticas que elevam o risco de inundações, tornando essencial o monitoramento dos cursos d\'água urbanos. Este projeto propõe medir o nível da água em córregos urbanos usando câmeras de segurança e algoritmos de deep learning. Para atingir esse objetivo, redes neurais convolucionais, uma classe de redes neurais artificiais na área de deep learning, têm sido amplamente aplicadas no processamento de imagens com sucesso, e, portanto, foram a ferramenta essencial para os resultados obtidos até agora. Neste estudo, utilizamos o método de detecção de objetos YOLOv5, que permite resultados rápidos, o que é crucial em situações de inundação. Combinada com um banco de dados de imagens rotuladas com níveis de água, uma rede neural convolucional foi treinada para prever a localização gráfica da altura do curso d\'água. Nas imagens de teste, foi alcançado um F-score de 0,996 considerando um AP50. Espera-se que os resultados possam ser utilizados para a construção de sistemas de monitoramento e alerta de inundações de baixo custo, dado que os equipamentos tradicionalmente utilizados para medição do nível da água requerem uma instalação arriscada localizada no curso d\'água e também apresentam risco de perda desses dispositivos custosos durante um evento severo de inundação. Além disso, as imagens coletadas podem fornecer informações tanto quantitativas quanto qualitativas sobre o curso d\'água monitorado e seu entorno para diversos fins, como defesa civil.',
      imageUrl: '/object-detection.png',
      link: 'https://www.youtube.com/watch?v=-DES1Fr1B-c',
    },
  ],
  blog: {
    source: '',
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: 'G-J6XLXSX2JZ',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'forest',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    hideAvatarRing: false,
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
    customTheme: {
      primary: '#10B981',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  footer: `Feito com <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> | Ícones de objetos criados por <a class="text-primary" href="https://www.flaticon.com/free-icons/object" title="object icons"> juicy_fish - Flaticon</a>`,
};

export default config; 