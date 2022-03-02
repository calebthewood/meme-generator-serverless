
const memes = [
  {
    topLine: "such clever",
    bottomLine: "much funny",
    image: "https://picsum.photos/200",
  },
  {
    topLine: "such clever",
    bottomLine: "much funny",
    image: "https://picsum.photos/400",
  },
  {
    topLine: "such clever",
    bottomLine: "much funny",
    image: "https://picsum.photos/300",
  },
];

function showMemes() {

  let memeArea = document.getElementById("showMemes");
  let html = "";

  for (let i = 0; i < memes.length; i++) {
    let meme = memes[i];
    let top = `<div class="text" id="topLine">${meme.topLine}</div>`;
    let bottom = `<div class="text" id="bottomLine">${meme.bottomLine}</div>`;
    let image = `<img src="${meme.image}" class="memeImage" alt="error loading image.">`;
    let deleteBtn = `<button class="delete-btn" id="delete-${i}">🗑️</button>`;
    html += `
      <div class="meme" id="meme-${i}">
        ${top}
        ${bottom}
        ${image}
      </div>
        ${deleteBtn}`;
  }
  memeArea.innerHTML = html;
}

function addMeme(top, bottom, imageURL) {
  console.log("meme added");
  memes.push({
    topLine: top,
    bottomLine: bottom,
    image: imageURL,
  });
}

function deleteMeme(id) {
  memes.splice(id, 1);
}

function handleDelete(event) {
  let memeID = Number(event.target.id.replace("delete-", ""));
  deleteMeme(memeID);
  showMemes();
  console.log(memeID);
}

function handleSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("meme-form");

  const image = form.image.value;
  const topLine = form.top.value;
  const bottomLine = form.bottom.value;

  form.reset();
  addMeme(topLine, bottomLine, image);
  showMemes();
}

showMemes();
document.getElementById("showMemes").addEventListener("click", handleDelete);
document.getElementById("form-submit").addEventListener("click", handleSubmit);