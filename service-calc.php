<?php
	
	
function doJob($operator, $operand1, $operand2) {
	switch ($operator) {
		case 'add':
			return $operand1 + $operand2;

		case 'sub':
			return $operand1 - $operand2;
		
		case 'mul':
			return $operand1 * $operand2;
			
		case 'div':
			return $operand1 / $operand2;
			
		case 'sqrt':
			return sqrt($operand1);
			
		default:
			throw new Exception('unknonw operator : ' . $operator);
	}
}


$nResult = doJob($_GET['op'], $_GET['a'], array_key_exists('b', $_GET) ? $_GET['b'] : null);


header('content-type: application/json');
print json_encode(array('result' => $nResult));
