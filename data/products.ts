export interface QuantityType {
  '20ft': string;
  '40ft': string;
}

export interface ParamsType {
  product: string;
}

export interface GalleryType {
  src: string;
  alt: string;
}

export interface ProductType {
  params: ParamsType;
  src: string;
  alt: string;
  url: string;
  name: string;
  desc: string;
  quantity: QuantityType;
  specification: unknown;
  gallery?: GalleryType[];
}

export const COCONUT_PRODUCTS: ProductType[] = [
  {
    params: {
      product: 'coconut-semi-husked',
    },
    src: '/images/products/10-coconut-semi-husked.jpeg',
    alt: '10-coconut-semi-husked.jpeg',
    url: '/products/coconut-semi-husked',
    name: 'Semi Husked Coconut',
    desc: 'Semi-husked coconut is a ripe coconut with the outer skin peeled off. The semi-husked coconuts we supply come from freshly picked coconuts at the age of 60 days. Our semi-husked coconut has thick and sweet flesh and fresh coconut water with high nutrition.',
    quantity: {
      '20ft': '15000 Kg',
      '40ft': '30000 Kg',
    },
    specification: {
      Type: 'Fresh Coconut – Semi Husked',
      Variety: 'Matured Coconut > 60 Days Age',
      Color: 'Brown/Light Brown',
      Grade: 'A/B/C',
      'Weight (1 Coconut)': '500–1400 Grams (As Requested)',
      Packaging: 'By Request',
      Origin: 'Banten, Lampung',
    },
    gallery: [
      {
        src: '/images/products/coconut-semi-husked/1.jpg',
        alt: 'coconut-semi-husked-1',
      },
      {
        src: '/images/products/coconut-semi-husked/2.jpg',
        alt: 'coconut-semi-husked-2',
      },
      {
        src: '/images/products/coconut-semi-husked/3.jpg',
        alt: 'coconut-semi-husked-3',
      },
      {
        src: '/images/products/coconut-semi-husked/4.jpg',
        alt: 'coconut-semi-husked-4',
      },
      {
        src: '/images/products/coconut-semi-husked/5.jpg',
        alt: 'coconut-semi-husked-5',
      },
      {
        src: '/images/products/coconut-semi-husked/6.jpg',
        alt: 'coconut-semi-husked-6',
      },
      {
        src: '/images/products/coconut-semi-husked/7.jpg',
        alt: 'coconut-semi-husked-7',
      },
      {
        src: '/images/products/coconut-semi-husked/8.jpg',
        alt: 'coconut-semi-husked-8',
      },
      {
        src: '/images/products/coconut-semi-husked/9.jpg',
        alt: 'coconut-semi-husked-9',
      },
    ],
  },
  {
    params: {
      product: 'copra',
    },
    src: '/images/products/11-copra.jpeg',
    alt: '11-copra.jpeg',
    url: '/products/copra',
    name: 'Copra',
    desc: 'Copra is the dried flesh of the coconut. Copra is one of the most popular coconut products. It is used as an ingredient in coconut oil and the extracted oil is used as animal feed. Our copra is obtained from high-quality coconuts which are naturally sun-dried to reduce carbon emissions with a moisture content of less than 6%.',
    quantity: {
      '20ft': '-',
      '40ft': '-',
    },
    specification: {
      Quality: 'Edible, Reguler',
      Moisture: '<6%',
      'Fatty Acid': '<0.5%',
      Rubbery: 'Nil (Edible), <6% (Reguler)',
      Smoky: '<2% (Edible), <6% (Reguler)',
      Packaging: 'By Request',
      Origin: 'Banten, Lampung',
    },
  },
];

