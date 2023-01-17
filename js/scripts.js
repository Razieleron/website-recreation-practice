window.addEventListener("load", function() {
  
  const favoriteThings = document.querySelector("h1");
  favoriteThings.remove();

  // const htmlElementName = document.createElement("HTML TAG INFO");
  // 

  const body = document.querySelector("body");

  const h1 = document.createElement("h1");
  body.after(h1);
  h1.append("Webpage Recreation Practice");

  const p1 = document.createElement("p");
  h1.after(p1);
  p1.append("The HTML of this webpage was created with JavaScript.");

  const img = document.createElement("img");
  p1.after(img);
  img.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  img.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  img.setAttribute("style", "width:50%");

  const h1Number2 = document.createElement("h1");
  img.after(h1Number2);
  h1Number2.append("Facts about the Multicolored Tanager");

  
  
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  
  h1Number2.after(ul);
  ul.after(li1);
  li1.after(li2);

  li1.append("It is endemic to the mountains of Colombia.");
  li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");

  const h2 = document.createElement("h2");
  li2.after(h2);
  h2.append("Source");

  const a = document.createElement("a");
  h2.after(a);
  a.append("Wikipedia");
  a.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");


  


});















