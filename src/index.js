function displayRecipe(response) {
  let newRecipe = document.querySelector("#recipe");
  newRecipe.innerHTML = response.data.answer;
}
function generateRecipe(event) {
  event.preventDefault();
  let instructions = document.querySelector("#instructions");
  let ingredients = document.querySelector("#ingredients");
  let method = document.querySelector("#method");

  let prompt = `You are AI assistant who is specialize in cooking, Please provide a recipe with those specific ${instructions.value}`;
  let context = `Please submit a simple recipe for 2 people. Please display the ingredients in the div class="ingredients" and the instructions into div class="method" `;
  let apiKey = "625t01634a276d07f8dc7437o8d4abf9";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let newRecipe = document.querySelector("#recipe");
  newRecipe.classList.remove("hidden");
  newRecipe.innerHTML = `<div class="generating">⏳ Generating a recipe with ${instructions.value}</div>`;
  axios.get(apiUrl).then(displayRecipe);
}
let form = document.querySelector("#form");
form.addEventListener("submit", generateRecipe);
