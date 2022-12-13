let denverBootCamp = {
    team: {
        instructor: {
            name: 'Robert Anderson',
            city: 'Bend',
            catchPhrase () {
                console.log("Welcome back y'all.");
            }
        },
        teachingAssistants: {
            female: {
                name: 'Stephany Bolivar',
                city: 'Brooklyn',
                catchPhrase () {
                    console.log("Woot Woot");
                }
            }
        }
    }
};

console.log(denverBootCamp);

denverBootCamp.students = [
    {
      name: "Curtis Henley",
      city: "Jacksonville",
      catchPhrase() {
        console.log("It's pizza time.");
      },
    },
  ];

  console.log(denverBootCamp);

  denverBootCamp.students.push({
    name: "Grace",
    city: "Chicago",
    catchPhrase() {
      console.log("Hakuna Matata");
    },
  });
  
  console.log(denverBootCamp);

  denverBootCamp.students.push([
    {
      name: "Manna",
      city: "Washington D.C.",
      catchPhrase() {
        console.log("Practice makes perfect");
      },
    },
  ]);
  
  console.log(denverBootCamp);

delete denverBootCamp.students.splice([2]);
console.log(denverBootCamp);

console.log(denverBootCamp.students[1]);
