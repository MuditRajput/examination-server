import * as mongoose from 'mongoose';
import { DocumentQuery } from 'mongoose';

export default class VersionableRepository <D extends mongoose.Document, M extends mongoose.Model<D>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }

    public model: M;

    constructor(model) {
        this.model = model;
    }
    public async create(data: any): Promise<D> {
        const id = VersionableRepository.generateObjectId();
        const model = new this.model({
            ...data,
            _id: id,
            originalId: id,
        });
        return await model.save();
    }
    public async count(query: any): Promise<number> {
        const finalQuery = {deletedAt: undefined, ...query};
        return await this.model.countDocuments(finalQuery);
    }
    public findOne(query: any): DocumentQuery<D, D> {
        const finalQuery = {deletedAt: undefined, ...query};
        return this.model.findOne(finalQuery);
    }
    public findAll(query: any, projection: any, options: any): DocumentQuery<D[], D> {
        const finalQuery = {deletedAt: undefined, ...query};
        return this.model.find(finalQuery, projection, options);
    }
    public invalidate(id: string): DocumentQuery<D, D> {
        const query: any = { originalId: id, deletedAt: { $exists: false} };
        const data: any = { deletedAt: Date.now() };
        return this.model.updateOne(query, data);
    }
    public async update(data: any): Promise<D> {
        const previous = await this.findOne({ originalId: data.originalId, deletedAt: undefined});
        if (!previous) {
            return undefined;
        }
        await this.invalidate(data.originalId);
        const newData = Object.assign(JSON.parse(JSON.stringify(previous)), data.dataToUpdate);
        newData._id = VersionableRepository.generateObjectId();
        delete newData.deletedAt;
        const model = new this.model(newData);
        return await model.save();
    }
}
