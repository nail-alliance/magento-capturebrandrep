window.onload = () => {
  let docLoc = document.URL;
  let brHash = document.getElementById("brand_rep_hash");
 
  try {
     let trimmedLoc = docLoc.split("#");
 
     if (trimmedLoc[1] != docLoc) {
       
       brHash.value = trimmedLoc[1];
 
       if(brHash.value == trimmedLoc[1]) {
         localStorage.setItem("brand_rep", trimmedLoc[1]);
       }
 
     } else {
       brHash.value = "";
     }
 
     let storedBrandRep = localStorage.getItem("brand_rep");
 
     if (storedBrandRep !== null && storedBrandRep !== undefined) {
       brHash.value = storedBrandRep;
     }
 
  } catch (error) {
     console.log(error);
  }
 };