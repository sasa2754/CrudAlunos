const labelImg = (document.getElementById('preview').style);

function img() {
    var reader = new FileReader();

    reader.readAsDataURL(document.getElementById('arquivo').files[0]);

    reader.onload = function (e) {
        labelImg.backgroundImage = `url(${e.target.result})`;
        labelImg.backgroundRepeat = 'no-repeat';
        labelImg.backgroundSize = 'cover';
        labelImg.borderRadius = '50%';
        labelImg.backgroundPosition = 'center';
    };
}