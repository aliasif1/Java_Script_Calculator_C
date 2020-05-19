var current_val = ''
//var a 
//var b
var op
function newVal(num){
    //num = Number(num)
    //current_val = document.getElementById('displayelement').value
    current_val = current_val + num
    document.getElementById('displayelement').value = current_val    
}

function clearDisplay(){
    current_val = ''
    op = undefined
    document.getElementById('displayelement').value = current_val
}

function back(){
    current_val = current_val.slice(0,current_val.length - 1)
    document.getElementById('displayelement').value = current_val
}

function add(sign){
    op = sign
    //a = Number(current_val)
    current_val = current_val + sign
    document.getElementById('displayelement').value = current_val
}

function sub(sign){
    op = sign
    //a = Number(current_val)
    current_val = current_val + sign
    document.getElementById('displayelement').value = current_val
}

function mul(sign){
    op = sign
    //a = Number(current_val)
    current_val = current_val + sign
    document.getElementById('displayelement').value = current_val
}

function eq(){
    data = current_val.split(op)
    val_a = Number(data[0])
    val_b = Number(data[1])
    if(op == '+'){
        current_val = val_a + val_b
        current_val = current_val.toString()
    }
    else if(op == '-'){
        current_val = val_a - val_b
        current_val = current_val.toString()
    }
    else if(op == '*'){
        current_val = val_a * val_b
        current_val = current_val.toString()
    }
    document.getElementById('displayelement').value = current_val

}