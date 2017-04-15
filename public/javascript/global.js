//все работает
$(document).ready(function () {
    //список всех досок и ссылка на каждую
    $.ajax({
        url: 'http://localhost:3078/board',
        type: 'GET',
        contentType: 'application/json',
        success: function(result) {
            $.each(result, function(index){
            //<a id="58ee7bf57cb76c2e6477caca" href="/board/58ee7bf57cb76c2e6477caca">my</a>
                $(".boards").append("<a class='board' id='"+ result[index]._id + "'href='/board/" + result[index]._id + "'>" + result[index].title + "</a>");
            })
        },
        error: function (error) {
            console.log(error);
        }
    });
    //сохранить в бд id кликнутой доски
    $(document).on('click', "a.board" , function() {
        var id = event.target.id;
        $.ajax({
            url: 'http://localhost:8080/boardid',
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ boardId: id }),
            success: function(response) {
                console.log("id saved");
            }
        });
        id   
    });     
});