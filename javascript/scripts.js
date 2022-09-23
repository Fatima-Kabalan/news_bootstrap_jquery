const info = document.getElementById("news");

let news = $.get({
    type: "GET",
    url: "http://localhost/news_bootstrap_jquery/get_news_api.php",
    async: false,
  }).responseText;
  const data = JSON.parse(news);



data.forEach(element => {
    let flashback = document.createElement("section") ;
    flashback.innerHTML = `<div class="container mt-5" id="outerdiv">
     <div class="row">
       <div class = "col-md-4"><img src = "http://localhost/news_bootstrap_jquery/${element.pictures}" /></div>
       <div class="col-md-9" id="innerdiv">
       <h3>${element.title}</h3>
       <p id="p">${element.text}</p>
       </div>
    </div>
   </div>`;
    info.append(flashback);
});