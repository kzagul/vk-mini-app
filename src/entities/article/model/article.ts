interface ArticleData {
    id: number | string;
    title: string;
    score: string | number;
    by: string;
    time: Date | number | string
    type: string
    url: string
    kids: number[] | string[]
}

class Article {
    private readonly _id: number | string;
    private _title: string;
    private _score: string | number;
    private _by: string;
    private _time: Date | number | string
    private _type: string;
    private _url: string;
    private _kids: number[] | string[];


    constructor (articleData: ArticleData) {
        this._id = articleData.id
        this._title = articleData.title;
        this._score = articleData.score;
        this._by = articleData.by;
        this._time = articleData.time;
        this._type = articleData.type;
        this._url = articleData.url;
        this._kids = articleData.kids;
    }

    public get id () {
        return this._id;
    }

    public get title () {
        return this._title;
    }

    public get score () {
        return this._score;
    }

    public get by () {
        return this._by;
    }

    public get time () {
        return this._time;
    }

    public get type () {
        return this._type;
    }

    public get url () {
        return this._url;
    }

    public get kids () {
        return this._kids;
    }
}

export { Article };
export type { ArticleData };
