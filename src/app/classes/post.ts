export class Post {
    slug: string;
    title: string;
    datePosted: string;
    authorName: string;
    headerImageUrl: string;
    bodyText: string;
    tags: string[];

    constructor(data) {
        this.slug = data.slug;
        this.title = data.title;
        this.datePosted = data.datePosted;
        this.authorName = data.authorName;
        this.headerImageUrl = data.headerImageUrl;
        this.bodyText = data.bodyText;
        this.tags = data.tags;
    }
}