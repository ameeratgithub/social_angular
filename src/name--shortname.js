const fs = require('fs');

let data = fs.readFileSync('app/data/json/social/emojis.json');
data = JSON.parse(data);
let notFound = 0;
let found = 0;
data.forEach((el, i) => {
  if (i == 0)
    return;
  //   console.log(el.items.length);
  el.items.forEach(e => {

    const filePath = "assets/emojis/24/";
    const fileName = e.name.replace(' ', '-') + ".png";
    if (fs.existsSync(filePath + fileName)) {
      const newFileName = e.shortname.replace(new RegExp(":", "g"), "-") + ".png";
      fs.rename(filePath + fileName, filePath + newFileName,err=>{
          if(err) console.log(err);
      })
      found++;
    } else {
      notFound++;
    }
  });
});
console.log("Found = ", found, ", Not Found ", notFound);
