class Article {
  constructor(
    id,
    memberID,
    memberName,
    title,
    description,
    text,
    coverImage,
    rate
  ) {
    this.id = id;
    this.memberID = memberID;
    this.memberName = memberName;
    this.title = title;
    this.description = description;
    this.text = text;
    this.coverImage = coverImage;
    this.rate = rate;
  }
}

module.exports = Article;
