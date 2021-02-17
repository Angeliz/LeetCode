// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

//76.43
var canConstruct = function(ransomNote, magazine) {
 
     var  ransomNote =  ransomNote.split('')  ,  magazine =  magazine.split('') 
    
    for (var i = 0 ; i < ransomNote.length  ; i++ ){
         
             if (  CutMagazine ( ransomNote[i] , magazine  )  ==false  )
                    return false ; 
    }
    
      
    return true ; 
    
    
    
};


var CutMagazine  = function (  r , m ){
    
      for (var i = 0 ; i < m.length  ; i++ ){
                  if( m[i] ==r  ) 
                  {  m[i] = null ;  return true;}
                   
                 
            
      }
    
      return false ; 
    
    
    
};