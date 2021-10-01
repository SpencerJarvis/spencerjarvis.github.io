//Returns shape dependent on User Input

function getShape()
{   
    do
    {
        //Prompts for a number
        var originalNumber = parseFloat(prompt("Silly Jellyfish would like a number between 0 and 10: "));

        //Makes the number positive if negative
        if (originalNumber < 0)
        {
            originalNumber = originalNumber * -1;
        }

        //Rounds number
        var numSides = originalNumber.toFixed();

        //Determines which Polygon
        if (numSides==1)
        {
            alert("A polygon with "+numSides+" side(s) is a henagon.")
        }
        else if (numSides==2)
        {
            alert("A polygon with "+numSides+" side(s) is a digon.")
        }
        else if (numSides==3)
        {
            alert("A polygon with "+numSides+" side(s) is a trigon.")
        }
        else if (numSides==4)
        {
            alert("A polygon with "+numSides+" side(s) is a tetragon.")
        }
        else if (numSides==5)
        {
            alert("A polygon with "+numSides+" side(s) is a pentagon.")
        }
        else if (numSides==6)
        {
            alert("A polygon with "+numSides+" side(s) is a hexagon.")
        }
        else if (numSides==7)
        {
            alert("A polygon with "+numSides+" side(s) is a heptagon.")
        }
        else if (numSides==8)
        {
            alert("A polygon with "+numSides+" side(s) is a octagon.")
        }
        else if (numSides==9)
        {
            alert("A polygon with "+numSides+" side(s) is a enneagon.")
        }
        else if (numSides==10)
        {
            alert("A polygon with "+numSides+" side(s) is a decagon.")
        }

        //If the input is not applicable
        else if (isNaN(numSides))
        {
            alert("Please enter a valid numeric value between 0 and 10.")
        }
        else
        {
            alert("Please enter a valid numeric value between 0 and 10.")
        }

    }
    while(validateEntry(numSides))  

}

//Validation
function validateEntry(numSides)
{
    if (isNaN(numSides) || (.5 > numSides) || (10.5 < numSides))
    {
        return 1==1;
    }
}