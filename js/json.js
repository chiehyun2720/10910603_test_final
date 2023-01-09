var newAddr = [
  { dist: "區域", dist_id: "縣市名稱", site: "診所" },
  { dist: "北區", dist_id: "台南市", site: "禾心心理諮商所" },
  { dist: "北區", dist_id: "台南市", site: "緩緩心理諮商所" },
  { dist: "北區", dist_id: "台南市", site: "看見光亮心理諮商所" },
  { dist: "北區", dist_id: "台南市", site: "上善心理治療所" },
  { dist: "北區", dist_id: "台南市", site: "寬欣心理治療所" },
  { dist: "東區", dist_id: "台南市", site: "曙光角落心理諮商所" },
  { dist: "東區", dist_id: "台南市", site: "自然就好心理諮商所" },
  { dist: "東區", dist_id: "台南市", site: "微笑永康心理諮商所" },
  { dist: "東區", dist_id: "台南市", site: "大古崗" },
  { dist: "東區", dist_id: "台南市", site: "官裡" },
  { dist: "東區", dist_id: "台南市", site: "官路邊" },
  { dist: "東區", dist_id: "台南市", site: "小古崗" },
  { dist: "關廟區", dist_id: "台南市", site: "這會心理諮商所" },
  { dist: "安平區", dist_id: "台南市", site: "看見愛心理諮商所" },
  { dist: "安平區", dist_id: "台南市", site: "元品心理諮商所" },
  { dist: "永康區", dist_id: "台南市", site: "心物語心理治療" },
  { dist: "永康區", dist_id: "台南市", site: "慈恩心理治療所" },
];
//在js當中{}＝>代表物件
console.log(newAddr);

$("#dist").change(function () {
  //change只會讀取一次值，而click會重複讀取值
  var distVal = $(this).val();
  //.this選擇點擊到的東西
  function appendCity(arrayDist) {
    if (distVal == "north") {
      var str = "";
      for (i = 1; i < newAddr.length; i++) {
        if (newAddr[i].dist == arrayDist) {
          str = str + "<option>" + newAddr[i].site + "</option>";
          $("#site").html(str);
        }
      }
    }
  }
});
