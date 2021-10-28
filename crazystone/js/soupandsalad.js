const mainMenu = {
  menuGroups: [
    {
      menuGroupHeading: "SOUPS",
      menuItems: [
        {
          name: "MISO SOUP",
          description: "seaweed, tofu, green scallions",
          price: "2.75",
        },
        {
          name: "ONION SOUP",
          description:
            "beef brew soup base, sliced fresh mushroom, green scallions, and fried dry onion",
          price: "2.75",
        },
        {
          name: "SEAFOOD SOUP",
          description:
            "egg white, jumbo shrimp, jumbo scallop, escolar, imitation crabmeat, and green scallions. (suitable for 2 people)",
          price: "10.25",
        },
      ],
    },
    {
      menuGroupHeading: "SALADS",
      menuItems: [
        { name: "HOUSE SALAD", description: "", price: "4.75" },
        { name: "SEAWEED SALAD", description: "", price: "5.75" },
        {
          name: "AVOCADO SALAD",
          description:
            "sliced avocado, green lettuce, serving with homemade ginger dressing",
          price: "5.75",
        },
        {
          name: "SPICY KANI SALAD",
          description:
            "imitation crabmeat, green lettuce, spicy mayo, tobiko (fish egg), crunch",
          price: "6.95",
        },
        {
          name: "SQUID SALAD",
          description:
            "Chopped and cooked squid in a sweet ginger sauce, added chilli and agaric",
          price: "7.95",
        },
        {
          name: "SALAD SAMPLER",
          description: "Seaweed salad, kani salad, squid salad (spicy)",
          price: "8.25",
        },
        {
          name: "DRAGON BALL SALAD",
          description:
            "Spicy tuna and spicy kani wrapped by avocado ball, topped w. tobiko, spicy mayo, and wasabi",
          price: "9.75",
        },
        {
          name: "TUNA AVOCADO SALAD",
          description:
            "A base of fresh greens, topped w. avocado, tuna, masago or tobiko, and spicy mayo",
          price: "11.25",
        },
        {
          name: "SPICY SEAFOOD SALAD",
          description:
            "A base of fresh greens, topped w. a mix of avocado, tuna, salmon, shrimp, imitation crab, masago or tobiko, and spicy mayo sauce",
          price: "11.75",
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
