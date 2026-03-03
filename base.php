<html>
<head>
<meta charset="utf-8" />
<title>TRS : Pocket Planes Tools</title>
<style type="text/css">

	body {
		font-family: verdana;
		font-size: 0.8em;
		color: #444444;
		width: 1100px
	}

	#page {
		width: 800px;
		float:left;
	}
	
	#ads {
		float: left;
		margin-left: 30px;
	}

	.clear {
		clear: both;
	}

	.tool {
		margin: 50px 0px 0px 0px;
	}

	table {
		font-size: 1em;
		border-spacing: 0;
	}

	th,td,tr {
		padding: 5px 5px 5px 5px;
	}

	td.label {
		width: 120px;
		text-align: right;
		padding-right: 20px;
	}

	td.input {
		padding-right: 20px;
	}

	td.output {
		font-weight: bold;
		padding-right: 30px;
	}

	table.data {
		font-size: 1em;
		border-spacing: 0;
		border-collapse: collapse;
		width: 100%;
	}

	.data td {
		border: 1px solid #888888;
	}

	.head td {
		font-weight: bold;
		background-color: #EEEEEE;
	}

	select {
		margin-left: 0px;
	}

	.table_grid_cell {
		width: 144px;
		padding: 5px;
		margin: 0px 5px 5px 0px;
		float: left;
	}

	#Data_Airports {
		margin-left: -5px;
	}

	.grid_cell {
		width: 144px;
		padding: 5px;
		margin: 0px 0px 5px 5px;
		float: left;
	}

	.grid_green {
		background-color: #A7EBAF;
		border: 1px solid #1F7A29;
		color: #1F7A29;
	}

	.grid_yellow {
		background-color: #FFEDB8;
		border: 1px solid #B08402;
		color: #B08402;
	}

	.grid_red {
		background-color: #FFA8A8;
		border: 1px solid #9E2B2B;
		color: #9E2B2B;
	}

	.grid_blue {
		background-color: #BFDFFF;
		border: 1px solid #20558A;
		color: #20558A;
	}

	.grid_grey {
		background-color: #EFEFEF;
		border: 1px solid #555555;
		color: #555555;
	}

	.working {
		background-color: #A7EBAF;
	}

</style>

<script type="text/javascript">

