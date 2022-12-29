<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE-edge" />
    <meta name="viewport" content="width-device-width, initial-scale=1.0" />
    <title>Arrays in JS</title>
  </head>
  <body>
    Arrays
    <script>
      /* Arrays in JS */

      let arrayItem = "book";

      const books = ["pens", arrayItem, 4, true];

      books[books.length] = "pencil";

      books[13] = 3.8;

      console.log(books[5]);

      console.log(books);
      console.log(books.length);
      console.log(books[1]);

      /* Array Methods */
      let pencilBoxContents = ["pen", "pencil", "eraser"];

      pencilBoxContents.shift();

      pencilBoxContents.forEach(function (item) {
        item = `<li>${item}</li>`;
        console.log(item);
      });

      let shortItems = pencilBoxContents.find(function (item) {
        if (item.length <= 5) {
          return item;
        }
      });

      console.log(shortItems);

      console.log(pencilBoxContents.join(" | "));
    </script>
  </body>
</html>
