import { Button } from '@material-ui/core';

function algo() {
  const str1 = 'Movies, Games, Happy, Stressed, Student';
  const str2 = 'Games, Sad, Professor, Cartoons, Skiing';

  function termFreqMap(str) {
    var words = str.split(' ');
    var termFreq = {};
    words.forEach(function (w) {
      termFreq[w] = (termFreq[w] || 0) + 1;
    });
    return termFreq;
  }
  function addKeysToDict(map, dict) {
    for (var key in map) {
      dict[key] = true;
    }
  }

  function termFreqMapToVector(map, dict) {
    var termFreqVector = [];
    for (var term in dict) {
      termFreqVector.push(map[term] || 0);
    }
    return termFreqVector;
  }

  function vecDotProduct(vecA, vecB) {
    var product = 0;
    for (var i = 0; i < vecA.length; i++) {
      product += vecA[i] * vecB[i];
    }
    return product;
  }

  function vecMagnitude(vec) {
    var sum = 0;
    for (var i = 0; i < vec.length; i++) {
      sum += vec[i] * vec[i];
    }
    return Math.sqrt(sum);
  }

  function cosineSimilarity(vecA, vecB) {
    return (
      vecDotProduct(vecA, vecB) / (vecMagnitude(vecA) * vecMagnitude(vecB))
    );
  }

  function textCosineSimilarity(strA, strB) {
    var termFreqA = termFreqMap(strA);
    var termFreqB = termFreqMap(strB);

    var dict = {};
    addKeysToDict(termFreqA, dict);
    addKeysToDict(termFreqB, dict);

    var termFreqVecA = termFreqMapToVector(termFreqA, dict);
    var termFreqVecB = termFreqMapToVector(termFreqB, dict);

    return cosineSimilarity(termFreqVecA, termFreqVecB);
  }

  const handleAlgo = () => {
    console.log(textCosineSimilarity(str1, str2));
  };

  return (
    <div>
      <Button onClick={handleAlgo}>Click me</Button>
    </div>
  );
}

export default algo;
