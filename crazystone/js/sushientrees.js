const mainMenu = {
    menuGroups: [
      {
        menuGroupHeading: "CLASSICAL COMBO",
        menuSubHeading: "EACH COMBO COMES WITH ONE MISO SOUP AND ONE SALAD",
        menuItems: [
            {name:"UNAGI DON",
            description:"Toasted eel over sushi rice, served with miso soup",
            price:"$20.25"},
            {name:"Tekka Don",
            description:"9 pcs of bluefin tuna on a bed of seasoned rice, served with miso soup",
            price:"$22.25"},
            {name:"TRIO SUSHI",
            description:"3 pcs of salmon, 3 pcs of bluefin tuna, 3 pcs of yellowtail, and 1 California roll, served with miso soup and salad",
            price:"$24.25"},
            {name:"CHIRASHI",
            description:"Chef’s choices of assorted sashimi over a bed of seasoned rice, served w. miso soup",
            price:"$22.25"},
            {name:"VEGETABLE SUSHI COMBO",
            description:"Black pepper tuna and asparagus inside, topped w. striped bass, cilantro, and spicy sauce",
            price:"$19.75"},
            {name:"SUSHI COMBO",
            description:"Chef’s choices of assorted 9 pcs of raw fish on seasoned rice ball plus one tuna roll, served with miso soup and salad",
            price:"$24.25"},
            {name:"SASHIMI COMBO",
            description:"Chef’s choices of assorted 18 pcs of raw fish, served with steamed rice, miso soup and salad",
            price:"$27.25"},
            {name:"SUSHI & SASHIMI FOR 1",
            description:"Chef’s choices of assorted 5 pcs sushi, 10 pcs sashimi & 1 tuna roll, served w. miso soup & salad",
            price:"$30.25"},
            {name:"SUSHI & SASHIMI FOR 2",
            description:"Chef’s choices of assorted 9 pcs sushi, 18 pcs sashimi, 1 california roll and 1 mind eraser special roll, served with 2 miso soups and 2 salads",
            price:"$63.25"},
            
        ],
    },
    {
      menuGroupHeading: "CRAZY COMBO",
        menuSubHeading: "EACH COMBO COMES WITH ONE MISO SOUP",
        menuItems: [
            {name:"SPICY ROLL COMBO",
            description:"SPICY TUNA ROLL, SPICY SALMON ROLL, SPICY CRABMEAT ROLL, SERVED WITH ONE MISO SOUP",
            price:"$18.75"},
            {name:"COOKED ROLL COMBO",
            description:"CALIFORNIA ROLL, SHRIMP TEMPURA ROLL, NEW YORK SPECIAL ROLL, AND SERVED WITH ONE MISO SOUP",
            price:"$23.25"},
            {name:"DAVID BOAT",
            description:"SPICY TUNA ROLL, SALMON AVOCADO ROLL, PATRIOTS SPECIAL ROLL, AND SERVED WITH ONE MISO SOUP",
            price:"$23.25"},
            {name:"MONDAY BOAT",
            description:"FIREMAN SPECIAL ROLL (SPICY), 3 PCS OF CRABSTICK SUSHI, 2 PCS OF EEL SUSHI, SERVED WITH ONE MISO SOUP",
            price:"$22.25"},
            {name:"TUESDAY BOAT",
            description:"BOSTON LOBSTER SPECIAL ROLL, 2 PCS OF UNI SUSHI, 2 PCS OF SALMON ROE SUSHI, SERVED WITH ONE MISO SOUP",
            price:"$30.75"},
            {name:"WEDNESDAY BOAT",
            description:"WAYSIDE SPECIAL ROLL (MILD SPICY), 3 PCS OF COOKED SHRIMP SASHIMI, 2 PCS OF SWEET SHRIMP SUSHI, SERVED WITH ONE MISO SOUP",
            price:"$26.25"},
            {name:"THURSDAY BOAT",
            description:"CHEF'S CHOICE OF SPECIAL TUNA ROLL (MILD SPICY), 3 PCS OF TUNA SUSHI, 3 PCS OF TUNA SASHIMI, AND SERVED WITH ONE MISO SOUP",
            price:"$24.25"},
            {name:"FRIDAY BOAT",
            description:"CHEF'S CHOICE OF SPECIAL YELLOWTAIL ROLL, 3 PCS OF YELLOWTAIL SUSHI, 3 PCS OF YELLOWTAIL SASHIMI, AND SERVED WITH ONE MISO SOUP",
            price:"$24.25"},
            {name:"SATURDAY BOAT",
            description:"CHEF'S CHOICE OF SPECIAL SALMON ROLL, 3 PCS OF SALMON SUSHI, 3 PCS OF SALMON SASHIMI, AND SERVED WITH ONE MISO SOUP",
            price:"$24.25"},
            {name:"SUNDAY BOAT",
            description:"DRAGON ROLL, 2 PCS OF SCALLOP SUSHI, 2 PCS OF TORO SUSHI, AND SERVED WITH ONE MISO SOUP",
            price:"$25.25"},
            
            
        ],
      },
    ],
  };
  
  function renderMenu() {
    var template = document.getElementById("template").innerHTML;
    var rendered = Mustache.render(template, mainMenu);
    document.getElementById("target").innerHTML = rendered;
  }
  