let artists = [
  { image: "./images/Mick.jpg", name: "Mick jenkins", age: 29 },

  { image: "./images/kendrick.jpg", name: "Kendrick Lamar", age: 48 },

  { image: "./images/drake.jpeg", name: "Drake", age: 35 },

  { image: "./images/cole.jpeg", name: "J Cole", age: 35 },

  { image: "./images/kanye.jpg", name: "Kanye West", age: 55 },
];

artists.forEach((artist) => {
  //   for (let key in artist) {
  console.log(artist.name);
  document.write(
    '<div class="w3-card-4">\
    <img style=" height:200px; width:200px;" src="' +
      artist.image +
      '" alt="Alps">\
    <div class="w3-container w3-center" style="margin:0px !important;">\
      <p>' +
      artist.name +
      " <br> " +
      artist.age +
      "</p>\
    </div>\
  </div>\
  "

    //'<img src="'+artist.image+'" > '+ artist.name+' : '+artist.age + '<br>');
    //}
  );
});
