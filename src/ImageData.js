export const ImageData=[];

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}



const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


class Entry {
  constructor(id,title, year, medium, size, keywords, src) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.medium = medium;
    this.size = size;
    this.keywords = keywords;
    this.src = src;

  }
}

let entry1 = new Entry( ["1"], ["Alynda Segarra"], ["2020"], ["gouache"], ["11X14"], 
["portrait", "painting", "musician", "hurray for the riff raff"], [images['segarra.jpg']]
); ImageData.push(entry1) 
//entry1.keyword="yellow"
let entry2 = new Entry( ["2"], ["Nicole Atkins"], ["2019"], ["gouache"], ["11X14"], 
["portrait", "painting", "musician"], [images['atkins.jpg']]
); ImageData.push(entry2)

let entry3 = new Entry( ["3"], ["Laura Nyro"], ["2018"], ["gouache"], ["11X14"], 
["portrait", "painting", "musician", ], [images['laura.jpg']]
); ImageData.push(entry3)

let entry4 = new Entry( ["4"], ["Jimi Hendrix"], ["2018"], ["gouache"], ["11X14"], 
["portrait", "painting", "musician", ], [images['jimi.jpg']]
); ImageData.push(entry4)

let entry5 = new Entry( ["5"], ["Aretha Franklin"], ["2019"], ["gouache"], ["11X14"], 
["portrait", "painting", "musician", ], [images['franklin.jpg']]
); ImageData.push(entry5)

let entry6 = new Entry( ["6"], ["Study #2"], ["2020"], ["oil"], ["5X7"], 
["portrait", "painting", "study","model"], [images['model.jpg']]
); ImageData.push(entry6)

let entry7 = new Entry( ["7"], ["Study #1"], ["2020"], ["oil"], ["5X7"], 
["portrait", "painting", "study", "model" ], [images['great.jpg']]
); ImageData.push(entry7)

let entry8 = new Entry( ["8"], ["Margo Price"], ["2018"], ["gouache"], ["11X14"], 
["portrait", "painting", "musician", ], [images['price.jpg']]
); ImageData.push(entry8)

let entry9 = new Entry( ["9"], ["Elvis Costello"], ["2018"], ["gouache"], ["11X14"], 
["portrait", "painting", "musician" ], [images['costello.jpg']]
); ImageData.push(entry9)

let entry10 = new Entry( ["10"], ["cousins"], ["1997"], ["oil"], ["36X48'"], 
["portrait", "painting", "kids" ], [images['cousins.jpg']]
); ImageData.push(entry10)

let entry11 = new Entry( ["11"], ["Tina Turner"], ["2018"], ["gouache"], ["11X14"], 
["portrait", "painting", "musician" ], [images['turner.jpg']]
); ImageData.push(entry11)

let entry12 = new Entry( ["12"], ["Emmie and Gabe"], ["2016"], ["acrylic"], ["12X24"], 
["portrait", "painting", "kids", "family" ], [images['emgabe.jpg']]
); ImageData.push(entry12)

let entry13 = new Entry( ["13"], ["Grandma"], ["2018"], ["acrylic"], ["12X24"], 
["portrait", "painting", "family" ], [images['Grandma.jpg']]
); ImageData.push(entry13)



//let entry

