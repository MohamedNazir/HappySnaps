import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res, next) => {
  console.log("Received GET request");
  try {
    const postsMessages = await postMessage.find();
    console.log(postsMessages);
    res.status(200).json(postsMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res, next) => {
  console.log("Received POST request");
  console.log(JSON.stringify(req.body));
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
