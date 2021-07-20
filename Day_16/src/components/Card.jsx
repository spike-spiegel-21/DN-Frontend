const Card = () => {
    const Image = () => {
        return (
            <img src="https://www.blue-frontend.com/assets/images/blog/posts/frontend-love-amsterdam/meme.jpg" alt="" />
        );
    };

    return (
        <div className="card">
            <i>Day 16</i>
            <Image />
            <h2>React Card</h2>
            <p>This is a react card.</p>
        </div>
    )
}

export default Card;