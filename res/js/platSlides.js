var platform = [
"<b>1.0 PERSONAL LIBERTY</b><br>
Individuals should be free to make choices for themselves and must accept responsibility for the consequences of the choices they make. Our support of an individual’s right to make choices in life does not mean that we necessarily approve or disapprove of those choices. No individual, group, or government may initiate force against any other individual, group, or government.",
"<b>1.1 Self-Ownership</b>
<br>
Individuals own their bodies and have rights over them that other individuals, groups, and governments may not violate. Individuals have the freedom and responsibility to decide what they knowingly and voluntarily consume, and what risks they accept to their own health, finances, safety, or life."

]

var slideIndex = 0
carousel();

function carousel(){

	document.getElementById('plat').innerHTML = platform[i]
	slideIndex++
	if slidIndex > platform.length){slideINdex = 1}
	setTimeout(carousel, 5000)

}
