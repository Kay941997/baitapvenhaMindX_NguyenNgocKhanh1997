
    // //!Bài 1: Implement a counter with count up and count down button:
    // let buttonUp = document.getElementById("buttonUp");
    // let buttonDown = document.getElementById("buttonDown");
    // var number = document.getElementById("number");
    // var count = 0;

    // buttonUp.addEventListener('click', (e)=> {
    //     count += 1;
    //     number.innerHTML = count;
    // });

    // buttonDown.addEventListener('click', (e) => {
    //     count -= 1;
    //     number.innerHTML = count;
    // });


    // //!Bài 2: Implement a timer, with time out entered and can be stopped by users:
    // var inputSeconds = document.getElementById("inputSeconds");
    // var timer = document.getElementById("number");
    // var buttonStart = document.getElementById("buttonStart");
    // var buttonStop = document.getElementById("buttonStop");

    // let num = 0;
    // let intervalId = 0;

    // buttonStart.addEventListener('click', (e)=>{

    //     num = inputSeconds.value;
    
    //     intervalId = setInterval(function(){
    //         if(num >=0){
    //             num--;
    //             timer.innerHTML = num;
    //         }

    //     }, 1000)
    // });

    // buttonStop.addEventListener('click', (e) =>{
    //     clearInterval(intervalId);
    // });



    // //!Bài 3: Implement an offline random quote app:
    // let buttonReload = document.getElementById('buttonReload');
    // let text = document.getElementById('text');
    // let author = document.getElementById('author');

    // let arr = [
    //     {
    //         "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    //         "quoteAuthor": "Thomas Edison"
    //         }, {
    //         "quoteText": "You can observe a lot just by watching.",
    //         "quoteAuthor": "Yogi Berra"
    //         }, {
    //         "quoteText": "A house divided against itself cannot stand.",
    //         "quoteAuthor": "Abraham Lincoln"
    //         }, {
    //         "quoteText": "Difficulties increase the nearer we get to the goal.",
    //         "quoteAuthor": "Johann Wolfgang von Goethe"
    //         }, {
    //         "quoteText": "Fate is in your hands and no one elses",
    //         "quoteAuthor": "Byron Pulsifer"
    //         }, {
    //         "quoteText": "Be the chief but never the lord.",
    //         "quoteAuthor": "Lao Tzu"
    //         }, {
    //         "quoteText": "Nothing happens unless first we dream.",
    //         "quoteAuthor": "Carl Sandburg"
    //         },
    // ]

    // buttonReload.addEventListener('click', function(){
    
    //         let random = Math.floor(Math.random() * arr.length);
    //         console.log(arr[random]);

    //         text.value = arr[random].quoteText;
    //         author.value = arr[random].quoteAuthor;
    //         console.log(text.value);
    //         console.log(author.value);
        
    //         text.innerHTML = text.value;
    //         author.innerHTML = author.value;
    // });




    //!Bài 4: Take a look at the following Timesheet:
        //1.  In JS, Initialize a variable named timeSheetData to store the data above, log/print it out:
        let table = document.getElementById("table");
        console.log(table)

        let tableBody = document.getElementById('tableBody');
        console.log(tableBody);
        console.dir(tableBody);

        let textProject = document.getElementById('textProject');
        let textTask = document.getElementById('textTask');
        let textTime = document.getElementById('textTime');

        console.dir(textTime)


    
        //!Nút Add Button:
        let buttonAdd = document.getElementById('buttonAdd');

        buttonAdd.addEventListener("click", function(){
            tableBody.innerHTML += 
            `<tr class="items" >
                <td> ${textProject.value} </td>
                <td> ${textTask.value} </td>
                <td> ${textTime.value} </td>
                <td> <button class="buttonsDelete"> x </button> 
                <button class="buttonsUpdate"> u </button></td>
            </tr>`
            console.log(tableBody.innerHTML);

            removeLine();
            updateLine();
        });



        //!Nút Delete Button:
        //Phải dùng parentNode.parentNode để từ event.target thẻ button -> td -> tr xóa cả item:
        //Không dùng vòng for(item of item) vì chỉ xóa được button, ko xóa được item, hoặc là chưa biết cách:
        let items = document.getElementsByClassName('items');
        let buttonsDelete = document.getElementsByClassName('buttonsDelete');

        function removeLine(){
            for (buttonDelete of buttonsDelete){
                buttonDelete.addEventListener("click", function removeItem(event){

                    var x = event.target;
                    console.log(x);
                    
                    var parentX = x.parentNode;
                    console.log(parentX);

                    parentX.parentNode.remove();   //!parentNode từ thẻ con ra thẻ cha
                })
            }
        }
        removeLine();



        //!Nút Update:
        let buttonClear = document.getElementById('buttonClear');
        let buttonsUpdate = document.getElementsByClassName('buttonsUpdate');

        let itemsProject = document.getElementsByClassName('itemsProject');
        let itemsTask = document.getElementsByClassName('itemsTask');
        let itemsTimeSpent = document.getElementsByClassName('itemsTimeSpent');

        function updateLine(){
            for (buttonUpdate of buttonsUpdate){
                buttonUpdate.addEventListener('click', function(event){
                    var x = event.target;
                    var parentX = x.parentNode;
                    var parentParentX = parentX.parentNode;

                    buttonAdd.innerHTML = 'Update';

                    
                    // textProject.value = `${y}`;



                

                });
            }

        }
        updateLine();
        

        




               
        

   


        
       










