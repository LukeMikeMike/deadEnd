let xhr = new XMLHttpRequest();

xhr.open("GET", "http://kitan.pl/pb/data/news.json", true);

xhr.addEventListener('load', function() {
  if (this.status === 200) {
    console.log('Wszystko w porządku');
    let newses = JSON.parse(this.responseText);
    console.log(newses);
    showUsers(newses);
  } else {
    console.log('Połączenie zakończyło się statusem ' + this.status)
  }
});

xhr.addEventListener('error', function(e) {
  console.log('Wystąpił błąd połączenia')
});

xhr.send();

function showUsers(newses) {
  
var countnews = 0;
  for(let news of newses) {
  var str = "";

//Konwerster daty
function ConvertData(getdata){

  var datetimestamp = getdata;
  var months_arr = ['Sty','Lut','Mar','Kwi','Maj','Cze','Lip','Sie','Wrz','Paź','Lis','Gru'];
  var date = new Date(datetimestamp*1000);
  var year = date.getFullYear();
  var month = months_arr[date.getMonth()];
  var day = date.getDate();

  var convdataTime = day +' '+ month +' '+ year; 
  
  return convdataTime;
 
}
    
    var tsf = news.date_timestamp;
    str += 
      "<img src=" + news.image.x1 + "><br><br>"
      + news.title + "<br><br>\n" 
//      + "URL: "  + news.url + "<br>\n"
      + news.description + "<br><br>\n"
      + "Autor: " + news.author + ", data publikacji: " + ConvertData(tsf);
      document.getElementsByClassName("news__title")[countnews].innerHTML = str;
      countnews++;
  }
  
}