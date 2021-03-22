

    // //////////////////!FUNCTION() + CALLBACKFUNCTION() + DOM:
    // /*
    //     Bài tập về nhà Session 7:
    // */



    // //Bài 1 insertAdjacentHTML:
    // const container = document.getElementById('list');

    // for(let i = 0; i < 3; i++){
    //     container.insertAdjacentHTML('afterend', `<li> ${i} </li>`);
    // }



    // //Bài 2 setTimeOut/setInterval:
    // //setTimeOut:
    //     // function sayHello() {
    //     //     alert('Hello');
    //     // }
    //     // setTimeout(sayHello(), 3000);
    //     let myVar = setTimeout(() => alert('setTimeout'), 3000);
    //     clearTimeout(myVar);

    // //setInterval:
    //     let timerId = setInterval(() => alert('setInterval'), 3000);
    //     clearInterval(timerId);



    ////Bài 3: Answer question:
        //// 3.1: let: No
        //// 3.2: var: Yes



    // //Bài 4: ElementsByTagName():
    // let tagName = document.getElementsByTagName("li");

    // console.log(tagName[1]);

    // for (let i = 0; i < tagName.length; i++){
    //     console.log(tagName[i]);
    // }



    // //Bài 5: 
    //     //ElementsByClassName():
    // let className1 = document.getElementsByClassName("singer");

    // console.log(className1[1]);

    // for(let i = 0; i < className1.length; i++){
    //     console.log(className1[i]);
    // }

    //     //ElementsByTagName():
    // let tagName1 = document.getElementsByTagName("div");

    // console.log(tagName1[2]);

    // for(let i = 0; tagName1.length; i++){
    //     console.log(tagName1[i]);
    // }



    // //Bài 6: remove():
    // let divXoa = document.getElementById("div-02");

    // divXoa.remove();



    // //Bài 7: EventListener():
    // let btn1 = document.getElementById("button1");
    // let btn2 = document.getElementById("button2");

    // btn1.addEventListener("click", (e) => {
    //     console.log("click", e.target);
    // });

    // btn2.addEventListener("keydown", (e) => {
    //     console.log("key down",e.key);
    // })



    // //Bài 8:
    // function show(){
    //     alert("Nguyễn Ngọc Khánh và Tiền");
    // }
    // show();


    // //Bài 9:
    // function show1(name, wish){
    //     alert(`${name} và ${wish}`)
    // }
    // show1("Khánh", 'Sức Khỏe');



    // //Bài 10:
    // function show3(name, wish){
    //     name = prompt("Nhập tên: ");
    //     wish = prompt("Nhập wish: ");

    //     if(wish){
    //         alert(`${name} và ${wish}`);
    //     }
    //     else{
    //         alert(`Chưa có wish`);
    //     }
    // }

    // show3();
    // // show3("Khánh");



    // //Bài 11:
    //     //11.1: Write an HTML for the UI above, create and link a JS file to it:  bên HTML: 

    //     //11.2: Get (Read) the ‘Upper it!!’ button
    // let buttonUpper = document.getElementById("buttonUpper");
    // console.log(buttonUpper);
    // console.dir(buttonUpper);


    //     //11.3: Catch event when ‘Upper it!!!!’ button is clicked:
    // buttonUpper.addEventListener("click", function(e) {
    //     console.log("Click");
    // });


    //     //11.4: Get (Read) ‘Enter your name’ input:
    // var inputName = document.getElementById("inputName");
    // console.log(inputName);


    //     //11.5: Get (Read) username from the input:
    // inputName.addEventListener("input", function(e){
    //     console.log(`${inputName.value}`);
    // });


    //     //11.6: Convert user’s name to uppercase:
    // buttonUpper.addEventListener("click", (e) => {
    //     let nameUpper = inputName.value.toUpperCase();
    //     console.log(nameUpper);
    // });


    //     //11.7: Get (Read) the ‘Your result will appear here’ tag:
    // var resultDiv = document.getElementsByTagName("div");
    // console.log(resultDiv[0]);
    // console.log(resultDiv[0].innerHTML);


    //     //11.8: Update the ‘Your result will appear here’ to the username uppercase version:
    // buttonUpper.addEventListener("click", (e) => {
    //     inputName.value = resultDiv[0].innerHTML;
    //     let nameUpper = inputName.value.toUpperCase();
    //     console.log(nameUpper);
    // });



    //Bài 12:

        //12.1: In JS, Initialize a variable named items to store the data above, log/print it out:
    var items = ["Backpack", "Miband watch", "Ring"];
    console.log(items);

        
        //12.2: In HTML, create an ul with some test items:

        //12.3: Get (Read) the list from DOM:
    var itemListUL = document.getElementById("itemListUL");
    console.log(itemListUL);

        //12.4: Show ALL of the data in items, each item is a &lt;li&gt; tag
    for (let i = 0; i < items.length; i++){
        itemListUL.innerHTML += `<li> ${items[i]} <button class="removeButton"> Remove </button> </li>  `;

    }
        //The test items now can be removed
   
        itemListUL.removeChild(itemListUL.childNodes[1]);
        itemListUL.removeChild(itemListUL.childNodes[2]);
    


        //12.5: Update the UI (HTML) as follows:

        //12.6: Get the ‘New item’ input and ‘Add’ button:
    var itemInput = document.getElementById("itemInput");
    console.log(itemInput);

    var addButton = document.getElementById("addButton");
    console.log(addButton);

        //12.7: Register ‘Add‘ button click event:
    addButton.addEventListener("click", (e) => {
        console.log("Click");
    });

        //12.8: When ‘Add’ button is clicked, the value of ‘New item’ input:
    itemInput.addEventListener("input", (e) => {
        console.log(itemInput.value);
    });

        //12.9: When ‘Add’ button is clicked, add the value of ‘New item’ input to items Array:
        //12.10: Update UI (HTML) to reflect the update of items Array:
        //12.11: Reset the input after adding new item:
        //12.12: Add remove button for each item:
    addButton.addEventListener("click", (e) => {
        itemListUL.innerHTML += `<li> ${itemInput.value} <button class="removeButton"> Remove </button> </li>`;


    });


        //!12.13: Register to each ‘remove’ buttons’ event:
        //!12.14: Each time a ‘remove’ button clicked, identify the index of the clicked item:
        //!12.15: Remove from items based on clicked item index:
    var removeButton = document.querySelectorAll('.removeButton');
    console.log(removeButton);  //-> trả về mảng vì là byclassname

    for (let i = 0; i < removeButton.length; i++){
        removeButton[i].addEventListener("click", function removeme() {
           this.closest('li').remove();
       })
            
    };
    

       
    
    




   

    












    
    






    

    







