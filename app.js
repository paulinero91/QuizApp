var questions = [
	{
	  text : 'What is the capital of North Carolina?',
	  answers : [
	    {text : 'Charlotte'}, 
	    {text : 'Raleigh', correct : true},
	    {text : 'Cary'}, 
	    {text : 'Durham'}, 
	  ]
	}
	,
	{
	  text : 'What is the capital of South Carolina?',
	  answers : [ 
	    {text : 'Columbia', correct : true},
	    {text : 'Georgetown'},
	    {text : 'Summerville'},
	   	{text : 'Camden'},
	  ]
	}
	,
	{
	  text : 'What is the capital of Virginia',
	  answers : [
	    {text : 'Arlington'}, 
	    {text : 'Lynchburg'},
	    {text : 'Charlottesville'},
	    {text : 'Richmond', correct : true}
	  ]
	}
	,
	{
	  text : 'What is the capital of Texas',
	  answers : [
	    {text : 'Dallas'}, 
	    {text : 'Houston'},
	    {text : 'Waco'},
	    {text : 'Austin', correct : true}
	  ]
	}
	,
	{
	  text : 'What is the capital of Colorado',
	  answers : [
	    {text : 'Denver', correct : true},
	    {text : 'Boulder'}, 
	    {text : 'Aspen'},
	    {text : 'Aurora'}
	  ]
	}
	,
	{
	  text : 'What is the capital of North Dakota',
	  answers : [
	  	{text : 'Fargo'}, 
	    {text : 'Bismarck', correct : true},
	    {text : 'Grand Forks'},
	    {text : 'Minot'}
	  ]
	}
	,
	{
	  text : 'What is the capital of South Dakota',
	  answers : [
	  	{text : 'Sioux Falls'}, 
	    {text : 'Rapid City'},
	    {text : 'Brookings'},
	    {text : 'Pierre', correct : true}
	  ]
	}
	,
	{
	  text : 'What is the capital of Arizona',
	  answers : [
	  	{text : 'Phoenix', correct : true},
	    {text : 'Tucson'}, 
	    {text : 'Scottsdale'},
	    {text : 'Mesa'}
	  ]
	}
	,
	{
	  text : 'What is the capital of California',
	  answers : [
	  	{text : 'San Francisco'}, 
	    {text : 'San Diego'},
	    {text : 'Sacramento', correct : true},
	    {text : 'Los Angeles'}
	  ]
	}
	,
	{
	  text : 'What is the capital of Washington',
	  answers : [
	  	{text : 'Dupont'}, 
	    {text : 'Seattle'},
	    {text : 'Olympia', correct : true},
	    {text : 'Tacoma'}
	  ]
	}
 ]
for(var i=0; i<questions.length; i++){
	var $question = $("<div class='question'></div>")
	$question.html(answersHTML(questions[i]))
	$(".questions").append($question)
}
$(".question").append("<div class='overlay' style='display:none'><span></span></div>")

var currentAnswer = 0
$('.answer').on('change',function(event){
var answerCheck = $(this).attr('data-correct')
var overlay = $(this).parent().siblings(".overlay")
var span = overlay.find("span")
	if(answerCheck == 'true'){
		span.html("&check;")
		score++
		$(".score").html("Your score is" + (score/questions.length)*100+'%')
	}

	else{
		span.html("&times;")
		overlay.addClass("red")
	}

	overlay.show()

	console.log("Your score is", score, "outof", questions.length)
})

function answersHTML(question){
  return "<div>"+question.text+"</div>"+question.answers.map(function(answer){
  	console.log(answer)
    return "<label><input type='radio' name='one' class='answer' data-correct="+answer.correct+">"+answer.text+"</label>"
  })
  .join("")
  
}

var score = 0

