interface IArticle {

}

interface ArticleData {
    name: string;
    rating: string | number;
    author: string;
}

class Article implements IArticle {
    private _name: string;
    private _rating: string | number;
    private _author: string;

    constructor (articleData: ArticleData) {
        this._name = articleData.name;
        this._rating = articleData.rating;
        this._author = articleData.author;
    }

    public get name () {
        return this._name;
    }

    public get rating () {
        return this._rating;
    }

    public get author () {
        return this._author;
    }
}

export { Article };
export type { ArticleData };
