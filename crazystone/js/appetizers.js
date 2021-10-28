const mainMenu = {
  menuGroups: [
    {
      menuGroupHeading: "APPETIZERS",
      menuItems: [
        {
          name: "MONEY BAG (5PCS)",
          description:
            "Spicy salmon, spicy kani and cream cheese wrapped in deeply fried wonton skin, served with guacamole and sweet chili sauce",
          price: "7.95",
        },
        {
          name: "EDAMAME",
          description: "Steamed green soybeans",
          price: "6.25",
        },
        {
          name: "PORK GYOZA (6PCS)",
          description: "Pan fried dumpling with pork",
          price: "6.25",
        },
        {
          name: "VEGETABLE GYOZA (6PCS)",
          description: "Pan fried dumpling with vegetables",
          price: "6.25",
        },
        {
          name: "HARU MAKI (2PCS)",
          description: "Deep fried Japanese spring rolls",
          price: "6.25",
        },
        { name: "SHUMAI (6PCS)", description: "Shrimp dim sum", price: "8.25" },
        {
          name: "SPICY SQUID",
          description: "Baked squid w. homemade spicy sauce",
          price: "7.75",
        },
        {
          name: "SALT PEPPER CHICKEN",
          description: "Fried chicken ball",
          price: "6.75",
        },
        {
          name: "AGEDASHI TOFU",
          description: "Fried tofu served in tempura sauce",
          price: "9.25",
        },
        {
          name: "IKA MARU",
          description: "Grilled squid with teriyaki sauce",
          price: "9.25",
        },
        {
          name: "COCONUT SHRIMP APPETIZER(5PCS)",
          description:
            "Jumbo shrimp rolled in an combination of coconut flakes, spices and bread crumbs for baking, served w. coconut dipping sauce",
          price: "8.25",
        },
        {
          name: "CHICKEN KATSU APPETIZER",
          description: "Crispy chicken breast w. special katsu dipping sauce",
          price: "8.25",
        },
        {
          name: "SHRIMP TEMPURA APPETIZER",
          description:
            "2 pieces of shrimp tempura with mixed tempura vegetables",
          price: "7.95",
        },
        {
          name: "CHICKEN TEMPURA APPETIZER",
          description:
            "2 pieces of tempura chicken with mixed tempura vegetables",
          price: "7.25",
        },
        {
          name: "MIXED VEGGIE TEMPURA APPETIZER",
          description: "Mixed tempura vegetables",
          price: "7.95",
        },
      ],
    },
    {
      menuGroupHeading: "SUSHI APPETIZERS",
      menuItems: [
        {
            name: "KATHY'S SPECIAL",
            description:
              "Seared tuna, spicy tuna and avocado with chef’s sauce, sliced red pepper on top",
            price: "10.25",
          },
          {
            name: "BLACK PEPPER TUNA",
            description: "Seared black pepper tuna served w. special ponzu sauce",
            price: "10.75",
          },
          {
            name: "NIGIRI APPETIZER (5 PCS)",
            description: "Tuna, salmon, yellowtail, escolar & cooked shrimp",
            price: "10.75",
          },
          {
            name: "SASHIMI APPETIZER (7 PCS)",
            description: "Tuna, salmon, yellowtail, striped bass or escolar",
            price: "12.25",
          },
          {
            name: "SALMON DREAM (4 PCS)",
            description:
              "Lobster salad wrapped by the sliced salmon, serving w. chef’s special sauce",
            price: "10.25",
          },
          {
            name: "ESCOLAR TATAKI",
            description: "Seared sliced escolar with homemade ponzu dressing",
            price: "10.25",
          },
          {
            name: "TUNA TATAKI",
            description: "Seared sliced tuna with homemade ponzu dressing",
            price: "10.75",
          },
          {
            name: "YELLOWTAIL JALAPENO",
            description:
              "Yellowtail in wasabi and ponzu sauce topped with jalapeno",
            price: "10.75",
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