export const SPICES_PRODUCT: ProductType[] = [
  {
    params: {
      product: 'black-pepper',
    },
    src: '/images/products/9-black-pepper.jpeg',
    alt: '9-black-pepper.jpeg',
    url: '/products/black-pepper',
    name: 'Black Pepper',
    desc: 'Black pepper is the most traded spice in the world and the demand for black pepper is increasing every year. It is the most common spice used in cuisines all over the world due to its distinctive taste and strong aroma. Indonesia, as one of the largest tropical countries, has an abundant supply of black pepper. Our black pepper is processed properly and hygienically to produce the best quality black pepper.',
    quantity: {
      '20ft': '16000 Kg',
      '40ft': '26000 Kg',
    },
    specification: {
      'Density G/L': '400–550 G/L',
      Moisture: '14%',
      Impurity: '0.5–1%',
      Origin: 'Lampung',
    },
    gallery: [
      {
        src: '/images/products/black-pepper/1.jpg',
        alt: 'black-pepper-1',
      },
      {
        src: '/images/products/black-pepper/2.jpg',
        alt: 'black-pepper-2',
      },
      {
        src: '/images/products/black-pepper/3.jpg',
        alt: 'black-pepper-3',
      },
      {
        src: '/images/products/black-pepper/4.jpg',
        alt: 'black-pepper-4',
      },
      {
        src: '/images/products/black-pepper/5.jpg',
        alt: 'black-pepper-5',
      },
      {
        src: '/images/products/black-pepper/6.jpg',
        alt: 'black-pepper-6',
      },
    ],
  },
  {
    params: {
      product: 'white-pepper',
    },
    src: '/images/products/7-white-pepper.jpeg',
    alt: '7-white-pepper.jpeg',
    url: '/products/white-pepper',
    name: 'White Pepper',
    desc: 'White pepper comes from the same plant as black pepper. The difference is in the processing that comes from ripe fruit that is washed and dried. White pepper has a warm effect on food and is widely used in Asian cuisine. It is also used as herbs and traditional medicine. Our white pepper is harvested from an experienced farm in Sumatra which provides the highest quality white pepper.',
    quantity: {
      '20ft': '18000 Kg',
      '40ft': '26000 Kg',
    },
    specification: {
      'Density G/L': '590–630 G/L',
      Moisture: '14%',
      Impurity: '1–2%',
      Origin: 'Lampung',
    },
    gallery: [
      {
        src: '/images/products/white-pepper/1.jpg',
        alt: 'white-pepper-1',
      },
      {
        src: '/images/products/white-pepper/2.jpg',
        alt: 'white-pepper-2',
      },
      {
        src: '/images/products/white-pepper/3.jpg',
        alt: 'white-pepper-3',
      },
      {
        src: '/images/products/white-pepper/4.jpg',
        alt: 'white-pepper-4',
      },
      {
        src: '/images/products/white-pepper/5.jpg',
        alt: 'white-pepper-5',
      },
      {
        src: '/images/products/white-pepper/6.jpg',
        alt: 'white-pepper-6',
      },
      {
        src: '/images/products/white-pepper/7.jpg',
        alt: 'white-pepper-7',
      },
    ],
  },
  {
    params: {
      product: 'galangal',
    },
    src: '/images/products/3-galangal.jpeg',
    alt: '3-galangal.jpeg',
    url: '/products/galangal',
    name: 'Galangal',
    desc: 'Galangal is a plant in the ginger family that grows in Southeast Asia. Its distinctive sharp taste and strong citrus or pine-like aroma make galangal widely used in Asian cuisine. Galangal is also used in traditional medicine because it has benefits for treating various health problems. Our galangal has a strong taste and aroma and can be ordered according to customer requests.',
    quantity: {
      '20ft': '12000 Kg',
      '40ft': '25000 Kg',
    },
    specification: {
      Variety: 'Greater Galangal',
      Moisture: '11% Max',
      'Total Ash': '6% Max',
      Origin: 'Sulawesi',
    },
  },
  {
    params: {
      product: 'clove',
    },
    src: '/images/products/6-clove.jpeg',
    alt: '6-clove.jpeg',
    url: '/products/clove',
    name: 'Clove',
    desc: 'Indonesia is the largest clove-producing country in the world and the second-largest clove exporter after Madagascar. Cloves from Indonesia are known to have a high oil content and fragrant aroma. Cloves contain essential oils and are commonly used in the pharmaceutical, food, beverage, and cigarette industries. We sort and select cloves strictly to ensure the quality of our products is in the best condition.',
    quantity: {
      '20ft': '12000 Kg',
      '40ft': '21000 Kg',
    },
    specification: {
      Color: 'Brown',
      Quality: 'Well Dried, Fragrant Aroma',
      'Water Content': '14% Max',
      'Foreign Matter': '0.5–1% Max',
      'Inferior Clove': '2–5% Max',
      'Broken Clove': '1% Max',
      'Essential Oil Level': '16–20%',
    },
  },
  {
    params: {
      product: 'onion',
    },
    src: '/images/products/4-onion.jpeg',
    alt: '4-onion.jpeg',
    url: '/products/onion',
    name: 'Onion',
    desc: 'Onion is the most widely cultivated type of plant from the onion family with a large round shape and thick, multi-layered flesh. Onions are usually used as a complement to dishes either cooked or raw. Our onions come from the island of Java which produces onions with a delicious taste.',
    quantity: {
      '20ft': '13000 Kg',
      '40ft': '26000 Kg',
    },
    specification: {
      Quality: 'Intact, Clean, Unsprouted',
      'Damaged Onion': '5% Max',
      'Inferior Union': '1% Max',
      Uniformity: 'Same Variety, Origin, Quality',
    },
  },
  {
    params: {
      product: 'ginger',
    },
    src: '/images/products/2-ginger.jpeg',
    alt: '2-ginger.jpeg',
    url: '/products/ginger',
    name: 'Ginger',
    desc: 'Ginger is a plant that belongs to the Zingiberaceae family whose rhizome is in great demand because it has many uses. Ginger can be used as a seasoning, herbal drink, and as traditional medicine. The nutritional content of ginger has many benefits such as maintaining endurance, nourishing the skin, preventing nausea, relieving muscle pain, reducing cholesterol, and lowering blood pressure. We offer high-quality ginger that has a strong taste and aroma and is highly nutritious for various customer needs',
    quantity: {
      '20ft': '13000 Kg',
      '40ft': '25000 Kg',
    },
    specification: {
      'Water Content': '12% Max',
      'Essential Oil Level': '0.8–1.7%',
      'Starch Content': '55%',
      'Fiber Content': '7%',
      'Total Ash': '6.6–7.5% Max',
      Impurity: '2% Max',
    },
  },
  {
    params: {
      product: 'shallot',
    },
    src: '/images/products/12-shallot.jpeg',
    alt: '12-shallot.jpeg',
    url: '/products/shallot',
    name: 'Shallot',
    desc: 'Shallots are classified as a member of the onion family, close to garlic, onions, and scallions. The most widely used part of this plant is the tuber although the leaves are also commonly used as a complement to various dishes in many countries. Good quality shallots grow in the lowlands of countries that are exposed to the sun all year round. We offer fresh shallots that are picked directly and processed properly and hygienically.',
    quantity: {
      '20ft': '-',
      '40ft': '-',
    },
    specification: {
      'Water Content': '12% Max',
      'Essential Oil Level': '0.8–1.7%',
      'Starch Content': '55%',
      'Fiber Content': '7%',
      'Total Ash': '6.6–7.5% Max',
      Impurity: '2% Max',
    },
  },
];

