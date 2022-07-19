var flag = 0;
function flames()
{
var bname = document.getElementById("boyname").value.split('');
var gname = document.getElementById("girlname").value.split('');
var bname_length = bname.length;
var gname_length = gname.length;
var count = 0;
var flames = ['F','L','A','M','E','S'];
var last;
var pos = 0,pre_pos=0,baaki=6;

for(i=0 ; i < bname_length ; i++)
{
    for(j=0 ; j < gname_length ; j++)
    {
        if(bname[i] == gname[j])
        {
            bname[i] = gname[j] = '0';
            break;
        }
    }
}

for(i = 0 ; i < bname_length ; i++)
{
    if(bname[i] != '0')
    {
                count++;
    }
}
for(i = 0 ; i<gname_length;i++)
{
    if(gname[i] != '0')
    {
                count++;
    }
}

while(baaki)
{
    for(i=0;i<count;)
    {
        if(flames[pos] != '-')
        {
            i++;             
        }     
        pre_pos = pos;
        pos = (pos+1)%6 ;   
        //printf("\ninside pos = %d",pos);
    }
    //printf("\n outside pos = %d",pos-1);
    last = flames[pre_pos];
    flames[pre_pos] = '-';
    baaki--;
}
// alert(last);
var image = document.createElement("img");
switch (last) 
{
    case 'F':
        relation = "FRIENDS";
        image.src = "http://www.sallyflint.com/uploads/9/9/4/4/9944249/best-happy-friendship-day-5-august-2018-hd-images-wallpapers-1080p-vad_orig.jpg";
        break;
    case 'L':
        relation = "LOVE";
        image.src = "https://images.ctfassets.net/i3tkg7dt3kro/1QxFSVNs4XFpo2X898cQC6/f11ad250016eaf4bd6070f7741930fb2/iloveyou-quotes-02.jpg";
        break;
    case 'A':
        relation = "AFFECTION";
        image.src = "https://cdn.quotesgram.com/img/19/65/469320890-202289-Sad_emotional_quotes_1.jpg";
        break;
    case 'M':
        relation = "MARRIAGE";
        image.src = "https://cdn2.momjunction.com/wp-content/uploads/2016/10/Marriage-Quotes-That-Make-The-Heart-Melt-624x416.jpg";
        break;
    case 'E':
        relation = "ENEMIES";
        image.src="https://everydaypower.com/wp-content/uploads/2021/12/Enemy-quotes-on-how-to-fight-your-haters.png";
        break;
    case 'S':
        relation = "SISTERS";
        image.src="https://wishesexpert.com/wp-content/uploads/2022/03/soul-sister-quotes-5.jpg";
        break;
}
if(flag==0)
{
    document.getElementById("flames_display").innerText = relation;
// document.getElementById("image_display").appendChild(image);
    document.getElementById("image_display").append(image);
    flag=1;

}




}