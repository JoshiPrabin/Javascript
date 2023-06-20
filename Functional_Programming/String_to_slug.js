function urlSlug(title) {
    return title.toLowerCase().split(" ").filter(substr => substr != "").join("-");
  }
  
  console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));