var airports = [
['Adelaide',1,9852,6288],
['Aden',1,7056,4752],
['Ahmedabad',2,7864,4472],
['Al Fashir',1,6404,4696],
['Algiers',2,5768,3992],
['Alice Springs',1,9724,5928],
['Amsterdam',1,5844,3320],
['Anadyr',1,10996,2592],
['Anchorage',1,1180,2828],
['Araguaina',1,4228,5352],
['Asuncion',1,3972,5988],
['Athens',1,6396,3928],
['Atlanta',2,3164,4112],
['Auckland',1,10908,6352],
['Baghdad',2,6984,4080],
['Bamako',1,5476,4768],
['Bangalore',3,8004,4780],
['Bangkok',3,8680,4752],
['Barcelona',2,5740,3808],
['Bariloche',1,3548,6568],
['Barrow',1,1008,2084],
['Beijing',3,9180,3864],
['Beira',1,6696,5776],
['Beirut',1,6772,4080],
['Belem',1,4216,5196],
['Belfast',1,5472,3220],
['Belgrade',1,6312,3648],
['Benghazi',1,6288,4168],
['Bergen',1,5832,2892],
['Berlin',2,6112,3324],
['Bern',1,5920,3544],
['Bismarck',1,2572,3592],
['Bogota',2,3440,4980],
['Bordeaux',1,5668,3640],
['Boston',2,3540,3760],
['Brasilia',1,4176,5676],
['Brisbane',1,10260,6056],
['Broken Hill',1,9944,6200],
['Broome',1,9376,5672],
['Brussels',1,5816,3412],
['Bucharest',1,6604,3648],
['Buenos Aires',3,3952,6300],
['Butwal',1,8176,4312],
['Cairns',1,10028,5696],
['Cairo',3,6584,4252],
['Calgary',1,2308,3328],
['Campo Grande',1,4008,5808],
['Cancun',1,3068,4532],
['Capetown',1,6228,6220],
['Caracas',2,3640,4836],
['Casablanca',1,5456,4124],
['Cebu',1,9416,4856],
['Charleston',1,3292,4140],
['Chengdu',2,8656,4204],
['Chicago',3,3028,3724],
['Chihuahua',1,2524,4280],
['Christchurch',1,10848,6600],
['Cincinnati',1,3164,3900],
['Copenhagen',1,6064,3132],
['Cordoba, Argentina',1,3796,6164,],
['Cordoba, Spain',1,5536,3928],
['Cuiaba',1,3952,5636],
['Cuzco',1,3536,5560],
['Dakar',1,5184,4716],
['Dallas',2,2768,4144],
['Darwin',1,9628,5540],
['Delhi',3,7972,4272],
['Denver',1,2500,3860],
['Detroit',2,3188,3780],
['Dhaka',3,8376,4436],
['Djibouti',1,7008,4800],
['Durban',1,6596,6104],
['Easter Island',1,2396,5980],
['Edmonton',1,2336,3192],
['Fairbanks',1,1240,2612],
['Fortaleza',1,4484,5264],
['Georgetown',1,3940,4968],
['Geraldton',1,9132,6028],
['Glasgow',1,5568,3124],
['Goose Bay',1,3808,3156],
['Guangzhou',2,9060,4420],
['Guatemala',2,2960,4712],
['Hammerfest',1,6408,2152],
['Hanoi',2,8840,4528],
['Harare',1,6776,5516],
['Harbin',2,9476,3600],
['Havana',1,3180,4480],
['Helsinki',1,6424,2872],
['Hilo',1,1072,4576],
['Hobart',1,10092,6576],
['Hong Kong',2,9116,4468],
['Honolulu',2,916,4476],
['Houston',2,2812,4272],
['Hyderabad',2,8040,4652],
['In Salah',1,5696,4344],
['Inuvik',1,1668,2316],
['Iqualit',1,3636,2656],
['Iquitos',1,3520,5280],
['Istanbul',3,6568,3832],
['Jakarta',3,8892,5356],
['Jerusalem',1,6740,4168],
['Johannesburg',2,6484,5968],
['Juba',1,6648,4992],
['Juneau',1,1676,3084],
['Kabul',1,7776,4048],
['Kaduna',1,5904,4828],
['Kalgoorlie',1,9384,6124],
['Kampala',1,6668,5124],
['Kananga',1,6388,5372],
['Kandahar',1,7644,4148],
['Kansas City',1,2796,3896],
['Karachi',3,7684,4384],
['Katherine',1,9676,5632],
['Ketchikan',1,1804,3212],
['Khartoum',2,6668,4716],
['Kiev',1,6680,3420],
['Kinhasa',3,6104,5248],
['Kisangani',1,6428,5084],
['Kolkata',3,8296,4488],
['Kuching',1,8984,5140],
['Kuwait City',1,7100,4248],
['La Paz',1,3644,5712],
['Lagos',3,5808,4964],
['Las Vegas',1,2264,4008],
['Lhasa',1,8400,4216],
['Lilongwe',1,6720,5596],
['Lima',3,3348,5428],
['Lisbon',1,5420,3884],
['Livingstone',1,6444,5676],
['Lobito',1,6116,5528],
['London',3,5640,3380],
['Los Angeles',3,2104,4092],
['Lulea',1,6332,2560],
['Lyon',1,5820,3620],
['Madrid',2,5580,3820],
['Magadan',1,10244,2936],
['Mahajanga',1,7076,5664],
['Manaus',1,3888,5224],
['Manchester',1,5588,3268],
['Manila',3,9304,4728],
['Melbourne',2,10024,6364],
['Mexico City',3,2732,4580],
['Miami',2,3276,4384],
['Minneapolis',1,2876,3632],
['Minsk',1,6576,3228],
['Mogadishu',1,7072,5092],
['Mombasa',1,6852,5280],
['Monrovia',1,5356,4972],
['Monterrey',2,2684,4344],
['Montreal',1,3464,3648],
['Moscow',3,6876,3120],
['Mount Isa',1,9872,5820],
['Mumbai',3,7880,4588],
['Munich',1,6028,3512],
['Murmansk',1,6660,2248],
['Muscat',1,7432,4444],
['Nagasaki',1,9580,4128],
['Nairobi',2,6772,5200],
['Nanping',1,9184,4328],
['Naples',1,6128,3840],
['New Orleans',1,2976,4236],
['New York',3,3456,3824],
['Newman',1,9340,5920],
['Nome',1,708,2628],
['Norilsk',1,8292,2304],
['Novosibirsk',1,8252,3192],
['Nuuk',1,4192,2716],
['Oaxaca',1,2796,4644],
['Orlando',1,3224,4288],
['Osaka',2,9732,4068],
['Oslo',1,5980,2944],
['Ottawa',1,3352,3648],
['Oulu',1,6476,2592],
['Padang',1,8716,5212],
['Palu',1,9280,5196],
['Panama',1,3312,4884],
['Paris',3,5744,3484],
['Perm',1,7404,3020],
['Perth',1,9168,6176],
['Pevek',1,10836,2232],
['Philadelphia',2,3392,3888],
['Phoenix',2,2420,4124],
['Port Elizabeth',1,6464,6220],
['Port Hedland',1,9304,5796],
['Port Moresby',1,10132,5472],
['Port Sudan',1,6772,4596],
['Portland',1,1964,3660],
['Porto Velho',1,3764,5396],
['Prague',1,6148,3436],
['Punta Arenas',1,3592,7108],
['Quebec',1,3520,3560],
['Quito',1,3308,5180],
['Rangoon',2,8548,4668],
['Recife',2,4616,5408],
['Reykjavik',1,5000,2624],
['Riga',1,6416,3088],
['Rio de Janeiro',3,4376,5864],
['Riyadh',2,7040,4408],
['Rockhampton',1,10212,5924],
['Rome',1,6032,3768],
['Salt Lake City',1,2292,3820],
['Salvador',2,4504,5540],
['San Diego',1,2176,4164],
['San Francisco',2,2016,3924],
['San Jose',1,3156,4848],
['Santiago',2,3528,6200],
['Santo Domingo',1,3552,4600],
['Sao Paolo',3,4248,5920],
['Sapporo',1,9916,3744],
['Saskatoon',1,2540,3280],
['Seattle',2,1964,3544],
['Sendai',1,9908,3924],
['Seoul',3,9488,3956],
['Shanghai',3,9292,4208],
['Shenyang',3,9380,3792],
['Singapore',2,8756,5088],
['Spokane',1,2200,3568],
['St. Louis',1,2948,3924],
['St. Petersburg',2,6580,2900],
['Stockholm',1,6204,2944],
['Sydney',2,10188,6260],
['Taipei',2,9316,4408],
['Tbilisi',1,6984,3744],
['Tehran',3,7188,3988],
['Teresina',1,4360,5312],
['Thunder Bay',1,2996,3488],
['Tiksi',1,9536,2056],
['Timbuktu',1,5596,4648],
['Tokyo',3,9868,4056],
['Toronto',2,3268,3700],
['Tripoli',1,6024,4152],
['Trondheim',1,5960,2700],
['Ulan Bator',1,8884,3544],
['Urumqi',1,8348,3696],
['Vancouver',1,1952,3424],
['Venice',1,6032,3636],
['Vienna',1,6212,3512],
['Vladivostok',1,9608,3732],
['Volgograd',1,6984,3488],
['Warsaw',1,6312,3324],
['Washington D.C.',2,3356,3952],
['Wellington',1,10940,6508],
['Whitehorse',1,1612,2892],
['Windhoek',1,6208,5872],
['Winnipeg',1,2756,3448],
['Xi\'an',3,9000,4084],
['Xining',1,8632,3980],
['Yakutsk',1,9576,2804],
['Yellowknife',1,2264,2764],
['Yinchuan',1,8876,3896],
['Zanzibar',1,6856,5392]
];

