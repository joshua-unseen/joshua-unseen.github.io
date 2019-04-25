var portfolio = {
    works: [
        {
            name: "Hangman",
            author: "joshua-unseen",
            repoName: "hangman",
        },
        {
            name: "Star Wars Combat",
            author: "joshua-unseen",
            repoName: "unit-4-game",
        },
        {
            name: "Tacky Trivia",
            author: "joshua-unseen",
            repoName: "trivia-game",
        },
        {
            name: "Gif Grabber",
            author: "joshua-unseen",
            repoName: "peanutbutter",
        },
        {
            name: "R/P/S Smackdown",
            author: "joshua-unseen",
            repoName: "rps-multiplayer",
        },
        {
            name: "Color Spectron-O-Meter",
            author: "zenwattage",
            repoName: "project1",
        },
    ],

    BuildView() {
        for (var i = 0; i < this.works.length; i++) {
            var name = this.works[i].name;
            var repoURL = "https://github.com/" + this.works[i].author + "/" + this.works[i].repoName;
            var liveURL = "https://" + this.works[i].author + ".github.io/" + this.works[i].repoName;
            var imgURL = "assets/images/" + this.works[i].repoName + ".png";

            var repoButton = $("<a href=\"" + repoURL + "\" target=\"_blank\" class=\"btn btn-primary\">").text("Go to Repo");
            var liveButton = $("<a href=\"" + liveURL + "\" target=\"_blank\" class=\"btn btn-primary\">").text("Go to Site");
            var buttonDiv = $("<div class=\"button-div d-flex justify-content-around mb-5\">").append(repoButton).append(liveButton);

            var newCard = $("<div class=\"card position-relative p-item\">");
            
            $("<img src=\"" + imgURL + "\" class=\"card-img\" alt=\"" + name + "\">").appendTo(newCard);
            $("<div class=\"card-img-overlay d-flex flex-column align-items-stretch justify-content-end pb-2 pl-0 pr-0\">").html(
                "<div class=\"container bg-danger text-light text-center pb-1\">" + name + "</div>"
            ).prepend(buttonDiv).appendTo(newCard);
            $("#portfolio-div").prepend(newCard);
        }
    }
}