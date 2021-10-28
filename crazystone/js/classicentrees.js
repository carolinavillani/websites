const mainMenu = {
  menuGroups: [
    {
      menuGroupHeading: "HIBACHI",
      menuSubHeading: "Served with Onion Soup, Salad and Fried Rice",
      menuItems: [
        {
          name: "MIXED VEGETABLES",
          description: "Fried Rice (Brown Rice +$1)",
          price: "$16.75",
        },
        {
          name: "CHICKEN",
          description: "Fried Rice (Brown Rice +$1)",
          price: "$18.75",
        },
        {
          name: "JUMBO SCALLOP (8PCS)",
          description: "Fried Rice (Brown Rice +$1)",
          price: "$21.75",
        },
        {
          name: "SALMON",
          description: "Fried Rice (Brown Rice +$1)",
          price: "$21.75",
        },
        {
          name: "BLUEFIN TUNA",
          description: "Fried Rice (Brown Rice +$1)",
          price: "$21.75",
        },
        {
          name: "N.Y STEAK",
          description: "Fried Rice (Brown Rice +$1)",
          price: "$21.75",
        },
        {
          name: "JUMBO SHRIMP",
          description: "Fried Rice (Brown Rice +$1)",
          price: "$21.75",
        },
        {
          name: "TWIN LOBSTER TAIL",
          description: "Fried Rice (Brown Rice +$1)",
          price: "$19.75",
        },
        {
          name: "CHICKEN & STEAK HIBACHI",
          description: "Fried Rice (Brown Rice +$1)",
          price: "$19.75",
        },
        {
          name: "CHICKEN & SCALLOP HIBACHI",
          description: "Fried Rice (Brown Rice +$1)",
          price: "$24.75",
        },
        {
          name: "STEAK & SHRIMP HIBACHI",
          description: "Fried Rice (Brown Rice +$1)",
          price: "$24.75",
        },
        {
          name: "STEAK & SCALLOP HIBACHI",
          description: "Fried Rice (Brown Rice +$1)",
          price: "$24.75",
        },
        {
          name: "SHRIMP & SCALLOP HIBACHI",
          description: "Fried Rice (Brown Rice +$1)",
          price: "$24.75",
        },
      ],
    },
    {
      menuGroupHeading: "TERYAKI",
      menuSubHeading: "Served with Onion Soup, Salad and Steamed Rice",
      menuItems: [
        {
          name: "TOFU TERIYAKI",
          description: "Steamed Rice (Fried Rice +$2.50)",
          price: "$11.75",
        },
        {
          name: "CHICKEN TERIYAKI (11oz)",
          description: "Steamed Rice (Fried Rice +$2.50)",
          price: "$13.95",
        },
        {
          name: "SALMON TERIYAKI (9oz)",
          description: "Steamed Rice (Fried Rice +$2.50)",
          price: "$14.95",
        },
        {
          name: "BLUEFIN TUNA TERIYAKI (9oz)",
          description: "Steamed Rice (Fried Rice +$2.50)",
          price: "$14.25",
        },
        {
          name: "STEAK TERIYAKI (9oz)",
          description: "Steamed Rice (Fried Rice +$2.50)",
          price: "$13.75",
        },
        {
          name: "JUMBO SHRIMP TERIYAKI (12pcs)",
          description: "Steamed Rice (Fried Rice +$2.50)",
          price: "$15.25",
        },
        {
          name: "SEAFOOD TERIYAKI",
          description: "Steamed Rice (Fried Rice +$2.50)",
          price: "$16.75",
        },
      ],
    },

    {
      menuGroupHeading: "TEMPURA",
      menuSubHeading: "Served with Onion Soup, Salad and Steamed Rice",
      menuItems: [
        {
          name: "MIXED VEGETABLE",
          description: "Steamed Rice (Fried Rice +$2.50)",
          price: "$11.75",
        },
        {
          name: "TEMPURA CHICKEN (6PCS)",
          description: "Steamed Rice (Fried Rice +$2.50)",
          price: "$6.95",
        },
        {
            name: "TEMPURA JUMBO SHRIMP",
            description1: "6 pcs of tempura shrimp and mixed tempura vegetables",
            description2:"Steamed Rice (Fried Rice +$2.50)",
            price: "$7.95",
          },
          {
            name: "TEMPURA SEAFOOD",
            description1: "Shrimp, scallop, salmon, kani (imitation crabmeat) & seasonal vegetables",
            description2:"Steamed Rice (Fried Rice +$2.50)",
            price: "$8.95",
          },
      ],
    },
    {
        menuGroupHeading: "KATSU",
        menuSubHeading: "Served with Onion Soup, Salad and Steamed Rice",
        menuItems: [
          {
            name: "MIXED VEGETABLE",
            description: "Steamed Rice (Fried Rice +$2.50)",
            price: "$11.75",
          },
          {
            name: "TEMPURA CHICKEN (6PCS)",
            description: "Steamed Rice (Fried Rice +$2.50)",
            price: "$6.95",
          },
          {
              name: "TEMPURA JUMBO SHRIMP",
              description1: "6 pcs of tempura shrimp and mixed tempura vegetables",
              description2:"Steamed Rice (Fried Rice +$2.50)",
              price: "$7.95",
            },
            {
              name: "TEMPURA SEAFOOD",
              description1: "Shrimp, scallop, salmon, kani (imitation crabmeat) & seasonal vegetables",
              description2:"Steamed Rice (Fried Rice +$2.50)",
              price: "$8.95",
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