// name, level, class, capacity, range, speed, weight
var planes = [
['Aeroeagle',16,2,6,2000,220,6],
['Airvan',5,1,3,840,163,3],
['Anan',6,1,3,656,176,3],
['Bearclaw',1,1,1,500,126,1],
['Birchcraft',10,2,4,1517,183,4],
['Blimp','-',1,4,1000,58,0.8],
['Bobcat','-',1,1,600,135,1],
['C-130 Hercules','-',3,10,2700,200,10],
['Cloudliner',28,3,17,3110,320,17],
['Concorde','-',3,8,3500,400,8],
['Cyclone',26,3,12,2820,295,12],
['Equinox',12,2,3,1600,215,3],
['Fogbuster',20,3,8,2600,312,8],
['Griffon',1,1,1,800,140,1.1],
['Hot Air Balloon','-',1,1,800,15,0],
['Huey','-',1,3,600,125,3],
['Kangaroo',7,1,4,945,125,4],
['Mohawk',8,1,3,1000,172,3.2],
['Navigator',1,1,2,600,165,2],
['P-40 Warhawk','-',1,1,600,135,1],
['Pearjet',14,2,5,1947,272,5],
['Sea Knight','-',1,5,800,130,5],
['Sequoia',22,3,10,2700,190,10],
['Starship','-',3,3,4000,400,6],
['Supergopher',4,1,1,1100,160,1.2],
['Tetra',24,3,10,2300,303,10],
['Wallaby',1,1,2,700,143,2.2],
['X10 Mapple Pro',8,1,4,1050,180,4],
];

function reverse(a, b) {
	if (a > b) return -1;
	if (a < b) return 1;
	return 0;
}

