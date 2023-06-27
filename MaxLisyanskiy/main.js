const contactList = {
  mom: "+79111111111",
  dad: "+79222222222",

  add(key, value) {
    return (this[key] = value);
  },

  delete(key) {
    if (this[key]) {
      delete this[key];
      console.log("Delete success!");
    } else {
      console.error("Delete failed!");
    }
  },
};

contactList.add("brother", "+79333333333");

contactList.delete("brother");
contactList.delete("sister");

contactList.mom = "+79123456789";
