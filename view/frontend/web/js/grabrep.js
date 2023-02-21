window.onload = () => {
  let docLoc = document.URL;
  let brHash = document.getElementById("brand_rep_hash");
  try {
    if (docLoc == "https://gelishmorgantaylor.co.uk/customer/account/create/") {
      let trimmedLoc = docLoc.replace(
        "https://gelishmorgantaylor.co.uk/customer/account/create/#",
        ""
      );
      if (
        trimmedLoc !=
        "https://gelishmorgantaylor.co.uk/customer/account/create/"
      ) {
        brHash.value = trimmedLoc;
      } else {
        brHash.value = "";
      }
    } else if (
      docLoc == "https://nailtechsupply.com/customer/account/create/"
    ) {
      let trimmedLoc = docLoc.replace(
        "https://nailtechsupply.com/customer/account/create/#",
        ""
      );
      if (
        trimmedLoc !=
        "https://gelishmorgantaylor.co.uk/customer/account/create/"
      ) {
        brHash.value = trimmedLoc;
      } else {
        brHash.value = "";
      }
      console.log("Rep", docLoc, trimmedLoc);
    }
  } catch (error) {
    console.log(error);
  }
};
