$(() => {
	let table1_labels = [];
	let table1_data1 = [];
	let table1_data2 = [];
	let table1_data3 = [];

	for (let i = table1.length - 1; i >= 0; i--) {
		table1_labels.push(table1[i][0]);
		table1_data1.push(table1[i][1]);
		table1_data2.push(table1[i][2]);
		table1_data3.push(table1[i][3]);

		//chart lables will be dates, dataset 1 is total tickets, 2 is open tickets, 3 is closed tickets.
	}

	let pi_labels = [];
	let pi_data    = [];
	let pi_colours = ['#5B49C4', '#7565cd', '#978bda', '#bab2e6', '#D88903', '#FFC96C'];

	$.each(pi, function (label, value) {
		pi_labels.push(label);
		pi_data.push(value);
	});

	let ctx = document.getElementById('chart1').getContext('2d');

	let myChart = new Chart(ctx, {
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
						beginAtZero: true
					}
				}]
			}
		}
	});

	let ctx = document.getElementById('chart2').getContext('2d');

	let myPieChart = new Chart(ctx, {
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