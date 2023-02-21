let docLoc = document.URL;
let brHash = document.getElementById("brand_rep_hash");
try {
  let trimmedLoc = docLoc.replace(docLoc + "/#", "");
  if (trimmedLoc != docLoc + "/#") {
    brHash.value = trimmedLoc;
  } else {
    brHash.value = "";
  }
} catch (error) {
  console.log(error);
}
