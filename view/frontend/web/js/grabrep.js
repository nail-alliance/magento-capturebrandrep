window.onload = () => {
  let docLoc = document.URL;
  let trimmedLoc = docLoc.replace(
    "https://gelishmorgantaylor.co.uk/customer/account/create/#",
    ""
  );
  document.getElementById("brand_rep_hash").value = trimmedLoc;
};
