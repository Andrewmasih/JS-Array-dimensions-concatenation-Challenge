/* we know how to concat and access vlaues in multidimensional Arrays, the varible 'countryData' has been defined which contains 10 countries, countryData contains the country name, population, area by sqMile.

The Challenge:
1/ this is for a new app, the data needs to be restructured into a new Array. use 'index notation' to extract the country name and store it in a varible called 'countries'.

2/ use 'index notation' to extract population and area and store them in a varible called, population and area. 

3/ use Array concatenation to flatten the 3 arrays created below and store in a varible called 'flattened'..    */





let countryData = [["Monaco", 2.02,	0.78,	38300], ["Singapore",	722.5, 279,	5703600], ["Hong Kong", 1106, 427, 7500700], ["Gibraltar", 6.8,	2.6,	33701], ["Bahrain",	778,	300,	1543300], ["Malta",	316, 122,	514564], ["Maldives",	298,	115,	374775], ["Bermuda",	52,	20,	64027], ["Saint Marten",	34,	13,	42876], ["Bangladesh",	143998,	55598,	170757344]];



let countries = [countryData[1][0], countryData[1][1], countryData[1][2], countryData[1][3]]; 

console.log (countries);

let population = [countryData[2][0], countryData[2][1], countryData[2][2], countryData[2][3]];

console.log(population);

let areas = [countryData[3][0], countryData[3][1], countryData[3][2], countryData[3][3]];

console.log(areas);

let flattened = countries.concat(population, areas);

console.log(flattened);