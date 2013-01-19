function WordsCtrl($scope) {
  $scope.words = twl06Words;
  $scope.letters = '';
  $scope.letterCountCache = {};

  /* Determine if we have the letters to make this word */
  $scope.hasLettersFor = function(word) {
    if (!word) return false;
    if ($scope.letters.length < word.length) return false;
    letterCounts = $scope.letterCountsFor($scope.letters);
    wordLetterCounts = $scope.letterCountsFor(word);
    for (letter in wordLetterCounts) {
      if (!letterCounts[letter]) return false;
      if (letterCounts[letter] < wordLetterCounts[letter]) return false;
    }
    return true;
  };

  $scope.letterCountsFor = function(word) {
    if ($scope.letterCountCache[word]) return $scope.letterCountCache[word];
    counter = {};
    for (i = 0; i < word.length; i++) {
      ch = word.charAt(i).toUpperCase();
      if(counter[ch]) counter[ch]++;
      else counter[ch] = 1;
    }
    $scope.letterCountCache[word] = counter;
    return counter;
  };
}
