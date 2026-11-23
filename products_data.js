const fs = require('fs');
const path = require('path');

const products = [
  {
    slug: 'elevadores-de-passageiros',
    name: 'Elevadores de Passageiros',
    tagline: 'Conforto, tecnologia e segurança para edifícios residenciais, comerciais e industriais.',
    shortDesc: 'Conforto, segurança e design para edifícios residenciais e comerciais.',
    image: 'assets/products/elevadores-de-passageiros.jpg',
    imageAlt: 'Elevadores de Passageiros - Libra Elevadores',
    paragraphs: [
      'Os Elevadores de Passageiros da Libra Elevadores foram desenvolvidos para atender as necessidades de transporte de passageiros em Prédios Residenciais, Comerciais e Indústrias.',
      'Fabricamos elevadores convencionais (Eletromecânicos) e Hidráulicos, com ou sem casa de máquinas de acordo com a necessidade de cada cliente.',
      'Seguimos rigorosas normas técnicas de fabricação, com componentes selecionados de fornecedores líderes mundiais no mercado de Elevadores.',
      'A Libra Elevadores dispõe de vários modelos de cabina podendo ser em aço inox ou em chapa de aço carbono com pintura final na escolha do cliente.'
    ],
    features: [
      { label: 'Tipos', val: 'Normal ou Panorâmico' },
      { label: 'Capacidade', val: '200kg (03 passageiros) a 1500kg (20 passageiros)' },
      { label: 'Velocidade', val: '15 a 90m/min' },
      { label: 'Indicador de Posição', val: 'Indicador de posição e direção (IPD) na cabina e pavimentos' },
      { label: 'Economia e Controle', val: 'Quadro de comando com sistema VVVF que proporciona partidas e paradas suaves com economia de 40% no consumo de energia' },
      { label: 'Portas', val: 'Portas Automáticas' },
      { label: 'Segurança', val: 'Sistemas de segurança conforme normas vigentes' },
      { label: 'Personalização', val: 'Acabamentos e acessórios à escolha do cliente' }
    ],
    bullets: [
      'Normal ou Panorâmico',
      'Capacidade de 200kg a 1.500kg (até 20 passageiros)',
      'Velocidade de 15 a 90m/min com tecnologia VVVF',
      'Portas automáticas e cabines personalizadas'
    ],
    waText: 'Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20Elevadores%20de%20Passageiros.'
  },
  {
    slug: 'elevadores-de-maca-e-maca-leito',
    name: 'Elevadores de Maca e Maca-Leito',
    tagline: 'Projetados especialmente para clínicas, hospitais e consultórios com máxima suavidade e segurança.',
    shortDesc: 'Cabines amplas e partidas suaves para hospitais, clínicas e consultórios médicos.',
    image: 'assets/products/elevadores-de-maca-e-maca-leito.jpg',
    imageAlt: 'Elevadores de Maca e Maca-Leito - Libra Elevadores',
    paragraphs: [
      'Os Elevadores de Macas e Maca-Leito são ideais para clínicas, hospitais e consultórios médicos.',
      'As medidas das cabines são especiais, para atender o transporte de macas, cadeiras de rodas e além do transporte de pacientes, poderá também transportar passageiros normalmente.',
      'Os Elevadores de Macas e Maca-Leito são fabricados de acordo com os padrões estabelecidos pela ABNT (Associação Brasileira de Normas Técnicas) e as demais Normas exigidas por lei.'
    ],
    features: [
      { label: 'Acionamento', val: 'Elétrico ou hidráulico' },
      { label: 'Capacidade', val: '900kg a 1.500kg' },
      { label: 'Velocidade', val: '15 a 60m/min' },
      { label: 'Portas', val: 'Portas Automáticas com vãos de 90 a 120cm' },
      { label: 'Segurança', val: 'Sistema de segurança conforme normas vigentes' },
      { label: 'Quadro de Comando', val: 'Sistema VVVF proporcionando partidas e paradas suaves com economia de 40% no consumo de energia' },
      { label: 'Sistema Independente', val: 'Não atende chamados de pavimento em caso de uso emergencial do elevador' }
    ],
    bullets: [
      'Ideal para hospitais, clínicas e consultórios',
      'Cabine especial para transporte de macas e leitos',
      'Capacidade de 900kg a 1.500kg',
      'Sistema independente para emergências médicas'
    ],
    waText: 'Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20Elevadores%20de%20Maca%20e%20Maca-Leito.'
  },
  {
    slug: 'elevadores-residenciais',
    name: 'Elevadores Residenciais',
    tagline: 'Conforto, funcionalidade e sofisticação perfeitamente integrados à sua casa.',
    shortDesc: 'Soluções compactas, seguras e elegantes para casas e sobrados.',
    image: 'assets/products/elevadores-residenciais.jpg',
    imageAlt: 'Elevadores Residenciais - Libra Elevadores',
    paragraphs: [
      'Nossa linha de elevadores residenciais oferecem conforto, funcionalidade e segurança para moradores de casas e apartamentos com dois ou mais pavimentos.',
      'A Libra Elevadores desenvolve Elevadores Residenciais com acabamento de alta qualidade que se integram em qualquer ambiente.',
      'Seguimos rigorosas normas técnicas de fabricação, com componentes selecionados de fornecedores líderes mundiais no mercado de Elevadores.',
      'Atende todas as normas exigidas por lei (NBR 12892).'
    ],
    features: [
      { label: 'Capacidade', val: '325kg ou 03 passageiros' },
      { label: 'Velocidade', val: '12 a 20 m/min' },
      { label: 'Acionamento', val: 'Elétrico ou hidráulico' },
      { label: 'Segurança', val: 'Sistemas de segurança conforme normas vigentes' },
      { label: 'Portas', val: 'Portas automáticas' },
      { label: 'Indicador', val: 'Indicador de posição e direção (IPD) na cabina e pavimentos' },
      { label: 'Design', val: 'Cabina e botoeiras com design moderno' },
      { label: 'Consumo', val: 'Baixo consumo de energia' },
      { label: 'Personalização', val: 'Acabamento e acessórios à escolha do cliente' }
    ],
    bullets: [
      'Projeto sob medida para casas e sobrados',
      'Capacidade de 325kg (3 passageiros)',
      'Conforme norma ABNT NBR 12892',
      'Baixo consumo de energia e design sofisticado'
    ],
    waText: 'Ol%C3%A1!%20Tenho%20interesse%20em%20Elevadores%20Residenciais.'
  },
  {
    slug: 'elevadores-de-carga',
    name: 'Elevadores de Carga',
    tagline: 'Estrutura robusta e alta capacidade para transporte de cargas pesadas em indústrias e depósitos.',
    shortDesc: 'Robustez e alta capacidade para indústrias, comércios e depósitos.',
    image: 'assets/products/elevadores-de-carga.jpg',
    imageAlt: 'Elevadores de Carga - Libra Elevadores',
    paragraphs: [
      'Os Elevadores de Carga apresentam design moderno e estrutura robusta de alta qualidade, atendendo às necessidades do transporte de todo tipo de carga.',
      'Utilizado por indústrias e empresas em geral os Elevadores de Carga resistem às condições extremas de transporte vertical de cargas pesadas, sua capacidade e tamanho pode ser adaptado de acordo com a necessidade de cada cliente.'
    ],
    features: [
      { label: 'Acionamento', val: 'Elétrico ou hidráulico' },
      { label: 'Capacidade', val: '500kg a 5.000kg' },
      { label: 'Velocidade', val: '15 a 60m/min' },
      { label: 'Controle de Acesso', val: 'Controle de acesso de carga para zonas especiais' },
      { label: 'Quadro de Comando', val: 'Sistema VVVF proporcionando partidas e paradas suaves com economia de 40% no consumo de energia' },
      { label: 'Cabine', val: 'Cabine fechada com painéis metálicos em pintura eletrostática ou em inox escovado' },
      { label: 'Portas', val: 'Portas manuais tipo BUS ou automáticas' },
      { label: 'Botoeiras', val: 'Botoeiras robustas de alta resistência' },
      { label: 'Operação', val: 'Funcionamento suave e silencioso' },
      { label: 'Norma Técnica', val: 'Atende plenamente a norma NBR 14712' }
    ],
    bullets: [
      'Capacidade de 500kg até 5.000kg',
      'Cabine reforçada com pintura eletrostática ou inox',
      'Atende integralmente a norma NBR 14712',
      'Acionamento elétrico ou hidráulico'
    ],
    waText: 'Ol%C3%A1!%20Tenho%20interesse%20em%20Elevadores%20de%20Carga.'
  },
  {
    slug: 'plataformas-de-acessibilidade',
    name: 'Plataformas de Acessibilidade',
    tagline: 'Mobilidade com autonomia, segurança e total conformidade com a legislação de acessibilidade.',
    shortDesc: 'Mobilidade com autonomia, conforme as normas de acessibilidade.',
    image: 'assets/products/plataformas-de-acessibilidade.png',
    imageAlt: 'Plataformas de Acessibilidade - Libra Elevadores',
    paragraphs: [
      'Equipamento pode ser utilizado em Escolas, Órgãos Públicos, Edifícios Comerciais, Edifícios Residenciais, Indústrias, Hospitais, Clínicas, Shoppings, Museus e Aeroportos, na locomoção de cadeirantes, idosos, gestantes, pessoas com necessidades especiais.',
      'Desenvolvido com alta qualidade e segurança respeitando todas as normas da ABNT e legislações que rege o transporte vertical.'
    ],
    features: [
      { label: 'Acionamento', val: 'Elétrico ou hidráulico' },
      { label: 'Capacidade', val: '325kg' },
      { label: 'Velocidade', val: '6m/min' },
      { label: 'Cabinas', val: 'Cabinas abertas ou fechadas' },
      { label: 'Portas', val: 'Portas automáticas ou manuais' },
      { label: 'Conformidade', val: 'Normas ABNT e legislações vigentes de transporte vertical' }
    ],
    bullets: [
      'Para escolas, órgãos públicos, edifícios e clínicas',
      'Atendimento a cadeirantes, idosos e gestantes',
      'Capacidade de 325kg',
      'Opções de cabinas abertas ou fechadas'
    ],
    waText: 'Ol%C3%A1!%20Tenho%20interesse%20em%20Plataformas%20de%20Acessibilidade.'
  },
  {
    slug: 'elevadores-de-acessibilidade',
    name: 'Elevadores de Acessibilidade',
    tagline: 'Desenvolvidos para desníveis de até 12 metros, unindo praticidade, conformidade e inclusão.',
    shortDesc: 'Inclusão e segurança para todos os públicos com desníveis até 12 metros.',
    image: 'assets/products/elevadores-de-acessibilidade.jpeg',
    imageAlt: 'Elevadores de Acessibilidade - Libra Elevadores',
    paragraphs: [
      'São equipamentos desenvolvidos para desníveis de até 12 metros, ideal para locais públicos e empresas que buscam o atendimento exclusivo de acessibilidade atendendo todas as normas exigidas por lei (NBR 12892).',
      'Os Elevadores de Acessibilidade são fabricados com componentes selecionados de fornecedores líderes mundiais no mercado de Elevadores.'
    ],
    features: [
      { label: 'Capacidade', val: '325kg ou 03 passageiros' },
      { label: 'Desnível', val: 'Até 12 metros de altura' },
      { label: 'Velocidade', val: '12 a 20m/min' },
      { label: 'Acionamento', val: 'Elétrico ou Hidráulico' },
      { label: 'Portas de Pavimento', val: 'Portas automáticas de abertura lateral ou central' },
      { label: 'Porta da Cabina', val: 'Porta da cabina automática' },
      { label: 'Indicador', val: 'Indicador de posição e direção (IPD) na cabina e pavimentos' },
      { label: 'Acessórios', val: 'Acessórios à escolha do cliente' },
      { label: 'Norma Técnica', val: 'Conforme norma NBR 12892' }
    ],
    bullets: [
      'Desníveis de até 12 metros',
      'Capacidade de 325kg (3 passageiros)',
      'Portas automáticas de cabina e pavimento',
      'Atende integralmente a norma ABNT NBR 12892'
    ],
    waText: 'Ol%C3%A1!%20Tenho%20interesse%20em%20Elevadores%20de%20Acessibilidade.'
  }
];

module.exports = products;
console.log('Products definition loaded with', products.length, 'products');
