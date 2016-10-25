var Question = (function () {
    function Question(id, question, answerRequired, allowMultipleAnswers, minAllowedAnswers, maxAllowedAnswers, availableAnswers) {
        this._id = id;
        this._question = question;
        this._answerRequired = answerRequired;
        this._allowMultipleAnswers = allowMultipleAnswers;
        this._minAllowedAnswers = minAllowedAnswers;
        this._maxAllowedAnswers = maxAllowedAnswers;
        this._availableAnswers = availableAnswers;
    }
    Object.defineProperty(Question.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "question", {
        get: function () {
            return this._question;
        },
        set: function (value) {
            this._question = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "answerRequired", {
        get: function () {
            return this._answerRequired;
        },
        set: function (value) {
            this._answerRequired = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "allowMultipleAnswers", {
        get: function () {
            return this._allowMultipleAnswers;
        },
        set: function (value) {
            this._allowMultipleAnswers = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "minAllowedAnswers", {
        get: function () {
            return this._minAllowedAnswers;
        },
        set: function (value) {
            this._minAllowedAnswers = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "maxAllowedAnswers", {
        get: function () {
            return this._maxAllowedAnswers;
        },
        set: function (value) {
            this._maxAllowedAnswers = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "availableAnswers", {
        get: function () {
            return this._availableAnswers;
        },
        set: function (value) {
            this._availableAnswers = value;
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.addAvailableAnswer = function (answer) {
        this._availableAnswers.push(answer);
    };
    Question.prototype.removeAvailableAnswer = function (answer) {
        // TODO
    };
    Question.prototype.clearAvailableAnswers = function () {
        this._availableAnswers.length = 0;
    };
    return Question;
}());
//# sourceMappingURL=Question.js.map