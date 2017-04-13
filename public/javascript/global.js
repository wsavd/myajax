$(document).ready(function () {
    getBoards();
    console.log("global succes")
    function getBoards(){
        $.ajax({
            url: 'http://localhost:3001/board',
            type: 'GET',
            contentType: 'application/json',
            success: function(result) {
                $.each(result, function(index){
                    $(".boards").append("<a href='/board/" + result[index]._id + "'>" + result[index].title + "</a>");
                })
            },
            error: function (error) {
                console.log(error);
            }
        });
    };

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