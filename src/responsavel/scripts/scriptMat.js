$(document).ready(function () {
    $.getJSON("../shared/mockVidaEscolarr.json", function (obj) {
      var tabela = "";
      $.each(obj.alunos, function (i, value) {

        tabela += '<td><ul class="list-group">';
        
        
        $.each(value.atividadesMat, function (k, v) {
            tabela += '<li class="list-group-item">' + v.nomeAtividade + '</li>';
        });
        tabela += '</ul></td>';
        tabela += '<td><ul class="list-group">';

        $.each(value.agenda, function (k, v) {
          tabela += '<li class="list-group-item">' + v.diaAtividade + '</li>';
      });
      tabela += '</ul></td>';
  
      });
      $("#contMat").append(tabela);
    });
  }); 