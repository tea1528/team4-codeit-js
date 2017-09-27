'use strict'

function horseRacing(req, res){
  const json = req.body;

  // question 1
  let jsonArr = json.data
  let winnerHorse = [],
  winnerTrainer = [],
  winnerJockey = []


  let i = 0
  for(i; i < jsonArr.length; i++){
    if(jsonArr[i].Placing === "1"){
      winnerHorse.push(jsonArr[i].Horse)
      winnerTrainer.push(jsonArr[i].Trainer)
      winnerJockey.push(jsonArr[i].jockeycode)


    }


  }

  let result = {
      "q1" : {
        "horse" : mostOccuringElement(winnerHorse),
        "jockey" : mostOccuringElement(winnerJockey),
        "trainer" : mostOccuringElement(winnerTrainer)
      },
      "q2": {
        "horse": 0,
        "jockey": 0,
        "trainer": 0
    },
    "q3": [
        {
            "jockeys": ["jockey1", "jockey2", "jockey3"],
            "races": ["2010-01-30:1", "2010-01-30:2", "2010-01-30:3"]
        },
        {
            "jockeys": ["jockey1", "jockey2", "jockey3"],
            "races": ["2010-01-30:1", "2010-01-30:2", "2010-01-30:3"]
        }
    ]
  }

  return res.type('application/json').status(200).json(scoreHorse)



}

function mostOccuringElement(input){
  let mostFrequent = 1; //default maximum frequency
  let m = 0;  //counter
  let item;  //to store item with maximum frequency
  for (let i=0; i < input.length; i++)    //select element (current element)
  {
    for (let j=i; j < input.length; j++)   //loop through next elements in array to compare calculate frequency of current element
    {
            if (input[i] === input[j])    //see if element occurs again in the array
             m++;   //increment counter if it does
            if (mostFrequent < m)   //compare current items frequency with maximum frequency
            {
              mostFrequent = m;      //if m>mf store m in mf for upcoming elements
              item = input[i];   // store the current element.
            }
    }
    m = 0;   // make counter 0 for next element.
  }

  return item;
}

function mostPoint(input){
  let max=0;
  for(key in input){
    if(max < input[key]){
      max = input[key]
    }
  }
  return max;
}

module.exports = horseRacing
