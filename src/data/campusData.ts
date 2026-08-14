export interface MenuItem {
  name: string;
  price: string;
}

export interface Restaurant {
  name: string;
  category: string;
  status: string;
  isOpen: boolean;
  logoText: string;
  prepTime: string;
  rating: string;
  items: MenuItem[];
}

export interface Campus {
  name: string;
  city: string;
  restaurants: Restaurant[];
}

export const campusData: Record<string, Campus> = {
  icesi: {
    name: "Universidad ICESI",
    city: "Cali",
    restaurants: [
      {
        name: "Sandwich Qbaño",
        category: "Sandwiches y Combos",
        status: "Abierto",
        isOpen: true,
        logoText: "QBAÑO",
        prepTime: "8-10 min",
        rating: "4.8",
        items: [
          { name: "Sándwich Especial Mediano", price: "$18.500" },
          { name: "Combo Pollo BBQ + Bebida", price: "$22.900" },
          { name: "Sándwich Roast Beef", price: "$19.900" }
        ]
      },
      {
        name: "Wonka ICESI",
        category: "Bowls y Maíz",
        status: "Abierto",
        isOpen: true,
        logoText: "WONKA",
        prepTime: "6-9 min",
        rating: "4.7",
        items: [
          { name: "Bowl Wonka Especial Desgranado", price: "$16.500" },
          { name: "Maíz Criollo con Queso Costeño", price: "$13.900" },
          { name: "Papas Rústicas Wonka", price: "$11.000" }
        ]
      },
      {
        name: "Café y Bakery Central",
        category: "Cafetería y Snacks",
        status: "Abierto",
        isOpen: true,
        logoText: "CAFÉ",
        prepTime: "4-6 min",
        rating: "4.9",
        items: [
          { name: "Capuchino Vainilla + Croissant", price: "$9.800" },
          { name: "Pandebono Caliente x3", price: "$6.500" }
        ]
      }
    ]
  },
  javeriana: {
    name: "Pontificia Univ. Javeriana Cali",
    city: "Cali",
    restaurants: [
      {
        name: "La Terraza Gourmet",
        category: "Almuerzos Ejecutivos y Bowls",
        status: "Abierto",
        isOpen: true,
        logoText: "TERRAZA",
        prepTime: "10-12 min",
        rating: "4.9",
        items: [
          { name: "Bowl Proteico Pechuga Grill", price: "$21.500" },
          { name: "Almuerzo del Día Completo", price: "$19.000" }
        ]
      },
      {
        name: "Sandwich Qbaño Javeriana",
        category: "Sandwiches Rápidos",
        status: "Abierto",
        isOpen: true,
        logoText: "QBAÑO",
        prepTime: "7-10 min",
        rating: "4.8",
        items: [
          { name: "Sándwich Pollo Apanado", price: "$17.900" },
          { name: "Combo Jamón y Queso", price: "$15.500" }
        ]
      },
      {
        name: "Kiosko Central Express",
        category: "Bebidas y Pastelería",
        status: "Abierto",
        isOpen: true,
        logoText: "KIOSKO",
        prepTime: "3-5 min",
        rating: "4.6",
        items: [
          { name: "Jugo Natural Frutos Rojos", price: "$7.500" },
          { name: "Empanada de Carne Artesanal x2", price: "$6.000" }
        ]
      }
    ]
  },
  lagoverde: {
    name: "Lago Verde",
    city: "Cali",
    restaurants: [
      {
        name: "Lago Verde Green Bowls",
        category: "Comida Saludable y Wraps",
        status: "Abierto",
        isOpen: true,
        logoText: "VERDE",
        prepTime: "8-11 min",
        rating: "4.9",
        items: [
          { name: "Wrap César Crispy", price: "$18.000" },
          { name: "Poke Bowl Salmón Fresco", price: "$24.500" }
        ]
      },
      {
        name: "Burger Station Campus",
        category: "Hamburguesas Artesanales",
        status: "Abierto",
        isOpen: true,
        logoText: "BURGER",
        prepTime: "12-15 min",
        rating: "4.8",
        items: [
          { name: "Smash Doble Queso + Papas", price: "$23.000" },
          { name: "Tender Box con Salsa Tártara", price: "$19.500" }
        ]
      }
    ]
  }
};
