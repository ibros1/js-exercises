const fromLangEl = document.querySelector("#fromLangEl");
const toLangEl = document.querySelector("#toLangEl");
const textTranslate = document.querySelector(".textTranslate");
const translateBtn = document.querySelector(".translateBtn");
const translatedText = document.querySelector(".translatedText");
const fetchLanguages = async () => {
  const res = await fetch(
    "https://deep-translate1.p.rapidapi.com/language/translate/v2/languages",

    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0c4c9322aamsh2bbfaf4a939ad84p13cd40jsn9ff325e9ed58",
        "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    },
  );

  const data = await res.json();

  data.languages.map((ln) => {
    // option from
    const optionFromEl = document.createElement("option");
    optionFromEl.textContent = ln.name;
    optionFromEl.value = ln.language;

    fromLangEl.appendChild(optionFromEl);

    // option to
    const optionToEl = document.createElement("option");
    optionToEl.textContent = ln.name;
    optionToEl.value = ln.language;
    toLangEl.appendChild(optionToEl);
  });
};

// translate api

const translateFn = async () => {
  const query = textTranslate.value;
  const source = fromLangEl.value;
  const target = toLangEl.value;

  const res = await fetch(
    "https://deep-translate1.p.rapidapi.com/language/translate/v2",
    {
      method: "POST",
      headers: {
        "x-rapidapi-key": "0c4c9322aamsh2bbfaf4a939ad84p13cd40jsn9ff325e9ed58",
        "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: `${query}`,
        source: `${source}`,
        target: `${target}`,
      }),
    },
  );

  const data = await res.json();

  translatedText.textContent = data.data.translations.translatedText[0];
  console.log(translatedText);
};

const sumbitTranslate = (e) => {
  e.preventDefault();
  translateFn();
};

// events
fetchLanguages();
translateBtn.addEventListener("click", sumbitTranslate);
