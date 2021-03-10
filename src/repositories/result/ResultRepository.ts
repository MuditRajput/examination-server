import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import IResultModel from './IResultModel';
import { resultModel } from './ResultModel';

export default class ResultRepository extends VersionableRepository<IResultModel, mongoose.Model<IResultModel>> {
    constructor() {
        super(resultModel);
    }

    public async resultCreate(result) {
        return super.create(result);
    }

    public async getOne(query) {
        return super.findOne(query);
    }

    public async getAll(userId) {
        return super.findAll({userId}, {}, {});
    }

    public async resultUpdate(result) {
        return super.update(result);
    }
}