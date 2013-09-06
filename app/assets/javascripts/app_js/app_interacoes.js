var global_currentEdit_galinha = "";
var global_currentEdit_ovo = "";
data_retornos=[
	["Ilton", 2]
];

data_retorno=[];

$(document).ready(function(){
	
	//Carregamento das tabelas
	load_galinhas();
	load_ovos();

	$(".modal form").submit(function(event){
		event.preventDefault();
	});
	
	setTimeout(function() {
      $("a").click(function(){
      	interacoes_btns_acoes($(this));
      });
	}, 100);

	id=0;
	setTimeout(function() {
		while(id < $('#lista_galinhas tr').length-1){
			id++;
			if($("#galinha_id_"+id)==0)break;
			else load_safra_ovos($("#galinha_id_"+id+" span").html(), true);	
		}
	}, 300);
	
});

$(SUBMIT_GALINHA).click(function(){
	if($("#submit_galinha").val()=="Cadastrar")
		cadastrar_galinha();
	else if ($("#submit_galinha").val()=="Editar")
		enviar_editar_galinha(global_currentEdit_galinha);
});

$(SUBMIT_OVO).click(function(){
	if($("#submit_ovo").val()=="Cadastrar")
		cadastrar_ovo();
	else if ($("#submit_ovo").val()=="Editar")
		enviar_editar_ovo(global_currentEdit_ovo);
});

$("#btn_new_galinha").click(function(){
	$("#new_galinha").attr('action', 'http://localhost:3000/galinhas/');
	$("#galinha_nome").val("");
	$("#galinha_raca").val("");
	$("#submit_galinha").val("Cadastrar");
});

$("#btn_new_ovo").click(function(){
	$("#new_ovo").attr('action', 'http://localhost:3000/ovos/');
	$("#ovo_galinha_id").val("");
	$("#ovo_cor_branco").attr('checked', false);
	$("#submit_ovo").val("Cadastrar");
});


//Captura geral das interações nos botões da tabela
function interacoes_btns_acoes(current_btn){
	id_current_btn = current_btn.attr("id");
	id_current_btn = id_current_btn.trim();
	
	count_under_score=1;
	id_num="";
	for(i=id_current_btn.length-1;i>0;i--){
		id_antigo = id_num;
		id_num += id_current_btn.charAt(i);
		
		if(id_num.indexOf("_") > -1) {
			id_num = id_antigo;
			break;
		}
		
	}
	
	id_num = id_num.trim();
	
	eh_editar = (current_btn.attr("id").indexOf("editar") >= 0);
	
	if(id_current_btn.indexOf("galinha")>1) {
		interacoes_galinha(current_btn, id_num, eh_editar);
		global_currentEdit_galinha = id_num;
	}else {
		interacoes_ovo(current_btn, id_num, eh_editar);
		global_currentEdit_ovo = id_num;
	}
}




//Interações na galinha 
function interacoes_galinha(current_btn, id_num, eh_editar){
	if(eh_editar) editar_galinha(current_btn, id_num);
	else visualizar_galinha(current_btn, id_num);
}


//Interações no ovo
function interacoes_ovo(current_btn, id_num, eh_editar){
	if(eh_editar) editar_ovo(current_btn, id_num);
	else visualizar_ovo(current_btn, id_num);
}




//OPERAÇÕES
function editar_galinha(current_btn, id_num){
	nome_corrente = $("#nome_"+id_num+" span").html();
	raca_corrente = $("#raca_"+id_num+" span").html();
	
	console.log("ID: " + id_num + "nome: " + nome_corrente + ", raça: " + raca_corrente);
	
	$("#galinha_galinha_id").val(id_num)
	$("#new_galinha").attr('action', 'http://localhost:3000/galinhas/'+id_num);
	$("#galinha_nome").val(nome_corrente);
	$("#galinha_raca").val(raca_corrente);
	$("#submit_galinha").val("Editar");
	
	if(current_btn.attr("id").indexOf("visualizar") == -1){
		$('#new_galinha_modal').modal('hide');
		$('#new_galinha_modal').modal('show');
	}else{
		$('#grafico').modal('hide');
		$('#grafico').modal('show');
	}
}

function editar_ovo(current_btn, id_num){
	id_mae = $("#galinha_id_"+id_num+" center").html();
	eh_branco = $("#cor_branco_"+id_num+" center i").hasClass("icon-ok");

	$("#new_ovo").attr('action', 'http://localhost:3000/ovos/'+id_num);
	if(eh_branco) $("#ovo_cor_branco").attr('checked', true);
	else $("#ovo_cor_branco").attr('checked', false);
	$("#ovo_galinha_id").val(id_mae);
	$("#submit_ovo").val("Editar");
	$('#new_ovo_modal').modal('hide');
	$('#new_ovo_modal').modal('show');
}

function visualizar_galinha(current_btn, id_num){
	
}

function visualizar_ovo(current_btn, id_num){
	
}

