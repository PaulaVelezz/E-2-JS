// Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

// 👉 Crear un archivo HTML con un input de tipo number, un botón y un contenedor en el cual renderizar el resultado de la búsqueda. 

// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
// 👉 Renderizar en el contenedor un h2 con el nombre y en un h3 con el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

// 🚨 Si el número ingresado no coincide con ningún id, renderizar (no sirve un alert) un mensaje de error en el contenedor. 
// 🚨 Si no se ingresa un número, renderizar (no sirve un alert) un mensaje de error diferente en el contenedor. 
// 🚨 Solo debe renderizarse una única cosa , ya sea la nueva pizza, o el nuevo mensaje de error. El resto se debe pisar.

const Pizzas = [
    {
        id: 1,
        nombre: "Pizza Margarita",
        ingredientes: [ "Prepizza","Salsa Roja", "Mozzarella","Albaca Fresca", "Aceitunas"],
        precio: 350,
    },
    {
        id: 2,
        nombre: "Pizza Fugazza",
        ingredientes: [ "Prepizza","Cebolla", "Parmesano", "Aceitunas"],
        precio: 400,
    },
    {
        id: 3,
        nombre: "Pizza Fugazzeta",
        ingredientes: [ "Prepizza","Salsa Roja", "Cebolla", "Mozzarella","Parmesano", "Aceitunas"],
        precio: 450,
    },
    {
        id: 4,
        nombre: "Pizza Pasto",
        ingredientes: [ "Prepizza","Salsa Roja", "Pesto", "Mozzarella", "Aceitunas"],
        precio: 400,
    },
    {
        id: 5,
        nombre: "Pizza Palmitos",
        ingredientes: [ "Prepizza","Salsa Roja", "Salsa Golf", "Mozzarella","Palmitos", "Aceitunas"],
        precio: 600,
    },
    {
        id: 6,
        nombre: "Pizza Hawaiana",
        ingredientes: [ "Prepizza","Salsa Roja", "Anana", "Mozzarella","Cerezas", "Jamón","Aceitunas"],
        precio: 650,
    }
]