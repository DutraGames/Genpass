
/**
*
* @param togle1 bolean
* @param togle2 bolean
* @param togle3 bolean
* @param size number
* @returns string
*
*/

export const GeneratePass = (togle1: boolean,togle2: boolean,togle3:boolean, size:number) => {

    let chars = ""
    let password = ""

    if (!togle1 && !togle2 && !togle3) return

    if (togle1 && !togle2 && !togle3) {
        chars = "0123456789"
    }
    else if (!togle1 && togle2 && !togle3) {
        chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    }
    else if (!togle1 && !togle2 && togle3) {
        chars = "_#&@$£€"
    }
    else if (togle1 && togle2 && !togle3) {
        chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    }
    else {
        chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_#&@$£€"
    }



    for (var i = 0, n = chars.length; i < size; ++i) {
        password += chars.charAt(Math.floor(Math.random() * n))

    }

    return password
}
