import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import { commentsModel } from './CommentModel';
import ICommentsModel from './ICommentsModel';

export default class ExaminationRepository extends VersionableRepository<ICommentsModel, mongoose.Model<ICommentsModel>> {
    constructor() {
        super(commentsModel);
    }

    public async create(query) {
        return await super.create(query);
    }

    public async find() {
        return await super.findAll({}, {}, {});
    }

    public async getOne(query) {
        return await super.findOne(query);
    }

    public async update(query) {
        return await super.update(query);
    }

    public async delete(id) {
        return await super.invalidate(id);
    }
}