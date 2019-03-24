A wolf in sheep's clothing

Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples

warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]) === 

warnTheSheep(["sheep", "sheep", "wolf"]) === "Pls go away and stop eating my sheep"

 var sheep = [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep] ;
 warnsheep(sheep) {
     for(var i =0; i <= sheep.length; i++){
         if(sheep[i] === "wolf") {
             retrun "Pls go away and stop eating my sheep"
         }
         else if(sheep[i] === "sheep") {
             warningNow(){
                 if arry i,i = sheep wolf Return  "Oi! Sheep number [i]! You are about to be eaten by a wolf!"
                 else 
                 continture loop.



function warnTheSheep(queue) {
    return queue.reverse()[0] === "wolf" 
    ? "Pls go away and stop eating my sheep" 
    : `Oi! Sheep number ${queue.reverse().indexOf('wolf')}! You are about to be eaten by a wolf!`
} 


        
             }
         }
         }
     }
 }