const mainMenu = {
  menuGroups: [
    {
      menuGroupHeading: "CLASSIC ROLLS",
      menuSubHeading: "Regular Roll (6 pcs) or 1 Hand Roll",
      menuItems: [
        { name: "CUCUMBER", description: "Cucumber roll", price: "$4.75" },
        {
          name: "AVOCADO",
          description: "Soy paper +$1, or Brown rice +$1",
          price: "$4.75",
        },
        {
          name: "ASPARAGUS",
          description: "Soy paper +$1, or Brown rice +$1",
          price: "$4.25",
        },
        { 
          name: "OSHINKO", 
          description: "Pickled vegetables", 
          price: "$4.95",
        },
        {
          name: "PEANUT AVOCADO",
          description: "Peanut avocado roll",
          price: "$5.75",
        },
        {
          name: "SWEET POTATO",
          description: "Sweet potato roll",
          price: "$6.95",
        },
        {
          name: "TEMPURA VEGGIE",
          description: "Tempura veggie roll",
          price: "$7.95",
        },
        { name: "FUTO MAKI", description: "Avocado", price: "$6.25" },
        {
          name: "KANI",
          description: "Imitation crab meat, spicy or non-spicy",
          price: "$6.25",
        },
        {
          name: "BLUEFIN TUNA",
          description: "Added with Avocado ($0.50) or Cucumber ($0.50)",
          price: "$6.75",
        },
        { name: "SPICY TUNA", description: "Spicy tuna roll", price: "$6.75" },
        {
          name: "SALMON",
          description: "Added w. Avocado ($0.50) or Cucumber ($0.50)",
          price: "$6.95",
        },
        {
          name: "SALMON ROLL",
          description: "Salmon skin roll",
          price: "$7.95",
        },
        { name: "YELLOWTAIL", description: "Hamachi roll", price: "$6.25" },
        {
          name: "SPICY SALMON",
          description: "Spicy salmon roll",
          price: "$6.75",
        },
        {
          name: "SPICY YELLOWTAIL",
          description: "Spicy yellowtail roll",
          price: "$6.25",
        },
        {
          name: "CALIFORNIA",
          description: "Avocado, cucumber, imitation crabmeat",
          price: "$5.75",
        },
        {
          name: "PHILADELPHIA",
          description: "Smoked salmon, cream cheese, cucumber",
          price: "$6.95",
        },
        {
          name: "ALASKAN",
          description: "Raw salmon, cucumber, avocado",
          price: "$6.95",
        },
        {
          name: "COOKED SHRIMP AVOCADO",
          description: "Cooked shrimp avocado roll",
          price: "$5.25",
        },
        { name: "SCALLOP", description: "Scallop Roll", price: "$8.25" },
        {
          name: "SPICY SCALLOP",
          description: " Spicy scallop roll",
          price: "$8.75",
        },
        {
          name: "SHRIMP TEMPURA",
          description: "Shrimp tempura roll",
          price: "$8.25",
        },
        {
          name: "SPIDER",
          description:
            "Tempura soft shell crab, avocado, cucumber w. eel sauce",
          price: "$11.75",
        },
        {
          name: "DRAGON",
          description: "Smoked eel, avocado, cucumber w. eel sauce",
          price: "$11.25",
        },
        {
          name: "RAINBOW",
          description:
            "Tuna, salmon, escolar, kani, cucumber, avocado wrapped in seaweed paper",
          price: "$12.25",
        },
        { name: "EEL", description: "Add avocado or cucumber", price: "$6.95" },
        {
          name: "SPICY BLUE CRABMEAT",
          description: "Spicy blue crabmeat roll",
          price: "$6.95",
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
