export default function upload(options){
    console.log(options)
    let xhr;

    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    const action = options.action;
    const formData = new FormData();

    if(options.data){
        Object.keys(options.data).forEach(key => {
            formData.append(key, options.data[key]);
        })
    }


    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            options.success(xhr.responseText)
        }
    }

    xhr.open('POST', action, true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send(formData);

    return xhr;
}