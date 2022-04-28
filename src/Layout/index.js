import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Helpers/Home";
import NewDeck from "../Helpers/NewDeck";
import DeckDetails from "../Helpers/DeckDetails";
import Study from "../Helpers/Study";
import EditDeck from "../Helpers/EditDeck";
import NewCard from "../Helpers/NewCard";
import EditCard from "../Helpers/EditCard";

function Layout() {
    return (
        <div className="container">
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/decks/new">
                        <NewDeck />
                    </Route>
                    <Route exact path="/decks/:deckId">
                        <DeckDetails />
                    </Route>
                    <Route path="/decks/:deckId/study">
                        <Study />
                    </Route>
                    <Route path="/decks/:deckId/edit">
                        <EditDeck />
                    </Route>
                    <Route path="/decks/:deckId/cards/new">
                        <NewCard />
                    </Route>
                    <Route path="/decks/:deckId/cards/:cardId/edit">
                        <EditCard />
                    </Route>
                    <NotFound />
                </Switch>
            </div>
        </div>
    );
}

export default Layout;
