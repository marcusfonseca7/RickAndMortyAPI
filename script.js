inputCharacter = document.getElementById("input-character");
inputCategory = document.getElementById("category");
p = document.getElementById("paragraph");
label = document.getElementById("label");
avatar = document.getElementById("avatar");

async function catchCharacter() {
  const category = inputCategory.value;
  const id = inputCharacter.value;
  const response = await fetch(
    `https://rickandmortyapi.com/api/${category}/${id}`,
  );
  const data = await response.json();

  console.log(category, id);
  console.log(data);
  p.innerHTML = JSON.stringify(data.name);
  avatar.src = JSON.stringify(data.image).slice(1, -1);
}

inputCharacter.addEventListener("input", () => {
  catchCharacter();
});

inputCategory.addEventListener("change", () => {
  console.log(inputCategory.value);
  if (inputCategory.value === "character") {
    label.innerHTML = "Digite o personagem que deseja ver as informações!";
  } else if (inputCategory.value === "episode") {
    label.innerHTML = "Digite o episódio que deseja ver as informações!";
  } else {
    label.innerHTML = "Digite a localização que deseja ver as informações!";
  }
});
