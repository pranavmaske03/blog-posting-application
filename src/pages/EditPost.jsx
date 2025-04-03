import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from '../appwrite/config';
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug)
                .then((post) => {
                    if (post) {
                        setPost(post);
                    } else {
                        setError("Post not found.");
                    }
                })
                .catch(() => setError("Failed to load the post."))
                .finally(() => setLoading(false));
        } else {
            navigate('/');
        }
    }, [slug, navigate]);

    if (loading) {
        return (
            <div className="text-center text-gray-600 py-8">
                Loading post details...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 py-8">
                {error}
            </div>
        );
    }

    return post ? (
        <div className='py-8'>
            <Container>
                <h1 className="text-3xl font-bold text-center mb-6">Edit Post</h1>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null;
}

export default EditPost;
