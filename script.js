const submissions = [
    { name: "Jane", score: 95, passed: true },
    { name: "Joe", score: 77, passed: true },
    { name: "Jack", score: 59, passed: false },
    { name: "Jill", score: 88, passed: true }
  ];
  
  function addSubmission(array, newName, newScore) {
    const passed = newScore >= 60;
    const newSubmission = { name: newName, score: newScore, passed };
    array.push(newSubmission);
  }
  
  function deleteSubmissionByIndex(array, index) {
      array.splice(index, 1);
  }
  
  function deleteSubmissionByName(array, name) {
    const index = array.findIndex(submission => submission.name === name);
    array.splice(index, 1);
  }
  
  function editSubmission(array, index, score) {
      array[index].score = score;
      array[index].passed = score >= 60;
  }
  
  function findSubmissionByName(array, name) {
    return array.find(submission => submission.name === name);
  }
  
  function findLowestScore(array) {
    let lowest = array[0];
    for (const submission of array) {
        if (submission.score < lowest.score) {
            lowest = submission;
        }
    }
        return lowest;  
  } 
  
  function findAverageScore(array) {
    let totalScore = 0;
    for (const submission of array) {
        totalScore += submission.score;
    }
  return totalScore / array.length;
  }

  function filterPassing(array) {
    return array.filter(submission => submission.passed);
  }

  function filter90AndAbove(array) {
    return array.filter(submission => submission.score >= 90);
  }
  

//   addSubmission(submissions, "John", 70);
//   console.log(submissions);
  
//   deleteSubmissionByIndex(submissions, 2);
//   console.log(submissions);
  
//   deleteSubmissionByName(submissions, "Joe");
//   console.log(submissions);
  
//   editSubmission(submissions, 1, 55);
//   console.log(submissions);
  
//   console.log(findSubmissionByName(submissions, "Jane"));
  
//   console.log(findLowestScore(submissions));
  
//   console.log(findAverageScore(submissions));
  
//   console.log(filterPassing(submissions));
  
  console.log(filter90AndAbove(submissions));