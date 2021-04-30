import * as mongoose from 'mongoose';
import VersionableRepository from '../versionable/VersionableRepository';
import { discussionModel } from './DiscussionModel';
import IDiscussionModel from './IDiscussionModel';

export default class DiscussionRepository extends VersionableRepository<IDiscussionModel, mongoose.Model<IDiscussionModel>> {
    constructor() {
        super(discussionModel);
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