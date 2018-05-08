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

});