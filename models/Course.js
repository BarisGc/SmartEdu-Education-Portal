const mongoose = require('mongoose');
const slugify = require('slugify')
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    slug: {
        type: String,
        unique: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

CourseSchema.pre('validate', function (next) {
    this.slug = slugify(this.name, {
        lower: true, // küçük harfe çevirir
        strict: true // sadece stringleri alır, ":" gibi özel karakterleri atar.
    })
    next(); // sıradaki middleware'a geçer...
})
const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;