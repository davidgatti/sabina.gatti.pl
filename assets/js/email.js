let e = ['p','r','z','e','m','o','c','@','g','a','t','t','i','.','p','l'];

$('#contact_email').text(e.join(''));
$('#contact_email').attr('href', 'mailto:' + e.join(''));