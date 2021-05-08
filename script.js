// 4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV
// https://api.giphy.com/v1/gifs/search?api_key=4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV&q=covid


let funcOne = () => {
  console.log('this is function one');
  funcTwo()
}

let funcTwo = () => {
  console.log('this is function two');
  funcThree()
}

let funcThree = () => {
  console.log('this is function three');
}

funcOne()



window.addEventListener('load', (event) => {
  console.log('page is fully loaded');

  document.getElementById('search').addEventListener('click', () => {
    console.log('button was clicked');

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV&q=australia`)
    .then((res) => {
      return res.json()
    }).then((json) => {
      console.log('the original json is', json);
      console.log('the data key inside the original json', json.data);
      console.log('the first item in the results array is', json.data[0]);

      console.log('the images object inside the first item in the results array is', json.data[0].images);

      console.log('original object for the images object inside the first item in the results array is', json.data[0].images.original);  

      console.log('image for the original object for the images object inside the first item in the results array is', json.data[0].images.original.url);  

      // let myHtml = "";

      for(let resultItem of json.data){
        let imageUrl = resultItem.images.original.url
        // console.log(imageUrl);
        myHtml = myHtml + `<img src=${imageUrl} />`;
        document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + `<img src=${imageUrl} />`;

  

  
      }

      // console.log(myHtml)

      // document.getElementById('results').innerHTML = myHtml;



    })




  })


});
