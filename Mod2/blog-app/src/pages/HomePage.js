import AddPostForm from "../components/AddPostForm";
import PostsList from "../components/PostsList";



export default function HomePage() {
    return (
        <main>
            <h1>Home Page Component</h1>
            <AddPostForm />
            <PostsList />
        </main>
    );
}