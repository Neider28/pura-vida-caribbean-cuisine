export type SiteLanguage = 'es' | 'en'

export type MenuCategory =
  | 'dinners'
  | 'entrees'
  | 'sides'
  | 'soups'
  | 'vegetarian'
  | 'drinks'
  | 'desserts'
  | 'catering'

type SiteContent = {
  localeLabel: string
  restaurantName: string
  slogan: string
  nav: Array<{ label: string; href: string }>
  ui: {
    language: string
    callNow: string
    orderOnline: string
    menuLabel: string
    categoriesLabel: string
    seeMore: string
    availableInStore: string
    lunchSpecials: string
    closed: string
    open: string
    getDirections: string
    socialTitle: string
    reviewsTitle: string
    pickupTitle: string
    paymentsTitle: string
    hoursTitle: string
    contactTitle: string
    mapTitle: string
  }
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
    badges: string[]
  }
  highlights: {
    eyebrow: string
    title: string
    cards: Array<{ title: string; description: string }>
    categories: Array<{ name: string; description: string }>
  }
  about: {
    eyebrow: string
    title: string
    story: string[]
    cuisinesTitle: string
    cuisines: string
    differenceTitle: string
    difference: string
  }
  menu: {
    eyebrow: string
    title: string
    description: string
    categories: Array<{ key: MenuCategory; label: string }>
    items: Array<{
      category: MenuCategory
      name: string
      description: string
      price: string
      image?: string
    }>
  }
  gallery: {
    eyebrow: string
    title: string
    description: string
    items: Array<{ title: string; description: string; image: string }>
  }
  location: {
    eyebrow: string
    title: string
    address: string
    hours: string[]
    lunchSpecials: string
    phone: string
    email: string
    pickup: string
    payments: string
    mapEmbedUrl: string
  }
  reviews: {
    eyebrow: string
    title: string
    description: string
    items: Array<{ source: string; author: string; text: string }>
  }
  footer: {
    summary: string
    rights: string
  }
}

