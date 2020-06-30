export class Email {
  constructor(id, from, to, subject, body, date, isReaded, tag, attachements) {
    this.id = id;
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.body = body;
    this.date = date;
    this.isReaded = isReaded;
    this.tag = tag;
    this.attachements = attachements;
  }
}
