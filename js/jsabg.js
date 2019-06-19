$(".fora").on("click", "button", function(){
	var valor = $(this).val();
	var nome = $("#nome"+valor).val();
	var telefone = $("#telefone"+valor).val();
	
	if(nome != "" && telefone != "") {
		var form = new FormData($("#form"+valor)[0]);
			$.ajax({
			url: '../../model/PhpMailer.php',
			type: 'post',
			dataType: 'json',
			cache: false,
			processData: false,
			contentType: false,
			data: form,
			timeout: 8000, 
			success: function(resultado){
		}
	});
		alert('INTERESSE REGISTRADO!');
		//alert('EM BREVE ENTRAREMOS EM CONTATO!');

	} else {
		alert('NÃO FOI POSSÍVEL REGISTRAR O INTERESSE');
		alert('Os campos NOME e TELEFONE são obrigatórios');
	}
	
});

/*
var botao = document.getElementById("fora");
botao.addEventListener('click', function(e){
vlBotao = e.target.id;
alert(vlBotao);
});
*/


/*var form = new FormData($("#form"+vlBotao)[0]);
		$.ajax({
			url: '../../model/PhpMailer.php',
			type: 'post',
			dataType: 'json',
			cache: false,
			processData: false,
			contentType: false,
			data: form,
			timeout: 8000, 
			success: function(resultado){
				$("#resposta").html(resultado);
			}
		});

	}); 

});*/


$(document).ready(function () {
  $(window).scroll(function () {
    if (jQuery(this).scrollTop() > 50) {
     $("#menu").addClass("menu-diferente");
     document.getElementById("textoH5").innerHTML = '<a href="#">novolar@novolarimobiliariaunai.com.br</a>';
    } else {
     $("#menu").removeClass("menu-diferente");
      document.getElementById("textoH5").innerHTML = "";
    }
  });
});

$(document).ready(function(){

$("#subirTopo").hide();

$('a#subirTopo').click(function () {
         jQuery('body,html').animate({
           scrollTop: 0
         }, 2000);
        return false;
   });

$(window).scroll(function () {
         if (jQuery(this).scrollTop() > 50) {
            jQuery('#subirTopo').fadeIn();
         } else {
            jQuery('#subirTopo').fadeOut();
         }
     });
});

/*$(document).ready(function(){
	var video = document.getElementById("video_orto");
	video.play();
});*/

$(document).ready(function(){
	//pesquisar sem refresh na página
	$("#ipt_cep").keyup(function(){
		var pesquisa = $(this).val();

		//verificando se há algo digitado
		if(pesquisa != ''){
			//criando um objeto
			var dados = {
				palavra : pesquisa
			}

			//alert(dados.palavra);S
		
			$.post("cep.php", dados, function(retorna){
			//resultados
			$(".resultado").html(retorna);
		});
	} else {
		$(".resultado").html('');
	}

	});
});

$(document).ready(function(){
	$("#modalPrincipal").modal('show');
});

$(document).ready(function(){
	var $cep = $("#ipt_cep");
	$cep.mask('99999-999', {reverse : false});
});

$(document).ready(function(){
	var $cnpj = $("#cnpj");
	$cnpj.mask('99.999.999/9999-99', {reverse : false});
});

$(document).ready(function(){
	var $inscricaoEstadual = $("#inscricaoEstadual");
	$inscricaoEstadual.mask('99.999.999/999-99', {reverse : false});
});

$(document).ready(function(){
	var $telFixoCom = $("#telFixoCom");
	$telFixoCom.mask('(99)9999-9999', {reverse : false});
});

$(document).ready(function(){
	var $telCel1 = $("#telCel1");
	$telCel1.mask('(99)99999-9999', {reverse : false}); 
});

$(document).ready(function(){
	var $telCel2 = $("#telCel2");
	$telCel2.mask('(99)99999-9999', {reverse : false}); 
});

$(document).ready(function(){
	var $cpf = $("#cpf");
	$cpf.mask('999.999.999-99', {reverse : false});
	//alert('OK');
});

$(document).ready(function(){
	$matriculaFuncionario = $("#matricula");
	$matriculaFuncionario.mask('999/9999', {reverse : false});
});

$(document).ready(function(){
	$creciCorretor = $("#creci");
	$creciCorretor.mask('99999-AA', {reverse : false});
});

$(document).ready(function(){
	$telFixoRes = $("#telFixoRes");
	$telFixoRes.mask('(99)9999-9999', {reverse : false});
});

$(document).ready(function(){
	$telFixoCom = $("#telFixoCom");
	$telFixoCom.mask('(99)9999-9999', {reverse : false});
});

/*$(document).ready(function(){
	$rendaBruta = $("#rendaBruta");
	$rendaBruta.mask('0000000000.00', {reverse : false});
});*/

$(function(){
	$('[data-toggle="tooltip"]').tooltip()
});

$(function(){
	$('[data-toggle="popover"]').popover()
});
/*$('#modalPrincipal').modal('show');*/

$(function (){
	$(".ttp").tooltip({
		animation:false,
		//delay : {show: 2000, hide : 2000}
	});
});

jQuery('#modalPrincipal').on('hidden.bs.modal', function (e){
	//document.getElementById('video_porto').src = '';
	//alert('CLICOU EM FECHAR...');
	var video = document.getElementById('video_porto');
		video.pause();

});

function trocaImagemEncomenda(){
	document.getElementById('corEncomenda').src = 'images/encomenda-black.png';
	//alert('PASSOU O MOUSE');
}

function voltaImagemEncomenda(){
	document.getElementById('corEncomenda').src = 'images/encomenda-white.png';
}

function trocaImagemMoney(){
	document.getElementById('corMoney').src = 'images/money-black.png';
	//alert('PASSOU O MOUSE');
}

function voltaImagemMoney(){
	document.getElementById('corMoney').src = 'images/money-white.png';
}

function trocaImagemEtiqueta(){
	document.getElementById('corEtiqueta').src = 'images/etiqueta-black.png';
	//alert('PASSOU O MOUSE');
}

function voltaImagemEtiqueta(){
	document.getElementById('corEtiqueta').src = 'images/etiqueta-white.png';
}