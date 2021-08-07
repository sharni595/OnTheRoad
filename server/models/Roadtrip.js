const { Schema, model } = require('mongoose');
const stopSchema = require('./Stop');
const expenseSchema = require('./Expense');
const imageSchema = require('./Image');

const roadtripSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        destination: {
            type: String,
            required: true,
            trim: true
        },
        playlist: {
            type: String,
            trim: true
        },
        images: [imageSchema],
        expenses: [expenseSchema],
        stops: [stopSchema],
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],

    }
);

module.exports = roadtripSchema;