export const OTHER_PRODUCTS: ProductType[] = [
  {
    params: {
      product: 'dry-corn',
    },
    src: '/images/products/5-dry-corn.jpeg',
    alt: '5-dry-corn.jpeg',
    url: '/products/dry-corn',
    name: 'Dry Corn',
    desc: 'The corn that we offer is high-quality corn that is ready to be processed into various corn products.  Our corn is supplied by a leading corn plantation in Central Java with years of experience. We provide corn with a good taste and aroma with high nutrition.',
    quantity: {
      '20ft': '24000 Kg',
      '40ft': '48000 Kg',
    },
    specification: {
      Moisture: '14% Max',
      Impurity: '3% Max',
      'Broken Grains': '5% Max',
      Origin: 'Central Java',
    },
  },
  {
    params: {
      product: 'potato',
    },
    src: '/images/products/8-potato.jpeg',
    alt: '8-potato.jpeg',
    url: '/products/potato',
    name: 'Potato',
    desc: 'Potatoes are a staple food in many countries. Potatoes are much sought after because they are one of the main sources of carbohydrates as an energy source. Our potatoes are harvested directly from selected farms in the highlands of Indonesia. We provide potatoes of various sizes and types to meet customer needs.',
    quantity: {
      '20ft': '13000 Kg',
      '40ft': '25000 Kg',
    },
    specification: {
      Variety: 'White Potato, Yellow Potato',
      Maturity: '80–120 Days',
      Flesh: 'White/Yellow',
      Size: 'Small–Big',
      'Weight (1 Potato)': '30–150 grams',
      Origin: 'Central Java',
    },
  },
  {
    params: {
      product: 'cabbage',
    },
    src: '/images/products/1-cabbage.jpeg',
    alt: '1-cabbage.jpeg',
    url: '/products/cabbage',
    name: 'Cabbage',
    desc: 'Cabbage is a vegetable plant that is closely related to broccoli, cauliflower, and Brussels sprouts. cabbage is round and layered with a size between 0.5-4 kilograms. it is a fairly popular vegetable and is often used in European and Asian cuisine, both cooked and raw. Our cabbage comes from agriculture in the highlands of Indonesia. We only select cabbage with good condition and sterile processing to maintain quality and provide satisfaction to customers',
    quantity: {
      '20ft': '-',
      '40ft': '12000 Kg',
    },
    specification: {
      Variety: 'Green Cabbage',
      'Cultivation Type': 'Common',
      Weight: '500–2500 grams',
      Color: 'Greenish White',
      'Small Defect': '10% Max',
      'Soft Decay': '2% Max',
    },
  },
];

const PRODUCTS: ProductType[] = [
  ...COCONUT_PRODUCTS,
  ...SPICES_PRODUCT,
  ...OTHER_PRODUCTS,
];

export const PRODUCT_PATHS = PRODUCTS.map((el) => {
  return { params: { product: el.params.product, ...el } };
});

export default PRODUCTS;
