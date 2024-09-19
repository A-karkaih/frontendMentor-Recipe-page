const App = () => {
  return (
    <div className="">
      <div className="sm:w-[700px]  sm:mx-auto sm:mt-10 sm:rounded-xl sm:shadow-lg bg-white sm:pt-4">
        <img
          className="h-[200px] sm:w-[96%] sm:mx-auto sm:rounded-2xl"
          src="/image-omelette.jpeg"
          alt=""
        />
        <div className="w-[90%] mx-auto  mt-4 flex flex-col gap-5">
          <h1 className="text-4xl font-bold text-amber-950">
            Simple Omelette Recipe
          </h1>
          <p className="text-[16px]">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <div className="h-[180px] bg-[#FEF7FD] pl-7 pt-4 rounded-xl shadow-xl">
            <h1 className="text-[#59243B] text-xl font-bold">
              Preparation time Total:
            </h1>
            <ul className="list-disc flex flex-col gap-3 ml-8 mt-3">
              <li className="pl-3">
                <span className="text-[#59243B] font-bold text-lg">Total:</span>{" "}
                <span className="text-lg"> Approximately 10 minutes</span>
              </li>
              <li className="pl-3">
                <span className="text-[#59243B] font-bold text-lg">
                  Preparation:
                </span>{" "}
                <span className="text-lg">5 minutes</span>
              </li>
              <li className="pl-3">
                <span className="text-[#59243B] font-bold text-lg">
                  Cooking:
                </span>{" "}
                <span className="text-lg">5 minutes</span>
              </li>
            </ul>
          </div>
          <h1 className="text-2xl font-bold text-amber-700 ">Ingredients</h1>
          <ul className="list-disc flex flex-col gap-3 ml-8 ">
            <li className="pl-3">
              <span className="text-lg"> 2-3 large eggs</span>
            </li>
            <li className="pl-3">
              <span className="text-lg"> Salt, to taste</span>
            </li>
            <li className="pl-3">
              <span className="text-lg"> Pepper, to taste</span>
            </li>
            <li className="pl-3">
              <span className="text-lg"> 1 tablespoon of butter or oil</span>
            </li>
            <li className="pl-3">
              <span className="text-lg">
                {" "}
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </span>
            </li>
          </ul>
          <hr className=" border-gray-400" />
          <h1 className="text-2xl font-bold text-amber-700 "> Instructions</h1>
          <ol className="list-decimal flex flex-col gap-3 ml-8">
            <li className="pl-3">
              <span className="text-amber-950 font-bold text-lg">
                Beat the eggs:
              </span>{" "}
              <span className="text-lg">
                {" "}
                In a bowl, beat the eggs with a pinch of salt and pepper until
                they are well mixed. You can add a tablespoon of water or milk
                for a fluffier texture.
              </span>
            </li>
            <li className="pl-3">
              <span className="text-amber-950 font-bold text-lg">
                Heat the pan:
              </span>{" "}
              <span className="text-lg">
                {" "}
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </span>
            </li>
            <li className="pl-3">
              <span className="text-amber-950 font-bold text-lg">
                Cook the omelette:
              </span>{" "}
              <span className="text-lg">
                {" "}
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </span>
            </li>
            <li className="pl-3">
              <span className="text-amber-950 font-bold text-lg">
                Add fillings (optional):
              </span>{" "}
              <span className="text-lg">
                {" "}
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </span>
            </li>
            <li className="pl-3">
              <span className="text-amber-950 font-bold text-lg">
                Fold and serve:
              </span>{" "}
              <span className="text-lg">
                {" "}
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </span>
            </li>
            <li className="pl-3">
              <span className="text-amber-950 font-bold text-lg"> Enjoy:</span>{" "}
              <span className="text-lg">
                {" "}
                Serve hot, with additional salt and pepper if needed.
              </span>
            </li>
          </ol>
          <hr className=" border-gray-400" />
          <h1 className="text-2xl font-bold text-amber-700 "> Nutrition</h1>
          <p className="text-[16px]">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="border-collapse  ">
            <tr className="border-b-[1px] border-gray-400 ">
              <td className="py-4" >Calories</td>
              <td className="text-amber-700 py-4"> 277kcal</td>
            </tr>

            <tr className="border-b-[1px] border-gray-400  ">
              <td className="py-4">Carbs</td>
              <td className="text-amber-700 py-4"> 0g</td>
            </tr>

            <tr className="border-b-[1px] border-gray-400  ">
              <td className="py-4">Protein</td>
              <td className="text-amber-700 py-4"> 20g</td>
            </tr>

            <tr className=" ">
              <td  className="py-4">Fat</td>
              <td className="text-amber-700 py-4"> 22g</td>
            </tr>
          </table>
        </div>
        <div className="h-5"></div>
      </div>
      <div className="sm:h-9"></div>
    </div>
  );
};

export default App;
