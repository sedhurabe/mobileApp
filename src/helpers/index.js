// to convert upperCase
export function toTitleCase(str){
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
} 
// to convert lowerCase
export function toLowerCase(str){
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase());
}

export const addName = {
	'title': 'How we should call your child?',
	'content':'A small river named Duden flows by their place and supplies it with the necessary regelialia'
}

export const addDob = {
	'title': 'What’s their date of birth?',
	'content':'A small river named Duden flows by their place and supplies it with the necessary regelialia'
}

export const addSchool = {
	'title': 'Which School he goes?',
	'content':'A small river named Duden flows by their place and supplies it with the necessary regelialia',
	'checkBox': 'For a better experience we would like to share some details to match your school curriculum'
}

export const addGrade = {
	'title': 'What grade is Dylan?',
	'content':'A small river named Duden flows by their place and supplies it with the necessary regelialia',
}

export const addCurricular = {
	'title': 'Curricular interest',
	'content':'A small river named Duden flows by their place and supplies it with the',
}