const loadMeal = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeal(data.meals));
};

const displayMeal = (meals) => {
  //   console.log(meals);
  const mealContainer = document.getElementById("Meal-container");
  mealContainer.innerHTML = ``;
  meals.forEach((meal) => {
    // console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList = "col";
    mealDiv.innerHTML = `
        <div class="card" onclick="loadFoodDetails(${meal.idMeal})">
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

const searchFood = () => {
  const searchFoodItem = document.getElementById("input-meal");
  const searchText = searchFoodItem.value;
  //   console.log("searching Food", searchText);
  loadMeal(searchText);
  searchFoodItem.value = "";
};

const loadFoodDetails = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then((res) => res.json())
    .then((mealDetails) => viewFoodDetails(mealDetails.meals[0]));
};

const viewFoodDetails = (meal) => {
  const viewFoodDetailsElement = document.getElementById("view-food-details");
  viewFoodDetailsElement.innerHTML = "";
  const viewFoodDetailsDiv = document.createElement("div");
  viewFoodDetailsDiv.innerHTML = `
  <div class="d-flex justify-content-center">
  <div class="card mb-3" >
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">
          ${meal.strInstructions}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    `;
  viewFoodDetailsElement.appendChild(viewFoodDetailsDiv);
};

loadMeal("");
