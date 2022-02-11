import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  hat: {
    type: String,
  },
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  author: {
    type: String,
  },
  img: {
    type: String,
  },
  publishDate: {
    type: Date,
    default: Date.now(),
  },
  link: {
    type: String,
  },
  active: {
    type: Boolean,
  },

});
const NewsSchema = mongoose.model('News', newsSchema);

export default NewsSchema;
