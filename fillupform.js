 function submitForm(event) {
            event.preventDefault();

            const firstName = document.getElementById("first-name").value;
            const lastName = document.getElementById("last-name").value;
            const middleName = document.getElementById("middle-name").value;
            const studentNumber = document.getElementById("student-number").value;
            const course = document.getElementById("course").value;
            const dateAttended = document.getElementById("date-attended").value;
            const subjects = document.getElementById("subjects").value;

            const queryParams = `?first-name=${encodeURIComponent(firstName)}&last-name=${encodeURIComponent(lastName)}&middle-name=${encodeURIComponent(middleName)}&student-number=${encodeURIComponent(studentNumber)}&course=${encodeURIComponent(course)}&date-attended=${encodeURIComponent(dateAttended)}&subjects=${encodeURIComponent(subjects)}`;

            // Redirect to the summary page with query parameters
            window.location.href = `attendance_summary.html${queryParams}`;
        }