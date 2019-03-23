
export default class MovieModel {
  constructor({id, url, title, description}) {
    this.id = id;
    this.url = url;
    this.title = title;
    this.description = description;
  }

  titleOrDescriptionIncludes(string) {
    if (this.title && this.description) {
      return this.title.toUpperCase().includes(string) || this.description.toUpperCase().includes(string);
    }
  }
}