
function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('#blah')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }


document.getElementById("back").onclick = function () {
        location.href = "index2.html";
    };

function myfunc(input)
{

    //var dl=detectText(bucketName, input);
    document.getElementById('back').style.visibility = 'visible';
    document.getElementById('blah').style.visibility = 'visible';
    document.getElementById('camera--trigger').style.visibility = 'hidden';
    document.getElementById('camera--trigger2').style.visibility = 'visible';
    document.getElementById('sel1').style.visibility = 'visible';
    document.getElementById('camera--trigger3').style.visibility = 'visible';
    //document.getElementById('camera--trigger3').value = dl;
}

function myfunc2()
{
    document.getElementById('blah').style.visibility = 'hidden';
    document.getElementById('alltext').style.visibility = 'visible';
    document.getElementById('sel1').style.visibility = 'hidden';
    document.getElementById('camera--trigger3').style.visibility = 'hidden';
    document.getElementById('sel2').style.visibility = 'visible';
    document.getElementById('camera--trigger2').style.visibility = 'hidden';
    document.getElementById('camera--trigger4').style.visibility = 'visible';
    document.getElementById('camera--trigger5').style.visibility = 'visible';
}

//addText("hi")
//var Alltext = "";
//    function addText(text) {
//        Alltext += text
//    }
//addText("hi")
//document.getElementById("alltext").value = Alltext;



