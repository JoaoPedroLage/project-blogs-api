const { DataTypes } = require('sequelize');

const Attributes = {
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Categories',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'BlogPosts',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
};

module.exports = (sequelize) => {
    const PostCategory = sequelize.define(
      'PostCategory',
      Attributes,
      { tableName: 'PostsCategories' },
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(
      models.Category,
      { foreignKey: 'post_id', otherKey: 'category_id', through: PostCategory, as: 'postId' },
    );

    models.Category.belongsToMany(
      models.BlogPost,
      { foreignKey: 'category_id', otherKey: 'post_id', through: PostCategory, as: 'categoryId' },
    );
  };

  return PostCategory;
};