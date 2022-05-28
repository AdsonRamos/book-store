class BookEntity {
  public _id: string
  public name: String
  public description: String
  public author: String
  public sbn: String
  public stock: Number

  constructor(_id: string, name: string, description: String, author: String, sbn: String, stock: Number) {
    this._id = _id
    this.name = name
    this.description = description
    this.author = author
    this.sbn = sbn
    this.stock = stock
  }
}

export {
  BookEntity
}