$(document).ready(function () {

    var body = document.body;
    var friendNames = ["Donnie Darko", "Tyler Durden", "Neo", "Gandalf", "Captain Jack Sparrow"];
    var locationNames = ["Winterfell", "Tatooine", "Mordor", "Hogwarts School of Witchcraft and Wizardry", "Gotham City", "Asgard", "Neverland", "Narnia", "South Park", "Jurassic Park"];
    var weaponNames = ["handgun", "shotgun", "sniper rifle", "AK-47", "bazooka", "grenade", "sword", "knife", "crossbow", "bow staff", "atomic bomb", "shiv", "giant rock", "banana peel", "death stare", "massive laser", "magic wand", "their bare hands", "psychic powers", "annoying song and dance"];

    for (var i = 1; i < 101; i++) {
        var h3 = $('<h3>Accusation ' + i + '</h3>');
        $('body').append(h3);
        var accusationClick = accusationAlert(i);
        h3.click(accusationClick);       
    };

    function accusationAlert(num) {
        return function () {
            var name = num % friendNames.length;
            var location = num % locationNames.length;
            var weapon = num % weaponNames.length;
            
            alert('I accuse ' + friendNames[name] + ', with the ' + weaponNames[weapon] + ' in ' + locationNames[location] + '!');
        };
    };    
});

