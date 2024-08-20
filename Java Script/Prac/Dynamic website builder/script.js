function CreateCard(title, cname, views, months, duration, thumbnail, imagedesc) {
    let viewstr
    if (views < 1000000) {
        viewstr = views / 1000 + "K"
    } else if (views > 1000000) {
        viewstr = views / 1000000 + "M"
    } else {
        viewstr = views / 1000 + "K"
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="${imagedesc}">
                <span class="duration">${duration}</span>
            </div>
            <div class="text">
                <div class="title">${title}</div>
                <div class="stats">
                    <li>${cname}</li>
                    <li>${viewstr} views</li>
                    <li>${months} months ago</li>
                </div>
            </div>
        </div>`
    document.querySelector(".container").insertAdjacentHTML("beforeend",html)
}
CreateCard("JavaScript Interview Questions | Sigma Web Development Course - Tutorial #83", "CodeWithHarry", 70000, 7, "21:07", "https://i.ytimg.com/vi/Vwxs9YJWsx4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbLIHV7SeiDCL7viZJ4ltmBTantw", "Interview Questions Thumbnail")