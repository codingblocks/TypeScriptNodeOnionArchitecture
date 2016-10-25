class Question{
    private _id: string;
    private _question: string;
    private _answerRequired: boolean;
    private _allowMultipleAnswers: boolean;
    private _minAllowedAnswers: number;
    private _maxAllowedAnswers: number;
    private _answerCollection: Array<Answer>;


	constructor(id: string, question: string, answerRequired: boolean, allowMultipleAnswers: boolean, minAllowedAnswers: number, maxAllowedAnswers: number, answerCollection: Array<Answer>) {
		this._id = id;
		this._question = question;
		this._answerRequired = answerRequired;
		this._allowMultipleAnswers = allowMultipleAnswers;
		this._minAllowedAnswers = minAllowedAnswers;
		this._maxAllowedAnswers = maxAllowedAnswers;
		this._answerCollection = answerCollection;
	}
    

	public get id(): string {
		return this._id;
	}

	public get question(): string {
		return this._question;
	}

	public set question(value: string) {
		this._question = value;
	}

	public get answerRequired(): boolean {
		return this._answerRequired;
	}

	public set answerRequired(value: boolean) {
		this._answerRequired = value;
	}

	public get allowMultipleAnswers(): boolean {
		return this._allowMultipleAnswers;
	}

	public set allowMultipleAnswers(value: boolean) {
		this._allowMultipleAnswers = value;
	}

	public get minAllowedAnswers(): number {
		return this._minAllowedAnswers;
	}

	public set minAllowedAnswers(value: number) {
		this._minAllowedAnswers = value;
	}

	public get maxAllowedAnswers(): number {
		return this._maxAllowedAnswers;
	}

	public set maxAllowedAnswers(value: number) {
		this._maxAllowedAnswers = value;
	}

	public get answerCollection(): Array<Answer> {
		return this._answerCollection;
	}

	public set answerCollection(value: Array<Answer>) {
		this._answerCollection = value;
	}
}