<?php 
	
$host = "localhost";
$user = "root";
$pass = "bonisa";
$db= "usuarios";
$conexao = mysqli_connect($host,$user,$pass) or die(mysqli_error($conexao));
mysqli_select_db($conexao,$db) or die(mysqli_error($conexao));

?>

<!DOCTYPE html>
<html>
<head>
	<title>Tela de login teste</title>

<script type="text/javascript">
	function loginsucessful()
	{
		setTimeout("window.location = 'painel.php'",5000);
	}

	function loginfailed()
	{
		setTimeout("window.location = 'login.php'",5000);
	}

</script>
</head>
<body>
<?php 
$email = $_POST['email'];
$senha = $_POST['senha'];
$sql = mysqli_query($conexao,"SELECT * FROM USUARIOS WHERE email = '$email' and senha = '$senha'") or die(mysqli_error($conexao));
$row = mysqli_num_rows($sql);
if($row > 0)
{
	session_start();
	$_SESSION ['email'] = $_POST['email'];
	$_SESSION ['senha'] = $_POST['senha'];
	echo "Você foi autenticado com sucesso";
	echo "<script>loginsucessful()</script>";
}
else
{
	echo "<center>Não logou!</center>";
	echo "<script>loginfailed()</script>";
}

 ?>
 </body>
 </html>
