const input = document.querySelector(".placeholder");
let btn = document.querySelector(".button");
let newDictionary = document.querySelector(".dictionary");
const english = document.querySelector(".english");

btn.addEventListener("click", addNewWord);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addNewWord();
  }
});

// добавление нового слова через input
function addNewWord() {
  const indexes = document.querySelectorAll(".index");
  const divDict = document.createElement("div");
  divDict.className = "row";
  const div = document.querySelector(".russian");
  const newElement = document.createElement("div");
  const newIndex = document.createElement("span");
  newElement.className = "russian";
  newIndex.className = "index";
  newElement.innerText = input.value;
  newIndex.innerText = indexes.length + 1;

  newElement.prepend(newIndex);
  divDict.appendChild(newElement);
  newDictionary.appendChild(divDict);

  // english===========================
  const englElem = document.createElement("div");
  englElem.className = "english";
  // const englElemSpan = document.createElement("span");
  divDict.appendChild(englElem);

  // translit ========================
  const englWord = translit(input.value);
  englElem.innerText = englWord;

  // krestik создание========================
  const btnDel = document.createElement("button");
  const newImg = document.createElement("img");
  newImg.className = "english_krestik";
  newImg.src = "./icon/krestik.svg";
  newImg.alt = "#";
  btnDel.style.cssText = `
  border-radius: 45px;
  display: flex;
  margin-left: 130px;`;

  // удаление по крестику================
  newImg.addEventListener("click", (event) => {
    newElement.remove();
    englElem.remove();
    divDict.remove();
    let indexes = document.querySelectorAll(".index");
    indexes.forEach((elem, index) => {
      elem.innerText = index + 1;
    });
  });

  btnDel.appendChild(newImg);
  englElem.appendChild(btnDel);
  divDict.append(englElem);

  // обрезаем текст ================
  if (newElement.innerText.length > 6) {
    newElement.innerText = newElement.innerText.slice(0, 7) + "...";
    englElem.innerText = englElem.innerText.slice(0, 5) + "...";
    newElement.className = "russian_cut";
    englElem.className = "english_cut";

    // krestik ========
    const btnDel = document.createElement("button");
    const newImg = document.createElement("img");
    newImg.className = "english_krestik";
    newImg.src = "./icon/krestik.svg";
    newImg.alt = "#";
    btnDel.style.cssText = `
    border-radius: 45px;
    display: flex;
    margin-left: 130px;`;

    // удаление по крестику================
    newImg.addEventListener("click", (event) => {
      newElement.remove();
      englElem.remove();
      divDict.remove();
      let indexes = document.querySelectorAll(".index");
      indexes.forEach((elem, index) => {
        elem.innerText = index + 1;
      });
    });
    btnDel.appendChild(newImg);
    englElem.appendChild(btnDel);
    divDict.append(englElem);

    // ======tool-tip===========

    const tooltip = document.createElement("span");
    tooltip.className = "tooltip-up";
    tooltip.innerText = input.value;
    newElement.appendChild(tooltip);

    const tooltipEngl = document.createElement("span");
    tooltipEngl.className = "tooltip-up";
    tooltipEngl.innerText = englWord;
    englElem.appendChild(tooltipEngl);

    newElement.addEventListener("mouseover", showText);
    newElement.addEventListener("mouseleave", hideText);

    englElem.addEventListener("mouseover", showText2);
    englElem.addEventListener("mouseleave", hideText2);

    function showText() {
      tooltip.style.display = "block";
    }
    function hideText() {
      tooltip.style.display = "none";
    }

    function showText2() {
      tooltipEngl.style.display = "block";
    }
    function hideText2() {
      tooltipEngl.style.display = "none";
    }

    input.value = "";
  }
}

// удаление по кнопке Очистить Все ================
document.querySelector(".btnErase").addEventListener("click", (event) => {
   location.reload(true);
})

});

// ===function translit=============
function translit(addNewWord) {
  let result = "";
  for (let i = 0; i < addNewWord.length; i++) {
    if (dictionary[addNewWord[i]] && dictionary[addNewWord[i]]) {
      result += dictionary[addNewWord[i]];
    } else {
      result += addNewWord[i];
    }
  }
  return result;
}

const dictionary = {
  а: "а",
  б: "b",
  в: "v",
  В: "V",
  г: "g",
  Г: "G",
  Д: "D",
  д: "d",
  с: "с",
  д: "d",
  и: "i",
  Е: "E",
  е: "e",
  Ё: "Yo",
  ё: "yo",
  Ж: "Zh",
  ж: "zh",
  З: "Z",
  з: "z",
  И: "I",
  и: "i",
  Й: "J",
  й: "j",
  К: "K",
  к: "k",
  Л: "L",
  л: "l",
  М: "M",
  м: "m",
  Н: "N",
  н: "n",
  О: "O",
  о: "o",
  П: "P",
  п: "p",
  Р: "R",
  р: "r",
  С: "S",
  с: "s",
  Т: "T",
  т: "t",
  У: "U",
  у: "u",
  Ф: "F",
  ф: "f",
  Х: "X",
  х: "x",
  Ц: "C",
  ц: "c",
  Ч: "Ch",
  ч: "ch",
  Ш: "Sh",
  ш: "sh",
  Щ: "Shh",
  щ: "shh",
  Ъ: '"',
  ъ: '"',
  Ы: "Y'",
  ы: "y'",
  Ь: "'",
  ь: "'",
  Э: "E'",
  э: "e'",
  Ю: "Yu",
  ю: "yu",
  Я: "Ya",
  я: "ya",
};