function CalcDist(iFrom, iTo) {
	var x1 = Math.min(airports[iFrom][2],airports[iTo][2]);
	var x2 = Math.max(airports[iFrom][2],airports[iTo][2]);
	var y1 = Math.min(airports[iFrom][3],airports[iTo][3]);
	var y2 = Math.max(airports[iFrom][3],airports[iTo][3]);
	var dist = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
    return Math.floor(dist);
}

function CalcTime(iPlane, speedUpg, dist) {
    return Math.floor( 60 * ( (dist*0.25) / (CalcSpeed(iPlane,speedUpg) * 5.15 ) ) );
}

function CalcCost(iPlane, speedUpg, weightUpg, dist) {
	return Math.floor( ((CalcSpeed(iPlane,speedUpg)*CalcWeight(iPlane,weightUpg))/400)*(dist*0.2493) );
}

function CalcRange(iPlane, iUpgLevel) {
	return Math.floor(planes[iPlane][4] * ( 1 + iUpgLevel*0.05 ));
}

function CalcSpeed(iPlane, iUpgLevel) {
	return Math.floor(planes[iPlane][5] * ( 1 + iUpgLevel*0.05 ));
}

function CalcWeight(iPlane, iUpgLevel) {
	return Math.floor(planes[iPlane][6] * ( 1 - iUpgLevel*0.05 ) * 100)/100;
}

function CalcPay(dist, capacity, bonus) {
	var income = 0;
	if ( dist != 0 ) {
		var payPerCargo = Math.floor((dist/4) + 50);
		if ( capacity > 0 && bonus ) {
			payPerCargo = Math.floor( payPerCargo * 1.25 );
		}
		income = capacity * payPerCargo;
	}
    return income;
}

function ADC_CalcDist() {
	var v1 = document.getElementById('ADC_From').value;
	var v2 = document.getElementById('ADC_To').value;

	var dist = Math.floor( CalcDist(v1,v2) );

    var html = '';
	for ( var i = 0; i < planes.length; i++ ) {

        if ( planes[i][2] > airports[v1][1] || planes[i][2] > airports[v2][1] ) {
			if ( CalcRange(i,0) >= dist ) {
				html += '<div class="table_grid_cell grid_red">' + planes[i][0] + '</div>';
			} else if ( CalcRange(i,1) >= dist ) {
				html += '<div class="table_grid_cell grid_red">' + planes[i][0] + ' +5%</div>';
			} else if ( CalcRange(i,2) >= dist ) {
				html += '<div class="table_grid_cell grid_red">' + planes[i][0] + ' +10%</div>';
			} else if ( CalcRange(i,3) >= dist ) {
				html += '<div class="table_grid_cell grid_red">' + planes[i][0] + ' +15%</div>';
			} else {
				html += '<div class="table_grid_cell grid_grey">' + planes[i][0] + '</div>';
			}
        } else {
			if ( CalcRange(i,0) >= dist ) {
				html += '<div class="table_grid_cell grid_green">' + planes[i][0] + '</div>';
			} else if ( CalcRange(i,1) >= dist ) {
				html += '<div class="table_grid_cell grid_yellow">' + planes[i][0] + ' +5%</div>';
			} else if ( CalcRange(i,2) >= dist ) {
				html += '<div class="table_grid_cell grid_yellow">' + planes[i][0] + ' +10%</div>';
			} else if ( CalcRange(i,3) >= dist ) {
				html += '<div class="table_grid_cell grid_yellow">' + planes[i][0] + ' +15%</div>';
			} else {
				html += '<div class="table_grid_cell grid_grey">' + planes[i][0] + '</div>';
			}
        }
	}

	document.getElementById('ADC_Distance').innerHTML = dist + ' miles';
    document.getElementById('ADC_Planes').innerHTML = html;
}

function ADC_PopulateAirports(id) {
	var selbox = document.getElementById(id);
	selbox.options.length = 0;
	var ct = [];
	for (var i = airports.length - 1;  i >= 0;  i--) {
		ct[i] = airports[i][0]+','+i;
	}
	ct.sort(reverse);
	for (var i = airports.length - 1;  i >= 0;  i--) {
		var c = ct[i].split(',');
		selbox.options[selbox.options.length] = new Option(c[0],c[1]);
	}
}

function ADC_Setup() {
	ADC_PopulateAirports("ADC_From");
	ADC_PopulateAirports("ADC_To");
	ADC_CalcDist();
}

function RP_PopulatePlanes() {
    var selbox = document.getElementById("RP_Plane");
	selbox.options.length = 0;
	for (var i = 0;  i < planes.length; i++) {
        var text = planes[i][0] + " (Class " + planes[i][2] + ")";
		selbox.options[selbox.options.length] = new Option(text,i);
	}
	selbox.value = 0;
}

