const mainMenu = {
  menuGroups: [
    {
      menuGroupHeading: "SPECIAL ROLLS",
      menuItems: [
        {
          name: "FISH CAKE",
          description:
            "(No Seaweed) Spicy tuna, salmon, eel, avocado, eel sauce",
          price: "14.75",
        },
        {
          name: "CRYSTAL QUEEN",
          description:
            "Fried kani, shrimp tempura, avocado, soy wrapper, topped w. blue crabmeat, spicy mayo, and eel sauce",
          price: "14.25",
        },
        {
          name: "GREED GARDEN",
          description:
            "Tempura sweet potato and avocado inside, topped w. sesame seeds and eel sauce",
          price: "12.25",
        },
        {
          name: "COCO SHRIMP",
          description:
            "Shrimp tempura, avocado, cucumber, soy wrapper, topped w. salmon, tuna, escolar, served w. sweet chili, honey wasabi sauce, and coconut flakes",
          price: "13.75",
        },
        {
          name: "KISS ME",
          description:
            "Black pepper tuna and asparagus inside, topped w. striped bass, cilantro, and spicy sauce",
          price: "13.95",
        },
        {
          name: "TUNA’S LOVER (NO RICE)",
          description:
            "No rice, spicy tuna, salmon and avocado wrapped by sliced tuna, topped w. seaweed salad, served w. ponzu and spicy sauce",
          price: "15.25",
        },
        {
          name: "OUT OF CONTROL",
          description:
            "Spicy tuna, spicy yellowtail and crunchy inside, topped w. spicy imitation crabmeat",
          price: "13.75",
        },
        {
          name: "PERFECT MATCH ROLL",
          description:
            "Tempura avocado and spicy yellowtail inside, topped w. seared escolar, mango, and homemade mango sauce",
          price: "13.75",
        },
        {
          name: "SUNSHINE ROLL",
          description:
            "Cooked shrimp, avocado, crunchy and spicy mayo inside, topped with salmon, sliced fresh lemon, and salmon roe",
          price: "14.25",
        },
        {
          name: "BLACK JACK ROLL",
          description:
            "Tempura spicy tuna roll, topped w. a mix of cilantro, onion, lobster salad and tobiko, served w. sweet chili sauce",
          price: "13.25",
        },
        { name: "SPICY TUNA", description: "Spicy tuna roll", price: "14.75" },
        {
          name: "NEW YORK ROLL",
          description:
            "Kani, avocado, and cream cheese tempura roll, topped w. spicy kani and eel sauce",
          price: "13.95",
        },
        {
          name: "FRIDAY ROLL",
          description:
            "Spicy tuna and cooked shrimp inside, topped w. avocado, tempura kani and tempura escolar, served w. sweet chili and eel sauce",
          price: "12.25",
        },
        {
          name: "S-FIGURE ROLL",
          description:
            "Shrimp tempura, avocado, cream cheese, soy wrapper, topped w. spicy kani, spicy mayo, and eel sauce",
          price: "18.75",
        },
        {
          name: "OKAY ROLL",
          description:
            "Lobster tempura, avocado, salmon wrapped by soy paper, topped w. lobster salad, spicy mayo, and eel sauce",
          price: "19.25",
        },
        {
          name: "BOSTON LOBSTER ROLL",
          description:
            "Steamed lobster tail, lobster salad, and fresh mango wrapped by soy paper, topped w. homemade mango sauce",
          price: "13.75",
        },
        {
          name: "HOT GIRL ROLL",
          description:
            "Spicy tuna, avocado, soy wrapper, topped w. bluefin tuna, salmon, and escolar, served w. spicy mayo and honey wasabi",
          price: "13.25",
        },
        {
          name: "GREEN RIVER ROLL",
          description:
            "Spicy salmon, crunchy, and avocado inside, topped w. seaweed salad, smoked salmon, and spicy sauce",
          price: "13.95",
        },
        {
          name: "SPIDERMAN ROLL",
          description:
            "Tempura soft shell crab and cucumber inside, topped w. a mix of tuna, mango, avocado, and tobiko, served w. eel sauce and honey wasabi",
          price: "13.75",
        },
        {
          name: "PATRIOTS ROLL",
          description:
            "Tempura kani and shrimp inside, topped w. lobster salad, spicy tuna, spicy mayo, eel sauce, and tobiko",
          price: "13.75",
        },
        {
          name: "MAGICAL ROLL",
          description:
            "Spicy tuna and cucumber roll with smoked eel, cooked shrimp, avocado, and red tobiko on top",
          price: "13.25",
        },
        {
          name: "MIND ERASER ROLL",
          description:
            "Spicy kani and crunchy inside, topped w. yellowtail and jalapeno",
          price: "13.25",
        },
        {
          name: "WAYSIDE ROLL",
          description:
            "Spicy tuna, crunchy, and mango inside, topped w. spicy salmon, imitation crabmeat, and spicy mayo",
          price: "13.25",
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
