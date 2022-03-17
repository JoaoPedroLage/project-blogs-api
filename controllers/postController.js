const postService = require('../services/postService');

const create = async (req, res, _next) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  
  try {
    const post = await postService.create({ title, content, categoryIds, id });
    
    if (!post) return res.status(400).json({ message: '"categoryIds" not found' });
    
    return res.status(201).json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Erro: ${error.message}` });
  }
};

const findAll = async (req, res, _next) => {
  const { user: { id, displayName, email, image } } = req;

  try {
    const post = await postService.findAll(id, displayName, email, image);

    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Erro: ${error.message}` });
  }
};

const findByPk = async (req, res, _next) => {
  const { user } = req;

  try {
    const post = await postService.findByPk(user, req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Erro: ${error.message}` });
  }
};

const update = async (req, res, _next) => {
  const { user } = req;

  try {
    const post = await postService.update(user, req.body, req.params.id);

    if (post === false) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: `Erro: ${error.message}` });
  }
};

module.exports = {
  create,
  findAll,
  findByPk,
  update,
};
