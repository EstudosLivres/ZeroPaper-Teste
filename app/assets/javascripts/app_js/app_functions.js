/**
 * Função para lançar a notificação
 * @param {Object} titulo da notificação
 * @param {Object} texto a ser exibido no corpo da notificação
 * @param {Object} tipo_msg tipo da mensagem como sucesso, erro, informação ou alerta.
 */
function notificar(titulo, texto, tipo_msg){
	$.pnotify({
	    title: titulo,
	    text: texto,
	    type: tipo_msg
	});
}//fim notificar


function cadastrar_galinha(){
	var erros = false;
	
	$(FORM_CRIAR_GALINHA + " :input").map(function(){
	     if( !$(this).val() ) {
	     		$(this).parents('.control-group').removeClass('info');
	          $(this).parents('.control-group').addClass('error');
	          erros = true;
	    } else if ($(this).val())	$(this).parents('.control-group').addClass('info');
	});
	
	if(!erros) { 
		var function_before = notificar("Enviando dados", "Enviando a nova galinha para o processamento no servidor.<br><center><strong>Aguarde...</strong></center>", "info");

		var function_erro = function(xhr, status, error){
			var err = eval("(" + xhr.responseText + ")");
			notificar("Erro no envio", "Erro: " + err.Message + 
					  "<br>Erro ao tentar enviar a mensagem ao servidor. Provavelmente o servidor está desligado.<br><center><strong>Reinicie o servidor...</strong></center>",
					  "error");
		};
				
		var frm = $(FORM_CRIAR_GALINHA);
		
		$.ajax({
            type: frm.attr('method'),
            url: "http://localhost:3000/galinhas",
            data: frm.serialize(),
            error: function_erro, 
            success: function(data){
            	$(BTN_CANCELAR_MODAL).trigger('click');
				notificar("Sucesso na operação", "A galinha foi cadastrada com sucesso e já consta na lista de galinhas cadastradas.<br><center><strong>Obrigado!</strong></center>","success");
				load_galinhas();
			}
        });
	
	}
	
	
}


function cadastrar_ovo(){
	var erros = false;
	
	$(FORM_CRIAR_OVO + " :input").map(function(){
	     if( !$(this).val() ) {
	     		$(this).parents('.control-group').removeClass('success');
	          $(this).parents('.control-group').addClass('error');
	          erros = true;
	    } else if ($(this).val())	$(this).parents('.control-group').addClass('success');
	});
	
	if(!erros) { 
		var function_before = notificar("Enviando dados", "Enviando o novo ovo para o processamento no servidor.<br><center><strong>Aguarde...</strong></center>", "info");

		var function_erro = function(xhr, status, error){
			var err = eval("(" + xhr.responseText + ")");
			notificar("Erro no envio", "Erro: " + err.Message + 
					  "<br>Erro ao tentar enviar a mensagem ao servidor. Provavelmente o servidor está desligado.<br><center><strong>Reinicie o servidor...</strong></center>",
					  "error");
		};
				
		var frm = $(FORM_CRIAR_OVO);
		
		$.ajax({
            type: frm.attr('method'),
            url: "http://localhost:3000/ovos",
            data: frm.serialize(),
            error: function_erro, 
            success: function(data){
            	$(BTN_CANCELAR_MODAL).trigger('click');
				notificar("Sucesso na operação", "O ovo foi cadastrada com sucesso e já consta na lista de ovos cadastrados.<br><center><strong>Obrigado!</strong></center>","success");
				load_ovos();
			}
        });
        
	}
}

/**
 * Função que retorna o layout que vai cair na tabela
 * @param {string} sufix_id_ref = Sufix a ir no atributo id, com o numero do nele, com underline
 * @param {boolean} eh_galinha = boolean se é galinha ou ovo
 */
