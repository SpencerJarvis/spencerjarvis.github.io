        function add(){
                    //Prompts for a number
        var x = parseInt(prompt("Silly Jellyfish would like a number between 0 and 10: "));

        //Makes the number positive if negative
        if (x < 0)
        {
            x = x * -1;
        }

        //Rounds number
        var num = Math.round(x);
        alert(num);

        }
