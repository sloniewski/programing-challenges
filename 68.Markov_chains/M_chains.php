<?php
//open file
$file = 'text.txt';
$fhandle= fopen($file,'r');
$content = fread($fhandle, filesize($file));

//handle signs and line breaks
$signs = ['"', ',', ':', '?'];
$filtered = preg_replace('/\r\n|\n|\r/',' ',str_replace($signs, '', $content));

//split sentences, and make array of sentences
$sentences = explode('.',$filtered);

//function that builds markov chainv from a text, array is altered with each string given
$chain = [];

function markov (string $text, array &$chain)
{
    $word = explode(' ', $text);
    array_walk(
        $word,
        function(&$x) {$x = strtolower($x);}
    );

    for($i = 0; $i < (count($word) - 1); $i++) {
        if (!array_key_exists($word[$i], $chain)){
            $chain[$word[$i]] = [];
        }

        if (array_key_exists($word[$i+1], $chain[$word[$i]])){
            $chain[$word[$i]]
                  [$word[$i + 1]] += 1;
        } else {
            $chain [$word[$i]]
                   [$word[$i + 1]] = 1;
        }
    }
}

//histogram of words, to be used for choosing the first word
$histogram = [];

function histogram(string $text,array &$histogram)
{
    $words = explode(' ',$text);
    array_walk(
        $words,
        function(&$x) {$x = strtolower($x);}
    );

    foreach ($words as $word){
        if (array_key_exists($word, $histogram)) {
            $histogram[$word] += 1;
        } else {
            $histogram[$word] = 1;
        }
    }

}

//analyse each sentences and build a chain adn histogram
foreach ($sentences as $key => $value) {
    markov ($value, $chain);
}

foreach ($sentences as $key => $value) {
    histogram ($value, $histogram);
}

// function that chooses a word from histogram, the higher the count in histogram the more possible for word to be chosen
function chooseWord (array $histogram)
{
    arsort($histogram);
    $range = array_sum($histogram);
    $rand = rand(1, $range);
    $tracker = 0;

    foreach ($histogram as $word => $frequency) {
        $tracker += $frequency;
        if ($tracker >= $rand) return $word;
    }
}

//choose a starting word
$reference = chooseWord ($histogram);

//generate a sentence jumping from one word in chain to another using 'chooseWord' function
$sentence_lenght = 10;
for ($j = 0; $j < $sentence_lenght; $j++) {
    print ($reference);
    echo (' ');

    while (!array_key_exists($reference, $chain)){
        $reference = chooseWord ($histogram);
    }

    $reference = chooseWord ($chain[$reference]);
}
?>
