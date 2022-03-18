const { BlogPost } = require('../models');
const { PostCategory } = require('../models');
const { Category } = require('../models');

const create = async ({ title, content, categoryIds, id }) => {
  const categories = await Category.findAll();
  const Ids = categories.map((category) => category.id);
  let foundCategory;

  categoryIds.forEach((element) => { if (Ids.includes(element) === false) foundCategory = false; });

  if (foundCategory === false) return null;

  const newPost = await BlogPost.create({ title, content, userId: id });
  const postId = newPost.id;

  categoryIds.forEach(
    async (categoryId) => PostCategory.create({ postId, categoryId }),
  );

  return newPost;
};

const findAll = async (id, displayName, email, image) => {
  const allPosts = await BlogPost.findAll();
  const categoryById = await Category.findByPk(id);
  const resultArray = allPosts.map((post) => {
    const postObj = post.dataValues;

    postObj.user = { id, displayName, email, image };
    const category = categoryById.dataValues;
    postObj.categories = [{ id: category.id, name: category.name }];

    return postObj; 
  });

  return resultArray;
};

const findByPk = async (userData, postId) => {
  const { id, displayName, email, image } = userData;

  const posts = await BlogPost.findAll();
  const Ids = posts.map((post) => post.id);
  
  if (Ids.includes(Number(postId)) === false) return null;

  const post = await BlogPost.findByPk(postId);
  const categoryById = await Category.findByPk(id);

  const postObj = post.dataValues;
  postObj.user = { id, displayName, email, image };

  const category = categoryById.dataValues;
  postObj.categories = [{ id: category.id, name: category.name }];

  return postObj; 
};

const update = async (userData, reqData, postId) => {
  const { id } = userData;
  const verifyUser = await findByPk(userData, postId);
  const category = verifyUser.categories[0];

  if (Number(verifyUser.userId) !== id) return false;

  const { title, content } = reqData;

  await BlogPost.update({ title, content, userId: id }, { where: { id: postId } });

  await PostCategory.update({ postId, categoryId: category.id }, { where: { postId } });

  const updatedPost = { 
    title,
    content, 
    userId: id, 
    categories: [{ id: category.id, name: category.name }], 
  };

  return updatedPost;
};

module.exports = {
  create,
  findAll,
  findByPk,
  update,
};