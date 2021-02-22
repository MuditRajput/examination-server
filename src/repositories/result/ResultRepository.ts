import * as mongoose from 'mongoose';
import { resultModel } from './ResultModel';

export default class ResultRepository<D extends mongoose.Document> {
    private model;
    constructor() {
        this.model = resultModel;
    }

    public async create(result): Promise<D> {
        const model = new this.model(result);
        return await model.save();
    }

    public async findOne(originalId): Promise<D> {
        return await this.model.findOne(originalId);
    }


    public async update(result): Promise<D> {
        const { originalId, ...rest } = result;
        const previous = this.findOne(originalId);
        const newResult = {...previous, ...rest};
        return await this.create(newResult);
    }
}