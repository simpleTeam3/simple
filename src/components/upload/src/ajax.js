export function upload(options){
    let xhr;

    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open('POST', options.data, true);

    xhr.send();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            
        }
    }
}