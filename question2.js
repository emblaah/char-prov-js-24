// 2. Bokstävers position i strängar (3p)
// Skriv en funktion equalLetterPositions som räknar ut hur många bokstäver som
// är på samma position i två strängar. Funktionen ska räkna stor och liten bokstav
// som samma bokstav.

// Exempel:
// console.log(equalLetterPositions("go", "DO")); // Returnerar 1 (o och O är på samma position i båda strängarna)
// console.log(equalLetterPositions("hello", "world")); // Returnerar 1 (l är på samma position i båda strängarna)
// console.log(equalLetterPositions("detsamma", "detta")); // Returnerar 4 (d, e, t, a är på samma position i båda strängarna)

function equalLetterPositions(str1, str2) {
  // Din kod här
  const minLength = Math.min(str1.length, str2.length);
  let resultCount = 0;

  for (let i = 0; i < minLength; i++) {
    if (str1[i].toLowerCase() === str2[i].toLowerCase()) {
      resultCount++;
    }
  }

  return resultCount;
}

module.exports = equalLetterPositions;
