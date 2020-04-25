const courses = [
  {
    id: 1,
    title: "Course 1",
    slug: "course-1",
    authorId: 1,
    categoryId: 1,
  },
  {
    id: 2,
    title: "Course 2",
    slug: "course-2",
    authorId: 1,
    categoryId: 1,
  },
  {
    id: 3,
    title: "Course 3",
    slug: "course-3",
    authorId: 1,
    categoryId: 2,
  },
  {
    id: 4,
    title: "Course 4",
    slug: "course-4",
    authorId: 1,
    categoryId: 3,
  },
];

const authors = [
  { id: 1, name: "Author 1" },
  { id: 2, name: "Author 2" },
  { id: 3, name: "Author 3" },
];

const categories = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
  categories,
};
