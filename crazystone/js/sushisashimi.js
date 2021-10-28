const mainMenu = {
  menuGroups: [
    {
      menuGroupHeading: "SUSHI&SASHIMI",
      menuSubHeading:
        "Nigiri Sushi - 2 pieces per order; Sashimi - 3 piecces per order (+$2.00)",
      menuItems: [
        { name: "INARI", description: "Tofu Skin", price: "$3.75" },
        { name: "TAMAGO", description: "Sweet egg", price: "$4.25" },
        { name: "AVOCADO", description: "", price: "$4.25" },
        {
          name: "CRAB STICK",
          description: "Imitation crab meat",
          price: "$4.25",
        },
        { name: "COOKED SHRIMP", description: "Ebi", price: "$4.75" },
        {
          name: "SMOKED SALMON",
          description: "Shiodzuke Sake",
          price: "$5.75",
        },
        { name: "EEL", description: "Unagi(cooked)", price: "$6.25" },
        { name: "SQUID", description: "Ika", price: "$5.75" },
        { name: "MACKERAL", description: "Saba", price: "$4.75" },
        { name: "STRIPED BASS", description: "Suzuki", price: "$5.25" },
        { name: "ESCOLAR", description: "White tuna", price: "$6.25" },
        { name: "BLUEFIN TUNA", description: "Maguro", price: "$6.25" },
        { name: "SALMON", description: "Sake", price: "$6.25" },
        { name: "YELLOWTAIL", description: "Hamachi", price: "$6.25" },
        { name: "OCTOPUS", description: "Tako", price: "$5.25" },
        { name: "FLYING FISH ROE", description: "Tobiko", price: "$5.75" },
        {
          name: "SALMON ROE",
          description: "Ikura Sashimi order +$3.00",
          price: "$6.25",
        },
        {
          name: "SCALLOP",
          description: "Hotate Sashimi order +$4.00",
          price: "$7.75",
        },
        {
          name: "SWEET SHRIMP",
          description: "Sushi order 2 pcs",
          price: "$8.25",
        },
        {
          name: "UNI (Sea Urchin)",
          description: "Sashimi order +$4.00",
          price: "$11.95",
        },
        {
          name: "TRUE TORO",
          description: "Sashimi order +$4.25",
          price: "$9.95",
        },
      ],
    },
  ],
};

function renderMenu() {
  var template = document.getElementById("template").innerHTML;
  var rendered = Mustache.render(template, mainMenu);
  document.getElementById("target").innerHTML = rendered;
}