function RP_UpdateAirportList(num) {

	var to = document.getElementById('RP_Hop_' + num + '_Airport');
	var from = document.getElementById('RP_Hop_' + (num-1) + '_Airport');

	if ( to ) {

		var prevValue = to.value;
		var prevFound = false;

		to.options.length = 0;
		to.options[to.options.length] = new Option('',-1);

		if ( from ) {

			if ( from.value != "" && from.value != -1 ) {

				var iPlane = document.getElementById('RP_Plane').value;
				var iRange = document.getElementById('RP_RangeUpg').value;

				var range = CalcRange(iPlane,iRange);;

				for ( var i=0; i<airports.length; i++ ) {
					var dist = CalcDist(from.value, i);
					if ( range > dist && planes[iPlane][2] <= airports[i][1]) {
						if ( prevValue == i ) {
							prevFound = true;
						}
						to.options[to.options.length] = new Option(airports[i][0],i);
					}
				}
			}

		} else {

			var iPlane = document.getElementById('RP_Plane').value;
			for ( var i=0; i<airports.length; i++ ) {
				if (planes[iPlane][2] <= airports[i][1]) {
					to.options[to.options.length] = new Option(airports[i][0],i);
				}
			}

		}

		to.value = prevValue;

		RP_UpdateAirportList(num+1);
	}
}

function RP_UpdateRoute(num) {
	RP_UpdateAirportList(num);
	RP_UpdateInfo();
}

function RP_UpdateInfo() {

	var table = document.getElementById("RP_Route");

	// Grab plane inputs
	var iPlane = document.getElementById('RP_Plane').value;
	var iRange = document.getElementById('RP_RangeUpg').value;
	var iSpeed = document.getElementById('RP_SpeedUpg').value;
	var iWeight = document.getElementById('RP_WeightUpg').value;

	var capacity = planes[iPlane][3];

	var income = 0;

	var routeDist = 0;
	var routeTime = 0;
	var routeCost = 0;
	var routeProfit = 0;
	var routeProfitHour = 0;

	var directDist = 0;
	var directTime = 0;
	var directCost = 0;
	var directProfit = 0;
	var directProfitHour = 0;
	var first = 1;
	var last = 2;

	for ( var i=2; i<table.rows.length; i++ ) {

		var from = document.getElementById('RP_Hop_' + (i-1) + '_Airport');
		var to   = document.getElementById('RP_Hop_' + (i)   + '_Airport');
		var toInfo = document.getElementById('RP_Hop_' + (i) + '_Info');

		if ( to.value != "" && to.value != -1) {

			var dist = CalcDist(from.value, to.value);
			var time = CalcTime(iPlane, iSpeed, dist);
			var cost = CalcCost(iPlane, iSpeed, iWeight, dist);

			routeDist += dist;
			routeTime += time;
			routeCost += cost;

			toInfo.innerHTML = dist + ' miles, ' + time + 'm, ' + cost + ' coins';

			last = i;

		} else {
			toInfo.innerHTML = '';
		}
	}

	var first = document.getElementById('RP_Hop_' + first + '_Airport');
	var last  = document.getElementById('RP_Hop_' + last  + '_Airport');
	if ( first.value != "" && first.value != -1 && last.value != "" && last.value != -1 ) {

		var directDist = CalcDist(first.value,last.value);
    	var directTime = CalcTime(iPlane, iSpeed, directDist);
    	var directCost = CalcCost(iPlane, iSpeed, iWeight, directDist);

    	var income = CalcPay(directDist, capacity, true);

    	var routeProfit = income - routeCost;
    	var directProfit = income - directCost;

    	routeProfitHour = Math.floor((routeProfit / (routeTime/60) )*100)/100;
    	directProfitHour = Math.floor((directProfit / (directTime/60) )*100)/100;
	}

	// Set range
	var iRange = document.getElementById('RP_RangeUpg').value;
	var range = CalcRange(iPlane, iRange);
	document.getElementById('RP_Range').innerHTML = range + ' miles';

	// Set speed
	var iSpeed = document.getElementById('RP_SpeedUpg').value;
	var speed = CalcSpeed(iPlane, iSpeed);
	document.getElementById('RP_Speed').innerHTML = speed + ' mph';

	// Set weight
	var iWeight = document.getElementById('RP_WeightUpg').value;
	var weight = CalcWeight(iPlane, iWeight);
	document.getElementById('RP_Weight').innerHTML = weight + ' tons';

	// Set capacity
	document.getElementById('RP_Capacity').innerHTML = planes[iPlane][3];

	// Set plane
	var html = '<b>' + planes[iPlane][0] + '</b>';
	html += '<br>Range: ' + range
	if ( iRange > 0 ) {
		html += ' (+' + iRange*5 + '%)';
	}
	html += '<br>Speed: ' + speed
	if ( iSpeed > 0 ) {
		html += ' (+' + iSpeed*5 + '%)';
	}
	html += '<br>Weight: ' + weight
	if ( iWeight > 0 ) {
		html += ' (-' + iWeight*5 + '%)';
	}
	document.getElementById('RP_Working_Plane').innerHTML = html;

	// Set route
	var routeTable = document.getElementById('RP_Route');
	var done = false;
	var html = '';
	for ( var i=1; i<routeTable.rows.length; i++ ) {
		var airport = document.getElementById('RP_Hop_' + i + '_Airport');
		if ( airport.value != "" && airport.value != -1) {
			if ( i == 1 ) {
				html += airports[airport.value][0];
			} else {
				html += '<br> -> ' + airports[airport.value][0];
			}
		} else {
			done = true;
		}
	}
	document.getElementById('RP_Working_Route').innerHTML = html;
	
	var cb = document.getElementById('RP_DirectStats');
	if ( cb.checked ) {
		document.getElementById('RP_Working_Distance').innerHTML = routeDist + '<br><i>(' + directDist + '</i>)';
		document.getElementById('RP_Working_Time').innerHTML = routeTime + '<br><i>(' + directTime + '</i>)';
		document.getElementById('RP_Working_Cost').innerHTML = routeCost + '<br><i>(' + directCost + ')</i>';
		document.getElementById('RP_Working_Income').innerHTML = income;
		document.getElementById('RP_Working_Profit').innerHTML = routeProfit + '<br><i>(' + directProfit + ')</i>';
		document.getElementById('RP_Working_ProfitHour').innerHTML = routeProfitHour + '<br><i>(' + directProfitHour + ')</i>';
	} else {
		document.getElementById('RP_Working_Distance').innerHTML = routeDist;
		document.getElementById('RP_Working_Time').innerHTML = routeTime;
		document.getElementById('RP_Working_Cost').innerHTML = routeCost;
		document.getElementById('RP_Working_Income').innerHTML = income;
		document.getElementById('RP_Working_Profit').innerHTML = routeProfit;
		document.getElementById('RP_Working_ProfitHour').innerHTML = routeProfitHour;
	}
}

