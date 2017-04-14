$(document).ready(function () {
    var idArr = [];
    console.log("global succes")

        //список всех досок и ссылка на каждую
        $.ajax({
            url: 'http://localhost:3001/board',
            type: 'GET',
            contentType: 'application/json',
            success: function(result) {
                $.each(result, function(index){
                    //<a id="58ee7bf57cb76c2e6477caca" href="/board/58ee7bf57cb76c2e6477caca">my</a>
                    $(".boards").append("<a class='board' id='"+ result[index]._id + "'href='/board/" + result[index]._id + "'>" + result[index].title + "</a>");
                    idArr[index]=result[index]._id;
                    console.log(idArr[index])
                })
            },
            error: function (error) {
                console.log(error);
            }
        });
    //после append
    var boardId;
    $(document).on('click', "a.board" , function() {
     boardId = event.target.id;
     alert(boardId);
    });

    $("#create").on('click', function  (e) {
	    e.preventDefault();
        var title = $('#title');
        var dataForm = {
            title: title.val()
        }
        $.ajax({
            url: 'http://localhost:3001/board',
            type: 'POST',
            contentType: 'json',
            data: dataForm,
            success: function(data) {
                console.log("succes");
                getBoards();
            },
            error: function (error) {
                console.log(error);
            }
        });
	});
        
});