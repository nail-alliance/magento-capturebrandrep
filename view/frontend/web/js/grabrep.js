window.onload = () => {
  let docLoc = document.URL;
  let brHash = document.getElementById("brand_rep_hash");
  try {
    let trimmedLoc = docLoc.replace(
      "https://gelishmorgantaylor.co.uk/customer/account/create/#",
      ""
    );
    if (
      trimmedLoc != "https://gelishmorgantaylor.co.uk/customer/account/create/"
    ) {
      brHash.value = trimmedLoc;
    } else {
      brHash.value = "";
    }
  } catch (error) {
    console.log(error);
  }
};
