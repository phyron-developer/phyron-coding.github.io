
    
    
    // About settimeout design 

    // setTimeout(() => {
    //     document.getElementById('welcome').style.display = 'none';
    //     document.getElementById('mainContent').style.display = 'block';
    // }, 3000); // 3 seconds delay
    
    
    const btnshow = document.getElementById('toggle-button');
    const  showaside= document.getElementById('aside-left');
    btnshow.addEventListener('click', function(){
    showaside.style.display='block';
    showaside.style.transition='5s'
    })
    const btnclose = document.getElementById('Closebtn');
    const hideaside = document.getElementById('aside-left');
    btnclose.addEventListener('click', function(){
    hideaside.style.display='none';
    })

    // Select the dark and light theme links
    const darkLink = document.getElementById('dark');
    const lightLink = document.getElementById('light');

    // Function to apply dark theme
    darkLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    document.body.style.backgroundColor = 'black'; 
    document.body.style.color = 'black'; 
    });

    // Function to apply light theme
    lightLink.addEventListener('click', function(event) {
    event.preventDefault();
    document.body.style.backgroundColor = 'white'; 
    document.body.style.color = 'gray';
    }); 

    // About close feedback-form or show 

    const feedbackLink = document.getElementById('showfeedback');
    const feedbackBox = document.querySelector('.feedback-box');
    const closeButton = document.getElementById('btnclosefeedback');

    // Show feedback box
    feedbackLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        feedbackBox.style.display = 'block'; 
    });

    // Hide feedback box
    closeButton.addEventListener('click', function() {
        feedbackBox.style.display = 'none'; 
    });

    const btnshareshow = document.getElementById('sharebtnshow');
    const showcon = document.getElementById('sharecon');
    const btnClose = document.getElementById('shareclose');

    // Show feedback box
    btnshareshow.addEventListener('click', function(event) {
        event.preventDefault(); 
        showcon.style.display = 'block'; 
    });

    // Hide feedback box
    btnClose.addEventListener('click', function() {
        showcon.style.display = 'none'; 
    });


    // ABOUT ACCORDION DESIGN 


    // const accordions = document.querySelectorAll('.accordion');
    // accordions.forEach(acc => {
    //     acc.addEventListener('click', function() {
    //         this.classList.toggle('active');
    //         const panel = this.nextElementSibling;
    //         if (panel.style.display === "block") {
    //             panel.style.display = "none";
    //         } else {
    //             panel.style.display = "block";
    //         }
    //     });
    // });


    // Get references to the necessary elements
    const showCommentBtn = document.getElementById('showbtncomment');
    const commentContainer = document.querySelector('.comment-container');
    const closeBtn = document.querySelector('.comment-tittle .fa-xmark');

    // Show comment container
    showCommentBtn.addEventListener('click', function(event) {
        event.preventDefault();
        commentContainer.style.display = 'block';
    });

    // Hide comment container
    closeBtn.addEventListener('click', function() {
        commentContainer.style.display = 'none';
    });