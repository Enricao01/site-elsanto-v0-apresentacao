export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  badge?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  description?: string;
  items: MenuItem[];
};

export const RESTAURANT_INFO = {
  name: "El Santo Cocina Mexicana",
  phone: "+55 17 99643-7365",
  whatsapp: "5517996437365",
  ifoodLink: "https://www.ifood.com.br/delivery/sao-jose-do-rio-preto-sp/el-santo-cocina---burritos-quesadilla-e-tacos-vila-santo-antonio/be185ee8-e00d-4990-b2b5-ad72d06b1897",
  address: "R. Saldanha Marinho, 4011 - Vila Santa Cruz, São José do Rio Preto - SP, 15014-300",
  mapsLink: "https://maps.google.com/?q=R.+Saldanha+Marinho,+4011+-+Vila+Santa+Cruz,+São+José+do+Rio+Preto+-+SP,+15014-300",
  hours: {
    1: { label: "Segunda", hours: "Fechado", isOpen: false },
    2: { label: "Terça", hours: "Fechado", isOpen: false },
    3: { label: "Quarta", hours: "18:00–23:00", isOpen: true, open: 18, close: 23 },
    4: { label: "Quinta", hours: "18:00–23:00", isOpen: true, open: 18, close: 23 },
    5: { label: "Sexta", hours: "18:00–00:00", isOpen: true, open: 18, close: 24 },
    6: { label: "Sábado", hours: "18:00–00:00", isOpen: true, open: 18, close: 24 },
    0: { label: "Domingo", hours: "18:00–23:00", isOpen: true, open: 18, close: 23 },
  }
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "combos",
    title: "Combos",
    items: [
      { name: "Combo 3 em 1: 1 Burrito + Nachos + Quesadilla", description: "Nosso combo especial para quem ama a culinária mexicana. Nosso combo 3 em 1, para experimentar o que tem de melhor no el santo!", price: "120,88" },
      { name: "Combo Dose Dupla: 1 Burrito + 1 Quesadilla", description: "Nosso combo mais pedido. 1 delicioso burrito + 1 deliciosa quesadilla do el santo!", price: "101,78", badge: "Mais Pedido" },
      { name: "Combo Fome em Dobro: 2 Burritos Pulled Pork", description: "Esse é nosso combo matador de fome... 02 Burritos Guadalupe (Pulled pork) um sabor irresistível com precinho arrasador.", price: "86,90", badge: "25% OFF" },
    ]
  },
  {
    id: "burritos",
    title: "Burritos",
    items: [
      { name: "Burrito Pulled Pork", description: "O prato mais emblemático do cardápio mexicano, tortilla de trigo recheada com frijoles rojo (pasta de feijão vermelho condimentada), mix de queijos, alface americana, guacamole e Copa lombo marinada e defumada.", price: "49,90", badge: "Clássico" },
      { name: "Burrito de Frango", description: "O prato mais emblemático do cardápio mexicano, tortilla de trigo recheada com frijoles rojo (pasta de feijão vermelho condimentada), mix de queijos, alface americana, guacamole e frango.", price: "49,90" },
      { name: "Burrito El Santo - Brisket", description: "O prato mais emblemático do cardápio mexicano, tortilla de trigo recheada com frijoles rojo (pasta de feijão vermelho condimentada), mix de queijos, alface americana, guacamole e Ponta de peito defumada.", price: "49,90" },
      { name: "Hongos e Calabacita - Vegetariano", description: "Apresentando nossa versão vegetariana do clássico burrito: 'Hongos e Calabacita'. Uma tortilla de trigo suave e maleável, generosamente recheada com frijoles rojos, mix de cogumelos frescos refogados, abobrinha defumada, mix de queijos derretidos e guacamole caseiro.", price: "49,90", badge: "Vegetariano" },
    ]
  },
  {
    id: "burritos-compuestos",
    title: "Burritos Compuestos",
    description: "Com arroz amarillo",
    items: [
      { name: "Burrito Compuesto Brisket", description: "Burrito matador de fome!! Clássico do café da manhã californiano. Tortilla de trigo recheado com frijoles rojo, arroz amarillo (incrível arroz condimentado), mix de queijos, pico de gallo, guacamole e Ponta de peito defumada.", price: "49,90" },
      { name: "Burrito Compuesto de Frango", description: "Burrito matador de fome!! Clássico do café da manhã californiano. Tortilla de trigo recheado com frijoles rojo, arroz amarillo (incrível arroz condimentado), mix de queijos, pico de gallo, guacamole e frango.", price: "48,90" },
      { name: "Burrito Compuesto Pulled Pork", description: "Burrito matador de fome!! Clássico do café da manhã californiano. Tortilla de trigo recheado com frijoles rojo, arroz amarillo (incrível arroz condimentado), mix de queijos, pico de gallo, guacamole e copa lombo defumada.", price: "49,90" },
    ]
  },
  {
    id: "quesadillas",
    title: "Quesadillas",
    items: [
      { name: "Quesadilla Tradicional", description: "Tortillas de trigo recheada com mix de queijos derretendo, pico de gallo e mix de queijos.", price: "45,90" },
      { name: "Quesadilla de Brisket", description: "Tortillas de trigo recheada com mix de queijos derretendo e pico de gallo e brisket.", price: "47,90" },
      { name: "Quesadilla Pulled Pork", description: "Tortillas de trigo recheada com mix de queijos derretendo e pico de gallo e pulled pork.", price: "46,90" },
      { name: "Quesadilla de Frango", description: "Tortillas de trigo recheada com mix de queijos derretendo e pico de gallo e frango.", price: "46,90" },
      { name: "Quesadilla Hongos - Vegetariano", description: "Tortillas de trigo recheada com mix de queijos derretendo e pico de gallo e cogumelos.", price: "47,90", badge: "Vegetariano" },
    ]
  },
  {
    id: "tacos",
    title: "Tacos Soft",
    items: [
      { name: "Cochinita Pibil", description: "Celebração autêntica de Yucatán. Tortillas de milho frescas, generosamente cobertas com copa-lombo marinada com especiarias e defumada, com toque de pickles de cebola roxa. Serve 1 pessoa.", price: "42,90" },
      { name: "Campechano", description: "Fina tortilla de milho, coberta com mistura de brisket e linguiça suína defumadas, chicharon (torresmo crocante), mix de queijos e salsa calejera. Serve 1 pessoa.", price: "42,90" },
    ]
  },
  {
    id: "especialidades",
    title: "Especialidades Del Santo",
    items: [
      { name: "Nachos Vidal - 4 Pessoas", description: "Porção abundantemente generosa de frijoles vermelhos e brisket suculento, com pimentões vibrantes, cheddar cremoso e mix de queijos gratinados. Acompanha guacamole, sour cream e nachos. Serve 3 a 4 pessoas.", price: "109,90" },
      { name: "Nacho Vidalitto - 2 Pessoas", description: "Meia porção generosa do nosso Nacho Vidal. Uma explosão de sabor para quem deseja experimentar uma amostra do nosso melhor. Serve 2 pessoas.", price: "61,90" },
      { name: "Nachos (Porção Tradicional)", description: "Porção de nachos totopos, extremamente crocantes, acompanha sour cream e guacamole. Serve 1 pessoa.", price: "29,90" },
      { name: "La Costelita", description: "Costela suína defumada, extremamente macia, finalizada com barbecue de tamarindo e especiarias. Acompanha papas rústicas. Prato individual.", price: "59,90" },
      { name: "Chimichangas", description: "Tortilla de trigo recheada com doce de leite e banana. Frita e açucarada. Muy buena! Serve 1 pessoa.", price: "25,90", badge: "Sobremesa" },
    ]
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      { name: "Refrigerante Lata", description: "Coca-Cola, Guaraná, Sprite, Fanta.", price: "6,90" },
      { name: "Água Mineral", description: "Com ou sem gás.", price: "4,90" },
      { name: "Cerveja Long Neck", description: "Corona, Heineken, Stella Artois.", price: "12,90" },
      { name: "Margarita Tradicional", description: "Clássica margarita mexicana com tequila, licor de laranja e suco de limão.", price: "28,90" },
      { name: "Suco Natural", description: "Laranja, Limão, Abacaxi com Hortelã.", price: "9,90" }
    ]
  }
];

export const REVIEWS = [
  { name: "Jaqueline Mellim", text: "Experiência simplesmente maravilhosa..." },
  { name: "Juliana Donini", text: "Ambiente lindo, aconchegante..." },
  { name: "Celso Mendes", text: "Experiência incrível, atendimento excelente..." },
  { name: "Gabriel Dias Moreno", text: "Comida excelente e atendimento nota 11..." },
  { name: "Stephanie Souza", text: "Melhor mexicano da cidade..." },
  { name: "Nathalia Cortez", text: "Lugar incrível, atendimento perfeito..." },
  { name: "Jaqueline Ornellas", text: "Excelente experiência..." },
  { name: "Matheus Rodrigues Stefanini", text: "Melhor comida mexicana que já comi..." }
];