function RP_AddHop() {

	var table = document.getElementById("RP_Route");

	var num = table.rows.length;

	var row = table.insertRow(num-1);

	var labelCell = row.insertCell(0);
	labelCell.setAttribute('class','label');
	labelCell.innerHTML = 'Leg ' + (num-1) + ':';

	var airportCell = row.insertCell(1);
	airportCell.setAttribute('class', 'input');
	var select = document.createElement('select');
	select.id = 'RP_Hop_' + num + '_Airport';
	select.setAttribute('onchange', 'RP_UpdateRoute(' + num + ');');
	airportCell.appendChild(select);

	var infoCell = row.insertCell(2);
	infoCell.setAttribute('class','output');
	infoCell.id = 'RP_Hop_' + num + '_Info';
	infoCell.innerHTML = '';

	RP_UpdateRoute(num);
}

function RP_DeleteHop() {
	var table = document.getElementById("RP_Route");
	var num = table.rows.length;
	if ( num > 3 ) {
		table.deleteRow(num-2);
		RP_UpdateRoute();
	}
}

function RP_Store() {

	var table = document.getElementById('RP_Store');

	var row = table.insertRow(2);

	var cell = row.insertCell(0);
	cell.innerHTML = document.getElementById('RP_Working_Plane').innerHTML;

	var cell = row.insertCell(1);
	cell.innerHTML = document.getElementById('RP_Working_Route').innerHTML;

	var cell = row.insertCell(2);
	cell.innerHTML = document.getElementById('RP_Working_Distance').innerHTML;

	var cell = row.insertCell(3);
	cell.innerHTML = document.getElementById('RP_Working_Time').innerHTML;

	var cell = row.insertCell(4);
	cell.innerHTML = document.getElementById('RP_Working_Cost').innerHTML;

	var cell = row.insertCell(5);
	cell.innerHTML = document.getElementById('RP_Working_Income').innerHTML;

	var cell = row.insertCell(6);
	cell.innerHTML = document.getElementById('RP_Working_Profit').innerHTML;

	var cell = row.insertCell(7);
	cell.innerHTML = document.getElementById('RP_Working_ProfitHour').innerHTML;

	var cell = row.insertCell(8);
	cell.innerHTML = '<input type="button" value="Delete" onclick="RP_Remove(this)">';
}

