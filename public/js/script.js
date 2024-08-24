const labelImg = (document.getElementById('preview').style);

function img() {
    var reader = new FileReader();

    reader.readAsDataURL(document.getElementById('file').files[0]);

    reader.onload = function (e) {
        labelImg.backgroundImage = `url(${e.target.result})`;
        labelImg.backgroundRepeat = 'no-repeat';
        labelImg.backgroundSize = 'cover';
        labelImg.borderRadius = '50%';
        labelImg.backgroundPosition = 'center';
    };
}


function deleteUser(event, room) {
    event.preventDefault();
    
    const value = document.createElement('input')

    value.type = 'hidden';
    value.name = 'roomId';
    value.value = room;

    event.currentTarget.appendChild(value)
    
    
    event.currentTarget.submit();
}