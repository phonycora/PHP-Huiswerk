<?php
$weekdag = date('l');
$dag = date('j');
$maanden = [
    'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni',
    'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'
];
$maand = $maanden[date('n') - 1];
$jaar = date('Y');

echo "Het is vandaag: $weekdag $dag $maand $jaar.<br>";
echo "Vandaag is het de " . (date('z') + 1) . "e dag van het jaar.<br>";
echo "$weekdag is de " . date('N') . "e dag van de week.<br>";
echo "De maand $maand heeft in totaal " . date('t') . " dagen.<br>";

if (date('L') === '1') {
    echo "Het jaar $jaar is een schrikkeljaar.";
} else {
    echo "Het jaar $jaar is geen schrikkeljaar.";
}
?>