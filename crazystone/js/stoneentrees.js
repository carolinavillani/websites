const mainMenu = {
  menuGroups: [
    {
      menuGroupHeading: "STONE ENTREES",
      menuSubHeading:
        "1st Side Choice of salad or soup; 2nd Side Choice of fried mixed veggie or steamed asparagus; 3rd Side Choice of steamed rice; Fried Rice +$2.50",
      menuItems: [
        {
          name: "STEAK (9OZ)",

          price: "$20.25",
        },
        {
          name: "CHICKEN (12OZ)",

          price: "$17.25",
        },
        {
          name: "SALMON (9OZ)",

          price: "$19.25",
        },
        {
          name: "BLUEFN TUNA (80Z)",

          price: "$22.75",
        },
        {
          name: "JUMBO SHRIMP (12PCS)",

          price: "$19.75",
        },
        {
          name: "TWIN LOBSTER TAILS",

          price: "$28.75",
        },
        {
          name: "JUMBO SHRIMP & SCALLOPS (6 pcs jumbo shrimps & 5 pcs jumbo scallops)",

          price: "$28.75",
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
