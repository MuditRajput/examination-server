import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import { questionModel } from './QuestionModel';
import IQuestionModel from './IQuestionModel';

export default class QuestionRepository extends VersionableRepository<IQuestionModel, mongoose.Model<IQuestionModel>> {
    constructor() {
        super(questionModel);
    }

    public async create(exam) {
        return await super.create(exam);
    }

    public async countExams() {
        return await super.count({});
    }

    public async find(query) {
        return await super.findAll(query, {}, {});
    }

    public async getOne(query) {
        return await super.findOne(query);
    }

    public async update(exam) {
        return await super.update(exam);
    }

    public async delete(id) {
        return await super.invalidate(id);
    }
}