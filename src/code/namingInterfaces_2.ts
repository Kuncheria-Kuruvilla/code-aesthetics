class JPEGImage {
  imageDetails: string;
  saveImage(fileSaver: FileSaver) {
    fileSaver.save(this.imageDetails);
  }
}
