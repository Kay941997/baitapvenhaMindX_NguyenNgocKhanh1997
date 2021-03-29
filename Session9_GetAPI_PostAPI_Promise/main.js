
    ////////////////////////////////////!ASYNCTASK GET POST API - BẤT ĐỒNG BỘ:
    /*
    */

    // function tinhTong(a, b){
    //     let tong = a + b;
    //     return tong;
    // }

    // // tinhTong(a, b);

    // let strVietHoa = 'abcd'.toUpperCase();


    // let a = 10;
    // let b = 5;
    // let sum = tinhTong(a, b);
    // console.log(sum);


    // //add and upper ABCD:   
    // let str1 = 'ab';
    // let str2 = 'cd';
    
    // function addAndUpper(str1, str2){
    //     let add = String(str1) + String(str2);
    //     let addAndUp = add.toUpperCase();
    //     return addAndUp;
    // }

    // let result = addAndUpper(str1, str2);
    // console.log(result);



    //!Async - Bất đồng bộ:
    //!Phải là hàm Async thì mới dùng được Await:


    //!GET API:
    async function getAPI(){
        //!1. HTTP GET response thành Object Response:
            //await - đợi khi có kết quả rồi gán vào response:
        let response = await fetch("https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json");
        console.log(response);

        //!2. Parse Response - chuyển Object Response thành Array chứa các Json Object:
        let data = await response.json();
        console.log(data);

        //!3. Hiển thị vào danh sách html:
        for (miniData of data){
            let list = document.getElementById('list');
            list.innerHTML += `<li> ${miniData.quoteText} </li> <li> ${miniData.quoteAuthor} </li>`

        }


         //!Nếu bỏ await fetch() sẽ hiện promises fetch():
        // let response = fetch("https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json");
        // response.then(connection => {
        //     console.log('Connected');
        //     console.log(connection);
        //     const jsonPromise = connection.json();
        //     ........
        // })
        
    }
    getAPI();


    async function getAPI2(){
        let response = await fetch("https://reqres.in/api/users?fbclid=IwAR1KShCs_3T65FKzP_0Fq01MFDQqGu7rSTeDOjcFjvriWsPmnMQbgn5oBvQ");
        console.log(response);
        
        let data = await response.json();
        console.log(data);

        console.log(data.data);

        let dataX = data.data

        for(let i = 0; i < dataX.length; i++ ){
            let list = document.getElementById('list');

            list.innerHTML += `<li> ${dataX[i].avatar} </li>
                                <li> ${dataX[i].email} </li>
                                <li> ${dataX[i].first_name} </li>
                                <li> ${dataX[i].id} </li>
                                <li> ${dataX[i].last_name} </li>`
            
        }
    }
    getAPI2();



    //!POST API:
    async function postUserAPI(){
        let option = {
            method: "POST",
            //Thong tin phu request (header):
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            //Noi dung request:
            body: JSON.stringify({
                name: "Quan",
                job: "Developer",
            }),
        };
        const res = await fetch("https://reqres.in/api/users?fbclid=IwAR1KShCs_3T65FKzP_0Fq01MFDQqGu7rSTeDOjcFjvriWsPmnMQbgn5oBvQ", option);
        console.log(await res.json());
    }
    postUserAPI();




    //!PROMISE:
    /*
        resolve - value success
        reject - error
        1. There can be only a single result or an error
    */
        //!1. resolve:
    let promise = new Promise(function(resolve, reject){ 
        
        // after 1 second signal that the job is done with the result "done"
        setTimeout(function(){
            resolve("done"),1000
        })
    })


        //!2. reject:
    let promise1 = new Promise(function(resolve, reject){
        
        // after 1 second signal that the job is finished with an error
        setTimeout(function(){
            reject(new Error("whoops!")), 1000
        })
    })


        //!3. resolve + reject -> reject sẽ bị lỗi, vì chỉ chạy được 1 trong 2 cái:
    let promise2 = new Promise(function(resolve, reject){
        resolve("done");

        reject(new Error("whoops!"))
    })



    //!Promise.then:
    /*

    */
    promise.then(
        function (result){},
        
        function (error){},
    )

        //!1. promise.then result:
    let promise3 = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("done!", 1000);
        })
    })

    promise3.then(
        result =>  alert(result),   //run
        error => alert(error),  //doesn't run
    )


        //!2. promise.then error:
    let promise4 = new Promise(function(resolve, reject){
        setTimeout(function(){
            reject(new Error('whoops!')), 1000;
        })
    })

    promise4.then(
        result => alert(result), //doesn't run
        error => alert(error)   //run
    )


        //!3. promise.then alert fast:
    promise4.then(alert);



    //!Promise.catch:
    /*
        
    */
    let promise5 = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Whoops!")), 1000);
    });
      
    // .catch(f) is the same as promise.then(null, f)
    promise5.catch(alert); // shows "Error: Whoops!" after 1 second



    //!Promise.finally:
    /*

    */
    let promise6 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("result"), 2000)
    })
        .finally(() => alert("Promise ready"))
        .then(result => alert(result)); // <-- .then handles the result


    let promise7 = new Promise((resolve, reject) => {
        throw new Error("error");
    })
        .finally(() => alert("Promise ready"))
        .catch(err => alert(err));  // <-- .catch handles the error object




    




    

    

    
  