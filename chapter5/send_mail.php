<?php
header('Pragma: no-cache');
header('Last-Modified: ' . gmdate('D, d M Y H:i:s', getlastmod()) . ' GMT');

$username = !empty($_POST['username']) ? $_POST['username'] : 'Неизвестный пользователь';
$email    = (!empty($_POST['email'])  && preg_match('/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9_\-\.]+$/', $_POST['email'])) ? $_POST['email'] : false;
$message  = !empty($_POST['msgbody']) ? $_POST['msgbody'] : false;

sleep(2);

if(!$email || !$message)
	die('{"success":"0", "error":"1", "notification":"в обработчик не переданы необходимые данные"}');

$header = 'Reply-To: '.$email;

if(mail('test@ctrigger.ru', 'Сообщение, отправленное из AJAX-формы', $username.' пишет:\n'.$message, $header))
	die('{"success":"1", "notification":"сообщение отправлено"}');
else
	die('{"success":"0", "error":"1", "notification":"ошибка при отправке сообщения"}');

?>