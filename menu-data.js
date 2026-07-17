// Edita este archivo cuando cambien productos o precios.
// price puede ser un texto libre: "$53 / $58", "$65", "+$6", etc.
window.MENU_DATA = [
  {
    title: "Tómalo con café",
    tag: "Bebidas calientes/frías",
    category: "bebidas",
    items: [
      { name: "Espresso 1 oz", price: "$40" },
      { name: "Espresso 2 oz", price: "$45" },
      { name: "Macchiato", price: "$50" },
      { name: "Americano", price: "12 oz $50 · 16 oz $55" },
      { name: "Capuchino", price: "12 oz $53 · 16 oz $58" },
      { name: "Latte", price: "12 oz $53 · 16 oz $58" },
      { name: "Café moka", price: "12 oz $57 · 16 oz $62" },
      { name: "Aromalate menta", price: "12 oz $66 · 16 oz $71" },
      { name: "Capuchino sabor", price: "12 oz $68 · 16 oz $73", desc: "Caramelo, vainilla, rompope, crema irlandesa o amaretto" }
    ],
    note: "Extras: leche vegetal $25 · shot extra de café $25 · tómalo en las rocas +$6"
  },
  {
    title: "Café especial",
    tag: "Especialidades",
    category: "bebidas",
    items: [
      { name: "Afogato", price: "$65" },
      { name: "Caramelatte flan", price: "12 oz $68 · 16 oz $73" },
      { name: "Banana latte", price: "12 oz $68 · 16 oz $73" },
      { name: "Fresa latte", price: "12 oz $68 · 16 oz $73" },
      { name: "Cold brew", price: "16 oz $65" }
    ]
  },
  {
    title: "Tómalo sin café",
    tag: "Bebidas",
    category: "bebidas",
    items: [
      { name: "Chocolate aroma", price: "12 oz $60 · 16 oz $65" },
      { name: "Chocolate en agua", price: "12 oz $60 · 16 oz $65" },
      { name: "Chocolate amargo", price: "12 oz $60 · 16 oz $65" },
      { name: "Chocolate blanco", price: "12 oz $60 · 16 oz $65" },
      { name: "Chaí", price: "12 oz $60 · 16 oz $65" },
      { name: "Chaí en agua", price: "12 oz $60 · 16 oz $65" },
      { name: "Matcha", price: "12 oz $60 · 16 oz $65" },
      { name: "Vainilla", price: "12 oz $60 · 16 oz $65" },
      { name: "Caramelo", price: "12 oz $60 · 16 oz $65" },
      { name: "Galleta Oreo", price: "12 oz $60 · 16 oz $65" },
      { name: "Mazapán", price: "12 oz $60 · 16 oz $65" },
      { name: "Cajeta", price: "12 oz $60 · 16 oz $65" },
      { name: "Taro", price: "12 oz $60 · 16 oz $65" }
    ]
  },
  {
    title: "Tés y tisanas",
    tag: "Bebidas",
    category: "bebidas",
    items: [
      { name: "Jamaica", price: "12 oz $38 · 16 oz $43" },
      { name: "Té verde", price: "12 oz $38 · 16 oz $43" },
      { name: "Manzanilla", price: "12 oz $38 · 16 oz $43" },
      { name: "Hierbabuena", price: "12 oz $38 · 16 oz $43" },
      { name: "Manzana canela", price: "12 oz $38 · 16 oz $43" },
      { name: "Tisana frutos rojos", price: "12 oz $53 · 16 oz $58" },
      { name: "Tisana frutos verdes", price: "12 oz $53 · 16 oz $58" },
      { name: "Tisana frutos dorados", price: "12 oz $53 · 16 oz $58" },
      { name: "Tisana pasión rosa", price: "12 oz $53 · 16 oz $58" },
      { name: "Tisana moras", price: "12 oz $53 · 16 oz $58" }
    ]
  },
  {
    title: "Frappés",
    tag: "12 oz / 16 oz",
    category: "bebidas",
    items: [
      { name: "Frapuchino café", price: "$74 · $80" },
      { name: "Moka", price: "$74 · $80" },
      { name: "Chaí", price: "$74 · $80" },
      { name: "Matcha", price: "$74 · $80" },
      { name: "Caramelo", price: "$74 · $80" },
      { name: "Vainilla", price: "$74 · $80" },
      { name: "Galleta Oreo", price: "$74 · $80" },
      { name: "Taro", price: "$74 · $80" },
      { name: "Cajeta", price: "$74 · $80" },
      { name: "Chocolate blanco", price: "$74 · $80" },
      { name: "Chocolate aroma", price: "$74 · $80" },
      { name: "Fresas con crema", price: "$74 · $80" },
      { name: "Algodón de azúcar", price: "$74 · $80" },
      { name: "Calabaza", price: "$74 · $80" },
      { name: "Zarzamora / crema", price: "$74 · $80" }
    ],
    note: "Leche vegetal: $25"
  },
  {
    title: "Malteadas",
    tag: "16 oz",
    category: "bebidas",
    items: [
      { name: "Fresa", price: "$76" },
      { name: "Vainilla", price: "$76" },
      { name: "Chocolate", price: "$76" },
      { name: "Kit Kat", price: "$83" },
      { name: "Mazapán", price: "$83" },
      { name: "Milky Way", price: "$83" },
      { name: "Snickers", price: "$83" }
    ]
  },
  {
    title: "Smoothies",
    tag: "12 oz / 16 oz",
    category: "bebidas",
    items: [
      { name: "Mango", price: "$66 · $71" },
      { name: "Maracuyá", price: "$66 · $71" },
      { name: "Guanábana", price: "$66 · $71" },
      { name: "Limón", price: "$66 · $71" },
      { name: "Fresa", price: "$66 · $71" },
      { name: "Tamarindo", price: "$66 · $71" },
      { name: "Kiwi", price: "$66 · $71" },
      { name: "Moras", price: "$66 · $71" },
      { name: "Tamarindo chamoy", price: "$66 · $71" }
    ]
  },
  {
    title: "Otras bebidas y jugos",
    tag: "Bebidas",
    category: "bebidas",
    items: [
      { name: "Agua natural 500 ml", price: "$15" },
      { name: "Agua mineral 600 ml", price: "$26" },
      { name: "Sprite 355 ml", price: "$20" },
      { name: "Fanta 355 ml", price: "$20" },
      { name: "Coca-Cola 355 ml", price: "$20" },
      { name: "Coca-Cola 600 ml", price: "$30" },
      { name: "Limonada", price: "$45" },
      { name: "Naranjada", price: "$45" },
      { name: "Jugo de naranja", price: "$40" },
      { name: "Jugo de zanahoria", price: "$40" },
      { name: "Jugo de betabel", price: "$40" },
      { name: "Jugo de papaya", price: "$40" },
      { name: "Jugo de piña", price: "$40" },
      { name: "Jugo de melón", price: "$40" },
      { name: "Jugo combinado", price: "$50" }
    ]
  },
  {
    title: "Crepas dulces",
    tag: "Dulce",
    category: "postres",
    items: [
      { name: "Nutella", price: "$60" },
      { name: "Lechera", price: "$60" },
      { name: "Cajeta", price: "$60" },
      { name: "Mermelada fresa", price: "$60" },
      { name: "Mermelada zarzamora", price: "$60" },
      { name: "Mermelada chabacano", price: "$60" },
      { name: "Chocolate", price: "$60" },
      { name: "Queso Philadelphia", price: "$64" },
      { name: "Philadelphia / Nutella", price: "$79" },
      { name: "Philadelphia / mermelada", price: "$79" },
      { name: "Philadelphia / fruta", price: "$79" }
    ],
    note: "Ingrediente extra $15: fresa, zarzamora, durazno, plátano, manzana, nuez, mermelada, Nutella, cajeta, lechera, chocolate o miel."
  },
  {
    title: "Crepas saladas",
    tag: "Salado",
    category: "comida",
    items: [
      { name: "Queso manchego", price: "$65" },
      { name: "Queso mozzarella", price: "$65" },
      { name: "Jamón de pavo", price: "$65" },
      { name: "Champiñones", price: "$65" },
      { name: "Salsa italiana", price: "$65" },
      { name: "Queso Philadelphia", price: "$64" },
      { name: "Queso con jamón", price: "$85" },
      { name: "Queso / champiñones", price: "$85" },
      { name: "Champiñones / jamón", price: "$85" }
    ],
    note: "Ingrediente extra $20: queso manchego, queso mozzarella, jamón, salsa italiana, champiñones o piña."
  },
  {
    title: "Crepas especiales y postres",
    tag: "Antojo",
    category: "postres",
    items: [
      { name: "Crepa hawaiana", price: "$110" },
      { name: "Crepa pepperoni", price: "$110" },
      { name: "Crepa banana split", price: "$110" },
      { name: "Galleta grande orejita", price: "$14" },
      { name: "Galleta gde. chocolate", price: "$15" },
      { name: "Muffin", price: "$30" },
      { name: "Pay de limón", price: "$60" },
      { name: "Flan", price: "$60" },
      { name: "Cheesecake zarzamora", price: "$65" },
      { name: "Pastel de zanahoria", price: "$65" },
      { name: "Pastel de chocolate", price: "$65" },
      { name: "Waffles (1 ingrediente base)", price: "$70" },
      { name: "Hotcakes (1 ingrediente base)", price: "$70" },
      { name: "Mini hotcakes (1 ingrediente base)", price: "$70" }
    ]
  },
  {
    title: "Sándwiches y tortas",
    tag: "Comida",
    category: "comida",
    items: [
      { name: "Sándwich jamón", price: "$58" },
      { name: "Sándwich atún", price: "$68" },
      { name: "Sándwich pechuga asada", price: "$68" },
      { name: "Sándwich milanesa", price: "$68" },
      { name: "Club sándwich", price: "$90" },
      { name: "Torta jamón", price: "$65" },
      { name: "Torta salchicha", price: "$65" },
      { name: "Torta chilaquiles", price: "$65" },
      { name: "Torta pepperoni", price: "$70" },
      { name: "Torta hawaiana", price: "$70" },
      { name: "Torta milanesa", price: "$75" },
      { name: "Torta cubana", price: "$85" }
    ]
  },
  {
    title: "Ensaladas y hamburguesas",
    tag: "Comida",
    category: "comida",
    items: [
      { name: "Ensalada jamón", price: "$105" },
      { name: "Ensalada atún", price: "$110" },
      { name: "Ensalada pechuga asada", price: "$115" },
      { name: "Ensalada milanesa", price: "$115" },
      { name: "Ensalada vegana", price: "$105" },
      { name: "Hamburguesa clásica", price: "$110" },
      { name: "Hamburguesa pollo", price: "$110" },
      { name: "Hamburguesa hawaiana", price: "$125" },
      { name: "Hamburguesa doble", price: "$125" },
      { name: "Hamburguesa arrachera", price: "$125" }
    ],
    note: "Todas las hamburguesas incluyen 100 g de papas a la francesa."
  },
  {
    title: "Molletes gourmet y adicionales",
    tag: "Comida",
    category: "comida",
    items: [
      { name: "Frijoles / queso", price: "Sencillo $65 · Doble $125" },
      { name: "Carnes frías", price: "Sencillo $65 · Doble $125" },
      { name: "Pechuga asada", price: "Sencillo $65 · Doble $125" },
      { name: "Hawaiano", price: "Sencillo $65 · Doble $125" },
      { name: "Chorizo / jalapeño", price: "Sencillo $65 · Doble $125" },
      { name: "Ensalada de acompañamiento", price: "$35" },
      { name: "Papas a la francesa 200 g", price: "$50" }
    ]
  },
  {
    title: "Desayunos",
    tag: "Incluyen bebida",
    category: "desayunos",
    items: [
      { name: "Chilaquiles", price: "$125", desc: "Rojos o verdes. Incluye energético, té, café o jugo." },
      { name: "Chilaquiles / pollo", price: "$145", desc: "Con pechuga asada a la plancha. Incluye energético, té, café o jugo." },
      { name: "Chilaquiles / huevo", price: "$140", desc: "Con 1 huevo estrellado o revuelto. Incluye energético, té, café o jugo." },
      { name: "Huevos al gusto", price: "$125", desc: "Acompañados de pan integral, energético, té, café o jugo." },
      { name: "Waffles / hotcakes", price: "$125", desc: "Orden de 3 piezas con 1 ingrediente base, energético, té, café o jugo." },
      { name: "Molletes", price: "$125", desc: "Par de molletes con pico de gallo, energético, té, café o jugo." },
      { name: "Avocado toast", price: "$125", desc: "Con huevo de proteína, energético, té, café o jugo." },
      { name: "Enchiladas suizas", price: "$145", desc: "Orden de 4 enchiladas suizas, energético, té, café o jugo." }
    ]
  }
];
