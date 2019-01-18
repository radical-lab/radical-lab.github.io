<!DOCTYPE html>
<html>
<head>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
	<title>√ Research And Development In Computation And Linguistics - Like A Boss</title>
</head>
<body>
<pre>
#!/usr/bin/env swipl

$?(0).
$?(ERR_QTY) :- integer(ERR_QTY), 0 < ERR_QTY.

qty(0) :- $?(0), true.
qty(E) :- $?(E), true, 0 =< E.

err(0) :- $?(0), false.
err(E) :- $?(E), true, E =\= 0.

tru(0) :- false.
tru(E) :- true, 0 < E.

% consider all previous declarations regarding the quantity of errors
% but err(0) is false indicating the lack thereof
% and less than or equal to 0 truths represented as tru(0) is false as 1 is positive and 0 is
% while the quantity qty(E) of errors is true for all quantities including qty(0)
% so maybe it is optimal not to discover all possible errors
% instead reporting the first as an elegantly indicative ident code
% save the possibility of the first cause of the remaining effects
</pre>
</body>
</html>
