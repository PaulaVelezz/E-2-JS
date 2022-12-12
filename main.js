const pizzas = [
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
];

const numberInput = document.getElementById("number-input");
const submitInput = document.getElementById("submit-number");
const form = document.getElementById("form");
const container = document.getElementById("container");

const searchPizza = () => {
    const numberValue = numberInput.value.trim();
  
    const findPizzas = pizzas.find((pizza) => {
        return pizza.id == numberValue;
      });
      if (isEmpty(numberValue)) {
        container.classList.add("hidden");
        showError(numberInput, "Es necesaario que ingreses algún número.");
      } else if (!findPizzas) {
        container.classList.add("hidden");
        showError(numberInput, "Tiene que ser un número entre 1 y 6.");
      } else if (findPizzas) {
        removeError(numberInput);
        container.classList.remove("hidden");
        container.innerHTML = `<div>
        <h2 class="titulo-pizza">${findPizzas.nombre}</h2>
        <h3 class="precio">$${findPizzas.precio}</h3>
      </div>`;
      }
    };

const isEmpty = (value) => !value.length;

const showError = (input, message) => {
  const div = input.parentElement;
  div.classList.add("error");
  const error = div.querySelector("small");
  error.textContent = message;
};

const removeError = (input) => {
  const div = input.parentElement;
  div.classList.remove("error");
  const error = div.querySelector("small");
  error.textContent = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  searchPizza();
});