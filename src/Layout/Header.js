import React from "react";

//Bootstrap 4 wouldn't work out - dropped most recent version of 5 in to get some style, I will clean up later on for portfolio purposes!
function Header() {
    return (
        <header className="jumbotron bg-dark">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
            <div className="container text-white">
                <h1 className="display-4">Flashcard-O-Matic</h1>
                <p className="lead">Discover The Flashcard Difference.</p>
            </div>
        </header>
    );
}

export default Header;