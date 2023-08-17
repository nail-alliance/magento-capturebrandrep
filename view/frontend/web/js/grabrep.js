window.onload = () => {
  let docLoc = document.URL;
  let brHash = document.getElementById("brand_rep_hash");
  try {
    let trimmedLoc = docLoc.split("#");

    if (trimmedLoc[1] != docLoc) {
      brHash.value = trimmedLoc[1];
    } else {
      brHash.value = "";
    }
    console.log("rep", brHash.value, trimmedLoc[1]);
  } catch (error) {
    console.log(error);
  }
};
