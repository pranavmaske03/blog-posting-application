import React from 'react';
import { PostForm, Container } from '../components';

function AddPost() {
  return (
    <Container>
      <div className="flex justify-center items-center min-h-[80vh]">
        <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Create a New Post</h2>
          <PostForm />
        </div>
      </div>
    </Container>
  );
}

export default AddPost;
