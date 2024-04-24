$(document).ready(function(){
    $('header button').click(function(){
        $('.div_form').slideDown();
    })
})

$('#btn_cancelar').click(function(){
    $('.div_form').slideUp();
})

$(document).on('click', '.list_item', function() {
    const decoration = $(this).closest('p').css('text-decoration');
    let newDecoration = 'none'
    if (decoration.includes('none')){
        newDecoration = 'line-through';
    } else {
        newDecoration = 'none';
    }
    $(this).closest('p').css('text-decoration', newDecoration);
})

$('.div_form').on('submit', function(e){
    e.preventDefault();
    const novaTarefa = $('#tarefa').val();
    const novoItem = $('<li style="display:none"></li>');
    $(`<p class="list_item">${novaTarefa}</p>`).appendTo(novoItem);
    $(novoItem).appendTo(".div_list ul");
    $(novoItem).fadeIn();
    $('#tarefa').val('');
})