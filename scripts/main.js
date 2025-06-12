HTTP/2 200 OK
Content-Type: text/javascript
Last-Modified: Fri, 31 May 2024 20:25:13 GMT
Accept-Ranges: bytes
Content-Length: 166
Date: Wed, 11 Jun 2025 18:31:53 GMT
Server: LiteSpeed

$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.nav').addClass('sticky');
    } else{
        $('.nav').removeClass('sticky');
    }
});

