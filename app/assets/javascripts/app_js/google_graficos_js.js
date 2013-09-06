	var qtdTotalOvos = "";
	qtds_ovos = [], nomes_galinha = [];
	array_google = [];

	function load_safra_ovos(id, is_last){
		data_retorno=[];
		$.get("http://localhost:3000/galinhas/"+id, function(data) {
			dado_processado = data.substring(data.indexOf("@#$")+3, data.indexOf("$#@"));
			nome_galinha = dado_processado.substring(0, dado_processado.indexOf(","));
			qtd_ovos = parseInt(dado_processado.substring(dado_processado.indexOf(",")+1, dado_processado.length));
			
			console.log("Dado completo: " + dado_processado);
			console.log("Nome da galinha: " + nome_galinha);
			console.log("ID da galinha: " + qtd_ovos);

			qtds_ovos.push(qtd_ovos);
			nomes_galinha.push(nome_galinha);

			array_google.push(nome_galinha);
			array_google.push(qtd_ovos);

			data_retorno.push([nome_galinha, qtd_ovos]);
			console.log(data_retorno);

		});
		
	}

// Load the Visualization API and the piechart package.
//google.load('visualization', '1.0', {'packages':['corechart']});
google.load('visualization', '1.0', {'packages':['corechart']});
			
// Set a callback to run when the Google Visualization API is loaded.
//google.setOnLoadCallback(drawChart);
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

// Create the data table.
var data = new google.visualization.DataTable();
data.addColumn('string', 'Topping');
data.addColumn('number', 'Slices');

	setTimeout(function() {
		data.addRows(
			data_retorno
		);

		console.log("Recebeu aqui");

		// Set chart options
		var options = {'title':'Quantidade de ovos produzidos por Galinha',
		               'width':450,
		               'height':350};

		// Instantiate and draw our chart, passing in some options.
		var chart = new google.visualization.PieChart(document.getElementById('grafico_load'));
		chart.draw(data, options);
	}, 400);
}
