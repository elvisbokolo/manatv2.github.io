import data from "./data.json" assert { type: "json" };

// function displayData(datas) {
//     const caintainer = document.getElementById('caintainer')
//     const nom = document.createElement('h2');
//     nom.id = datas.id;
//     nom.className = "ml-2 fw-bold";
    
// }


// onload = function () {
//     fetch("./data.json")
//     .then((response) => response.json())
//     .then((data) => {
//         for (let datas of data) {
//             displayData(datas)
//             }
//         }
//     )
// }


fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const frame = document.getElementById("loop");
    data.map((element) => {
      console.log(element);
      let newDiv = document.createElement("div");
      newDiv.id = element.id;
      newDiv.className = "row";
      newDiv.innerHTML = `

            <div class="col-6">

              <div class="">
                <a href="lecture.html" class="" style="text-decoration: none;">
                  <div class="card shadow-sm">
                      <img src="${element.chaine}" alt="..." class="img-fluid">
                  </div>
                </a>
              </div>

            </div>`;

          
      frame.appendChild(newDiv);
    });
  })
.catch((error) => console.error("Error loading JSON file", error)); 
