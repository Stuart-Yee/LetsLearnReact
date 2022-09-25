class DiceRoller {

    static rollPolyDice(sides, num=1, add=0){
        let sum = 0;
        for (var i = 1; i <= num; i++){
            var result = Math.floor(Math.random()*sides) + 1;
            sum+= result;
        }
        sum += add;
        return sum;
    }

    static diceNotationParse(dice){
        let dice_str = dice.replace(/ /g, "").replace("D", "d");
        let d = dice_str.indexOf("d");
        let plus = dice_str.indexOf("+");
        let num = dice_str.slice(0,d);
        let sides = 0;
        let add = 0;
        if (plus != -1) {
            sides = dice_str.slice(d+1, plus);
            add = dice_str.slice(plus+1);
        } else {
            sides = dice_str.slice(d+1);
        }
        return {number: num, die: sides, add: add}
    }

    static rollDieCode(dieCode) {
        let dice_parse = this.diceNotationParse(dieCode);
        return this.rollPolyDice(dice_parse.die, dice_parse.number, dice_parse.add);
    }
}

export default DiceRoller;