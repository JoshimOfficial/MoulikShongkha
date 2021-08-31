let button  = document.querySelector(".submit");

button.addEventListener("click", ()=>{

    let main = document.querySelector(".main");
    let createContainer = document.createElement("div");
    let userEntered = document.createElement("div");
    let totalSum = document.createElement("div");
    let getUser_input = document.querySelector(".number").value;
    let getUser_inputEmpty = document.querySelector(".number");
    let text = "Your Number is: ";
    let prime_number = "Yes this is Prime number "; 
    let not_integer = document.querySelector(".not_integer");
    let integer = document.querySelector(".integer");
       
    createContainer.classList.add("container");
    main.appendChild(createContainer);

    userEntered.classList.add("userEntered");
    createContainer.appendChild(userEntered);

    totalSum.classList.add("totalSum");
    createContainer.appendChild(totalSum);

    userEntered.innerHTML = text + getUser_input;


    for (let y = 2; y <= 9; y++) {
      let loops = y;
      let divide = getUser_input / loops;

      if(divide === Math.floor(divide)){
        integer.innerHTML = "integer Number"
      }
      else{
        not_integer.innerHTML = "not_integer Number"
      }
      console.log(divide)
      
    }
  
    if(integer.innerHTML == "integer Number" ) {
    totalSum.innerHTML = "No This is not a Prime number";
    }
    else{
    totalSum.innerHTML = prime_number;
    }


    getUser_inputEmpty.value = "";

})