function gerar_acoes(sufix_id_ref, eh_galinha, id){
	var acao_edita = "editar_"+sufix_id_ref+id;
	var acao_excluir = "excluir_"+sufix_id_ref+id;
	var acao_visualizar = "viasualizar_"+sufix_id_ref+id;
	var objs = "";
	var class_btn = "";
	
	if(eh_galinha) {
		class_btn = " btn-info";
		objs = "galinhas";
	}else {
		class_btn = " btn-success";
		objs = "ovos";
	}
	
	var retorno_editar = '<td id="acoes_'+ objs +'_'+ id +'"><center><a id="'+ acao_edita +'" title="Editar" class="tooltiper btn btn-mini '+class_btn+'"><i class="icon-edit icon-white"></i></a>';
	var retorno_vistualizar = '<a title="Visualizar" id="'+ acao_visualizar +'" class="btn btn-mini '+class_btn+'"><i class="icon-eye-open icon-white"></i></a>';
	var retorno_excluir = '<a id="'+ acao_excluir +'" title="Excluir" data-confirm="Tem certeza que quer excluir?" data-method="delete" href="/'+ objs +'/" rel="nofollow" class="btn btn-mini btn-danger"><i class="icon-remove icon-white"></i></a></center></td>';
	
	return retorno_editar + retorno_vistualizar + retorno_excluir;
}


function enviar_editar_galinha(id){
	var erros = false;
	
	$(FORM_CRIAR_GALINHA + " :input").map(function(){
	     if( !$(this).val() ) {
	     		$(this).parents('.control-group').removeClass('info');
	          $(this).parents('.control-group').addClass('error');
	          erros = true;
	    } else if ($(this).val())	$(this).parents('.control-group').addClass('info');
	});
	
	if(!erros) { 
		var function_before = notificar("Enviando dados", "Enviando a nova galinha para o processamento no servidor.<br><center><strong>Aguarde...</strong></center>", "info");

		var function_erro = function(x){
			console.log("Erro no ajax: ");
			console.log(x);
			notificar("Erro no envio", "Erro - " + x.status + "<br>Erro ao tentar enviar a mensagem ao servidor. Provavelmente o servidor está desligado.<br><center><strong>Reinicie o servidor...</strong></center>",
					  "error");
		};
				
		var frm = $(FORM_CRIAR_GALINHA);
		
		$.ajax({
            type: "post",
            url: "/galinhas/"+id,
            data: frm.serialize(),
            error: function_erro, 
            success: function(data){
            	$(BTN_CANCELAR_MODAL).trigger('click');
				notificar("Sucesso na operação", "A galinha foi cadastrada com sucesso e já consta na lista de galinhas cadastradas.<br><center><strong>Obrigado!</strong></center>","success");
				load_galinhas();
			}
        });
	
	}
}

function enviar_editar_ovo(id){
	var erros = false;
	
	$(FORM_CRIAR_OVO + " :input").map(function(){
	     if( !$(this).val() ) {
	     		$(this).parents('.control-group').removeClass('success');
	          $(this).parents('.control-group').addClass('error');
	          erros = true;
	    } else if ($(this).val())	$(this).parents('.control-group').addClass('success');
	});
	
	if(!erros) { 
		var function_before = notificar("Enviando dados", "Enviando o novo ovo para o processamento no servidor.<br><center><strong>Aguarde...</strong></center>", "info");

		var function_erro = function(xhr, status, error){
			var err = eval("(" + xhr.responseText + ")");
			notificar("Erro no envio", "Erro: " + err.Message + 
					  "<br>Erro ao tentar enviar a mensagem ao servidor. Provavelmente o servidor está desligado.<br><center><strong>Reinicie o servidor...</strong></center>",
					  "error");
		};
				
		var frm = $(FORM_CRIAR_OVO);
		
		$.ajax({
            type: frm.attr('method'),
            url: "http://localhost:3000/ovos/"+id,
            data: frm.serialize(),
            error: function_erro, 
            success: function(data){
            	$(BTN_CANCELAR_MODAL).trigger('click');
				notificar("Sucesso na operação", "O ovo foi cadastrada com sucesso e já consta na lista de ovos cadastrados.<br><center><strong>Obrigado!</strong></center>","success");
				load_ovos();
			}
        });
        
	}
}



