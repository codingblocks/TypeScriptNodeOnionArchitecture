class Answer{
    private _id: string;
    private _answerDisplay: string;
    private _answerValue: any;
    private _questions: Array<Question>;

    constructor(id: string, answerDisplay: string, answerValue: any, questions: Array<Question>){
        this._id = id;
        this._answerDisplay = answerDisplay;
        this._answerValue = answerValue;
        this._questions = questions;
    }


	public get questions(): Array<Question> {
		return this._questions;
	}

	public set questions(value: Array<Question>) {
		this._questions = value;
	}

    public addQuestion(question: Question){
        this._questions.push(question);
    }

    public clearQuestions(){
        this._questions.length = 0;
    }
    
	public get id(): string {
		return this._id;
	}


	public get answerDisplay(): string {
		return this._answerDisplay;
	}

	public set answerDisplay(value: string) {
		this._answerDisplay = value;
	}


	public get answerValue(): any {
		return this._answerValue;
	}

	public set answerValue(value: any) {
		this._answerValue = value;
	}
    
}