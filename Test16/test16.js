const phoneBook = {
    "Михаил": 88005553565,
    "Егор Киняевский": 89862045246,
    "Антон Электрик": 3364213,
  };
  


phoneBook["Михаил М"] =  456789123;
phoneBook["Егор Киняевский"] = 222222222; 
phoneBook["Техник44"] = 252507;
delete phoneBook["Антон Электрик"];
   console.log(phoneBook)