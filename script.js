document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get the input values
    const username = document.getElementById("username").value;
    const walletAddress = document.getElementById("walletAddress").value;

    // Get the current date and calculate the days passed since registration
    const currentDate = new Date();
    const dateRegistered = currentDate.toLocaleDateString();
    const daysSinceRegistration = calculateDaysPassed(dateRegistered);
    const streak = daysSinceRegistration;
    const points = streak; // 1 point for each day

    // Add the new entry to the leaderboard
    addLeaderboardEntry(username, walletAddress, dateRegistered, streak, points);

    // Clear the input fields
    document.getElementById("username").value = "";
    document.getElementById("walletAddress").value = "";
});

// Calculate the number of days passed since the registration date
function calculateDaysPassed(dateRegistered) {
    const regDate = new Date(dateRegistered);
    const currentDate = new Date();
    const diffTime = currentDate - regDate;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert to days
}

function addLeaderboardEntry(username, walletAddress, date, streak, points) {
    const leaderboardTable = document.getElementById("leaderboard").getElementsByTagName('tbody')[0];
    const rowCount = leaderboardTable.rows.length;

    // Create a new row for the leaderboard
    const newRow = leaderboardTable.insertRow(rowCount);

    // Insert cells for the new row
    newRow.insertCell(0).innerText = rowCount + 1;
    newRow.insertCell(1).innerText = username;
    newRow.insertCell(2).innerText = walletAddress;
    newRow.insertCell(3).innerText = date;
    newRow.insertCell(4).innerText = streak;
    newRow.insertCell(5).innerText = points;
}
