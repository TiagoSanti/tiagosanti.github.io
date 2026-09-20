// gitprofile.config.pt.js

const config = {
  language: 'pt',
  profile: {
    name: 'Tiago Santi',
    bio: 'Pesquisador em Machine Learning | Mestrando em Ciência da Computação na UFMS | Engenheiro de Software',
    about:
      'Minha trajetória combina pesquisa em Machine Learning e desenvolvimento de software. No mestrado em Ciência da Computação da UFMS, com bolsa CAPES e atuação acadêmica junto ao Laboratório de Inteligência Artificial (LIA), investigo como redes neurais podem aprender novas classes sem perder conhecimento anterior. Meus interesses incluem Aprendizado Contínuo, aprendizado de representações e de métricas, Deep Learning e aplicações de IA apoiadas por Engenharia de Software.',
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
    manualProjects: [], // Display order; keep aligned with the English config.
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
    website: 'https://tiagosanti.github.io',
    phone: '+55 (67) 99699-6687',
    email: 'tiagosanti2009@gmail.com',
    lattes: 'https://lattes.cnpq.br/1032420798696234',
  },
  resume: {
    fileUrl: '', // URL vazia oculta o botão de download do currículo.
  },
  skillGroups: [
    {
      title: 'Machine Learning e Pesquisa',
      items: [
        'Pesquisa científica',
        'Aprendizado de máquina clássico',
        'Deep Learning e redes neurais',
        'Aprendizado contínuo',
        'Aprendizado incremental de classes',
        'Aprendizado de representações e métricas',
        'Aprendizado contrastivo',
      ],
    },
    {
      title: 'IA aplicada',
      items: [
        'Visão computacional: processamento de imagens, detecção de objetos (YOLOv5) e reconhecimento facial',
        'PLN: análise de sentimentos e classificação de textos',
        'LLMs: engenharia de prompt, fine-tuning e RAG',
      ],
    },
    {
      title: 'Python e Dados',
      items: [
        'Python',
        'PyTorch',
        'Hugging Face Transformers',
        'Rastreamento de experimentos com Weights & Biases',
        'pandas · NumPy · scikit-learn',
        'SQL',
        'Coleta, processamento de dados e ETL',
        'Análise e visualização de dados',
      ],
    },
    {
      title: 'Engenharia de Software',
      items: [
        'C · C# · Java · JavaScript · PHP',
        'APIs de backend com FastAPI',
        'Git e GitHub',
        'Docker',
        'Scrum e Kanban',
      ],
    },
    {
      title: 'Nuvem e Analytics',
      items: [
        'Google Cloud: Cloud Storage (GCS), BigQuery, Compute Engine e App Engine',
        'Looker Studio',
      ],
    },
    {
      title: 'Idiomas',
      items: ['Português — Nativo', 'Inglês — Avançado'],
    },
  ],
  experiences: [
    {
      company: 'LEDES - Laboratório de Engenharia de Software',
      position: 'Engenheiro de Inteligência Artificial - Bolsista',
      from: 'Fevereiro 2025',
      to: 'Presente',
      companyLink: 'https://www.facom.ufms.br/laboratorios/',
      description:
        'Aplicação de conceitos em inovação tecnológica e automação de processos na advocacia pública.',
    },
    {
      company:
        'Centro de Inovação SESI em Tecnologias para Saúde e Segurança do Trabalho',
      position: 'Bolsista Especialista em Desenvolvimento de Software',
      from: 'Setembro 2022',
      to: 'Dezembro 2022',
      companyLink: 'http://www.cis.sesims.com.br/',
    },
    {
      company:
        'Centro de Inovação SESI em Tecnologias para Saúde e Segurança do Trabalho',
      position: 'Estagiário em Desenvolvimento de Inteligência Artificial',
      from: 'Fevereiro 2022',
      to: 'Agosto 2022',
      companyLink: 'http://www.cis.sesims.com.br/',
    },
    {
      company: 'UFMS / CNPq',
      position: 'Bolsista PIBITI — Desenvolvimento Tecnológico e Inovação',
      from: 'Setembro 2021',
      to: 'Agosto 2022',
      description:
        'Pesquisa em Deep Learning e Visão Computacional para medição de nível d’água em córregos urbanos a partir de imagens. Orientação de José Marcato Junior; dedicação de 20 horas semanais.',
    },
  ],
  certifications: [
    {
      name: 'pantanal.dev — Onça Pintada: Data Science',
      body: 'UFMS | 80 horas. Pré-processamento, visualização, agrupamento de dados e detecção de fraude.',
      year: '17/06/2023 - 22/07/2023',
    },
    {
      name: 'pantanal.dev — Arara Azul: Machine Learning',
      body: 'UFMS | 40 horas. Redes neurais, PyTorch, transformers e classificação de textos.',
      year: '01/04/2023 - 20/05/2023',
    },
    {
      name: 'Certificado de Participação no CBSoft 2023 pela Sociedade Brasileira de Computação',
      body: 'Participação no XIV Congresso Brasileiro de Software: Teoria e Prática (CBSoft 2023). O evento ocorreu de 25 a 29 de setembro em Campo Grande - MS | 40 horas totais',
      year: 'Setembro 2023',
      link: 'https://github.com/TiagoSanti/tiagosanti.github.io/blob/main/public/pdf/XIV%20CBSoft%202023.pdf',
    },
    {
      name: 'C# Completo Programação Orientada a Objetos + Projetos',
      body: 'Instrutor Nelio Alves | 38 horas totais',
      year: 'Maio 2022',
      link: 'https://www.udemy.com/certificate/UC-f9d96d36-677f-4db4-b786-6320c65d23b2/',
    },
    {
      name: 'Bolsa de Desenvolvimento Tecnológico e Inovação (PIBITI)',
      body: 'Projeto "Deep Learning Aplicado à Medição do Nível da Água em Córregos Urbanos Usando Imagens" | Universidade Federal de Mato Grosso do Sul | 20 horas semanais',
      year: 'Setembro 2021 - Agosto 2022',
      link: 'https://github.com/TiagoSanti/tiagosanti.github.io/blob/main/public/pdf/PIBITI%20-%20Deep%20Learning.pdf',
    },
    {
      name: 'Redes Neurais Artificiais em Python',
      body: 'Instrutor Jones Granatyr, IA Expert Academy | 8,5 horas totais',
      year: 'Julho 2021',
      link: '/pdf/Artificial%20Neural%20Networks%20in%20Python.pdf',
    },
    {
      name: 'Mini Curso de Arduino',
      body: 'Desenvolvimento de Atividades de Orientação e Capacitação em Sistemas de Computação na Universidade Federal de Mato Grosso do Sul | 30 horas totais',
      year: 'Agosto 2018 - Julho 2019',
      link: 'https://github.com/TiagoSanti/tiagosanti.github.io/blob/main/public/pdf/Arduino%20Mini%20Course.pdf',
    },
    {
      name: 'Menção Honrosa Nível 3 - Olimpíada Brasileira de Matemática das Escolas Públicas',
      body: 'OBMEP 2018 | Menção honrosa no nível 3; listado entre os premiados de escolas privadas de Mato Grosso do Sul.',
      year: '2018',
      link: 'https://premiacao.obmep.org.br/2018/verRelatorioPremiadosMencao-MS.3.privada.do.htm',
    },
  ],
  education: [
    {
      institution: 'Universidade Federal de Mato Grosso do Sul',
      degree: 'Mestrado em Ciência da Computação',
      from: '2025',
      to: 'Presente',
      description:
        'Pesquisa em Aprendizado Contínuo e Aprendizado Incremental de Classes, com inferência agnóstica à tarefa. Bolsa CAPES; orientação de Edson Takashi Matsubara.',
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
      title:
        'Mestrado — Aprendizado Contínuo e Incremental de Classes | 2025 - Presente',
      description:
        'Minha pesquisa busca ampliar a capacidade de modelos de visão computacional de aprender novas classes sem esquecer as anteriores, reconhecendo todas as classes aprendidas sem receber a identidade da tarefa. Proponho e implemento a ANT (Avoid Non-essential Tuning), uma intervenção no aprendizado contrastivo que direciona ajustes a relações entre exemplos negativos próximos. Integrada ao TagFex, a proposta foi avaliada em CIFAR-100, Tiny-ImageNet e CUB-200. Nos resultados apresentados na qualificação, a variante ANT-FS-GR com RefDetach obteve ganhos de acurácia incremental média nos cinco protocolos avaliados.',
      details:
        'Contribuição: formulação e implementação de um termo auxiliar de margem sobre as similaridades negativas da InfoNCE, aplicado tanto ao aprendizado de representações da etapa atual quanto à destilação contrastiva do conhecimento anterior. Investigo referências globais ou por âncora, coberturas intra-view ou totalmente simétricas e o efeito de desacoplar a referência do cálculo de gradientes (RefDetach). A InfoNCE é preservada; a ANT acrescenta um sinal seletivo de ajuste.\n\nAvaliação experimental: cinco protocolos em três bases, com três seeds por configuração e 243 execuções utilizadas nas tabelas de resultados. A comparação mantém a arquitetura TagFex/ResNet-18 e inclui estudos de ablação, análise de acurácia incremental média, classificação por médias de exemplares (NME) e esquecimento. Configurações, seeds e logs são registrados para rastreabilidade.\n\nResultados da qualificação de 09/09/2026: ANT-FS-GR com RefDetach apresentou ganhos de +0,11 a +0,65 ponto percentual em acurácia incremental média frente ao baseline InfoNCE nos cinco protocolos. Em CUB-200 20–20, outra variante, ANT-IV-GR com RefDetach, alcançou +1,29 ponto percentual. Os valores são médias de três seeds. São resultados de uma pesquisa em andamento: a magnitude dos ganhos e o esquecimento variam entre protocolos; o ranking estatístico apresentado para quatro protocolos não estabelece superioridade significativa sobre o baseline.',
    },
    {
      title: '4banks — Ciência de Dados | pantanal.dev, 2023',
      description:
        'Atuação em desenvolvimento backend, análise de dados e DevOps em uma plataforma de análise de transações de cartão de crédito, voltada a equipes de detecção de fraudes em instituições financeiras. O projeto integra processamento, transformação, análise e visualização de dados em pipelines configuráveis. Desenvolvido no contexto do módulo Onça Pintada do pantanal.dev, no qual a equipe venceu o desafio. Resumo publicado no Integra UFMS 2023.',
      imageUrl: '',
      link: 'https://github.com/4Banks',
      details:
        'O </pantanal.dev> é uma iniciativa de formação intensiva em tecnologias de ponta, visando aprimorar talentos da região Centro-Oeste do Brasil e conectar esses profissionais a oportunidades de trabalho remoto no setor financeiro nacional. A Universidade Federal de Mato Grosso do Sul lidera o programa, em parceria com empresas renomadas como B3, PDtec, BLK e Neoway. Neste módulo, o desafio proposto foi detectar fraudes em cartões de crédito usando técnicas estatísticas e, com base nesses insights, criar um produto que contribuísse para a solução desse problema. Iniciamos com uma pesquisa de mercado aprofundada, buscando entender as necessidades, objetivos e o nível de satisfação dos profissionais do setor com as ferramentas disponíveis. Em seguida, realizamos dinâmicas para alinhar expectativas em relação ao projeto e moldar a visão do produto. Estabelecemos metas claras, atividades a serem realizadas, modelamos o processo de negócio e estabelecemos padrões rigorosos de desenvolvimento. O resultado foi o "4banks", uma plataforma de análise de dados projetada para atender cientistas de dados focados na detecção de fraudes em entidades financeiras. Através do 4banks, os usuários têm a capacidade de explorar dados de transações com cartão de crédito, obtendo desde análises gerais até insights mais profundos e específicos. Ao integrar sólidos princípios de Engenharia de Software em cada etapa do projeto, conseguimos entregar um excelente produto, de forma ágil e eficiente, alinhado com as melhores práticas do mercado. Esse compromisso com a qualidade foi crucial para alcançarmos a vitória neste módulo.',
    },
    {
      title: 'Tuiaia — Machine Learning e PLN | pantanal.dev, 2023',
      description:
        'Desenvolvimento do componente de Machine Learning de um projeto em equipe no módulo Arara Azul do pantanal.dev: coleta e preparação de notícias financeiras, ajuste fino de BERT multilíngue para classificação de sentimentos e rastreamento de experimentos com Weights & Biases. A plataforma apresenta os resultados em um dashboard. O Tuiaia recebeu menção honrosa.',
      imageUrl: '',
      link: 'https://github.com/Tuiaia/artificial-intelligence',
      details:
        'O </pantanal.dev> é uma iniciativa de formação intensiva em tecnologias de ponta, visando aprimorar talentos da região Centro-Oeste do Brasil e conectar esses profissionais a oportunidades de trabalho remoto no setor financeiro nacional. A Universidade Federal de Mato Grosso do Sul lidera o programa, em parceria com empresas renomadas como B3, PDtec, BLK e Neoway. No primeiro módulo, os participantes foram desafiados a empregar técnicas avançadas de Processamento de Linguagem Natural. O objetivo era treinar um classificador de sentimentos e criar um produto capaz de analisar o sentimento presente em notícias do mercado financeiro. Sob a orientação de um especialista da B3, minha equipe desenvolveu o "Tuiaia". Esta plataforma reúne informações de fontes financeiras respeitadas, como Google News, InfoMoney e Forbes, e avalia o sentimento das notícias, classificando-as como negativas, neutras ou positivas. Visando inovar e elevar o padrão do nosso produto, incorporamos a análise do grau de impacto das notícias (baixo, neutro, alto) e a duração estimada desse impacto (curto, neutro, longo). Além disso, projetamos um dashboard interativo que exibe os resultados das análises ao longo do tempo. Em reconhecimento à sua importância e inovação, o projeto recebeu Menção Honrosa.',
    },
    {
      title:
        'PIBITI — Visão Computacional para monitoramento de córregos | Set/2021 - Ago/2022',
      description:
        'Pesquisa PIBITI/CNPq sobre medição de nível d’água a partir de imagens de câmeras, sob orientação de José Marcato Junior. O trabalho utilizou YOLOv5 e imagens rotuladas para localizar o nível da água, explorando alternativas de monitoramento de baixo custo. Resumo publicado no Integra UFMS 2022.',
      imageUrl: '/object-detection.png',
      link: 'https://www.youtube.com/watch?v=-DES1Fr1B-c',
      details:
        "As inundações são um dos fenômenos naturais mais perigosos (WMO, 2011), causando danos econômicos, sociais e à saúde. A ocorrência desse fenômeno aumentou significativamente nos últimos 20 anos, relacionada à rápida urbanização e às mudanças climáticas que elevam o risco de inundações, tornando essencial o monitoramento dos cursos d'água urbanos. Este projeto propõe medir o nível da água em córregos urbanos usando câmeras de segurança e algoritmos de deep learning. Para atingir esse objetivo, redes neurais convolucionais, uma classe de redes neurais artificiais na área de deep learning, têm sido amplamente aplicadas no processamento de imagens com sucesso, e, portanto, foram a ferramenta essencial para os resultados obtidos até agora. Neste estudo, utilizamos o método de detecção de objetos YOLOv5, que permite resultados rápidos, o que é crucial em situações de inundação. Combinada com um banco de dados de imagens rotuladas com níveis de água, uma rede neural convolucional foi treinada para prever a localização gráfica da altura do curso d'água. Nas imagens de teste, foi alcançado um F-score de 0,996 considerando um AP50. Espera-se que os resultados possam ser utilizados para a construção de sistemas de monitoramento e alerta de inundações de baixo custo, dado que os equipamentos tradicionalmente utilizados para medição do nível da água requerem uma instalação arriscada localizada no curso d'água e também apresentam risco de perda desses dispositivos custosos durante um evento severo de inundação. Além disso, as imagens coletadas podem fornecer informações tanto quantitativas quanto qualitativas sobre o curso d'água monitorado e seu entorno para diversos fins, como defesa civil.",
    },
    {
      title: 'Online Evidence Grabber | 2024',
      description:
        'Coautor de software em Python para coleta e organização de evidências digitais disponíveis na Web, apoiando sua documentação e análise. Programa de computador registrado no INPI sob BR512024002737-8, com certificado expedido em 06/08/2024; titularidade da UFMS.',
    },
    {
      title: 'Sistema Operacional Academia Escola (SOAE) | 2024',
      description:
        'Coautor de um sistema web para gestão de processos acadêmicos e administrativos de uma academia escola, centralizando alunos, profissionais, atividades e atendimentos. Desenvolvido em JavaScript e PHP. Programa de computador registrado no INPI sob BR512024005131-7, com certificado expedido em 31/12/2024; titularidade da UFMS.',
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
