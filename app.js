$(function () {
    const $form = $('#newPostForm');
    const $fileInput = $form.find("[name=image]");
    $fileInput.change(function ($ev) {
        console.log(this.files);

        const reader = new FileReader();
        reader.onload = function(){
            console.log(reader.result);
            $('#imagePreview').attr('src', reader.result);
        }
        reader.readAsDataURL(this.files[0]);
        console.log("დავიწყე წაკითხვა");

    });
    $form.on('submit', function (ev) {
        ev.preventDefault();
        console.log($form.serializeArray());
    });


    var openFile = function (input) {
        var reader = new FileReader();
        reader.onload = function () {
            var dataURL = reader.result;
            const $img = $('#imagePreview');
            $img.attr('src', dataURL);
        };
        reader.readAsDataURL(input.files[0]);
    };
    // const $fileInput = $form.find("image");
    // const $fileInput = $form.find("image");    
});