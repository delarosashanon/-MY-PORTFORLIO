function goBack() {
    window.history.back();
}

// Retrieve data from the URL query parameters
const params = new URLSearchParams(window.location.search);
const firstName = params.get("first-name");
const lastName = params.get("last-name");
const middleName = params.get("middle-name");
const studentNumber = params.get("student-number");
const course = params.get("course");
const dateAttended = params.get("date-attended");
const subjects = params.get("subjects");

// Display the summary on the page
document.getElementById("summary-content").innerHTML = `
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Middle Name:</strong> ${middleName}</p>
    <p><strong>Student Number:</strong> ${studentNumber}</p>
    <p><strong>Course:</strong> ${course}</p>
    <p><strong>Date Attended:</strong> ${dateAttended}</p>
    <p><strong>Subjects:</strong> ${subjects}</p>
`;