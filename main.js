var images = 
["https://media1.thehungryjpeg.com/thumbs2/ori_3483759_ffd6da4dfc2303dd5818113748c10f9bc04b3560_cute-cartoon-family-vector-characters-in-casual-clothes.jpg",
"dada.jpg","Maa.jpeg","Papa.png","mummy.png","Didi.jpeg","Koushal.jpeg"];

var names = 
["Family Book","Mr.Shankar Lal Lakhotia","Mrs.Birhma Devi Lakhotia","Mr.Vinod Lakhotia","Mrs. Jyoti Lakhotia","Tanisha Lakhotia","Koushal Lakhotia"];

var i = 0;
function update()
{
 i++
 var number_of_family_members_array = 6;
 if(i >number_of_family_members_array)
 {
     i = 0;
 }
 var update_images = images[i];
 var update_names = names[i];

 document.getElementById("family_images").src = update_images;
 document.getElementById("family_names").innerHTML = update_names;
}