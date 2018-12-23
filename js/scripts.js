var populationArray = [100000,15000,70000,200000,5500];
var maxPopulation = 15000;
var isOverPopulated = false;
var isMostPopulated = true;

for(var i=0;i<populationArray.length;i++)
{
    if(populationArray[i] < maxPopulation)
        console.log("smaller");
    else if(populationArray[i] > maxPopulation)
        console.log("larger");  
    else
        console.log("equals");
}

var i = populationArray.length;
    if( ( (populationArray[i-1] < 100000 && populationArray[i-2] < 100000 
          && populationArray[i-3] < 100000) && maxPopulation < 100000 ) 
       || isMostPopulated === fasle)
        console.log("Small cities!!!");
    else
        console.log("Large cities!!!");
}
