class pencilBox {
  constructor(
    name,
    size,
    color,
    zipLengthLeft,
    zipLengthRight,
    zipLengthTop,
    zipOpen
  ) {
    this.name = name;
    this.size = size;
    this.color = color;
    this.zipLength = {
      left: zipLengthLeft,
      right: zipLengthRight,
      top: zipLengthTop,
    };
    this.zipOpen = zipOpen;
  }

  toggleZip(zipStatus) {
    this.zipOpen = zipStatus;
  }
}

export default pencilBox;
