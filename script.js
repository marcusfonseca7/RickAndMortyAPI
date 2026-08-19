inputCharacter = document.getElementById("input-character");
inputCategory = document.getElementById("category");
p = document.getElementById("paragraph");
label = document.getElementById("label")

async function catchCharacter() {
  const category = inputCategory.value;
  const id = inputCharacter.value;
  const response = await fetch(`https://rickandmortyapi.com/api/${category}/${id}`);
  const data = await response.json();

  console.log(category, id)
  console.log(data)
  p.innerHTML = JSON.stringify(data.name);
}

inputCharacter.addEventListener("input", () => {
    catchCharacter()
})