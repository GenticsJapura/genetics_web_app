class Article {
  constructor(id, title, text, coverImage, date, dataInsertedDate) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.coverImage = coverImage;
    this.date = date;
    this.dataInsertedDate = dataInsertedDate;
  }
}

module.exports = Article;
