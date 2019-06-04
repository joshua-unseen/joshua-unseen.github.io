var portfolio = {
    works: [
        {
            name: "Hangman",
            author: "joshua-unseen",
            repoName: "hangman",
            liveSite: true
        },
        {
            name: "Star Wars Combat",
            author: "joshua-unseen",
            repoName: "unit-4-game",
            liveSite: true
        },
        {
            name: "Tacky Trivia",
            author: "joshua-unseen",
            repoName: "trivia-game",
            liveSite: true
        },
        {
            name: "Gif Grabber",
            author: "joshua-unseen",
            repoName: "peanutbutter",
            liveSite: true
        },
        {
            name: "R/P/S Smackdown",
            author: "joshua-unseen",
            repoName: "rps-multiplayer",
            liveSite: true
        },
        {
            name: "Color Spectron-O-Meter",
            author: "joshua-unseen",
            repoName: "project1",
            liveSite: true
        },
        {
            name: "LIRI (node app)",
            author: "joshua-unseen",
            repoName: "liri-node-app",
            liveSite: false
        },
        {
            name: "Word Guess (node app)",
            author: "joshua-unseen",
            repoName: "constructor-word-guess",
            liveSite: false
        },
        {
            name: "Bamazon (node app)",
            author: "joshua-unseen",
            repoName: "bamazon",
            liveSite: false
        },
        {
            name: "Friend Finder",
            author: "joshua-unseen",
            repoName: "friend-finder",
            liveSite: "https://warm-earth-86290.herokuapp.com/"
        },
        {
            name: "Eat-da-Burgers",
            author: "joshua-unseen",
            repoName: "burger",
            liveSite: "https://thawing-sands-20598.herokuapp.com/"
        }
    ],

    BuildView() {
        for (var i = 0; i < this.works.length; i++) {
            var name = this.works[i].name;
            var repoURL = "https://github.com/" + this.works[i].author + "/" + this.works[i].repoName;
            if (this.works[i].liveSite === true) {
                var liveURL = "https://" + this.works[i].author + ".github.io/" + this.works[i].repoName;
            }
            else {
                var liveURL = this.works[i].liveSite;
            }
            var imgURL = "assets/images/" + this.works[i].repoName + ".png";

            var repoButton = $("<a href=\"" + repoURL + "\" target=\"_blank\" class=\"btn btn-primary\">").text("Go to Repo");
            var liveButton = $("<a href=\"" + liveURL + "\" target=\"_blank\" class=\"btn btn-primary\">").text("Go to Site");
            if (this.works[i].liveSite) {
                var buttonDiv = $("<div class=\"button-div d-flex justify-content-around mb-5\">").append(repoButton).append(liveButton);
            }
            else {
                var buttonDiv = $("<div class=\"button-div d-flex justify-content-around mb-5\">").append(repoButton);
            }

            var newCard = $("<div class=\"card position-relative p-item\">");
            
            $("<img src=\"" + imgURL + "\" class=\"card-img\" alt=\"" + name + "\">").appendTo(newCard);
            $("<div class=\"card-img-overlay d-flex flex-column align-items-stretch justify-content-end pb-2 pl-0 pr-0\">").html(
                "<div class=\"container bg-danger text-light text-center pb-1\">" + name + "</div>"
            ).prepend(buttonDiv).appendTo(newCard);
            $("#portfolio-div").prepend(newCard);
        }
    }
}