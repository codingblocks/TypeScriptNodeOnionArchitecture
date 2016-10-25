var Answer = (function () {
    function Answer(id, answerText, answerValue, questions) {
        this._id = id;
        this._answerText = answerText;
        this._answerValue = answerValue;
        this._questions = questions;
    }
    Object.defineProperty(Answer.prototype, "questions", {
        get: function () {
            return this._questions;
        },
        set: function (value) {
            this._questions = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Answer.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Answer.prototype, "answerText", {
        get: function () {
            return this._answerText;
        },
        set: function (value) {
            this._answerText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Answer.prototype, "answerValue", {
        get: function () {
            return this._answerValue;
        },
        set: function (value) {
            this._answerValue = value;
        },
        enumerable: true,
        configurable: true
    });
    return Answer;
}());
//# sourceMappingURL=Answer.js.map