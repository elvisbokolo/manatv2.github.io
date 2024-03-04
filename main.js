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
      newDiv.className = "container";
      newDiv.innerHTML = `
           <div class="d-flex justify-content-between">
              <h3 class="fw-bold"><b></b>${element.name}</h3>
              <h5 class="text-info mr-2"><a href="lecture.php" class="" style="text-decoration: none;">${element.desc} <i class="fas fa-angle-right" style="font-size: 20px;"></i></a></h5>
          </div>

            <div id="owl-demo5" class="owl-carousel owl-theme owl-img-responsive">

              <div class="item">
                <a href="lecture.php" class="" style="text-decoration: none;">
                  <div class="card shadow-sm" style="height: 100px;">
                      <img src="assets/img/evtele.png" alt="..." class="img-fluid">
                  </div>
                </a>
              </div>

            </div>`;
      frame.appendChild(newDiv);
    });
  })
.catch((error) => console.error("Error loading JSON file", error));  