$(() => { 
	console.log("Metrics Loaded");
	


	var table1_labels = [];
	var table1_data1 =  [];
	var table1_data2  = [];
	var table1_data3  = [];
	for(var i = table1.length - 1; i >= 0 ; i--){
		table1_labels.push(table1[i][0]);
		table1_data1.push( table1[i][1]);
		table1_data2.push( table1[i][2]);
		table1_data3.push( table1[i][3]);
	
		//chart lables will be dates, dataset 1 is total tickets, 2 is open tickets, 3 is closed tickets.
	}
	var pi_labels = [];
	var pi_data = [];
	var pi_colours = ['#5B49C4', '#7565cd', '#978bda', '#bab2e6', '#D88903', '#FFC96C'];
	$.each(pi, function(label, value){
		pi_labels.push(label);
		pi_data.push(value);
		
		 
	});

		
		
	


var ctx = document.getElementById("chart1").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
	
    data: {
        labels: table1_labels,
        datasets: [
			{
            label: 'Tickets Made',
            data: table1_data1,
            borderWidth: 1,
			borderColor: '#3498db',
			pointBorderColor: '#3498db',
			backgroundColor: 'transparent',
			borderWidth: 3
        },
		{
            label: 'Open Tickets',
            data: table1_data2,
            borderWidth: 1,
			borderColor: '#c0392b',
			pointBorderColor: '#c0392b',
			backgroundColor: 'transparent',
			borderWidth: 3
        },
		{
            label: 'Closed Tickets',
            data: table1_data3,
            borderWidth: 1,
			borderColor: '#218838',
			pointBorderColor: '#218838',
			backgroundColor: 'transparent',
			borderWidth: 3
        }
		]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
var ctx = document.getElementById("chart2").getContext('2d');
var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: {
		labels: pi_labels,
		datasets: [{
		data: pi_data,
		backgroundColor: pi_colours,
		borderColor: pi_colours

		}]
	}
	
	
   
});
	
});

function LightenDarkenColor(col,amt) {
    var usePound = false;
    if ( col[0] == "#" ) {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if ( r > 255 ) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if ( b > 255 ) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if ( g > 255 ) g = 255;
    else if  ( g < 0 ) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}