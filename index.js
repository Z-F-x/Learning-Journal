import { postsData } from './data.js'

const blogPostsSection = document.getElementById('blog-posts-section')
const viewMoreBtn = document.getElementById('view-more-btn')
const header = document.getElementById("header")
const headerArticle = document.getElementById("header-article")
const headerEventlistenerDiv = document.getElementById("header-eventlistener")

const aboutMeBtn = document.getElementById("about-me-link-btn")
let numRendered = 3;

const breakpoint = window.matchMedia('(min-width: 1085px)');

aboutMeBtn.addEventListener('click', (e)=>{
    if(e.target){
        headerArticle.classList.remove('header-article-placeholder')
        headerArticle.classList.remove('header-article')
        headerArticle.classList.add('about-me')
        header.style.backgroundImage = "none"
        header.style.height = "auto"
        headerArticle.innerHTML = `
            <div class="about-me-top-section">
                <div class="about-me-picture-container">
                    <img src="images/image 18.png" class="about-me-picture">
                </div>
                <div>
                   <h1>Hi there! My name is Roku and welcome to my learning journal.</h1>
                   <p>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
                </div>   
            </div>
            <h3>How I stay committed to learning</h2>
            <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.</p>
            <p>While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.</p>
            <h3>How I got started</h2>
            <p>I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.</p>
            <p>That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
            <h4 class="recent-posts">Recent posts</h4>

        `
        headerArticle.style.color = "black"
        headerArticle.style.justifyContent = "center"
        headerArticle.style.alignItems = "center"
        // headerArticle.classList.remove('header-article')
        // headerArticle.classList.remove('header-article-expand')
        console.log('Clicked')

    } 

}, {once: true})

headerEventlistenerDiv.addEventListener('click', (e)=>{
    if(e.target){
        headerArticle.classList.remove('header-article-placeholder')
        headerArticle.classList.add('header-article')
        header.style.backgroundImage = "none"
        headerArticle.style.color = "black"
        headerArticle.style.justifyContent = "center"
        headerArticle.style.alignItems = "center"
        header.style.height = "auto"

        headerArticle.innerHTML = `

            <h2>JULY 23, 2022</h2>
            <h1>My new journey as a bootcamp student.</h1>
            <p>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
            <div class="header-article-img-container">
                <img src="images/article-image.png" alt="Dimly lit study room with silver metal laptop computer" class="home-article-img">
            </div>
            <h3 class="header-article-h3">How I stay committed to learning</h3>
            <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.</p>
            <p>While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.</p>
            <h3 class="header-article-h3">How I got started</h3>
            <p>I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.</p>
            <p>That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
            <h4 class="recent-posts">Recent posts</h4>

        `
        // headerArticle.classList.remove('header-article')
        // headerArticle.classList.remove('header-article-placeholder')
        console.log('Clicked')
    } 
}, {once: true})

viewMoreBtn.addEventListener('click', (e)=>{
    if(e.target){
        blogPostsSection.innerHTML = ``
        numRendered += 3;
        render(numRendered)
    }
})


//Breakpoints:
function handleViewportChange(breakpoint) {
    if (breakpoint.matches) {
        blogPostsSection.innerHTML = ``
        numRendered += 3;
        render(numRendered)
    } else {
      // The viewport is less than 768px wide
      // Execute code for the smaller viewport here
      render(numRendered)
    }
}
breakpoint.addEventListener(handleViewportChange(breakpoint))
handleViewportChange(breakpoint);



function render(numRendered){  
    const firstThreePosts = postsData.slice(0, numRendered);
    firstThreePosts.forEach(posts => {
    blogPostsSection.innerHTML += `
    <div class="blog-post-container">
        <img src="${posts.image}" class="post-img"></img>

            <h2>${posts.Date}</h2>
            <h1>${posts.headline}</h1>
            <p>${posts.paragraph}</p>

    </div>
    `
            });
}


