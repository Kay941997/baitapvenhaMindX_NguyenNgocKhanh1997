
    // //!Bài 1:
    //     //1.1 + 1.2:
    //         //1.
    // let promise = new Promise((resolve, reject) => {
    //     setTimeout(function(){
    //         resolve('Promise is the best'), 5000
    //     })
    // })


    //         //2.
    // async function getAPI(){
    //     let response = await fetch("https://reqres.in/api/users?fbclid=IwAR1KShCs_3T65FKzP_0Fq01MFDQqGu7rSTeDOjcFjvriWsPmnMQbgn5oBvQ");
    //     console.log(response);

    // }
    // getAPI();


    //         //3.
    // promise.then(
    //     result => alert(result),

    //     error => alert(error),
    // )

    
    //!Bài 2, 3:

    // //!REVIEW:
    
    // //!Bài 4:
    // function noParameter() {
    //     let random = Math.floor((Math.random() * 10) + 0 );
    //     return random;
    // }

    // const x = noParameter();
    // if (x < 0){
    //     console.log("Failed: Number smaller than 0");
    // }
    // else if (x > 10){
    //     console.log("Failed: Number bigger than 10")
    // }
    // else {
    //     console.log('Passed,bravo');
    // }
    

    // //!Bài 5:
    // function bai5(a, b){
    //     let random = Math.floor((Math.random() * b) + a);
    //     return random;
    // }

    // const x = bai5(4, 16);
    // if(x < 4){
    //     console.log("Failed: x < 4");
    // }
    // else if (x > 16){
    //     console.log("Failed: x > 16");
    // }
    // else{
    //     console.log("Passed, bravo")
    // }


    // //!Bài 6:
    // function bai6(x1, y1, x2, y2){
    //     let distance = Math.sqrt((x1 - y1)**2 + (x2 - y2)**2);
    //     return distance;
    // }

    // const x = bai6 (3, 10, 0, 6);
    // if (x !== 5){
    //     console.log("Failed");
    // }
    // else{
    //     console.log("Bravo")
    // }


    //!SERIOUS:
    
    //!Bài 7:
    async function getAPI(){
        let response = await fetch("http://quotes.rest/qod.json");
        console.log(response);

        let data = await response.json();
        console.log(data);

        
        let quote = document.getElementById('quote');
        let author = document.getElementById('author');

        quote.innerHTML += ` ${data.contents.quotes[0].quote} `
        author.innerHTML +=`<p> ${data.contents.quotes[0].author} </p>`
    }
    getAPI();



    
    


