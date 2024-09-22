import React, { useEffect, useState } from "react";
import blogPostStyle from "../styles/BlogPost.module.css";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import { fetchPostById, login } from '../services/apiClient';

export default function BlogPost() {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<{ title: string; content: string } | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            if (!id) {
                setError('Post ID is missing');
                setLoading(false);
                return;
            }

            try {
                console.log('Logging in to get token');
                const token = await login('raynor.monserrate@example.org', 'password'); // Replace with actual credentials if yours differ
                console.log('Fetching post with ID:', id);
                const fetchedPost = await fetchPostById(token, id);
                console.log('Fetched post:', fetchedPost);
                setPost(fetchedPost);
            } catch (error) {
                console.error('Error fetching post:', error);
                setError('Failed to fetch post');
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <>
            <Header />
            <div className={blogPostStyle.blogPost}>
                <Link to="/">Back to list of blog posts</Link>
                <h1>Blog Post</h1>
                <h3 className={blogPostStyle.title}>{post.title}</h3>
                <p className={blogPostStyle.content}>{post.content}</p>
            </div>
        </>
    );
}