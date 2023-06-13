const personas = ["Juan", "Laura", "Patricia", "María", "Paula"];

// let p1 = personas[0]
// let [ p1,,,,loquesea,p6] = personas;
// console.log(p1)
// console.log(loquesea);
// console.log(personas)

// p6= "Pepe"
// console.log(p6)
// console.log(personas)

const Usuario = {
  nombre: "Javier",
  email: "javi@gmail.com",
  registrado: true,
  seguidores: ["Ger", "Gabriel", "Jorge", "Rebeca", "Xavi"],
};

// console.log(Usuario.email)
// console.log(Usuario["registrado"])
// console.log(Usuario.seguidores[4])

// const { nombre: firstName, email, seguidores, edad = 29 } = Usuario;
// const [, , , p] = seguidores;
// Usuario.edad = 26
// console.log(edad)

const Pokemon = {
  count: 1126,
  next: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
  previous: null,
  results: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
  ],
};
const { results } = Pokemon;

results.forEach((element) => {
  const { name } = element;
  console.log(name);
});

function sum(a, b, c) {
  console.log(a, b, c);
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);

console.log(result);

const array1 = ["patata", "tomate", "lechuga"];
const array2 = [1, true, "chocolate"];

const objeto1 = {
  a: 10,
  b: "caracola",
};

const objeto2 = {
  c: 2,
  d: "cocacola",
};

const concatenarArray = [...array1, ...array2];
// console.log(concatenarArray);

const mergearObjeto = { ...objeto1, ...objeto2 };
// console.log(mergearObjeto);

const Usuario2 = {
    nombre: 'Laura',
    email: 'laura@gmail.com',
    edad: 31,
    registrado: false,
    seguidores: ['Ger', 'Gabriel', 'Angela']
}

const {edad, registrado, ...losdemas} = Usuario2
// console.log(losdemas)


function listarArticulos(...articulos){//rest
    console.log(...articulos);//spread
}

listarArticulos('Hola', 2, true, {a:3, c:17}, [1,2,3,4])
listarArticulos('Tarjeta de credito', 'Paragüas', 'Mochila')
listarArticulos(2)

