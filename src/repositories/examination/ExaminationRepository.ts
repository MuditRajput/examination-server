import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import { examinationModel } from './ExaminationModel';
import IExaminationModel from './IExaminationModel';

export default class ExaminationRepository extends VersionableRepository<IExaminationModel, mongoose.Model<IExaminationModel>> {
    constructor() {
        super(examinationModel);
    }

    public async create(exam) {
        return await super.create(exam);
    }

    public async countExams() {
        return await super.count({});
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