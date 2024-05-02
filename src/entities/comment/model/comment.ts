interface CommentData {
    id: number | string;
    by: string;
    kids: number[] | string[];
    parent: number | string;
    text: string;
    time: Date | number | string;
    type: string;
}

class Comment {
    private readonly _id: number | string;
    private _by: string;
    private _kids: number[] | string[];
    private _parent: number | string;
    private _text: string;
    private _time: Date | number | string;
    private _type: string;

    constructor (commentData: CommentData) {
        this._id = commentData.id;
        this._by = commentData.by;
        this._kids = commentData.kids
        this._parent = commentData.parent
        this._text = commentData.text
        this._time = commentData.time
        this._type = commentData.type
    }

    public get id () {
        return this._id;
    }

    public get by () {
        return this._by;
    }

    public get kids () {
        return this._kids;
    }

    public get parent () {
        return this._parent;
    }

    public get text () {
        return this._text;
    }

    public get time () {
        return this._time;
    }

    public get type () {
        return this._type;
    }
}

export { Comment };
export type { CommentData };
