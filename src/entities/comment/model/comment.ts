interface CommentData {
    name: string;
    rating: string | number;
    author: string;
}

class Comment {
    private _author: string;

    constructor (articleData: CommentData) {
        this._author = articleData.author;
    }

    public get author () {
        return this._author;
    }
}

export { Comment };
export type { CommentData };
