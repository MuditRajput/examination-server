import * as mongoose from 'mongoose';
import UserSchema from './UserSchema';
import IUserModel from './IUserModel';

export const userSchema = new UserSchema({
    collection: 'user',
});

// definitons of swaggerUI
/**
 * @swagger
 * definitions:
 *   ProfileResponse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *         example: Profile Fetched Successfully
 *       data:
 *         $ref: '#/definitions/User'
 *       status:
 *         type: string
 *         example: success
 *   userPOSTResponse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *         example: Trainee Created Successfully
 *       data:
 *         $ref: '#/definitions/User'
 *       status:
 *         type: string
 *         example: success
 *   userPUTResponse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *         example: Trainee Updated Successfully
 *       data:
 *         $ref: '#/definitions/User'
 *       status:
 *         type: string
 *         example: success
 *   userGETResponse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *         example: Trainee fetched Successfully
 *       data:
 *         $ref: '#/definitions/User'
 *       status:
 *         type: string
 *         example: success
 *   LoginResponse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *         example: User logged in successfully
 *       data:
 *         $ref: '#/definitions/Token'
 *       status:
 *         type: string
 *         example: success
 *   Token:
 *     type: object
 *     properties:
 *       token:
 *         type: string
 *         example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJTdWNjZXNzaXZlIFRlY2hub2xvZ2llcyIsImF1ZCI6Ind3dy5zdWNjZXNzaXZlLmluIiwic3ViIjoiTGVhcm4gYW5kIEltcGxlbWVudCIsImVtYWlsIjoiaGVhZC50cmFpbmVyQHN1Y2Nlc3NpdmUudGVjaCIsImlhdCI6MTYwNjQwMzI2OCwiZXhwIjoxNjA2NDA0MTY4fQ.0qVPgXSpMpJLK5TqwFTjzb5ADN589PmPOrk30Uuoado"
 *   Error:
 *     type: object
 *     properties:
 *       error:
 *         type: string
 *         example: Authentication Failed
 *       message:
 *         type: string
 *         example: User is Invalid
 *       status:
 *         type: integer
 *         example: 403
 *       timestamp:
 *         type: string
 *         example: "2020-11-25T04:58:44.674Z"
 *   usersGETResponse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *         example: trainees fetched successfully
 *       data:
 *         $ref: '#/definitions/userWithCount'
 *       status:
 *         type: string
 *         example: success
 *   userWithCount:
 *     type: object
 *     properties:
 *        totalCount:
 *          type: integer
 *          example: 4
 *        UsersList:
 *          type: array
 *          items:
 *            $ref: '#/definitions/User'
 *   userDELETEResonse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *         example: User Deleted Successfully
 *       data:
 *         type: object
 *       status:
 *         type: string
 *         example: success
 *   loginInput:
 *     type: object
 *     required:
 *       - email
 *       - password
 *     properties:
 *       email:
 *         type: string
 *         example: new.email@successive.tech
 *       password:
 *         type: string
 *         example: something
 *   CREATEInput:
 *     type: object
 *     required:
 *       - email
 *       - password
 *       - name
 *       - role
 *     properties:
 *       email:
 *         type: string
 *         example: user.email@successive.tech
 *         description: Email of the user
 *       name:
 *         type: string
 *         example: FirstName LastName
 *         description: Name of the user
 *       role:
 *         type: string
 *         example: role
 *         description: Role of the user
 *       password:
 *         type: string
 *         example: PasswordHere
 *         description: Password created by user
 *   PUTInput:
 *     type: object
 *     required:
 *       - originalId
 *       - dataToUpdate
 *     properties:
 *       originalId:
 *         type: string
 *         example: aad7asd90DFf8a0sd
 *         description: Original Id of the user
 *       dataToUpdate:
 *         $ref: '#/definitions/dataToUpdate'
 *   dataToUpdate:
 *     type: object
 *     properties:
 *         email:
 *           type: string
 *           example: user.email@successive.tech
 *           description: Email of the user
 *         name:
 *           type: string
 *           example: FirstName LastName
 *           description: Name of the user
 *         role:
 *           type: string
 *           example: head-trainer
 *           description: Role of the user
 *         password:
 *           type: string
 *           example: PasswordHere
 *           description: Password created by user
 *   User:
 *     type: object
 *     properties:
 *         originalId:
 *           type: string
 *           example: aad7asd90DFf8a0sd
 *           description: Original Id of the user
 *         id:
 *           type: string
 *           example: aad7asd90DFf8a0sd
 *           description: Id at time of create or update
 *         email:
 *           type: string
 *           example: head.trainer@successive.tech
 *           description: Email of the user
 *         name:
 *           type: string
 *           example: Head Trainer
 *           description: Name of the user
 *         role:
 *           type: string
 *           example: head-trainer
 *           description: Role of the user
 *         password:
 *           type: string
 *           example: 87ad9f39n88.auyasidasdsda12kxnb38sn22239exd.23as9cd
 *           description: Password created by user
 *         createdAt:
 *           type: string
 *           example: "2020-11-25T04:58:44.674Z"
 *           description: Date at which the user is created
 */


export const userModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>
(
    'User',
    userSchema,
    'User',
    true,
);
