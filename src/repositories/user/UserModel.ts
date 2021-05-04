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
 *   resultsGETResponse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *         example: Results fetched successfully
 *       data:
 *         type: array
 *         items:
 *          $ref: '#/definitions/result'
 *       status:
 *         type: string
 *         example: success
 *   resultGETResponse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *         example: Results fetched successfully
 *       data:
 *         $ref: '#/definitions/result'
 *       status:
 *         type: string
 *         example: success
 *   questionPOSTResponse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *         example: Questions Created successfully
 *       data:
 *         $ref: '#/definitions/questionInData'
 *       status:
 *         type: string
 *         example: success
 *   examinationPOSTResponse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *         example: Examination Created successfully
 *       data:
 *         $ref: '#/definitions/examination'
 *       status:
 *         type: string
 *         example: success
 *   examinationPUTResponse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *         example: Examination Updated successfully
 *       data:
 *         $ref: '#/definitions/examination'
 *       status:
 *         type: string
 *         example: success
 *   questionPUTResponse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *         example: Question updated successfully
 *       data:
 *         $ref: '#/definitions/Question'
 *       status:
 *         type: string
 *         example: success
 *   questionGETResponse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *         example: Questions fetched successfully
 *       data:
 *         type: array
 *         items:
 *           $ref: '#/definitions/Question'
 *       status:
 *         type: string
 *         example: success
 *   examsGETResponse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *         example: Examination fetched successfully
 *       data:
 *         type: array
 *         items:
 *           $ref: '#/definitions/examination'
 *       status:
 *         type: string
 *         example: success
 *   questionDELETEResponse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *         example: Question deleted successfully
 *       data:
 *         type: object
 *       status:
 *         type: string
 *         example: success
 *   examinationDELETEResponse:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *         example: Examination deleted successfully
 *       data:
 *         type: object
 *       status:
 *         type: string
 *         example: success
 *   questionInData:
 *     type: object
 *     properties:
 *       questions:
 *         type: array
 *         items:
 *           $ref: '#/definitions/Question'
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
 *   CREATEQuestionInput:
 *     type: object
 *     required:
 *       - originalId
 *       - questionList
 *     properties:
 *       originalId:
 *         type: string
 *         example: a3d36dsv75vs4d5cccf4
 *         description: id of the questionSet
 *       questionList:
 *         type: array
 *         items:
 *           $ref: '#/definitions/Question'
 *   SUBMITQuestionInput:
 *     type: object
 *     required:
 *       - questionSet
 *       - answerList
 *     properties:
 *       questionSet:
 *         type: string
 *         example: a3d36dsv75vs4d5cccf4
 *         description: id of the questionSet
 *       answerList:
 *         type: array
 *         items:
 *           $ref: '#/definitions/AnswersList'
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
 *   PUTQuestionInput:
 *     type: object
 *     required:
 *       - originalId
 *       - dataToUpdate
 *     properties:
 *       originalId:
 *         type: string
 *         example: aad7asd90DFf8a0sd
 *         description: Original Id of the question
 *       dataToUpdate:
 *         $ref: '#/definitions/Question'
 *   PUTExaminationInput:
 *     type: object
 *     required:
 *       - originalId
 *       - dataToUpdate
 *     properties:
 *       originalId:
 *         type: string
 *         example: aad7asd90DFf8a0sd
 *         description: Original Id of the question
 *       dataToUpdate:
 *         $ref: '#/definitions/examination'
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
 *   Question:
 *     type: object
 *     properties:
 *       question:
 *         type: string
 *         example: this is a question
 *         description: Question
 *       correctOption:
 *         type: array
 *         example: ["2"]
 *       options:
 *         type: array
 *         example: ["2","4"]
 *       marks:
 *         type: number
 *         example: 2
 *         description: marks of each question
 *   examination:
 *     type: object
 *     properties:
 *       originalId:
 *         type: string
 *         example: 6066e8d09622b71a645134a9
 *         description: Id of exam
 *       subject:
 *         type: string
 *         example: Physics
 *       description:
 *         type: string
 *         example: Physics exam for 11th class
 *       maximumMarks:
 *         type: number
 *         example: 20
 *         description: marks of questions
 *       time:
 *         type: number
 *         example: 30
 *         description: marks of questions
 *       maximumAttempts:
 *         type: number
 *         example: 2
 *         description: maximum number of attempts
 *   AnswersList:
 *     type: object
 *     properties:
 *       aad7asd90DFf8a0sd:
 *         type: array
 *         example: ["2"]
 *         description: Question id and submitted answer
 *       as33sd90DFf8a0sd:
 *         type: array
 *         example: ["4","6"]
 *         description: Question id and submitted answer
 *       a7d2kj34js333ds22sd:
 *         type: array
 *         example: ["8"]
 *         description: Question id and submitted answer
 *   result:
 *     type: object
 *     properties:
 *         originalId:
 *           type: string
 *           example: aad7asd90DFf8a0sd
 *           description: Original Id of the user
 *         userId:
 *           type: string
 *           example: aad7asd90DFf8a0sd
 *           description: Original Id of the user
 *         _id:
 *           type: string
 *           example: aad7asd90DFf8a0sd
 *           description: Id at time of create or update
 *         questionSet:
 *           type: string
 *           example: Physics
 *           description: Subject
 *         result:
 *           type: object
 *           properties:
 *             as87jhg34s9d3vsdh7:
 *               type: string
 *               example: [0,["4"],["9"],1]
 *               description: obtained marks, submitted answer, correct answer, maximum marks
 *             a78esd88s7e873sds3x:
 *               type: string
 *               example: [1,["9","11"],["9","11"],1]
 *               description: obtained marks, submitted answer, correct answer, maximum marks
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
