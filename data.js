var users = {
    'lp': {
        name: 'LUCAS DO PRADO PINTO',
        period: '10',
        expire: '20/12/2023',
        ra: '1828746',
        photo: 'lp'
    },
    'gd': {
        name: 'GUSTAVO DE ALMEIDA DUARTE',
        period: '9',
        expire: '31/12/2023',
        ra: '1882196',
        photo: 'gd'
    },
    'ls': {
        name: 'LEONARDO B. LEITE DA SILVA',
        period: '9',
        expire: '31/12/2023',
        ra: '1885189',
        photo: 'ls'
    }
}

var allGrade = [
    [
        1,
        [
            [
                "EC31A",
                "Algorítmos 1"
            ],
            [
                "EC31B",
                "Organização de Computadores"
            ],
            [
                "EC31C",
                "Física Geral 1"
            ],
            [
                "EC31D",
                "Física Experimental 1"
            ],
            [
                "EC31E",
                "Introdução à Engenharia de Computação"
            ],
            [
                "EC31F",
                "Cálculo Diferencial e Integral 1"
            ],
            [
                "EC31G",
                "Geometria Analítica e Àlgebra Linear"
            ],
            [
                "ENADE-I",
                "ENADE INGRESSANTES"
            ]
        ]
    ],
    [
        2,
        [
            [
                "CE35B",
                "INGLÊS INSTRUMENTAL"
            ],
            [
                "EC32A",
                "Ciências Humanas 1"
            ],
            [
                "EC32B",
                "Cálculo Diferencial e Integral 2"
            ],
            [
                "EC32C",
                "Probabilidade e Estatística"
            ],
            [
                "EC32D",
                "Algorítmos 2"
            ],
            [
                "EC32E",
                "Desenho Técnico"
            ],
            [
                "EC32F",
                "Física Geral 2"
            ],
            [
                "EC32G",
                "Física Experimental 2"
            ],
            [
                "EC32H",
                "Química"
            ],
            [
                "EC32I",
                "Psicologia do Trabalho"
            ],
            [
                "EC33A",
                "Ciências Humanas 2"
            ],
            [
                "EC34A",
                "Ciências Humanas 3"
            ],
            [
                "ES34A",
                "FILOSOFIA DA CIENCIA E DA TECNOLOGIA"
            ],
            [
                "ES61C",
                "A PRESENÇA AFRICANA NO BRASIL - TECNOLOGIA E HUMANISMO"
            ],
            [
                "ES61D",
                "HISTORIA DA TÉCNICA E DA TECNOLOGIA"
            ],
            [
                "ES61E",
                "LIDERANÇA E GERENCIAMENTO"
            ],
            [
                "ES61F",
                "Relações Humanas"
            ],
            [
                "ES62A",
                "FUNDAMENTOS DA ÉTICA"
            ],
            [
                "ES63A",
                "TECNOLOGIA E SOCIEDADE"
            ],
            [
                "ES64A",
                "SOCIEDADE E POLITICA NO BRASIL"
            ],
            [
                "LI52A",
                "Libras 1"
            ],
            [
                "LI52B",
                "Libras 2"
            ]
        ]
    ],
    [
        3,
        [
            [
                "EC33B",
                "Cálculo Diferencial e Integral 3"
            ],
            [
                "EC33C",
                "Equações Diferenciais"
            ],
            [
                "EC33D",
                "Estrutura de Dados"
            ],
            [
                "EC33E",
                "Programação Orientada a Objetos"
            ],
            [
                "EC33F",
                "Física Geral 3"
            ],
            [
                "EC33G",
                "Física Experimental 3"
            ],
            [
                "EC33H",
                "Mecânica dos Sólidos"
            ]
        ]
    ],
    [
        4,
        [
            [
                "EC34B",
                "Métodos de Matemática Aplicada"
            ],
            [
                "EC34C",
                "Análise de Algorítmos"
            ],
            [
                "EC34D",
                "Banco de Dados 1"
            ],
            [
                "EC34E",
                "Análise e Projeto Orientado a Objetos"
            ],
            [
                "EC34F",
                "Análise de Circuitos Elétricos"
            ],
            [
                "EC34G",
                "Matemática Discreta"
            ],
            [
                "EC34H",
                "Comunicação Oral e Escrita"
            ]
        ]
    ],
    [
        5,
        [
            [
                "EC35A",
                "Teoria da Computação"
            ],
            [
                "EC35B",
                "Banco de Dados 2"
            ],
            [
                "EC35C",
                "Sistemas de Controle"
            ],
            [
                "EC35D",
                "Arquitetura de Computadores"
            ],
            [
                "EC35E",
                "Eletrônica Digital"
            ],
            [
                "EC35F",
                "Transmissão de Dados"
            ],
            [
                "EC35G",
                "Eletrônica Geral 1"
            ]
        ]
    ],
    [
        6,
        [
            [
                "EC36A",
                "Compiladores"
            ],
            [
                "EC36B",
                "Engenharia de Software"
            ],
            [
                "EC36C",
                "Sistemas Operacionais"
            ],
            [
                "EC36D",
                "Sistemas microcontrolados"
            ],
            [
                "EC36E",
                "Ciências do Ambiente"
            ],
            [
                "EC36F",
                "Eletrônica Geral 2"
            ],
            [
                "EC36G",
                "Oficina de Integração"
            ],
            [
                "EC36H",
                "Fenômenos de Transporte"
            ]
        ]
    ],
    [
        7,
        [
            [
                "EC37A",
                "Empreendedorismo"
            ],
            [
                "EC37B",
                "Interação Humano-Computador"
            ],
            [
                "EC37C",
                "Inteligência Artificial"
            ],
            [
                "EC37D",
                "Gerenciamento de Projeto de Software"
            ],
            [
                "EC37E",
                "Redes de Computadores"
            ],
            [
                "EC37F",
                "Sistemas Embarcados"
            ],
            [
                "EC37G",
                "Processamento Digital de Sinais"
            ],
            [
                "ET39G",
                "REDES INDUSTRIAIS"
            ],
            [
                "ET68A",
                "AUTOMAÇÃO"
            ],
            [
                "IF60S",
                "ESTAGIO CURRICULAR SUPERVISIONADO"
            ],
            [
                "IF68A",
                "MODELAGEM DE SISTEMAS DINAMICOS"
            ],
            [
                "IF68Q",
                "REALIDADE VIRTUAL"
            ],
            [
                "IF68X",
                "Desenvolvimento de Jogos"
            ],
            [
                "IF68Z",
                "Game Design"
            ],
            [
                "IF69A",
                "MULTIMIDIA"
            ],
            [
                "IF69D",
                "CONTROLE DE PROCESSOS"
            ],
            [
                "IF69E",
                "ROBÓTICA"
            ],
            [
                "IF69F",
                "INSTRUMENTAÇÃO INDUSTRIAL"
            ],
            [
                "IF69G",
                "SISTEMAS A EVENTOS DISCRETOS"
            ],
            [
                "IF69H",
                "FONTES ALTERNATIVAS DE ENERGIA"
            ],
            [
                "IF69I",
                "PROGRAMAÇÃO PARA APLICAÇÕES COMERCIAIS"
            ],
            [
                "IF69J",
                "QUALIDADE DE SOFTWARE"
            ],
            [
                "IF69K",
                "ARQUITETURA DE SOFTWARE"
            ],
            [
                "IF69L",
                "TESTE E VALIDAÇÃO DE SOFTWARE"
            ],
            [
                "IF69M",
                "METODOLOGIAS ÁGEIS DE DESENVOLVIMENTO DE SOFTWARE"
            ],
            [
                "IF69N",
                "TÓPICOS EM ENGENHARIA DE SOFTWARE"
            ],
            [
                "IF69O",
                "COMPUTAÇÃO GRÁFICA"
            ],
            [
                "IF69P",
                "PROCESSAMENTO DE IMAGENS"
            ],
            [
                "IF69R",
                "TÓPICOS EM PROGRAMAÇÃO DE SISTEMAS"
            ],
            [
                "IF69S",
                "PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS"
            ],
            [
                "IF69T",
                "Mineração de Dados"
            ],
            [
                "IF69U",
                "Reconhecimento de Padrões"
            ],
            [
                "IF69V",
                "Internet das Coisas"
            ],
            [
                "IF69X",
                "Gerenciamento de Projetos para Competição"
            ],
            [
                "OC31A",
                "Tópicos em Computação Evolutiva"
            ],
            [
                "OC31B",
                "Introdução a Banco de Dados para Biologia"
            ],
            [
                "OC31C",
                "Introdução a Programação para Bioinformática"
            ],
            [
                "OC31D",
                "Experimentação em Computação"
            ],
            [
                "OC31E",
                "Tópicos Avançados em Gerenciamento de Projeto Software"
            ],
            [
                "OC31F",
                "Tópicos Avançados em Requisitos de Software"
            ],
            [
                "OC31G",
                "Tópicos Avançados em Teste de Software"
            ],
            [
                "OC31H",
                "Tópicos Avançados em Processo de Produção de Software"
            ],
            [
                "OP74N",
                "Servo-acionamentos Industriais"
            ],
            [
                "OP75E",
                "Supervisão de Processos"
            ]
        ]
    ],
    [
        8,
        [
            [
                "EC38A",
                "Economia"
            ],
            [
                "EC38B",
                "Programação para Web"
            ],
            [
                "EC38C",
                "Sistemas Distribuídos"
            ],
            [
                "EC38D",
                "Segurança e Auditoria de Sistemas"
            ],
            [
                "EC38E",
                "Metodologia de Pesquisa"
            ],
            [
                "IF67E",
                "LOGICA RECONFIGURAVEL"
            ],
            [
                "MA7AV",
                "Tópicos Matemáticos para Engenheiros"
            ],
            [
                "OP81A",
                "Gerenciamento de Projetos para Competiçoes nos Projetos Pedagógicos"
            ]
        ]
    ],
    [
        9,
        [
            [
                "EC38F",
                "Trabalho de Conclusão de Curso 1"
            ]
        ]
    ],
    [
        10,
        [
            [
                "EC39A",
                "Trabalho de Conclusão de Curso 2"
            ],
            [
                "ENADE-C",
                "ENADE CONCLUINTES"
            ],
            [
                "IF60T",
                "ATIVIDADES COMPLEMENTARES"
            ]
        ]
    ]
]