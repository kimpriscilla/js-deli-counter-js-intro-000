function takeANumber (currentLine, name){
 currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}
function nowServing (katzDeliLine){
  if (katzDeliLine.length > 1){
    return`Currently serving ${katzDeliLine.shift()}.`
  }else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (line){
var arr =[]
if (line.length > 0){
  for (let i=0; i<line.length; i++){
    arr.push(`${i+1}. ${line[i]}`)
  }
  return `The line is currently: ${arr.join(', ')}`
}else {
  return "The line is currently empty."
}
}