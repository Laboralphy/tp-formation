<?php
$exercice = '';
if (array_key_exists('ex', $_GET)) {
	$exercice = $_GET['ex'];
}	
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>TP<?php !!$exercice ? ' - ' . $exercice : ''; ?></title>
		<script src="jquery.js"></script>
		<script src="tp-shell.js"></script>
	</head>
	<body>
		<h1>formation</h1>
		<div>
<?php
if ($exercice) {
	print '<button type="button" onclick="location.href = \'/index.php\'">[exercices]</button>';
} else {
	foreach(scandir('./exercices') as $f) {
		if (substr($f, 0, 1) !== '.' && preg_match('/\.js$/', $f)) {
			print '<button type="button" onclick="location.href = \'./?ex=' . $f . '\'">' . $f . '</button>';
		}
	}
}
?>
		</div>
<?php
if ($exercice) {
	print '<h2>' . $exercice . '</h2>';
}
?>
		<pre id="output"></pre>
<?php
if ($exercice) {
	print '<script src="exercices/' . $exercice . '/index.js"></script>';
}
?>
	</body>
</html>
