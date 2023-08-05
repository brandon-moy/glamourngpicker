type helmetObj = {
  name: string;
  dyeable: boolean;
};

const helmets: helmetObj[] = [
  {
    name: "Company Hat",
    dyeable: true,
  },
  {
    name: "Expeditioner's Cap",
    dyeable: true,
  },
  {
    name: "Highland Hood",
    dyeable: true,
  },
  {
    name: "Coronal Straw Hat",
    dyeable: true,
  },
  {
    name: "Spring Straw Hat",
    dyeable: true,
  },

  {
    name: "Cloche",
    dyeable: true,
  },
  {
    name: "Spriggan Cap",
    dyeable: false,
  },
  {
    name: "Crescent Moon Cone",
    dyeable: true,
  },
  {
    name: "Crescent Moon Nightcap",
    dyeable: true,
  },
  {
    name: "Oval Spectacles",
    dyeable: true,
  },

  {
    name: "Shaded Spectacles",
    dyeable: true,
  },
  {
    name: "Contemporary Pince-nez",
    dyeable: true,
  },

  {
    name: "Rimless Glasses",
    dyeable: true,
  },
  {
    name: "Thick-rimmed GLasses",
    dyeable: true,
  },
  {
    name: "Gryphonskin Eyepatch",
    dyeable: true,
  },
  {
    name: "Imperial Shadow Visor",
    dyeable: false,
  },
  {
    name: "Minstrel's Spectacles",
    dyeable: true,
  },
  {
    name: "Classic Spectacles",
    dyeable: true,
  },
  {
    name: "Imitation Mistbeard Mask",
    dyeable: true,
  },
  {
    name: "Emperor's New Hat",
    dyeable: false,
  },
  {
    name: "Oval Reading Glasses",
    dyeable: true,
  },
  {
    name: "Coeurl Eyeglasses",
    dyeable: true,
  },
  {
    name: "Thavnairian Headdress",
    dyeable: true,
  },
  {
    name: "Flat Cap",
    dyeable: true,
  },
  {
    name: "Red Beret",
    dyeable: true,
  },
  {
    name: "Green Beret",
    dyeable: true,
  },
  {
    name: "White Beret",
    dyeable: true,
  },
  {
    name: "Elegant Rimless Glasses",
    dyeable: true,
  },
  {
    name: "Reading Glasses",
    dyeable: true,
  },
  {
    name: "High House Cloche",
    dyeable: true,
  },
  {
    name: "Archaeoskin Cloche",
    dyeable: true,
  },
  {
    name: "Wind Silk Wedge Cap",
    dyeable: true,
  },
  {
    name: "New World Headdress",
    dyeable: true,
  },
  {
    name: "Survival Hat",
    dyeable: true,
  },
  {
    name: "Moonfire Hat",
    dyeable: true,
  },
  {
    name: "Boarskin Survival Hat",
    dyeable: false,
  },
  {
    name: "Ramie Hood",
    dyeable: false,
  },
  {
    name: "Cashmere Hood",
    dyeable: false,
  },
  {
    name: "Wool Knit Cap",
    dyeable: false,
  },
  {
    name: "Flannel Knit Cap",
    dyeable: true,
  },
  {
    name: "Taoist's Cap",
    dyeable: true,
  },
  {
    name: "Non La",
    dyeable: true,
  },
  {
    name: "Anemos Hat",
    dyeable: true,
  },
  {
    name: "Anemos Pot Helm",
    dyeable: true,
  },
  {
    name: "Boulevardier's Hat",
    dyeable: true,
  },
  {
    name: "Pagos Bandana",
    dyeable: true,
  },
  {
    name: "Pagos Circlet",
    dyeable: true,
  },
  {
    name: "Quaintrelle's Hat",
    dyeable: true,
  },
  {
    name: "Archaeodemon Horns",
    dyeable: false,
  },
  {
    name: "Rain Hood",
    dyeable: true,
  },
  {
    name: "Kupo Knit Cap",
    dyeable: true,
  },
  {
    name: "Skyworker's Helm",
    dyeable: true,
  },
  {
    name: "Calfskin Rider's Cap",
    dyeable: true,
  },
  {
    name: "Frontier Hat",
    dyeable: true,
  },
  {
    name: "Frontier Ribbon",
    dyeable: true,
  },
  {
    name: "Peacelover's Hat",
    dyeable: true,
  },
  {
    name: "Excite-I-Mask",
    dyeable: false,
  },
  {
    name: "Red Ribbon",
    dyeable: true,
  },
  {
    name: "Varsity Flat Cap",
    dyeable: true,
  },
  {
    name: "Noir Hat",
    dyeable: true,
  },
  {
    name: "Lawless Enforcer's Hat",
    dyeable: true,
  },
  {
    name: "Salon Server's Hat",
    dyeable: true,
  },
  {
    name: "Plain Pajama Eye Mask",
    dyeable: true,
  },
  {
    name: "Cactuar Pajama Eye Mask",
    dyeable: true,
  },
  {
    name: "Chocobo Pajama Eye Mask",
    dyeable: true,
  },
  {
    name: "Shishu BUjin Eboshi",
    dyeable: true,
  },
  {
    name: "Shishu Gozen Kanzashi",
    dyeable: true,
  },
  {
    name: "Dried Red Oldrose",
    dyeable: false,
  },
  {
    name: "Dried Blue Oldrose",
    dyeable: false,
  },
  {
    name: "Dried Yellow Oldrose",
    dyeable: false,
  },
  {
    name: "Dried Green Oldrose",
    dyeable: false,
  },
  {
    name: "Dried Orange Oldrose",
    dyeable: false,
  },
  {
    name: "Dried Purple Oldrose",
    dyeable: false,
  },
  {
    name: "Dried White Oldrose",
    dyeable: false,
  },
  {
    name: "Dried Black Oldrose",
    dyeable: false,
  },
  {
    name: "Oldrose Corsage",
    dyeable: false,
  },
  {
    name: "Red Viola Corsage",
    dyeable: false,
  },
  {
    name: "Blue Viola Corsage",
    dyeable: false,
  },
  {
    name: "Yellow Viola Corsage",
    dyeable: false,
  },
  {
    name: "Green Viola Corsage",
    dyeable: false,
  },
  {
    name: "Orange Viola Corsage",
    dyeable: false,
  },
  {
    name: "Purple Viola Corsage",
    dyeable: false,
  },
];