function RP_Remove(ele) {
	var i = ele.parentNode.parentNode.rowIndex;
	document.getElementById('RP_Store').deleteRow(i);
}

function RP_Setup() {
	RP_PopulatePlanes();
	RP_UpdateRoute(1);
}

function Data_Setup() {
	var table = document.getElementById('Data_Planes');
	for ( var i=0; i<planes.length; i++ ) {
		var row = table.insertRow(table.rows.length);
		for ( var j=0; j<planes[0].length; j++ ) {
			var cell = row.insertCell(row.cells.length);
			cell.innerHTML = planes[i][j];
		}
	}

	var html = '';
	var grid = document.getElementById('Data_Airports');
	for ( var i=0; i<airports.length; i++ ) {
		var style = 'grid_grey';
		if ( airports[i][1] == 2 ) {
			style = 'grid_blue';
		} else if ( airports[i][1] == 3 ) {
			style = 'grid_red';
		}
		html += '<div class="grid_cell ' + style + '">' + airports[i][0] + '<br>(' + airports[i][2] + ',' + airports[i][3] + ')</div>';
	}

	grid.innerHTML = html;
}

function start() {
    ADC_Setup();
    RP_Setup();
    Data_Setup();
}

window.onload=start;

</script>

</head><body>

<div id="page">

<h1>Pocket Planes Tools</h1>

<p>Welcome to my array of web tools for <a href="http://www.nimblebit.com/">Nimblebit's</a> time management iOS game, Pocket Planes. I started building this lot to help optimise my decisions in game and hopefully they can do the same for a few other people out there too. Enjoy!</p>

<p>Note that my calculations of distance are based on co-ordinates that did the rounds in a google doc. I don't actually know the source but they do tie up with the game's use of the 'range' value on aircraft. The strange thing is that they don't line up with what it uses for distance in calculations such as travel times and costs. It's pretty close to being 4 times less in calculations but some sums end up being out by a small fraction.</p>

<div class="tool">

<h2>Airport Distance Calculator</h2>

<p>Never mistakenly buy an airport your planes can't reach or a plane that can't reach your existing airports by using this simple tool. Select two cities to see the distance between them. Green are planes that can make the distance. Yellow need a little upgrading but are capable. Red can make the distance but whose class is too high to land there. Grey can't make the distance with or without an upgrade.</p>

<p>Pick a start and end point</p>

<table>
	<tbody><tr>
		<td class="label">From:</td>
		<td><select id="ADC_From" onchange="ADC_CalcDist();"></select></td>
		<td id="ADC_From_Info"></td>
	</tr><tr>
		<td class="label">To:</td>
		<td><select id="ADC_To" onchange="ADC_CalcDist();"></select></td>
		<td id="ADC_To_Info"></td>
	</tr>
</tbody></table>

<p>See how far it is and which planes can make it</p>

<table>
	<tbody><tr>
		<td class="label">Distance:</td>
		<td class="output" id="ADC_Distance">0 miles</td>
		<td></td>
	</tr><tr>
		<td class="label">Planes:</td>
		<td colspan="2" id="ADC_Planes"></td>

</tr></tbody></table>

</div>



<div class="tool">

<h2>Earnings Comparison</h2>

<p>Combine planes and routes to see their earning potentials. Check the direct stats option to see how your selected route compares to a perfectly straight route from start to end. Store a particular calculation and start a new one to compare your options.</p>

<p>Enter aircraft details:</p>

<table>
	<tbody><tr>
		<td class="label">Plane:</td>
		<td class="input"><select id="RP_Plane" onchange="RP_UpdateRoute(1);"></select></td>
		<td></td>
	</tr><tr>
		<td class="label">Range:</td>
		<td class="input">
			<select id="RP_RangeUpg" onchange="RP_UpdateRoute(1);">
				<option value="0">No Upgrade</option>
				<option value="1">Level 1 upgrade (5%)</option>
				<option value="2">Level 2 upgrade (10%)</option>
				<option value="3">Level 3 upgrade (15%)</option>
			</select>
		</td>
		<td class="output" id="RP_Range">500 miles</td>
	</tr><tr>
		<td class="label">Speed:</td>
		<td class="input">
			<select id="RP_SpeedUpg" onchange="RP_UpdateInfo();">
				<option value="0">No Upgrade</option>
				<option value="1">Level 1 upgrade (5%)</option>
				<option value="2">Level 2 upgrade (10%)</option>
				<option value="3">Level 3 upgrade (15%)</option>
			</select>
		</td>
		<td class="output" id="RP_Speed">126 mph</td>
	</tr><tr>
		<td class="label">Weight:</td>
		<td class="input">
			<select id="RP_WeightUpg" onchange="RP_UpdateInfo();">
				<option value="0">No Upgrade</option>
				<option value="1">Level 1 upgrade (5%)</option>
				<option value="2">Level 2 upgrade (10%)</option>
				<option value="3">Level 3 upgrade (15%)</option>
			</select>
		</td>
		<td class="output" id="RP_Weight">1 tons</td>
	</tr><tr>
		<td class="label">Capacity:</td>
		<td></td>
		<td class="output" id="RP_Capacity">1</td>
	</tr>
