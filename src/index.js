module.exports = function toReadable (number) {
    let result = '';
  const humanNumber = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7:'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty'
    }
    let s = Math.floor(number / 100);
    let d = Math.floor((number - s * 100) / 10);
    let n =  number - s * 100 - d * 10 
    let sRes, dRes, nRes;
    for(let i in humanNumber) {
        
        if(s == i) {
          sRes = `${humanNumber[i]} hundred`
        }
        if(d == i || d == 0) {
          if(d == 0) {
            dRes = ''
          }
          else {
            if(d == 8) {
              dRes = `${humanNumber[i]}y`
            }
            else if(d == 5) {
              dRes = 'fifty'
            }
            else if(d == 4) {
                dRes = 'forty'
            }
            else if(d == 3) {
              dRes = 'thirty'
            }
            else if(d == 2) {
              dRes = 'twenty'
            }
            else if( d == 1) {
                if(number.toString().length > 2) {
                    let i = +number.toString().slice(1,3)
                    dRes = humanNumber[i]
                }
                else {
                    let i = number
                    dRes = humanNumber[i]
                }
            }
            else {
              dRes = `${humanNumber[i]}ty`
            }
          }
          
        }
        if(n == i || n == 0) {
          if(n == 0) {
            nRes = '';
          }
          else {
            nRes = `${humanNumber[i]}`
          }
        }
        
    }


    result = `${sRes} ${dRes} ${nRes}`
    if(number.toString().length == 3) {
        if(+number.toString().slice(1,3) > 10 && +number.toString().slice(1,3) < 20) {
          result = `${sRes} ${dRes}`
        }
        else{
          result = `${sRes} ${dRes} ${nRes}`
        }
    }
    else if(number.toString().length == 2) {
      if(number > 9 && number < 20) {
        
        result = `${dRes}`
      }
      else {
        result = `${dRes} ${nRes}`
      }
      
    }
    else {
      result = nRes
    }
  
    return number === 0 ? 'zero' : result.replace(/ {1,}/g," ").trim()
}
