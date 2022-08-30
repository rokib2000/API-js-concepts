const loadMeal = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((res) => res.json())
    .then((data) => displayMeal(data.meals));
};

const displayMeal = (meals) => {
  //   console.log(meals);
  const mealContainer = document.getElementById("Meal-container");
  meals.forEach((meal) => {
    // console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList = "col";
    mealDiv.innerHTML = `
        <div class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">
                ${meal.strInstructions.slice(0, 200)}
                </p>
              </div>
            </div>
        `;
    mealContainer.appendChild(mealDiv);
  });
};

loadMeal();
