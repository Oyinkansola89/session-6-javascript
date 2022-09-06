//console.log("Start of javaScript");
//console.log("what is the parent node", document.body.parentNode);
const listDomElements = () => {
  const children = document.body.childNodes;
  //console.log("children:", children);

  for (let i = 0; i < children.length; i++) {
    console.log("What is children" + children[i]);
  }
};
//listDomElements(); - the function has been called in the HREF

//to get the inner.HTML of H3 - give an id then:
const changeH3Text = () => {
  const contact = document.getElementById("contact");
  console.log(contact.innerHTML);
  console.log((contact.innerHTML = "Oyinkan is the best coder"));
};
//changeH3Text(); - called in button in HTML

//Task
const getFirstParaText = () => {
  const firstPara = document.querySelector("#firstpara");

  return firstPara.innerHTML;
};

getFirstParaText();

const getNodeList = () => {
  const allNodeList = document.querySelector(".about");

  return allNodeList;
};

getNodeList();

//Task 2 - create button in HTML and created html in JS and append to the DOM
const birmingham = {
  population: 500000,
};

const displayPopulation = () => {
  const paragraph = document.createElement("p");
  const firstContent = document.createTextNode(
    `Population ${birmingham.population}`
  );
  paragraph.appendChild(firstContent);
  const header = document.querySelector("#pop");
  header.appendChild(paragraph);
};

//displayPopulation(); called in html
//Task3 - create button using JS to display the population
//const createButtonElement = () => {
// const button = document.createElement("button");
//const content = document.createTextNode("Show Population");
//button.appendChild(content);
//button.onclick = displayPopulation;
//document.body.appendChild(button);
//};

//createButtonElement();

//Task4
const fruits = [
  "apple",
  "orange",
  "banana",
  "kiwi",
  "avocado",
  "celery",
  "aubergine",
];

function createListOfFruits(fruits) {
  const listContainer = document.createElement("div");

  const title = document.createElement("h2");
  const titleText = document.createTextNode("List of fruit");
  title.appendChild(titleText);
  const unorderedList = document.createElement("ul");

  fruits.map((fruit) => {
    if (fruit.length > 5) {
      //console.log("fruit:", fruit);
      const listItem = document.createElement("li");
      listItem.textContent = fruit;
      //console.log("listItem:", listItem.textContent);
      unorderedList.appendChild(listItem);
    }
  });
  listContainer.appendChild(title);
  listContainer.appendChild(unorderedList);
  document.body.appendChild(listContainer);
}

createListOfFruits(fruits);