</tbody></table>

<p>Enter route:</p>

<table id="RP_Route">
	<tbody><tr>
		<td class="label">Start at:</td>
		<td class="input"><select id="RP_Hop_1_Airport" onchange="RP_UpdateRoute(1);"></select></td>
		<td></td>
	</tr>
	<tr>
		<td class="label">Leg 1:</td>
		<td class="input"><select id="RP_Hop_2_Airport" onchange="RP_UpdateRoute(2);"><option value="-1"></option></select></td>
		<td class="output" id="RP_Hop_2_Info"></td>
	</tr>
	<tr>
		<td></td>
		<td>
			<input type="button" value="+" onclick="RP_AddHop();">
			<input type="button" value="-" onclick="RP_DeleteHop();">
		</td>
		<td></td>
	</tr>
</tbody></table>

Set options:

<table>
	<tr>
		<td class="label"><input id="RP_DirectStats" type="checkbox" checked="checked" onclick="RP_UpdateInfo();"/></td>
		<td class="input">Show direct path stats</td>
		<td class="input">(appear in bracket below route stats)</td>
	</tr>
</table>


<p>Statistics for your selected route:</p>

<table id="RP_Store" class="data" width="100%">
	<tr class="head">
		<td>Plane</td>
		<td>Route</td>
		<td>Distance</td>
		<td>Time</td>
		<td>Cost</td>
		<td>Income</td>
		<td>Profit</td>
		<td>Profit/Hour</td>
	</tr>
	<tr class="working">
		<td id="RP_Working_Plane"></td>
		<td id="RP_Working_Route"></td>
		<td id="RP_Working_Distance"></td>
		<td id="RP_Working_Time"></td>
		<td id="RP_Working_Cost"></td>
		<td id="RP_Working_Income"></td>
		<td id="RP_Working_Profit"></td>
		<td id="RP_Working_ProfitHour"></td>
		<td><input type="button" value="Store" onclick="RP_Store();"/></td>
	</tr>
</table>

</div>

<div class="tool">
<h2>Plane Data</h2>

<table id="Data_Planes" class="data">
	<tr class="head">
		<td>Name</td>
		<td>Available at</td>
		<td>Class</td>
		<td>Capacity</td>
		<td>Range</td>
		<td>Speed</td>
		<td>Weight</td>
	</tr>
</table>

</div>

<div class="tool">
<h2>Airport Data</h2>

<p>Complete airport list with co-ordinates for range calculation. Colour coded by class.</p>

<div id="Data_Airports"></div>
<div class="clear"></div>
</div>


<h2>Links</h2>

<p>Read about and discuss the game in the <a href="http://forums.toucharcade.com/showthread.php?t=139069">Touch Arcade Pocket Planes thread</a>.</p>

<p>Swat up on the details of the game at the <a href="http://pocketplaneswiki.com/">Pocket Planes Wiki</a>.</p>

<p>Check out other things I do on <a href="http://www.therustysnowman.com/">therustysnowman.com</a>.</p>

<p>User <i>stoinov</i> on the Touch Arcade forums has done some analysis of the earnings/hour of different aircraft. It's great for those trying to work out their perfect Pocket Planes strategy to fit around their lifestyle. View the <a href="https://docs.google.com/a/stoinov.com/spreadsheet/ccc?key=0AuOfJLAqduq7dGFHZW1rNjRuRmc2Z3ZLbzlSYS1sSnc">spreadsheet data</a> and read <i>stoinov's</i> <a href="http://forums.toucharcade.com/showthread.php?p=2314681&posted=1#post2314681">forum post</a><a> with their conclusions. <i>This has been posted with permission of original author</i></a></p><a>

<div class="split"></div>

<h2>Contact</h2>

<p>If you have any issues with this page or want to say hello you can using contact(at)therustysnowman.com</p>

</div>

<div id="ads">
<script type="text/javascript"><!--
google_ad_client = "ca-pub-6954449072679361";
/* TheRustySnowman - Pocket Planes */
google_ad_slot = "8421286338";
google_ad_width = 160;
google_ad_height = 600;
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
</div>

</body>
</html>
