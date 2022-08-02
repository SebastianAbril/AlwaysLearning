/* Tengo una muñeca grande , dentro de esa muñeca hay otra muñeca
mas pequeña, y adentro hay otra mas pequeña y asi sucesivamente hasta
que hay una muy pequeña que tiene un chocolate adentro. */

function processDoll(doll){
    // 1) Base case
    if( we have found the piece of chocolate){
        return "Yum yum"
         //2) Recursive call to itself
    } else if (there are no more dolls){
        return "No chocolate here"
    }
    else {
        processDoll(the smaller doll)
    }
   
}