export const siteContent: Record<SiteLanguage, SiteContent> = {
  es: {
    localeLabel: 'Español',
    restaurantName: 'Pura Vida Caribbean Cuisine',
    slogan: 'Sabor caribeño auténtico',
    nav: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
      { label: 'Menú', href: '#menu' },
      { label: 'Galería', href: '#galeria' },
      { label: 'Ubicación', href: '#ubicacion' },
      { label: 'Reseñas', href: '#resenas' },
    ],
    ui: {
      language: 'Idioma',
      callNow: 'Llamar ahora',
      orderOnline: 'Pedir en línea',
      menuLabel: 'Menú',
      categoriesLabel: 'Categorías',
      seeMore: 'Ver detalles',
      availableInStore: 'Disponible en restaurante y apps',
      lunchSpecials: 'Lunch Specials',
      closed: 'Cerrado',
      open: 'Abierto',
      getDirections: 'Cómo llegar',
      socialTitle: 'Síguenos',
      reviewsTitle: 'Reseñas destacadas',
      pickupTitle: 'Pick up',
      paymentsTitle: 'Métodos de pago',
      hoursTitle: 'Horarios',
      contactTitle: 'Contacto',
      mapTitle: 'Mapa',
    },
    hero: {
      eyebrow: 'Cocina caribeña y costarricense',
      title: 'Pura Vida Caribbean Cuisine',
      description:
        'Sabor caribeño auténtico con platos preparados con amor, sazones de casa y una experiencia cercana para quienes extrañan un pedacito de su tierra.',
      primaryCta: 'Ver menú',
      secondaryCta: 'Ver ubicación',
      badges: [
        'Se habla inglés y español',
        'Lunch Specials de 11:30 a. m. a 1:30 p. m.',
        'Abierto de Lunes a Sábado, de 10:00 a. m. a 8:00 p. m.',
      ],
    },
    highlights: {
      eyebrow: 'Lo que encontrarás',
      title: 'Un espacio sencillo, cálido y lleno de identidad tropical',
      cards: [
        {
          title: 'Cocina con alma y sabor casero',
          description:
            'Cada plato nace con sazones caribeños, tradición familiar y el deseo de hacerte sentir en casa.',
        },
        {
          title: 'Raíces de Costa Rica y Jamaica',
          description:
            'Una propuesta que mezcla sabores auténticos costarricenses, caribeños y otras recetas llenas de color.',
        },
        {
          title: 'Atención bilingüe cálida y cercana',
          description:
            'Atendemos en inglés y español para que cada visita sea fácil, cercana y clara.',
        },
      ],
      categories: [
        {
          name: 'Almuerzo',
          description: 'Especiales rápidos y sabrosos para el mediodía.',
        },
        {
          name: 'Cena',
          description: 'Platos abundantes para compartir o disfrutar con calma.',
        },
        {
          name: 'Bebidas',
          description: 'Refrescos y sabores tropicales para acompañar tu comida.',
        },
        {
          name: 'Postres',
          description: 'Un cierre dulce con inspiración caribeña.',
        },
      ],
    },
    about: {
      eyebrow: 'Sobre Nosotros',
      title: 'Una historia de amor, legado y cocina hecha con el corazón',
      story: [
        'Nuestra historia comienza el día en que una pareja descubrió que llevaba el verdadero sazón en sus manos. Unidos por su pasión por la cocina, una costarricense y un jamaiquino decidieron compartir con el mundo los sabores auténticos que los representaban.',
        'En un país distinto, pero con un mismo sueño: crecer haciendo lo que más amaban, cocinar. Con esfuerzo, amor y dedicación, fueron construyendo algo especial en cada plato.',
        'Hoy, aunque ella ya no está físicamente y acompaña desde el cielo, su esencia vive en cada receta. Seguimos de pie, honrando su legado y cocinando con el mismo amor de siempre.',
        'Este camino continúa también en honor a Geraldine Pinnock, cuya luz y pasión siguen siendo parte de cada uno de nuestros sabores.',
      ],
      cuisinesTitle: 'Qué tipo de comida ofrecemos',
      cuisines: 'Comida caribeña, costarricense y mucho más.',
      differenceTitle: 'Qué nos hace diferentes',
      difference:
        'Cocinamos con amor para que en cada plato sientas un pedacito de tu tierra en tu mesa.',
    },
    menu: {
      eyebrow: 'Menú',
      title: 'Menú completo con platos diarios, acompañamientos y catering',
      description:
        'Explora entradas, cenas, sopas, bebidas, postres y opciones de catering con precios claros y categorías más organizadas.',
      categories: [
        { key: 'dinners', label: 'Cenas' },
        { key: 'entrees', label: 'Entradas' },
        { key: 'sides', label: 'Acompañamientos' },
        { key: 'soups', label: 'Sopas' },
        { key: 'vegetarian', label: 'Vegetarianos' },
        { key: 'drinks', label: 'Bebidas' },
        { key: 'desserts', label: 'Postres' },
        { key: 'catering', label: 'Catering' },
      ],
      items: [
        {
          category: 'dinners',
          name: 'Jerk Chicken',
          description:
            'Pollo al estilo jerk con sazón caribeña y sabor ahumado.',
          price: '$16.99',
          image: '/images/Gallery/jerk-chicken.jpeg',
        },
        {
          category: 'dinners',
          name: 'Curry Chicken',
          description:
            'Pollo guisado con curry tradicional y salsa de sabor profundo.',
          price: '$16.98',
          image: '/images/Gallery/curry-chicken.jpeg',
        },
        {
          category: 'dinners',
          name: 'Curry Goat',
          description:
            'Chivo al curry con especias aromáticas y cocción lenta.',
          price: '$22.99',
          image: '/images/Gallery/curry-goat.jpeg',
        },
        {
          category: 'dinners',
          name: 'Oxtail Dinner',
          description:
            'Rabo cocinado lentamente hasta quedar suave y lleno de sabor.',
          price: '$22.99',
          image: '/images/Gallery/oxtail.jpeg',
        },
        {
          category: 'dinners',
          name: 'Jerk Wings',
          description:
            'Alitas jerk con un equilibrio de picante, humo y notas dulces.',
          price: '$14.99',
          image: '/images/Gallery/jerk-wings.jpeg',
        },
        {
          category: 'dinners',
          name: 'Casadi Tico',
          description:
            'Plato completo estilo casado con acompañamientos tradicionales.',
          price: '$19.99',
        },
        {
          category: 'dinners',
          name: 'Pollo Caribeño',
          description:
            'Chicken in Caribbean sauce con sazón casera y mucho sabor.',
          price: '$17.99',
          image: '/images/Gallery/jerk-chicken.jpeg',
        },
        {
          category: 'dinners',
          name: 'Fajitas de Res',
          description:
            'Fajitas de res bien sazonadas y servidas al momento.',
          price: '$18.99',
        },
        {
          category: 'dinners',
          name: 'Filete de Pescado',
          description:
            'Filete de pescado con sazón de la casa y acompañamientos.',
          price: '$21.50',
        },
        {
          category: 'dinners',
          name: 'Canasta Dinner',
          description:
            'Canastas servidas como cena completa y llenas de sabor.',
          price: '$19.50',
        },
        {
          category: 'dinners',
          name: 'Pargo Entero Small',
          description:
            'Whole snapper en tamaño pequeño, bien sazonado y frito.',
          price: '$34.99',
        },
        {
          category: 'dinners',
          name: 'Pargo Entero Large',
          description:
            'Whole snapper en tamaño grande para compartir.',
          price: '$44.99',
        },
        {
          category: 'dinners',
          name: 'Bistec Encebollado',
          description:
            'Steak with onions con sazón casera y mucho sabor.',
          price: '$17.99',
        },
        {
          category: 'dinners',
          name: 'Pork Chop or Chicken Chop',
          description:
            'Escoge entre pork chop o chicken chop con acompañamientos.',
          price: '$17.99',
        },
        {
          category: 'dinners',
          name: 'Bochinche de Casado',
          description:
            'Bochinche de casado con spaghetti costarricense.',
          price: '$19.99',
        },
        {
          category: 'dinners',
          name: 'Quesadilla Dinner',
          description:
            'Quesadilla completa para la cena, preparada al momento.',
          price: '$14.99',
        },
        {
          category: 'dinners',
          name: 'Burrito Dinner',
          description:
            'Burrito servido como plato fuerte para la cena.',
          price: '$15.99',
        },
        {
          category: 'dinners',
          name: 'Taco Dinner (3)',
          description:
            'Taco dinner con tu proteína favorita.',
          price: '$13.50',
        },
        {
          category: 'entrees',
          name: 'Chalupa de Pollo',
          description: 'Chicken chalupa preparada al momento.',
          price: '$14.99',
        },
        {
          category: 'entrees',
          name: 'Chalupa de Res',
          description: 'Steak chalupa con sazón casera.',
          price: '$14.99',
        },
        {
          category: 'entrees',
          name: 'Chalupa de Camarón',
          description: 'Shrimp chalupa con toque caribeño.',
          price: '$14.99',
        },
        {
          category: 'entrees',
          name: 'Ensalada',
          description: 'Ensalada fresca y ligera.',
          price: '$12.99',
        },
        {
          category: 'entrees',
          name: 'Ensalada de Pollo',
          description: 'Chicken salad preparada al momento.',
          price: '$13.99',
        },
        {
          category: 'entrees',
          name: 'Ensalada de Pescado',
          description: 'Fish salad fresca y bien sazonada.',
          price: '$14.99',
        },
        {
          category: 'entrees',
          name: 'Nachos de Pollo o Res',
          description: 'Nachos con pollo o res, queso y toppings.',
          price: '$13.99',
        },
        {
          category: 'entrees',
          name: 'Nachos de Camarón',
          description: 'Nachos de camarón con mucho sabor y textura.',
          price: '$16.99',
        },
        {
          category: 'sides',
          name: 'Plátanos Maduros',
          description: 'Sweet plantain dorado y listo para acompañar.',
          price: '$4.90',
          image: '/images/Gallery/sweet-plantain.jpeg',
        },
        {
          category: 'sides',
          name: 'Yuca Frita',
          description: 'Cassava frita con textura crujiente.',
          price: '$4.90',
        },
        {
          category: 'sides',
          name: 'Patacones',
          description: 'Green plantain frito, crujiente y sabroso.',
          price: '$4.90',
        },
        {
          category: 'sides',
          name: 'Arroz con Vegetales',
          description: 'Rice with vegetables estilo casero.',
          price: '$4.99',
          image: '/images/Gallery/rice-with-vegetables.jpeg',
        },
        {
          category: 'sides',
          name: 'Arroz con Frijoles',
          description: 'Arroz con frijoles con sazón tradicional.',
          price: '$7.99',
        },
        {
          category: 'soups',
          name: 'Sopa de Pollo',
          description: 'Chicken soup reconfortante y bien sazonada.',
          price: '$12.99',
        },
        {
          category: 'soups',
          name: 'Sopa de Res',
          description: 'Beef soup con sabor profundo.',
          price: '$13.98',
        },
        {
          category: 'soups',
          name: 'Sopa de Mondongo',
          description: 'Tripe stew soup preparada con sazón de casa.',
          price: '$13.99',
        },
        {
          category: 'soups',
          name: 'Sopa de Pescado',
          description: 'Fish soup llena de sabor marino y caribeño.',
          price: '$15.99',
        },
        {
          category: 'vegetarian',
          name: 'Plato Vegetariano',
          description: 'Vegetarian dinner servido como plato completo.',
          price: '$11.99',
        },
        {
          category: 'vegetarian',
          name: 'Chalupa Vegetariana',
          description: 'Versión vegetariana de nuestra chalupa.',
          price: '$12.99',
        },
        {
          category: 'vegetarian',
          name: 'Burrito Vegetariano',
          description: 'Burrito vegetariano lleno de sabor y textura.',
          price: '$12.99',
        },
        {
          category: 'vegetarian',
          name: 'Canastas Vegetarianas',
          description: 'Canastas vegetarianas con sazón de la casa.',
          price: '$11.50',
        },
        {
          category: 'drinks',
          name: 'Horchata',
          description:
            'Small $3.50 | Large $6.99',
          price: 'Desde $3.50',
        },
        {
          category: 'drinks',
          name: 'Agua de Tamarindo',
          description: 'Small $3.50 | Large $6.99',
          price: 'Desde $3.50',
        },
        {
          category: 'drinks',
          name: 'Agua de Jamaica',
          description: 'Small $3.50 | Large $6.99',
          price: 'Desde $3.50',
        },
        {
          category: 'drinks',
          name: 'Agua de Piña',
          description: 'Small $3.50 | Large $6.99',
          price: 'Desde $3.50',
        },
        {
          category: 'drinks',
          name: 'Agua de Fresa',
          description: 'Small $3.50 | Large $6.99',
          price: 'Desde $3.50',
        },
        {
          category: 'drinks',
          name: 'Limonada de Jengibre',
          description: 'Small $3.50 | Large $6.99',
          price: 'Desde $3.50',
        },
        {
          category: 'drinks',
          name: 'Agua de Maracuyá',
          description: 'Small $3.50 | Large $6.99',
          price: 'Desde $3.50',
        },
        {
          category: 'drinks',
          name: 'Soda',
          description: 'Small $1.50 | Large $3.00',
          price: 'Desde $1.50',
        },
        {
          category: 'desserts',
          name: 'Pastel de Chocolate',
          description: 'Chocolate cake suave y delicioso.',
          price: '$6.99',
        },
        {
          category: 'desserts',
          name: 'Pastel de Zanahoria',
          description: 'Carrot cake con sabor clásico y casero.',
          price: '$6.99',
        },
        {
          category: 'desserts',
          name: 'Pastel de Vainilla',
          description: 'Vanilla cake ligero y dulce.',
          price: '$6.99',
        },
        {
          category: 'desserts',
          name: 'Tres Leches',
          description:
            'Postre tradicional suave y cremoso.',
          price: '$6.99',
        },
        {
          category: 'catering',
          name: 'Large Jerk Chicken',
          description: 'Bandeja grande para catering.',
          price: '$100',
          image: '/images/Gallery/jerk-chicken.jpeg',
        },
        {
          category: 'catering',
          name: 'Small Jerk Chicken',
          description: 'Bandeja pequeña para catering.',
          price: '$85',
          image: '/images/Gallery/jerk-chicken.jpeg',
        },
        {
          category: 'catering',
          name: 'Large Curry Chicken',
          description: 'Bandeja grande para catering.',
          price: '$100',
          image: '/images/Gallery/curry-chicken.jpeg',
        },
        {
          category: 'catering',
          name: 'Small Curry Chicken',
          description: 'Bandeja pequeña para catering.',
          price: '$85',
          image: '/images/Gallery/curry-chicken.jpeg',
        },
        {
          category: 'catering',
          name: 'Large Cabbage',
          description: 'Acompañamiento grande para eventos.',
          price: '$50',
        },
        {
          category: 'catering',
          name: 'Small Cabbage',
          description: 'Acompañamiento pequeño para eventos.',
          price: '$35',
        },
        {
          category: 'catering',
          name: 'Large Pasta Salad',
          description: 'Pasta salad grande para compartir.',
          price: '$65',
        },
        {
          category: 'catering',
          name: 'Small Pasta Salad',
          description: 'Pasta salad pequeña para catering.',
          price: '$50',
        },
        {
          category: 'catering',
          name: 'Large Rice and Beans',
          description: 'Rice and beans en bandeja grande.',
          price: '$90',
        },
        {
          category: 'catering',
          name: 'Small Rice and Beans',
          description: 'Rice and beans en bandeja pequeña.',
          price: '$80',
        },
        {
          category: 'catering',
          name: 'Large Rice with Vegetables',
          description: 'Arroz con vegetales en bandeja grande.',
          price: '$75',
        },
        {
          category: 'catering',
          name: 'Small Rice with Vegetables',
          description: 'Arroz con vegetales en bandeja pequeña.',
          price: '$80',
        },
        {
          category: 'catering',
          name: 'Sweet Plantain',
          description: 'Bandeja de sweet plantain para catering.',
          price: '$50',
          image: '/images/Gallery/sweet-plantain.jpeg',
        },
      ],
    },
    gallery: {
      eyebrow: 'Galería',
      title: 'Comida, ambiente y una energía tropical que se siente cercana',
      description:
        'Una mirada rápida a los platos, colores y detalles que le dan vida a Pura Vida Caribbean Cuisine.',
      items: [
        {
          title: 'Sabor que abre el apetito al instante',
          description:
            'Carnes doradas, patacones crujientes y ese contraste de limón, salsa y frescura que convierte cada plato en una experiencia memorable.',
          image: '/images/Gallery/gallery-1.png',
        },
        {
          title: 'Tacos llenos de color y carácter',
          description:
            'Ingredientes frescos, porciones generosas y una presentación vibrante que transmite el espíritu alegre y auténtico de la casa.',
          image: '/images/Gallery/gallery-2.png',
        },
        {
          title: 'Un rincón con alma tropical',
          description:
            'Madera, luz cálida y detalles caribeños que crean un ambiente acogedor, perfecto para disfrutar con calma y buena compañía.',
          image: '/images/Gallery/gallery-3.png',
        },
        {
          title: 'Platos que se sienten como hogar',
          description:
            'Arroz bien sazonado, maduros dorados y proteínas jugosas servidas con ese toque casero que deja ganas de volver.',
          image: '/images/Gallery/gallery-4.png',
        },
      ],
    },
    location: {
      eyebrow: 'Ubicación y contacto',
      title: 'Visítanos en Pontiac o pide por tus apps favoritas',
      address: '44768 Woodward Ave, Pontiac, MI 48341',
      hours: [
        'Lunes a Sábado: 10:00 a. m. a 8:00 p. m.',
        'Domingo: Cerrado',
      ],
      lunchSpecials: 'Lunch Specials: 11:30 a. m. a 1:30 p. m.',
      phone: '(248) 622 4490',
      email: 'ronniepinnock@yahoo.com',
      pickup: 'Solo recogida en el restaurante o aplicaciones en línea.',
      payments: 'Apple Pay, Samsung Pay, debit card o credit card.',
      mapEmbedUrl:
        'https://www.google.com/maps?q=44768+Woodward+Ave,+Pontiac,+MI+48341&output=embed',
    },
    reviews: {
      eyebrow: 'Reseñas',
      title: 'Lo que nuestros clientes destacan de su experiencia',
      description:
        'Comentarios que reflejan el sabor, la atención y el ambiente que buscamos ofrecer en cada visita.',
      items: [
        {
          source: 'Google Review',
          author: 'Alexandra Renny',
          text: 'Vinimos para una cita y es un lugar muy íntimo y encantador. Probamos los tacos de pescado, el pollo jerk y los jugos recién exprimidos, y todo estuvo increíble. ¡Tengo muchas ganas de volver!',
        },
        {
          source: 'Google Review',
          author: 'Harold PK',
          text: 'He pasado por este lugar innumerables veces. A menudo, la curiosidad me agarraba como un niño que quiere dulces. Me contuve porque ni la ubicación ni la apariencia me atraían. Por suerte, me sentí renovado por el ambiente limpio y acogedor.',
        },
        {
          source: 'Google Review',
          author: 'Carter Johnson',
          text: 'El pollo jerk maridaba a la perfección con los plátanos maduros, y el jugo de maracuyá era refrescante y delicioso. El personal tenía una energía cálida y acogedora que hizo la comida aún más agradable. La comida y el ambiente realmente dejaron una gran impresión.',
        },
      ],
    },
    footer: {
      summary:
        'Cocina caribena, costarricense y mucho mas, preparada con amor y servida con orgullo en Pontiac.',
      rights: 'Pura Vida Caribbean Cuisine. Todos los derechos reservados.',
    },
  },
  en: {
    localeLabel: 'English',
    restaurantName: 'Pura Vida Caribbean Cuisine',
    slogan: 'Authentic Caribbean flavor',
    nav: [
      { label: 'Home', href: '#inicio' },
      { label: 'About', href: '#sobre-nosotros' },
      { label: 'Menu', href: '#menu' },
      { label: 'Gallery', href: '#galeria' },
      { label: 'Location', href: '#ubicacion' },
      { label: 'Reviews', href: '#resenas' },
    ],
    ui: {
      language: 'Language',
      callNow: 'Call now',
      orderOnline: 'Order online',
      menuLabel: 'Menu',
      categoriesLabel: 'Categories',
      seeMore: 'See details',
      availableInStore: 'Available in restaurant and apps',
      lunchSpecials: 'Lunch Specials',
      closed: 'Closed',
      open: 'Open',
      getDirections: 'Get directions',
      socialTitle: 'Follow us',
      reviewsTitle: 'Featured reviews',
      pickupTitle: 'Pickup',
      paymentsTitle: 'Payment methods',
      hoursTitle: 'Hours',
      contactTitle: 'Contact',
      mapTitle: 'Map',
    },
    hero: {
      eyebrow: 'Caribbean and Costa Rican cuisine',
      title: 'Pura Vida Caribbean Cuisine',
      description:
        'Authentic Caribbean flavor with home-style cooking, heartfelt seasoning, and a warm experience for anyone missing a taste of home.',
      primaryCta: 'View menu',
      secondaryCta: 'See location',
      badges: [
        'English and Spanish spoken here',
        'Lunch Specials 11:30 am to 1:30 pm',
        'Monday to Saturday 10 am to 8 pm',
      ],
    },
    highlights: {
      eyebrow: 'What you will find',
      title: 'A clean, warm space with tropical identity',
      cards: [
        {
          title: 'Food with soul',
          description:
            'Every dish is built on Caribbean seasoning, family tradition, and a desire to make you feel at home.',
        },
        {
          title: 'Costa Rican and Jamaican roots',
          description:
            'A menu that blends authentic Costa Rican, Caribbean, and flavorful house recipes.',
        },
        {
          title: 'Bilingual service',
          description:
            'We serve guests in English and Spanish so every visit feels easy and welcoming.',
        },
      ],
      categories: [
        {
          name: 'Lunch',
          description: 'Quick, satisfying midday specials.',
        },
        {
          name: 'Dinner',
          description: 'Hearty plates for a relaxed evening meal.',
        },
        {
          name: 'Drinks',
          description: 'Refreshing tropical flavors to pair with your food.',
        },
        {
          name: 'Desserts',
          description: 'Sweet finishes with Caribbean inspiration.',
        },
      ],
    },
    about: {
      eyebrow: 'About Us',
      title: 'A story of love, legacy, and cooking from the heart',
      story: [
        'Our story began the day a couple discovered that the true seasoning lived in their hands. United by their love for cooking, a Costa Rican woman and a Jamaican man decided to share the authentic flavors that represented them.',
        'In a different country, but with one shared dream, they kept growing by doing what they loved most: cooking. With effort, love, and dedication, they built something special into every plate.',
        'Today, although she is no longer here physically and now watches from heaven, her essence lives on in every recipe. We continue honoring her legacy and cooking with the same love as always.',
        'This journey also continues in honor of Geraldine Pinnock, whose light and passion remain part of every flavor we serve.',
      ],
      cuisinesTitle: 'What we offer',
      cuisines: 'Caribbean, Costa Rican, and much more.',
      differenceTitle: 'What makes us different',
      difference:
        'We cook with love so that every plate brings a little piece of your homeland to your table.',
    },
    menu: {
      eyebrow: 'Menu',
      title: 'Full menu with daily dishes, sides, desserts, and catering',
      description:
        'Browse entrees, dinners, soups, sides, drinks, desserts, and catering trays with clearer organization and pricing.',
      categories: [
        { key: 'dinners', label: 'Dinners' },
        { key: 'entrees', label: 'Entrees' },
        { key: 'sides', label: 'Sides' },
        { key: 'soups', label: 'Soups' },
        { key: 'vegetarian', label: 'Vegetarian' },
        { key: 'drinks', label: 'Drinks' },
        { key: 'desserts', label: 'Desserts' },
        { key: 'catering', label: 'Catering' },
      ],
      items: [
        {
          category: 'dinners',
          name: 'Jerk Chicken',
          description:
            'Jerk-seasoned chicken with Caribbean spices and smoky flavor.',
          price: '$16.99',
          image: '/images/Gallery/jerk-chicken.jpeg',
        },
        {
          category: 'dinners',
          name: 'Curry Chicken',
          description:
            'Traditional curry chicken with a rich and savory sauce.',
          price: '$16.98',
          image: '/images/Gallery/curry-chicken.jpeg',
        },
        {
          category: 'dinners',
          name: 'Curry Goat',
          description:
            'Slow-cooked curry goat with aromatic spices and tender texture.',
          price: '$22.99',
          image: '/images/Gallery/curry-goat.jpeg',
        },
        {
          category: 'dinners',
          name: 'Oxtail Dinner',
          description:
            'Slow-braised oxtail cooked until rich, tender, and full of flavor.',
          price: '$22.99',
          image: '/images/Gallery/oxtail.jpeg',
        },
        {
          category: 'dinners',
          name: 'Jerk Wings',
          description:
            'Jerk wings with a balance of heat, smoke, and sweet notes.',
          price: '$14.99',
          image: '/images/Gallery/jerk-wings.jpeg',
        },
        {
          category: 'dinners',
          name: 'Casadi Tico',
          description:
            'A full Costa Rican-style plate with classic house sides.',
          price: '$19.99',
        },
        {
          category: 'dinners',
          name: 'Chicken in Caribbean Sauce',
          description:
            'House-style chicken in Caribbean sauce with bold seasoning.',
          price: '$17.99',
          image: '/images/Gallery/jerk-chicken.jpeg',
        },
        {
          category: 'dinners',
          name: 'Beef Fajitas',
          description: 'Seasoned beef fajitas served fresh and hot.',
          price: '$18.99',
        },
        {
          category: 'dinners',
          name: 'Fish Snapper Fillet',
          description: 'House-seasoned snapper fillet served as a dinner plate.',
          price: '$21.50',
        },
        {
          category: 'dinners',
          name: 'Canasta Dinner',
          description: 'A full dinner plate featuring our house canastas.',
          price: '$19.50',
        },
        {
          category: 'dinners',
          name: 'Whole Snapper Small',
          description: 'Small whole snapper, seasoned and fried to order.',
          price: '$34.99',
        },
        {
          category: 'dinners',
          name: 'Whole Snapper Large',
          description: 'Large whole snapper, great for sharing.',
          price: '$44.99',
        },
        {
          category: 'dinners',
          name: 'Steak with Onions',
          description: 'Steak with onions and home-style seasoning.',
          price: '$17.99',
        },
        {
          category: 'dinners',
          name: 'Pork Chop or Chicken Chop',
          description: 'Choose pork chop or chicken chop with daily sides.',
          price: '$17.99',
        },
        {
          category: 'dinners',
          name: 'Bochinche de Casado',
          description: 'Costa Rican spaghetti-style house specialty.',
          price: '$19.99',
        },
        {
          category: 'dinners',
          name: 'Quesadilla Dinner',
          description: 'Fresh quesadilla served as a complete dinner plate.',
          price: '$14.99',
        },
        {
          category: 'dinners',
          name: 'Burrito Dinner',
          description: 'Burrito served as a full dinner option.',
          price: '$15.99',
        },
        {
          category: 'dinners',
          name: 'Taco Dinner (3)',
          description: 'Taco dinner with your choice of protein.',
          price: '$13.50',
        },
        {
          category: 'entrees',
          name: 'Chicken Chalupa',
          description: 'Fresh chicken chalupa made to order.',
          price: '$14.99',
        },
        {
          category: 'entrees',
          name: 'Steak Chalupa',
          description: 'Steak chalupa with bold house flavor.',
          price: '$14.99',
        },
        {
          category: 'entrees',
          name: 'Shrimp Chalupa',
          description: 'Shrimp chalupa with a Caribbean touch.',
          price: '$14.99',
        },
        {
          category: 'entrees',
          name: 'Salad',
          description: 'A fresh and lighter salad option.',
          price: '$12.99',
        },
        {
          category: 'entrees',
          name: 'Chicken Salad',
          description: 'Fresh chicken salad prepared to order.',
          price: '$13.99',
        },
        {
          category: 'entrees',
          name: 'Fish Salad',
          description: 'Fresh fish salad with house seasoning.',
          price: '$14.99',
        },
        {
          category: 'entrees',
          name: 'Chicken or Beef Nachos',
          description: 'Loaded nachos with chicken or beef.',
          price: '$13.99',
        },
        {
          category: 'entrees',
          name: 'Shrimp Nachos',
          description: 'Shrimp nachos with rich toppings and flavor.',
          price: '$16.99',
        },
        {
          category: 'sides',
          name: 'Sweet Plantain',
          description: 'Golden sweet plantain ready to pair with any meal.',
          price: '$4.90',
          image: '/images/Gallery/sweet-plantain.jpeg',
        },
        {
          category: 'sides',
          name: 'Cassava',
          description: 'Crispy cassava side dish.',
          price: '$4.90',
        },
        {
          category: 'sides',
          name: 'Green Plantin',
          description: 'Fried green plantain with a crisp finish.',
          price: '$4.90',
        },
        {
          category: 'sides',
          name: 'Rice with Vegetables',
          description: 'Home-style rice with vegetables.',
          price: '$4.99',
          image: '/images/Gallery/rice-with-vegetables.jpeg',
        },
        {
          category: 'sides',
          name: 'Rice and Beans',
          description: 'Traditional rice and beans with house seasoning.',
          price: '$7.99',
        },
        {
          category: 'soups',
          name: 'Chicken Soup',
          description: 'Comforting chicken soup with house flavor.',
          price: '$12.99',
        },
        {
          category: 'soups',
          name: 'Beef Soup',
          description: 'Beef soup with rich broth and deep flavor.',
          price: '$13.98',
        },
        {
          category: 'soups',
          name: 'Tripe Stew Soup',
          description: 'Mondongo-style soup prepared with home seasoning.',
          price: '$13.99',
        },
        {
          category: 'soups',
          name: 'Fish Soup',
          description: 'Fish soup with savory Caribbean flavor.',
          price: '$15.99',
        },
        {
          category: 'vegetarian',
          name: 'Vegetarian Dinner',
          description: 'A full vegetarian plate with home-style flavor.',
          price: '$11.99',
        },
        {
          category: 'vegetarian',
          name: 'Vegetarian Chalupa',
          description: 'A meat-free version of our chalupa.',
          price: '$12.99',
        },
        {
          category: 'vegetarian',
          name: 'Vegetarian Burrito',
          description: 'A vegetarian burrito full of flavor and texture.',
          price: '$12.99',
        },
        {
          category: 'vegetarian',
          name: 'Vegetarian Canastas',
          description: 'Vegetarian canastas with house seasoning.',
          price: '$11.50',
        },
        {
          category: 'drinks',
          name: 'Horchata',
          description:
            'Small $3.50 | Large $6.99',
          price: 'From $3.50',
        },
        {
          category: 'drinks',
          name: 'Tamarind Juice',
          description:
            'Small $3.50 | Large $6.99',
          price: 'From $3.50',
        },
        {
          category: 'drinks',
          name: 'Surreal Juice',
          description:
            'Small $3.50 | Large $6.99',
          price: 'From $3.50',
        },
        {
          category: 'drinks',
          name: 'Pineapple Juice',
          description:
            'Small $3.50 | Large $6.99',
          price: 'From $3.50',
        },
        {
          category: 'drinks',
          name: 'Strawberry Juice',
          description:
            'Small $3.50 | Large $6.99',
          price: 'From $3.50',
        },
        {
          category: 'drinks',
          name: 'Ginger Lemonade',
          description:
            'Small $3.50 | Large $6.99',
          price: 'From $3.50',
        },
        {
          category: 'drinks',
          name: 'Passion Fruit',
          description:
            'Small $3.50 | Large $6.99',
          price: 'From $3.50',
        },
        {
          category: 'drinks',
          name: 'Soda',
          description:
            'Small $1.50 | Large $3.00',
          price: 'From $1.50',
        },
        {
          category: 'desserts',
          name: 'Chocolate Cake',
          description:
            'Soft chocolate cake served by the slice.',
          price: '$6.99',
        },
        {
          category: 'desserts',
          name: 'Carrot Cake',
          description:
            'Classic carrot cake with house flavor.',
          price: '$6.99',
        },
        {
          category: 'desserts',
          name: 'Vanilla Cake',
          description:
            'Vanilla cake with a light and sweet finish.',
          price: '$6.99',
        },
        {
          category: 'desserts',
          name: 'White Cake',
          description:
            'Traditional three-milk cake with a soft texture.',
          price: '$6.99',
        },
        {
          category: 'catering',
          name: 'Large Jerk Chicken',
          description:
            'Large catering tray.',
          price: '$100',
          image: '/images/Gallery/jerk-chicken.jpeg',
        },
        {
          category: 'catering',
          name: 'Small Jerk Chicken',
          description:
            'Small catering tray.',
          price: '$85',
          image: '/images/Gallery/jerk-chicken.jpeg',
        },
        {
          category: 'catering',
          name: 'Large Curry Chicken',
          description:
            'Large catering tray.',
          price: '$100',
          image: '/images/Gallery/curry-chicken.jpeg',
        },
        {
          category: 'catering',
          name: 'Small Curry Chicken',
          description:
            'Small catering tray.',
          price: '$85',
          image: '/images/Gallery/curry-chicken.jpeg',
        },
        {
          category: 'catering',
          name: 'Large Cabbage',
          description:
            'Large side tray for events.',
          price: '$50',
        },
        {
          category: 'catering',
          name: 'Small Cabbage',
          description:
            'Small side tray for events.',
          price: '$35',
        },
        {
          category: 'catering',
          name: 'Large Pasta Salad',
          description:
            'Large pasta salad tray for sharing.',
          price: '$65',
        },
        {
          category: 'catering',
          name: 'Small Pasta Salad',
          description:
            'Small pasta salad tray.',
          price: '$50',
        },
        {
          category: 'catering',
          name: 'Large Rice and Beans',
          description:
            'Large rice and beans tray.',
          price: '$90',
        },
        {
          category: 'catering',
          name: 'Small Rice and Beans',
          description:
            'Small rice and beans tray.',
          price: '$80',
        },
        {
          category: 'catering',
          name: 'Large Rice with Vegetables',
          description:
            'Large vegetable rice tray.',
          price: '$75',
        },
        {
          category: 'catering',
          name: 'Small Rice with Vegetables',
          description:
            'Small vegetable rice tray.',
          price: '$80',
        },
        {
          category: 'catering',
          name: 'Sweet Plantain',
          description:
            'Sweet plantain tray for catering.',
          price: '$50',
          image: '/images/Gallery/sweet-plantain.jpeg',
        },
      ],
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'Food, atmosphere, and tropical energy with a familiar feel',
      description:
        'A visual taste of the bold plates, warm atmosphere, and vibrant details that make every visit feel memorable.',
      items: [
        {
          title: 'Flavor that grabs your attention instantly',
          description:
            'Golden meats, crisp plantains, and that bright contrast of lime, sauce, and freshness that makes every plate memorable.',
          image: '/images/Gallery/gallery-1.png',
        },
        {
          title: 'Tacos full of color and character',
          description:
            'Fresh ingredients, generous portions, and a vibrant presentation that reflects the joyful and authentic spirit of the restaurant.',
          image: '/images/Gallery/gallery-2.png',
        },
        {
          title: 'A tropical corner with real personality',
          description:
            'Wood textures, warm light, and Caribbean details create a cozy atmosphere made for slow meals and good company.',
          image: '/images/Gallery/gallery-3.png',
        },
        {
          title: 'Plates that feel like home',
          description:
            'Well-seasoned rice, golden sweet plantains, and juicy proteins served with the kind of homemade touch that brings you back.',
          image: '/images/Gallery/gallery-4.png',
        },
      ],
    },
    location: {
      eyebrow: 'Location and contact',
      title: 'Visit us in Pontiac or order through your favorite apps',
      address: '44768 Woodward Ave, Pontiac, MI 48341',
      hours: [
        'Monday to Saturday: 10:00 am to 8:00 pm',
        'Sunday: Closed',
      ],
      lunchSpecials: 'Lunch Specials: 11:30 am to 1:30 pm',
      phone: '(248) 622 4490',
      email: 'ronniepinnock@yahoo.com',
      pickup: 'Restaurant pickup only or online ordering through delivery apps.',
      payments: 'Apple Pay, Samsung Pay, debit card, or credit card.',
      mapEmbedUrl:
        'https://www.google.com/maps?q=44768+Woodward+Ave,+Pontiac,+MI+48341&output=embed',
    },
    reviews: {
      eyebrow: 'Reviews',
      title: 'What guests remember most about their visit',
      description:
        'Real impressions that highlight the flavor, warmth, and atmosphere people enjoy at Pura Vida Caribbean Cuisine.',
      items: [
        {
          source: 'Google Review',
          author: 'Alexandra Renny',
          text: 'We came in for a date and it felt like a very intimate, charming place. We tried the fish tacos, jerk chicken, and fresh juices, and everything was incredible. I am really looking forward to coming back!',
        },
        {
          source: 'Google Review',
          author: 'Harold PK',
          text: 'I have passed this place countless times. Curiosity often grabbed me like a kid wanting candy. I held back because neither the location nor the exterior drew me in. Thankfully, I was refreshed by the clean and welcoming atmosphere.',
        },
        {
          source: 'Google Review',
          author: 'Carter Johnson',
          text: 'The jerk chicken paired perfectly with the sweet plantains, and the passion fruit juice was refreshing and delicious. The staff had a warm, welcoming energy that made the meal even more enjoyable.',
        },
      ],
    },
    footer: {
      summary:
        'Caribbean, Costa Rican, and more, prepared with love and proudly served in Pontiac.',
      rights: 'Pura Vida Caribbean Cuisine. All rights reserved.',
    },
  },
}
