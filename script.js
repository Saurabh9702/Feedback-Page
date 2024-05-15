const firebaseConfig = {
    apiKey: "AIzaSyA3qFxbMVoR2UANXAwiZA-VKfIFHhftgX0",
    authDomain: "feedback-form-page.firebaseapp.com",
    databaseURL: "https://feedback-form-page-default-rtdb.firebaseio.com",
    projectId: "feedback-form-page",
    storageBucket: "feedback-form-page.appspot.com",
    messagingSenderId: "307915804808",
    appId: "1:307915804808:web:d3327f362a9eefabc68f3d",
    measurementId: "G-XM0L1H41Y5"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   reference your database
var FeedbackformpageDB = firebase.database().ref('Feedback form page')

document.getElementById('feedbackform').addEventListener('submit', submitform);

function submitform(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
  
    var feedback = getElementVal('feedback');


    // console.log(name, email, feedback);

    saveMessages(name, email,  feedback);

    // enable alert
    document.querySelector(".alert").style.display = "block";

    // remove the alert
    setTimeout( () => {
        document.querySelector(".alert").style.display = "none";
    }, 1000);
}

// save message into firebase

const saveMessages = (name, email,  feedback ) => {
    var newFeedbackformpage = FeedbackformpageDB.push();

    newFeedbackformpage.set({
        name: name,
        email: email,
      
        feedback: feedback,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;

    
};


// DOMContentLoaded event to ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    const emojis = document.querySelectorAll('.emoji');
    let selectedRating = null;

    emojis.forEach(emoji => {
        emoji.addEventListener('click', function() {
            emojis.forEach(e => e.classList.remove('selected'));
            this.classList.add('selected');
            selectedRating = this.dataset.rating;
        });
    });

    // const submitBtn = document.getElementById('submitBtn');
    // submitBtn.addEventListener('click', function() {
    //     const name = document.getElementById('name').value;
    //     const feedback = document.getElementById('feedback').value;

    //     if (!name || !selectedRating || !feedback) {
    //         alert('Please fill out all fields and select a rating.');
    //         return;
    //     }

//         // Add data to Firestore
//         db.collection('feedback').add({
//             name: name,
//             rating: selectedRating,
//             feedback: feedback,
//             timestamp: firebase.firestore.FieldValue.serverTimestamp()
//         }).then(() => {
//             alert('Thank you for your feedback!');
//             // Clear the form after submission
//             document.getElementById('name').value = '';
//             document.getElementById('feedback').value = '';
//             emojis.forEach(e => e.classList.remove('selected'));
//             selectedRating = null;
//         }).catch(error => {
//             console.error('Error adding document: ', error);
//             alert('There was an error submitting your feedback. Please try again.');
//         });
//     });
});

