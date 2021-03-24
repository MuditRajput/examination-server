import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import { ExamprogressModel } from './ExamprogressModel';
import IExamprogressModel from './IExamprogressModel';

export default class ExaminationRepository extends VersionableRepository<IExamprogressModel, mongoose.Model<IExamprogressModel>> {
    constructor() {
        super(ExamprogressModel);
    }

    public async create(progressData) {
        return await super.create(progressData);
    }

    public async find() {
        return await super.findAll({}, {}, {});
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