
//Definição da inicialização do tratamento do Ajax inicial
function load_galinhas(){

	$.getJSON(URL_REQUEST + "/galinhas.json/", function(data) {
		$(TABELA_LISTA_GALINHAS).find("tr:gt(0)").remove();
		var str_html = "";
		var galinha_counter=1;
		id_real = [];

		$.each(data.galinhas, function(i, galinhas_array) {
			str_html += "<tr >"
			$.each(galinhas_array, function(chave, valor) {
				
				if(chave=="url")	id_real.push(valor.substring(valor.indexOf("s/")+2,valor.indexOf(".js")));					
		        if(chave!="url")	str_html += '<td id="'+chave+'_'+ galinha_counter +'"><span>'+valor+'</span></td>';
		        
		        else	str_html += gerar_acoes(SUFIX_GALINHA_ID, true, galinha_counter);
		    });
		    str_html += "</tr>"
		    galinha_counter++;
		});
		
		
		$(TABELA_LISTA_GALINHAS + " tbody:last").append(str_html);
		
		for(i=0; i<galinha_counter; i++){ 
			$("#excluir_galinha_"+i).attr("href", "/galinhas/"+parseInt(id_real[i-1]));
			$("#galinha_id_"+i).html("<span>"+id_real[i-1]+"</span>");
		}
		
		$('[id^="viasualizar_"]').attr("href", "#grafico");
		$('[id^="viasualizar_"]').attr("data-toggle", "modal");
	});
	
}//Fim load galinha


//Definição da inicialização do tratamento do Ajax inicial
function load_ovos(){

	$.getJSON(URL_REQUEST + "/ovos.json/", function(data) {
		$(TABELA_LISTA_OVOS).find("tr:gt(0)").remove();
		var str_html = "";
		var ovo_counter=1;
		id_real_ovo = [];

		$.each(data.ovos, function(i, ovos_array) {
			
			str_html += "<tr >"
			
			$.each(ovos_array, function(chave, valor) {
				if(chave=="url")	id_real_ovo.push(valor.substring(valor.indexOf("s/")+2,valor.indexOf(".js")));
				
				if(chave=="cor_branco") {
					if(valor==true)str_html += '<td id="'+chave+'_'+ovo_counter+'"><center><i class="icon-ok"></center></i></td>';
					else str_html += '<td id="'+chave+'_'+ovo_counter+'"><center><i class="icon-remove"></center></i></td>';
		        }else if(chave!="url" && chave!="cor_branco")	str_html += '<td id="'+chave+'_'+ ovo_counter +'"><center>'+valor+'</center></td>';
		        else	str_html += gerar_acoes(SUFIX_OVO_ID, false, ovo_counter);
		    });

		    str_html += "</tr>"
		    ovo_counter++;
		    
		});
		
		$(TABELA_LISTA_OVOS + " tbody:last").append(str_html);
		
		for(i=0; i<ovo_counter; i++) { 
			$("#excluir_ovo_"+i).attr("href", "/ovos/"+id_real_ovo[i-1]);
			$("#ovo_id_"+i).html("<span>"+id_real_ovo[i-1]+"</span>");
		}
		
		$('[id^="viasualizar_"]').attr("href", "#grafico");
		$('[id^="viasualizar_"]').attr("data-toggle", "modal");
	});

}//Fim load galinha
