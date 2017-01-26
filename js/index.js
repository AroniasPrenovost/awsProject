// quote generator


var quotesArr = [];
quotesArr[0] = '<span style="font-style:italic" "font-size:20px">"I asked Chris if he could make some adjustments to my hair after finishing and he was happy to oblige.  He truly takes his time to make sure everything is perfect. I even got a neck/head massage at the end! I will definitely get my haircut from him again. Fantastic barber!</span>" <br><br> - Mark Guzman | Seattle, WA';
quotesArr[1] = '<span style="font-style:italic" "font-size:20px">"After ten years of cutting my own hair, I decided to get it cut for this first time recently. I found this little shop after reading so many reviews of people following this particular barber, Chris Nguyen from his old establishment. I can safely say that now I\'m a follower, too!</span>" <br><br> - Neal Johnson | Everett, WA';
quotesArr[2] = '<span style="font-style:italic" "font-size:20px">"I got a fantastic haircut. I have very thick difficult hair that stands nearly straight out, and needs to be "sculpted" more than trimmed lol. Chris did an excellent job, expertly translated some of my clumsy instructions into what I was looking for. Biggest thing I noticed is attention to detail - clean lines, immaculate symmetry at all the edges, and really nice work at the temples and behind the ears. Chris could easily charge twice as much for a haircut here (certainly all the others shops do!), but he barely charges beer money for a great service. I will be back!</span>" <br><br> Cameron Stahl | Seattle, WA';
quotesArr[3] = '<span style="font-style:italic" "font-size:20px">"I was skeptical at first with the small number of reviews, but Chris was amazing. Parking is tight, but apparently the church across the street doesn\'t mind if you park there. I had only a vague idea of the haircut I wanted, and Chris was able to fill in the rest. The service provided was significantly better than Supercuts, my old go-to, and CHEAPER. I left him a fifty percent tip, because I felt the price didn\'t match the quality. Chris, you need to charge more!</span>" <br><br> - Garret S. | Greenlake, WA';
quotesArr[4] = '<span style="font-style:italic" "font-size:20px">"Quick, friendly service with super low prices. A cut I would have gotten at another place for my long hair cost $15 less at Unique Barber (I paid $20 instead of $35). I was helped by Chris Nyugen. He also has a manicure license but doesn\'t have a wide selection of nail polish yet (Chris hasn\'t been at this particular location very long). I might be coming in for more than a haircut in the future!</span>" <br><br> Kristin J. | Seattle, WA';
quotesArr[5] = '<span style="font-style:italic" "font-size:20px">"Guy named Chris great guy. This little guy is genuinely happy and great at his job. I\'d recommend friends, family and whoever to stop by to get a hair cut b! this guy. Can\'t wait to go see him next week perfect visit every time.</span>" <br><br> Jordan H. | Seattle, WA';
quotesArr[6] = '<span style="font-style:italic" "font-size:20px">"I\'m so glad I came to this barbershop, and loved the fact that they were playing Sportcenter on TV.</span>" <br><br> - Aaron Prentacost | Seattle, WA';
quotesArr[7] = '<span style="font-style:italic" "font-size:20px">"One of my most productive days was throwing away 1,000 lines of code.</span>" <br><br> - Zed Shaw | Everett, WA';
quotesArr[8] = '<span style="font-style:italic" "font-size:20px">"Design and programming are human activities; forget that and all is lost.</span>" <br><br> - Zed Shaw | Everett, WA';


// cycle through the quotes
setInterval(displayDetails, 5500);

function displayDetails(){
	var randomQuote = Math.floor(Math.random() * (quotesArr.length - 0));
	document.getElementById("quote").innerHTML = quotesArr[randomQuote];
	};






	





