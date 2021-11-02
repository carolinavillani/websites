const mainMenu = {
  menuGroups: [
    {
      menuGroupHeading: "JOHN’S SPECIALS",
      menuSubHeading:
        "Special menu is available every Thursday night to Sunday due to Imported shipping date.",
      menuItems: [
        {
          name: "SUMMER TOAST",
          description: "Chu Toro, Hokkaido Sea Urchin, chef's secret recipe",
        },
        {
          name: "Chu Toro & Uni Nigiri",
          description: "bluefin fatty tuna, Hokkaido sea urchin",
        },
        {
          name: "Chu Toro Nigiri",
          description: "bluefin fatty tuna",
        },
        { name: "Aji Nigiri", description: "Shima Aji Japan",  },
        { name: "Madai Nigiri", description: "Sea Bream Japan",  },
        {
          name: "Hotate Nigiri",
          description: "Scallop, chef's secret recipe",
        },
        {
          name: "Veggie Nigiri",
          description: "Avocado, fresh Shii-take, chef's secret recipe",
        },
        {
          name: "Ice Breaker Sushi Combo",
          description: "Sea Bream Japan, Shima Aji Japan, Bluefin fatty tuna",
        },
        {
          name: "Uni Don",
          description:
            "Bluefin fatty tuna, Hokkaido sea urchin, Salmon roe, Blue crabmeat over a bed of sushi rice",
        },
        {
          name: "Wagyu & Egg",
          description: "Grade A5 steak, quail egg, chef's secret recipe",
        },
        {
          name: "Chu Toro & Truffle",
          description:
            "bluefin fatty tuna, black truffle, and chef's secret recipe",
        },
        {
          name: "Unagi Nigiri",
          description: "chopped eel, avocado, chef's secret recipe",
        },
        {
          name: "Ikura Nigiri",
          description: "salmon roe with homemade Dashi sauce",
        },
        {
          name: "John's Sushi Combo (6PCS)",
          description:
            "Wagyu, Scallop, Eel, Chu Toro, Salmon Roe, Sweet shrimp with chef's secret recipe",
        },
        {
          name: "John's Sushi Combo (12PCS)",
          description:
            "Wagyu, Scallop, Eel, Chu Toro, Salmon Roe, Sweet Shrimp, Hokkaido Uni, Madai, Aji, Uni Toast with chef's secret recipe",
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
