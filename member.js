function skillsMember() {
    var skills = [];
    var skills = document.getElementsByClassName("skills")[0].getElementsByTagName("li");
    var skillsArray = [];
    for (var i = 0; i < skills.length; i++) {
        skillsArray.push(skills[i].textContent);
    }
    return skillsArray;
}